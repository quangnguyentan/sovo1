import axiosConfig from "../axios";
export const apiGetBanner = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "GET",
        url: "/banner/",
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
export const apiGetBannerById = (id) =>
    new Promise(async (resolve, reject) => {
      try {
        const response = await axiosConfig({
          method: "GET",
          url: `/banner/${id}`,
        });
        resolve(response);
      } catch (error) {
        reject(error);
      }
    });