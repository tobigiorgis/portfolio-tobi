import React from 'react'
import ProjectDetail from '../../components/ProjectDetail'
import details from '../../data/details'


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
            image: project.image
        }
    }
}

const ProjectId = ( {name, image}) => {

    return (
        <div>
            <ProjectDetail name={name} image={image}/>
            {/* <Image
            className={styles.pic}
            src={image}
            alt={name}
            width={1000}
            height={500}
            />
            <p className={styles.name}>{name}</p> */}
        </div>
    )
}


export default ProjectId
