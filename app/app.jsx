var React = require('react');
var ReactDOM = require('react-dom');
var Content =require('Content');
var name = "Wipro Technologies,Pritech";

var name="Wipro";
var authorName="Nikunj";
ReactDOM.render(
<Content company={name} author={authorName}/>,
  document.getElementById('reactAdvance')
);