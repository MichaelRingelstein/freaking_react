/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import ParisIcon from "../../Badges/Paris.svg";
import MilanoIcon from "../../Badges/Milan.svg";
import BarcelonaIcon from "../../Badges/Barcelona.svg";
import NiceIcon from "../../Badges/Nice.svg";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const citiesAtributes = [
  {
    name: "Paris",
    icon: ParisIcon,
  },
  {
    name: "Milano",
    icon: MilanoIcon,
  },
  {
    name: "Barcelona",
    icon: BarcelonaIcon,
  },
  {
    name: "Nice",
    icon: NiceIcon,
  },
];

const DropdownCity = () => {
  const [selected, setSelected] = useState(citiesAtributes[0]);

  const dropDownSelectionHandler = (event) => {
    console.log(event)
    setSelected(event);
  };

  return (
    <Listbox value={selected.name} onChange={dropDownSelectionHandler}>
      {({ open }) => (
        <>
          <div className="relative">
            <Listbox.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <img className="h-8 w-8 rounded-full" src={selected.icon} alt="" />
            </Listbox.Button>

            {Array.isArray(citiesAtributes) ? (
              <Transition
                show={open}
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Listbox.Options className="z-40 origin-top-right absolute right-0 mt-2 w-fit rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {citiesAtributes.map((city, index) => (
                    <Listbox.Option
                      key={index}
                      className={({ active }) =>
                        classNames(
                          active
                            ? "text-gray-700 bg-gray-100"
                            : "text-gray-900",
                          "cursor-default select-none relative py-2 pl-3 pr-9"
                        )
                      }
                      value={city}
                    >
                      <div className="flex items-center gap-4 pr-4">
                        <img
                          className="h-8 w-8 rounded-full"
                          src={city.icon}
                          alt=""
                        />
                        <p>{city.name}</p>
                      </div>
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            ) : (
              <></>
            )}
          </div>
        </>
      )}
    </Listbox>
  );
};
export default DropdownCity;
