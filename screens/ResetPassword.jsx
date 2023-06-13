import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { Button } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { forgetPassword, login, resetPassword } from "../redux/action";

const ResetPassword = ({navigation}) => {
  const dispatch = useDispatch();
  const { loading,error,message } = useSelector((state) => state.message);

  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const resetPasswordHandler = async () => {
    await dispatch(resetPassword(otp, newPassword));
    navigation.navigate("login")
  };

  useEffect(() => {
    if(error){
        alert(error)
        dispatch({type:"clearError"})
    }
    if(message){
        alert(message)
        dispatch({type:"clearMessage"})
    }
  }, [alert, message,error,dispatch])
  
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ fontSize: 20, margin: 20 }}>RESET PASSWORD</Text>
      <View style={{ width: "70%" }}>
        <TextInput
          style={styles.input}
          placeholder="OTP"
          value={otp}
          onChangeText={setOtp}
          keyboardType="number-pad"
        />

        <TextInput
          style={styles.input}
          placeholder="New Password"
          value={newPassword}
          onChangeText={setNewPassword}
        />

        <Button
          disabled={loading}
          loading={loading}
          style={styles.btn}
          onPress={resetPasswordHandler}
        >
          <Text style={{ color: "#fff" }}>RESET</Text>
        </Button>
      </View>
    </View>
  );
};

export default ResetPassword;

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
