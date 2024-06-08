import React from "react";
import './skills.css';
import programlang from '../../pics/programlang.png';
import softwaredev from '../../pics/softwaredev.png';
import datascience from '../../pics/datascience.png';


const Skills =() => {
    return (
        <section id='skills'>
            <span className="skillTitle"> What I can do</span>
            <span className="skillDescription">With a passion for leveraging technology to create impactful solutions, I am excited to bring my diverse set of skills to a dynamic team where I can drive innovation and deliver exceptional results. My proficiency in programming languages such as Python, C++, HTML, CSS, and MySQL is complemented by a deep understanding of data structures, algorithms, and software development life cycles.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={programlang} alt="Programming Languages" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Programming Languages</h2>
                        <p>Proficient in Python, C++, MySQL, HTML, CSS, React, JavaScript</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={softwaredev} alt="Software Development" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Software Development</h2>
                        <p>Data Structure and Algorithms, Web Development, IoT Application Design, Project Management, Software Development Life Cycle (SDLC)</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={datascience} alt="Data Science" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Data Science</h2>
                        <p>Data Visualisation, Big Data Manipulation, Machine Learning, Predictive Analytics</p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Skills
