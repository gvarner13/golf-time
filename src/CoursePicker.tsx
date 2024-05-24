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

export function CoursePicker() {
  return (
    <>
      <div>
        <div className="mb-8">
          <h1 className="text-center text-5xl font-bold tracking-tight text-slate-900 mb-4">
            Select Your Course
          </h1>
          <p className="mb-4">
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
      <div>
        <HoleCarousel holeNumber={1} holePar="3" holeYards="210" />
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
        <CardTitle>{courseTitle}</CardTitle>
        <CardDescription>{courseDescription}</CardDescription>
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

function HoleCarousel({
  holeNumber,
  holePar,
  holeYards,
}: {
  holeNumber: number;
  holePar: string;
  holeYards: string;
}) {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent>
        {Array.from({ length: 18 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-0">
                  <div className="relative">
                    <img
                      className="aspect-square w-full rounded-md object-cover"
                      src="/golf_course_images/hole_photo_1.jpeg"
                      alt="Random image"
                    />
                    <div className="absolute inset-0 flex flex-col gap-1 items-start p-2 text-left justify-around">
                      <h2 className="text-white text-5xl font-bold">
                        {holeNumber + index}
                      </h2>
                      <div>
                        <p className="text-white text-3xl font-bold">Par</p>
                        <p className="text-white text-3xl font-bold">
                          {holePar}
                        </p>
                      </div>
                      <div>
                        <p className="text-white text-3xl font-bold">Yards</p>
                        <p className="text-white text-3xl font-bold">
                          {holeYards}
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
