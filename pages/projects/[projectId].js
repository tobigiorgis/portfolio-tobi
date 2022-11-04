import { useRouter } from 'next/router'
import React from 'react'
import Image from 'next/image'
import ProjectDetail from '../../components/ProjectDetail'
import details from '../../data/details'

const ProjectId = () => {

    // const router = useRouter()
    // const name = router.query.name
    // const imagen = router.query.image
    // console.log(name)
    return (
        <div>
            <ProjectDetail/>
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

// export async function getStaticPaths() {
//     const projectsIds = details.map(p => ({
//         params: { id: p.id }
//     }))

//     return {
//         paths: projectsIds,
//         fallback: false
//     }
// }

// export async function getStaticProps(context) {
//     const {id} = context.router.query

//     const project = details.find(p => p.id === id)

//     return {
//         props: {
//             name: project.name,
//             image: project.image
//         }
//     }
// }

export default ProjectId
