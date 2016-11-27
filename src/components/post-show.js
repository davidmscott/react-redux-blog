import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {fetchPost, deletePost} from '../actions/index.js';
import {Link} from 'react-router';

class PostShow extends Component {
	static contextTypes = {
		router: PropTypes.object
	};

	componentWillMount() {
		this.props.fetchPost(this.props.params.id);
	}

	render() {
		const {post} = this.props;

		if(!post) {
			return <div>Loading...</div>;
		}

		return (
			<div>
				<Link to="/" className="btn btn-primary">Back to Index</Link>
				<button
					onClick={this.onDeletePost.bind(this)}
					className="btn btn-danger pull-xs-right"
				>Delete Post</button>
				<h3>{post.title}</h3>
				<h6>Categories: {post.categories}</h6>
				<p>{post.content}</p>
			</div>
		);
	}

	onDeletePost() {
		this.props.deletePost(this.props.params.id)
			.then(() => {
				this.context.router.push('/');
			});
	}
}

const mapStateToProps = (state) => {
	return {
		post: state.posts.post
	};
}

export default connect(mapStateToProps, {fetchPost, deletePost})(PostShow);