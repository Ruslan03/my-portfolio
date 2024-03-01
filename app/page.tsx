import Image from "next/image";
import { ThemeSwitcher } from "./_components/ThemeSwitcher";
import Careers from "./_components/Careers";
import Projects from "./_components/Projects";
import TechStack from "./_components/TechStack";
import Contact from "./_components/Contact";

export default function Home() {
  return (
    <>
      <div className="h-20"></div>
      <main className="w-full px-5 py-8 md:p-24 lg:w-4/5 min-h-screen mx-auto bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-950 rounded-t-2xl">
        <div className="flex justify-end">
        <ThemeSwitcher />
        </div>
        <Image
          src={"/images/hero.jpg"}
          width={75}
          height={75}
          alt="Ruslan"
          className="rounded-full"
        />

        <div className="mt-8 flex flex-col gap-2">
          <h1 className="text-2xl font-bold">Halo, saya Ruslan</h1>
          <p>
            Saya adalah seorang ayah dan suami yang biasa saja tapi menurut
            beberapa orang saya luar biasa. Hehe, saya adalah seorang Web
            Developer, saat ini fokus sebagai Front-end Engineer dengan terus
            mengikuti perkembangan teknologi pemrograman populer saat ini.
          </p>
        </div>

        <div className="mt-12">
          <h2 className="font-bold text-xl">Karir Profesional</h2>
          <p className="mt-2">
            Memulai karir sebagai Web Developer sejak 2018, saya memiliki banyak
            pengalaman proyek dan lingkungan kerja yang beragam
          </p>
          <Careers />
        </div>

        <div className="flex flex-col lg:flex-row gap-4 mt-8">
          <div className="flex-grow">
            <h2 className="font-bold text-xl">Proyek Saya</h2>
            <Projects />
          </div>
          <div className="w-full lg:w-2/5  flex flex-col gap-8">
            <Contact />

            <div className="border w-full border-gray-100 dark:border-zinc-800 rounded-2xl p-5">
              <h2 className="font-bold mb-2">Tech Stack</h2>
              <TechStack />
            </div>
          </div>
        </div>
      </main>
      <footer className="w-full lg:w-4/5 mx-auto py-11 px-4 lg:px-24 flex flex-col lg:flex-row gap-8 items-center justify-center bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-950 border-t-0">
        <p className="text-sm text-gray-600 dark:text-white">
          &copy; {new Date().getFullYear()} Ruslan Wanandi. All rights reserved.
        </p>
      </footer>
    </>
  );
}
