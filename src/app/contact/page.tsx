import type { Metadata } from "next";
import ContactSection from "@/components/HomePage/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Ahnaf Abid Nirob — whether you have a project in mind, want to collaborate, or just want to say hi.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="pt-24">
      <ContactSection />
    </main>
  );
}
