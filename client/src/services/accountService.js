import axiosConfig from "../axios";
export const apiGetAccount = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "GET",
        url: "/account/",
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
export const apiGetAccountById = (id) =>
    new Promise(async (resolve, reject) => {
      try {
        const response = await axiosConfig({
          method: "GET",
          url: `/account/${id}`,
        });
        resolve(response);
      } catch (error) {
        reject(error);
      }
    });