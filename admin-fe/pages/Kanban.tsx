import KanbanBoard from "@/components/KanbanBoard";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import React from "react";

const Kanban = () => {
  return (
    <section className="flex h-screen w-screen bg-[#F4F7FE]">
      <Sidebar />
      <div className="flex flex-col flex-grow    ">
        <Topbar />

        <div className="flex-grow px-4   bg-gray-100 ">
          <KanbanBoard />
        </div>
      </div>
    </section>
  );
};

export default Kanban;
