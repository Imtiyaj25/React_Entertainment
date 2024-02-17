import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn";
import { FaYoutube } from "@react-icons/all-files/fa/FaYoutube";
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
import { FaGlobe } from "@react-icons/all-files/fa/FaGlobe";

const Footer = () => {
  return (
      <footer className="w-full flex flex-col gap-10 sm:gap-5 sm:flex-row items-center justify-between p-4 md:p-10 lg:p-12 mb-16 mt-16 xl:mb-0">
        <div className="w-full flex justify-evenly items-center sm:flex-col sm:items-start sm:justify-center gap-2">

          <div className="text-sm text-center sm:text-left">
            <p>Copyright 2024 Imtiyaj Sayyad- All rights reserved.</p>
            <p>Data provided by -{" "} 
                <a aria-label="tmdb" target="_blank" rel="noreferrer" className="hover:text-white underline"
                    href="https://www.themoviedb.org/">TMDB
                </a>
            </p>
          </div>
          
        </div>
        <div className="flex items-center justify-center gap-4 pb-10 sm:p-0">
            <a 
                aria-label="website"
                href="https://imtiyaj25.github.io/React-Portfolio/"
                target="_blank" rel="noreferrer"
                className="hover:text-white"
                >
                <FaGlobe className="text-xl lg:text-2xl" />
            </a>
            <a 
                aria-label="github"
                href="https://github.com/imtiyaj25"
                target="_blank" rel="noreferrer"
                className="hover:text-white"
                >
                <FaGithub className="text-xl lg:text-2xl" />
            </a>
            <a 
                aria-label="linkedin"
                href="https://www.linkedin.com/in/imtiyaj-sayyad-39b934212/"
                target="_blank" rel="noreferrer"
                className="hover:text-white"
                >
                <FaLinkedinIn className="text-xl lg:text-2xl" />
            </a>
            <a 
                aria-label="youtube"
                href="https://www.youtube.com/channel/UCMklmEK7NfEb8CJcKPwMFiw"
                target="_blank" rel="noreferrer"
                className="hover:text-white"
                >
                <FaYoutube className="text-xl lg:text-2xl" />
            </a>
        </div>
      </footer>
  );
};
export default Footer;