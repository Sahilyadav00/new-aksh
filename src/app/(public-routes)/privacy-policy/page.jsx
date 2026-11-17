import { ShieldCheck } from "lucide-react";
import LegalPage, { TextLink } from "@/components/legal/LegalPage";

const SITE_URL = "https://www.akshdigital.in";
const EFFECTIVE_DATE = "24 October 2026";
const LAST_UPDATED = "24 October 2026";

export const metadata = {
  title: "Privacy Policy | Aksh Digital",
  description:
    "Learn how Aksh Digital collects, uses, shares, and protects your personal information when you visit our website, contact us, or use our digital marketing and development services.",
  alternates: {
    canonical: `${SITE_URL}/privacy-policy/`,
  },
};

// Each section is a list of blocks: { p }, { h3 }, { ul, columns? }, { table: { head, rows } }
const sections = [
  {
    id: "about-this-policy",
    title: "About This Policy",
    blocks: [
      {
        p: "This Privacy Policy applies to visitors of the Aksh Digital website, prospective clients, existing clients, and individuals who communicate with us regarding our services.",
      },
      {
        p: "Aksh Digital provides digital marketing, SEO, paid advertising, social media management, website and app development, branding, creative design, and related services.",
      },
      {
        p: (
          <>
            This policy should be read alongside our{" "}
            <TextLink href="/terms-and-conditions/">Terms &amp; Conditions</TextLink> and any applicable service
            agreement.
          </>
        ),
      },
    ],
  },
  {
    id: "information-we-collect",
    title: "Information We Collect",
    blocks: [
      { p: "Depending on how you interact with us, we may collect the following categories of information." },
      { h3: "A. Personal and Contact Information" },
      {
        p: "When you submit an enquiry through our contact form or website pop-up, contact us, or request a quotation, we may collect:",
      },
      {
        columns: true,
        ul: [
          "Name",
          "Email address",
          "Phone number",
          "Company or business name",
          "Website address",
          "The service you are interested in and any free audit options you select",
          "Information included in your enquiry or message",
        ],
      },
      { h3: "B. Business and Project Information" },
      {
        p: "When you engage our services, we may process information necessary to deliver the agreed work, such as brand assets, marketing requirements, website content, campaign information, and business account details.",
      },
      { h3: "C. Technical Information" },
      {
        p: "When you visit our website, certain technical information is collected automatically through Google Analytics, Google Tag Manager, and standard server logs. This may include your IP address, browser type, device information, pages visited, referral source, and access timestamps.",
      },
      { h3: "D. Cookies and Similar Technologies" },
      {
        p: "Our website uses cookies and similar technologies to support basic functionality, understand how the website is used, and measure performance. The main cookies currently in use are:",
      },
      {
        table: {
          head: ["Cookie", "Provided by", "Purpose", "Duration"],
          rows: [
            [
              "_ga, _ga_*",
              "Google Analytics",
              "Distinguishes visitors and measures website usage and performance.",
              "Up to 2 years",
            ],
            [
              "welcome_popup_dismissed",
              "Aksh Digital",
              "Remembers that you closed the welcome pop-up so it is not shown again straight away.",
              "30 minutes",
            ],
            [
              "whatsapp_tooltip_dismissed",
              "Aksh Digital",
              "Remembers that you closed the WhatsApp chat prompt.",
              "30 minutes",
            ],
            [
              "Google Maps cookies",
              "Google",
              "May be set by the embedded Google Map shown in our website footer and contact page.",
              "Set by Google",
            ],
            [
              "admin_session",
              "Aksh Digital",
              "Keeps authorised staff signed in to our admin area. Not set for regular visitors.",
              "24 hours",
            ],
          ],
        },
      },
      {
        p: (
          <>
            You can block or delete cookies through your browser settings at any time. To stop Google Analytics from
            collecting data about your visits, you can also install the{" "}
            <TextLink href="https://tools.google.com/dlpage/gaoptout">
              Google Analytics Opt-out Browser Add-on
            </TextLink>
            . Blocking analytics cookies will not prevent you from using our website.
          </>
        ),
      },
    ],
  },
  {
    id: "how-we-collect-information",
    title: "How We Collect Information",
    blocks: [
      { p: "We may collect information:" },
      {
        ul: [
          "Directly from you through website forms, emails, calls, WhatsApp, or other messages.",
          "During discussions, proposals, onboarding, and project delivery.",
          "Through Google Analytics, Google Tag Manager, server logs, and cookies when you browse our website.",
          "Through third-party platforms when you interact with our business or authorize access for a project.",
        ],
      },
      {
        p: "We will handle information in accordance with applicable law and the purposes for which it was collected.",
      },
    ],
  },
  {
    id: "how-we-use-information",
    title: "How We Use Your Information",
    blocks: [
      { p: "We may use collected information to:" },
      {
        ul: [
          "Respond to enquiries and provide quotations.",
          "Communicate with prospective and existing clients.",
          "Deliver and manage our digital marketing and development services.",
          "Prepare proposals, invoices, reports, and project updates.",
          "Improve website functionality, user experience, and service quality.",
          "Analyse website traffic and campaign performance using tools such as Google Analytics.",
          "Protect our website, detect misuse, and prevent fraudulent activity.",
          "Meet applicable legal, regulatory, accounting, and contractual obligations.",
          "Send marketing communications where permitted by law and, where required, with your consent.",
        ],
      },
      {
        p: "We do not intend to use personal information for purposes incompatible with those described in this policy without an appropriate legal basis or notice where required.",
      },
    ],
  },
  {
    id: "legal-basis-and-consent",
    title: "Legal Basis and Consent",
    blocks: [
      {
        p: "We process personal information as permitted by applicable law, including the Digital Personal Data Protection Act, 2023 and the Information Technology Act, 2000, together with the rules made under them, to the extent they apply. Depending on the circumstances, this may include your consent, steps taken at your request before entering into a contract, performance of a contract, compliance with legal obligations, or other legitimate uses permitted by law.",
      },
      {
        p: "When you submit a form on our website, you provide your details so that we can respond to your enquiry, and we use them for that purpose.",
      },
      {
        p: "Where we rely on your consent, you may withdraw it at any time by contacting us. Withdrawing consent does not affect processing carried out before the withdrawal, but it may mean we can no longer respond to your enquiry or provide certain services.",
      },
    ],
  },
  {
    id: "sharing-information",
    title: "How We Share Information",
    blocks: [
      { p: "We do not sell your personal information. We may share information only where necessary with:" },
      {
        ul: [
          "Service providers who help us operate our website and business, such as website hosting, our cloud database provider where enquiry details are stored, and email and communication tools.",
          "Analytics providers, such as Google, through Google Analytics and Google Tag Manager.",
          "Advertising and marketing platforms such as Google, Meta, and LinkedIn, when you are a client and have authorized us to manage campaigns or accounts on your behalf.",
          "Professional advisers, such as accountants, auditors, and legal advisers, where reasonably required.",
          "Government authorities, courts, or law enforcement agencies where required by law or to protect our rights, users, or the public.",
          "A successor business in connection with a merger, acquisition, or sale of assets, subject to appropriate confidentiality protections.",
        ],
      },
      {
        p: "We expect service providers to use personal information only for the purposes we specify and to protect it with appropriate safeguards.",
      },
    ],
  },
  {
    id: "third-party-services",
    title: "Third-Party Services and Links",
    blocks: [
      {
        p: (
          <>
            Google Analytics and Google Tag Manager help us understand how visitors use our website. Information
            collected by these tools is processed by Google in accordance with the{" "}
            <TextLink href="https://policies.google.com/privacy">Google Privacy Policy</TextLink>. The Google Map
            embedded on our website is also provided by Google.
          </>
        ),
      },
      {
        p: "If you click our WhatsApp button, you will be taken to WhatsApp, which is operated by Meta. Your conversation with us on WhatsApp is subject to WhatsApp's own terms and privacy policy.",
      },
      {
        p: "Our website contains links to our profiles on platforms such as Facebook, Instagram, LinkedIn, X, Pinterest, Quora, and Medium, as well as other external websites. We are not responsible for the privacy practices of these third parties, and we encourage you to read their privacy policies.",
      },
    ],
  },
  {
    id: "data-retention",
    title: "Data Retention",
    blocks: [
      {
        p: "We keep personal information only for as long as reasonably necessary for the purposes described in this policy.",
      },
      {
        ul: [
          "Enquiry details are kept for as long as needed to respond and follow up, unless you ask us to delete them sooner.",
          "Client and project records are kept for the duration of our engagement and afterwards as required for legal, tax, accounting, or contractual purposes.",
          "Analytics data is retained according to the data retention settings configured in Google Analytics.",
        ],
      },
      {
        p: "When information is no longer required, we will delete it or anonymise it, unless we are required by law to keep it longer.",
      },
    ],
  },
  {
    id: "data-security",
    title: "Data Security",
    blocks: [
      {
        p: "We use reasonable technical and organisational safeguards to protect personal information against unauthorized access, loss, misuse, or alteration. Access to enquiry and client information is restricted to authorized personnel who need it to perform their work.",
      },
      {
        p: "However, no method of transmission over the internet or method of electronic storage is completely secure, and we cannot guarantee absolute security.",
      },
      {
        p: "If a personal data breach occurs, we will take appropriate steps to contain it and will notify affected individuals and relevant authorities where required by law.",
      },
    ],
  },
  {
    id: "your-rights",
    title: "Your Rights and Choices",
    blocks: [
      { p: "Subject to applicable law, you may have the right to:" },
      {
        ul: [
          "Request a summary of the personal information we hold about you and how it is being used.",
          "Request correction, completion, or updating of inaccurate or incomplete information.",
          "Request erasure of personal information that is no longer needed, subject to legal retention requirements.",
          "Withdraw your consent where we rely on consent to process your information.",
          "Opt out of marketing communications at any time.",
          "Nominate another person to exercise your rights in the event of death or incapacity, where provided by law.",
          "Raise a grievance with us about how your personal information has been handled.",
        ],
      },
      {
        p: "To exercise any of these rights, please contact us using the details in the Contact and Grievance Redressal section below. We may need to verify your identity before acting on your request. If your grievance is not resolved to your satisfaction, you may approach the relevant authority, such as the Data Protection Board of India, where applicable.",
      },
    ],
  },
  {
    id: "childrens-privacy",
    title: "Children's Privacy",
    blocks: [
      {
        p: "Our website and services are intended for businesses and adults. We do not knowingly collect personal information from children under 18 years of age.",
      },
      {
        p: "If you believe that a child has provided us with personal information, please contact us and we will take steps to delete it.",
      },
    ],
  },
  {
    id: "international-transfers",
    title: "International Data Transfers",
    blocks: [
      {
        p: "Some of our service providers, such as Google and our cloud hosting and database providers, may store or process information on servers located outside India.",
      },
      {
        p: "Where information is transferred outside India, we will take reasonable steps to ensure it remains protected in line with this policy and applicable law.",
      },
    ],
  },
  {
    id: "changes-to-policy",
    title: "Changes to This Policy",
    blocks: [
      {
        p: "We may update this Privacy Policy from time to time to reflect changes in our website, services, tools, or legal requirements.",
      },
      { p: "Updated versions will be published on this page with a revised “Last Updated” date." },
      {
        p: "Where changes are significant, we may provide additional notice where required by applicable law.",
      },
    ],
  },
  {
    id: "contact-and-grievance",
    title: "Contact and Grievance Redressal",
    blocks: [
      {
        p: "If you have any questions, requests, or concerns about this Privacy Policy or how we handle your personal information, please contact us. We will acknowledge your request and respond within a reasonable time and in accordance with applicable law.",
      },
    ],
    contact: true,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      badgeIcon={ShieldCheck}
      badgeText="Legal • Your Data & Privacy"
      title="Privacy"
      highlight="Policy"
      intro="At Aksh Digital, we respect your privacy and are committed to handling your personal information responsibly. This Privacy Policy explains how we collect, use, disclose, and protect information when you visit our website, contact us, or use our services."
      effectiveDate={EFFECTIVE_DATE}
      lastUpdated={LAST_UPDATED}
      introNote={
        <>
          By accessing <TextLink href="/">www.akshdigital.in</TextLink> or engaging our services, you acknowledge
          this Privacy Policy. Where consent is required by applicable law, we will obtain it as appropriate.
        </>
      }
      sections={sections}
      closingNote="By using our website or engaging our services, you acknowledge that you have read and understood this Privacy Policy."
      cta={{
        eyebrow: "Privacy Questions?",
        heading: "Questions About Your Data?",
        text: "Contact our team to access, correct, or delete your information, or to learn more about how we handle it.",
      }}
    />
  );
}
