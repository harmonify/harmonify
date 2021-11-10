import { FC } from "react";
import {
  APP_AUTHOR_EMAIL,
  APP_AUTHOR_GITHUB_LINK,
  APP_AUTHOR_LINKEDIN_LINK,
} from "../config/CONSTANTS";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { Link } from "./Link";

export const Footer: FC = () => {
  return (
    <footer className="flex flex-col justify-center items-center py-8 md:py-16 space-y-6">
      <article
        id="contact-me"
        className="w-11/12 max-w-5xl flex flex-col md:flex-row justify-between items-center px-16 py-12 space-y-8 md:space-y-0 md:space-x-16 bg-gradient-to-r from-gray-600 to-gray-800 text-white rounded-2xl"
      >
        <div className="space-y-4">
          <h2 className="text-center md:text-left text-3xl font-bold">I'm available for every opportunity!</h2>
          <p className="text-lg">Interested in working with me? Or just wanna say hi to me? I'd love to hear from you.</p>
        </div>

        <div className="space-y-6 text-center">
          <h2 className="text-2xl font-bold tracking-wider">Contact me 📧</h2>
          <Link
            href={`mailto:${APP_AUTHOR_EMAIL}`}
            className="px-4 py-2 relative inline-block group"
          >
            <div className="w-full h-full bg-gradient-to-r from-transparent via-white to-white opacity-20 absolute left-0 top-0 rounded-3xl z-10 hover:from-white hover:opacity-30 duration-300"/>
            <h3 className="rounded-lg font-mono text-xl z-50">{APP_AUTHOR_EMAIL}</h3>
          </Link>
        </div>
      </article>

      <section id="social-link" className="flex space-x-8">
        <Link id="author-github" href={APP_AUTHOR_GITHUB_LINK} className="flex items-center justify-center rounded-full bg-white border shadow-lg p-4 transform hover:scale-110 cursor-pointer duration-200">
          <BsGithub className="text-3xl md:text-4xl" />
        </Link>
        <Link id="author-linkedin" href={APP_AUTHOR_LINKEDIN_LINK} className="flex items-center justify-center rounded-full bg-white border shadow-lg p-4 transform hover:scale-110 cursor-pointer duration-200">
          <BsLinkedin className="bg-white fill-blue-500 text-3xl md:text-4xl" />
        </Link>
      </section>
    </footer>
  );
};
