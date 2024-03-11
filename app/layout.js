import '@styles/globals.css';
import Navbar from '@components/Navbar';
import { ClerkProvider} from '@clerk/nextjs';
import { Footer } from '@components';

export const metadata = {
  title: 'MediaBeast',
  description: 'Moderated Community Application',
};

const RootLayout = ({ children }) => {
  return (
    <ClerkProvider>
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
    </ClerkProvider>
  );
}

export default RootLayout;