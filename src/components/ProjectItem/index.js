import { Link } from "react-router-dom"
import useBreakpoint from "../useBreakpoint";
import { useEffect } from "react";
import Aos from 'aos';


const ProjectItem = ({href,image,altText,header,body,type})=>{
    useEffect(() => {
        Aos.init({
          duration: 1000,  // Animation duration in ms
          once: true,      // Run the animation once
        });
      }, []);

    const breakpoint = useBreakpoint();
    const isSmallDevice = breakpoint==='xs'||breakpoint==='sm'

    return (  
    <div data-aos={isSmallDevice?"fade-up":"fade-left"} className="container-fluid">
        <Link className="card-link" to={href}>
            <div className="row align-items-center mb-3 project-item rounded">
                <div className="col-md-auto col-12 p-0 image-container">
                    <img className="project-image rounded" src={image} alt={altText}/>
                </div>
                <div className="col-md-9 col-12 project-card-content p-2 pt-3 p-md-3 ps-md-4">
                    
                <h4 className="card-title">{header}</h4>
                <small>{type}</small>
                <p className="card-text">{body}</p>
                
                </div>
            </div>
        </Link>
    </div>
    )
}

export default ProjectItem