import React, { Component } from "react";

class WorkInput extends Component {
  render() {
    const { currentPage } = this.props;
    const {inputChange} = this.props;
    const {pageAnimate} = this.props;
    const {jobAnimate} = this.props;
    const {job} = this.props;
    const {jobs} = this.props;
    let addJobClass = 'addJob';

    if ((currentPage === 'work' && jobs.length >= 2) || (currentPage === 'work2' && jobs.length === 3) || (currentPage === 'work3')) {
      addJobClass = [addJobClass, 'off'].join(' ');
    }

    return (
      <form>
        <h2>Work Experience</h2>
        <div className="inputWrapper">
          <label htmlFor="jobTitle">Job Title</label>
          <input
            type='text'
            id='jobTitle'
            value={job.title}
            onChange={inputChange}
            required
          />
        </div>          
        <div className="inputWrapper">
          <label htmlFor="company">Company</label>
          <input
            type='text'
            id='company'
            value={job.company}
            onChange={inputChange}
            required
          />
        </div>
        <fieldset className="companyLocation">
          <legend>Company Location</legend>
          <h3>Company Location</h3>
          <div className="inputWrapper">
            <label htmlFor="companyCity">City</label>
            <input
              type='text'
              id='companyCity'
              value={job.companyCity}
              onChange={inputChange}
              required
            />
          </div>
          <div className="inputWrapper">
            <label htmlFor="companyState">State/Province/Region</label>
            <input
              type='text'
              id='companyState'
              value={job.companyState}
              onChange={inputChange}
              required
            />
          </div>            
        </fieldset>
        <div className="inputWrapper" id='jobDutiesWrapper'>
            <label htmlFor="jobDuties">Job Duties</label>
            <input
              type='text'
              id='jobDuties'
              value={job.jobDuties}
              onChange={inputChange}
              required
            />
          </div>
        <div className="inputWrapper">
          <label htmlFor="jobBegan">Job Began</label>
          <input
            type='month'
            id='jobBegan'
            value={job.jobBegan}
            onChange={inputChange}
            required
          />
        </div>
        <div className="inputWrapper">
          <label htmlFor="jobEnded">Job Ended</label>
          <input
            type='month'
            id='jobEnded'
            value={job.jobEnded}
            onChange={inputChange}
            required
          />
        </div>
        <button className="previous">Previous</button>
        <div className="addJobWrapper">
          <button 
            onClick={jobAnimate}
            className={addJobClass}>Add Another Job</button>
          <button
            className="next"
            type="submit"
            onClick={pageAnimate}>
            Next
          </button>
        </div>
      </form>
    )
  }  
}

export default WorkInput