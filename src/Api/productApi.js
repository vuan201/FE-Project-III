import axiosClient from "./axiosClient";
import showError from "./axiosError";

const baseProductUrl = '/Products'

const productApi = {
  getAll(params) {
    const url = baseProductUrl
    return axiosClient.get(url, {params}).catch((error) => showError(error))
  },
  get(id){
    const url = `${baseProductUrl}/${id}`
    return axiosClient.get(url).catch((error) => showError(error))
  },
  add(data){
    const url = `${baseProductUrl}/${data.id}`
    return axiosClient.post(url).catch((error) => showError(error))
  },
  update(data){
    const url = `${baseProductUrl}/${data.id}`
    return axiosClient.put(url).catch((error) => showError(error))
  },
  remove(id){
    const url = `${baseProductUrl}/${id}`
    return axiosClient.delete(url).catch((error) => showError(error))
  }
}

export default productApi
