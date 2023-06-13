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
import { updatePassword } from "../redux/action";
 
const ChangePassword = () => {
    const dispatch = useDispatch()
const [oldPassword, setOldPassword] = useState("")
const [newPassword, setNewPassword] = useState("")

    const ChangePasswordHandler =()=>{
        dispatch(updatePassword(oldPassword, newPassword))
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
      <Text style={{ fontSize: 20, margin: 20 }}>CHANGE PASSWORD</Text>
      <View style={{ width: "70%" }}>
        
        <TextInput
          style={styles.input}
          secureTextEntry
          placeholder="Old Password"
          value={oldPassword}
          onChangeText={setOldPassword}
        />
        <TextInput
          style={styles.input}
          secureTextEntry
          placeholder="New Password"
          value={newPassword}
          onChangeText={setNewPassword}
        />
        <Button
          style={styles.btn}
          onPress={ChangePasswordHandler}
          textColor="#fff"
        >
          UPDATE 
        </Button>
        
         
      </View>
    </View>
  )
}

export default ChangePassword

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