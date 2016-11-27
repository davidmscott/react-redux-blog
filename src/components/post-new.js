import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import {createPost} from '../actions/index.js';
import {Link} from 'react-router';

class PostNew extends Component {
	static contextTypes = {
		router: PropTypes.object
	};

	onSubmit(props) {
		this.props.createPost(props)
			.then(() => {
				this.context.router.push('/');
			});
	}

	render() {
		const {fields: {title, categories, content}, handleSubmit} = this.props;
		return (
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<h3>Create A New Post</h3>
				<div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
					<label>Title</label>
					<input type="text" className="form-control" {...title}/>
					<div className="text-help">
						{title.touched ? title.error : ''}
					</div>
				</div>
				<div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
					<label>Categories</label>
					<input type="text" className="form-control" {...categories}/>
					<div className="text-help">
						{categories.touched ? categories.error : ''}
					</div>
				</div>
				<div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
					<label>Content</label>
					<textarea type="text" className="form-control" {...content}/>
					<div className="text-help">
						{content.touched ? content.error : ''}
					</div>
				</div>
				<button type="submit" className="btn btn-primary">Submit</button>
				<Link to="/" className="btn btn-danger">Cancel</Link>
			</form>
		);
	}
}

const validate = (values) => {
	const errors = {};

	if(!values.title) {
		errors.title = 'Title is a required field';
	}

	if(!values.categories) {
		errors.categories = 'Categories is a required field';
	}

	if(!values.content) {
		errors.content = 'Content is a required field';
	}

	return errors;
}

// connect: 1st arg is matchStateToProps, 2nd arg is matchDispatchToProps
// reduxForm: 1st arg is form config, 2nd is matchStateToProps, 3rd is matchDispatchToProps
export default reduxForm({
	form: 'PostNewForm',
	fields: ['title', 'categories', 'content'],
	validate
}, null, {createPost})(PostNew);