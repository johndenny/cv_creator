import React, { Component } from "react";

class EducationInput extends Component {
  render() {
    const { inputChange } = this.props;
    const { pageAnimate } = this.props;
    const { university } = this.props;
    const { degree } = this.props;
    const { major } = this.props;
    const { degreeYear } = this.props;

    return (
      <form>
        <h2>Education</h2>
        <div className="inputWrapper">
            <label htmlFor="university">University Name</label>
            <input
              value={university}
              type='text'
              id='university'
              onChange={inputChange}
              required
            />
          </div>
          <div className="inputWrapper">
            <label htmlFor="degree">Degree</label>
            <input
              value={degree}
              type='text'
              id='degree'
              onChange={inputChange}
              required
            />
          </div>
          <div className="inputWrapper">
            <label htmlFor="major">Major</label>
            <input
              value={major}
              type='text'
              id='major'
              onChange={inputChange}
              required
            />
          </div>
          <div className="inputWrapper">
            <label htmlFor="degreeYear">Year Degree Completed</label>
            <input
              value={degreeYear}
              type='text'
              id='degreeYear'
              onChange={inputChange}
              required
            />
          </div>
          <button className="previous">Previous</button>
          <button
          type="submit"
          onClick={pageAnimate}>
          Next
        </button>
      </form>
    )
  }
}

export default EducationInput