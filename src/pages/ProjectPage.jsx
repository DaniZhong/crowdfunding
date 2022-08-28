import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProjectPage() {
    const [projectData, setProjectData] = useState({pledges: [] });
    const { id } = useParams();
    
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}projects/${id}`)
        .then((results) => {
        return results.json();
        })
        .then((data) => {
        setProjectData(data);
        });
    }, []);

    return (
        <div>
        <h1>Project details</h1>
        <h2>{projectData.title}</h2>
        <img
            height={400} 
            src={projectData.image}
        />
        <h3>Our story:{projectData.description}</h3>
        <h3>Created at: {projectData.date_created}</h3>
        <h3>{`Status: ${projectData.is_open}`}</h3>
        <h3>Our goal:{projectData.goal}</h3>
        <h3>Pledges:</h3>
        <ul>
        {projectData.pledges.map((pledgeData, key) => {
            return (
            <li>
            ${pledgeData.amount} from {pledgeData.supporter}:{pledgeData.comment}
            </li>
            );
        })}
        </ul>
        </div>
    );
}

export default ProjectPage;