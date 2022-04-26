import { Link } from "react-router-dom";
import "../Common/index.css";

const EachCompanyCard = ({ c }) => {
  const id = c._id;
  return (
    <div className="col-6 col-md-4 col-lg-3">
      <Link to={`/company/${id}`}>
        <div className="flip-card p-2">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img alt="logoImage" src={c.image} className="cardImage pl-3 pt-3 pr-3 pb-1" />
              <h4 className="frontSideHeading text-sm md:text-lg font-bold">{c.name}</h4>
            </div>
            <div className="flip-card-back">
              <h3 className="backSideHeading text-lg md:text-2xl font-bold pt-2" style={{ color: "white" }}>
                {c.name}
              </h3>
              <h3
                className="backSideType text-lg md:text-3xl font-bold pl-2 pr-2"
                style={{ color: "white" }}
              >
                {c.companyType}
              </h3>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default EachCompanyCard;
