"use client";

import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import { UseDisclosureReturn } from "@nextui-org/use-disclosure";
import ExternalLinkIcon from "./icons/ExternalLinkIcon";
import Image from "next/image";

interface IProject {
  title: string;
  url: string;
  description: string;
  date: string;
  stack: string[];
  image: string;
}

const _PROJECTS_: IProject[] = [
  {
    title: "E-Catalog Simkarya",
    url: "https://katalog.simkarya.com/",
    description:
      "Mengembangkan website katalog dimana visitor dapat melihat semua product yang dijual, dan admin dapat mengatur product yang akan dijual",
    date: "Januari, 2024",
    stack: ["NextJS", "Vite", "Laravel", "MySql"],
    image: "/images/katalog-simkarya.png",
  },
  {
    title: "Sky ERP",
    url: "https://www.indoskyware.com/erp/",
    description:
      "Mengembangkan sistem ERP untuk memudahkan perusahaan mengintegrasikan dan mengautomasi setiap proses bisnis, dan melakukan kustomisasi terhadap proses bisnis yang unik atau khusus",
    date: "2019 - 2021",
    stack: ["Codeigniter", "MySql"],
    image: "/images/skyerp.png",
  },
  {
    title: "Sibangrir Pemkab Tangerang",
    url: "",
    description:
      "Mengembangkan sistem informasi untuk proses pengembangkan karir ASN di Pemkab Tangerang",
    date: "2021",
    stack: ["Codeigniter", "MySql"],
    image: "/images/sibangrir.png",
  },
  {
    title: "Advocapp",
    url: "",
    description:
      "Mengembangkan sistem informasi yang dibuat untuk lawyer untuk mengautomasi proses advokasi",
    date: "2020",
    stack: ["VueJS", "Codeigniter", "MySql"],
    image: "/images/advocapp.png",
  },
  {
    title: "Belianter",
    url: "",
    description:
      "Mengembangkan sistem informasi E-Commerce dengan delivery service yang menghubungkan penjual, pembeli, dan pengantar",
    date: "2020",
    stack: ["VueJS", "Codeigniter", "MySql"],
    image: "/images/belianter.png",
  },

  {
    title: "R3D Global",
    url: "",
    description:
      "Mengembangkan MVP untuk sistem Media Intelligence Data Analytics platform",
    date: "2019",
    stack: ["Codeigniter", "MySql"],
    image: "/images/r3d.png",
  },
  {
    title: "Shop TV",
    url: "",
    description:
      'Mengembangkan back-office admin untuk E-Commerce yang berjalan di Android TV "Omega"',
    date: "2018",
    stack: ["Laravel", "MySql"],
    image: "/images/shoptv.png",
  },
];
const Projects = () => {
  const disclosure = useDisclosure();
  const [selectedProject, setSelectedProject] = React.useState<IProject | null>(
    null
  );
  return (
    <section className="flex flex-col gap-4 mt-4">
      {_PROJECTS_.map((project) => (
        <article
          className="border border-gray-100 dark:border-zinc-800 rounded-2xl p-5 dark:bg-zinc-800"
          key={Math.random()}
        >
          <p className="text-sm text-gray-400">{project.date}</p>
          <h1 className="font-bold mt-3">{project.title}</h1>
          <p className="text-sm mt-1">{project.description}</p>
          <button
            type="button"
            onClick={() => {
              setSelectedProject(project);

              setTimeout(() => {
                disclosure.onOpen();
              }, 100);
            }}
            className="text-sm font-medium text-teal-500 mt-4"
          >
            Lihat Detail {`->`}
          </button>
        </article>
      ))}
      <ModalDetail project={selectedProject} disclosure={disclosure} />
    </section>
  );
};

const ModalDetail: React.FC<{
  project: IProject | null;
  disclosure: UseDisclosureReturn;
}> = ({ project, disclosure }) => {
  const { isOpen, onOpenChange } = disclosure;

  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        backdrop="blur"
        placement="top"
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {project?.title}
              </ModalHeader>
              <ModalBody>
                <div className="relative w-full min-h-44 mb-2">
                  <Image
                    src={project?.image || ""}
                    alt={project?.title || ""}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                {Boolean(project?.url) && (
                  <a
                    href={project?.url}
                    target={"_blank"}
                    className="flex items-center gap-1 text-teal-500"
                  >
                    {project?.url}
                    <ExternalLinkIcon className="h-4 -mt-[0.8]" />
                  </a>
                )}
                <p>{project?.description}</p>
                <p>Stack used:</p>
                <ul className="-mt-2 list-disc ml-4">
                  {project?.stack.map((item) => (
                    <li key={Math.random()}>{item}</li>
                  ))}
                </ul>
              </ModalBody>
              <ModalFooter>
                {/* <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button> */}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default Projects;
