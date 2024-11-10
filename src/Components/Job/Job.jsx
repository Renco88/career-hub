import { CiLocationOn} from "react-icons/ci";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    job_type,
    remote_or_onsite,
    location,
    salary,
  } = job;
  return (
    <div>
      <div className="card card-compact bg-base-100  shadow-xl">
        <figure>
          <img src={logo} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{job_title}</h2>
          <p>{company_name}</p>
          <div className="flex ">
            <button className="px-5 py-2 text-[#7E90FE] font-extrabold border border-[#7E90FE] rounded md:mr-4">
              {remote_or_onsite}
            </button>
            <button className="px-5 py-2 text-[#7E90FE] font-extrabold border border-[#7E90FE] rounded md:mr-4">
              {job_type}
            </button>
          </div>
          <div className="mt-4 md:flex md:gap-4 gap-1">
            <div className="flex gap-1">
              <h2>
                <CiLocationOn className="text-2xl"></CiLocationOn>
              </h2>
              <div>{location}</div>
            </div>

            <div className="flex gap-1">
                <h2><HiOutlineCurrencyDollar className="text-2xl"></HiOutlineCurrencyDollar></h2>
            <div>{salary}</div>
            </div>
          </div>
          <div className="card-actions ">
            <Link to={`job/${id}`}>
            <button className="btn btn-primary">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
