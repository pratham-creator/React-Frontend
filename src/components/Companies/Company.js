import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Row, Col} from "reactstrap";
import "./Company.css";
// import ubsLogo from "../images/UBS.jpg";
// import { Card } from "antd";
import { getCompany } from "../../api/company";
import { getBlogsByCompanyId } from "../../api/blog";
import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer";
import "../Common/index.css";
// const { Meta } = Card;

const Company = () => {

  const [company, setCompany] = useState({});
  const [blogs, setBlogs] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    // console.log(process.env.REACT_APP_API);
    getCompany(id)
      .then(res => {
        console.log(res.data);
        setCompany(res.data)
      })
      .catch(err => console.log(err));

    getBlogsByCompanyId(id)
      .then(res => {
        console.log(res.data);
        setBlogs(res.data)
      })
      .catch(err => console.log(err));
  },[id]);

  const navigation = [
    { name: "Home", href: "/", current: false },
    { name: "Companies", href: "/companies", current: true },
    { name: "Interview Experiences", href: "/interviewexp/recent", current: false },
  ];

  return (
    <>
      <Navbar navigation={navigation} />
      <>
      <div style={{ margin: "0px" }} className="homeBox">
        <center>
        <div className="col-md-9">
          <Row style={{ margin: "0px" }} className="homepageMainDivRow1">
            <Col md="6" style={{ padding: "0px" }}>
              <br />
              <br />
              <div className="aboutUsParaDiv about1">
                <h1 className="aboutUsHeading text-2xl md:text-3xl font-bold">{company.name}</h1>
                <div className="aboutUsParaInnerDiv p-3">
                <p className="aboutUsPara">
                  {company.info}
                </p>
                </div>
              </div>
            </Col>
            <Col md="6" style={{ padding: "0px" }}>
              <div className="aboutUsImgDiv">
                <img
                  src={company.image}
                  className="aboutUsImg mt-5 p-sm-5"
                  alt="About Us"
                />
              </div>
            </Col>
          </Row>
        </div>
        </center>
      </div>

      <div className="companyInfoCards md:px-[11%]">
        <div className="text-center mt-5">
          <center><h2 className="text-2xl md:text-3xl font-bold p-1">Popular UBS Interview Experiences</h2></center>
        </div>
        <hr />

        {
          blogs.map((b,i)=>(
            <div className="row bg-secondary p-3 m-3  expCard">
            <div className="col-12 ">
              <h3 className="text-white text-xl font-semibold">{b.title}</h3>
            </div>
            <div className="col-12">
              <p>{b.body.substring(0,130)}....  <a href={`/blog/${b._id}`}>Read more</a></p>
            </div>
            </div>
          ))
        }
      </div>

      {/* <Container
        fluid
        className="recentInterviewDiv h1 font-weight-bold text-center"
      >
        <TypingEffect text={["Recent Recruitment Interviews"]} />
      </Container>

      <Container style={{marginTop: "20px"}}>
        <Row style={{marginBottom: "100px"}}>
          <Col md="4" style={{ padding: "0px" }}>
            <Card className="interviewCard"
              style={{ width: 300 }}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[
                <EyeOutlined key="setting" />,
              ]}
            >
              <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title="Card title"
                description="This is the description"
              />
            </Card>
          </Col>

          <Col md="4" style={{ padding: "0px" }}>
            <Card className="interviewCard"
              style={{ width: 300 }}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[
                <EyeOutlined key="setting" />,
              ]}
            >
              <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title="Card title"
                description="This is the description"
              />
            </Card>
          </Col>

          <Col md="4" style={{ padding: "0px" }}>
            <Card className="interviewCard"
              style={{ width: 300 }}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[
                <EyeOutlined key="setting" />,
              ]}
            >
              <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title="Card title"
                description="This is the description"
              />
            </Card>
          </Col>
        </Row>
      </Container> */}
    </>
      <Footer />
    </>
  );
};

export default Company;
