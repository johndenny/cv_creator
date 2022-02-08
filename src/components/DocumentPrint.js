import React, { Component } from "react";

class DocumentPrint extends Component {

  render() {
    const { currentPage } = this.props;
    const { firstName } = this.props;
    const { lastName } = this.props;
    const { phoneNumber } = this.props;
    const { email } = this.props;
    const { addressLine1 } = this.props;
    const { addressLine2 } = this.props;
    const { city } = this.props;
    const { state } = this.props;
    const { zip } = this.props;
    const { country } = this.props;
    const { university } = this.props;
    const { degree } = this.props;
    const { major } = this.props;
    const { degreeYear } = this.props;
    const { jobTitle } = this.props;
    const { company } = this.props;
    const { companyCity } = this.props;
    const { companyState } = this.props;
    const { jobDuties } = this.props;
    const { jobBegan } = this.props;
    const { jobEnded } = this.props;
    const { jobs } = this.props;
    const { skills } = this.props;
    const { skills2 } = this.props;
    const { skills3 } = this.props;
    const { skills4 } = this.props;
    const { skills5 } = this.props;
    const { skills6 } = this.props;
    const { awards } = this.props;
    const { awards2 } = this.props;
    const { awards3 } = this.props;
    const { awards4 } = this.props;
    const { awards5 } = this.props;
    const { awards6} = this.props;
    let educationFilled = false;
    let workFilled = false;
    let skillsFilled = false;
    let awardsFilled = false;

    (awards !== '' || awards2 !== '' || awards3 !== '' || awards4 !== '' || awards5 !== '' || awards6 !== '')
      ? awardsFilled = true
      : awardsFilled = false;    

    (skills !== '' || skills2 !== '' || skills3 !== '' || skills4 !== '' || skills5 !== '' || skills6 !== '')
      ? skillsFilled = true
      : skillsFilled = false;

    (university !== '' || degree !== '' || major !== '' || degreeYear !== '')
      ? educationFilled = true
      : educationFilled = false;

    (jobTitle !== '' || company !== '' || companyCity !== '' || companyState !== '' || 
      jobDuties !== '' || jobBegan !== '' || jobEnded !== '' || jobs.length !== 0)
      ? workFilled = true
      : workFilled = false;

    return (
      <div className="document" id='section-to-print'>
        <h1>
          {firstName} {lastName}
        </h1>
        
        <div className="personalWrapper">
          <span>{phoneNumber !== '' && <i className="fas fa-phone-alt"></i>} {phoneNumber}</span>
          <span>{email !== '' && <i className="far fa-envelope"></i>} {email}</span>
          <span>{addressLine1 !== '' && <i className="fas fa-map-marker-alt"></i>} {addressLine1}</span>
          <div className="addressWithoutIcon">
            <span>{addressLine2}</span>
            <span>{city} {state}</span>
            <span>{zip} {country}</span>            
          </div>
        </div>
        <div className="rightMarginWrapper">
          <div className="educationWrapper">
            <span>{educationFilled && <h3>EDUCATION</h3>}</span>
            <span><h2>{university}</h2></span>
            <span>{degree} {major}{major !== '' && ','} {degreeYear}</span>
          </div>
          <div className="skillsWrapper">
            {skillsFilled && <h3>SKILLS</h3>}
            <span>{skills}</span>
            <span>{skills2}</span>
            <span>{skills3}</span>
            <span>{skills4}</span>
            <span>{skills5}</span>
            <span>{skills6}</span>
          </div>
          <div className="awardsWrapper">
            {awardsFilled && <h3>AWARDS</h3>}
              <span>{awards}</span>
              <span>{awards2}</span>
              <span>{awards3}</span>
              <span>{awards4}</span>
              <span>{awards5}</span>
              <span>{awards6}</span>
            </div>         
        </div>
        <div className="outerWorkWrapper">
          <span>{workFilled && <h3>WORK EXPERIENCE</h3>}</span>                    
          {(jobs.length >= 1 && currentPage !== 'work')  
          ? <div className="workWrapper">
              <span><h2>{jobs[0].title} <span>{jobs[0].company}</span></h2></span>
              <span>{jobs[0].jobBegan} {jobs[0].jobEnded !== '' && '—'} {jobs[0].jobEnded} 
                <span className="companyCityWrapper">{jobs[0].companyCity !== '' && '('}
                  {jobs[0].companyCity}{jobs[0].companyCity !== '' && ','} {jobs[0].companyState}{jobs[0].companyCity !== '' && ')'}
                </span>
              </span>
              <span>{jobs[0].jobDuties}</span>
            </div>
          : <div className="workWrapper">
              <span><h2>{jobTitle} <span>{company}</span></h2></span>
              <span>{jobBegan} {jobEnded !== '' && '—'} {jobEnded} 
                <span className="companyCityWrapper">{companyCity !== '' && '('}
                  {companyCity}{companyCity !== '' && ','} {companyState}{companyCity !== '' && ')'}
                </span>
              </span>
              <span>{jobDuties}</span>
            </div>  
          }
          {(jobs.length >= 1 && currentPage === 'work2') &&
            <div className="workWrapper">
              <span><h2>{jobTitle} <span>{company}</span></h2></span>
              <span>{jobBegan} {jobEnded !== '' && '—'} {jobEnded} 
                <span className="companyCityWrapper">{companyCity !== '' && '('}
                  {companyCity}{companyCity !== '' && ','} {companyState}{companyCity !== '' && ')'}
                </span>
              </span>
              <span>{jobDuties}</span>
            </div>  
          }             
          {(jobs.length >= 2 && currentPage !== 'work2') &&  
            <div className="workWrapper">
              <span><h2>{jobs[1].title} <span>{jobs[1].company}</span></h2></span>
              <span>{jobs[1].jobBegan} {jobs[1].jobEnded !== '' && '—'} {jobs[1].jobEnded}
                <span className="companyCityWrapper">{jobs[1].companyCity !== '' && '('}
                  {jobs[1].companyCity}{jobs[1].companyCity !== '' && ','} {jobs[1].companyState}{jobs[1].companyCity !== '' && ')'}
                </span>
              </span>
              <span>{jobs[1].jobDuties}</span>
            </div> 
          }
          {(jobs.length >= 2 && currentPage === 'work3') &&
            <div className="workWrapper">
              <span><h2>{jobTitle} <span>{company}</span></h2></span>
              <span>{jobBegan} {jobEnded !== '' && '—'} {jobEnded} 
                <span className="companyCityWrapper">{companyCity !== '' && '('}
                  {companyCity}{companyCity !== '' && ','} {companyState}{companyCity !== '' && ')'}
                </span>
              </span>
              <span>{jobDuties}</span>
            </div>
          }
          {(jobs.length === 3 && currentPage !== 'work3') &&         
            <div className="workWrapper">
              <span><h2>{jobs[2].title} <span>{jobs[2].company}</span></h2></span>
              <span>{jobs[2].jobBegan} {jobs[2].jobEnded !== '' && '—'} {jobs[2].jobEnded}
                <span className="companyCityWrapper">{jobs[2].companyCity !== '' && '('}
                  {jobs[2].companyCity}{jobs[2].companyCity !== '' && ','} {jobs[2].companyState}{jobs[2].companyCity !== '' && ')'}
                </span>
              </span>
              <span>{jobs[2].jobDuties}</span>
            </div>   
          }
        </div>
      </div>
    )
  }
}

export default DocumentPrint;