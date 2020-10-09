import React,{useState,useReducer,useContext} from 'react';
import {View,Text,StyleSheet,FlatList,Button,TouchableOpacity,TextInput} from "react-native";
import {Context} from "../context/BlogContext";

const BlogPostForm=({onSubmit,initialValues})=>{
     const [title,setTitle]=useState(initialValues.title);
     const [content,setContent]=useState(initialValues.content);
     
     return(
          <View style={styles.parentStyle}>
               <Text style={styles.label}>Enter title</Text>
               <TextInput
                    style={styles.inputStyle}
                    placeHolder={"Title"}
                    value={title}
                    onChangeText={(text)=>setTitle(text)}
               />
               <Text style={styles.label}>Enter Content</Text>
               <TextInput
                    style={styles.inputStyle}
                    placeHolder={"Content"}
                    value={content}
                    onChangeText={(text)=>setContent(text)}
               />
               <Button
                    title={"Save Blog Post"}
                    onPress={()=>{onSubmit(title,content,)}}
               />
          </View>
     )
}

BlogPostForm.defaultProps={
     initialValues:{
          title:'',
          content:''
     }
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

export default BlogPostForm
