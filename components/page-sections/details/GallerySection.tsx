import React from "react";
import bedroom from "@/public/bedroom.jpg";
import bathroom from "@/public/bathroom.jpg";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

import Image from "next/image";

type Props = {};

function GallerySection({}: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const property_images = [
    { image: bedroom },
    { image: bathroom },
    { image: bathroom },
    { image: bathroom },
    { image: bathroom },
    { image: bathroom },
    { image: bathroom },
  ];
  return (
    <div className=" pb-16 w-full">
      <div className="max-w-7xl w-full mx-auto px-2 flex flex-col">
        <div className="flex flex-row items-center pb-8">
          <div className="flex flex-col flex-1">
            <p className="text-slate-700 font-semibold">Luxury Family Home</p>
            <p>15002 Zengeza 3 Extension, Chitungwiza</p>
          </div>
          <p className="text-lg font-semibold text-slate-700">
            13000{" "}
            <span className="text-sm font-medium text-slate-700">/mo</span>
          </p>
        </div>
        <div className="grid md:grid-cols-7 grid-cols-2 gap-4">
          <div onClick={onOpen} className="relative col-span-5 md:h-full h-96 bg-slate-100 rounded-xl overflow-hidden">
            <Image src={bedroom} alt="Main image" layout="fill" />
          </div>
          <div className="md:col-span-2 col-span-5 h-full grid grid-cols-2 gap-4">
            {property_images?.length > 6 ? (
              <>
                {property_images.slice(0, 5).map((item, index) => (
                  <PropertyImage item={item} key={index} />
                ))}
                <div
                  className="cursor-pointer relative grid items-center content-center justify-center overflow-hidden col-span-1 bg-slate-100 rounded-xl"
                  style={{
                    backgroundImage: `url(${property_images[6].image.src})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    width: "100%",
                  }}
                >
                  <div className="overlay  absolute  top-0 right-0 left-0 bottom-0 bg-black z-0 opacity-40"></div>
                  <p className="text-white z-10 font-semibold text-lg">
                    26 more
                  </p>
                </div>
              </>
            ) : (
              <>
                {property_images.map((item, index) => (
                  <PropertyImage item={item} key={index} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
      <Modal size={"5xl"} isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent height={'2xl'} rounded={"lg"} overflow={'hidden'}>
          <ModalBody>
            <div className="flex h-full rounded overflow-hidden">
              <Image src={bedroom} alt="Main image" layout="fill" />
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}

interface PropertyImageProps {
  item?: any;
}

const PropertyImage = ({ item }: PropertyImageProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div
      onClick={onOpen}
      className="relative overflow-hidden h-32 col-span-1 bg-slate-100 rounded-xl"
    >
      <Image src={item.image} alt="Main image" layout="fill" />
      <Modal size={"5xl"} isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent height={'2xl'} rounded={"lg"} overflow={'hidden'}>
          <ModalBody>
            <div className="flex h-96 rounded overflow-hidden">
              <Image src={item.image} alt="Main image" layout="fill" />
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default GallerySection;
