import axios from 'axios'

// axios 配置
axios.defaults.timeout = 600000;
axios.defaults.baseURL = ""
axios.defaults.withCredentials = true
axios.defaults.headers['Content-Type'] =  "application/json"
axios.defaults.headers['Access-Control-Allow-Origin'] =  "*"
axios.defaults.headers['Access-Control-Allow-Credentials'] =  true

// request拦截器
axios.interceptors.request.use(config => {
        return config
    }, error => {
        Promise.reject(error)
})


// respone拦截器
axios.interceptors.response.use(response => {
      const res = response.data;
      if(res){
        return Promise.resolve(res)
      }
    },error => {
      console.log("进入失败？？",error);
      if (error.response) {}
      return Promise.reject(error.response)   // 返回接口返回的错误信息
})
  
export default axios