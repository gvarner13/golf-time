export function MainPage() {
  return (
    <div>
      <div
        className="bg-cover min-h-screen"
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
    </div>
  );
}
