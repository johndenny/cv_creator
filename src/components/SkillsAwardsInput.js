import React, { Component } from "react";

class SkillsAwardsInput extends Component {
  render() {
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
    const { inputChange } = this.props;
    const { pageAnimate } = this.props;

    return (
      <form>
        <h2>Skills and Awards</h2>

        <div className="skillsWrapper">
          <div className="inputWrapper">
            <label htmlFor="skills">Skills</label>
            <input
              value={skills}
              type='text'
              id='skills'
              onChange={inputChange}
              required
            />
          </div>
          <div className="inputWrapper">
            <label htmlFor="skills2"></label>
            <input
              value={skills2}
              type='text'
              id='skills2'
              onChange={inputChange}
              required
            />
          </div>
          <div className="inputWrapper">
            <label htmlFor="skills3"></label>
            <input
              value={skills3}
              type='text'
              id='skills3'
              onChange={inputChange}
              required
            />
          </div>
          <div className="inputWrapper">
            <label htmlFor="skills4"></label>
            <input
              value={skills4}
              type='text'
              id='skills4'
              onChange={inputChange}
              required
            />
          </div>
          <div className="inputWrapper">
            <label htmlFor="skills5"></label>
            <input
              value={skills5}
              type='text'
              id='skills5'
              onChange={inputChange}
              required
            />
          </div>
          <div className="inputWrapper">
            <label htmlFor="skills6"></label>
            <input
              value={skills6}
              type='text'
              id='skills6'
              onChange={inputChange}
              required
            />
          </div>
        </div>
        <div className="awardsWrapper">
          <div className="inputWrapper">
            <label htmlFor="awards">Awards</label>
            <input
              value={awards}
              type='text'
              id='awards'
              onChange={inputChange}
              required
            />
          </div>
          <div className="inputWrapper">
            <label htmlFor="awards2"></label>
            <input
              value={awards2}
              type='text'
              id='awards2'
              onChange={inputChange}
              required
            />
          </div>
          <div className="inputWrapper">
            <label htmlFor="awards3"></label>
            <input
              value={awards3}
              type='text'
              id='awards3'
              onChange={inputChange}
              required
            />
          </div>
          <div className="inputWrapper">
            <label htmlFor="awards4"></label>
            <input
              value={awards4}
              type='text'
              id='awards4'
              onChange={inputChange}
              required
            />
          </div>
          <div className="inputWrapper">
            <label htmlFor="awards5"></label>
            <input
              value={awards5}
              type='text'
              id='awards5'
              onChange={inputChange}
              required
            />
          </div>
          <div className="inputWrapper">
            <label htmlFor="awards6"></label>
            <input
              value={awards6}
              type='text'
              id='awards6'
              onChange={inputChange}
              required
            />
          </div>
        </div>
        <button className="previous">Previous</button>
          <button
          type="submit"
          onClick={pageAnimate}>
          Next
        </button>
      </form>
    )
  };
};

export default SkillsAwardsInput;