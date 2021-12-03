
import { Menu ,Avatar} from 'antd';
import 'antd/dist/antd.css';
import {WalletOutlined,FundOutlined,SettingOutlined,AppstoreOutlined} from '@ant-design/icons';

const Dashboard = () => {

    const handleClick = e => {
        console.log('click ', e);
    };

    return(
        <>
            <h2 className="dashHead mt-3">celengan.</h2>
        <Menu onClick={handleClick()} style={{ width: 210 }} defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<AppstoreOutlined />}>Dashboard</Menu.Item>
            <Menu.Item key="2" icon={<FundOutlined />}>Analytic</Menu.Item>
            <Menu.Item key="3" icon={<WalletOutlined />}>Wallet</Menu.Item>
            <Menu.Item key="4" icon={<SettingOutlined />}>Settings</Menu.Item>
        </Menu>
        <div className="col-12 dashBoardImageDiv">
        <Avatar id="dashImage"src="https://joeschmoe.io/api/v1/random" /><b>Ansellma</b>
        </div>
        
        </>    
    );
}

export default Dashboard;