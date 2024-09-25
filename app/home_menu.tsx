import { Text, View, TextInput, Image, ScrollView, FlatList, TouchableOpacity, Dimensions, Animated} from "react-native";
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


  const [scrollY] = useState(new Animated.Value(0));

  var windowX = Dimensions.get('window').width;

  const headerHeight = scrollY.interpolate({
    inputRange:[0,100],
    outputRange: [165, 100],
    extrapolate: 'clamp'  
  })

  return (


    
    <View
      style={{
        backgroundColor: "#FFF",
        flex: 1,
        //padding: 20,
      }}
    >


    <Animated.View style = {{flexDirection:"row", alignItems: "center", height: headerHeight}}>
      <TouchableOpacity onPress={onLogout}>
        <View style = {{marginTop: 45, marginLeft: 12, marginRight: 5}}><Image style = {{height: 55, width: 20}} source = {require('@/assets/images/arrowleft1.png')}></Image></View>
      </TouchableOpacity>
      <View>
        <Text style = {{marginTop: 50, marginLeft: 18, fontSize: 24, fontWeight:"bold"}}>Pages Admin</Text>
        
      </View>
      </Animated.View>
 
 <ScrollView scrollEventThrottle={16} onScroll = {Animated.event([{nativeEvent: {contentOffset: {y:scrollY}}}],{
  useNativeDriver: false
 })}>
   
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

   <View style={{width: windowX-22, height: 200, padding: 15,  marginLeft: 10, marginTop: 20, borderRadius: 10, backgroundColor:"#FFF", shadowColor:'#494547', shadowRadius: 35, shadowOpacity:0.1, shadowOffset: {width:-2, height:5},elevation: 10}}>
  

    <View style = {{flexDirection:"row", alignItems:"center", alignContent: "center",justifyContent:"space-between",marginBottom: 20}}>
       <View style = {{flexDirection:"column"}}>
        <Text style = {{fontSize:14, fontWeight:"bold"}}>Monthly Usage</Text>
        <Text style = {{fontSize:10}}>People's average monthly usage as of 2024</Text>
       </View>
       <View>
        <Text style = {{ fontSize: 8, marginRight: 15, marginBottom: 12 }}>View Details </Text>
       </View>
    </View>

    <View style = {{ height:125, width:"100%", flexDirection:"column", alignItems:"center", justifyContent:"center" }}>
      <FlatList style = {{ height: 120 }} data = {[45,4,12,32,90,12,33,90,87,78,45,98]} horizontal renderItem = {({item})=>{
         
         return (
           <View style = {{ width: 15, height: 0, marginRight: 10, borderTopColor: "#EEE", borderTopWidth:100-item, borderBottomColor: "#FD8A02", borderBottomWidth: item }}>
             
           </View>
         )
       }}></FlatList>

      <FlatList data = {["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sep","Oct","Nov","Dec"]} horizontal renderItem = {({item})=>{
          
          return (<View>
            <View style = {{width: 20, height: 20, marginRight: 5, marginTop: 5}}><Text style = {{fontSize:8, width: 15}}>{item}</Text></View>
          </View>)
       }}></FlatList>
    </View>

   </View> 
      
   <View style={{width: windowX-22, height: 200, padding: 15,  marginLeft: 10, marginTop: 20, marginBottom: 20, borderRadius: 10, backgroundColor:"#FFF", shadowColor:'#494547', shadowRadius: 35, shadowOpacity:0.1, shadowOffset: {width:-2, height:5},elevation: 10}}>
    
    <View style = {{flexDirection:"row", alignItems:"center", alignContent: "center",justifyContent:"space-between",marginBottom: 20}}>
       <View style = {{flexDirection:"column"}}>
        <Text style = {{fontSize:14, fontWeight:"bold"}}>Monthly Additional Users</Text>
        <Text style = {{fontSize:10}}>User registration per month in 2024</Text>
       </View>
       <View>
        <Text style = {{ fontSize: 8, marginRight: 15, marginBottom: 12 }}>View Details </Text>
       </View>
    </View>
    
    <View style = {{ height: 125, width:"100%", flexDirection:"column", alignItems:"center", justifyContent:"center" }}>
      <FlatList data = {[2,12,14,15,29,39,44,43,44,90,67,75]} style = {{ height: 100 }} horizontal renderItem = {({item})=>{
        
        return (
          <View style = {{ width: 15, height: 0, marginRight: 10, borderTopColor: "#EEE", borderTopWidth:100-item, borderBottomColor: "#FD8A02", borderBottomWidth: item }}>
            
          </View>
        )
      }}></FlatList>

      <FlatList data = {["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sep","Oct","Nov","Dec"]} horizontal renderItem = {({item})=>{
          
          return (<View>
            <View style = {{width: 20, height: 20, marginRight: 5, marginTop: 5}}><Text style = {{fontSize:8, width: 15}}>{item}</Text></View>
          </View>)
       }}></FlatList>
    </View>

   </View> 

    <View style={{width: windowX-22, height: 200, padding: 15,  marginLeft: 10, marginTop: 20, marginBottom: 20, borderRadius: 10, backgroundColor:"#FFF", shadowColor:'#494547', shadowRadius: 35, shadowOpacity:0.1, shadowOffset: {width:-2, height:5},elevation: 10}}>
      
      <View style = {{flexDirection:"row", alignItems:"center", alignContent: "center",justifyContent:"space-between",marginBottom: 20}}>
        <View style = {{flexDirection:"column"}}>
          <Text style = {{fontSize:14, fontWeight:"bold"}}>Monthly Active Users</Text>
          <Text style = {{fontSize:10}}>Average Number of Users Monthly in 2024</Text>
        </View>
        <View>
          <Text style = {{ fontSize: 8, marginRight: 15, marginBottom: 12 }}>View Details </Text>
        </View>
      </View>
      
      <View style = {{ height: 125, width:"100%", flexDirection:"column", alignItems:"center", justifyContent:"center" }}>
        <FlatList data = {[21,20,14,77,29,79,24,43,44,44,67,95]} style = {{ height: 100 }} horizontal renderItem = {({item})=>{
          
          return (
            <View style = {{ width: 15, height: 0, marginRight: 10, borderTopColor: "#EEE", borderTopWidth:100-item, borderBottomColor: "#FD8A02", borderBottomWidth: item }}>
              
            </View>
          )
        }}></FlatList>

        <FlatList data = {["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sep","Oct","Nov","Dec"]} horizontal renderItem = {({item})=>{
            
            return (<View>
              <View style = {{width: 20, height: 20, marginRight: 5, marginTop: 5}}><Text style = {{fontSize:8, width: 15}}>{item}</Text></View>
            </View>)
        }}></FlatList>
      </View>

    </View> 

  

   </ScrollView>

   </View>

 
    
  );
}
