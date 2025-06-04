// import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";

// TODO: Create a testimonials directory in public/img/ and add the following images:
// - tiger-sestra.jpg: Close-up of a Siberian tiger
// - peacock-ivy.jpg: Peacock with its feathers displayed
// - otter-benson.jpg: River otter playing in water
// - wolf-luna.jpg: Gray wolf in natural habitat
// - gorilla-kibo.jpg: Western lowland gorilla
// - macaw-rio.jpg: Colorful scarlet macaw

// Using existing images as placeholders until proper animal images are added
// import tigerImg from "../../public/img/user1.jpg"; // TODO: Replace with ../../public/img/testimonials/tiger-sestra.jpg
// import peacockImg from "../../public/img/user2.jpg"; // TODO: Replace with ../../public/img/testimonials/peacock-ivy.jpg
// import otterImg from "../../public/img/user3.jpg"; // TODO: Replace with ../../public/img/testimonials/otter-benson.jpg
// import wolfImg from "../../public/img/user1.jpg"; // TODO: Replace with ../../public/img/testimonials/wolf-luna.jpg
// import gorillaImg from "../../public/img/user2.jpg"; // TODO: Replace with ../../public/img/testimonials/gorilla-kibo.jpg
// import parrotImg from "../../public/img/user3.jpg"; // TODO: Replace with ../../public/img/testimonials/macaw-rio.jpg

// TODO: Once the animal images are added, update the Avatar component to use proper sizing and cropping for animal faces

export const Testimonials = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              &quot;Chuff chuffchuffuffff...&quot; 
            </p>

            <Avatar
              // image={tigerImg}
              name="Sestra"
              title="Siberian Tiger at Cat Tales Zoo"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              &quot;Kikaww...kikAWWWWWWW!!!&quot;
            </p>

            <Avatar
              // image={peacockImg}
              name="Ivy"
              title="Indian Peafowl at Cheyenne Mountain Zoo"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              &quot;Chirrr, squeak, chirrrrrr!&quot;
            </p>

            <Avatar
              // image={otterImg}
              name="Benson"
              title="River Otter at Tanganyika Wildlife Park"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

interface AvatarProps {
  // image: any;
  name: string;
  title: string;
}

function Avatar(props: Readonly<AvatarProps>) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      {/* <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          placeholder="blur"
        />
      </div> */}
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

// Interesting little component that AI came up with to highlight the text
// function Mark(props: { readonly children: React.ReactNode }) {
//   return (
//     <>
//       {" "}
//       <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
//         {props.children}
//       </mark>{" "}
//     </>
//   );
// }
