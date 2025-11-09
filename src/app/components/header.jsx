import Image from "next/image";
import { assets } from "../../../assets/assets";
import Link from "next/link";
import { motion } from "motion/react";

const Header = ({ isDark }) => {
  return (
    <div className="">
      <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
          <Image
            src={assets.profile_img}
            alt=""
            className="w-full rounded-full max-w-[10rem]"
          />
        </motion.div>
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo"
        >
          Hi there! I'm Emmanuel Ochaje{" "}
          <Image src={assets.hand_icon} alt="" className="w-6" />
        </motion.h2>
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-2xl md:text-4xl font-Ovo"
        >
          Frontend Developer
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="font-Ovo"
        >
          I am a frontend Developer from Nigeria, with 5years of experience in
          multiple establishments.
        </motion.p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
          <motion.a
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            href="#contact"
            className={`px-10 py-3 border bg-black text-white rounded-full border-gray-500 flex items-center gap-2 cursor-pointer`}
          >
            Contact Me{" "}
            <Image
              src={isDark ? assets.right_arrow_bold : assets.right_arrow_white}
              alt=""
              className="w-4"
            />{" "}
          </motion.a>
          <motion.a
            href="/sample-resume.pdf"
            download
            className="px-10 py-3 dark:bg-white dark:text-black border rounded-full border-gray-500 flex items-center gap-2 cursor-pointer"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            My Resume{" "}
            <Image src={assets.download_icon} alt="" className="w-4" />{" "}
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Header;
