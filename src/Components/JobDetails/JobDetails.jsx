import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/localstorage";
import { Link } from "react-router-dom";
const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idint = parseInt(id);
  const job = jobs.find((job) => job.id === idint);
  
 const handleApplyJob =() => {
  saveJobApplication(idint);
  toast('You have applied successfully')
 }


  console.log(job);
  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid gap-4 md:grid-cols-4 ">
        <div className="border md:col-span-3 ">
          <h2 className="text-xl mt-6">
            {" "}
            <span className="font-extrabold ">Job Description:</span>
            {job.job_description}
          </h2>
          <h2 className="text-xl mt-6">
            {" "}
            <span className="font-extrabold ">Job Responsibility: </span>
            {job.job_responsibility}
          </h2>
          <h2 className="mt-6">
            {" "}
            <span className="font-extrabold ">Educational Requirements: </span>
            <br /> {job.educational_requirements}
          </h2>
          <h2 className="mt-6">
            {" "}
            <span className="font-extrabold">Experiences: </span>
            <br /> {job.experiences}
          </h2>
        </div>
       <div>
       <div className="border pl-7 bg-gradient-to-r from-[#7E90FE1A] to-[#9873FF1A">
          <div>
          <h1 className="font-extrabold">Job Details</h1>
          <hr className="mr-4" />
          </div>
          <div>
            <h3><span className="font-bold">Salary:</span> {job.salary}</h3>
            <h3><span className="font-bold">Job Title:</span>{job.job_title} </h3>
          </div>
          <br />
          <div>
          <h1 className="font-extrabold">Contact Information: </h1>
          <hr className="mr-4" />
          </div>
          <div>
          <h3><span className="font-bold">Phone :</span> {job.phone}</h3>
          <h3><span className="font-bold">Email :</span>{job.email} </h3>
          <h3><span className="font-bold">Address :</span> {job.address}</h3>
          </div>

        </div>
        <button onClick={handleApplyJob} className="btn btn-primary w-full">Apply Now</button>
        
       </div>
        
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;
