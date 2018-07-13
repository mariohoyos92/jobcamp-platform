import React, { Component } from "react";
import axios from "axios";
import "react-quill/dist/quill.snow.css";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jobPosts: [],
      text: ""
    };
  }

  componentDidMount() {
    axios
      .get("/api/jobPosts/all")
      .then(response => {
        this.setState({ jobPosts: response.data.jobPosts.Items }, () =>
          console.log(this.state)
        );
      })
      .catch(console.log);
  }

  render() {
    return (
      <div className="home">
        <header>
          <div>
            <h1>JobCamp</h1>
            <h2>Where bootcamp grads get jobs</h2>
          </div>
          <form className="flex-center">
            <label htmlFor="what">What are you looking for?</label>
            <input type="text" name="what" />
            <button type="submit">Find Jobs</button>
          </form>
          <button>Post a job</button>
        </header>

        <div className="body">
          <div className="quick-filters">
            <div className="bootcamp-type flex-center">Web Design</div>
            <div className="bootcamp-type flex-center">Web Design</div>
            <div className="bootcamp-type flex-center">Web Design</div>
            <div className="bootcamp-type flex-center">Web Design</div>
            <div className="bootcamp-type flex-center">Web Design</div>
            <div className="bootcamp-type flex-center">Web Design</div>
            <div className="bootcamp-type flex-center">Web Design</div>
            <div className="bootcamp-type flex-center">Web Design</div>
            <div className="bootcamp-type flex-center">Web Design</div>
          </div>
          <div className="jobs">
            <div className="posting">
              <img
                src="https://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg"
                alt="logo"
              />
              <div>
                <h4>Senior Javascript Developer</h4>
                <h5>Apple</h5>
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

              <div> City, ST </div>
              <div> 3h </div>
              <button>Apply Now</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
