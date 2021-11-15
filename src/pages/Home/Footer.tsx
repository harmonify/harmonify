import { FC, ReactElement } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { APP } from "../../config/APP";
import { Link } from "../../components/Link";
import { Panel } from "../../components/Panel";

interface FooterProps {}

interface ContactProps {}

interface SocialLinkButtonProps {
  id: string;
  href: string;
  children: ReactElement;
}

interface SocialLinksProps {}

export const Footer: FC<FooterProps> = () => {
  return (
    <footer className="flex flex-col justify-center items-center py-8 md:py-16 space-y-6">
      <Contact />
      <SocialLinks />
    </footer>
  );
};

const Contact: FC<ContactProps> = () => (
  <Panel className="w-11/12 max-w-5xl flex flex-col lg:flex-row justify-between items-center px-16 py-12 space-y-8 lg:space-y-0 lg:space-x-18 dark:bg-blue-gray-900 dark:bg-opacity-60">
    <div className="space-y-4 lg:w-2/3 text-center lg:text-left">
      <h2 className="text-3xl ">
        I'm&nbsp;
        <span className="text-orange-600">available</span>
        &nbsp;for every opportunity!
      </h2>
      <p className="text-lg font-comfortaa">
        Interested in working with me? Or just wanna say hi? I'd love to hear
        from you.
      </p>
    </div>

    <section id="contact" className="space-y-6 text-center flex flex-col lg:w-1/3">
      <Link
        href="#contact"
        iconEnabled={true}
        iconClassName="left-4 bottom-0"
      >
        <h2 className="inline-block text-3xl text-orange-600 ">
          Contact me 📧
        </h2>
      </Link>

      <Link
        href={`mailto:${APP.author.email}`}
        newTab={true}
        className="relative inline-block px-6 py-2 rounded-3xl bg-gradient-to-r from-orange-500 via-orange-600 to-orange-600 duration-500 transform hover:scale-110 hover:translate-y-1 focus:scale-110 focus:translate-y-1 group"
      >
        <h3 className="tracking-wider text-white text-xl z-50 font-baloo">
          {APP.author.email}
        </h3>
      </Link>
    </section>
  </Panel>
);

const SocialLinkButton: FC<SocialLinkButtonProps> = ({ id, href, children }) => (
  <Link
    id={`author-${id}`}
    label={`author's ${id}`}
    href={href}
    newTab={true}
    className="flex items-center justify-center rounded-full bg-white hover:bg-orange-500 focus:bg-orange-500 border shadow-lg hover:shadow-xl focus:shadow-xl p-4 transform hover:scale-110 focus:scale-110 cursor-pointer duration-200 group"
  >
    {children}
  </Link>
);

const SocialLinks: FC<SocialLinksProps> = () => (
  <section id="social-link" className="flex space-x-8">
    <SocialLinkButton id="github" href={APP.author.socials.github}>
      <BsGithub className="text-3xl md:text-4xl dark:text-black group-hover:bg-orange-500 group-hover:text-white group-focus:text-white  duration-200" />
    </SocialLinkButton>

    <SocialLinkButton id="linkedin" href={APP.author.socials.linkedin}>
      <BsLinkedin className="text-3xl md:text-4xl dark:text-black group-hover:bg-orange-500 group-hover:fill-white group-focus:fill-white duration-200" />
    </SocialLinkButton>
  </section>
);
