import { FC, ReactElement } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { APP } from "../config/APP";
import { Link } from "./Link";

interface SocialLinkProps {
  id: string;
  href: string;
  children: ReactElement,
}

interface FooterProps {

}

const SocialLink : FC<SocialLinkProps> = ({ id, href, children }) => (
  <Link
    id={`author-${id}`}
    label={`author's ${id}`}
    href={href}
    className="flex items-center justify-center rounded-full bg-white hover:bg-orange-500 border shadow-lg hover:shadow-xl p-4 transform hover:scale-110 cursor-pointer duration-200 group"
  >
    {children}
  </Link>
);

export const Footer: FC<FooterProps> = () => {
  return (
    <footer className="flex flex-col justify-center items-center py-8 md:py-16 space-y-6">
      <article
        id="contact-me"
        className="w-11/12 max-w-5xl flex flex-col md:flex-row justify-between items-center px-16 py-12 space-y-8 md:space-y-0 md:space-x-18 border border-opacity-25 border-gray-500 shadow-md rounded-2xl"
      >
        <div className="space-y-4">
          <h2 className="text-center md:text-left text-3xl font-bold">
            I'm <span className="text-orange-600">available for every opportunity!</span>
          </h2>
          <p className="text-lg">
            Interested in working with me? Or just wanna say hi? I'd love
            to hear from you.
          </p>
        </div>

        <div className="space-y-6 text-center">
          <h2 className="text-2xl text-orange-600 font-bold">Contact me 📧</h2>
          <Link
            href={`mailto:${APP.author.email}`}
            className="relative inline-block group"
          >
            <h3 className="px-6 py-2 rounded-3xl font-mono tracking-wider text-white text-xl font-semibold z-50 bg-gradient-to-r from-orange-500 hover:from-orange-400 via-orange-600 hover:via-orange-500 to-orange-600 hover:to-orange-500 duration-500">
              {APP.author.email}
            </h3>
          </Link>
        </div>
      </article>

      <section id="social-link" className="flex space-x-8">
        <SocialLink
          id="github"
          href={APP.author.socials.github}
        >
          <BsGithub className="text-3xl md:text-4xl group-hover:bg-orange-500 group-hover:text-white duration-200" />
        </SocialLink>
        
        <SocialLink
          id="linkedin"
          href={APP.author.socials.linkedin}
        >
          <BsLinkedin className="bg-white group-hover:bg-orange-500 group-hover:fill-white text-3xl md:text-4xl duration-200" />
       </SocialLink>
      </section>
    </footer>
  );
};
