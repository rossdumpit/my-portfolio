import ProjectItem from "../ProjectItem"


import Hospital from '../../assets/images/hospital.png'
import Airline from '../../assets/images/airplane.png'
import Stocks from '../../assets/images/stocks.png'
import Health from '../../assets/images/healthmonitor.png'
import { useEffect } from "react"
import Aos from 'aos'
import useBreakpoint from "../useBreakpoint"
const Projects = ()=>{
    
    useEffect(() => {
        Aos.init({
          duration: 1000,  // Animation duration in ms
          once: true,      // Run the animation once
        });
      }, []);

    const breakpoint = useBreakpoint();
    const isSmallDevice = breakpoint==='xs'||breakpoint==='sm'

    return(
        <>
            <h3 data-aos={isSmallDevice?"fade-up":"fade-left"} className="fs-5 fw-bold mb-3">Latest Projects</h3>
            <div className="container ps-0 pe-0">
                <ProjectItem
                    image={Airline}
                    altText={'Airline'}
                    href={'/Airline'}
                    header={'Airline'}
                    type={'Data Analysis'}
                    body={'Interactive data visualization framework to turn complex datasets into actionable insights'}
                />  
                <ProjectItem
                    image={Stocks}
                    altText={'Stock Predictions'}
                    href={'/StockPredictions'}
                    header={'Stock Predictions'}
                    body={'Machine learning models (lstm, linear regression, random forest, svm, k-nn) and compares their accuracy in predicting NVDIA stocks'}
                    type={'Machine Learning'}
                />  
                <ProjectItem
                    image={Hospital}
                    altText={'Hospital Data'}
                    href={'/HospitalData'}
                    header={'Hospital Data'}
                    body={'Hospital data management system schema and demonstrates its implementation in MySQL to improve data storage, retrieval, and efficiency.'}
                    type={'Data Management'}
                />  
                <ProjectItem
                    image={Health}
                    altText={'Health Monitor'}
                    href={'/HealthMonitor'}
                    header={'Health Monitor'}
                    body={'The project creates a remote health monitor using Arduino, NodeMCU, an LCD, and Blynk for heart rate and temperature tracking.'}
                    type={'IoT'}
                />  
            </div>
        </>
    )
}

export default Projects