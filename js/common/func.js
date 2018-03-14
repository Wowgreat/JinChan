'use strict';
import TimerMixin from 'react-timer-mixin';

/**
*obj 作为一个对象参数,这个对象含有一个可执行的方法func
*druation interval单位为s
*/
const _setTimeOut = (duration,interval,obj,callback=null) => {
  var i = duration;
  const timer = TimerMixin.setInterval(
    ()=>{
      obj.func();
      i = i-1;
      if (i<=0) {
        clearInterval(timer);
        if (callback) {
          callback();
        }

      }
    },
    interval*1000
  );

};
/**
*封装应用网络请求的方法
*/
const _get = (api) => {

};
const _post = () => {

};

var CommonFunc = {
  setTimeOut: _setTimeOut,
};

module.exports = CommonFunc;
