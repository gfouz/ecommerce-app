import './globals.css';

export const metadata = {
  title: 'Giovani Fouz Portfolio.',
  description: 'Giovani Fouz Portfolio of Github projects...',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
