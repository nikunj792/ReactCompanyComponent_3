var React = require('react');
var ContentForm =require('ContentForm');
var ContentMessage =require('ContentMessage');

var Content = React.createClass({
	getDefaultProps:function(){
		return {
			company:"Wipro Technologies",
			author:"Nikunj Agarwal"
			}
	},
	getInitialState: function(){
		return {
			company:this.props.company,
			author:this.props.author
		};
	},
	submitNewForm:function(formValue){
		this.setState(formValue);
	},
	render:function(){
		var companyName =this.state.company;
		var authorName =this.state.author;
		return (
			<div>
				<ContentMessage company={companyName} author={authorName}/>
				<ContentForm onNewValue={this.submitNewForm}/>
			</div>
		);
	}
});
module.exports=Content;