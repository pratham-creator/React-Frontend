import axios from "axios";

export const createOrUpdateUser = async (authtoken,name) => {
    //sending authToken to backend from frontend
    return await axios.post(
      `${process.env.REACT_APP_API}/create-or-update-user`,
      {name},
      {
        headers: {
          authtoken,
        },
      }
    );
};
