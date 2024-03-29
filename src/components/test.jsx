import React, {Component} from 'react'
import {getPosts} from './GetData'

class PostList extends Component {
    state = {
        posts: []
    }
    
    componentDidMount() {
      let postUrl = `${getPosts}`;
      fetch(postUrl)
      .then(data => data.json())
      .then(data => {
        this.setState({
          posts: data
        })
      })
    }
    
      render() {
        let listposts = this.state.posts.map((post, index) => {
          return(
            <div key={index}>
              <h4>{post.title.rendered}</h4>
              <p dangerouslySetInnerHTML={{__html: post.content.rendered}}/> 
              {/* dangerouslySetInnerHTML eliminates the html tags */}
            </div>
          )
        })
    
        return (
          <li>
            <h1>Hello i am working</h1>
            <ul>{listposts}</ul>
            
          </li>
        );
      }
    }
    
    export default PostList;