import './globals.css';
import { GlobalContextProvider } from '@/utils/rainbowkit.provider';
import { SideBar } from '@/components';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <GlobalContextProvider>
          <SideBar>{children}</SideBar>
        </GlobalContextProvider>
      </body>
    </html>
  );
}
