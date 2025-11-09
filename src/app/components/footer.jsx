import Image from "next/image";
import { assets } from "../../../assets/assets";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="mt-20">
      <div className="w-full text-center">
        <h1 className="font-medium text-3xl cursor-pointer mr-1">
          Emmanuel<span className="text-blue-800 text-4xl">.</span>
        </h1>

        <Link
          className="w-max flex items-center gap-2 mx-auto"
          href={"mailto:email@adocheofficial.com"}
        >
          <Image src={assets.mail_icon} alt="" className="w-4 mt-1" />
          @adocheofficial@gmail.com
        </Link>
      </div>

      <div className="sm:flex text-center items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>&copy; 2025 All rights reserved </p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <Link target="_blank" href="github.com/EmmanuelOchaje">
            Github
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/emmanuel-ochaje-0563482a1/"
          >
            LinkedIn
          </Link>
          <Link target="blank" href="https://x.com/Adocheee">
            Twitter
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
