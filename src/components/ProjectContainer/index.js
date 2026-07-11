import { useEffect } from 'react';
import Aos from 'aos';
import useBreakpoint from "../useBreakpoint";

const ProjectContainer = ({technologys,outcomes,challenge,link})=>{
    useEffect(() => {
        Aos.init({
          duration: 1000,  // Animation duration in ms
          once: true,      // Run the animation once
        });
      }, []);

    const breakpoint = useBreakpoint();
    const isSmallDevice = breakpoint==='xs' || breakpoint==='sm'

    return<>
        <div data-aos={isSmallDevice?"fade-up":"fade-left"} className="position-relative overflow-hidden p-3 ps-md-5 pe-md-5 pb-md-5 pt-md-0 ms-md-3 me-md-3 mbmd-3 mt-md-0 text-left">
          <div className="col-md-8p-lg-5 mx-auto">
            <h1 className="display-4 font-weight-normal">The Challenge</h1>
            <p className="lead font-weight-normal">{challenge}</p>
          </div>
          <div className="product-device box-shadow d-none d-md-block"></div>
          <div className="product-device product-device-2 box-shadow d-none d-md-block"></div>
        </div>  
        
        <div data-aos={isSmallDevice?"fade-up":"fade-left"} className="position-relative overflow-hidden p-3 ps-md-5 pe-md-5 pb-md-5 pt-md-0 ms-md-3 me-md-3 mbmd-3 mt-md-0 text-left">
          <div className="col-md-8p-lg-5 mx-auto mt-0">
            <h1 className="display-4 font-weight-normal">The Technology</h1>
            <ul className="list-unstyled">
                {technologys.map((item,index)=>
                <li key={`tech-${index}`}>
                    <i className="bi bi-key-fill me-2 technology icon"></i>{item}
                </li>
                )}
            </ul>
          </div>
          <div className="product-device box-shadow d-none d-md-block"></div>
          <div className="product-device product-device-2 box-shadow d-none d-md-block"></div>
        </div>  
    
        <div data-aos="fade-up" className="position-relative overflow-hidden p-3 ps-md-5 pe-md-5 pb-md-5 pt-md-0 ms-md-3 me-md-3 mbmd-3 mt-md-0 text-left">
          <div className="col-md-8p-lg-5 mx-auto mt-0">
            <h1 className="display-4 font-weight-normal">The Outcome</h1>
            <ul className="list-unstyled">
            {outcomes.map((item,index)=>
                            <li key={`outcome-${index}`}>
                                <i className="bi bi-check-square-fill success-icon me-2"></i>{item}
                            </li>
                            )}
            </ul>
          </div>
          <div className="product-device box-shadow d-none d-md-block"></div>
          <div className="product-device product-device-2 box-shadow d-none d-md-block"></div>
          <a href={link}>
          <button type="button" className="contact-me-button p-2 rounded shadow-none w-100 font-lg fs-5 my-2">See Project</button>
          </a>
        </div>  
    </>
}

export default ProjectContainer