/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/outline";
import ExtraMissionForm from "../MissionCreation/ExtraMissionForm";
import { supabase } from "../../api/client";
import Button from "../UI/Button";

export default function ExtraMissionModal(props) {
  const [open, setOpen] = useState(true);

  const addExtraMissionHandler = (mission) => {
    console.log("Extra mission added");
    postMission(mission, props.shift_id);
  };

  const cancelHandler = () => {
    setOpen(false);
    props.onCancel();
  };

  const postMission = async (mission, id_shift) => {
    const { data, error } = await supabase.from("missions").upsert({
      shift_id: id_shift,
      mission_type: mission.missionTypeID,
      quantity: mission.quantity,
      scooters: mission.vins,
      pickup_address: mission.pickUp,
      dropoff_address: mission.dropOff,
      comment: mission.comment,
      fleet: mission.fleet,
    });
    console.log("mission added: ", data);
    console.log("erreur: ", error);
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={cancelHandler}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full min-w-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform rounded-lg w-full bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      Extra mission
                    </Dialog.Title>
                    <div className="mt-2">
                      <ExtraMissionForm
                        onAdd={addExtraMissionHandler}
                      ></ExtraMissionForm>
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 right-0 p-4">
                  <button onClick={() => cancelHandler(false)}>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
