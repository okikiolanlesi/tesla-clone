import React from "react";
import styled from "styled-components";
import Section from "./section";

function Home() {
  return (
    <div>
      <Container>
        <Section
          title={"Model S"}
          description={"Order Online For Touchless Delivery"}
          leftBtnText={"CUSTOM ORDER "}
          rightBtnText={"EXISTING INVENTORY"}
          backgroundImg={"model-s.jpg"}
        />
        <Section
          title={"Model Y"}
          description={"Order Online For Touchless Delivery"}
          leftBtnText={"CUSTOM ORDER "}
          rightBtnText={"EXISTING INVENTORY"}
          backgroundImg={"model-y.jpg"}
        />
        <Section
          title={"Model X"}
          description={"Order Online For Touchless Delivery"}
          leftBtnText={"CUSTOM ORDER "}
          rightBtnText={"EXISTING INVENTORY"}
          backgroundImg={"model-x.jpg"}
        />
        <Section
          title={"Model 3"}
          description={"Order Online For Touchless Delivery"}
          leftBtnText={"CUSTOM ORDER "}
          rightBtnText={"EXISTING INVENTORY"}
          backgroundImg={"model-3.jpg"}
        />
        <Section
          title={"Lowest Cost Solar Panels"}
          description={"Money-back guarantee"}
          leftBtnText={"ORDER NOW"}
          rightBtnText={"LEARN MORE"}
          backgroundImg={"solar-panel.jpg"}
        />
        <Section
          title={"Solar for New Roofs"}
          description={
            "Solar Roof Costs LessThan a New Roof Plus Solar Panels "
          }
          leftBtnText={"ORDER NOW"}
          rightBtnText={"LEARN MORE"}
          backgroundImg={"solar-roof.jpg"}
        />
        <Section
          title={"Accessories"}
          description=""
          leftBtnText={"ORDER NOW"}
          backgroundImg={"accessories.jpg"}
        />
      </Container>
    </div>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
