import Image from "next/image";
import logo from "@/app/assets/logo.png";

const Footer = () => {
  return (
    <section className="w-full p-10 pb-6 grid grid-cols-5 gap-6 bg-white rounded-t-xl shadow-upward">
      <div className="col-span-2 flex flex-col">
        <Image src={logo} height={60} alt="RentMeUp"></Image>
        <p className="w-2/3 pl-4 text-sm font-medium">
          "RentMeUp is a platform that helps young professionals and students
          find their ideal flat and compatible roommate in urban areas,
          including Jaipur." <br />
          <span className="text-zinc-500">
            - Anurag Goyal, Founder, RentMeUp
          </span>
        </p>
        <div className="pl-4 pt-4 flex gap-4">
          <div className="w-6 h-6 rounded bg-zinc-300"></div>
          <div className="w-6 h-6 rounded bg-zinc-300"></div>
          <div className="w-6 h-6 rounded bg-zinc-300"></div>
          <div className="w-6 h-6 rounded bg-zinc-300"></div>
          <div className="w-6 h-6 rounded bg-zinc-300"></div>
          <div className="w-6 h-6 rounded bg-zinc-300"></div>
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
        <p className="font-semibold">Services</p>
        <div className="flex flex-col">
          <p className="text-sm text-zinc-600">Rental Services</p>
          <p className="text-sm text-zinc-600">Create Listing</p>
          <p className="text-sm text-zinc-600">Pay Rent</p>
          <p className="text-sm text-zinc-600">Find Flatmates</p>
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
      <div className="col-span-5 border"></div>
      <div className="col-span-5 text-xs font-medium text-center">
        © 2023 RentMeUp. All Rights Reserved.
      </div>
    </section>
  );
};

export default Footer;
