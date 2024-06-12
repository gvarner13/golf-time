import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";

export function MainPage() {
  return (
    <div>
      <div
        className="bg-cover min-h-screen bg-fixed"
        style={{ backgroundImage: "url('/Canyata_16x9-Photo-page.jpg')" }}
      >
        <Navbar isLoggedIn={true} />
        <div className="ml-4 md:ml-6 mr-auto py-28 sm:py-48 lg:py-28 max-w-xl">
          <div className="bg-black/30 p-6 rounded">
            <h1 className="text-4xl text-white font-light leading-tight line-clamp-3">
              Experience the beauty of lush, rolling greens and unique
              landscapes.
            </h1>
          </div>
        </div>
      </div>
      <section
        className="bg-cover min-h-screen bg-fixed"
        style={{ backgroundImage: "url('/DJI_0138_SV_2_I2_1-Photo-page.jpg')" }}
      >
        <div className="backdrop-blur-sm bg-white/70">
          Going to place the HoleCarousel component here and other course info
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
