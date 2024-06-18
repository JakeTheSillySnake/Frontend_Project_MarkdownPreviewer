/* global marked */
import React from 'https://esm.sh/react@18.2.0';
import ReactDOM from 'https://esm.sh/react-dom@18.2.0';
import * as propTypes from "https://cdn.skypack.dev/prop-types@15.8.1";

const defaultText = "# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading... \n### And here's some other cool stuff: \n\nHere's some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n\n```\n\nYou can also make text **bold**... whoa!\n\nOr _italic_.\n\nOr... wait for it... **_both!_**\n\nAnd feel free to go crazy ~~crossing stuff out~~. \n\nThere's also [links](https://jakes-profile-page.netlify.app), and \n > Block Quotes! \n\nAnd if you want to get really crazy, even tables: \n\nWild Header | Crazy Header | Another Header? \n------------ | ------------- | ------------- \nYour content can | be here, and it | can be here.... \nAnd here. | Okay. | I think we get it. \n\n- And of course there are lists. \n   - Some are bulleted. \n      - With different indentation levels. \n         - That look like this. \n\n1. And there are numbered lists too. \n1. Use just 1s if you want! \n1. And last but not least, let's not forget embedded images: \n\n![freeCodeCamp Logo](https://i.postimg.cc/3Jk3V5Nx/word-image.jpg)";

class Previewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: defaultText };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(elem) {
    this.setState({ input: elem.target.value });
  }

  handleClick() {
    this.setState({ input: "" });
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("h2", { className: "header" }, /*#__PURE__*/React.createElement("i", { className: "fa-brands fa-markdown" }), " Editor ", /*#__PURE__*/React.createElement("button", { onClick: this.handleClick }, "Clear")), /*#__PURE__*/
      React.createElement("textarea", { id: "editor", onChange: this.handleChange, value: this.state.input }), /*#__PURE__*/

      React.createElement("h2", { className: "header" }, /*#__PURE__*/React.createElement("i", { className: "fa-brands fa-markdown" }), " Previewer"), /*#__PURE__*/
      React.createElement("div", { id: "preview", dangerouslySetInnerHTML: {
          __html: marked.parse(this.state.input) } })));



  }}


ReactDOM.render( /*#__PURE__*/React.createElement(Previewer, null), document.getElementById("main"));