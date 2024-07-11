"use client";

import { Column, Id } from "@/types";
import React from "react";
import { useState } from "react";
import ColumnContainer from "./ColumnContainer";
const KanbanBoard = () => {
  const [columns, setColumns] = useState<Column[]>([]);
  console.log(columns);

  const createNewColumn = () => {
    const columnToAdd: Column = {
      id: generateId(),
      title: `Column ${columns.length + 1}`,
    };
    setColumns([...columns, columnToAdd]);
  };

  const deleteColumn = (id: Id) => {
    const filteredColumns = columns.filter((col) => col.id !== id);
    setColumns(filteredColumns);
  };
  return (
    <div className="px-6 m-auto flex min-h-screen w-full items-start overflow-x-auto overflow-y-hidden relative bottom-[7rem]">
      <div className="flex gap-4">
        <div className="flex gap-4">
          {columns.map((col) => (
            <div>
              <ColumnContainer column={col} deleteColumn={deleteColumn} />
            </div>
          ))}
        </div>
        <button
          onClick={() => {
            createNewColumn();
          }}
          className=" mt-[10rem] flex gap-2 items-center justify-center h-[3rem] w-[18rem] min-w-[18rem] cursor-pointer rounded-lg bg-white shadow-lg    transition duration-200 ease-in-out transform hover:scale-105    "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          Add Column
        </button>
      </div>
    </div>
  );
};

const generateId = () => {
  // Generate a random number between 0 and 10000

  return Math.floor(Math.random() * 10001);
};
export default KanbanBoard;
