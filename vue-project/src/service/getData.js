import {
  getAjax,
  postAjax,
} from './http.js'
import { ApiUrl } from '../config/apiEnv.js';

const QuickLoginUrl = ApiUrl+'/mixc/api/v1/loginByCheckCode'; // 快速登录

//快速登录
export const getQuickLogin=(obj)=> postAjax(QuickLoginUrl, obj)
