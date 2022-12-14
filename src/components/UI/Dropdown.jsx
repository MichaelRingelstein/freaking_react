/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Dropdown = (props) => {
  const [selected, setSelected] = useState({id: 0, label: "--"});
  console.log(props.list)

  const dropDownSelectionHandler = (event) => {
    console.log(event)
    setSelected(event);
    props.onChange(event);
  };
  return (
    <Listbox value={selected} onChange={dropDownSelectionHandler}>
      {({ open }) => (
        <>
          <div className="relative">
            <div className="relative">
              <Listbox.Button className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                <span className="block truncate">{selected.label}</span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <SelectorIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>

              {props.list.length > 0 ? (
                <Transition
                  show={open}
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute z-10 mt-1 w-full text-left bg-white shadow-lg max-h-60 rounded-md py-1 ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none text-sm">
                    {

                    
                    props.list.map((element) => (
                      <Listbox.Option
                        key={element.id}
                        className={({ active }) =>
                          classNames(
                            active ? "text-white bg-blue-600" : "text-gray-900",
                            "cursor-default select-none relative py-2 pl-3 pr-9"
                          )
                        }
                        value={element}
                      >
                        {({ selected, active }) => (
                          <>
                            <span
                              className={classNames(
                                selected ? "font-semibold" : "font-normal",
                                "block truncate"
                              )}
                            >
                              {element.label}
                            </span>

                            {selected ? (
                              <span
                                className={classNames(
                                  active ? "text-white" : "text-blue-600",
                                  "absolute inset-y-0 right-0 flex items-center pr-4"
                                )}
                              >
                                <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              ) : (
                <></>
              )}
            </div>
            <label className="absolute -top-2 left-2 first-letter:inline-block px-1 bg-white text-xs font-medium text-gray-900">
              {props.label}
            </label>
          </div>
        </>
      )}
    </Listbox>
  );
};
export default Dropdown;
