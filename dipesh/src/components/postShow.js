import React from 'react';
import { connect } from "react-redux";
 import { fetchPost , deletePost } from "../actions"
 import { Link } from 'react-router-dom'
 import "../style.css"

class PostShow extends React.Component {

  componentDidMount(){
      if(!this.props.post){
        const { id } = this.props.match.params;
        this.props.fetchPost(id , ()=>{
            this.props.history.push('/');
        });
      }
     
  }
  onDeleteClick = () => {
     

    const { id } = this.props.match.params;
    this.props.deletePost(id,()=>{
        this.props.history.push('/');
    });
    
}
 

    render()
    {


        const { post } = this.props;

        if(!post)
        {
            return (<div>Loading...</div>)
        }
        return(<div className="container m-5">
                <Link to="/" className="btn btn-show" >Home</Link>
                <button className="d-flex btn btn-del btn-danger" onClick={this.onDeleteClick} >
                    Delete Post
                </button>
                <h3 className="title" >{post.title}</h3>
                <div className="categories" ><h6>{post.categories}</h6></div>
                <div className="content container" ><p>{post.content}</p></div>
        </div>);

    }
}

function mapStateToProps({ posts } , ownProps){
    return { post : posts[ownProps.match.params.id]};
}

export default connect(mapStateToProps,{ fetchPost , deletePost })(PostShow);