import Image from "next/image";
import Link from "next/link";
import kingsmenLogo from "../../../../public/images/kingsmenLogoMain.jpg";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between w-full text-black">
      <Link href="/">
     
          <Image src={kingsmenLogo} alt="Kingsmen Logo" width={200} height={200} />
        
      </Link>
      <ul className="flex justify-around space-x-6 text-2xl w-full">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="#about">About</Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};
