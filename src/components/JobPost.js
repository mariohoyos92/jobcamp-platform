import React, { Component } from "react";
import ReactHtmlParser from "react-html-parser";
import moment from "moment";

class JobPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }

  render() {
    const {
      title,
      companyName,
      datePosted,
      applyURL,
      applyMethod,
      companyLogo,
      location: { city, state, country },
      jobDescription
    } = this.props.postInfo;

    const applyLinkHref =
      applyMethod === "email" ? `mailto:${applyURL}` : applyURL;
    console.log(applyMethod, applyURL, applyLinkHref);
    return (
      <div>
        <div
          className="posting"
          onClick={() => this.setState({ expanded: !this.state.expanded })}
        >
          <img src={companyLogo} alt="logo" />
          <div>
            <h4>{title}</h4>
            <h5>{companyName}</h5>
          </div>

          <div>{`${city}, ${state} ${country}`}</div>
          <div> {moment(datePosted).fromNow()}</div>
          <a href={applyLinkHref}>
            <button>Apply Now</button>
          </a>
        </div>
        <div>{ReactHtmlParser(decodeURI(jobDescription))}</div>
      </div>
    );
  }
}

export default JobPost;
