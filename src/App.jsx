
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CardList from './components/CardList'
import JobListing from './components/JobListing'
import ViewAllJobs from './components/ViewAllJobs'

const App = () => {

  return (
    <>
    <Navbar/>
    <Hero/>
    <CardList/>
    <JobListing/>
    <ViewAllJobs/>
    </>
  )
}
export default App