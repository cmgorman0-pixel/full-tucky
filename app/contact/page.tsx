import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact | Full'Tucky",
};

export default function Contact() {
  return (
    <div className="max-w-[1440px] mx-auto bg-[var(--cream)]">
      <Header active="/contact" />

      <div className="px-8 md:px-14 pt-14 pb-2 text-center">
        <div className="eyebrow">Get In Touch</div>
        <h1 className="text-5xl mt-2">We&apos;d Love To Hear From You</h1>
      </div>

      <div className="grid md:grid-cols-[1.3fr_1fr] gap-16 px-8 md:px-14 pt-12 pb-24 max-w-[1100px] mx-auto">
        <ContactForm />

        <div>
          <div className="eyebrow">Contact</div>
          <div className="mt-4 text-[15px] leading-loose">
            <div>[YOUR PHONE NUMBER]</div>
            <div>[YOUR EMAIL ADDRESS]</div>
            <div>Louisville, KY</div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
