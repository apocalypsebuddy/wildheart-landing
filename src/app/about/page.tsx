import Image from 'next/image';
import { Container } from "@/components/Container";
import tigerHero2 from "../../../public/img/tigerHero2.jpg"

const About = () => {
  return (
    <Container className="px-20 ">
      <div className="relative flex flex-wrap items-center mb-16">
        <div className="z-10 w-full lg:w-1/2 pl-8">
          <h1 className="text-4xl font-bold leading-snug tracking-tight lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight text-gray-800 dark:text-white">
            About Our Organization
          </h1>
          <p className="mt-6 text-xl leading-normal text-gray-400 lg:text-xl xl:text-2xl dark:text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac elit in tortor tristique bibendum ut in justo. Curabitur tempus neque sit amet diam interdum, ac pharetra orci dictum.
          </p>
        </div>
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <Image
            src={tigerHero2}
            alt="Hero Image"
            className="object-cover w-full h-full"
            width={1200}
            height={800}
            loading="eager"
            placeholder="blur"
          />
        </div>
      </div>

      {/* Content Section */}
      <section className="mb-16">
        <h2 className="mb-6 text-3xl font-bold leading-snug text-gray-800 dark:text-white">Our Mission</h2>
        <p className="mb-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fringilla risus et neque ullamcorper, sit amet malesuada dolor viverra. Sed vulputate quam felis, vel suscipit purus vestibulum et. Praesent tincidunt, ex vitae dignissim bibendum, urna libero ullamcorper quam, nec interdum lorem sapien at eros.
        </p>

        {/* Inline Image */}
        <div className="relative w-full h-96 mb-8">
          {/* <Image
            src="/images/mission.jpg"
            alt="Mission Image"
            className="object-cover w-full h-full rounded-lg"
            width={1200}
            height={800}
            loading="lazy"
            placeholder="blur"
          /> */}
        </div>

        <p className="mb-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at ultrices eros. In euismod velit nec turpis pretium, a facilisis libero tempus. Nulla facilisi. Fusce feugiat elit vel eros commodo, sit amet efficitur ex consectetur.
        </p>
      </section>

      {/* Another Content Section */}
      <section className="mb-16">
        <h2 className="mb-6 text-3xl font-bold leading-snug text-gray-800 dark:text-white">Our Team</h2>
        <p className="mb-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
          Proin nec elit vitae ligula fermentum iaculis non at magna. Nam laoreet sollicitudin nisl, vel malesuada risus elementum vel. Nullam vitae libero at mi tincidunt convallis. Ut dapibus lobortis volutpat.
        </p>

        {/* Inline Image */}
        <div className="relative w-full h-96 mb-8">
          {/* <Image
            src="/images/team.jpg"
            alt="Team Image"
            className="object-cover w-full h-full rounded-lg"
            width={1200}
            height={800}
            loading="lazy"
            placeholder="blur"
          /> */}
        </div>

        <p className="mb-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
          Suspendisse potenti. Phasellus gravida purus sit amet nulla lobortis, at suscipit urna tincidunt. Cras ut sollicitudin sem, eget malesuada magna. Aliquam id justo eu libero varius finibus. Nulla quis dolor felis. Duis nec ligula et nisi porttitor suscipit sit amet nec elit.
        </p>
      </section>
    </Container>
  );
};

export default About;
