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
      <div className="flex gap-x-8">
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
    </div>
  );
}

function CourseCard() {
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle>Red Course</CardTitle>
        <CardDescription>Easy 9 holes</CardDescription>
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
