import React from "react";
import JobListing from "../components/JobListing"
import jobs from "../jobs.json"

const JobsPage = () => {
  return(
    <>
    <JobListing isHome={false} />
    </>
  )
};

export default JobsPage;
