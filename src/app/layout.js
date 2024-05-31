// import { Inter } from "next/font/google";
import { Poppins, Inter } from 'next/font/google';
import "./globals.css";


const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Halaman utama",
  description: "Halaman ini menampilkan data spesies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
