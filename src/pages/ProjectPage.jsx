import React, { useState, useEffect } from "react";
import { useParams,useNavigate,Link } from "react-router-dom";
import "./ProjectPage.css"

function ProjectPage() {
    const [projectData, setProjectData] = useState({pledges: [] });
    const { id } = useParams();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/pledge/${projectData.id}`);}
    
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}projects/${id}`)
        .then((results) => {
        return results.json();
        })
        .then((data) => {
        setProjectData(data);
        });
    }, [id]);


    return (
        <div id ="projectDetail">
            <h2>Project details</h2>
            <div id ="projectAbout">
                <img
                height={400} 
                src={projectData.image}
                alt=""/>
                <div id="projectStory">
                    <h3>{projectData.title}</h3>
                    <h3>{projectData.description}</h3>
                    <h3>Created at: {projectData.date_created}</h3>
                    <h3>{`The project is open: ${projectData.is_open}`}</h3>
                    <h3>Our goal:{projectData.goal}</h3>
                    <h3>Pledges:</h3>
                        <ul>
                            {projectData.pledges.map((pledgeData, key) => {
                            return (
                            <li>
                            <ul>
                                <li>Amount: ${pledgeData.amount}</li> 
                                <li>Message from the supporter: {pledgeData.comment}</li>
                            </ul>
                            </li>
                            );
                            })}
                        </ul>
                </div>
            </div>    
            <button type="submit" onClick={handleSubmit}>Make a pledge</button>
            </div>
    );
}

export default ProjectPage;
