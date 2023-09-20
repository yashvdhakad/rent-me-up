import Image from "next/image";
import Link from "next/link";
import logo from "@/app/assets/logo.png";

const Footer = () => {
  return (
    <section className="w-full lg:px-20 pt-10 pb-6 grid grid-cols-5 gap-6 bg-white rounded-t-xl shadow-upward">
      <div className="col-span-2 flex flex-col gap-6">
        <div className="">
          <Image src={logo} height={70} alt="RentMeUp"></Image>
          <p className="w-2/3 pl-4 text-sm font-medium">
            <svg
              className="mb-1"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none">
                <path
                  stroke="#18181b"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M18 16.016c1.245.529 2 1.223 2 1.984c0 1.657-3.582 3-8 3s-8-1.343-8-3c0-.76.755-1.456 2-1.984"
                />
                <path
                  fill="#18181b"
                  fill-rule="evenodd"
                  d="M11.262 17.675L12 17l-.738.675zm1.476 0l.005-.005l.012-.014l.045-.05l.166-.186a38.19 38.19 0 0 0 2.348-2.957c.642-.9 1.3-1.92 1.801-2.933c.49-.99.885-2.079.885-3.086C18 4.871 15.382 2 12 2S6 4.87 6 8.444c0 1.007.395 2.096.885 3.086c.501 1.013 1.16 2.033 1.8 2.933a38.153 38.153 0 0 0 2.515 3.143l.045.05l.012.014l.005.005a1 1 0 0 0 1.476 0zM12 17l.738.674L12 17zm0-11a2 2 0 1 0 0 4a2 2 0 0 0 0-4z"
                  clip-rule="evenodd"
                />
              </g>
            </svg>
            84/330, Kanhavilla, Near Gopinath Hospital, Sector 8, Pratap Nagar,
            Jaipur, Rajasthan - 302023
          </p>
        </div>
        <Link
          href="/"
          className="w-fit ml-4 px-4 py-2 border rounded-lg border-zinc-800 text-zinc-800 text-sm font-medium"
        >
          <div className="flex justify-center items-center gap-2">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#18181b"
                d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5l-8-5V6l8 5l8-5v2z"
              />
            </svg>
            info@rentmeup.in
          </div>
        </Link>
        <div className="pl-4 flex gap-4">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#18181b"
              d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"
            />
          </svg>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#18181b"
              d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"
            />
          </svg>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#18181b"
              d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"
            />
          </svg>
          <svg
            width="24"
            height="24"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#18181b"
              d="M389.2 48h70.6L305.6 224.2L487 464H345L233.7 318.6L106.5 464H35.8l164.9-188.5L26.8 48h145.6l100.5 132.9L389.2 48zm-24.8 373.8h39.1L151.1 88h-42l255.3 333.8z"
            />
          </svg>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#18181b"
              d="m10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73Z"
            />
          </svg>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <p className="font-semibold">Services</p>
        <div className="flex flex-col">
          <p className="text-sm text-zinc-600">Rental Services</p>
          <p className="text-sm text-zinc-600">Create Listing</p>
          <p className="text-sm text-zinc-600">Pay Rent</p>
          <p className="text-sm text-zinc-600">Find Flatmates</p>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <p className="font-semibold">Properties</p>
        <div className="flex flex-col">
          <p className="text-sm text-zinc-600">Properties in Jaipur</p>
          <p className="text-sm text-zinc-600">Properties in Mumbai</p>
          <p className="text-sm text-zinc-600">Properties in Delhi</p>
          <p className="text-sm text-zinc-600">Properties in Agra</p>
          <p className="text-sm text-zinc-600">Properties in Mathura</p>
          <p className="text-sm text-zinc-600">Properties in Udaipur</p>
          <p className="text-sm text-zinc-600">Properties in Chandigarh</p>
          <p className="text-sm text-zinc-600">Properties in Kota</p>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <p className="font-semibold">Other Link</p>
        <div className="flex flex-col">
          <p className="text-sm text-zinc-600">Privacy Policy</p>
          <p className="text-sm text-zinc-600">Terms & Services</p>
          <p className="text-sm text-zinc-600">Service Policy</p>
          <p className="text-sm text-zinc-600">Security Policy</p>
        </div>
      </div>
      <div className="col-span-5 border"></div>
      <div className="col-span-5 text-xs font-medium text-center">
        © 2023 RentMeUp. All Rights Reserved. Made By{" "}
        <Link
          className="text-red-500"
          href="https://yashvdhakad.vercel.app"
          target="blank"
        >
          Yash Dhakad
        </Link>
        .
      </div>
    </section>
  );
};

export default Footer;
