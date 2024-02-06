import React from "react";
import TableauCard from "./TableauCard/TableauCard";
function ProjectsTableau() {
  return (
    <>      
      <div className="ProjectWrapper" id="projects">
        <div className="Container">
      
          <div className="SectionTitle">Data Visualization Projects</div>
          <TableauCard />
        </div>
      </div>
    </>
  );
}

export default ProjectsTableau;
