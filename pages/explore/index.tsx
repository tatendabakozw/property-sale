import FilterSection from "@/components/filter-section/FilterSection";
import PropertyItem from "@/components/property-item/PropertyItem";
import GeneralLayout from "@/layouts/GeneralLayout";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

type Props = {};

const Explore = (props: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <GeneralLayout title="Explore" description="Explore all our properties">
      <div className="bg-slate-100 min-h-screen py-32">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-3 gap-8 px-2">
          <p className="text-2xl col-span-3 font-semibold text-slate-700">
            Properties List
          </p>
          <div className="md:col-span-1 md:flex hidden col-span-3 w-full flex-col">
            <FilterSection />
          </div>
          <div className="md:col-span-2 col-span-3 grid grid-cols-2 gap-8">
            <div className="col-span-2 flex flex-col space-y-8">
              <div className="flex text-sm flex-row items-center bg-white p-4 rounded shadow">
                <p className="text-sm text-slate-700 flex-1">
                  10 Search Results
                </p>
                <div
                  onClick={onOpen}
                  className="md:hidden flex bg-slate-100 p-2 rounded-full"
                >
                  <AdjustmentsHorizontalIcon height={16} width={16} />
                </div>
              </div>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
                {[1, 2, 3, 4, 5, 6].map((item, index) => (
                  <PropertyItem key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Filter Your Search</ModalHeader>
          <ModalCloseButton />
          <ModalBody p={0}>
            <FilterSection />
          </ModalBody>
        </ModalContent>
      </Modal>
    </GeneralLayout>
  );
};

export default Explore;
