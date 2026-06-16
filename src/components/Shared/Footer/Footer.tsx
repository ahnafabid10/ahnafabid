import Link from "next/link";
import { 
  FaDiscord, 
  FaFacebook, 
  FaInstagram, 
  FaLinkedin, 
  FaTwitter, 
  FaYoutube,
  FaBluesky
} from "react-icons/fa6";

export default function Footer() {
  return (
    <div
      className="relative h-125 bg-[#b1c2b4]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+500px)] top-[-100vh]">
        <div className="h-125 sticky top-[calc(100vh-500px)]">
          <footer className="text-white max-w-360 mx-auto flex flex-col h-125 justify-between gap-2 overflow-hidden">
            {/* Actual Footer Content */}
            <div className="px-4 md:px-8 pt-16 w-full relative z-10">
              <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-8">

                {/* Links */}
                <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-white text-sm md:text-base font-medium">
                  <Link
                    href="#"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Terms & Conditions
                  </Link>
                  <Link
                    href="#"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Refund Policy
                  </Link>
                  <Link
                    href="#"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Privacy Policy
                  </Link>
                </div>
              </div>

              {/* Divider */}
              <div className="w-full border-t border-white/10 mb-8" />

              {/* Bottom Section */}
              <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6">
                <p className="text-white text-sm">
                  © {new Date().getFullYear()} Abid Nirob | All rights reserved
                </p>

                {/* Social Icons */}
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <a
                    href="https://www.linkedin.com/in/ahnafabid10"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-white hover:text-[#d2ddd4] transition-all duration-300 hover:scale-110"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="https://x.com/ahnafabid03"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-white hover:text-[#d2ddd4] transition-all duration-300 hover:scale-110"
                    aria-label="X (Twitter)"
                  >
                    <FaTwitter className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.facebook.com/ahnafabid04"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-white hover:text-[#d2ddd4] transition-all duration-300 hover:scale-110"
                    aria-label="Facebook"
                  >
                    <FaFacebook className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/ahnafabid10"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-white hover:text-[#d2ddd4] transition-all duration-300 hover:scale-110"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.youtube.com/@ahnafabidnirob"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-white hover:text-[#d2ddd4] transition-all duration-300 hover:scale-110"
                    aria-label="YouTube"
                  >
                    <FaYoutube className="h-5 w-5" />
                  </a>
                  <a
                    href="https://discord.gg/abid420"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-white hover:text-[#d2ddd4] transition-all duration-300 hover:scale-110"
                    aria-label="Discord"
                  >
                    <FaDiscord className="h-5 w-5" />
                  </a>
                  <a
                    href="https://bsky.app/profile/ahnafabidnirob.bsky.social"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-white hover:text-[#d2ddd4] transition-all duration-300 hover:scale-110"
                    aria-label="Bluesky"
                  >
                    <FaBluesky className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Giant Text Section — fades to bottom via Tailwind CSS mask */}
            <section className="relative overflow-hidden">
              <h1
                className="
                    text-center
                    whitespace-nowrap
                    text-[80px]
                    sm:text-[130px]
                    md:text-[180px]
                    lg:text-[220px]
                    xl:text-[260px]
                    font-black
                    tracking-tight
                    leading-none
                    select-none
                    font-display
                    mask-[linear-gradient(to_bottom,black_0%,black_20%,transparent_80%)]
                "
                >
                Abid Nirob
                </h1>
            </section>
          </footer>
        </div>
      </div>
    </div>
  );
}