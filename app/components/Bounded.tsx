import React from "react";
import clsx from "clsx";

type BoundedProps = {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
};

const Bounded = React.forwardRef<HTMLDivElement, BoundedProps>(
  ({ as: Comp = "section", className, children, ...restPorps }, ref) => {
    return (
      <Comp
        ref={ref}
        className={clsx("px-4 py-10 md:px-6 md:py-14 lg:py-16")}
        {...restPorps}
      >
        <div className="mx-auto w-full max-w-7xl"></div>
        {children}
      </Comp>
    );
  }
);

Bounded.displayName = "Bounded";

export default Bounded;
