import React,{useState,useReducer} from 'react';
import createDataContext from "./createDataContext";

const BlogContext=React.createContext();

const reducer=(state,action)=>{
     switch (action.type) {
          case 'addBlog':
               return [...state,{
                    id:Math.floor(Math.random()*9999),
                    title:action.payload.title,
                    content: action.payload.content
               }]
          case 'deleteBlog':
               return state.filter(blogPost=>blogPost.id!==action.payload)
          case 'editBlog':
               return state.map((blogPost)=>{
                    return blogPost.id === action.payload.id ? action.payload : blogPost;
               })
          default :
               return state
     }
}
const addBlogPost=(dispatch)=>{
     return (title,content,callBack)=>{
          dispatch({type:'addBlog',payload:{title:title,content:content}});
          if(callBack)
          {
               callBack();
          }
     }
};
const editBlog=(dispatch)=>{
     return (id,title,content,callBack)=>{
          dispatch({
               type:'editBlog',
               payload:{
                    title:title,
                    content:content,
                    id:id
               }});
          if(callBack)
          {
               callBack();
          }
     }
};
const deleteBlog=(dispatch)=>{
     return (id)=>{
          dispatch({type:'deleteBlog',payload:id});
     }
};

 export const {Context,Provider}=createDataContext(reducer,{
      addBlogPost:addBlogPost,
      deleteBlog:deleteBlog,
      editBlog:editBlog
      
 },[{
      id:1,
      title:"Test Title",
      content:"Test Content"
 }])






