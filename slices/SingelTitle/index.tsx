"use client";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Swal from "sweetalert2";

/**
 * Props for `SingelTitle`.
 */
export type SingelTitleProps = SliceComponentProps<Content.SingelTitleSlice>;

/**
 * Component for "SingelTitle" Slices.
 */
const SingelTitle = ({ slice }: SingelTitleProps): JSX.Element => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "74f26471-7c81-4349-aff1-533107acfeb2");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

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
          `
        },
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
    }
  };

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="mt-44"></div>

      <div className="grid sm:grid-cols-2 items-start gap-16 p-4 mx-auto max-w-4xl border-l-4 border-l-indigo-800 bg-indigo-800 bg-opacity-20 font-[sans-serif]">
        <div>
          <h1 className="text-black text-3xl font-extrabold">
            <PrismicRichText field={slice.primary.title} />
          </h1>
          <p className="text-sm text-gray-500 mt-4">
            {slice.primary.infotext}
          </p>
          <div className="mt-12">
            <h2 className="text-black text-base font-bold">Email</h2>
            <ul className="mt-4">
              <li className="flex items-center">
                <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
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
                <a href="mailto:YOUR_EMAIL_HERE" className="text-[#007bff] text-sm ml-4">
                  <small className="block">Mail</small>
                  <strong>{slice.primary.email}</strong>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <form onSubmit={onSubmit} className="ml-auto space-y-4">
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="w-full rounded-md py-3 px-4 bg-gray-100 text-black text-sm outline-blue-500 focus:bg-slate-500" 
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="w-full rounded-md py-3 px-4 bg-gray-100 text-black text-sm outline-blue-500 focus:bg-slate-500"
          />
          <input
            type="text"
            placeholder="Subject"
            name="subject"
            className="w-full rounded-md py-3 px-4 bg-gray-100 text-black text-sm outline-blue-500 focus:bg-slate-500"
          />
          <textarea
            placeholder="Message"
            name="message"
            rows="6"
            className="w-full rounded-md px-4 bg-gray-100 text-black text-sm pt-3 outline-blue-500 focus:bg-slate-500"
          ></textarea>
          <button
            type="submit"
            className="text-white bg-blue-500 hover:bg-blue-600 tracking-wide rounded-md text-sm px-4 py-3 w-full !mt-6"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default SingelTitle;