import React from "react";

export default function Projects({ setSectionIndex }) {
  const redirectToUrl = (url) => {
    window.location.href = url;
  };
  return (
    <section
      style={{ zIndex: 5 }}
      onMouseEnter={() => setSectionIndex(1)}
      className="w-full max-w-6xl mx-auto relative  py-32 rounded-xl"
    >
      <div className="text-white w-full">
        <h2 className="text-4xl uppercase text-center title-Header font-bold">
          - Projects -
        </h2>
        <div className="test-white rounded-full w-[880px] h-[880px] main-circle-project mx-auto">
          <div
            onClick={() =>
              redirectToUrl("https://shervangharibzade.github.io/blog/")
            }
            className="w-fit relative flex items-center cursor-pointer group circle-item-1 mx-auto right-44"
          >
            <h2 className="absolute w-fit font-bold text-2xl  -translate-x-1/2 left-1/2 z-10">
              Blog
            </h2>
            <img
              className="absolute blur-md top-0 rounded-full w-44 h-44 object-cover"
              src="/images/Blog.png"
              alt="cover blog project"
            />
            <img
              className="rounded-full w-44 h-44 object-cover relative brightness-75 group-hover:brightness-50 transition-all duration-300"
              src="/images/Blog.png"
              alt="cover blog project"
            />
          </div>
          <div
            onClick={() =>
              redirectToUrl(
                "https://shervangharibzade.github.io/youtube-react/"
              )
            }
            className="w-fit relative flex items-center cursor-pointer group circle-item-2 mx-auto right-0"
          >
            <h2 className="absolute w-fit font-bold text-2xl  -translate-x-1/2 left-1/2 z-10">
              Youtube
            </h2>
            <img
              className="absolute blur-md top-0 rounded-full w-44 h-44 object-cover"
              src="/images/youtube.png"
              alt="cover youtube project"
            />
            <img
              className="rounded-full w-44 h-44 object-cover relative brightness-75 group-hover:brightness-50 transition-all duration-300"
              src="/images/youtube.png"
              alt="cover youtube project"
            />
          </div>
          <div
            onClick={() =>
              redirectToUrl("https://shervangharibzade.github.io/stock-app/")
            }
            className="w-fit relative flex items-center cursor-pointer group circle-item-3 mx-auto my-10"
          >
            <h2 className="absolute w-32 font-bold text-2xl -translate-x-1/2 left-1/2 z-10">
              Stock-App
            </h2>
            <img
              className="absolute blur-md top-0 rounded-full w-44 h-44 object-cover"
              src="/images/stock.png"
              alt="cover stock project"
            />
            <img
              className="rounded-full w-44 h-44 object-cover relative brightness-75 group-hover:brightness-50 transition-all duration-300"
              src="/images/stock.png"
              alt="cover stock project"
            />
          </div>
          <div
            onClick={() =>
              redirectToUrl("https://next14-movie-app.netlify.app")
            }
            className="w-fit relative flex items-center cursor-pointer group circle-item-4 mx-auto left-10"
          >
            <h2 className="absolute font-bold text-2xl -translate-x-1/2 left-1/2 z-10">
              MovieApp
            </h2>
            <img
              className="absolute blur-md top-0 rounded-full w-44 h-44 object-cover"
              src="/images/movie-app.png"
              alt="cover ShopBox project"
            />
            <img
              className="rounded-full w-44 h-44 object-cover relative brightness-75 group-hover:brightness-50 transition-all duration-300"
              src="/images/movie-app.png"
              alt="cover ShopBox project"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
