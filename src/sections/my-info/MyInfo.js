import React from "react";

export default function MyInfo({ setNameSection }) {
  return (
    <section
      style={{ zIndex: 5 }}
      onMouseEnter={() => setNameSection("MyInfo")}
      className="w-full max-w-6xl mx-auto relative my-32 rounded-xl bg-black/30 ">
      <div className="text-white py-32">
        <h2 className="text-4xl uppercase text-center title-Header font-bold">
          - MyInfo -
        </h2>
        <div className="px-10 grid gap-y-2">
          <p className="flex item-center gap-5">
            <span className="text-gray-500">01</span>
            <span className="text-red-400 text-lg">class</span>
            <span className="text-yellow-400">Hossein Gharibzadeh {"{"}</span>
          </p>
          <p className="flex item-center gap-2">
            <span className="text-gray-500">02</span>
            <span className="text-red-400 text-lg">. . constructor</span>
            <span className="text-yellow-400">{"( ) {"}</span>
          </p>
          <p className="flex item-center gap-2">
            <span className="text-gray-500">03</span>
            <span className="text-red-400 text-lg">
              . . . . <span className="text-white">this</span>.<span>name</span>
            </span>
            =<span className="text-green-500">"Hossein Gharibzadeh"</span>
          </p>
          <p className="flex item-center gap-2">
            <span className="text-gray-500">04</span>
            <span className="text-red-400 text-lg">
              . . . . <span className="text-white">this</span>.
              <span>dayOfBirthTimesTamp</span>
            </span>
            =<span className="text-orange-500">844905600</span>
          </p>
          <p className="flex item-center gap-2">
            <span className="text-gray-500">05</span>
            <span className="text-red-400 text-lg">
              . . . . <span className="text-white">this</span>.
              <span>email</span>
            </span>
            =<span className="text-green-500">"shervan.dec@gmail.com"</span>
            <br />
          </p>
          <p className="flex gap-2">
            <span className="text-gray-500">06</span>
            <span className="text-red-400">. . </span>
            <span className="text-yellow-400">{"}"}</span>
          </p>
          <p className="flex item-center gap-2">
            <span className="text-gray-500">07</span>
            <span className="text-purple-500 text-lg">. . workExperience</span>
            <span className="text-yellow-400">{"( ) {"}</span>
          </p>
          <p className="flex gap-2">
            <span className="text-gray-500">08</span>
            <span className="text-red-400">. . . . </span>
            <span className="text-red-400">return</span>
            <span>{" ["}</span>
          </p>
          <p className="flex gap-2">
            <span className="text-gray-500">09</span>
            <span className="text-red-400">. . . . . . </span>
            <span className="text-yellow-400">{"{ "}</span>
            <span className="text-green-500">"2023/10 - 2023/04"</span> :{" "}
            <span className="text-green-500">
              "Front End Developer - Drivee"
            </span>
            <span className="text-yellow-400">{" }"}</span>
          </p>
          <p className="flex gap-2">
            <span className="text-gray-500">10</span>
            <span className="text-red-400">. . . . . . </span>
            <span className="text-yellow-400">{"{ "}</span>
            <span className="text-green-500">"2022 - 2023"</span> :{" "}
            <span className="text-green-500">
              "Front End Developer - Freelacer"
            </span>
            <span className="text-yellow-400">{" }"}</span>
          </p>
          <p className="flex gap-2">
            <span className="text-gray-500">11</span>
            <span className="text-red-400">. . . . </span>
            <span>{" ]"}</span>
          </p>
          <p className="flex item-center gap-2">
            <span className="text-gray-500">12</span>
            <span className="text-purple-500 text-lg">. . skills</span>
            <span className="text-yellow-400">{"( ) {"}</span>
          </p>
          <p className="flex gap-2">
            <span className="text-gray-500">13</span>
            <span className="text-red-400">. . . . </span>
            <span className="text-red-400">return</span>
            <span>{" ["}</span>
          </p>
          <p className="flex gap-2 pl-6">
            <span className="text-green-500">"React.js" ,</span>
            <span className="text-green-500">"Redux/Toolkit" ,</span>
            <span className="text-green-500">"ReactQuary" ,</span>
            <span className="text-green-500">"Css" ,</span>
            <span className="text-green-500">"Html" ,</span>
            <span className="text-green-500">"Javascript" ,</span>
            <span className="text-green-500">"TypeScript" ,</span>
            <span className="text-green-500">"Tailwindcss" ,</span>
            <span className="text-green-500">"Mui" ,</span>
            <span className="text-green-500">"Animation/Css" ,</span>
            <span className="text-green-500">"Sass" ,</span>
          </p>
          <p className="flex gap-2 pl-6">
            <span className="text-green-500">"Next.js" ,</span>
            <span className="text-green-500">"framerMotion" ,</span>
            <span className="text-green-500">"Firebase" ,</span>
          </p>
          <p className="flex gap-2 pl-6">
            <span className="text-red-400">. . . . </span>
            <span>{" ]"}</span>
          </p>
          <p>
            <span className="text-gray-500">14</span>
            <span className="text-yellow-400 ml-5">{"}"}</span>
          </p>
          <p>
            <span className="text-gray-500">15</span>
            <span className="text-yellow-400"> {"}"}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
