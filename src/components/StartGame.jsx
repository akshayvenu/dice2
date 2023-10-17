import React from "react";

const StartGame = ({ toggle }) => {
  return (
    <main className="mx-auto mt-[180px] flex  max-w-[1000px] items-center justify-between max-md:flex-col max-md:items-center">
      <div>
        <img
          src="dices.png"
          alt=""
          className="max-md:mt-[-100px] max-md:w-[300px]"
        />
      </div>
      <div className="flex flex-col ">
        <h1 className=" text-6xl font-extrabold max-md:mb-4 max-md:text-5xl">
          DICE GAME
        </h1>
        <div className="mt-6 flex justify-end max-md:justify-center ">
          <button
            onClick={toggle}
            className="w-[220px] cursor-pointer rounded bg-black px-5 py-2 font-semibold text-white"
          >
            Play Now
          </button>
        </div>
      </div>
    </main>
  );
};

export default StartGame;
