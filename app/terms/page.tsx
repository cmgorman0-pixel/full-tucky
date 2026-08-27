import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { LEGAL_ENTITY, CONTACT_EMAIL, MAILING_ADDRESS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "The terms that govern use of the Full'Tucky website, based in Louisville, Kentucky.",
};

export default function Terms() {
  return (
    <LegalPage title="Terms &amp; Conditions" active="/terms">
      <p>
        These terms govern your use of the Full&apos;Tucky website. By using the site, you agree
        to them. {LEGAL_ENTITY} operates this site from Louisville, Kentucky.
      </p>

      <h2>Use of this site</h2>
      <p>
        You may browse this site for your own personal, non-commercial use. Please don&apos;t
        use it in any way that damages it, interferes with anyone else&apos;s use of it, or
        breaks the law.
      </p>

      <h2>Products and pricing</h2>
      <p>
        Product listings on this site are currently previews. Online ordering and checkout are
        not yet available, and no prices shown here are final or binding. Product details,
        availability, and pricing may change at any time without notice.
      </p>

      <h2>Our content</h2>
      <p>
        The Full&apos;Tucky name, logo, designs, photography, and written content on this site
        belong to {LEGAL_ENTITY} and are protected by copyright and trademark law. Please
        don&apos;t copy, reproduce, or use them commercially without our written permission.
      </p>

      <h2>Links to other sites</h2>
      <p>
        This site may link to websites we don&apos;t control. We&apos;re not responsible for
        their content or their practices, and a link isn&apos;t an endorsement.
      </p>

      <h2>No warranties</h2>
      <p>
        This site is provided &ldquo;as is.&rdquo; We work to keep the information accurate and
        the site available, but we don&apos;t guarantee that it will always be error-free,
        uninterrupted, or current.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the fullest extent allowed by law, {LEGAL_ENTITY} is not liable for any indirect,
        incidental, or consequential damages arising from your use of this site.
      </p>

      <h2>Governing law</h2>
      <p>
        These terms are governed by the laws of the Commonwealth of Kentucky, without regard to
        its conflict-of-law rules.
      </p>

      <h2>Changes to these terms</h2>
      <p>
        We may update these terms from time to time. The &ldquo;last updated&rdquo; date above
        reflects the most recent version.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms? Reach us at {CONTACT_EMAIL} or {MAILING_ADDRESS}.
      </p>
    </LegalPage>
  );
}
