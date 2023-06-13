import axios from "axios";
const server = "https://reactnativetodoapp-qa1w.onrender.com/api/v1/";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: "loginRequest" });
    const { data } = await axios.post(
      `${server}/login`,
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({ type: "loginSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "loginFailure", payload: error.response.data.message });
  }
};

export const register = (formData) => async (dispatch) => {
  try {
    dispatch({ type: "registerRequest" });
    const { data } = await axios.post(
      `${server}/register`,
     formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    dispatch({ type: "registerSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "registerFailure", payload: error.response.data.message });
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: "loadUserRequest" });
    const { data } = await axios.get(`${server}/me`);

    dispatch({ type: "loadUserSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "loadUserFailure", payload: error.response.data.message });
  }
};

export const addTask = (title, description) => async (dispatch) => {
  try {
    dispatch({ type: "addTaskRequest" });
    const { data } = await axios.post(
      `${server}/newtask`,
      {
        title,
        description,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({ type: "addTaskSuccess", payload: data.message });
  } catch (error) {
    dispatch({ type: "addTaskFailure", payload: error.response.data.message });
  }
};


export const updateTask = (taskId) => async (dispatch) => {
  try {
    dispatch({ type: "updateTaskRequest" });
    const { data } = await axios.get(
      `${server}/task/${taskId}`
    );

    dispatch({ type: "updateTaskSuccess", payload: data.message });
  } catch (error) {
    dispatch({ type: "updateTaskFailure", payload: error.response.data.message });
  }
};


export const deleteTask = (taskId) => async (dispatch) => {
  try {
    dispatch({ type: "deleteTaskRequest" });
    const { data } = await axios.delete(
      `${server}/task/${taskId}`
    );

    dispatch({ type: "deleteTaskSuccess", payload: data.message });
  } catch (error) {
    dispatch({ type: "deleteTaskFailure", payload: error.response.data.message });
  }
};


export const updateProfile = (formData) => async (dispatch) => {
  try {
    dispatch({ type: "updateProfileRequest" });
    const { data } = await axios.put(
      `${server}/updateprofile`,formData,{
        headers:{
          "Content-Type":"multipart/form-data"
        }
      }
    );

    dispatch({ type: "updateProfileSuccess", payload: data.message });
  } catch (error) {
    dispatch({ type: "updateProfileFailure", payload: error.response.data.message });
  }
};


export const logout = ( ) => async (dispatch) => {
  try {
 
    dispatch({ type: "logoutRequest" });
    const { data } = await axios.get(
      `${server}/logout`
    );
 
    dispatch({ type: "logoutSuccess",payload: data});
  } catch (error) {
 
    dispatch({ type: "logoutFailure", payload: error.response.data.message });
  }
};

export const updatePassword = (oldPassword,newPassword) => async (dispatch) => {
  try {
    dispatch({ type: "updatePasswordRequest" });
    const { data } = await axios.put(
      `${server}/updatepassword`,{oldPassword,newPassword},{
        headers:{
          "Content-Type":"application/json"
        }
      }
    );

    dispatch({ type: "updatePasswordSuccess", payload: data.message });
  } catch (error) {
    dispatch({ type: "updatePasswordFailure", payload: error.response.data.message });
  }
};


export const verify = (otp) => async (dispatch) => {
  try {
    dispatch({ type: "verifyRequest" });
    const { data } = await axios.post(
      `${server}/verify`,{otp},{
        headers:{
          "Content-Type":"application/json"
        }
      }
    );

    dispatch({ type: "verifySuccess", payload: data.message });
  } catch (error) {
    dispatch({ type: "verifyFailure", payload: error.response.data.message });
  }
};



export const forgetPassword = (email) => async (dispatch) => {
  try {
    dispatch({ type: "forgetPasswordRequest" });
    const { data } = await axios.post(
      `${server}/forgotpassword`,{email},{
        headers:{
          "Content-Type":"application/json"
        }
      }
    );

    dispatch({ type: "forgetPasswordSuccess", payload: data.message });
  } catch (error) {
    dispatch({ type: "forgetPasswordFailure", payload: error.response.data.message });
  }
};


export const resetPassword = (otp,newPassword) => async (dispatch) => {
  try {
    dispatch({ type: "resetPasswordRequest" });
    const { data } = await axios.put(
      `${server}/resetpassword`,{otp,newPassword},{
        headers:{
          "Content-Type":"application/json"
        }
      }
    );

    dispatch({ type: "resetPasswordSuccess", payload: data.message });
  } catch (error) {
    dispatch({ type: "resetPasswordFailure", payload: error.response.data.message });
  }
};
