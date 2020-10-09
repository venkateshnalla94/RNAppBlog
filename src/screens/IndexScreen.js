import React,{useContext} from 'react';
import {View,Text,StyleSheet,FlatList,Button,TouchableOpacity} from "react-native";
import {Context } from "../context/BlogContext";
import { Feather } from '@expo/vector-icons';

const IndexScreen=({navigation})=>{
     const {state,addBlogPost,deleteBlog}=useContext(Context);
     
     return(
          <View>
               <FlatList
                    data={state}
                    keyExtractor={blogPost => blogPost.title}
                    renderItem={({item})=>{
                         return (
                              <TouchableOpacity
                              onPress={()=>{navigation.navigate('Show',{id:item.id})}}
                              >
                                   <View style={styles.viewStyle}>
                                        <Text style={styles.title}>{item.title}</Text>
                                        <TouchableOpacity
                                             onPress={()=>{deleteBlog(item.id)}}
                                        >
                                             <Feather style={styles.font} name="trash-2" color="black" />
                                        </TouchableOpacity>
                                   </View>
                              </TouchableOpacity>
                              )
                    }}
               />
          </View>
     )
}


IndexScreen.navigationOptions = ({ navigation }) => {
     return {
          headerRight:()=> (
               <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                    <Feather name="plus" size={30} />
               </TouchableOpacity>
          )
     };
};

const styles=StyleSheet.create({
     viewStyle:{
          flexDirection:"row",
          justifyContent:"space-between",
          paddingVertical:20,
          borderTopWidth:1,
          paddingHorizontal:10,
          borderColor:'gray'
     },
     title:{
          fontSize:18
     },
     font:{
          fontSize:25
     }
})

export default IndexScreen
