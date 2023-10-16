import React, { useState } from "react";
import styled from "styled-components";
import toast, { Toaster } from "react-hot-toast";

import "react-toastify/dist/ReactToastify.css";
import Rules from "./Rules";

const GamePlay = ({toggle}) => {
  const arrnum = [1, 2, 3, 4, 5, 6];
  const [selectedNumber, setSelectedNumber] = useState();
  const [Score, setScore] = useState(0);
  const [currentDice, setcurrentDice] = useState(1);
  const [showRules, setshowRules] = useState(false);

  const getRandomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const resetScore = () => {
    setScore(0);
    toast.success("Reseted Successfully");
  };

  const rollDice = () => {
    if (!selectedNumber) {
      alert("You have not selected number");
      return;
    }
    const RandomNum = getRandomNum(1, 7);
    setcurrentDice(() => RandomNum);

    if (selectedNumber == RandomNum) {
      setScore((prev) => prev + 2);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectedNumber(undefined);
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="mx-2 my-2 flex justify-between">
        {/* total score */}

        <div className="flex max-w-[135px]  flex-col items-center">
          <h1 className="text-8xl font-semibold">{Score}</h1>
          <p className="text-lg font-medium">Total Score</p>
        </div>

        {/* numselector */}
        <div className="mr-10 mt-5 ">
          <div className="mt-4 flex w-[500px] justify-end gap-2 ">
            {arrnum.map((value, i) => {
              return (
                <Box
                  key={i}
                  className="grid h-[72px] w-[72px] cursor-pointer place-items-center border-2 border-black
                  text-3xl font-medium "
                  onClick={() => setSelectedNumber(value)}
                  id={i}
                  isSelected={value === selectedNumber}
                >
                  {value}
                </Box>
              );
            })}
          </div>
          <div className=" mt-3 flex justify-end text-xl font-bold">
            <p>Select Number</p>
          </div>
        </div>
      </div>

      {/* roll dice */}
      <main className="flex flex-col items-center ">
        <div className="max-w-[250px]">
          <div onClick={rollDice}>
            <img src={`/images/dice_${currentDice}.png`} alt="" />
          </div>
          <h3 className="text-2xl font-medium">Click on Dice to roll</h3>
          <button
            className="my-3 w-full rounded-md bg-black px-[18px]  py-[10px] text-xl text-white"
            onClick={resetScore}
          >
            Reset Btn
          </button>
          <button
            className="w-full rounded-md bg-black px-[18px] py-[10px]  text-xl text-white"
            onClick={() => setshowRules((prev) => !prev)}
          >
            {showRules ? "Hide" : "Show"} Rules
          </button>
          {showRules && <Rules />}
          <Toaster position="top-center" reverseOrder={false} />
          <button className="w-full rounded-md bg-black px-[18px] py-[10px] mt-4 text-xl text-white"
          onClick={toggle}
          >Exit</button>
        </div>
        
      </main>
    </>
  );
};

export default GamePlay;

const Box = styled.div`
  height: 62px;
  width: 62px;
  border: 2px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
`;
