import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Porjects`.
 */
export type PorjectsProps = SliceComponentProps<Content.PorjectsSlice>;

/**
 * Component for "Porjects" Slices.
 */
const Porjects = ({ slice }: PorjectsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for porjects (variation: {slice.variation}) Slices
    </section>
  );
};

export default Porjects;
