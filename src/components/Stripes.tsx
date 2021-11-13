import { FC } from "react";

export const Stripes : FC = () => (
  <div className="space-y-1 w-32 relative">
    <div className="border-2 border-orange-500 w-24 relative"></div>
    <div className="border-t-3 border-orange-500 w-16 relative left-3"></div>
    <div className="border border-orange-500 w-11 relative left-5"></div>
  </div>
);
