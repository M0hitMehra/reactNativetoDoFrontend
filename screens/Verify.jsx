import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
  } from "react-native";
  import React, { useEffect, useState } from "react";
  import { Button } from "react-native-paper";
  import { useDispatch, useSelector } from "react-redux";
import { loadUser, updatePassword, verify } from "../redux/action";

const Verify = () => {
    const dispatch = useDispatch()
    const [otp, setOtp] = useState("")
    const verifyHandler= async()=>{
            await dispatch(verify(otp))
            dispatch(loadUser())
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
    <Text style={{ fontSize: 20, margin: 20 }}>VERIFY</Text>
    <View style={{ width: "70%" }}>
      
      <TextInput
        style={styles.input}
        placeholder="OTP"
        value={otp}
        onChangeText={setOtp}
        keyboardType="number-pad"
      />
       
      <Button
        style={styles.btn}
        onPress={verifyHandler}
        textColor="#fff"
      >
        VERIFY 
      </Button>
      
       
    </View>
  </View>
  )
}

export default Verify


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