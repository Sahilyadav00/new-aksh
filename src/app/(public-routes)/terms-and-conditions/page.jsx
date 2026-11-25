import { Scale } from "lucide-react";
import LegalPage, { TextLink } from "@/components/legal/LegalPage";
import { getPageMetadata } from "@/lib/page-meta";

const EFFECTIVE_DATE = "24 October 2026";
const LAST_UPDATED = "24 October 2026";

export function generateMetadata() {
  return getPageMetadata("/terms-and-conditions/");
}

// Each section is a list of blocks: { p: "paragraph" } or { ul: [...], columns?: true }
const sections = [
  {
    id: "about-aksh-digital",
    title: "About Aksh Digital",
    blocks: [
      {
        p: "Aksh Digital is a digital marketing agency providing digital marketing, creative, and technology-related services to businesses and individuals.",
      },
      { p: "Our services may include:" },
      {
        columns: true,
        ul: [
          "Search Engine Optimization (SEO)",
          "Search Engine Marketing (SEM), performance marketing and paid advertising",
          "Social media marketing and management",
          "Website and mobile app design and development",
          "Branding and graphic design",
          "Content creation and video editing",
          "Digital strategy and consulting",
          "Other marketing and technology services agreed upon in writing",
        ],
      },
    ],
  },
  {
    id: "acceptance-of-terms",
    title: "Acceptance of Terms",
    blocks: [
      {
        p: "By using our website, submitting an enquiry, approving a proposal, or engaging our services, you acknowledge that you have read and understood these Terms & Conditions.",
      },
      {
        p: "If you do not agree with these terms, please discontinue using our website and services.",
      },
      {
        p: "Where a separate proposal, quotation, service agreement, or statement of work is signed or accepted, its specific terms will also apply. In the event of a conflict, the agreed written contract will take precedence to the extent specified in that contract.",
      },
    ],
  },
  {
    id: "scope-of-services",
    title: "Scope of Services",
    blocks: [
      {
        p: "The scope of work, deliverables, timelines, fees, and service duration will be communicated through a quotation, proposal, invoice, or written agreement.",
      },
      {
        p: "Any work requested outside the agreed scope may require additional fees and revised timelines.",
      },
      {
        p: "Aksh Digital reserves the right to decline requests that are unlawful, misleading, unethical, or outside our service capabilities.",
      },
    ],
  },
  {
    id: "payments-and-billing",
    title: "Payments and Billing",
    blocks: [
      {
        ul: [
          "Service fees will be communicated and agreed upon before work begins.",
          "Advance payments, milestone payments, or recurring payments may be required, depending on the agreed project terms.",
          "Invoices must be paid within the payment period specified on the invoice or agreement.",
          "Delayed payments may result in a pause or suspension of services until outstanding amounts are settled.",
          "Advertising budgets, subscriptions, domain registrations, hosting, stock assets, and other third-party charges are separate unless expressly included in the quotation.",
          "Any additional work or scope changes must be approved before the associated charges are incurred.",
          "Applicable taxes will be charged as required by law.",
        ],
      },
    ],
  },
  {
    id: "cancellation-refunds-termination",
    title: "Cancellation, Refunds and Termination",
    blocks: [
      {
        p: "Cancellation and refund eligibility will depend on the service purchased, the work completed, and the terms agreed upon in the relevant proposal or contract.",
      },
      {
        p: "Where permitted by applicable law, fees for work already completed, approved expenses, committed third-party costs, and services already delivered may not be refundable.",
      },
      {
        p: "For recurring services, clients should provide written notice in accordance with the cancellation period stated in their agreement.",
      },
      {
        p: "Aksh Digital may suspend or terminate services for non-payment, material breach of the agreement, unlawful activity, or abusive conduct, subject to applicable contractual and legal requirements.",
      },
      {
        p: "Any eligible refund will be handled in accordance with the agreed terms and applicable law.",
      },
    ],
  },
  {
    id: "client-responsibilities",
    title: "Client Responsibilities",
    blocks: [
      { p: "Clients agree to:" },
      {
        ul: [
          "Provide accurate information, brand assets, content, and instructions.",
          "Supply necessary access to websites, social accounts, advertising platforms, and other relevant systems.",
          "Review and approve content, designs, advertisements, and other deliverables within agreed timelines.",
          "Ensure they have the necessary rights and permissions to use all materials supplied to Aksh Digital.",
          "Comply with applicable advertising policies, industry regulations, and relevant laws.",
          "Make payments on time and communicate any changes affecting the project.",
        ],
      },
      {
        p: "Delays in receiving information, approvals, or access may affect project schedules and delivery dates.",
      },
    ],
  },
  {
    id: "marketing-results",
    title: "SEO, Advertising and Marketing Results",
    blocks: [
      {
        p: "Aksh Digital aims to deliver professional digital marketing services using appropriate strategies and industry practices. However, marketing outcomes depend on several factors outside our control.",
      },
      {
        p: "We do not guarantee specific search engine rankings, website traffic, leads, conversions, sales, return on advertising spend, or revenue unless a specific measurable commitment is expressly agreed to in writing.",
      },
      {
        p: "Search engine algorithms, advertising policies, market conditions, competition, audience behaviour, and platform changes may affect campaign performance.",
      },
      {
        p: "Advertising spend and platform charges are not included in our professional fees unless explicitly stated in the agreement.",
      },
    ],
  },
  {
    id: "website-design-development",
    title: "Website Design and Development",
    blocks: [
      {
        p: "Website projects will be delivered according to the agreed scope and specifications.",
      },
      {
        p: "Clients are responsible for reviewing website content, business information, legal notices, pricing, and other supplied details before publication.",
      },
      {
        p: "Third-party themes, plugins, software, APIs, hosting services, and integrations may be subject to separate licences, fees, terms, or limitations.",
      },
      {
        p: "Maintenance, security updates, backups, hosting, and ongoing technical support are included only where specified in the relevant agreement.",
      },
    ],
  },
  {
    id: "revisions-and-approvals",
    title: "Revisions and Approvals",
    blocks: [
      {
        p: "The number of revisions included in a project will be stated in the proposal or quotation.",
      },
      {
        p: "Requests beyond the included revision limit, or changes that substantially alter previously approved work, may incur additional charges.",
      },
      {
        p: "Client approval of a design, campaign, website, or other deliverable confirms acceptance of the approved version for the agreed purpose.",
      },
      { p: "Delays in feedback or approval may extend the delivery schedule." },
    ],
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property Rights",
    blocks: [
      {
        p: "Unless otherwise agreed in writing, Aksh Digital retains ownership of its pre-existing tools, processes, templates, methodologies, and other proprietary materials.",
      },
      {
        p: "Upon full payment of all applicable fees, ownership or usage rights in the final deliverables will transfer to the client to the extent specified in the applicable agreement and permitted by law.",
      },
      {
        p: "Third-party assets, fonts, stock images, software, and licensed materials remain subject to their respective licence terms.",
      },
      {
        p: "Aksh Digital may request permission to display completed work in its portfolio, case studies, or promotional materials. Client work will not be represented as an approved public case study without the necessary permission.",
      },
    ],
  },
  {
    id: "confidentiality-data-protection",
    title: "Confidentiality and Data Protection",
    blocks: [
      {
        p: "Both parties should take reasonable steps to protect confidential business information shared during the course of a project.",
      },
      {
        p: (
          <>
            Aksh Digital will handle personal information in accordance with its
            applicable{" "}
            <TextLink href="/privacy-policy/">Privacy Policy</TextLink> and
            relevant data protection laws.
          </>
        ),
      },
      {
        p: "Clients are responsible for ensuring that information and personal data they provide to Aksh Digital may lawfully be shared and processed for the agreed services.",
      },
      {
        p: "Access credentials should be shared securely. Clients should retain appropriate administrative control over their business accounts wherever possible.",
      },
    ],
  },
  {
    id: "third-party-platforms",
    title: "Third-Party Platforms and Services",
    blocks: [
      {
        p: "Our services may involve third-party platforms such as Google, Meta, LinkedIn, hosting providers, analytics tools, and other external services.",
      },
      {
        p: "Aksh Digital does not control these platforms and is not responsible for their independent decisions, outages, policy changes, account suspensions, algorithm updates, or service interruptions.",
      },
      {
        p: "Third-party products and services are governed by their own terms and policies.",
      },
    ],
  },
  {
    id: "prohibited-activities",
    title: "Website Use and Prohibited Activities",
    blocks: [
      { p: "You agree not to:" },
      {
        ul: [
          "Use our website for unlawful or fraudulent purposes.",
          "Attempt to gain unauthorized access to our systems or data.",
          "Introduce malicious code or interfere with website functionality.",
          "Copy, distribute, or exploit website materials without appropriate authorization.",
          "Submit false, misleading, defamatory, or infringing information.",
        ],
      },
      {
        p: "We reserve the right to take appropriate action against misuse of our website, subject to applicable law.",
      },
    ],
  },
  {
    id: "limitation-of-liability",
    title: "Limitation of Liability",
    blocks: [
      {
        p: "To the extent permitted by applicable law, Aksh Digital will not be liable for indirect, incidental, special, or consequential losses arising from the use of our website or services, including loss of profits, business opportunities, data, or anticipated savings.",
      },
      {
        p: "Aksh Digital is not responsible for losses arising from factors beyond its reasonable control, including third-party platform decisions, client-provided information, market conditions, or events outside our reasonable control.",
      },
      {
        p: "Nothing in these terms excludes or limits liability where such exclusion or limitation is prohibited by applicable law.",
      },
      {
        p: "Any additional liability limits must be expressly agreed upon in the relevant service agreement.",
      },
    ],
  },
  {
    id: "indemnification",
    title: "Indemnification",
    blocks: [
      {
        p: "To the extent permitted by law, clients are responsible for claims, losses, or expenses arising from materials they supply, their unlawful use of our services, or their breach of applicable third-party rights or legal obligations.",
      },
      {
        p: "Any indemnification obligations will be subject to applicable law and any specific written agreement between the parties.",
      },
    ],
  },
  {
    id: "changes-to-terms",
    title: "Changes to These Terms",
    blocks: [
      {
        p: "Aksh Digital may update these Terms & Conditions from time to time to reflect changes in our services, business practices, or legal requirements.",
      },
      {
        p: "Updated terms will be published on this page with a revised “Last Updated” date.",
      },
      {
        p: "Changes will apply prospectively to the extent required by applicable law. Material changes to an existing service agreement will be handled according to that agreement and applicable law.",
      },
    ],
  },
  {
    id: "governing-law",
    title: "Governing Law and Jurisdiction",
    blocks: [
      {
        p: "These Terms & Conditions will be governed by the laws of India, subject to applicable legal requirements.",
      },
      {
        p: "Any disputes will be handled by the courts of competent jurisdiction in Jaipur, Rajasthan, subject to applicable law and any valid dispute resolution agreement between the parties.",
      },
    ],
  },
  {
    id: "contact-information",
    title: "Contact Information",
    blocks: [
      {
        p: "If you have any questions regarding these Terms & Conditions, please contact us.",
      },
    ],
    contact: true,
  },
];

export default function TermsAndConditionsPage() {
  return (
    <LegalPage
      badgeIcon={Scale}
      badgeText="Legal • Website & Service Terms"
      title="Terms &"
      highlight="Conditions"
      intro="Welcome to Aksh Digital. These Terms & Conditions govern your access to and use of our website, services, and related digital solutions. By accessing our website or engaging our services, you agree to these terms."
      effectiveDate={EFFECTIVE_DATE}
      lastUpdated={LAST_UPDATED}
      introNote={
        <>
          Please read these terms carefully before using our website or
          purchasing our services. They apply to{" "}
          <TextLink href="/">www.akshdigital.in</TextLink> and all services
          provided by Aksh Digital.
        </>
      }
      sections={sections}
      closingNote="By using our website or engaging our services, you acknowledge that you have read and understood these Terms & Conditions, subject to applicable law."
      cta={{
        eyebrow: "Have Questions?",
        heading: "Need Clarity on Any of These Terms?",
        text: "Our team is happy to walk you through how these terms apply to your project before you get started.",
      }}
    />
  );
}
