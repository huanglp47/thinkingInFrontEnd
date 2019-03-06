// 表单验证规则
const textTips = {
    IS_NULL: '必填项',
    WRONG_PHONE: '请输入正确的手机号码！',
    WRONG_CAPTCHA: '请输入正确的验证码！',
    WRONG_PWD: '密码由6位字符组成；要求数字，字母包含两种；密码区分大小写',
}

// 手机号
const checkPhone = (rule, value, callback) => {
    const reg = /^1\d{10}$/;
    if (!value) {
        callback(new Error(textTips.IS_NULL))
    } else if (!reg.test(value)) {
        callback(new Error(textTips.WRONG_PHONE))
    } else {
        callback()
    }
}

// 验证码
const checkCaptcha = (rule, value, callback) => {
    const reg = /^\d{6}$/;
    if (!value) {
        callback(new Error(textTips.IS_NULL))
    } else if (!reg.test(value)) {
        callback(new Error(textTips.WRONG_CAPTCHA))
    } else {
        callback()
    }
}

// 密码
const checkPwd = (rule, value, callback) => {
    const reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6}$/;
    if (!value) {
        callback(new Error(textTips.IS_NULL))
    } else if (!reg.test(value)) {
        callback(new Error(textTips.WRONG_PWD))
    } else {
        callback()
    }
}

export default {
    phone: [{ 
        required: true, 
        validator: checkPhone,
        trigger: 'blur' }
    ],
    captcha: [{ 
        required: true, 
        validator: checkCaptcha,
        trigger: 'blur' }
    ],
    pwd: [{ 
        required: true, 
        validator: checkPwd,
        trigger: 'blur' }
    ],
}