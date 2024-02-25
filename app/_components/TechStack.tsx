import Image from "next/image";
import React from "react";

const _STACKS_ = [
  {
    name: "NextJS",
    logo: "/images/nextjs-logo.png",
  },
  {
    name: "NuxtJS",
    logo: "/images/nuxtjs-logo.png",
  },
  {
    name: "Node",
    logo: "/images/nodejs-logo.jpg",
  },
  {
    name: "TailwindCSS",
    logo: "/images/tailwind-logo.png",
  },
  {
    name: "Sass/scss",
    logo: "/images/sass-logo.png",
  },
  {
    name: "Laravel",
    logo: "/images/laravel-logo.jpg",
  },
  {
    name: "Codeigniter",
    logo: "/images/ci-logo.png",
  },
  {
    name: "MySQL",
    logo: "/images/mysql-logo.svg",
  },
  {
    name: "PostgreSQL",
    logo: "/images/postgre-logo.png",
  },
  {
    name: "Vercel",
    logo: "/images/vercel-logo.svg",
  },
  {
    name: "Git",
    logo: "/images/git-logo.png",
  },
];

const TechStack = () => {
  return (
    <>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        Saya adalah seorang <i>Fast Learner</i> dan sangat tertarik kepada
        hal-hal yang baru. Tidak terbatas berikut adalah stack yang saya kuasai:
      </p>
      <div className="flex flex-col gap-2 mt-4">
        {_STACKS_.map((stack) => (
          <div
            className="border border-gray-100 dark:bg-zinc-800 dark:border-zinc-800 flex gap-2 items-center p-2 rounded-xl "
            key={Math.random()}
          >
            <div className="w-8 h-8 rounded-full relative">
              <Image src={stack.logo} fill alt={stack.name} className="rounded-full object-contain" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </div>
            <p className="text-xs font-semibold">{stack.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default TechStack;
