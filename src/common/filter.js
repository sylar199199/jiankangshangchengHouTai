import Util from './util'

/**
 * 格式化JSON
 * @param  {String} json    [JSON字符串]
 * @param  {Object} options [参数]
 * @return {[type]}         [格式化后的字符串]
 */
const getRelationStatus = (status) => {
    let statusDesc = '';
    switch (status) {
        case 1:
            statusDesc = '本人';
            break;
        case 2:
            statusDesc = '配偶';
            break;
        case 3:
            statusDesc = '父母';
            break;
        case 4:
            statusDesc = '子女';
            break;
        case 5:
            statusDesc = '其他';
            break;
        default:
            statusDesc = '本人';
            break
    }
    return statusDesc
};
const getOrderStatus = (status) => {
    let statusDesc = '';
    switch (status) {
        case 1:
            statusDesc = '核保中';
            break;
        case 2:
            statusDesc = '核保失败 ';
            break;
        case 3:
            statusDesc = '待支付';
            break;
        case 4:
            statusDesc = '已失效';
            break;
        case 5:
            statusDesc = '承保失败';
            break;
        case 6:
            statusDesc = '投保成功';
            break;
        case 7:
            statusDesc = '已退保';
            break;
        default:
            statusDesc = '';
            break
    }
    return statusDesc
};
const getArticleStatus = (status) => {
    let statusDesc = '';
    switch (status) {
        case 1:
            statusDesc = '中医';
            break;
        case 2:
            statusDesc = '养生';
            break;
        case 3:
            statusDesc = '心理';
            break;
        case 4:
            statusDesc = '运动';
            break;
        case 5:
            statusDesc = '美丽';
            break;
        case 6:
            statusDesc = '家庭';
            break;
        case 7:
            statusDesc = '育儿';
            break;
        case 8:
            statusDesc = '健康';
            break
    }
    return statusDesc
};
const getTimedate = (timestamp) => {
    if(timestamp){
        var  getMonth = '', getDate = '';
        var d = new Date(timestamp);
        getMonth = (d.getMonth()+1) < 10 ? '0' + (d.getMonth()+1) : (d.getMonth()+1);
        getDate = d.getDate() < 10 ? '0' + d.getDate() : d.getDate();
        var newTime = d.getFullYear() + '-' + getMonth + '-' + getDate;
        return newTime;
    }else{
        return null
    }
};
const getTimeday = (timestamp) => {
    if(timestamp){
        var  getDate = '';
        var d = new Date(timestamp);
        getDate = d.getDate();
        var newTime = getDate;
        return newTime;
    }else{
        return null
    }
};
const getTrackStatus = (status) => {
    let statusDesc = '';
    switch (status) {
        case 1:
            statusDesc = '未处理';
            break;
        case 2:
            statusDesc = '初步接洽 ';
            break;
        case 3:
            statusDesc = '方案报价';
            break;
        case 4:
            statusDesc = '决策层认可';
            break;
        case 5:
            statusDesc = '签约中';
            break;
        case 6:
            statusDesc = '完成';
            break;
        case 7:
            statusDesc = '无机会放弃';
            break;
        default:
            statusDesc = '';
            break
    }
    return statusDesc
};
export default {
    getTrackStatus: getTrackStatus,
    getRelationStatus: getRelationStatus,
    getOrderStatus: getOrderStatus,
    getArticleStatus: getArticleStatus,
    getTimedate: getTimedate,
    getTimeday: getTimeday

}
