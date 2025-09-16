'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='flex min-h-screen items-center justify-center bg-gray-50'>
      <div className='text-center'>
        <h1 className='mb-4 text-9xl font-bold text-gray-300'>404</h1>
        <h2 className='mb-4 text-3xl font-bold text-gray-900'>페이지를 찾을 수 없습니다</h2>
        <p className='mb-8 text-gray-600'>요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.</p>
        <div className='space-x-4'>
          <Link href='/' className='inline-block rounded-md bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none'>
            홈으로 돌아가기
          </Link>
          <button
            onClick={() => window.history.back()}
            className='inline-block rounded-md border border-gray-300 bg-white px-6 py-3 text-gray-700 hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none'
          >
            이전 페이지
          </button>
        </div>
      </div>
    </div>
  );
}
