import { Link } from 'react-router-dom';
import Avatar from '../../assets/images/self.png'
import LinksList from '../LinksList';
import Aos from 'aos'
import { useEffect, useState } from 'react';

const Bio = ()=>{
    const [isLoading, setIsLoading] = useState(true); // Track loading state

    const handleImageLoad = () => {
      setIsLoading(false); // Set loading to false when image is loaded
    };

    useEffect(() => {
        Aos.init({
            duration: 1000,  // Animation duration in ms
            once: true,      // Run the animation once
        });
    }, []);

    return (
        <div style={{ display: isLoading ? 'none' : 'block' }}  className="row row-cols-1 row-cols-sm-2 row-cols-lg-1 mb-5 mb-md-3">
            <div className="col-sm-4 mb-3">
                <Link to="/">
                    <img onLoad={handleImageLoad} className="img-fluid border rounded-circle border-0 overflow-hidden profile-picture" alt="Me" src={Avatar}/>
                </Link>
            </div>
            <div className="col-sm-8 order-sm-first order-lg-last">
                <h3 className="fs-5 fw-bold">Hey! I'm Ross</h3>
                <p>I'm a strong First-Class computing science graduate with a foundation in programming, algorithms, and software who combines technical expertise with healthcare experience, managing 1,000+ patient cases, leading teams in high-stakes environments and leveraging data analysis for impactful healthcare and tech solutions.</p>
                <p>I'm available for hire!</p>
                <LinksList/>
                <Link to="/ContactMe">
                    <button type="button" className="contact-me-button p-2 rounded shadow-none w-100 font-lg fs-5 mb-2">Get in touch</button>
                </Link>
            </div>
        </div>
    )}

export default Bio;