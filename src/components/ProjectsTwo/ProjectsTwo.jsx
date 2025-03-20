"use client";
import React, { useState } from "react";
import Masonry from "react-masonry-component";
import { Col, Container } from "react-bootstrap";
import projectsData from "@/data/ProjectTwoData";
import Image from "next/image";

const { filterCategories, projects, subtitle, title } = projectsData;

const getFilteredProjects = (filterData) =>
  filterData === "filter-item"
    ? projects
    : projects.filter((project) => project.filterClasses.includes(filterData));

const getCount = (filterClass) => getFilteredProjects(filterClass).length;

const ProjectTwo = () => {
  const [activeFilter, setActiveFilter] = useState("filter-item");
  const filteredProjects = getFilteredProjects(activeFilter);

  const handleFilterChange = (filterClass) => {
    setActiveFilter(filterClass);
  };

  const masonryOptions = {
    transitionDuration: 500,
  };

  return (
    <section className="project-two" id="project">
      <Container>
        <div className="sec-title text-center">
          <h6 className="sec-title__tagline">
            <span className="sec-title__tagline__left"></span>
            {subtitle}
            <span className="sec-title__tagline__right"></span>
          </h6>
          <h3 className="sec-title__title">{title}</h3>
        </div>
        <ul className="list-unstyled post-filter project-two__filter">
          {filterCategories.map(({ name, filterClass }) => (
            <li
              key={name}
              className={filterClass === activeFilter ? "active" : ""}
              onClick={() => handleFilterChange(filterClass)}
            >
              {name}
              <span className="count">({getCount(filterClass)})</span>
            </li>
          ))}
        </ul>
        <Masonry className="row filter-layout" options={masonryOptions}>
          {filteredProjects.map((project, index) => (
            <Col
              xl={project.xl}
              md={project.md}
              key={index}
              className={`filter-item ${project.filterClasses.join(" ")}`}
            >
              <div className="project-two__item">
                <div className="project-two__item__image">
                  {/* ✅ Removed Border, Added Smooth Box Shadow */}
                  <Image
  src={project.image}
  alt={project.title}
  style={{
    paddingLeft: "20px",
    borderRadius: "12px", /* Smooth rounded corners */
    border: "3px solid #e0e0e0", /* Light gray border */
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)", /* Professional depth effect */
    transition: "all 0.3s ease-in-out",
  }}
/>

                </div>
                <div className="project-two__item__content">
                  <p className="project-two__item__cats">{project.category}</p>
                  <h3 className="project-two__item__title">
                    <a href={project.link}>{project.title}</a>
                  </h3>
                  <a href={project.link} className="project-two__item__rm">
                    <span className="icon-right-arrow"></span>
                  </a>
                </div>
              </div>
            </Col>
          ))}
        </Masonry>
      </Container>
    </section>
  );
};

export default ProjectTwo;
