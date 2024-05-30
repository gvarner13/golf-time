import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { SignUpForm } from "@/components/signup";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface HoleData {
  holeNumber: number;
  holePar: number;
  holeYards: number;
  holePhoto: string;
}

const holeData: HoleData[] = [
  {
    holeNumber: 1,
    holePar: 3,
    holeYards: 250,
    holePhoto: "/golf_course_images/holes/h_11ANGC10-MMa2148Hc-copy.avif",
  },
  {
    holeNumber: 2,
    holePar: 4,
    holeYards: 350,
    holePhoto: "/golf_course_images/holes/h_12ANGC12-m1734Hc-wb.avif",
  },
];

export function CoursePicker() {
  return (
    <>
      <div className="min-h-screen mb-8">
        <div className="mb-8">
          <h1 className="text-center text-5xl font-bold tracking-tight text-slate-900 mb-4">
            Select Your Course
          </h1>
          <p className="mb-4 text-center">
            Choose from three beautiful 9 hole courses that link together for a
            great golf experiance.
          </p>
        </div>
        <div className="flex gap-x-8">
          <CourseCard
            courseTitle="Red Course"
            courseDescription="Simple 9 holes"
            courseImage="/golf_course_images/course_image_1.webp"
          />
          <CourseCard
            courseTitle="Blue Course"
            courseDescription="Simple 9 holes Par 36"
            courseImage="/golf_course_images/course_image_3.webp"
          />
          <CourseCard
            courseTitle="White Course"
            courseDescription="Simple 9 holes"
            courseImage="/golf_course_images/course_image_2.webp"
          />
        </div>
      </div>
      <div className="mt-8 min-h-screen">
        <HoleCarousel data={holeData} />
      </div>
      <div className="mt-8 min-h-[500px] flex justify-center gap-x-8">
        <TimeWidget />
        <TimeWidget />
        <TimeWidget />
      </div>
      <div className="my-8 flex justify-center">
        <SignUpForm />
      </div>
    </>
  );
}

function CourseCard({
  courseTitle,
  courseDescription,
  courseImage,
}: {
  courseTitle: string;
  courseDescription: string;
  courseImage: string;
}) {
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle className="text-center">{courseTitle}</CardTitle>
        <CardDescription className="text-center">
          {courseDescription}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          <img
            alt="Product image"
            className="aspect-square w-full rounded-md object-cover"
            height="84"
            src={courseImage}
            width="84"
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Book a tee time</Button>
      </CardFooter>
    </Card>
  );
}

interface HoleListProps {
  data: HoleData[];
}

function HoleCarousel({ data }: HoleListProps) {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent>
        {data.map((holeData, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-0">
                  <div className="relative">
                    <img
                      className="aspect-square w-full rounded-md object-cover"
                      src={holeData.holePhoto}
                      alt="Random image"
                    />
                    <div className="absolute inset-0 flex flex-col gap-1 items-start p-2 text-left justify-around">
                      <h2 className="text-white text-5xl font-bold">
                        {holeData.holeNumber}
                      </h2>
                      <div>
                        <p className="text-white text-3xl font-bold">Par</p>
                        <p className="text-white text-3xl font-bold">
                          {holeData.holePar}
                        </p>
                      </div>
                      <div>
                        <p className="text-white text-3xl font-bold">Yards</p>
                        <p className="text-white text-3xl font-bold">
                          {holeData.holeYards}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

function TogglePlayerCount({
  playerCount,
  setPlayerCount,
}: {
  playerCount: string;
  setPlayerCount: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <ToggleGroup
      type="single"
      value={playerCount}
      onValueChange={(value) => {
        if (value) setPlayerCount(value);
      }}
    >
      <ToggleGroupItem value="2" aria-label="Toggle 2">
        2
      </ToggleGroupItem>
      <ToggleGroupItem value="3" aria-label="Toggle 3">
        3
      </ToggleGroupItem>
      <ToggleGroupItem value="4" aria-label="Toggle 4">
        4
      </ToggleGroupItem>
    </ToggleGroup>
  );
}

function TimeWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [playerCount, setPlayerCount] = useState("2");
  const containerVariants: Variants = {
    open: {
      width: "360px",
      height: "225px",
    },
    closed: {
      width: "200px",
      height: "132px",
    },
  };
  return (
    <motion.div
      className="border border-light-border group relative flex w-[500px] cursor-pointer flex-col overflow-hidden rounded-2xl bg-white font-sans shadow-tooltip transition-shadow ease-out hover:shadow-menu dark:bg-[#1A1A1A] dark:shadow-inner-shadow-dark-md dark:hover:shadow-inner-shadow-dark-float"
      initial={false}
      animate={isOpen ? `open` : `closed`}
      variants={containerVariants}
      onHoverStart={() => setIsOpen(true)}
      onHoverEnd={() => setIsOpen(false)}
    >
      <div className="flex flex-col items-start w-full gap-4 px-4 py-4">
        <div className="flex items-start justify-between w-full">
          <div className="flex flex-col items-start gap-4">
            <div className="inline-block select-none rounded-full bg-[#FFF2F6] px-3 py-1 text-[12px] font-medium text-[#FF0342] transition-colors duration-200 group-hover:bg-[#FFEDF2] dark:bg-[#0DFFC5]/5 dark:text-[#0DFFC5] group-hover:dark:bg-[#182620]">
              In 15 mins
            </div>
          </div>
          <motion.div
            variants={{
              open: {
                opacity: 1,
              },
              closed: {
                opacity: 0,
              },
            }}
          >
            <Button>Book It</Button>
          </motion.div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="select-none text-sm font-medium text-[#313135] dark:text-white">
            Tee Time
          </div>
          <div className="select-none text-sm text-[#64646B] dark:text-white/60">
            1:30PM
          </div>
        </div>
      </div>
      <div className="h-px w-full flex-shrink-0 bg-[#E6E6E6] dark:bg-white/5"></div>
      <div className="flex justify-between w-full h-auto gap-2 px-4 py-4">
        <motion.div
          className="flex flex-col justify-between gap-2"
          variants={{
            open: {
              opacity: 1,
            },
            closed: {
              opacity: 0,
            },
          }}
        >
          <div className="flex items-start w-full gap-2">
            <div className="w-auto text-sm font-medium text-[#313135] dark:text-white">
              Guests
            </div>
            <div className="flex items-center justify-center gap-2 rounded-full text-sm text-[#64646B]">
              <div className="flex items-center justify-center gap-1 text-[#64646B] dark:text-white/60">
                <span className="text-[#CCCCCC] dark:text-white/30">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.057 4.98a6.666 6.666 0 017.564-3.45 6.667 6.667 0 11-7.563 3.45zm3.388 1.98a.333.333 0 01-.498.116l-2.1-1.574a.321.321 0 01-.093-.412 5.998 5.998 0 016.38-2.984.32.32 0 01.244.395l-.64 2.566a.333.333 0 01-.242.243l-2.394.602a.333.333 0 00-.217.173l-.44.874zm4.706 4.279a.333.333 0 01-.299.184h-1.67a.333.333 0 01-.277-.148L6.787 9.597a.333.333 0 01.042-.421l.459-.457a.333.333 0 01.256-.097l1.09.07a.333.333 0 01.165.056l1.7 1.142c.14.094.188.276.113.426l-.461.923z"
                    ></path>
                  </svg>
                </span>
                3
              </div>
            </div>
          </div>
          <div className="flex">
            {Array.from({ length: playerCount }).map((_, index) => (
              <motion.div
                className="shadow-custom-inner overflow-hidden rounded-full border-2 border-white dark:border-[#1A1A1A]"
                style={{ marginRight: "-8px" }}
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 0.875C5.49797 0.875 3.875 2.49797 3.875 4.5C3.875 6.15288 4.98124 7.54738 6.49373 7.98351C5.2997 8.12901 4.27557 8.55134 3.50407 9.31167C2.52216 10.2794 2.02502 11.72 2.02502 13.5999C2.02502 13.8623 2.23769 14.0749 2.50002 14.0749C2.76236 14.0749 2.97502 13.8623 2.97502 13.5999C2.97502 11.8799 3.42786 10.7206 4.17091 9.9883C4.91536 9.25463 6.02674 8.87499 7.49995 8.87499C8.97317 8.87499 10.0846 9.25463 10.8291 9.98831C11.5721 10.7206 12.025 11.8799 12.025 13.5999C12.025 13.8623 12.2376 14.0749 12.5 14.0749C12.7623 14.075 12.975 13.8623 12.975 13.6C12.975 11.72 12.4778 10.2794 11.4959 9.31166C10.7244 8.55135 9.70025 8.12903 8.50625 7.98352C10.0187 7.5474 11.125 6.15289 11.125 4.5C11.125 2.49797 9.50203 0.875 7.5 0.875ZM4.825 4.5C4.825 3.02264 6.02264 1.825 7.5 1.825C8.97736 1.825 10.175 3.02264 10.175 4.5C10.175 5.97736 8.97736 7.175 7.5 7.175C6.02264 7.175 4.825 5.97736 4.825 4.5Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="flex h-[60px] flex-col justify-between"
          variants={{
            open: {
              opacity: 1,
              filter: "blur(0px)",
            },
            closed: {
              opacity: 0,
              filter: "blur(4px)",
            },
          }}
        >
          <div className="flex items-center justify-center text-sm text-[#64646B]">
            Players
          </div>
          <div className="flex items-center justify-end gap-[6px]">
            <TogglePlayerCount
              setPlayerCount={setPlayerCount}
              playerCount={playerCount}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
