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
      position,
      companyName,
      datePosted,
      applyURL,
      applyMethod,
      companyLogo,
      location: { city, state, country, zip },
      jobDescription
    } = this.props.postInfo;
    const { expanded } = this.state;

    const applyLinkHref =
      applyMethod === "email" ? `mailto:${applyURL}` : applyURL;

    return (
      <div>
        <div
          className="posting"
          onClick={() => this.setState({ expanded: !this.state.expanded })}
        >
          <img src={companyLogo} alt="logo" />
          <div>
            <h4>{position}</h4>
            <h5>{companyName}</h5>
          </div>

          <div>
            <p>{`${city}, ${state ? state : ""}`}</p>
            <p>{`${country} ${zip ? zip : ""}`}</p>
          </div>
          <div> {moment(datePosted).fromNow()}</div>
          <a href={applyLinkHref}>
            <button>Apply Now</button>
          </a>
        </div>
        {expanded && <div>{ReactHtmlParser(decodeURI(jobDescription))}</div>}
      </div>
    );
  }
}

export default JobPost;
