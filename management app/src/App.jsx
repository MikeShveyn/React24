import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";
import SelectedProject from "./components/SelectedProject"
import {useState} from 'react'

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProject: "empty",
    projects: [],
    tasks: []
  })

  function handleDoneAddNewProject(projectData) {
    setProjectsState(prevState => {
      const newProject = {...projectData, id: Math.random()}
      return {
        ...prevState,
        selectedProject: 'empty',
        projects: [...prevState.projects, newProject]
      }
    })
  }

  function handleStartAddProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProject: "new"
      }
    })
  }

  function handleCancelAddProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProject: "empty"
      }
    })
  }

  function handleSelectProject(id) {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProject: id
      }
    })
  }

  function handleDeleteProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProject: "empty",
        projects : prevState.projects.filter(pr => pr.id !== prevState.selectedProject)
      }
    })
  }

  function handleAddTask(text) {
    setProjectsState(prevState => {
      const newTask = {
        text: text,
        id: Math.random(),
        projectId : prevState.selectedProject
      }

      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks]
      }
    })
  }

  function handleDeleteTask(id) {
    setProjectsState(prevState => {
      return {
        ...prevState,
        tasks : prevState.tasks.filter(ts => ts.id !== id)
      }
    })
  }

  const selectedProject = projectsState.projects.find(p => p.id === projectsState.selectedProject)
  
  let content = <SelectedProject  
  tasks={projectsState.tasks}
  onAddTask={handleAddTask}
  onRemoveTask={handleDeleteTask}
  onDelete={handleDeleteProject} 
  project={selectedProject}/>;

  if(projectsState.selectedProject == "new") {
    content = <NewProject
     cancelProject={handleCancelAddProject} 
     addProject={handleDoneAddNewProject}/>
  }else if(projectsState.selectedProject == "empty") {
    content = <NoProjectSelected 
    onStartAddProject={handleStartAddProject}/>
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar 
      slecetedProjectId = {projectsState.selectedProject}
       onSelectProject={handleSelectProject}
       projects={projectsState.projects}
       onStartAddProject={handleStartAddProject}
       />
      {content}
    </main>
  );
}

export default App;
