import {RightOutlined} from '@ant-design/icons';
import {Button} from 'antd';

const UpgradeAccount = () => {
    return(
        <div className="upgAccount row">
            <div className="upgContent col-12">
            <Button id="upgButton" shape="circle" size="large" icon={<RightOutlined />}></Button>
            <label className="upgHeader">Upgrade your account to PRO+</label><br></br>
                <label className="upgSubtitle">Get Exclusive discounts for any payment method by<br></br>
                        upgrading your plan to premium
                </label>
            </div>
        </div>
    );
}

export default UpgradeAccount;