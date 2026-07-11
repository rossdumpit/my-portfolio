
import ProjectContainer from '../../components/ProjectContainer';

const technologys=[
    'Designed and implemented an optimized relational database system tailored for secure data management',
    'Applied advanced normalization techniques to eliminate redundancy and enhance query efficiency',
    'Integrated constraints, triggers, and stored procedures to enforce business rules and prevent inconsistencies',
    'Conducted thorough testing and optimization to ensure system reliability and compliance with data security standards'
]

const outcomes=[
    'Improved data integrity, accuracy, and consistency across all operations',
    'Enhanced query performance, reducing response times and increasing system efficiency',
    'Eliminated redundant data, optimizing storage and ensuring a scalable database structure',
    'Achieved full compliance with security and regulatory requirements, ensuring data protection',
]

const challenge='Managing sensitive information securely while maintaining data integrity, accuracy, and consistency throughout the project lifecycle required a robust and efficient database solution. The existing system suffered from redundancy, slow query performance, and potential data inconsistencies, necessitating a complete redesign and optimization.'
const HospitalManagement = ()=>{
    return <ProjectContainer
        technologys={technologys}
        outcomes={outcomes}
        challenge={challenge}
        link={'https://github.com/rossdumpit/Hospital-management-system-using-Mysql'}
    />
}

export default HospitalManagement