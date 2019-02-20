import { vm} from '../../main.js';

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
