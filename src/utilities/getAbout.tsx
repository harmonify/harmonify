import { APP } from "../config/APP";

export function getAbout () {
  return APP.author.about
    .slice(0, -1)
    .map((paragraph, index) => (
      <p key={index} className="mb-2">
        {paragraph}
      </p>
    ))
    .concat(
      <p className="mb-2">
        {APP.author.about.slice(-1)[0]}
        <span className="ml-px blinking-cursor" />
      </p>
    );
};
