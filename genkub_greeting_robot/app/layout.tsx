import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GENKUB Greeting Robot',
  description: '차세대 AI 인사 로봇',
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
