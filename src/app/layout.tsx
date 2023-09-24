import './globals.css';
import { GlobalContextProvider } from '@/utils/rainbowkit.provider';
import { SideBar } from '@/components';
import { Toaster } from 'react-hot-toast';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <GlobalContextProvider>
          <Toaster />
          <SideBar>{children}</SideBar>
        </GlobalContextProvider>
      </body>
    </html>
  );
}
