import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";

export function MainPage() {
  return (
    <div>
      <Navbar />
      <div
        className="bg-cover min-h-screen bg-fixed"
        style={{ backgroundImage: "url('/DJI_0138_SV_2_I2_1-Photo-page.jpg')" }}
      >
        <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56">
          <div className="text-center backdrop-blur-sm bg-black/30 p-8 rounded">
            <h1 className="text-6xl font-bold text-white">
              French National <br /> Golf Course
            </h1>
            <p className="mt-6 text-lg leading-8 text-white">
              Experience the beauty of lush, rolling greens and unique
              landscapes. Discover the ultimate golfing experience at French
              National, where every round is a masterpiece.
            </p>
          </div>
        </div>
      </div>
      <section
        className="bg-cover min-h-screen bg-fixed"
        style={{ backgroundImage: "url('/Canyata_16x9-Photo-page.jpg')" }}
      >
        <div className="backdrop-blur-sm bg-white/70">
          <div className="mx-auto max-w-3xl py-12 text-center">
            <div>
              <Button>Book Tee Time</Button>
            </div>
            <div>
              <p className="text-lg leading-8">
                After your game, indulge in our exquisite cuisine, renowned for
                its gourmet flavors and exceptional service.
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="px-8 py-12 flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-500">
              © 2024 French National, Inc. All rights reserved.
            </p>
          </div>
          <div className="flex justify-center space-x-6">
            <a className="text-gray-400 hover:text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m0 0V10a2 2 0 0 1 2-2h1m-.5 4.5h-5"
                ></path>
              </svg>
            </a>
            <a className="text-gray-400 hover:text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4m7.5 8a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0"
                ></path>
              </svg>
            </a>
            <a className="text-gray-400 hover:text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m18 4l-5 6.667M6 20l5-6.667m2-2.666L8.3 4.4a1 1 0 0 0-.8-.4H4l7 9.333m2-2.666L20 20h-3.5a1 1 0 0 1-.8-.4L11 13.333"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
