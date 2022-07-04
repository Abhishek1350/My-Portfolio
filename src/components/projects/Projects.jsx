import React, { useEffect, useState } from 'react'
import { Container } from "react-bootstrap";
import "./projects.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import ProjectCard from './ProjectCard';
import { client } from "../../client"
import Spinner from "../spinner/Spinner"

const Porjects = () => {
  const [projectData, setProjectData] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = "Abhishek-Projects"
    const fetchProjectData = async () => {
      try {
        const query = '*[_type=="projects"]'
        const fetchedProjectData = await client.fetch(query)
        setProjectData(fetchedProjectData)
        console.log(fetchedProjectData)
      }
      catch (err) {
        console.log(err)
      }
      setLoading(false)
    }
    fetchProjectData();
  }, [])
  return (
    <Container fluid className="py-5 mt-5 projects-container">
      <h1 className="heading text-center text-white animated-left">
        My <span className="text-primary">Projects</span> <span className="text-danger"><FontAwesomeIcon icon={faBriefcase} /></span>
      </h1>

      <Container className="projects-cards-container py-3 ">
        {
          loading && <Spinner />
        }

        {
          projectData.map((elem, index) => {
            const { project_name, project_dec, project_images, project_url, project_stack } = elem
            return <ProjectCard project_name={project_name} project_dec={project_dec} project_images={project_images} project_url={project_url} project_stack={project_stack} key={index} />
          })
        }

      </Container>

    </Container>
  )
}

export default Porjects