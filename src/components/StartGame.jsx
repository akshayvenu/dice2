import React from "react";

const StartGame = ({toggle}) => {
  return (
    <main className="mx-auto mt-[180px] flex  max-w-[1000px] items-center justify-between ">
      <div>
        <img src="dices.png" alt="" />
      </div>
      <div className="flex flex-col ">
        <h1 className=" text-6xl font-extrabold ">DICE GAME</h1>
        <div className="mt-6 flex justify-end">
          <button onClick={toggle} className="w-[220px] cursor-pointer rounded bg-black px-5 py-2 font-semibold text-white">
            Play Now
          </button>
        </div>
      </div>
    </main>
  );
};

export default StartGame;
