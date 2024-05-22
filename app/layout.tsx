import { montserrat } from './ui/fonts';
import './ui/global.css';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        Esto es parte del layout
        {children}
        <footer className='py-10 felx justify-center items-center'>
          Hecho con 💗 por la gente
        </footer>
      </body>
    </html>
  );
}
