import "./globals.css";
import Script from 'next/script';

export const metadata = {
  title: "Baglarpanam | सिद्ध बगलामुखी पूजा एवं तंत्र अनुष्ठान | Nalkheda Mandir",
  description: "बगलामुखी माता सिद्ध मंदिर नलखेड़ा के माध्यम से शत्रु विनाश, कोर्ट केस और व्यापार वृद्धि हेतु सप्रमाण पूजा एवं हवन। 15+ वर्षों का अनुभव।",
  keywords: "baglamukhi mandir nalkheda, baglamukhi puja online, court case puja india, tantra specialist, havan nalkheda",
};

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsappButton from "../components/WhatsappButton";
import Popup from "../components/Popup";

export default function RootLayout({ children }) {
  return (
    <html lang="hi" style={{ scrollBehavior: 'smooth' }}>
      <body>
        <Popup />
        <Navbar />
        {children}
        <Footer />
        <WhatsappButton />
        <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      </body>
    </html>
  );
}
