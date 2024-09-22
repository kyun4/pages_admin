import { Text, View, TextInput, Image, ScrollView, FlatList, TouchableOpacity, Dimensions} from "react-native";
import React, {useState} from "react";
import {useRouter} from "expo-router";

export default function HomeMenu() {


  const[credentials, setCredentials] = useState({
username: "",
password:""
  });

  const router = useRouter();
  
  const onLogout = () => {
    router.navigate("/signup")
  }


  const setCredentialHandler = () => {



  }


  var windowX = Dimensions.get('window').width;

  return (


    
    <View
      style={{
        backgroundColor: "#FFF",
        flex: 1,
        padding: 20,
      }}
    >

   

    <View style = {{flexDirection:"row", alignItems: "center"}}>
      <TouchableOpacity onPress={onLogout}>
        <View style = {{marginTop: 45, marginLeft: 12, marginRight: 5}}><Image style = {{height: 55, width: 20}} source = {require('@/assets/images/arrowleft1.png')}></Image></View>
      </TouchableOpacity>
      <View>
        <Text style = {{marginTop: 50, marginLeft: 18, fontSize: 24, fontWeight:"bold"}}>Pages Admin</Text>
        <Text style = {{marginTop: 2, marginLeft: 18, fontSize: 12}}>Manage the Whole Social Media like a Boss</Text>
      </View>
    </View>
 
   
   <View>
   <ScrollView horizontal style = {{marginTop: 25}} showsHorizontalScrollIndicator={false}>
    {[
      "Mainstream Posts","Users","Uploaded Images","Active Users","Connected People","Events","Store Fronts","Communities","Rooms","Chapters"
    ].map((item) => {
      return(
        <View style = {{ borderRadius: 10, marginLeft: 10, padding: 12, backgroundColor: "#EEE", height: 125, width: 125 }}>
          <Text style = {{ fontSize: 24, marginBottom: 3 }}>{item.length * Math.floor(Math.random() * item.length)}</Text>
          <Text style = {{ fontWeight:"bold", fontSize: 16 }}>{item}</Text>
          <Text style = {{ fontSize: 10, marginTop:2 }}>Click to View</Text>
        </View>
      );
    })}
   </ScrollView>
   </View>

   <View>
    <FlatList showsHorizontalScrollIndicator={false} style = {{marginLeft: 10, marginTop: 20}} horizontal data = {["Trending","Newest","Content Moderations","Videos"]} renderItem={({item}) => {
        return(
          <View style = {{borderRadius: 10, marginRight: 12, padding: 12, backgroundColor: "#EEE", height: 250, width: 250}}>
            <Text style = {{fontSize: 36, fontWeight:"bold"}}>{item}</Text>
          </View>
        );
      }}>
     </FlatList>
   </View>

   <View style={{width: windowX-50, height: 150, padding: 15,  marginLeft: 10, marginTop: 20, borderRadius: 10, backgroundColor:"#FFF", shadowColor:'#494547', shadowRadius: 35, shadowOpacity:0.1, shadowOffset: {width:-2, height:5},elevation: 10}}>
    <Text style = {{fontSize:16, fontWeight:"bold"}}>Monthly Usage</Text>
    <Text style = {{fontSize:12}}>People's average monthly usage</Text>
   </View>
      



   </View>

 
    
  );
}
