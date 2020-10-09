import React,{useContext} from 'react';
import {StyleSheet} from "react-native";
import {Context} from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";


const EditScreen=({navigation})=>{
     const {editBlog,state}=useContext(Context);
     const id=navigation.getParam('id')
     const blogPost=state.find((blogPost)=>blogPost.id===id);
     
     return(
          <BlogPostForm
               initialValues={{
                    title:blogPost.title,
                    content:blogPost.content
               }}
               onSubmit={(title,content)=>{
                    editBlog(id,title,content,()=>{
                         navigation.navigate("Show")
                    })
          }}/>
     )
}

const styles=StyleSheet.create({


})

export default EditScreen;
