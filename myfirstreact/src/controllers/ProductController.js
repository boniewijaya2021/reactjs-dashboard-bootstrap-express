import http from '../config/axios-config.js';

const getAll = () => {
  return http.get('/products');
};

const get = id => {
  return http.get('/products/'+id);
};

const create = data => {
  return http.post('/products', data);
};

const update = data => {
  return http.put('/products/'+data.id,data);
};

const remove = rowIdx => {
  return http.delete('/products/'+rowIdx);
};
const removeAll = () => {
  return http.delete('/products/');
};

const findByTitle = title => {
  return http.get('/products?title='+title)
};

const getProductsChart =()=>{
  return http.get('/chartdata')
}
export default {
getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle,
  getProductsChart
}