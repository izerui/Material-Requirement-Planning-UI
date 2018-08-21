/**
 * Created by Skye on 2017/8/5.
 */

import axios from 'axios';
import qs from 'qs';
import VueAxios from '@/utils/VueAxios';
import VueQueryString from '@/utils/vueQueryString';

const install = (Vue) => {
  Vue.use(VueAxios, axios);
  Vue.use(VueQueryString, qs);
};

export default install;
