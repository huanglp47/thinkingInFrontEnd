import {
  getAjax,
  postAjax,
} from './http.js'
import { ApiUrl } from '../config/apiEnv.js';

const QuickLoginUrl = ApiUrl+'/mixc/api/v1/loginByCheckCode'; // 快速登录
const configUrl =ApiUrl+ '/mixc/api/v1/config'; // 快速登录

//快速登录
//failFn 自定义错误
export const getQuickLogin=(obj, successfn, needLoading, failFn)=> getAjax(loginUrl, obj, (res)=>{
  typeof successfn == 'function' && successfn(res)
}, needLoading
//   , (res)=>{
//   typeof failFn == 'function' && failFn(res)
// }
) //demo

export const getConfig=(obj, successfn, needLoading, failFn)=> getAjax(configUrl, obj, (res)=>{
  typeof successfn == 'function' && successfn(res)
}, needLoading) //demo


