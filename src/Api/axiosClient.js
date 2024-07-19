import axios from "axios";
import Cookies from "js-cookie";
const axiosClient = axios.create({
  // baseURL: 'http://localhost:4000',
  baseURL: "http://localhost:8080/api/v1",
  timeout: 3000,
});

// Thêm một bộ đón chặn request
axiosClient.interceptors.request.use(
  function (config) {
    // Làm gì đó trước khi request dược gửi đi
    const token = Cookies.remove("token");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  function (error) {
    // Làm gì đó với lỗi request
    return Promise.reject(error);
  }
);

// Thêm một bộ đón chặn response
axiosClient.interceptors.response.use(
  function (response) {
    // Bất kì mã trạng thái nào nằm trong tầm 2xx đều khiến hàm này được trigger
    // Làm gì đó với dữ liệu response
    return response.data;
  },
  function (error) {
    // Bất kì mã trạng thái nào lọt ra ngoài tầm 2xx đều khiến hàm này được trigger\
    // Làm gì đó với lỗi response
    return Promise.reject(error);
  }
);

export default axiosClient;
