import React from 'react';
import { Field , reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import  createPost  from '../actions/index'
import "../style.css"



class PostNew extends React.Component {



   renderField(field)
    {

        const className = `form-control ${field.meta.touched && field.meta.error ? "border border-danger" : ''}`
        return(
            <div className="m-5 container form-group">
                <h5 className="label" >{field.label}</h5>
                <input className={className} type="text" placeholder= {"ENTER"  + " " +  field.label}
                    {...field.input}
                />
                <div className="text-danger"   >
                {field.meta.touched ? field.meta.error : ''}
                </div>
            </div>
        )
    } 


    onSubmit = (values) =>{
        this.props.createPost(values,()=>{
            this.props.history.push("/")
        });
    }
 
    render()

    {

        const { handleSubmit } = this.props;

        return(
             <form onSubmit = {handleSubmit(this.onSubmit)} >
                <Field label="TITLE" name="title" component = {this.renderField}  >
                                 
                </Field>
                <Field label="CATEGORIES" name="categories" component = {this.renderField}  >
                                 
                </Field>
                <Field label="POST'S CONTENT" name="content" component = {this.renderField}  >
                                 
                </Field>
                <button type="submit" className="btn btn-primary  ms-5">Submit</button>
                <Link to='/' className="btn btn-danger ms-3" >Cancel</Link>
            </form>
        );
    }
}

function validate(values) 
{
     const errors = {};

     if(!values.title)
     {
         errors.title = "please enter a title"
     }
     if(!values.categories)
     {
         errors.categories = "enter a category"
     }
     if(!values.content)
     {
         errors.content = "enter some content"
     }


     return errors;
}

export default reduxForm({
    validate,
    form:'PostsNewForm'
})(
    
   connect(null,{ createPost })(PostNew)
    
    ); 