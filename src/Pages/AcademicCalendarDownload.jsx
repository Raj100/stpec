import './academic_calender.css';
import line from '../images/Line.png';
import card_img from '../images/Rectangle 41.png';


const academic_calender = () => {
    return(
 
    <div className="page">
        <div className="title">
            <h1>Academic Calender - 2024</h1>
            <img src={line} alt="line image" />
        </div>
        <div className="items">
            <div className="card">
                {/* <img src={card_img} alt="" /> */}
                <div className="info">
                    <div className="year">
                        <h4>Even Semester</h4>
                        <h5>2023-24</h5>
                    </div>
                    <div className="batch">
                        <h5>B.Tech | M.Tech | Ph.D</h5>
                    </div>
                </div>
            </div>
            <div className="card">
                {/* <img src={card_img} alt="" /> */}
                <div className="info">
                    <div className="year">
                        <h4>Even Semester</h4>
                        <h5>2023-24</h5>
                    </div>
                    <div className="batch">
                        <h5>B.Tech | M.Tech | Ph.D</h5>
                    </div>
                </div>
            </div>
            <div className="card">
                {/* <img src={card_img} alt="" /> */}
                <div className="info">
                    <div className="year">
                        <h4>Even Semester</h4>
                        <h5>2023-24</h5>
                    </div>
                    <div className="batch">
                        <h5>B.Tech | M.Tech | Ph.D</h5>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    );
}

export default academic_calender;
