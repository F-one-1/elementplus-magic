/* eslint-disable */
const validator = (msg, reg) => {
  return function (rule, value, callback) {
    if (reg.test(value)) {
      callback()
    } else {
      callback(new Error(msg))
    }
  }
}

export const getRule = function (key) {
  let { msg, reg } = {}

  switch (key) {
    case 1:
      msg = '请输入正确的邮箱地址'
      reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
      break
    case 2:
      msg = '请输入正确的手机号'
      reg = /^1[34578]\d{9}$/
      break
    case 3:
      msg = '请输入正确的身份证号'
      reg = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
      break
    case 4:
      msg = '请输入正确的网址'
      reg = /^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/
      break
    case 5:
      msg = '请输入正确的QQ号'
      reg = /^[1-9][0-9]{4,10}$/
      break
    case 6:
      msg = '请输入正确的微信号'
      reg = /^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/
      break
    case 7:
      msg = '请输入正确的车牌号'
      reg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/
      break
    case 8:
      msg = '请输入正确的正整数'
      reg = /^\d+$/
      break
    case 9:
      msg = '请输入正确的负整数'
      reg = /^-\d+$/
      break
    case 10:
      msg = '请输入正确的整数'
      reg = /^-?\d+$/
      break
    case 11:
      msg = '请输入正确的正数'
      reg = /^\d*\.?\d+$/
      break
    case 12:
      msg = '请输入正确的负数'
      reg = /^-\d*\.?\d+$/
      break
    case 13:
      msg = '请输入正确的数字'
      reg = /^-?\d*\.?\d+$/
      break
    case 14:
      msg = '请输入正确的IPV4地址'
      reg = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
      break
    case 15:
      msg = '用户名应为4到16位（字母，数字，下划线，减号）'
      reg = /^[a-zA-Z0-9_-]{4,16}$/
      break
    case 16:
      msg = '密码最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符'
      reg = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/
      break
    case 17:
      msg = '必须包含中文'
      reg = /[\u4E00-\u9FA5]/
      break
    default:
      return {}
  }

  return {
    required: true,
    validator: validator(msg, reg),
    trigger: 'blur'
  }
}
