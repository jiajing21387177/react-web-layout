import React from "react";
import ServiceCard from "./ServiceCard";
import {
  BoltIcon,
  UsersIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/outline";

const services = [
  {
    icon: (
      <BoltIcon className="h-8 w-8 rounded-md bg-indigo-500 p-1 text-white" />
    ),
    title: "Server monitoring",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    icon: (
      <UsersIcon className="h-8 w-8 rounded-md bg-indigo-500 p-1 text-white" />
    ),
    title: "Collaborate",

    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    icon: (
      <CalendarDaysIcon className="h-8 w-8 rounded-md bg-indigo-500 p-1 text-white" />
    ),
    title: "Task scheduling",

    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  // Add more objects as needed
];

const ServicesSection = () => {
  return (
    <section className="container mx-auto my-24">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {services.map((item, index) => (
          <React.Fragment key={`service-${index}`}>
            <ServiceCard
              icon={item.icon}
              title={item.title}
              content={item.content}
            ></ServiceCard>
            {index !== services.length - 1 && (
              <hr className="my-5 block h-px border-0 bg-gray-700 lg:hidden"></hr>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
