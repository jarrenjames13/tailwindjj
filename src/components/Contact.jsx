import React from "react";
import { AiTwotoneMail } from "react-icons/ai";
import { BiMailSend } from "react-icons/bi";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="text-white flex flex-col items-center text-center  gap-6 py-8 px-6" id="contact">
      <h1 className="text-3xl font-bold">Contact Me</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl">
        {/* Social Links */}
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-xl text-transparent bg-gradient-to-r bg-clip-text from-[#690505] to-[#f2f7d4]">
            Social Links
          </h2>
          <p className="flex items-center gap-2 mt-2 text-gray-300">
            <FaInstagram size={20} />
            <a
              href="https://instagram.com/kingshangfeng"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              kingshangfeng
            </a>
          </p>
          <p className="flex items-center gap-2 mt-2 text-gray-300">
            <FaFacebook size={20} />
            <a
              href="https://fb.com/angatnum.13"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Jarren James Parungao
            </a>
          </p>
          <p className="flex items-center gap-2 mt-2 text-gray-300">
            <FaThreads size={20} />
            <a
              href="https://threads.com/kingshangfeng"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              kingshangfeng
            </a>
          </p>
        </div>

        {/* Professional Links */}
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-xl text-transparent bg-gradient-to-r bg-clip-text from-[#690505] to-[#f2f7d4]">
            Professional Links
          </h2>
          <p className="flex items-center gap-2 mt-2 text-gray-300">
            <BiMailSend size={20} />
            <a
              href="mailto:jarrenjames13@gmail.com"
              className="hover:underline"
            >
              jarrenjames13@gmail.com
            </a>
          </p>
          <p className="flex items-center gap-2 mt-2 text-gray-300">
            <FaLinkedin size={20} />
            <a
              href="https://linkedin.com/in/jarrenjames"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Jarren James Parungao
            </a>
          </p>
          <p className="flex items-center gap-2 mt-2 text-gray-300">
            <FaGithub size={20} />
            <a
              href="https://github.com/jarrenjames13"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              jarrenjames13
            </a>
          </p>
        </div>
      </div>

    </div>
  );
};

export default Contact;