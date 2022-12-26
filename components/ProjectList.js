import details from '../data/details'
import Project from'./Project'
import styles from '../styles/Projects.module.css'

export const ProjectList = () => {
    return (
        <div className={styles.projects}>
            <ul>
                {details?.map((project) => (
                    <Project {...project} key={project.id}/>
                ))}
            </ul>
        </div>
    )
}
