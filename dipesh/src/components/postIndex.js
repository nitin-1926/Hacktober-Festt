import React from 'react';
import { connect } from "react-redux";
import { fetchposts } from "../actions";
import { Link } from 'react-router-dom';
import _ from "lodash";
import "../style.css"

class PostIndex extends React.Component{

    componentDidMount()
    {
         this.props.fetchposts();
    }

    renderPosts()
    {
    

      return  _.map(this.props.posts , post =>{
            return(
                <li className="list-unstyled m-2" key = {post.id}>
                    <Link className=" d-flex ms-5 me-5 justify-content-center btn btn-outline-info btn-lg btn-block"  to={`/posts/${post.id}`} >
                    {post.title}
                    </Link>
                </li>
            )
        });
    } 
    render()
    {
        const style = {
            display : "flex",
            justifyContent : "center",
            marginTop : "20px",
            marginBottom : "20px",
        }
        return(<div className="container m-5">
            <div className="d-flex justify-content-end"> 
                <Link to="/posts/new" className="btn btn-pri btn-lg me-5">
                    Add a post
                </Link>
            </div>
            <h3 style={style} className="post" >POSTS</h3>
            <ul className="list-group" >
                {this.renderPosts()}
            </ul>
        </div>);
    }
} 

function mapStateToProps(state){
    return {posts : state.posts}
}



export default connect(mapStateToProps,{ fetchposts })(PostIndex);