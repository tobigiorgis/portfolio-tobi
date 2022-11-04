import Island from "../../components/Island"
import styles from '../../styles/Projects.module.css'
import { ProjectList } from "../../components/ProjectList"


const projects = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h1 className={styles.h1}>Projects</h1>
                <p className={styles.phrase}>Great ideas require better designs.</p>
            </div>
            <ProjectList/>
            <footer className={styles.footer}>
                <Island/>
            </footer>
        </div>
    )
}

export default projects
