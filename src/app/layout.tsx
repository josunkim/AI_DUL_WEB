import './globals.css';
import Header from '@/shared/components/Header';
import { Providers } from '@/shared/Providers';

export const metadata = {
  title: 'AI.DUL - 세대를 잇는 정서케어 AI 파트너',
  description: '발달-상담-임상심리 전문가가 개발한 멀티 모달 데이터 기반의 AI 케어 파트너. 아동 성장, 성인 역할, 노인 웰빙을 위한 정서케어 서비스',
  keywords: ['AI 케어', '정서케어', '발달상담', '임상심리', '아동성장', '노인웰빙', 'AI.DUL'],
  authors: [{ name: 'AI.DUL Inc.' }],
  creator: 'AI.DUL Inc.',
  publisher: 'AI.DUL Inc.',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://aidul.com'),
  manifest: '/manifest.json',
  openGraph: {
    title: 'AI.DUL - 세대를 잇는 정서케어 AI 파트너',
    description: '발달-상담-임상심리 전문가가 개발한 멀티 모달 데이터 기반의 AI 케어 파트너',
    url: 'https://aidul.com',
    siteName: 'AI.DUL',
    images: [
      {
        url: '/assets/img/logoImg.png',
        width: 1200,
        height: 630,
        alt: 'AI.DUL 로고',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI.DUL - 세대를 잇는 정서케어 AI 파트너',
    description: '발달-상담-임상심리 전문가가 개발한 멀티 모달 데이터 기반의 AI 케어 파트너',
    images: ['/assets/img/logoImg.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'AI.DUL',
    'mobile-web-app-capable': 'yes',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <head></head>
      <body>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
