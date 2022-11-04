import React from 'react'
import Image from 'next/image'
import styles from '../styles/Projects.module.css'
import { useRouter } from 'next/router'
import details from '../data/details'

// export async function getStaticPaths() {

//     const projectsIds = details.map((p) => ({
//         params: { projectId: `${p.id}` }
//     }))

//     return {
//         paths: projectsIds,
//         fallback: false
//     }
// }

// export async function getStaticProps(context) {
//     const { projectId } = context.params
//     console.log(id);

//     const project = details.find((p) => p.id === Number(projectId))
//     console.log(project);

//     return {
//         props: {
//             name: project.name,
//             image: project.image
//         }
//     }
// }
const ProjectDetail = ( { name, image } ) => {
    
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


export default ProjectDetail
