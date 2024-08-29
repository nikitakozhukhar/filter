import "./projectList.css";

function ProjectList(props) {
  const { projects } = props;
 
  const img = projects.map((project) => (
   
    <img className="projectImage" src={project.img} alt={project.category} />
  ));

  return (
    <>
      <div className="project">
        <div className="img">{img}</div>
      </div>
    </>
  );
}

export default ProjectList;
