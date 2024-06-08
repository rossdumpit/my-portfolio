import React from "react";
import './works.css';
import Portfolio1 from '../../pics/portfolioImg1.png';
import Portfolio2 from '../../pics/portfolioImg2.png';
import Portfolio3 from '../../pics/portfolioImg3.png';
import Portfolio4 from '../../pics/portfolioImg4.png';

const Works = () => {
    return (
        <section id="works">
            <h2 className="worksTitle"> My Portfolio</h2>
            <span className="worksDescription"> I take pride in paying attention to the smallest details and making sure that my work time is within the deadline. I am excited to bring my inventory of skills and experience to help businesses flourish and provide maximum return of value to investors.</span>
            <div className="worksImgs">
                <a href={"https://github.com/rossdumpit/Hospital-management-system-using-Mysql"} target="_blank" rel="noopener noreferrer" className="workItem">
                    <img src={Portfolio1} alt="Hospital Management System Using MySQL" className="worksImg" />
                    <p className="workDesc">Hospital Management System Using MySQL</p>
                </a>
                <a href={"https://github.com/rossdumpit/Machine-learning-models-for-stock-price-prediction"} target="_blank" rel="noopener noreferrer" className="workItem">
                    <img src={Portfolio2} alt="Stock Price Prediction Using Machine Learning" className="worksImg" />
                    <p className="workDesc">Stock Price Prediciton With Machine Learning</p>
                </a>    
                <a href={"https://github.com/rossdumpit/Data-analysis-and-visualisation-of-airline-dataset"} target="_blank" rel="noopener noreferrer" className="workItem">
                    <img src={Portfolio3} alt="Airline Dataset Analysis and Visualisation" className="worksImg" />
                    <p className="workDesc">Airline Dataset Analysis and Visualisation</p>
                </a>
                <a href={"https://github.com/rossdumpit/Hospital-management-system-using-Mysql"} target="_blank" rel="noopener noreferrer" className="workItem">
                    <img src={Portfolio4} alt="IoT based Health Monitoring System Using Arduino" className="worksImg" />
                    <p className="workDesc">Iot based Health Monitoring System</p>
                </a>
            </div>
            <button className="worksBtn">See More</button>
        </section>
    );
}

export default Works;
