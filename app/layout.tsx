import './globals.css';

export const metadata = {
  title: 'ios9999',
  description: 'Apple ID Auto Delivery'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
