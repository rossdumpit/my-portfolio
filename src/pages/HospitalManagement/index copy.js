
import ProjectContainer from '../../components/ProjectContainer';

const technologys=[
    'MySQL: Database for structuring and querying hospital data',
'ER Modeling: Defining key hospital entities (patients, doctors, etc.)',
'SQL Queries & Stored Procedures: Optimizing data retrieval',
'Indexing Techniques: Enhancing query performance',
'RBAC: Managing user permissions',
'Data Encryption: Ensuring compliance with healthcare standards (e.g., HIPAA)'
]

const outcomes=[
    'Improved Data Organization: Easy access to patient records, appointments, and billing',
'Optimized Performance: Faster data retrieval through efficient queries and indexing',
'Enhanced Security: Compliance with healthcare data protection standards',
'Scalability & Flexibility: A system that can grow with the hospital, supporting additional features'
]

const Airline = ()=>{
    return <ProjectContainer
        technologys={technologys}
        outcomes={outcomes}
        challenge={'TechMart is tasked with designing a structured and efficient data management system for hospitals to enhance data accessibility, compliance, and operational efficiency.'}
        link={'https://github.com/rossdumpit/Data-analysis-and-visualisation-of-airline-dataset'}
    />
}

export default Airline