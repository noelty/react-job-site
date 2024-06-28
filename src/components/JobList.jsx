import {useState} from 'react'
import {FaMapMarkerAlt} from 'react-icons/fa'

const JobList = ({job}) => {
    const [showFullDescription, setShowFullDescription] = useState(false)
        let truncatedDescription = job.description.substring(0,90) + "..."
        let description = showFullDescription ? job.description : truncatedDescription
        
    return (
        <div key={job.id} className="bg-white rounded-xl shadow-md relative">
                            <div className="p-4">
                                <div className="mb-6">
                                    <div className="text-gray-600 my-2">{job.type}</div>
                                    <h3 className="text-xl font-bold">{job.title}</h3>
                                </div>
                
                                <div className="mb-5">
                                    {console.log("1"+showFullDescription)}
                                    {description}
                                    <button className="text-gray-500 block" onClick={() => {
                                        setShowFullDescription((prevState) => {
                                            return !prevState
                                        })
                                        console.log("2"+showFullDescription)
                                    }}>{showFullDescription? "Less": "More"}</button>
                                </div>
                
                                <h3 className="text-indigo-500 mb-2">{job.salary} / Year</h3>
                
                                <div className="border border-gray-100 mb-5"></div>
                
                                <div className="flex flex-col lg:flex-row justify-between mb-4">
                                    <div className="text-orange-700 mb-3">
                                    <FaMapMarkerAlt className='inline-block mr-1'/>
                                    {job.location}
                                    </div>
                                    <a
                                    href="job.html"
                                    className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                                    >
                                    Read More
                                    </a>
                                </div>
                            </div>
                        </div>
    )
}

export default JobList