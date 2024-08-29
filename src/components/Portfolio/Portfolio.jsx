import React, { Component } from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import ProjectList from "../ProjectList/ProjectList";
import Toolbar from "../Toolbar/Toolbar";

export default function Portfolio() {
  
  const initialState = [
    {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg",
      category: "Business Cards",
      id: uuidv4(),
    },
    {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
      category: "Websites",
      key: uuidv4(),
    },
    {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
      category: "Websites",
      key: uuidv4(),
    },
    {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg",
      category: "Websites",
      key: uuidv4(),
    },
    {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg",
      category: "Business Cards",
      key: uuidv4(),
    },
    {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png",
      category: "Websites",
      key: uuidv4(),
    },
    {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
      category: "Websites",
      key: uuidv4(),
    },
    {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
      category: "Business Cards",
      key: uuidv4(),
    },
    {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png",
      category: "Websites",
      key: uuidv4(),
    },
    {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png",
      category: "Flayers",
      key: uuidv4(),
    },
    {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg",
      category: "Websites",
      key: uuidv4(),
    },
    {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg",
      category: "Business Cards",
      key: uuidv4(),
    },
    {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg",
      category: "Websites",
      key: uuidv4(),
    },
    {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
      category: "Websites",
      key: uuidv4(),
    },
    {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
      category: "Business Cards",
      key: uuidv4(),
    },
    {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg",
      category: "Websites",
      key: uuidv4(),
    },
    {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png",
      category: "Flayers",
      key: uuidv4(),
    },
  ];
  const [select, setSelect] = useState("All");
  const [currentProjects, setProject] = useState(initialState);

  const filtersList = ["All", "Websites", "Flayers", "Business Cards"];
 
  const onSelectFilter = (filter) => {
    if (filter === "All") {
      setProject(initialState);
    } else {
      setProject(initialState.filter((project) => project.category === filter));
    }
    setSelect(filter);
  };

  return (
    <>
      <ul className="list">
        <Toolbar
          filters={filtersList}
          selected={select}
          onSelectFilter={onSelectFilter}
        />
      </ul>
      <ProjectList projects={currentProjects} />
    </>
  );
}
