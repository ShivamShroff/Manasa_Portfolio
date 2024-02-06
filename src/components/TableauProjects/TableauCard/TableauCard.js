import React from "react";
import { Card, CardRight, BtnGroup } from "./TableauElements";
// import ScrollAnimation from "react-animate-on-scroll";
import SlidesDash from "../../../data/assests/SlidesDash.png";
import IterativeDash from "../../../data/assests/IterativeDash.png";
import ParetoChart from "../../../data/assests/ParetoChart.png";

function TableauCard() {
  return (
    <>
      {/* <ScrollAnimation animateIn="fadeInLeft"> */}
        <Card id="a">
          <CardRight>
            <img
              src={SlidesDash}
              alt="Interactive Dashboards"
            />
            <h4>Interactive Dashboards</h4>
            <BtnGroup>
              <a
                className="btn PrimaryBtn btn-shadow"
                href="https://public.tableau.com/app/profile/manasa.b.r5258/viz/InteractiveDashboards_17040101762050/Dashboard2"
                target="_blank"
                rel="noopener noreferrer"
              >
                See My Work ➜
              </a>
            </BtnGroup>
          </CardRight>
        </Card>
      {/* </ScrollAnimation> */}

      {/* <ScrollAnimation animateIn="fadeInLeft"> */}
        <Card id="a">
          <CardRight>
            <img
              src={ParetoChart}
              alt="Pareto Chart, what if analysis on Sales data chart"
            />
            <h4>Pareto Chart, what if analysis on Sales data chart</h4>
            <BtnGroup>
              <a
                className="btn PrimaryBtn btn-shadow"
                href="https://public.tableau.com/app/profile/manasa.b.r5258/viz/Paretochartandwhatifanalysischart/Dashboard1"
                target="_blank"
                rel="noopener noreferrer"
              >
                See My Work ➜
              </a>
            </BtnGroup>
          </CardRight>
        </Card>
      {/* </ScrollAnimation> */}

      {/* <ScrollAnimation animateIn="fadeInLeft"> */}
        <Card id="a">
          <CardRight>
            <img src={IterativeDash} alt="Storyboard" />
            <h4>Storyboard</h4>
            <BtnGroup>
              <a
                className="btn PrimaryBtn btn-shadow"
                href="https://public.tableau.com/app/profile/manasa.b.r5258/viz/SlidesDashboardsStoryBoards/Story1"
                target="_blank"
                rel="noopener noreferrer"
              >
                See My Work ➜
              </a>
            </BtnGroup>
          </CardRight>
        </Card>
      {/* </ScrollAnimation> */}
    </>
  );
}

export default TableauCard;
