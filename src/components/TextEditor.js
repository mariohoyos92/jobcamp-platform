import ReactQuill from "react-quill";
import ReactHtmlParser from "react-html-parser";
handleChange = value => {
  console.log(encodeURI(value));
  this.setState({
    text: value
  });
};
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
/>;

<div>{ReactHtmlParser(decodeURI(encodeURI(this.state.text)))}</div>;
