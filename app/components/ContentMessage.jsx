var React = require('react');

var ContentMessage =React.createClass({
	render :function(){
		var companyName =this.props.company;
		var authorName =this.props.author;
		return (
		<div>
				<h1>Hello Advance React</h1>
				<p>Company Name is {companyName}</p>
				<p>Author is {authorName}</p> 
		</div>
		);
	}
});
module.exports=ContentMessage;