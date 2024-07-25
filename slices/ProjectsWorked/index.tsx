import Bounded from "@/app/components/Bounded";
import Heading from "@/app/components/Heading";
import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import ContentList from "./ContentList";

/**
 * Props for `ContentIndex`.
 */
export type ContentIndexProps = SliceComponentProps<Content.ContentIndexSlice>;

/**
 * Component for "ContentIndex" Slices.
 */
const ContentIndex = ({ slice }: ContentIndexProps): JSX.Element => {
  


  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Heading size ="xl" className="mb-8">
        {slice.primary.heading}
      </Heading>
      {isFilled.richText(slice.primary.description) &&    (     //IS filled when no input.
      <div className="prose prose-xl prose-invert mb-10">
        <PrismicRichText field={slice.primary.description} />
      </div>
      )} 


      <ContentList  />
    </Bounded>
  );
};

export default ContentIndex;