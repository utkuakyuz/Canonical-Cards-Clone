import axios from 'axios';
export default (header) => {
  let headers = header || {};
  const ax = axios.create({
    // backend'in çalıştığı port
    baseURL: 'https://people.canonical.com/~anthonydillon/wp-json/wp/v2',
    withCredentials: false,
    headers: headers,
  });
  return ax;
};