"use client";
import React from "react";
import Image from "next/image";
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

interface ICareer {
  name: string;
  logo: string;
  position: string;
  url: string;
  period: string;
  description: string;
  bgClass: string;
  companyName: string;
}

const _CAREERS_: ICareer[] = [
  {
    name: "Aria",
    logo: "/images/aria-logo.png",
    position: "Sr. Front-end Engineer",
    url: "https://aria-indonesia.id",
    period: "Jul 2023 - Sekarang",
    description:
      "Perusahaan yang bergerak di bidang Agriculture, mengembangkan sistem web mapping, gps tracking yang banyak berhubungan dengan GIS (geographic information system).",
    bgClass: "bg-green-800",
    companyName: "PT Aria Agri Indonesia",
  },
  {
    name: "Arvis",
    logo: "/images/arvis-logo.svg",
    position: "Sr. Front-end Engineer",
    url: "https://arvis.id",
    period: "Oct 2021 - Jul 2023",
    description:
      "Mengembangkan sistem CRM, Legal dashboard, E-Plantation, serta Custom Software Development lainya",
    bgClass: "bg-zinc-800 dark:bg-zinc-700",
    companyName: "PT Aksara Integrasi Sejahtera",
  },
  {
    name: "Skyware",
    logo: "/images/skyware-logo.png",
    position: "Fullstack Web Developer",
    url: "https://www.indoskyware.com/",
    period: "2018 - 2021",
    description:
      "Mengembangkan sistem untuk memenuhi kebutuhan suatu perusahaan seperti ERP, POS, E-Commerce, dan lainya.",
    bgClass: "bg-blue-900",
    companyName: "PT. Kreasi Digital Prima",
  },
  {
    name: "Marva Cipta Indonesia",
    logo: "/images/mci-logo.png",
    position: "Fullstack Web Developer",
    url: "",
    period: "2018",
    description:
      "Perusahaan yang bergerak di bidang software development dan Manufacturing, Mengembangkan sebuah sistem Tracking Logistic B2B.",
    bgClass: "bg-zinc-200",
    companyName: "Marva Cipta Indonesia",
  },
];

const Careers = () => {
  const [selectedCareer, setSelectedCareer] = React.useState<ICareer | null>(
    null
  );
  const disclosure = useDisclosure();

  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        {_CAREERS_.map((career: ICareer) => (
          <div
            className="min-h-0 bg-gray-100 dark:bg-zinc-800 rounded-xl transform hover:scale-105 ease-in-out duration-100 cursor-pointer"
            key={Math.random()}
            onClick={() => {
              setSelectedCareer(career);
              setTimeout(() => {
                disclosure.onOpen();
              }, 200);
            }}
          >
            <div
              className={`${career.bgClass} w-full rounded-t-xl h-24 flex items-center justify-center`}
            >
              <div className="w-36 md:w-40 h-full relative">
                <Image src={career.logo} alt="logo" fill className="object-contain" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
            </div>
            <div className="h-full px-4 py-4">
              <h1 className="text-xs md:text-sm">{career.name}</h1>
              <p className="text-sm md:text-medium font-medium">{career.position}</p>
              <p className="text-xs md:text-sm opacity-75">{career.period}</p>
            </div>
          </div>
        ))}
      </div>
      <ModalDetail disclosure={disclosure} career={selectedCareer} />
    </>
  );
};

const ModalDetail: React.FC<{
  career: ICareer | null;
  disclosure: UseDisclosureReturn;
}> = ({ career, disclosure }) => {
  const { isOpen, onOpenChange } = disclosure;

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop="blur" scrollBehavior="inside" placement="top">
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {career?.name}
              </ModalHeader>
              <ModalBody>
                <a
                  href={career?.url || "#!"}
                  target={career?.url.length ? "_blank" : ""}
                  className="text-sm flex items-center gap-1"
                >
                  {career?.companyName}
                  <ExternalLinkIcon className="h-4 -mt-[0.8]" />
                </a>
                <p>{career?.description}</p>
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

export default Careers;
