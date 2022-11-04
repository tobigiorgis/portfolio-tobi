import React from 'react'
import Image from 'next/image'
import styles from '../styles/Projects.module.css'
import { useRouter } from 'next/router'
import details from '../data/details'

const ProjectDetail = ( {name, image} ) => {
    
    const router = useRouter()
    // const newProject = {name, image}
    // const newName = router.query.name
    // const newImage = router.query.image
    // console.log(name);
    
    return (
        <div className={styles.divDetail}>
            <Image
            className={styles.pic}
            src={image}
            alt={name}
            width={1000}
            height={500}
            />
            <p className={styles.nameDetail}>{name}</p>
        </div>
    )
}

export async function getStaticPaths() {

    const projectsIds = details.map((p) => ({
        params: { id: p.id }
    }))

    return {
        paths: projectsIds,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const {id} = context.router.query
    console.log(id);

    const project = details.find((p) => p.id === id)
    console.log(project);

    return {
        props: {
            name: project.name,
            image: project.image
        }
    }
}

export default ProjectDetail
