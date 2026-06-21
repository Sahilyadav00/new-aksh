import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import WelcomePopup from "@/components/layout/WelcomePopup";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col">
      <Header />
      <main className="grow max-w-384 mx-auto w-full">{children}</main>
      <Footer />
      <WhatsAppButton />
      <WelcomePopup />
    </div>
  );
}
