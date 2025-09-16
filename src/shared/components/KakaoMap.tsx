'use client';

import { Box } from '@mui/system';
import { useEffect, useRef } from 'react';

interface KakaoAddressResult {
  address_name: string;
  address_type: string;
  x: string;
  y: string;
  road_address?: {
    address_name: string;
    region_1depth_name: string;
    region_2depth_name: string;
    region_3depth_name: string;
    road_name: string;
    underground_yn: string;
    main_building_no: string;
    sub_building_no: string;
    building_name: string;
    zone_no: string;
  };
}

type KakaoStatus = 'OK' | 'ZERO_RESULT' | 'ERROR';

export default function KakaoMap() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_KEY}&libraries=services&autoload=false`;

    script.onload = () => {
      // @ts-expect-error kakao types are not included by default
      const kakao = window.kakao;

      kakao.maps.load(() => {
        if (!mapRef.current) return;

        const map = new kakao.maps.Map(mapRef.current, {
          center: new kakao.maps.LatLng(37.5665, 126.978), // 초기 서울 시청 좌표
          level: 3,
        });

        const geocoder = new kakao.maps.services.Geocoder();

        // ✅ 고정 주소(지번 주소 사용)
        const fixedAddress = '대현동 34-91';

        geocoder.addressSearch(fixedAddress, (result: KakaoAddressResult[], status: KakaoStatus) => {
          if (status === 'OK') {
            const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

            const marker = new kakao.maps.Marker({
              map,
              position: coords,
            });

            const infowindow = new kakao.maps.InfoWindow({
              content: `<div style="padding:5px;font-size:12px;width:155px;text-align:center;">이화 스타트업 오픈 스페이스</div>`,
            });
            infowindow.open(map, marker);

            map.setCenter(coords);
          }
        });
      });
    };

    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return <Box ref={mapRef} sx={{ minWidth: 300, maxHeight: 600, minHeight: 400, width: '100%', border: '1px solid #ddd' }} />;
}
