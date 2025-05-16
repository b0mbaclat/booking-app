export default function ComingSoon() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-neutral-900 text-white px-4 text-center">
      <div className="animate-pulse">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Coming soon...</h1>
        <p className="text-lg md:text-xl text-neutral-300 mb-8">
We’re cooking up something incredible behind the scenes. Thanks for your patience — greatness takes time.

        </p>
        <div className="w-64 h-2 bg-neutral-700 rounded-full overflow-hidden mx-auto">
          <div className="h-full bg-white animate-loading-bar"></div>
        </div>
      </div>
    </div>
  );
}
