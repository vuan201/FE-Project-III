import axiosClient from "./axiosClient";

const baseUrl = "/carts";

const cartsApi = {
  getAll(params) {
    const url = baseUrl;
    return axiosClient.get(url, { params });
  },
  get(id) {
    const url = `${baseUrl}/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = `${baseUrl}/${data.id}`;
    return axiosClient.post(url);
  },
  update(cartItems) {
    const url = `${baseUrl}`;
    return axiosClient.put(url, cartItems);
  },
  remove(id) {
    const url = `${baseUrl}/${id}`;
    return axiosClient.delete(url);
  },
};

export default cartsApi;
