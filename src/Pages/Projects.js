import React, { useState } from "react";
import { MainLayout, InnerLayout } from "../styles/Layout";
import Title from "../Components/Title";
import portfolios from "../data/portfolios";
import Menu from "../Components/Menu";
import Button from "../Components/Button";

const allButtons = ["ALL", ...new Set(portfolios.map((item) => item.category))];

function Projects() {
  const [menuItem, setMenuItems] = useState(portfolios);
  const [button, setButtons] = useState(allButtons);

  const filter = (button) => {
    if (button === "ALL") {
      setMenuItems(portfolios);
      return;
    }

    const filteredData = portfolios.filter((item) => item.category === button);
    setMenuItems(filteredData);
  };
  return (
    <MainLayout>
      <Title title={"My Projects"} span={"My Projects"} />
      <InnerLayout>
        <Button filter={filter} button={button} />
        <Menu menuItem={menuItem} />
      </InnerLayout>
    </MainLayout>
  );
}

export default Projects;
