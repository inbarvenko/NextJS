import { ResponseNewsType } from "@/types/news";
import { axiosInstance } from "./request";

type RequestEndpointType = 'politics' | 'news';

export const getAllNews = async (endpoint: RequestEndpointType) => {
  const res = await axiosInstance.get<ResponseNewsType>(`/${endpoint}`);
  return res?.data.data;
}

export const getOneOfNews = async (endpoint: RequestEndpointType, id: number) => {
  const res = await axiosInstance.get<ResponseNewsType>(`/${endpoint}/${id}`);
  console.log(res.data);
  return res?.data.data;
}