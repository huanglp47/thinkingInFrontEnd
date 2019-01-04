import {
  getAjax,
  postAjax,
} from './http.js'
import { ApiUrl } from '../config/apiEnv.js';

const QuickLoginUrl = ApiUrl+'/mixc/api/v1/loginByCheckCode'; // 快速登录
const configUrl =ApiUrl+ '/mixc/api/v1/config'; // 快速登录

//快速登录
// export const getQuickLogin=(obj)=> getAjax(QuickLoginUrl, obj)
export const getQuickLogin=(obj)=> getAjax(configUrl, obj) //demo
