'use client';

import { Box, Button, Modal, Typography } from '@mui/material';
import { justifyContent, Stack } from '@mui/system';
import { useEffect, useRef, useState } from 'react';

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
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  const handleAccept = () => {
    window.open(
      'https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EC%84%9C%EB%8C%80%EB%AC%B8%EA%B5%AC%20%EC%9D%B4%ED%99%94%EC%97%AC%EB%8C%80%EA%B8%B8%2052%20%EC%9D%B4%ED%99%94%20%EC%8A%A4%ED%83%80%ED%8A%B8%EC%97%85%20%EC%98%A4%ED%94%88%20%EC%8A%A4%ED%8E%98%EC%9D%B4%EC%8A%A4/place/32588042?c=16.00,0,0,0,dh&isCorrectAnswer=true&placePath=/home?from=map&from=map&fromPanelNum=1&additionalHeight=76&timestamp=202510021859&locale=ko&svcName=map_pcv5&searchText=%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EC%84%9C%EB%8C%80%EB%AC%B8%EA%B5%AC%20%EC%9D%B4%ED%99%94%EC%97%AC%EB%8C%80%EA%B8%B8%2052%20%EC%9D%B4%ED%99%94%20%EC%8A%A4%ED%83%80%ED%8A%B8%EC%97%85%20%EC%98%A4%ED%94%88%20%EC%8A%A4%ED%8E%98%EC%9D%B4%EC%8A%A4&fromPanelNum=1&additionalHeight=76&timestamp=202510011436&locale=ko&svcName=map_pcv5&searchText=%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EC%84%9C%EB%8C%80%EB%AC%B8%EA%B5%AC%20%EC%9D%B4%ED%99%94%EC%97%AC%EB%8C%80%EA%B8%B8%2052%20%EC%9D%B4%ED%99%94%20%EC%8A%A4%ED%83%80%ED%8A%B8%EC%97%85%20%EC%98%A4%ED%94%88%20%EC%8A%A4%ED%8E%98%EC%9D%B4%EC%8A%A4',
    );
    setOpenModal(false);
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_KEY}&libraries=services&autoload=false`;

    script.onload = () => {
      // @ts-expect-error kakao types are not included by default
      const kakao = window.kakao;

      kakao.maps.load(() => {
        if (!mapRef.current) return;

        const map = new kakao.maps.Map(mapRef.current, {
          center: new kakao.maps.LatLng(37.5665, 126.978),
          level: 3,
        });

        const geocoder = new kakao.maps.services.Geocoder();

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

            // 🔔 Marker 클릭 이벤트
            kakao.maps.event.addListener(marker, 'click', () => {
              handleOpenModal(); // React 모달 열기
            });
          }
        });
      });
    };

    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      <Box ref={mapRef} sx={{ minWidth: 200, maxHeight: 600, minHeight: 400, width: '100%', border: '1px solid #ddd' }} />

      {/* 모달 */}
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            borderRadius: 2,
            p: 4,
            boxShadow: 24,
            width: 300,
            textAlign: 'center',
          }}
        >
          <Typography variant='h6' mb={2}>
            외부에서 여시겠습니까?
          </Typography>
          <Stack direction={'row'} justifyContent={'space-around'} spacing={1}>
            <Button variant='contained' color='primary' sx={{ width: '100%' }} onClick={handleAccept}>
              확인
            </Button>
            <Button variant='contained' color='inherit' sx={{ width: '100%' }} onClick={handleCloseModal}>
              취소
            </Button>
          </Stack>
        </Box>
      </Modal>
    </>
  );
}
