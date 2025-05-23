"use client";
import React from "react";
import { Container } from "@/components/Container";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "How is aid distributed to zoos and sanctuaries?",
    answer: "WildHeart was founded on the principal of directly helping animals in need. We do not typically provide monetary support. Instead, we work with zoo staff to provide support in ways that have a direct impact on the individual animals they work with.",
  },
  {
    question: "Do you only help animals at accredited non-profits?",
    answer: "No! WildHeart's mission is to help animals wherever they live. While we prioritize aid for non-profit wildlife sanctuaries, we have helped animals across a variety of facilities.",
  },
  {
    question: "Do you run a wildlife sanctuary? ",
    answer:
      "No. WildHeart is a support organization that helps zoos, sanctuaries, and wildlife parks with the animals in their care. ",
  },
  {
    question: "Do you rescue or rehabilate wildlife? ",
    answer:
      "No. While WildHeart may sometimes coordinate with wildlife rescue or rehab facilities, we do not have the ability to house or transport animals. ",
  },
];
