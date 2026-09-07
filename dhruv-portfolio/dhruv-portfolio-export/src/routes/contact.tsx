import { createFileRoute } from "@tanstack/react-router";
import SectionHeading from "@/components/SectionHeading";
import TerminalContact from "@/components/TerminalContact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact M Dhruv — ML & data science internships" },
      {
        name: "description",
        content:
          "Get in touch with M Dhruv about machine learning, data science and engineering roles. Email, GitHub and LinkedIn.",
      },
      { property: "og:title", content: "Contact M Dhruv" },
      {
        property: "og:description",
        content: "Open to ML, data science and engineering opportunities with measurable outcomes.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-[1440px] px-5 py-16 md:px-10 md:py-24">
      <SectionHeading
        index="04"
        eyebrow="Contact console"
        title="Start a conversation."
        description="The fastest route is email — replies usually land the same day."
      />
      <div className="mt-12">
        <TerminalContact />
      </div>
    </div>
  );
}
