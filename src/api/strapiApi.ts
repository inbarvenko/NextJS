import { RequestEndpointType, ResponseNewsType, ResponseThemesType } from "@/types/news";
import { axiosInstance } from "./request";

export const getAllNews = async () => {
  const res = await axiosInstance.get<ResponseNewsType>(`/new`, {
    params: {
      populate: "*",
    },
  });

  return res?.data.data;
}

export const getThemes = async () => {
  const res = await axiosInstance.get<ResponseThemesType>(`/new`, {
    params: {
      fields: "type",
    },
  });

  const tags = new Set(res.data.data.map((tag) => tag.attributes.type));

  return Array.from(tags);
}

export const getThemesAndIds = async () => {
  const res = await axiosInstance.get<ResponseThemesType>(`/new`, {
    params: {
      fields: "type",
    },
  });


  return res.data.data;
}

export const getOneThemeNews = async (endpoint: string) => {
  const res = await axiosInstance.get<ResponseNewsType>(`/new`, {
    params: {
      [`filters[type][$eq]`]: endpoint,
      populate: "*",
    },
  });

  return res?.data.data;
}

export const getIDOneThemeNews = async (id: number) => {
  const res = await axiosInstance.get<ResponseNewsType>(`/new`, {
    params: {
      [`filters[id][$eq]`]: id,
      ['populate']: "*",
    },
  });

  return res?.data.data[0];
}

export const getOneOfNews = async (endpoint: RequestEndpointType, id: number) => {
  const res = await axiosInstance.get<ResponseNewsType>(`/new`, {
    params: {
      filter: `[type][$eq]=${endpoint}`,
      populate: "*",
    },
  });

  return res?.data.data;
}