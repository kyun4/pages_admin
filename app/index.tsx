import { Text, View, TextInput, Image, TouchableOpacity, Touchable} from "react-native";
import React, {useState} from "react";
import {useRouter} from "expo-router";


export default function Index() {


  const[credentials, setCredentials] = useState({
username: "",
password:""
  });

  const router = useRouter();
  const onLogin = () =>{
    router.navigate("/home_menu");
  }

  const onSignUp = () => {
    router.navigate("/signup");
  }


  const setCredentialHandler = () => {



  }

  return (
    <View
      style={{
        backgroundColor: "#FFF",
        flex: 1,
     
        alignItems: "center",
        padding: 20,
      }}
    >

<View style = {{width: "100%", justifyContent: "center", marginTop: 50, alignItems: "center"}}>
<Image source= {require('@/assets/images/pageslogo-orange1.png')} style = {{height:150,width: "40%"}}></Image>
</View>
      <Text style = {{marginBottom: 5, fontWeight: "bold", fontSize: 18}}>Pages Admin</Text>
      <Text style = {{marginBottom: 50, fontSize: 12}}>Sync the Whole Social Media App</Text>
      <View style = {{ backgroundColor: "#EEE", borderRadius: 10, width: "100%"}}>
     
      <TextInput placeholder = "Email/Username"  style = {{borderWidth:0, height: 55, width: "85%", paddingHorizontal: 20, borderRadius: 10}}></TextInput>
      </View>

      <TextInput placeholder = "Password"  style = {{borderWidth:0, marginTop: 8, height: 55, width: "100%", backgroundColor: "#EEE", paddingHorizontal: 20, borderRadius: 10}}></TextInput>
  
      <TouchableOpacity activeOpacity={0.8} onPress={onLogin} style = {{ borderRadius: 10, marginTop: 10,backgroundColor: "#FD8A02", width: "100%" }}>
    
        <Text style = {{color:"#FFF", fontWeight: "bold", textAlign: "center", paddingVertical:15}}>

          Submit

        </Text>
      
        </TouchableOpacity>

        <View style = {{marginTop: 25, flexDirection: "row", justifyContent:"space-around"}}>
          <Text style = {{fontSize: 12}}>Not yet registered? </Text>

          <TouchableOpacity onPress={onSignUp}>
            <Text style = {{fontSize: 12, fontWeight:"bold"}}>Sign Up </Text>
          </TouchableOpacity>
          
          <Text style = {{fontSize: 12}}>Here</Text>
        </View>
      
    </View>
  );
}
