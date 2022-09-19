import React, { useState, useEffect } from "react";
import "./HomePage.css";
// import { allProjects } from "../data";
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
            <div id="HomePage">
                <div id="Message">
                    <p>Welcome to Smiles for All! </p>
                    <p>Join the force to restore the smiles for our community members who could not afford the dental work they need! Because smiles are for all!</p>
                </div>
                {/* <div id="bar">
                    <p>Check in with the community! </p>
                </div> */}
                <div id="project-list">
                    {projectList.map((projectData, key) => {
                    return <ProjectCard key={key} projectData={projectData}/>;
                    })}
                 </div>
            </div>
        </div>
        
    );
}

export default HomePage;

{/* <img
            height={280} 
            src="https://dani-image-assets.s3.ap-southeast-2.amazonaws.com/crowdfunding/feature.jpg"
            alt="A group of people smiling together."
            /> */}