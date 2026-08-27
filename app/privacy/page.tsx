import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { LEGAL_ENTITY, CONTACT_EMAIL, MAILING_ADDRESS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy | Full'Tucky",
  description:
    "How Full'Tucky handles the information you share through this website.",
};

export default function Privacy() {
  return (
    <LegalPage title="Privacy Policy" active="/privacy">
      <p>
        This policy explains what information {LEGAL_ENTITY} collects through this website and
        what we do with it. We&apos;ve kept it plain, and it describes how the site actually
        works today.
      </p>

      <h2>What we collect</h2>
      <p>
        The only information we ask you for is what you type into our contact form: your first
        and last name, email address, phone number, business name, and your message. You choose
        what to share, and nothing on this site requires you to create an account.
      </p>
      <p>
        Like most websites, our hosting provider automatically logs basic technical information
        such as IP addresses and browser type as part of serving and securing the site.
      </p>

      <h2>What we don&apos;t collect</h2>
      <p>
        This site does not take payments, so we never receive or store card or bank details. We
        don&apos;t run advertising trackers, and we don&apos;t sell or rent your information to
        anyone.
      </p>

      <h2>How we use it</h2>
      <p>
        We use what you send us to respond to your message and to follow up about your question,
        order, or inquiry. That&apos;s it.
      </p>

      <h2>Who we share it with</h2>
      <p>
        We share information only with the service providers that make this site run &mdash; for
        example, our website host &mdash; and only as needed to operate it. We may also disclose
        information where the law requires it.
      </p>

      <h2>Cookies</h2>
      <p>
        This site does not use advertising or analytics cookies. Any cookies present are those
        strictly necessary for the site to function.
      </p>

      <h2>How long we keep it</h2>
      <p>
        We keep contact messages only as long as we need them to respond and maintain our
        business records.
      </p>

      <h2>Your choices</h2>
      <p>
        You can ask us what information we hold about you, ask us to correct it, or ask us to
        delete it. Contact us using the details below and we&apos;ll take care of it.
      </p>

      <h2>Children</h2>
      <p>
        This site isn&apos;t directed at children under 13, and we don&apos;t knowingly collect
        information from them.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        If we change how we handle information, we&apos;ll update this page and the &ldquo;last
        updated&rdquo; date above.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about your privacy? Reach us at {CONTACT_EMAIL} or {MAILING_ADDRESS}.
      </p>
    </LegalPage>
  );
}
