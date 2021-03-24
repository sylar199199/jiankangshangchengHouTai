import Util from './util'
import Service from './service'

const grantType = 'client_credentials';

const requestUrl = process.env.API_ROOT;
const env = process.env.ENV;
let weixinInfo = {};
let clientInfo = {};
if (env === 'dev') {
    weixinInfo = {
        appId: 'wx4de6471a3bdaf0c5', //开发
    };
    clientInfo = {
        oneLevUrl: "//devwechat.ifxj.com",
        twoLevel: "kl.ifxj.com",
        cashierUrl: "//devwww.kunlunhealth.com.cn/pay/cashier"
    };
} else if (env === 'test') { //测试环境
    weixinInfo = {
        appId: 'wx4de6471a3bdaf0c5', //测试1
    };
    clientInfo = {
        oneLevUrl: "//devwechat.ifxj.com",
        twoLevel: "kl.ifxj.com",
        cashierUrl: "//testwww.kunlunhealth.com.cn/pay/cashier"
    };
} else if (env === 'product') { //昆仑保险
    weixinInfo = {
        appId: 'wxf2aeade42b63d6b9', //昆仑健康保险
    };
    clientInfo = {
        oneLevUrl: "//h5.ifxj.com",
        twoLevel: "ifxj.kunlunhealth.com.cn",
        cashierUrl: "//www.kunlunhealth.com.cn/pay/cashier"
    };
}

let signUrl = '';
let wxConfig = function (to, title, desc, imgURL) {
    if (typeof window.entryUrl === 'undefined' || window.entryUrl === '') {
        window.entryUrl = location.href.split('#')[0]
    }
    // 进行签名的时候  Android 不用使用之前的链接， ios 需要
    signUrl = /(Android)/i.test(navigator.userAgent) ? location.href.split('#')[0] : window.entryUrl;
//  console.log(signUrl)
    Service.user().signature({
        url: signUrl
    }).then(response => {
        let data = response.data;
        wx.config({
            // debug: true,
            appId: weixinInfo.appId,
            timestamp: data.timestamp,
            nonceStr: data.nonceStr,
            signature: data.signature,
            jsApiList: [
                'hideOptionMenu',
                'onMenuShareAppMessage',
                'onMenuShareTimeline',
                'onMenuShareQQ',
                'closeWindow',
                'showOptionMenu'
            ]
        });
        wx.ready(function () {
            if (typeof wxConfigCB === 'function') {
                wxConfigCB(to, title, desc, imgURL);
            }
        });
        wx.error(function (res) {

        })
    }, err => {
    });
};
let wxConfigCB = function (to, title, desc, imgURL) {
    var userInfo = Util.localStorageUtil.get('userInfo');
    var userId = userInfo ? userInfo.id : '';
    var nickname = userInfo ? userInfo.nickname : '';
    let linkUrl = '';
    if (to.name == 'detail' || to.name == 'personlist') {
        if (to.name == 'personlist') { //注册链接
            wx.showOptionMenu();
            nickname = encodeURIComponent(nickname);
            linkUrl = document.location.protocol + '//' + window.location.host + '/user/login?inviterid=' + userId + '&nickname=' + nickname;
            wx.onMenuShareAppMessage({ //朋友
                title: title,
                desc: desc,
                link: linkUrl,
                imgUrl: imgURL
            });
            wx.onMenuShareTimeline({ //朋友圈
                title: '',
                desc: desc,
                link: linkUrl,
                imgUrl: imgURL
            });
        } else if (to.name == 'detail') {
            if (userInfo.userType == 1) {
                wx.hideOptionMenu()
            } else {
                wx.showOptionMenu();
                linkUrl = location.href.split('#')[0] + '?inviterid=' + userId;
                wx.onMenuShareAppMessage({ //朋友
                    title: title,
                    desc: desc,
                    link: linkUrl,
                    imgUrl: imgURL
                });
                wx.onMenuShareTimeline({ //朋友圈
                    title: title,
                    desc: desc,
                    link: linkUrl,
                    imgUrl: imgURL
                });
            }
        }

    } else {
        wx.hideOptionMenu()
    }
};
export default {
    grant_type: grantType,
    requestUrl: requestUrl,
    env: env,
    weixinInfo: weixinInfo,
    clientInfo: clientInfo,
    wxConfig: wxConfig
}
