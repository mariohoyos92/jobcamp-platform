import React, { Component } from "react";
import ReactQuill from "react-quill";
import ReactHtmlParser from "react-html-parser";
import "react-quill/dist/quill.snow.css";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ""
    };
  }

  handleChange = value => {
    console.log(encodeURI(value));
    this.setState({
      text: value
    });
  };
  render() {
    return (
      <div className="home">
        <section className="top">
          <header>
            <button>Twitter Button </button>
            <h1>JobCamp</h1>
            <button>Post a job</button>
          </header>
          <div>
            <h2>Where bootcamp grads get jobs</h2>
          </div>
          <div>{ReactHtmlParser(decodeURI(encodeURI(this.state.text)))}</div>
          <form className="flex-center">
            <label htmlFor="what">What are you looking for?</label>
            <input type="text" name="what" />
            <label htmlFor="where">Where? (City, State, Zip Code)</label>
            <input type="text" name="where" />
            <button type="submit">Find Jobs</button>
          </form>
        </section>
        <section className="quick-filters flex-center">
          <div className="bootcamp-type flex-center">Web Design</div>
          <div className="bootcamp-type flex-center">Web Design</div>
          <div className="bootcamp-type flex-center">Web Design</div>
          <div className="bootcamp-type flex-center">Web Design</div>
          <div className="bootcamp-type flex-center">Web Design</div>
          <div className="bootcamp-type flex-center">Web Design</div>
          <div className="bootcamp-type flex-center">Web Design</div>
          <div className="bootcamp-type flex-center">Web Design</div>
          <div className="bootcamp-type flex-center">Web Design</div>
        </section>
        <section className="post-job-notification flex-center">
          <p>
            Would you like to post a job and reach thousands of qualified
            candidates?
          </p>
          <button>Post a Job</button>
        </section>
        <section className="selected-tags-container">
          <button>Developer</button>
          <button>Javascript</button>
        </section>
        <section className="jobs">
          <div className="posting">
            <img
              src="https://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg"
              alt="logo"
            />
            <div>
              <h4>Senior Javascript Developer</h4>
              <h5>Apple</h5>
            </div>
            <div className="tags">
              <div>Tag 1</div> <div>Tag 2</div>
            </div>
            <div> City, ST </div>
            <div> 3h </div>
            <button>Apply Now</button>
          </div>
          <div className="posting">
            <img
              src="https://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg"
              alt="logo"
            />
            <div>
              <h4>Senior Javascript Developer</h4>
              <h5>Apple</h5>
            </div>
            <div className="tags">
              <div>Tag 1</div> <div>Tag 2</div>
            </div>
            <div> City, ST </div>
            <div> 3h </div>
            <button>Apply Now</button>
          </div>
          <div className="posting">
            <img
              src="https://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg"
              alt="logo"
            />
            <div>
              <h4>Senior Javascript Developer</h4>
              <h5>Apple</h5>
            </div>
            <div className="tags">
              <div>Tag 1</div> <div>Tag 2</div>
            </div>
            <div> City, ST </div>
            <div> 3h </div>
            <button>Apply Now</button>
          </div>
          <div className="posting">
            <img
              src="https://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg"
              alt="logo"
            />
            <div>
              <h4>Senior Javascript Developer</h4>
              <h5>Apple</h5>
            </div>
            <div className="tags">
              <div>Tag 1</div> <div>Tag 2</div>
            </div>
            <div> City, ST </div>
            <div> 3h </div>
            <button>Apply Now</button>
          </div>
        </section>
        <ReactQuill
          modules={{
            toolbar: [
              [{ header: "1" }, { header: "2" }],
              [{ size: [] }],
              ["bold", "italic", "underline"],
              [{ list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
              ["link"]
            ]
          }}
          onChange={this.handleChange}
          value={this.state.text}
        />
      </div>
    );
  }
}

export default Home;
