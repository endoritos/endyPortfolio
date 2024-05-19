import Bounded from "@/app/components/Bounded";
import Heading from "@/app/components/Heading";
import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import ContentList from "./ContentList";

/**
 * Props for `Projects`.
 */
export type ProjectsProps = SliceComponentProps<Content.ProjectsSlice>;

/**
 * Component for "Projects" Slices.
 */
const Projects = ({ slice }: ProjectsProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Heading size="xl" className="mb-8">
        {slice.primary.heading}
      </Heading>

    {isFilled.richText(slice.primary.description)&&(
      <div className="prose prose-xl prose-invert mb-10">
        <PrismicRichText field={slice.primary.description}></PrismicRichText>
      </div>
    )} 


    <ContentList />
    </Bounded>
  );
};

export default Projects;
