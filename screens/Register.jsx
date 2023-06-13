import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Avatar, Button } from "react-native-paper";
import { useDispatch } from "react-redux";
import { register } from "../redux/action";
import mime from "mime";

const Register = ({ navigation ,route }) => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const registerHandler = () => {
    const myForm = new FormData()
    myForm.append("name", name)
    myForm.append("password", password)
    myForm.append("email",email)
    myForm.append("avatar", {
      uri: avatar,
      type: mime.getType(avatar),
      name: avatar.split("/").pop(),
    })
    dispatch(register(myForm))
  };
  const handleImage = () => {
    navigation.navigate("camera",{updateProfile: false});
  };
  useEffect(() => {
    if(route.params){
        if(route.params.image){
            setAvatar(route.params.image)
        }
    }
  }, [route])
  
  return (
    <View
      style={{
        flex: 1,
        borderColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Avatar.Image
        size={100}
        source={{ uri: avatar ? avatar : null }}
        style={{ backgroundColor: "#900" }}
      />
      <TouchableOpacity>
        <Text style={{ color: "#900" }} onPress={handleImage}>
          Change Image
        </Text>
      </TouchableOpacity>
      <View style={{ width: "70%" }}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />

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
      </View>
      <Button
        disabled={!email || !password || !name}
        style={styles.btn}
        onPress={registerHandler}
      >
        <Text style={{ color: "#fff" }}>Register</Text>
      </Button>
      <TouchableOpacity onPress={() => navigation.navigate("login")}>
        <Text
          style={{
            color: "#900",
            height: 30,
            margin: 20,
          }}
        >
          Have an Account ,Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#900",
    padding: 5,
    width: "70%",
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
