import axios from "axios";

export const getBlogsByCompanyId = async (id) =>
  await axios.get(`${process.env.REACT_APP_API}/blog/company/${id}`);

export const getAllBlogs = async () => 
  await axios.get(`${process.env.REACT_APP_API}/blogs`);

export const getBlogsMostLiked = async () => 
  await axios.get(`${process.env.REACT_APP_API}/blog/popular`);

export const getBlogById = async (id) => 
  await axios.get(`${process.env.REACT_APP_API}/blog/${id}`);
  
export const filterBlogs = async (Pcompany,PinterviewType,PonCampusOrOffCampus,sort) => 
  await axios.post(`${process.env.REACT_APP_API}/blog/filter`, {"company":Pcompany,"interviewType":PinterviewType,"onCampusOrOffCampus":PonCampusOrOffCampus,"sort":sort});

export const putVote = async (blogId,userId,sort) => 
  await axios.put(`${process.env.REACT_APP_API}/blog/votes`, {"blogId":blogId,"userId":userId,"sort":sort});