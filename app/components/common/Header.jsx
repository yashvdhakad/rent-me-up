import Image from "next/image";
import logo from "@/app/assets/logo.png";
import Link from "next/link";

function Header() {
  const navArr = [
    {
      name: "Find Properties",
      href: "/properties",
    },
    {
      name: "Services",
      href: "/services",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];

  const cta = "Create a Listing";

  return (
    <section className="fixed top-0 w-full z-50">
      <section className="max-w-screen-xl m-auto flex justify-between items-center rounded-b-xl bg-zinc-50 shadow transition-all">
        <Link href="/">
          <Image src={logo} height={80} alt="RentMeUp"></Image>
        </Link>
        <ul className="flex gap-10">
          {navArr.map((nav) => {
            return (
              <li className="font-semibold hover:text-red-400">
                <Link href={nav.href}>{nav.name}</Link>
              </li>
            );
          })}
        </ul>
        <div className="mr-5 flex justify-center items-center gap-4">
          <Link
            className="px-6 py-3 font-semibold bg-red-500 rounded-xl text-zinc-50 shadow hover:shadow-none transition-all hover:scale-95 hover:bg-red-600"
            href="/"
          >
            {cta}
          </Link>
          <Link
            href="/"
            className="w-12 h-12 bg-user bg-cover rounded-full shadow"
          ></Link>
        </div>
      </section>
    </section>
  );
}

export default Header;
