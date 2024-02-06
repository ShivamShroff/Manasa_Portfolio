import React from "react";
import { ProjectList } from "../../../data/ProjectData";
import {
  Card,
  CardRight,
  TechCardContainer,
  TechCard,
  BtnGroup,
} from "./ProjectCardElements";

function ProjectCard() {
  return (
    <>
      {ProjectList.map((project) => (
        <Card id="about" key={project.title}>
          <CardRight>
            <h4>{project.title}</h4>
            <p>{project.description}</p>
            <p>{project.objective}</p>
            {project.Algorithms_Used && Array.isArray(project.Algorithms_Used) && (
              <TechCardContainer>
                {project.Algorithms_Used.map((tech, index) => (
                  <TechCard key={index}>{tech}</TechCard>
                ))}
              </TechCardContainer>
            )}

            <BtnGroup>
              {project.demo_url && project.demo_url.length > 0 && (
                <a
                  className="btn PrimaryBtn btn-shadow"
                  href={project.demo_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See My Work ➜
                </a>
              )}
            </BtnGroup>
          </CardRight>
        </Card>
      ))}
    </>
  );
}

export default ProjectCard;
