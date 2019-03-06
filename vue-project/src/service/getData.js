import {
  getAjax,
  postAjax,
} from './http.js'

const _loginUrl = '/mixc-admin-service/v1/config'; // 快速登录 demo
const configUrl = '/mixc-admin-service/v1/config'; // 快速登录

////////////////
const loginUrl = '/mixc-admin-service/v1/user/login'; // 登录

const logOutUrl = '/mixc-admin-service/v1/user/logout'; // 登出


const getCheckMobileUrl = '/mixc-admin-service/v1/user/state'; // 检查用户是否存在

const resetPasswordUrl = '/mixc-admin-service/v1/user/password/reset'; // 重置密码

const updatePasswordUrl = '/mixc-admin-service/v1/user/password/update'; // 修改密码

const verificationCodeUrl = '/mixc-admin-service/v1/msg/sms/send'; // 发送短信验证码

const setPasswordUrl = '/mixc-admin-service/v1/user/password/set'; // 设置密码

const getUserInfoUrl = '/mixc-admin-service/v1/user/info'; // 获取用户信息

const updateMobileUrl = '/mixc-admin-service/v1/user/mobile/update'; // 更换手机号

const mallListUrl = '/mixc-admin-service/v2/mall/malls'; // 项目列表

const addCommonMallsUrl = '/mixc-admin-service/v1/mall/common/add'; // 添加常用项目

const deleteCommonMallsUrl = '/mixc-admin-service/v1/mall/common/delete'; // 删除常用项目

//快速登录
//failFn 自定义错误
export const getQuickLogin=(obj, successfn, needLoading, failFn)=> getAjax(_loginUrl, obj, (res)=>{
  typeof successfn == 'function' && successfn(res)
}, needLoading
//   , (res)=>{
//   typeof failFn == 'function' && failFn(res)
// }
) //demo

export const getConfig=(obj, successfn, needLoading, failFn)=> getAjax(configUrl, obj, (res)=>{
  typeof successfn == 'function' && successfn(res)
}, needLoading) //demo

///////////////////////////////

/**
 *  login
 */
export const postLogin=(obj, successfn, needLoading, failFn)=> postAjax(loginUrl, obj, (res)=>{
  typeof successfn == 'function' && successfn(res.data)
}, needLoading, failFn)

/**
 *  logOut
 */
export const getLogOut=(obj, successfn, needLoading, failFn)=> getAjax(logOutUrl, obj, (res)=>{
  typeof successfn == 'function' && successfn(res.data)
}, needLoading)

/**
 *  检查用户是否存在
 */
export const getCheckMobile=(obj, successfn, needLoading, failFn)=> getAjax(getCheckMobileUrl, obj, (res)=>{
    typeof successfn == 'function' && successfn(res.data)
}, needLoading)

/**
 *  forget password  重置密码
 */
export const postResetPassword=(obj, successfn, needLoading, failFn)=> postAjax(resetPasswordUrl, obj, (res)=>{
  typeof successfn == 'function' && successfn(res.data)
}, needLoading)

/**
 *  update password 修改密码
 */
export const postUpdatePassword=(obj, successfn, needLoading, failFn)=> postAjax(updatePasswordUrl, obj, (res)=>{
  typeof successfn == 'function' && successfn(res.data)
}, needLoading)

/**
 *  send Verification code 发送短信验证码
 */
export const getVerificationCode=(obj, successfn, needLoading, failFn)=> getAjax(verificationCodeUrl, obj, (res)=>{
  typeof successfn == 'function' && successfn(res.data)
}, needLoading)

/**
 *  set password 设置密码
 */
export const postSetPassword=(obj, successfn, needLoading, failFn)=> postAjax(setPasswordUrl, obj, (res)=>{
  typeof successfn == 'function' && successfn(res.data)
}, needLoading)

/**
 *  get user info
 */
export const getUserInfo=(obj, successfn, needLoading, failFn)=> getAjax(getUserInfoUrl, obj, (res)=>{
    typeof successfn == 'function' && successfn(res.data)
})

/**
 *  更换手机
 */
export const getMobileUpdate=(obj, successfn, needLoading, failFn)=> postAjax(updateMobileUrl, obj, (res)=>{
    typeof successfn == 'function' && successfn(res.data)
},needLoading)

/**
 *  获取项目列表
 */
export const getMallList=(obj, successfn, needLoading, failFn)=> getAjax(mallListUrl, obj, (res)=>{
    typeof successfn == 'function' && successfn(res.data)
})

/**
 *  添加常用项目
 */
export const addCommonMalls=(obj, successfn, needLoading, failFn)=> getAjax(addCommonMallsUrl, obj, (res)=>{
    typeof successfn == 'function' && successfn(res)
},needLoading)

/**
 *  删除常用项目
 */
export const deleteCommonMalls=(obj, successfn, needLoading, failFn)=> getAjax(deleteCommonMallsUrl, obj, (res)=>{
    typeof successfn == 'function' && successfn(res)
},needLoading)

