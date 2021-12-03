import {BellOutlined, SearchOutlined } from '@ant-design/icons';
import {Button} from 'antd';

const Header = () => {
    return(
        <>
        <label className="hn">Hello <b>Ansellma</b><br/>Welcome back!</label>
        <Button className="headerButton" shape="circle" size="medium" icon={<BellOutlined />}></Button>
        <Button className="headerButton" shape="circle" size="medium" icon={<SearchOutlined />}></Button>
        </>
    );
}

export default Header;