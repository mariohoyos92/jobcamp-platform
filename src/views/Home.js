import React, { Component } from "react";
import axios from "axios";
import JobPost from "../components/JobPost";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jobPosts: [],
      searchTerm: ""
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
    const { jobPosts, searchTerm } = this.state;
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
          <div>
            <h1>JobCamp</h1>
            <h2>Where bootcamp grads get jobs</h2>
          </div>
          <form className="flex-center">
            <label htmlFor="what">Where (city, state, country, zipCode)?</label>
            <input
              type="text"
              name="search"
              onChange={this.handleInputChange}
              value={searchTerm}
            />
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
