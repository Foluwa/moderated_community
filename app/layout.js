"use client"

import '@styles/globals.css';
import Navbar from '@components/Navbar';
import { Provider as ConnectionProvider } from '../context/connect'
import { ClerkProvider} from '@clerk/nextjs';
import { Footer } from '@components';

const RootLayout = ({ children }) => {
  return (
    <ClerkProvider>
       <ConnectionProvider>
       <html lang='en'>
          <body>
            <div className='main'>
              <div className='gradient' />
            </div>
            <main className='app'>
              <Navbar />
              {children}
              <Footer />
            </main>
          </body>
        </html>
       </ConnectionProvider>

    </ClerkProvider>
  );
}

export default RootLayout;