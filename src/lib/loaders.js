import { defer } from "react-router-dom";
import axiosRequest from "./axiosfile";

export const singlePageLoader = async ({ request, params }) => {
  const res = await axiosRequest.get("/post/" + params.id);
  return res.data;
};
export const listPageLoader = async ({ request }) => {
  const query = request.url.split("?")[1];
  const postResponse = await axiosRequest.get("/posts?" + query);
  return {
    postResponse,
  };
};

export const profilePageLoader = async () => {
  const postPromise = axiosRequest.get("/profilePosts");
  const chatPromise = axiosRequest.get("/chats");
  return defer({
    postResponse: postPromise,
    chatResponse: chatPromise,
  });
};
