import Api from '../api/api';
import {APP_URL} from '../../config';

module.exports = {
  getPosts: function (params) {
    return Api.get(APP_URL.POST).then((res) => res.data);
  },
};
