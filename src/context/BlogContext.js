import React,{useState,useReducer} from 'react';

const BlogContext=React.createContext();

const reducer=(state,action)=>{
     
     switch (action.type) {
          case 'addBlog':
               return [...state,{title:`Blog Post Index ${state.length+1}`}]
          default :
               return state
     }
     
}
export const BlogProvider=({children})=>{
     const [blogPosts,dispatch]=useReducer(reducer,[])
     
     const addBlogPost=()=>{
          dispatch({type:'addBlog'})
     };
     
     return <BlogContext.Provider value={{data:blogPosts,addBlogPost}}>{children}</BlogContext.Provider>
};

export default  BlogContext;



