import KanbanBoard from "@/components/KanbanBoard";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import React from "react";

const Kanban = () => {
  return (
    <section className="flex h-full w-screen   ">
      <Sidebar />
      <div className="flex flex-col flex-grow    ">
        <Topbar />
        <div className="flex-grow   ">
          <KanbanBoard />
        </div>
      </div>
    </section>
  );
};

export default Kanban;
