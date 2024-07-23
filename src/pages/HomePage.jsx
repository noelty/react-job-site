import Hero from "../components/Hero";
import CardList from "../components/CardList";
import JobListing from "../components/JobListing";
import ViewAllJobs from "../components/ViewAllJobs";

const HomePage = () => {
  return (
    <>
      <Hero />
      <CardList />
      <JobListing />
      <ViewAllJobs />
    </>
  );
};

export default HomePage;
