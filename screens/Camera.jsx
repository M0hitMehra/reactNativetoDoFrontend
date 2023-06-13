import { Camera, CameraType } from "expo-camera";
import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import * as ImagePicker from "expo-image-picker";

const CameraComponent = ({ navigation, route }) => {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [camera, setCamera] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      requestPermission(status === "granted");
    })();
  }, []);

  const openImagePickerAsync = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.status === false) {
      alert("Permission to access camera roll is required");
      return;
    }
    const pickerResult = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    if (route.params.updateProfile) {
      return navigation.navigate("profile", {
        image: pickerResult.assets[0].uri,
      });
    } else {
      return navigation.navigate("register", {
        image: pickerResult.assets[0].uri,
      });
    }
  };
  const clickPicture = async () => {
    const data = await camera.takePictureAsync();
    if (route.params.updateProfile) {
      return navigation.navigate("profile", {
        image: data.uri,
      });
    } else {
      return navigation.navigate("register", {
        image: data.uri,
      });
    }
  };

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return <Text style={{flex:1}} >No access to camera</Text>;
  }

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <Camera
        type={type}
        style={{ flex: 1, aspectRatio: 1 }}
        ratio="1:1"
        ref={(e) => setCamera(e)}
      />
      <View
        style={{
          flexDirection: "row",
          position: "absolute",
          bottom: 10,
          justifyContent: "space-evenly",
          width: "100%",
        }}
      >
        <Icon
          name="image"
          size={40}
          color={"#fff"}
          onPress={openImagePickerAsync}
        />
        <Icon name="camera" size={40} color={"#fff"} onPress={clickPicture} />
        <Icon
          name="flip-camera-android"
          size={40}
          color={"#fff"}
          onPress={() => {
            setType(
              type === CameraType.back ? CameraType.front : CameraType.back
            );
          }}
        />
      </View>
    </View>
  );
};

export default CameraComponent;
