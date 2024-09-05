"use client";

import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Swal from "sweetalert2";
import { accessKey } from "./sush";

/**
 * Props for `SingelTitle`.
 */
export type SingelTitleProps = SliceComponentProps<Content.SingelTitleSlice>;

/**
 * Component for "SingelTitle" Slices.
 */
const SingelTitle = ({ slice }: SingelTitleProps): JSX.Element => {
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Check if the form is valid
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill in all required fields.",
      });
      return;
    }

    const formData = new FormData(form);
    
    formData.append("access_key", accessKey);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your message has been sent!",
          showConfirmButton: false,
          timer: 1500,
          showClass: {
            popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `,
          },
        });
        form.reset(); // Clear the form after successful submission
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong! Please try again later.",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "There was a problem submitting the form. Please try again later.",
      });
    }
  };

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="mt-44"></div>
      <div className="mx-auto grid max-w-4xl items-start gap-16 border-l-4 border-l-indigo-800 bg-indigo-800 bg-opacity-20 p-4 font-[sans-serif] sm:grid-cols-2">
        <div>
          <h1 className="text-3xl font-extrabold text-black">
            <PrismicRichText field={slice.primary.title} />
          </h1>
          <p className="mt-4 text-sm text-gray-500">
            <>{slice.primary.infotext}</>
          </p>
          <div className="mt-12">
            <h2 className="text-base font-bold text-black">Email</h2>
            <ul className="mt-4">
              <li className="flex items-center">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e6e6e6cf]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="#007bff"
                    viewBox="0 0 479.058 479.058"
                  >
                    <path
                      d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                      data-original="#000000"
                    />
                  </svg>
                </div>
                <a
                  href="javascript:void(0)"
                  className="ml-4 text-sm text-[#007bff]"
                >
                  <small className="block">Mail</small>
                  <strong>
                    <>{slice.primary.email}</>
                  </strong>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <form onSubmit={onSubmit} className="ml-auto space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full rounded-md bg-gray-100 px-4 py-3 text-sm text-black outline-blue-500 focus:bg-slate-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full rounded-md bg-gray-100 px-4 py-3 text-sm text-black outline-blue-500 focus:bg-slate-500"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-full rounded-md bg-gray-100 px-4 py-3 text-sm text-black outline-blue-500 focus:bg-slate-500"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={6}
            className="w-full rounded-md bg-gray-100 px-4 pt-3 text-sm text-black outline-blue-500 focus:bg-slate-500"
            required
          ></textarea>
          <button
            type="submit"
            className="!mt-6 w-full rounded-md bg-blue-500 px-4 py-3 text-sm tracking-wide text-white hover:bg-blue-600"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default SingelTitle;
