"use client";

import { Column, Id } from "@/types";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useState } from "react";

interface Props {
  column: Column;
  deleteColumn: (id: Id) => void;
  updateColumn: (id: Id, title: string) => void;
}

const ColumnContainer = (props: Props) => {
  const { column, deleteColumn, updateColumn } = props;

  const [editMode, setEditMode] = useState(false);

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: column.id,
    data: {
      type: "Column",
      column,
    },
    disabled: editMode,
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="mt-[10rem] bg-white shadow-lg w-[21.9rem] h-[31.29rem] max-h[31.29rem] rounded-lg flex flex-col opacity-55 border border-black border-dashed"
      ></div>
    );
  }
  return (
    <div
      ref={setNodeRef}
      style={style}
      className=" mt-[10rem] bg-white shadow-lg w-[21.9rem] h-[31.29rem] max-h[31.29rem] rounded-lg flex flex-col mb-[5rem] "
    >
      {/* Column Title */}

      <div
        {...attributes}
        {...listeners}
        onClick={() => {
          setEditMode(true);
        }}
        className=" text-md h-[3.8rem] cursor-grab rounded-md rounded-b-none p-3 font-bold flex items-center justify-between"
      >
        <div className="flex gap-2 ">
          <div className="flex justify-center items-center bg-white px-2 py-1 text-sm rounded-full">
            0
          </div>

          {!editMode && column.title}
          {editMode && (
            <input
              value={column.title}
              onChange={(e) => updateColumn(column.id, e.target.value)}
              autoFocus
              onBlur={() => {
                setEditMode(false);
              }}
              onKeyDown={(e) => {
                if (e.key !== "Enter") {
                  return;
                }
                setEditMode(false);
              }}
            />
          )}
        </div>
        <button
          onClick={() => {
            deleteColumn(column.id);
          }}
          className=" p-2 rounded transition duration-200 ease-out transform hover:scale-125 stroke-black "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </button>
      </div>
      {/* Column task container */}
      <div className="flex flex-grow">Content</div>
      {/* Column footer */}
      <button className="flex items-center gap-2 justify-center p-2 bg-slate-200   transition duration-200 ease-out hover:bg-black hover:text-white rounded-lg rounded-t-none ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        Add
      </button>
    </div>
  );
};

export default ColumnContainer;
