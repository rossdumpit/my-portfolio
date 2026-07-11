
import { useEffect } from "react"
import Aos from 'aos'
import useBreakpoint from "../useBreakpoint"

const languages=[
    'Python', 'C++', 'MySQL', 'HTML', 'CSS', 'React', 'JavaScript'
]

const softwareDevelopment = [
    'Data Structure and Algorithms',' Web Development', 'IoT Application Design', 'Project Management', 'Software Development Life Cycle (SDLC)'
]

const dataScience = [
    'Data Visualisation', 'Big Data Manipulation', 'Machine Learning', 'Predictive Analytics'
]

const Skills = ()=>{

    useEffect(() => {
        Aos.init({
          duration: 1000,  // Animation duration in ms
          once: true,      // Run the animation once
        });
      }, []);

    const breakpoint = useBreakpoint();
    const isSmallDevice = breakpoint==='xs'||breakpoint==='sm'

    return(
        <div data-aos={isSmallDevice?"fade-up":"fade-left"} className="mb-0 mb-md-3" >
                <div class="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
                    <div class="col">
                        <div class="text-center d-flex flex-column align-items-center align-items-xl-center">
                            <div class="bs-icon-lg bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-3 bs-icon lg">
                            <i class="bi bi-person-square fs-3 skill-icon"></i>
                            </div>
                            <div class="px-3">
                                <h4>Programming</h4>
                                <ul class="list-unstyled">
                                    {languages.map((item,index)=><li key={`programming-language-item-${index}`}>{item}</li>)}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="text-center d-flex flex-column align-items-center align-items-xl-center">
                            <div class="bs-icon-lg bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-3 bs-icon lg">
                                <i class="bi bi-code-square fs-3 skill-icon"></i></div>
                            <div class="px-3">
                                <h4>Software Development</h4>
                                <ul class="list-unstyled">
                                    {softwareDevelopment.map((item,index)=><li key={`software-development-item-${index}`}>{item}</li>)}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="text-center d-flex flex-column align-items-center align-items-xl-center">
                            <div class="bs-icon-lg bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-3 bs-icon lg">
                                <i class="bi bi-filter-square fs-3 skill-icon"></i></div>
                            <div class="px-3">
                                <h4>Data Science</h4>
                                <ul class="list-unstyled">
                                    {dataScience.map((item,index)=><li key={`data-science-item-${index}`}>{item}</li>)}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Skills