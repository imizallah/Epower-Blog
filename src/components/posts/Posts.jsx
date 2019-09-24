import React, { Component } from 'react';
import { Link} from 'react-router-dom';
// import Route  from 'react-router-dom/Route';
import propTypes from 'prop-types'
import './post-style.css';
import {connect} from 'react-redux'; //This connects our component to our redux store that was provided by the Provider component
import {fetchPosts} from  '../../actions/postAction';
import Header from '../../components/Header';


class Posts extends Component {
	componentDidMount(){
		this.props.fetchPosts(); 
	}
	render() {
		let listposts = this.props.posts.map((post, index) => {
			return(
				<div key={index}>
					<div className="card text-center shadow my-4">

						<div className="overflow">
							<img src={post.featured_image} alt="" className="card-img-top"/>
						</div>
						<div className="card-body text-dark">
							<Link to={"/post/" + post.id} key={post._id}>
								<h4 className="card-title">
									{post.title.rendered}
									
								</h4>
							</Link>
	
							<p className="card-text text-secondary text-justify" dangerouslySetInnerHTML={{__html:post.excerpt.rendered}}/>
						</div>
					</div>
				</div>
			)
		})

		return (
			<div>
				<Header />
				<div className="container container-fluid d-flex">
					<div className="row">
						<div className="col my-4">
							<div className="card-columns">
								{listposts}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

Posts.propTypes = {
	fetchPost: propTypes.func.isRequired,
	posts: propTypes.array.isRequired
}

const mapStatToProps = state => ({ // Getting the state from redux and map it to properties of the component and we can use that inside of this file (Posts.jsx)
	posts: state.posts.items
});
    
export default connect(mapStatToProps, { fetchPosts })(Posts);
