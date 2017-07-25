var React = require('react');

var ContentForm =React.createClass({
		onFormSubmit:function(e){
		e.preventDefault();
		var formValue ={}
		var companyName =this.refs.company.value;
		var authorName =this.refs.author.value;
		if(typeof companyName ==='string' && typeof authorName ==='string' && companyName.length >3 && authorName.length>3)
			{
				this.refs.company.value='';
				this.refs.author.value='';
				formValue.company =companyName;
				formValue.author=authorName;
				this.props.onNewValue(formValue);
			}
		else
			{
				alert("Some Error in Typing");
			}
	},
	render: function(){
		return (
				<form onSubmit={this.onFormSubmit}>
					<div><label for="company">Company Name :</label></div>
					<div><input type="text" ref="company" placeholder="Company Name"/></div>
					<div><input type="text" ref="author" placeholder="Author Name"/></div>
					<div><button>Submit Company Name</button></div>
				</form>
		);
	}
});

module.exports=ContentForm;