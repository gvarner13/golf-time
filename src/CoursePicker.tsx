import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function CoursePicker() {
  return (
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
  );
}

function CourseCard({
  courseTitle,
  courseDescription,
  courseImage,
}: {
  courseTitle: string;
  courseDescription: string;
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
