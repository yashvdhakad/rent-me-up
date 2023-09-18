import Image from "next/image";
import logo from "@/app/assets/logo.png";
import Link from "next/link";

function Header() {
  const navArr = [
    {
      name: "Find Property",
      href: "/",
    },
    {
      name: "Services",
      href: "/",
    },
    {
      name: "About",
      href: "/",
    },
    {
      name: "Contact",
      href: "/",
    },
  ];

  const cta = "Create a Listing";

  return (
    <section className="fixed top-0 w-full">
      <section className="max-w-screen-xl m-auto flex justify-between items-center rounded-b-xl bg-zinc-50 shadow transition-all">
        <Image src={logo} height={80} alt="RentMeUp"></Image>
        <ul className="flex gap-6">
          {navArr.map((nav) => {
            return (
              <li className="font-semibold hover:text-red-400">
                <Link href={nav.href}>{nav.name}</Link>
              </li>
            );
          })}
        </ul>
        <Link
          className="mr-5 px-6 py-3 font-semibold bg-red-500 rounded-xl text-zinc-50 shadow hover:shadow-none transition-all hover:scale-95 hover:bg-red-400"
          href="/"
        >
          {cta}
        </Link>
      </section>
    </section>
  );
}

export default Header;
