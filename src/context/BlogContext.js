import React,{useState,useReducer} from 'react';
import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

const reducer=(state,action)=>{
     switch (action.type) {
          case 'fetchPosts':
               return action.payload
          // case 'addBlog':
          //      return [...state,{
          //           id:Math.floor(Math.random()*9999),
          //           title:action.payload.title,
          //           content: action.payload.content
          //      }]
          //this is if the internal communication needed to be happened without server but with with dispatch action
          
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
const fetchPosts=(dispatch)=>{
     return async ()=>{
          try{
              const response= await jsonServer.get('/blogPost');
              dispatch({type:'fetchPosts',payload:response.data});
          }catch (e) {
               console.log("Something Wrong with URL- Check with Server")
          }
     }
}

const addBlogPost=(dispatch)=>{
     return async (title,content,callBack)=>{
          await jsonServer.post('/blogPost',{title:title,content:content})
          // dispatch({type:'addBlog',payload:{title:title,content:content}});
          if(callBack)
          {
               callBack();
          }
     }
};

const editBlog=(dispatch)=>{
     return async (id,title,content,callBack)=>{
          await jsonServer.put(`/blogPost/${id}`,{title,content})
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
     return async (id)=>{
          try{
               await jsonServer.delete(`/blogPost/${id}`);
               dispatch({type:'deleteBlog',payload:id});
          }catch (e) {
               console.log(e,"Something Wrong with URL- Check with Server")
          }
     }
};

 export const {Context,Provider}=createDataContext(reducer,{
      addBlogPost:addBlogPost,
      deleteBlog:deleteBlog,
      editBlog:editBlog,
      fetchPosts:fetchPosts
 },[])






