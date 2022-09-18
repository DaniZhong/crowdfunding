import React, { useState, useEffect } from "react";
import { allProjects } from "../data";
import ProjectCard from "../components/ProjectCard/ProjectCard";

function HomePage() {
    const [projectList, setProjectList] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}projects`)
        .then((results) => {
        return results.json();})
        .then((data) => {
        setProjectList(data);
        });
    }, []);

    return (
        
        <div>
            <h1>Welcome to Smile4all! </h1>
            <h2>We are passionated to help community members who could not afford dental work they need,</h2>
            <h2>to restore their smile because “smile is for all”!</h2>
            <img
            height={280} 
            src="https://dani-image-assets.s3.ap-southeast-2.amazonaws.com/crowdfunding/feature.jpg"
            alt="A group of people smiling together."
            />
            <div id="project-list">
                {projectList.map((projectData, key) => {
                return <ProjectCard key={key} projectData={projectData}/>;
                 })}
            </div>
        </div>
        
    );
}

export default HomePage;

