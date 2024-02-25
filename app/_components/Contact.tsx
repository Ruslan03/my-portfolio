import React from "react";
import WhatsappIcon from "./icons/WhatsappIcon";
import ExternalLinkIcon from "./icons/ExternalLinkIcon";
import EmailIcon from "./icons/EmailIcon";
import LinkedInIcon from "./icons/LinkedInIcon";
import XIcon from "./icons/XIcon";
import GitlabIcon from "./icons/GitlabIcon";
import GithubIcon from "./icons/GithubIcon";
import { Tooltip } from "@nextui-org/tooltip";

const _CONTACT_ = [
  {
    label: 'Whatsapp',
    icon: <WhatsappIcon />,
    contact: "+628997541414",
    url: `https://wa.me/628997541414?text=${encodeURI("Halo Ruslan")}`,
  },
  {
    label: 'Email',
    icon: <EmailIcon />,
    contact: "ruslanwanandi@gmail.com",
    url: "mailto:ruslanwanandi@gmail.com",
  },
];

const _SOCIAL_MEDIA_ = [
  {
    label: 'LinkedIn',
    icon: <LinkedInIcon />,
    url: "https://www.linkedin.com/in/ruslan-wanandi-54b57a163/",
  },
  {
    label: 'X/Twitter',
    icon: <XIcon />,
    url: "https://twitter.com/slaan__",
  },
  {
    label: 'Gitlab',
    icon: <GitlabIcon />,
    url: "https://gitlab.com/ruslan03",
  },
  {
    label: 'Github',
    icon: <GithubIcon />,
    url: "https://github.com/Ruslan03",
  },
];

const Contact = () => {
  return (
    <div className="border w-full border-gray-100 dark:border-zinc-800 rounded-2xl p-5 mt-11">
      <h2 className="font-bold mb-2">Kontak saya</h2>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        Saya dapat dihubungi kapan saja, melalui Whatsapp atau Email:
      </p>

      <div className="flex flex-col gap-2 my-3">
        {_CONTACT_.map((item) => (
          <div key={Math.random()} className="flex gap-2 py-2 px-3 items-center bg-gray-100 dark:bg-zinc-800 rounded-xl ">
            {item.icon}
            <p className="text-sm flex-grow ">{item.contact}</p>
            <Tooltip content={<div className="px-2">{item.label}</div>} showArrow color="foreground">
            <a
              href={item.url}
              target="_blank"
              className="hover:bg-gray-200 hover:dark:bg-zinc-900 p-1 rounded-xl ease-in-out duration-300"
            >
              <ExternalLinkIcon />
            </a>
            </Tooltip>
          </div>
        ))}
      </div>

      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        Atau, bisa juga:
      </p>
      <div className="flex gap-2 mt-2">
        {_SOCIAL_MEDIA_.map((item) => (
            <Tooltip key={Math.random()} content={<div className="px-2">{item.label}</div>} showArrow color="foreground">
          <a
            
            href={item.url}
            target="_blank"
            className="hover:bg-gray-100 hover:dark:bg-zinc-800 p-1 rounded-xl ease-in-out duration-300"
          >
            {item.icon}
          </a>
          </Tooltip>
        ))}
      </div>
    </div>
  );
};

export default Contact;
