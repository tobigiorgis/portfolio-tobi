import Image from "next/image"
import styles from '../styles/Projects.module.css'
import { useRouter } from 'next/router'
import Link from "next/link"

const Project = ({name, image, id}) => {

    const newProject = {name, image, id}


    return (
        <div>
            <Link href={`/projects/${newProject.id}`}>
                <Image
                className={styles.pic}
                src={newProject.image}
                alt={newProject.name}
                width={600}
                height={300}
                />
            </Link>
            <p className={styles.name}>{newProject.name}</p>
        </div>
    )
}

export default Project