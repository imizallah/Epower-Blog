import React, { Component } from 'react';
import propTypes from 'prop-types'
import './post-style.css';
import {connect} from 'react-redux'; //This connects our component to our redux store that was provided by the Provider component
import {fetchSinglePost} from  '../../actions/postAction';
import Header from '../../components/Header';


class SinglePost extends Component {
	componentDidMount(){
		this.props.fetchSinglePost(); 
	}

		// let post = this.props.post
		// console.log('This is it: ', this.props.post)
		// let listposts = this.props.post.map((post, index) => {
		// 	return(
		// 		<div key={index}>
		// 			<div className="card text-center shadow my-4">
		// 				<div className="overflow">
		// 					<img src={post.featured_image} alt="" className="card-img-top"/>
		// 				</div>
		// 				<div className="card-body text-dark">
		// 					<h4 className="card-title">
		// 						{post.title.rendered}
								
		// 					</h4>
	
		// 					<p className="card-text text-secondary text-justify" dangerouslySetInnerHTML={{__html:post.excerpt.rendered}}/>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	)
		// })
		render() {
			return (
				<div>
					<Header />
					{this.renderPost()}
				</div>
			);
  	}

		renderPost() {
			return(
			<div>
				<div className="container container-fluid d-flex">
					<div className="row">
						<div className="col my-4">
							<div className="card-columns">
								adadsdasd 
							</div>
						</div>
					</div>
				</div>
			</div>
			)
		}

		
}

SinglePost.propTypes = {
	fetchSinglePost: propTypes.func.isRequired,
	post: propTypes.object.isRequired
}

const mapStateToProps = state => ({ // Getting the state from redux and map it to properties of the component and we can use that inside of this file (singlePost.jsx)
	post: state.post.item
});
    
export default connect(mapStateToProps, { fetchSinglePost })(SinglePost);
