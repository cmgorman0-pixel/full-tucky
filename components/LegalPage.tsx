import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LEGAL_LAST_UPDATED } from "@/lib/site";

export default function LegalPage({
  title,
  active,
  children,
}: {
  title: string;
  active: string;
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-[1440px] mx-auto bg-[var(--cream)]">
      <Header active={active} />

      <div className="max-w-3xl mx-auto px-8 pt-14 pb-4">
        <div className="eyebrow">Legal</div>
        <h1 className="text-5xl mt-2">{title}</h1>
        <p className="text-[13px] text-[var(--espresso-2)] mt-4">
          Last updated {LEGAL_LAST_UPDATED}
        </p>
      </div>

      <div className="max-w-3xl mx-auto px-8 pb-24 legal-body">{children}</div>

      <Footer />
    </div>
  );
}
