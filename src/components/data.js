import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  BeakerIcon,
  TruckIcon,
  BuildingStorefrontIcon,
  HomeIcon,
  WrenchScrewdriverIcon,
  BuildingOffice2Icon,
} from "@heroicons/react/24/solid";

import rhinoToyBenefit from "../../public/img/rhinoToyBenefit.jpg";
import Benefit1Zeb from "../../public/img/Benefit1Zeb.jpg";
import tigerBenefit3 from "../../public/img/tigerBenefit3.jpg";

const benefitOne = {
  title: "Toys and enrichment",
  desc: "Enrichment allows zoo animals to exhibit their natural behaviors, keeping them active and mentally stimulated",
  image: rhinoToyBenefit,
  bullets: [
    {
      title: "Indestructable toys",
      desc: "We send durable purpose made toys that can stand up to tiger claws and hippo teeth, and the toughest of wild play",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Natural enrichment",
      desc: "Novel scents, plants, and ethically sourced pelts let wildlife expand their sensory experiences, mimicking a variety of interactions in their natural habitats",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Upcycled items",
      desc: "WildHeart volunteers have used old firehose and other recycled materials to build toys, hammocks, and structures to climb on",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Food and supplements",
  desc: "Proper diet and supplements mimic what animals would eat in the wild and ensure proper nutrition",
  image: Benefit1Zeb,
  bullets: [
    {
      title: "Supplements and specialty nutrition",
      desc: "WildHeart has provided veterinary zoo grade food to wildlife rescue facilities around the world that were struggling to afford healthy diets",
      icon: <BeakerIcon />,
    },
    {
      title: "Emergency food assistance",
      desc: "When sanctuaries in the path of hurricanes have lost power to their freezers, we've stepped in with refrigerated trucks and new food resources",
      icon: <TruckIcon />,
    },
    {
      title: "Food donation resources",
      desc: "We have worked with local grocery markets to connect them with sanctuaries and deliver unused food that would otherwise be thrown out",
      icon: <BuildingStorefrontIcon />,
    },
  ],
};

const benefitThree = {
  title: "Habitats and enclosures",
  desc: "Enclosures can be interactive and fun, while allowing zoo animals more furniture to play and relax on",
  image: tigerBenefit3,
  bullets: [
    {
      title: "Platforms, hammocks, and furniture",
      desc: "WildHeart has built sturdy platforms and hammocks for big cats, wolves, and primates so they have more usable space",
      icon: <HomeIcon />,
    },
    {
      title: "Improvements and renovations",
      desc: "Small sanctuaries with a miniscule budget have received upgrades to make habitats safer and more comfortable for the animals",
      icon: <WrenchScrewdriverIcon />,
    },
    {
      title: "New and larger enclosures",
      desc: "WildHeart has built new enclosures for rescued tigers in Thailand, and completed the largest captive wolf habitat in North America",
      icon: <BuildingOffice2Icon />,
    },
  ],
};

export { benefitOne, benefitTwo, benefitThree };
