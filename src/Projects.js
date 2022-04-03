import React, { useState, useEffect } from 'react';

const Project = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch("https://demo-backend-spring-boot.herokuapp.com//api/v1/projects/")
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setProjects(data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>
                <h6>My projects</h6>

                 <table class="table">
                <tr>
                    <th>Project</th>
                    <th>Description</th>
                </tr>
                {projects.map(project => (
                    <tr>
                        <td key={project.id}>
                        <a href={project.url} target="_blank">{project.name}
                            </a>
                        </td>
                        <td key={project.id}>TODO
                        </td>
                    </tr>
                ))}
            </table>
            </div>
           
        );
    }
}


export default Project;