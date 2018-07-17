import React, { Component } from "react";
import axios from "axios";
import JobPost from "../components/JobPost";

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
    const { jobPosts } = this.state;
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
          </div>
          <div className="jobs">
            {jobPosts.map(post => {
              return <JobPost key={post.postId} postInfo={post} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
