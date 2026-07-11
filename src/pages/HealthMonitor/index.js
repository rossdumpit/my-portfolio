
import ProjectContainer from '../../components/ProjectContainer';

const technologys=[
'Utilized Arduino as the core microcontroller to integrate and process health sensor data',
    'Implemented multiple sensors to track key health parameters, ensuring comprehensive monitoring',
    'Developed a real-time data transmission system using the Blynk IoT platform for remote access',
    'Designed a mobile application interface for intuitive visualization and user interaction',
    'Conducted rigorous calibration and testing to enhance measurement accuracy and system performance'
]

const outcomes=[
    'Achieved a 100% accuracy rate in detecting and transmitting health parameters',
    'Provided seamless remote monitoring, allowing users to track their health in real time from anywhere',
    'Enhanced system reliability and scalability, ensuring long-term usability and adaptability',
    'Delivered a cost-effective solution, making advanced health monitoring accessible for home environments',
    'Optimized both hardware and software components to improve ease of use and efficiency'
]

const challenge='The need for a reliable and cost-effective home-based health monitoring system was evident, particularly for individuals requiring continuous tracking of vital health parameters. The goal was to design a solution that could provide real-time monitoring, remote accessibility, and user-friendly visualization while maintaining high accuracy and reliability.'

const HealthMonitor = ()=>{
    return <ProjectContainer
        technologys={technologys}
        outcomes={outcomes}
        challenge={challenge}
        link={'https://github.com/rossdumpit/IOT-homa-based-health-monitor-connected-to-ThingSpeak-'}
    />
}

export default HealthMonitor