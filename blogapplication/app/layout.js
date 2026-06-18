import './globals.css';

export const metadata = {
  title: 'BoxCraft Co. | Wholesale Packaging',
  description: 'A responsive B2B packaging website for premium box manufacturing and wholesale enquiries.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
