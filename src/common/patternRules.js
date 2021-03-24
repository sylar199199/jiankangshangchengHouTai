/**
 * Created by focus on 2017/4/14.
 */

module.exports = {
    mobile: /^13\d{9}$|^14\d{9}$|^15\d{9}$|^18\d{9}$|^19\d{9}$|^16\d{9}$|^17\d{9}$/,
    psd: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$/,
    mail: /^([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+(\.[a-zA-Z]{2,3})+$/,
    idNum: /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/,
    bankCard: /\d{15}|\d{19}/,
    name: /^[\u4e00-\u9fa5]+$/,
    address: /^[a-zA-Z0-9\u4e00-\u9fa5]+$/,
    money: /(^[1-9]([0-9]+)?(\.[0-9]{1,4})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/

};