import Image from 'next/image';
import { Container } from "@/components/Container";
import tigerHero2 from "../../../public/img/tigerHero2.jpg"
import missionWolfFence from "../../../public/img/gallery/jess-building-fence.jpg"
import bolero21 from "../../../public/img/gallery/bolero 021.jpg"
import thailandVolunteers from "../../../public/img/gallery/thailand-volunteers.jpg"
import tigerBoomerBall from "../../../public/img/gallery/tiger-boomer-ball-2.jpg"
import katWolf from "../../../public/img/gallery/kat-wolf.jpg"
import joshWolf from "../../../public/img/gallery/wolf-josh-2.jpg"
import tigerCuddle from "../../../public/img/gallery/tiger-cuddle.jpg"
import thailandEnclosure from "../../../public/img/gallery/thailand-enclosure-build.jpg"
import followTheTigers from "../../../public/img/gallery/follow-the-tigers-campaign.jpg"

const About = () => {
  return (
    <Container className="px-8 md:px-16 lg:px-32 xl:px-52">
      <div className="relative flex flex-wrap items-end mb-16 h-96 lg:h-[400px] xl:h-[400px]">
        <div className="z-10 w-full lg:w-1/2 pl-8 pb-8">
          <h1 className="text-4xl font-bold leading-snug tracking-tight lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight text-gray-700 dark:text-white">
            About WildHeart
          </h1>
          
        </div>
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <Image
            src={tigerHero2}
            alt="WildHeart Foundation Hero"
            className="object-cover w-full h-full"
            width={1200}
            height={800}
            loading="eager"
            placeholder="blur"
          />
        </div>
      </div>

      <p className="my-6 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            The story of a foundation born from passion for wild animals and the journey that shaped its mission to enrich the lives of animals in human care.
          </p>

      {/* How It Started */}
      <section className="mb-16">
        <h2 className="mb-6 text-3xl font-bold leading-snug text-gray-800 dark:text-white">How It Started</h2>
        <p className="mb-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
          I started the WildHeart Foundation in 2015 after leaving my career working with exotic animals. I had trained tigers, worked with small sanctuaries and zoos, 
          and seen firsthand both the passion of keepers and the difficult conditions that many animals faced. 
          I wanted to make sure that animals in human care could live better lives, no matter where they were. WildHeart was my way of turning that vision into action.
        </p>
        {/* Mission section with image and text side by side */}
        <div className="flex flex-col lg:flex-row gap-8 mb-8">
          <div className="lg:w-1/2">
            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              The mission was simple: enrich the lives of wild animals through better enclosures, enrichment, and direct support. 
              I wanted every dollar raised to go toward improvements that the animals could actually use. 
              It did not matter if they lived at a roadside zoo or a respected sanctuary. What mattered was making their lives better.
            </p>
          </div>
          <div className="lg:w-1/2">
            <div className="relative w-full h-80">
              <Image
                src={tigerBoomerBall}
                alt="A tiger playing with a large plastic boomer ball"
                className="object-cover w-full h-full rounded-lg"
                width={400}
                height={600}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Growing the Mission */}
      <section className="mb-16">
        <h2 className="mb-6 text-3xl font-bold leading-snug text-gray-800 dark:text-white">Growing the Mission</h2>
        <p className="mb-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
          WildHeart grew quickly from its small beginnings. Early on, we partnered with students from the Pikes Peak Community College zookeeping program 
          to organize volunteer projects, including putting the finishing touches on the largest captive wolf enclosure in North America at Mission Wolf. 
          That project was a milestone and set the tone for the kind of work we wanted to do: practical improvements that made an immediate difference for animals.
        </p>

        <p className="mb-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
          During this time, I also worked toward one of my biggest ambitions: buying a zoo in Colorado that had gone up for sale. We lined up backers and brought our business plan to the bank, 
          securing over half a million dollars in financing. In the end, the deal fell through, partly due to the involvement of people later connected with the Tiger King series. 
          Looking back, I believe it was for the best, but that vision was a huge driving force behind WildHeart and reflected the scale of the dreams I had for it.
        </p>

         {/* Inline Image - Mission Wolf project */}
         <div className="flex flex-col lg:flex-row gap-8 mb-8">
           <div className="lg:w-1/2">
           <div className="relative h-96 mb-8">
           <Image
             src={bolero21}
             alt="Bolero the lion playing with a donated firehose toy"
             className="object-cover w-full h-full rounded-lg"
             width={1200}
             height={600}
             loading="lazy"
           />
         </div>
           </div>
           <div className="lg:w-1/2">
           <p className="mb-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
           From there, our reach expanded. We supported sanctuaries across Colorado and the surrounding states, sending toys and enrichment to rescued wildlife across the U.S. 
           We provided food to zoos impacted by hurricanes in Texas, shipped supplies to facilities in need, and responded to requests from keepers and sanctuaries around the world. 
           We sent toys as far as Africa, South America, and the Middle East, giving animals opportunities for play and enrichment that they otherwise would not have had.
         </p>
           </div>
         </div>
        
      </section>

      {/* Peak WildHeart */}
      <section className="mb-16">
        {/* <h2 className="mb-6 text-3xl font-bold leading-snug text-gray-800 dark:text-white">Peak WildHeart</h2> */}
        
        <div className="flex flex-col lg:flex-row gap-8 mb-8">
          <div className="lg:w-2/3">
            <p className="mb-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              At its height, WildHeart was beginning to reflect the big dreams I had for it. We hosted fundraising events like Tigers and Tuxedos, 
              where a single evening could bring in tens of thousands of dollars for wildlife projects. Even with that success, we never reached the level 
              where anyone could take a salary, and the work remained something we all did in our free time.
            </p>

            <p className="mb-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              One of the proudest milestones came when we were contacted by Follow the Tigers, an organization working with Thailand&apos;s Department of Wildlife 
              after they rescued tigers from the infamous Tiger Temple tourist attraction. The Thai officials were cautious about outside groups, 
              but alongside Follow the Tigers, we were able to help them build the first new enclosure. It was the pinnacle of everything 
              WildHeart stood for, and I still look back on it as one of the most meaningful projects I have ever been part of.
            </p>
          </div>
          <div className="lg:w-1/3">
            <div className="relative h-96">
              <Image
                src={thailandVolunteers}
                alt="Volunteers working with Thailand's Department of Wildlife"
                className="object-cover w-full h-full rounded-lg"
                width={1200}
                height={600}
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Thailand project images */}
        <div className="flex flex-col lg:flex-row gap-8 mb-8">
          <div className="lg:w-2/3 2xl:w-1/2">
            <div className="relative">
              <Image
                src={followTheTigers}
                alt="Follow the Tigers campaign"
                className="w-full h-auto rounded-lg"
                width={1200}
                height={600}
                loading="lazy"
              />
            </div>
          </div>
          <div className="lg:w-1/3 2xl:w-1/2">
            <div className="relative h-96">
              <Image
                src={thailandEnclosure}
                alt="Thailand tiger enclosure construction"
                className="object-cover w-full h-full rounded-lg"
                width={1200}
                height={600}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Closing a Chapter */}
      <section className="mb-16">
        <h2 className="mb-6 text-3xl font-bold leading-snug text-gray-800 dark:text-white">Closing a Chapter</h2>
        <p className="mb-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
          But as the work expanded, so did the demands. I was running WildHeart in my free time, often putting in forty hours a week on top of a full-time job. 
          My partners and volunteers shared the passion, but none of us could sustain that pace forever. At the same time, I realized I was facing serious mental health 
          challenges and stepped away from my day job to focus on recovery.
        </p>
        <p className="mb-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
          During that period, I also had the idea for a web app that could connect zookeepers and donors, creating a new way to provide resources for animals in need. 
          To make that vision possible, I began learning how to code. What started as a way to keep WildHeart alive eventually grew into a full career change, 
          which took much of my focus and energy.
        </p>
        <p className="mb-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
          The pandemic arrived during that time and dealt a major blow. Volunteers had less time, social and economic anxiety was high, and resources dried up. 
          For a while I kept trying to see if the foundation could sustain itself, but it became harder and harder to keep momentum alive. 
          After about a year of struggling to hold it together, I accepted that WildHeart had run its course and formally dissolved it after six years of work.
        </p>
      </section>

      {/* The Spirit Lives On */}
      <section className="mb-16">
        <h2 className="mb-6 text-3xl font-bold leading-snug text-gray-800 dark:text-white">The Spirit Lives On</h2>
        <p className="mb-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
          Even though the nonprofit dissolved, WildHeart has never really left me. It grew out of my years working hands-on with animals, and it shaped how I see the world. 
          To this day, my motivation and drive in my daily life is still influenced by the vision I cultivated. I carry that passion with me.
        </p>

        <p className="mb-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
          The spirit of WildHeart is still alive in all of us who were part of it. It reminds me of what matters most, 
          and it remains the seed of what I hope to build in the future. My heart remains wild.
        </p>

        {/* Image Grid - 3x3 layout */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="col-span-1 row-span-1">
            <div className="relative h-64">
              <Image
                src={katWolf}
                alt="Kat getting a kiss from a wolf"
                className="object-cover w-full h-full rounded-lg"
                width={400}
                height={600}
                loading="lazy"
              />
            </div>
          </div>
          <div className="col-span-2 row-span-2">
            <div className="relative h-[calc(256px+256px+1rem)]">
              <Image
                src={tigerCuddle}
                alt="Mathias cuddling with a tiger"
                className="object-cover w-full h-full rounded-lg"
                width={400}
                height={600}
                loading="lazy"
              />
            </div>
          </div>
          <div className="col-span-1 row-span-1">
            <div className="relative h-64">
              <Image
                src={joshWolf}
                alt="Josh with spending quality time with a wolf"
                className="object-cover w-full h-full rounded-lg"
                width={400}
                height={600}
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Inline Image - Final reflection image */}
        {/* <div className="relative w-full h-96 mb-8">
          <Image
            src="/img/volunteers.jpg"
            alt="WildHeart volunteers and the spirit of the foundation"
            className="object-cover w-full h-full rounded-lg"
            width={1200}
            height={600}
            loading="lazy"
          />
        </div> */}

        
      </section>
    </Container>
  );
};

export default About;
