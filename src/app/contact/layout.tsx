import { createPageMetadata } from "../../lib/site-metadata";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Talk directly with Amit Verma about building a product, hardening an AI-built MVP, or bringing senior technology leadership to an existing engineering team.",
  path: "/contact",
  label: "Start a Conversation",
  socialTitle: "Where does the technology need ownership?",
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
