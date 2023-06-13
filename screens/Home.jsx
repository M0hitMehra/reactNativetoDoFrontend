import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import Tasks from "../components/Tasks";
import Icon from "react-native-vector-icons/Entypo";
import { Dialog, Button } from "react-native-paper";
import { addTask, loadUser } from "../redux/action";

const Home = ({ navigation }) => {
   

  const [openDialog, setOpenDialog] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const hideDialog = () => {
    setOpenDialog(!openDialog);
  };
  const dispatch = useDispatch();
  const { loading, message, error } = useSelector((state) => state.message);
  const { user } = useSelector((state) => state.auth);
  const addTaskHandler = async () => {
    await dispatch(addTask(title, description));
    dispatch(loadUser());
  };

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch({ type: "clearError" });
    }
    if (message) {
      alert(message);
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, error, message, alert]);

  return (
    <>
      <View
        style={{
          backgroundColor: "#fff",
          flex: 1,
          paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        }}
      >
        <ScrollView>
          <SafeAreaView>
            <Text style={styles.heading}>All Tasks</Text>
            {user.tasks &&
              user.tasks.map((task, i) => (
                <Tasks
                  key={i}
                  title={task.title}
                  description={task.description}
                  status={task.completed}
                  taskId={task._id}
                />
              ))}
            <TouchableOpacity style={styles.addBtn} onPress={hideDialog}>
              <Icon name="add-to-list" size={20} color={"#900"} />
            </TouchableOpacity>
          </SafeAreaView>
        </ScrollView>
      </View>
      <Dialog visible={openDialog} onDismiss={hideDialog}>
        <Dialog.Title>Add a task</Dialog.Title>
        <Dialog.Content>
          <TextInput
            style={styles.input}
            value={title}
            onChangeText={setTitle}
            placeholder="Title"
          />
          <TextInput
            style={styles.input}
            value={description}
            onChangeText={setDescription}
            placeholder="Description"
          />
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity onPress={hideDialog}>
              <Text value={title} onChangeText={setDescription}>
                Cancel
              </Text>
            </TouchableOpacity>
            <Button textColor="#900" onPress={addTaskHandler} disabled={!title || !description || loading} >
              ADD
            </Button>
          </View>
        </Dialog.Content>
      </Dialog>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  heading: {
    fontSize: 28,
    textAlign: "center",
    marginTop: 25,
    color: "#fff",
    backgroundColor: "#474747",
  },
  addBtn: {
    backgroundColor: "#fff",
    width: 150,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    alignSelf: "center",
    elevation: 5,
    marginBottom: 5,
    marginTop:2 
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
