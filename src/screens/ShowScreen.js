import React,{useContext} from 'react';
import {View,Text,StyleSheet,FlatList,Button,TouchableOpacity} from "react-native";
import {Context} from "../context/BlogContext";
import {Feather, FontAwesome} from '@expo/vector-icons';


const ShowScreen=({navigation})=>{
     const {state}=useContext(Context);
     console.log(state)
     const id=navigation.getParam("id")
     const renderItem=state.find((blogPost)=>
          blogPost.id===navigation.getParam('id')
     );
     
     return(
          <View>
               <Text>{renderItem.title}</Text>
               <Text>{renderItem.content}</Text>
          </View>
     )
}

ShowScreen.navigationOptions = ({ navigation }) => {
     return {
          headerRight:()=> (
               <TouchableOpacity onPress={() => navigation.navigate('Edit',{id:navigation.getParam("id")})}>
                    <Feather name="edit-2" size={24} color="black" />
               </TouchableOpacity>
          )
     };
};

const styles=StyleSheet.create({

})

export default ShowScreen
