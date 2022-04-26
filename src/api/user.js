import axios from "axios";

export const findUserByEmail = async (email) => {
    //sending authToken to backend from frontend
    return await axios.post(
      `${process.env.REACT_APP_API}/check-user-email`,
      {email}
    );
};