import React,{useContext,useState} from 'react';
import {View,Text,StyleSheet,Button,TouchableOpacity,TextInput} from "react-native";
import {Context} from "../context/BlogContext";

const CreateScreen=({navigation})=>{
     
     const [title,setTitle]=useState('');
     const [content,setContent]=useState('');
     
     const {addBlogPost}=useContext(Context);
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
                    title={"Add Blog"}
                    onPress={()=>{
                         addBlogPost(title,content,()=>{
                              navigation.navigate('Index')
                         })
                    }}
               />
          </View>
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
