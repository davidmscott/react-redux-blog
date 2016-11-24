import React, {Component} from 'react';

// component -> container:
	// import connect, bindActionCreators
	// import action creator
	// define mapDispatchToProps function
	// connect mapDispatchToProps to component

import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
import {fetchPosts} from '../actions/index.js';
import {Link} from 'react-router';

class PostsIndex extends Component {
	render() {
		return (
			<div>
				<div className="text-xs-right">
					<Link to="post/new" className="btn btn-primary">
						Add a Post
					</Link>
				</div>
				List of blog posts
			</div>
		);
	}

	// lifecycle method, react will call this method whenever this component is about to be rendered
	// for the first time.  It will not be called on subsequent re-renders.
	componentWillMount() {
		console.log('this would be a good time to call an action creator to fetch posts.');
		this.props.fetchPosts();
	}
}

// function mapDispatchToProps(dispatch) {
// 	return bindActionCreators({fetchPosts}, dispatch);
// }

// export default connect(null, mapDispatchToProps)(PostsIndex);

// this is a refactor of the code above
export default connect(null, {fetchPosts})(PostsIndex);