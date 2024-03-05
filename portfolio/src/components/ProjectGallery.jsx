import React from 'react';
import projects from '../data/projects.json';
import Project from './Project';

function ProjectGallery() {
    console.log("Data: ", projects)
  return (
    <>
        <div>ProjectGallery</div>
    
        { projects.map( (item) => (
            <Project data={item}/>
        ))}
    </>
  )
}

export default ProjectGallery