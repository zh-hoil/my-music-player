const config = {
  url: '',
  method: 'get',
  baseURL: 'http://localhost:8080/api',
  transformResponse: [
    function (res) {
      return JSON.parse(res)
    }
  ],
  hearders: {'X-Requested-With': 'XMLHttpRequest'},
  timeout: 10000
}

export default config
