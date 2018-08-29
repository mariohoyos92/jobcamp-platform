import React, { Component } from "react";
import axios from "axios";
import JobPost from "../components/JobPost";
import { FaChevronCircleDown, FaChevronCircleUp } from "react-icons/fa";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jobPosts: [],
      searchTerm: "",
      bootCampTypes: [
        "Web Development",
        "Mobile Development",
        "Data Science",
        "UI/UX",
        "Digital Marketing",
        "Product Management",
        "Security",
        "Remote Ok"
      ]
    };
  }

  componentDidMount() {
    axios
      .get("/api/jobPosts/all")
      .then(response => {
        this.setState({ jobPosts: response.data.jobPosts.Items });
      })
      .catch(console.log);
  }

  handleInputChange = e => {
    this.setState({
      searchTerm: e.target.value
    });
  };

  render() {
    const { jobPosts, searchTerm, bootCampTypes } = this.state;
    const filteredJobPosts = searchTerm
      ? jobPosts.filter(post => {
          const { city, state, country, zip } = post.location;
          const normalizedSearchTerm = searchTerm.toLowerCase();
          return (
            (city && city.toLowerCase().includes(normalizedSearchTerm)) ||
            (state && state.toLowerCase().includes(normalizedSearchTerm)) ||
            (country && country.toLowerCase().includes(normalizedSearchTerm)) ||
            (zip && zip.toLowerCase().includes(normalizedSearchTerm))
          );
        })
      : jobPosts;
    return (
      <div className="home">
        <header>
          <div className="logo">
            <h1>JobCamp</h1>
            <h2>WHERE BOOTCAMP GRADS GET JOBS</h2>
          </div>
          <form className="search">
            <label htmlFor="search">What are you looking for?</label>

            <input
              type="text"
              name="search"
              onChange={this.handleInputChange}
              value={searchTerm}
            />
            <button type="submit">Find Jobs</button>
          </form>
          <button className="post-job">Post a job - $99</button>
        </header>

        <div className="body">
          <div className="quick-filters">
            <h3>Quick Filters</h3>
            {bootCampTypes.map(type => (
              <div className="bootcamp-type flex-center">{type}</div>
            ))}

            <div className="feedback-modal">
              {" "}
              <h6>
                Have Feedback? <FaChevronCircleUp style={{ color: "88bbd6" }} />
              </h6>{" "}
            </div>
          </div>
          <div className="jobs">
            {filteredJobPosts.map(post => {
              return <JobPost key={post.postId} postInfo={post} />;
            })}
            {filteredJobPosts.map(post => {
              return <JobPost key={post.postId} postInfo={post} />;
            })}
            {filteredJobPosts.map(post => {
              return <JobPost key={post.postId} postInfo={post} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
