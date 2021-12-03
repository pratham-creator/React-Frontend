import {Button,Input } from 'antd';

const Conversion = () => {
    return(
        <div className="conversion row">
            <div className="row">
                <h5>Conversion</h5>
            </div>
            <div className="row">
                <div className="col-9">
                    <Input className="conversion-box" value="201"></Input> 
                    
                </div>
                <div className="col-3">
                    <select className="conversion-drop">
                        <option value="volvo">USD</option>
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <Button id="conversion-btn" block>Swap</Button>
                </div>
            </div>
            <div className="row conversion-last">
                <div className="col-9">
                <Input className="conversion-box" value="201,44,222"></Input>
                </div>
                <div className="col-3">
                    <select className="conversion-drop">
                        <option value="volvo">IDR</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default Conversion;