import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function CoursePicker() {
  return (
    <div>
      <div className="mb-4">
        <h1 className="text-5xl mt-4 max-w-[36rem] font-extrabold tracking-tight text-slate-900 sm:text-7xl xl:max-w-[43.5rem]">
          Select Your Course
        </h1>
        <p>
          Choose from three beutiful 9 hole courses that link together for a
          great golf experiance.
        </p>
      </div>
      <div className="flex gap-x-8">
        <CourseCard
          courseTitle="Red Course"
          courseDescription="Simple 9 holes"
        />
        <CourseCard
          courseTitle="Blue Course"
          courseDescription="Simple 9 holes"
        />
        <CourseCard
          courseTitle="White Course"
          courseDescription="Simple 9 holes"
        />
      </div>
    </div>
  );
}

function CourseCard({
  courseTitle,
  courseDescription,
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
            src="/golf_course_images/course_image_1.webp"
            width="84"
          />
        </div>
      </CardContent>
    </Card>
  );
}
