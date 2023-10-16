import React, { useState } from "react";
import styled from "styled-components";

const GamePlay = () => {
  const arrnum = [1, 2, 3, 4, 5, 6];
  const [selectedNumber, setSelectedNumber] = useState();

  return (
    <>
      <div className="mx-2 my-2 flex justify-between">
        {/* total score */}

        <div className="flex max-w-[135px]  flex-col items-center">
          <h1 className="text-8xl font-semibold">0</h1>
          <p className="text-lg font-medium">Total Score</p>
        </div>

        {/* numselector */}
        <div className="mr-10 mt-5 bg-slate-800">
          <div className="mt-4 justify-end flex w-[500px] gap-2 bg-yellow-500">
            {arrnum.map((value, i) => {
              return (
                <Box
                  key={i}
                    className="grid h-[72px] w-[72px] place-items-center cursor-pointer border-2 border-black
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
          <div className="bg-green-700 mt-3 flex justify-end text-xl font-bold">
            <p>Select Number</p>
          </div>
        </div>
      </div>
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
