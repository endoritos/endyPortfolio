import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Proprro`.
 */
export type ProprroProps = SliceComponentProps<Content.ProprroSlice>;

/**
 * Component for "Proprro" Slices.
 */
const Proprro = ({ slice }: ProprroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for proprro (variation: {slice.variation}) Slices
    </section>
  );
};

export default Proprro;
