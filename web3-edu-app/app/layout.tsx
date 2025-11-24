import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';

export const metadata = {
  title: 'Web3 Edu - Learn Blockchain',
  description: 'Educational platform for Web3 technologies',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="web3-dark-bg">
        {children}
      </body>
    </html>
  );
}