import React,{useContext} from 'react';
import {StyleSheet} from "react-native";
import {Context} from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const CreateScreen=({navigation})=>{
     
     
     const {addBlogPost}=useContext(Context);
     
     return(
          <BlogPostForm onSubmit={(title,content)=>{
               addBlogPost(title,content,()=>{
                    navigation.navigate("Index")
               })
          }}/>
     )
}

const styles=StyleSheet.create({
     parentStyle:{
          marginVertical:10
     },
     inputStyle:{
          fontSize:18,
          borderColor:"black",
          borderWidth:1,
          
          padding:5,
          margin:5
     },
     label:{
          marginBottom:5,
          fontSize: 20,
          marginLeft:5
     }
})

export default CreateScreen;
