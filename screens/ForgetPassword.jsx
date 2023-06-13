import {
    View,
    Text,
    TextInput,
     StyleSheet,
  } from "react-native";
  import React, { useEffect, useState } from "react";
  import { Button } from "react-native-paper";
  import { useDispatch, useSelector } from "react-redux";
  import { forgetPassword, login } from "../redux/action";

const ForgetPassword = ({navigation}) => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const {loading} = useSelector(state=>state.message )
const forgetPasswordHandler = async()=>{

 await   dispatch(forgetPassword(email))
    navigation.navigate("resetpassword")
}
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ fontSize: 20, margin: 20 }}>FORGOT PASSWORD</Text>
      <View style={{ width: "70%" }}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
      
        <Button
          disabled={loading}
          loading={loading}
          style={styles.btn}
          onPress={forgetPasswordHandler}
        >
          <Text style={{ color: "#fff" }}>SEND</Text>
        </Button>
     
  
      </View>
    </View>
  )
}

export default ForgetPassword

const styles = StyleSheet.create({
    btn: {
      backgroundColor: "#900",
      padding: 5,
      width: "100%",
    },
    input: {
      backgroundColor: "#fff",
      borderWidth: 1,
      borderColor: "#b5b5b5",
      padding: 10,
      paddingLeft: 15,
      borderRadius: 5,
      marginVertical: 15,
      fontSize: 15,
    },
  });
  