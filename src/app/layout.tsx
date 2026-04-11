import type { Metadata } from 'next';
import '@/styles/tokens.css';
import '@/styles/globals.css';
import '@/styles/home.css';
import '@/styles/map.css';
import '@/styles/notices.css';
import '@/styles/stores.css';
import '@/styles/about.css';

export const metadata: Metadata = {
  title: '화서시장 공식몰',
  description: '전통시장 공식몰 + 점포 탐색형 판매 사이트',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
