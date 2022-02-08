import './App.css';
import React, { Component } from 'react';
import ProfileInput from './components/ProfileInput';
import DocumentPrint from './components/DocumentPrint';
import EducationInput from './components/EducationInput';
import WorkInput from './components/WorkInput';
import SkillsAwardsInput from './components/SkillsAwardsInput';
import PrintButton from './components/PrintButton';

class App extends Component {
  constructor() {
    super()

    this.state = {
      currentPage: 'personal',
      upcomingPage: 'education',
      animate: false,
      addJob: false,
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      zip: '',
      country: '',
      university: '',
      degree: '',
      major: '',
      degreeYear: '',
      skills: '',
      skills2: '',
      skills3: '',
      skills4: '',
      skills5: '',
      skills6: '',
      awards: '',
      awards2: '',
      awards3: '',
      awards4: '',
      awards5: '',
      awards6: '',

      job: {
        title: '',
        company: '',
        companyCity: '',
        companyState: '',
        jobDuties: '',
        jobBegan: '',
        jobEnded: '',
      },

      jobs: []
    };

    this.inputChange = this.onInputChange.bind(this);

    this.nextPage = this.nextPageUpdate.bind(this);

    this.pageAnimate = this.nextPageAnimate.bind(this);

    this.jobAnimate = this.addJobAnimate.bind(this);

  }

  addJobAnimate = (event) => {
    event.preventDefault();
    if (this.state.currentPage === 'work') {
      if (this.state.jobs.length === 0) {
        this.setState({
          jobs: [...this.state.jobs, this.state.job],          
        })
      }
      this.setState({
        upcomingPage: 'work2',                
      });      
    };
    if (this.state.currentPage === 'work2') {
      if(this.state.jobs.length === 1) {
        this.setState({
          jobs: [...this.state.jobs, this.state.job],          
        })
      }
      this.setState({
        upcomingPage: 'work3',      
      });
    };    
    this.setState({
      addJob: true,      
    });
    this.setState({
      animate: true,
    })
    console.log(this.state.jobs, this.state.upcomingPage);
  }

  nextPageAnimate = (event) => {
    event.preventDefault();
    const { currentPage } = this.state;
    const { jobs } = this.state;
  
    if (currentPage === 'work' && jobs.length === 0) {
      this.setState({
        jobs: [...this.state.jobs, this.state.job],      
      
      });        
    };
    if (currentPage === 'work' && jobs.length === 3) {
      this.setState({
        jobs: [this.state.job, jobs[1], jobs[2]],
     
      }); 
    };
    if (currentPage === 'work' && jobs.length === 2) {
      this.setState({
        jobs: [this.state.job, jobs[1]],
     
      }); 
    };
    if (currentPage === 'work' && jobs.length === 1) {
      this.setState({
        jobs: [this.state.job],
     
      }); 
    };
    if (currentPage === 'work2' && jobs.length === 1) {
      this.setState({
        jobs: [...this.state.jobs, this.state.job],      
      
      });
    };
    if (currentPage === 'work2' && jobs.length === 3) {
      this.setState({
        jobs: [jobs[0], this.state.job, jobs[2]],
     
      }); 
    };
    if (currentPage === 'work2' && jobs.length === 2) {
      this.setState({
        jobs: [jobs[0], this.state.job],
     
      }); 
    };
    if (currentPage === 'work3' && jobs.length === 2) {
      this.setState({
        jobs: [...this.state.jobs, this.state.job],      
      
      });      
    };
    if (currentPage === 'work3' && jobs.length === 3) {
      this.setState({
        jobs: [jobs[0], jobs[1], this.state.job],
     
      }); 
    };

    return this.setState({
      animate: true
    });
  };

  nextPageUpdate = () => {
    const { currentPage } = this.state;
    const { upcomingPage } =this.state;
    const { jobs } = this.state;
    const { addJob } = this.state;
    console.log(this.state.job, this.state.jobs, this.state.currentPage, this.state.upcomingPage);

    this.setState({
      job: {
        title: '',
        company: '',
        companyCity: '',
        companyState: '',
        jobDuties: '',
        jobBegan: '',
        jobEnded: '',
      },
    });
    if (upcomingPage === 'work' && jobs.length > 0) {
      this.setState({
        job: {
          title: jobs[0].title,
          company: jobs[0].company,
          companyCity: jobs[0].companyCity,
          companyState: jobs[0].companyState,
          jobDuties: jobs[0].jobDuties,
          jobBegan: jobs[0].jobBegan,
          jobEnded: jobs[0].jobEnded,
        }, 
      });
    };
    if (upcomingPage === 'work2' && jobs.length > 1) {
      this.setState({
        job: {
          title: jobs[1].title,
          company: jobs[1].company,
          companyCity: jobs[1].companyCity,
          companyState: jobs[1].companyState,
          jobDuties: jobs[1].jobDuties,
          jobBegan: jobs[1].jobBegan,
          jobEnded: jobs[1].jobEnded,
        }, 
      });
    };
    if (upcomingPage === 'work3' && jobs.length > 2) {
      this.setState({
        job: {
          title: jobs[2].title,
          company: jobs[2].company,
          companyCity: jobs[2].companyCity,
          companyState: jobs[2].companyState,
          jobDuties: jobs[2].jobDuties,
          jobBegan: jobs[2].jobBegan,
          jobEnded: jobs[2].jobEnded,
        }, 
      });
    };
    if (addJob) {
      if (currentPage === 'work') {
        return this.setState({
          addJob: false,
          animate: false,
          currentPage: 'work2',
          upcomingPage: 'skillsAwards',

        });
      };
      if (currentPage === 'work2') {
        return this.setState({
          addJob: false,
          animate: false,
          currentPage: 'work3',
          upcomingPage: 'skillsAwards',
        });
      };
    }

    if (currentPage === 'personal') {
      this.setState({
        currentPage: 'education',
        upcomingPage: 'work',
        animate: false, 
      });
    };
    if (currentPage === 'education') {
      if (jobs.length >= 2) {
        return this.setState({
          currentPage: 'work',
          upcomingPage: 'work2',
          animate: false
        });
      }
      return this.setState({
        currentPage: 'work',
        upcomingPage: 'skillsAwards',
        animate: false, 
      });
    };
    if (currentPage === 'work') {
      if (jobs.length === 2) {
        return this.setState({
          currentPage: 'work2',
          upcomingPage: 'skillsAwards',
          animate: false,
        });
      };
      if (jobs.length === 3) {
        return this.setState({
          currentPage: 'work2',
          upcomingPage: 'work3',
          animate: false,
        });
      };
      return this.setState({
        currentPage: 'skillsAwards',
        upcomingPage: 'print',
        animate: false, 
      });
    };
    if (currentPage === 'work2') {
      if (jobs.length === 3) {
        return this.setState({
          currentPage: 'work3',
          upcomingPage: 'skillsAwards',
          animate: false,
        });
      };
      return this.setState({
        currentPage: 'skillsAwards',
        upcomingPage: 'print',
        animate: false,
      });
    };
    if (currentPage === 'work3') {
      return this.setState({
        currentPage: 'skillsAwards',
        upcomingPage: 'print',
        animate: false,
      });
    };
    if (currentPage === 'skillsAwards') {
      return this.setState({
        currentPage: 'print',
        upcomingPage: 'personal',
        animate: false,
      });
    };
    if (currentPage === 'print') {
      return this.setState({
        currentPage: 'personal',
        upcomingPage: 'education',
        animate: false,
      });
    };
  };

  onInputChange = (event) => {
    const { id } = event.target;
    const { value } = event.target;
    const { title } = this.state.job;
    const { company } = this.state.job;
    const { companyCity } = this.state.job;
    const { companyState } = this.state.job;
    const { jobDuties } = this.state.job;
    const { jobBegan } = this.state.job;
    const { jobEnded } = this.state.job;

    if (id === 'skills') {
      this.setState({
        skills: value,
      });
    };
    if (id === 'skills2') {
      this.setState({
        skills2: value,
      });
    };
    if (id === 'skills3') {
      this.setState({
        skills3: value,
      });
    };
    if (id === 'skills4') {
      this.setState({
        skills4: value,
      });
    };
    if (id === 'skills5') {
      this.setState({
        skills5: value,
      });
    };
    if (id === 'skills6') {
      this.setState({
        skills6: value,
      });
    };

    if (id === 'awards') {
      this.setState({
        awards: value,
      });
    };
    if (id === 'awards2') {
      this.setState({
        awards2: value,
      });
    };
    if (id === 'awards3') {
      this.setState({
        awards3: value,
      });
    };
    if (id === 'awards4') {
      this.setState({
        awards4: value,
      });
    };
    if (id === 'awards5') {
      this.setState({
        awards5: value,
      });
    };
    if (id === 'awards6') {
      this.setState({
        awards6: value,
      });
    };

    if (id === 'jobTitle') {
      this.setState({
        job: {
          title: value,
          company: company,
          companyCity: companyCity,
          companyState: companyState,
          jobDuties: jobDuties,
          jobBegan: jobBegan,
          jobEnded: jobEnded
        }
      });
    };
    if (id === 'company') {
      this.setState({
        job: {
          title: title,
          company: value,
          companyCity: companyCity,
          companyState: companyState,
          jobDuties: jobDuties,
          jobBegan: jobBegan,
          jobEnded: jobEnded
        }
      });
    };
    if (id === 'companyCity') {
      this.setState({
        job: {
          title: title,
          company: company,
          companyCity: value,
          companyState: companyState,
          jobDuties: jobDuties,
          jobBegan: jobBegan,
          jobEnded: jobEnded
        }
      });
    };
    if (id === 'companyState') {
      this.setState({
        job: {
          title: title,
          company: company,
          companyCity: companyCity,
          companyState: value,
          jobDuties: jobDuties,
          jobBegan: jobBegan,
          jobEnded: jobEnded
        }
      });
    };
    if (id === 'jobDuties') {
      this.setState({
        job: {
          title: title,
          company: company,
          companyCity: companyCity,
          companyState: companyState,
          jobDuties: value,
          jobBegan: jobBegan,
          jobEnded: jobEnded
        }
      });
    };
    if (id === 'jobBegan') {
      this.setState({
        job: {
          title: title,
          company: company,
          companyCity: companyCity,
          companyState: companyState,
          jobDuties: jobDuties,
          jobBegan: value,
          jobEnded: jobEnded
        }
      });
    };
    if (id === 'jobEnded') {
      this.setState({
        job: {
          title: title,
          company: company,
          companyCity: companyCity,
          companyState: companyState,
          jobDuties: jobDuties,
          jobBegan: jobBegan,
          jobEnded: value
        }
      });
    };
    if (id === 'university') {
      this.setState({
        university: value
      });
    };
    if (id === 'degree') {
      this.setState({
        degree: value
      });
    };
    if (id === 'major') {
      this.setState({
        major: value
      });
    };
    if (id === 'degreeYear') {
      this.setState({
        degreeYear: value
      });
    };
    if (id === 'firstName') {
      this.setState({
        firstName: value
      });
    };
    if (id === 'lastName') {
      this.setState({
        lastName: value
      });
    };
    if (id === 'phoneNumber') {
      this.setState({
        phoneNumber: value
      });
    };
    if (id === 'email') {
      this.setState({
        email: value
      });
    };
    if (id === 'addressLine1') {
      this.setState({
        addressLine1: value
      });
    };
    if (id === 'addressLine2') {
      this.setState({
        addressLine2: value
      });
    };
    if (id === 'city') {
      this.setState({
        city: value
      });
    };
    if (id === 'state') {
      this.setState({
        state: value
      });
    };
    if (id === 'zip') {
      this.setState({
        zip: value
      });
    };
    if (id === 'country') {
      this.setState({
        country: value
      });
    };
  }

  render() {
    const { jobs } = this.state;
    const { currentPage } = this.state;
    const { upcomingPage } = this.state;
    let work2;
    let work3;
    let thisCurrentPage;
    let thisUpcomingPage;
    let upcomingClass = 'upcomingPageWrapper'
    let currentClass = 'currentPageWrapper'

    if (upcomingPage === 'education') {
      thisUpcomingPage = (
        <EducationInput
          university={this.state.university}
          degree={this.state.degree}
          major={this.state.major}
          degreeYear={this.state.degreeYear}
          inputChange={this.inputChange}
          pageAnimate={this.pageAnimate}
        />
      )
    };

    if (upcomingPage === 'personal') {
      thisUpcomingPage = (
        <ProfileInput
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          phoneNumber={this.state.phoneNumber}
          email={this.state.email}
          addressLine1={this.state.addressLine1}
          addressLine2={this.state.addressLine2}
          city={this.state.city}
          state={this.state.state}
          zip={this.state.zip}
          country={this.state.country}
          inputChange={this.inputChange}
          pageAnimate={this.pageAnimate}
        />         
      )
    }

    if (upcomingPage === 'work') {
      thisUpcomingPage = (
        <WorkInput
          currentPage={this.state.currentPage}
          job={this.state.job}
          jobs={this.state.jobs}
          inputChange={this.inputChange}
          pageAnimate={this.pageAnimate}
        />
      )
    };

    if (upcomingPage === 'work2') {
      thisUpcomingPage = (
        <WorkInput
          currentPage={this.state.currentPage}
          job={this.state.job}
          jobs={this.state.jobs}
          inputChange={this.inputChange}
          pageAnimate={this.pageAnimate}
        />
      )
    };
    
    if (upcomingPage === 'work3') {
      thisUpcomingPage = (
        <WorkInput
          currentPage={this.state.currentPage}
          job={this.state.job}
          jobs={this.state.jobs}
          inputChange={this.inputChange}
          pageAnimate={this.pageAnimate}
        />
      )
    };

    if (upcomingPage === 'skillsAwards') {
      thisUpcomingPage = (
        <SkillsAwardsInput
          skills={this.state.skills}
          skills2={this.state.skills2}
          skills3={this.state.skills3}
          skills4={this.state.skills4}
          skills5={this.state.skills5}
          skills6={this.state.skills6}
          awards={this.state.awards}
          awards2={this.state.awards2}
          awards3={this.state.awards3}
          awards4={this.state.awards4}
          awards5={this.state.awards5}
          awards6={this.state.awards6}
          inputChange={this.inputChange}
          pageAnimate={this.pageAnimate}
        />
      )
    };

    if (upcomingPage === 'print') {
      thisUpcomingPage = (
        <PrintButton
          pageAnimate={this.pageAnimate}
        />
      )
    }

    if (currentPage === 'education') {
      thisCurrentPage = (
        <EducationInput
          university={this.state.university}
          degree={this.state.degree}
          major={this.state.major}
          degreeYear={this.state.degreeYear}
          inputChange={this.inputChange}
          pageAnimate={this.pageAnimate}
        />
      )
    }

    if (currentPage === 'personal') {
      thisCurrentPage = (
        <ProfileInput
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          phoneNumber={this.state.phoneNumber}
          email={this.state.email}
          addressLine1={this.state.addressLine1}
          addressLine2={this.state.addressLine2}
          city={this.state.city}
          state={this.state.state}
          zip={this.state.zip}
          country={this.state.country}
          inputChange={this.inputChange}
          pageAnimate={this.pageAnimate}
        />         
      )
    };

    if (currentPage === 'work') {
      thisCurrentPage = (
        <WorkInput
          currentPage={this.state.currentPage}
          job={this.state.job}
          jobs={this.state.jobs}
          inputChange={this.inputChange}
          pageAnimate={this.pageAnimate}
          jobAnimate={this.jobAnimate}
        />
      )
    };

    if (currentPage === 'work2') {
      thisCurrentPage = (
        <WorkInput
          currentPage={this.state.currentPage}
          job={this.state.job}
          jobs={this.state.jobs}
          inputChange={this.inputChange}
          pageAnimate={this.pageAnimate}
          jobAnimate={this.jobAnimate}
        />
      )
    };

    if (currentPage === 'work3') {
      thisCurrentPage = (
        <WorkInput
          currentPage={this.state.currentPage}
          job={this.state.job}
          jobs={this.state.jobs}
          inputChange={this.inputChange}
          pageAnimate={this.pageAnimate}
        />
      )
    };

    if (currentPage === 'skillsAwards') {
      thisCurrentPage = (
        <SkillsAwardsInput
          skills={this.state.skills}
          skills2={this.state.skills2}
          skills3={this.state.skills3}
          skills4={this.state.skills4}
          skills5={this.state.skills5}
          skills6={this.state.skills6}
          awards={this.state.awards}
          awards2={this.state.awards2}
          awards3={this.state.awards3}
          awards4={this.state.awards4}
          awards5={this.state.awards5}
          awards6={this.state.awards6}
          inputChange={this.inputChange}
          pageAnimate={this.pageAnimate}
        />
      )
    };

    if (currentPage === 'print') {
      thisCurrentPage = (
      <PrintButton
        pageAnimate={this.pageAnimate}
      />        
      )
    }

    if (this.state.animate) {
      upcomingClass = [upcomingClass, 'slideIn'].join(' ');
      currentClass = [currentClass, 'slideOut'].join(' ');
    }

    if (jobs.length > 1) {
      work2 = this.state.currentPage === 'work2'
      ? <div className='slideIndicator selected'></div>
      : <div className='slideIndicator'></div>
    }
    if (jobs.length > 2) {
      work3 = this.state.currentPage === 'work3'
      ? <div className='slideIndicator selected'></div>
      : <div className='slideIndicator'></div>
    }
    

    return (
      <div className='wrapper'>
        <div className="inputsAndIndicators">
          <div className="inputsWrapper">
            <div className={upcomingClass} onAnimationEnd={this.nextPage}>
              {thisUpcomingPage}
            </div>
            <div className={currentClass}>
              {thisCurrentPage}
            </div>
          </div>
          <div className='slideIndicatorWrapper'>
            {this.state.currentPage === 'personal'
              ? <div className='slideIndicator selected'></div>
              : <div className='slideIndicator'></div>
            }
            {this.state.currentPage === 'education'
              ? <div className='slideIndicator selected'></div>
              : <div className='slideIndicator'></div>
            }
            {this.state.currentPage === 'work'
              ? <div className='slideIndicator selected'></div>
              : <div className='slideIndicator'></div>
            }
            {work2}
            {work3}
            {this.state.currentPage === 'skillsAwards'
              ? <div className='slideIndicator selected'></div>
              : <div className='slideIndicator'></div>
            }
            {this.state.currentPage === 'print'
              ? <div className='slideIndicator selected'></div>
              : <div className='slideIndicator'></div>
            }
          </div>
        </div>
        <div className='documentWrapper'>
          <DocumentPrint
            currentPage={this.state.currentPage}
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            phoneNumber={this.state.phoneNumber}
            email={this.state.email}
            addressLine1={this.state.addressLine1}
            addressLine2={this.state.addressLine2}
            city={this.state.city}
            state={this.state.state}
            zip={this.state.zip}
            country={this.state.country}
            university={this.state.university}
            degree={this.state.degree}
            major={this.state.major}
            degreeYear={this.state.degreeYear}
            jobTitle={this.state.job.title}
            company={this.state.job.company}
            companyCity={this.state.job.companyCity}
            companyState={this.state.job.companyState}
            jobDuties={this.state.job.jobDuties}
            jobBegan={this.state.job.jobBegan}
            jobEnded={this.state.job.jobEnded}
            jobs={this.state.jobs}
            skills={this.state.skills}
            skills2={this.state.skills2}
            skills3={this.state.skills3}
            skills4={this.state.skills4}
            skills5={this.state.skills5}
            skills6={this.state.skills6}
            awards={this.state.awards}
            awards2={this.state.awards2}
            awards3={this.state.awards3}
            awards4={this.state.awards4}
            awards5={this.state.awards5}
            awards6={this.state.awards6}
          />
        </div>

      </div>
    );
  }
  }


export default App;
