import { vm } from '../../main.js';

let mixc_vm=null;

/**
  * @param {String} val
  * @return {String}
  */
export const trim = function(val){
    return val.replace(/^\s+|\s+$/gm, '')
}

export const mixcAlert=  function(text) {
    vm.$alert( text , '出错啦！', {
        confirmButtonText: '确定',
    });
}
export const mixcLoading=  function(text) {
    mixc_vm = vm.$loading({
        lock: true,
        text: text || '加载中...',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.2)',
    })
}
export const mixcCloseLoading=  function() {
    mixc_vm.close()
}

//用户状态：0, "未激活"1, "正常"2, "冻结"3, "申诉中"
export const getStateName=  function(val) {
    switch ( String(val)){
        case '0':
            return '未激活';
        case '1':
            return '正常';
        case '2':
            return '冻结';
        case '3':
            return '申诉中';
        default:
            return '正常';
    }
}
