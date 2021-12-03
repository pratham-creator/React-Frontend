
import {Doughnut} from 'react-chartjs-2';

const Earnings = () => {
    return(
        <div className="earnings row">
            <div className="row">
                <div className="col-12"><h5>Earnings</h5></div>
            </div>

            <div className="row">
            <div className="col-6">
                <ul className="mt-3">
                    <li style={{color: 'rgba(39, 13, 182, 0.726)'}}>Food : 52%</li>
                    <li style={{color: 'rgba(62, 59, 223, 0.726)'}}>Invest : 27%</li>
                    <li style={{color: 'rgba(144, 151, 252, 0.884)'}}>Other : 21%</li>
                </ul>
            </div>
            <div className="col-6">
                <Doughnut 
                    data={{
                        labels:['Food','Invest','Other'],
                        datasets:[{
                            data:[52,27,21],
                            backgroundColor:['rgba(39, 13, 182, 0.726)','rgba(62, 59, 223, 0.726)','rgba(144, 151, 252, 0.884)'],
                        },],
                    }}
                    options= {{  
                        plugins: {
                          legend: {
                            display: false
                          }
                        },
                        layout: {
                            padding: {
                                left: 15,
                                right: 10,
                                bottom: 10,
                            }
                        }
                      }}
                      
                />
            </div>
            </div>
            
        </div>
    );
}

export default Earnings;