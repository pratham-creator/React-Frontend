import axios from "axios";

export const uploadImage = async (image) =>
  await axios.post(`${process.env.REACT_APP_API}/uploadImage`, { image });

export const removeImage = async (public_id) =>
  await axios.post(`${process.env.REACT_APP_API}/removeImage`, { public_id });
