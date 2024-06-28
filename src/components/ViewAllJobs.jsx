import {useState} from "react"

const ViewAllJobs = () => {
    const [showMoreJob, setShowMoreJob] = useState();
  return (
    <section className="m-auto max-w-lg my-10 px-6">
      <a
        href="jobs.html"
        className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        // onClick={}
        >View All Jobs</a
      >
    </section>
  )
}

export default ViewAllJobs