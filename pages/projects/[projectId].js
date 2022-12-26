import React from 'react'
import ProjectDetail from '../../components/ProjectDetail'
import details from '../../data/details'
import styles from '../../styles/Projects.module.css'
import Island from '../../components/Island'
import Image from 'next/image'


export async function getStaticPaths() {

    const projectsIds = details.map((p) => ({
        params: { projectId: `${p.id}` }
    }))

    return {
        paths: projectsIds,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const { projectId } = context.params


    const project = details.find((p) => p.id === Number(projectId))
    console.log(project);

    return {
        props: {
            name: project.name,
            images: project.images,
            image: project.image,
            description: project.description,
        }
    }
}

const ProjectId = ( {name, images, image, description }) => {
    return (
        <div className={styles.mainDetailDiv}>
            <div className={styles.fullViewDiv}>
                <ProjectDetail name={name} image={image}/>
                <div className={styles.footerDiv}>
                    <Island/>
                </div>
            </div>
            <div className={styles.lastDiv}>
                <div className={styles.descriptionDiv}>
                    <p className={styles.projectDetails}>Project details</p>
                    <p className={styles.projectDescription}>{description}</p>
                </div>
                <div className={styles.morePics}>
                    {images.map((imagen) => (
                        <div key={imagen} className={styles.pic2}>
                        <Image className={styles.pic} src={imagen} alt='view' width={1300} height={600}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}


export default ProjectId
