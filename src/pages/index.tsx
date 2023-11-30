import Image from 'next/image';
import { Inter } from 'next/font/google';
import Index from './Home/Index';
import Footer from '@/app/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <main>
        <Index />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
