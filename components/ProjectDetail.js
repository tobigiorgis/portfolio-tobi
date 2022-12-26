import React from 'react'
import Image from 'next/image'
import styles from '../styles/Projects.module.css'
import { useRouter } from 'next/router'

const ProjectDetail = ( { name, image } ) => {
    
    const router = useRouter()
    // const newProject = {name, image}
    // const newName = router.query.name
    // const newImage = router.query.image
    // console.log(name); 
    return (
        <div className={styles.divDetail}>
            <div className={styles.nameDiv}>
                <p className={styles.nameDetail}>{name}</p>
            </div>
            <div className={styles.picDiv}>
                <Image
                className={styles.pic}
                src={image}
                alt={name}
                width={1000}
                height={500}
                />
            </div>
        </div>
    )
}


export default ProjectDetail
