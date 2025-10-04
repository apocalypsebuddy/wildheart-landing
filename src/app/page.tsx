import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
// import { Video } from "@/components/Video";
// import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo, benefitThree } from "@/components/data";
export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle
        preTitle="Our mission"
        title="Enriching the lives of wild animals in zoos and sanctuaries"
      >
        WildHeart works directly with zookeepers and animal care professionals
        to help them provide enrichment, food, and habitat improvements. By
        gifting physical resources, we&apos;re able to improve the quality of life of
        animals in need.
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <Benefits data={benefitThree} />
      <SectionTitle
        preTitle="How WildHeart helps animals"
        title="One million animals living in captivity"
      >
        There are over 250 AZA accredited zoos and more than 200 GFAS accredited
        wildlife sanctuaries in the United States and around the world, plus
        many more with independent or no accreditation. We help animals
        directly, no matter where they live.
      </SectionTitle>

      {/* TODO: Upload video to youtube and put video here */}
      {/* <Video videoId="fZ0D0cnR88E" /> */}

      {/* <SectionTitle
        preTitle="Animal Voices"
        title="Testimonials"
      >
      </SectionTitle>

      <Testimonials /> */}

      <SectionTitle preTitle="FAQ" />

      <Faq />
      <Cta />
    </Container>
  );
}
