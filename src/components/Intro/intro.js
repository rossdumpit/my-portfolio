import React from 'react';
import './intro.css';
import bg from '../../pics/self.png';
import { Link } from 'react-scroll';
import btnImg from '../../pics/wrench.png';

const Intro = () => {
    return(
        <section id="intro">
            <div className="introContent">
                <span className="Yo">Yo, </span>
                <span className="introText">
                    I'm <span className="introName">Rosvelt</span> <br />
                    <span className="introText"> Computer Science </span>
                    <span className="introSubtext">and </span>
                    <span className="introText">Nursing Gradute</span>
                    </span>
                <p className="introPara">I bring a unique blend of technical and healthcare expertise. </p>
                <Link><button className="btn"><img src={btnImg} alt="Hire Me" className='btnImg' />Hire Me</button></Link>
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    );
}

export default Intro;
