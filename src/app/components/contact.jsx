"use client";
import Image from "next/image";
import { assets } from "../../../assets/assets";
import { useState } from "react";
import { motion } from "motion/react";

const Contact = ({ isDark }) => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a7138d42-dcd8-4d1b-93ee-3847f5f7e803");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="contact"
      className="font-Ovo w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center text-lg mb-2"
      >
        Connect with me
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl"
      >
        Get in Touch
      </motion.h2>
      <motion.p
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12"
      >
        I'd love to hear from you! If you have questions, comments, feedback,
        please use the form below.
      </motion.p>

      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="flex flex-col max-w-2xl mx-auto "
        onSubmit={onSubmit}
      >
        <div className="grid grid-cols-auto gap-6 mb-8 mt-10">
          <motion.input
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            type="text"
            required
            className="flex-1 p-3  outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-gray-950 dark:border-gray-700"
            placeholder="Enter your name"
            name="name"
          />
          <motion.input
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            type="email"
            required
            className="flex-1 p-3  outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-gray-950 dark:border-gray-700"
            placeholder="Enter your email"
            name="email"
          />
        </div>
        <motion.textarea
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          rows="6"
          id=""
          placeholder="Enter your message"
          className="outline-none w-full p-4 border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-gray-950 dark:border-gray-700"
          name="message"
        ></motion.textarea>
        <motion.button
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          type="submit"
          className="py-3 px-8 w-max mx-auto flex items-center justify-between gap-2 bg-black/80 hover:bg-black text-white rounded-full duration-500 dark:bg-transparent border-[0.5px] dark:hover:bg-blue-950"
        >
          Submit Now{" "}
          <Image
            src={
              isDark ? assets.right_arrow_bold_dark : assets.right_arrow_white
            }
            alt=""
            className="w-4"
          />
        </motion.button>
      </motion.form>
      <p>{result}</p>
    </motion.div>
  );
};

export default Contact;
