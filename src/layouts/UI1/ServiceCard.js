import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const ServiceCard = ({ icon, title, content }) => {
  const itemID = `service-${title.replace(/\s+/g, "-")}`;

  return (
    <div id={itemID} className="flex basis-full flex-col gap-3 md:basis-1/3">
      {icon}
      <h3 className="font-bold">{title}</h3>
      <p className="flex-auto">{content}</p>
      <div>
        <a
          href={`#${itemID}`}
          className="mt-5 inline-flex gap-1 text-indigo-400"
        >
          Learn more
          <ArrowRightIcon className="h-4 w-4 self-center" />
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
