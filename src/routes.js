import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app.js';
import PostsIndex from './components/posts-index.js';
import PostNew from './components/post-new.js';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={PostsIndex} />
		<Route path="post/new" component={PostNew} />
	</Route>
);

