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
import { login } from "../redux/action";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.auth);
  const loginHandler = () => {
    dispatch(login(email, password));
  };

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch({ type: "clearError" });
    }
  }, [error, dispatch]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ fontSize: 20, margin: 20 }}>WELCOME</Text>
      <View style={{ width: "70%" }}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          secureTextEntry
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
        />
        <Button
          disabled={!email || !password}
          style={styles.btn}
          onPress={loginHandler}
        >
          <Text style={{ color: "#fff" }}>Login</Text>
        </Button>
        <Text style={{ marginTop: 20, textAlign: "center" }}>Or</Text>
        <TouchableOpacity onPress={() => navigation.navigate("register")}>
          <Text
            style={{
              color: "#900",
              height: 30,
              margin: 20,
              textAlign: "center",
            }}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("forgetpassword")}>
          <Text
            style={{
             
              height: 30,
              margin: 20,
              textAlign: "center",
            }}
          >
           Forget Pasword
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

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
