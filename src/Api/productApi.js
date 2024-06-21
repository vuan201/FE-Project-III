import axiosClient from "./axiosClient";
import showError from "./axiosError";

const baseUrl = '/Products'

const productApi = {
  getAll(params) {
    const url = baseUrl
    return axiosClient.get(url, {params})
  },
  get(id){
    const url = `${baseUrl}/${id}`
    return axiosClient.get(url)
  },
  add(data){
    const url = `${baseUrl}/${data.id}`
    return axiosClient.post(url)
  },
  update(data){
    const url = `${baseUrl}/${data.id}`
    return axiosClient.put(url)
  },
  remove(id){
    const url = `${baseUrl}/${id}`
    return axiosClient.delete(url)
  }
}

export default productApi
