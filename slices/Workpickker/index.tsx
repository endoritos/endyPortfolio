import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Workpickker`.
 */
export type WorkpickkerProps = SliceComponentProps<Content.WorkpickkerSlice>;

/**
 * Component for "Workpickker" Slices.
 */
const Workpickker = ({ slice }: WorkpickkerProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for workpickker (variation: {slice.variation})
      Slices
    </section>
  );
};

export default Workpickker;