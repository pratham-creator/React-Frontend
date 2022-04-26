// import ubsLogo from "../images/UBS.jpg";
import { MoneyCollectFilled } from "@ant-design/icons";
const CompanyPoster = ({company}) => {
  return (
    <div className="wrapper antialiased text-gray-900 p-5">
      <card className="border-gray-300 border-2 rounded-xl w-[100%] sm:w-[30rem] py-4 px-4 sm:py-7  sm:px-5 bg-white shadow-lg">
        <div className="grid md:grid-cols-6 gap-3">
          <div className="md:col-span-3">
            <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
              New
            </span>
            <h2 className="h3 text-gray-700"> {company.name} </h2>
            <p className="text-gray-500 mt-2">
              {" "}
              {company.info.substring(0,60)}... <a href={`/company/${company._id}`}>Read more</a>
              <br />
              <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full p-1 mt-3 uppercase font-semibold tracking-wide"><MoneyCollectFilled style={{ fontSize: '18px' }}/>{"  "}{company.ctc} Rs</span>
            </p>
          </div>

          <div className="md:col-span-3">
            <img src={company.image} />
          </div>
        </div>
      </card>
    </div>
  );
};

export default CompanyPoster;
