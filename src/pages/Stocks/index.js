
import ProjectContainer from '../../components/ProjectContainer';

const technologys=[
'Long Short-Term Memory (LSTM) – Captures sequential dependencies in time-series data',
'Linear Regression – Establishes baseline predictions based on historical trends',
'k-Nearest Neighbors (KNN) – Recognizes patterns in stock price movements',
'Support Vector Machines (SVM) – Identifies stock price trends using robust classification',
'Feature engineering to extract relevant financial indicators',
'Hyperparameter tuning to minimize prediction errors',
'Data preprocessing, including normalization, missing value imputation, and outlier detection',
'Mean Absolute Percentage Error (MAPE) used as a key performance metric'
]

const outcomes=[
    'High predictive accuracy with a MAPE of 2.15, ensuring reliable stock price forecasts',
    'Robust time-series forecasting with models effectively capturing market trends and fluctuations',
    'Real-world financial application supporting data-driven decision-making for traders and investors',
    'Scalable and adaptable system capable of integrating additional market indicators and evolving with financial data trends'
]

const challenge='Stock price prediction is a highly complex task due to market volatility, economic factors, and investor sentiment. The objective was to develop and implement machine learning models that accurately forecast stock prices, enabling data-driven financial decision-making. Key challenges included handling noisy financial data, selecting relevant features, and optimizing model performance for real-world applicability.'

const Stocks = ()=>{
    return <ProjectContainer
        technologys={technologys}
        outcomes={outcomes}
        challenge={challenge}
        link={'https://github.com/rossdumpit/Data-analysis-and-visualisation-of-airline-dataset'}
    />
}

export default Stocks