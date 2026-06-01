import type { CaseStudySection } from "@/lib/types";
import { TextSection } from "./sections/text-section";
import { TextGroupSection } from "./sections/text-group-section";
import { NumberedListSection } from "./sections/numbered-list-section";
import { BulletListSection } from "./sections/bullet-list-section";
import { ImageSection } from "./sections/image-section";
import { ImageGridSection } from "./sections/image-grid-section";
import { ComparisonSection } from "./sections/comparison-section";
import { PullQuoteSection } from "./sections/pull-quote-section";
import { LearningsSection } from "./sections/learnings-section";
import { DividerSection } from "./sections/divider-section";

export function SectionRenderer({ section }: { section: CaseStudySection }) {
  switch (section.type) {
    case "text":
      return <TextSection heading={section.heading} body={section.body} />;
    case "text-group":
      return <TextGroupSection heading={section.heading} paragraphs={section.paragraphs} />;
    case "numbered-list":
      return <NumberedListSection heading={section.heading} items={section.items} />;
    case "bullet-list":
      return <BulletListSection heading={section.heading} items={section.items} />;
    case "image":
      return <ImageSection src={section.src} alt={section.alt} caption={section.caption} />;
    case "image-grid":
      return <ImageGridSection heading={section.heading} images={section.images} />;
    case "comparison":
      return (
        <ComparisonSection
          heading={section.heading}
          before={section.before}
          after={section.after}
          body={section.body}
        />
      );
    case "pull-quote":
      return <PullQuoteSection text={section.text} attribution={section.attribution} />;
    case "learnings":
      return <LearningsSection heading={section.heading} items={section.items} />;
    case "divider":
      return <DividerSection />;
    default: {
      const _exhaustive: never = section;
      return null;
    }
  }
}
