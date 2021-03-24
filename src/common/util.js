var SIGN_REGEXP = /([yMdhsm])(\1*)/g;
var DEFAULT_PATTERN = 'yyyy-MM-dd';

Array.prototype.Exists = function (v) {
    var b = false;
    for (var i = 0; i < this.length; i++) {
        if (this[i] === v) {
            b = true;
            break
        }
    }
    return b
};
String.prototype.format = function (args) {
    if (arguments.length > 0) {
        var result = this;
        if (arguments.length == 1 && typeof (args) == "object") {
            for (var key  in  args) {
                var reg = new RegExp("({" + key + "})", "g");
                result = result.replace(reg, args[key]);
            }
        }
        else {
            for (var i = 0; i < arguments.length; i++) {
                if (arguments[i] == undefined) {
                    return "";
                }
                else {
                    var reg = new RegExp("({[" + i + "]})", "g");
                    result = result.replace(reg, arguments[i]);
                }
            }
        }
        return result;
    }
    else {
        return this;
    }
};

const isUndefined = (value) => {
    return typeof value === 'undefined'
};

const isDefined = (value) => {
    return typeof value !== 'undefined'
};

const isObject = (value) => {
    // http://jsperf.com/isobject4
    return value !== null && typeof value === 'object'
};

const isBlankObject = (value) => {
    return value !== null && typeof value === 'object' && !Object.getPrototypeOf(value)
};

const isString = (value) => {
    return typeof value === 'string'
};

const isNumber = (value) => {
    return typeof value === 'number'
};

const isFunction = (value) => {
    return typeof value === 'function'
};

const isDate = (value) => {
    return toString.call(value) === '[object Date]'
};

const isRegExp = (value) => {
    return toString.call(value) === '[object RegExp]'
};

const isElement = (node) => {
    return !!(node && (node.nodeName || (node.prop && node.attr && node.find)))
};

const isArray = Array.isArray;

const toJson = (obj) => {
    return isUndefined(obj) ? undefined : JSON.stringify(obj)
};

const fromJson = (json) => {
    return isString(json) ? JSON.parse(json) : json
};

const padding = (s, len) => {
    len = len - (s + '').length;
    for (var i = 0; i < len; i++) {
        s = '0' + s
    }
    return s
};

const arrayToStr = (arr, separator) => {
    return isArray(arr) ? arr.join(separator) : arr
};

const strToArray = (str, separator) => {
    separator = separator || ',';
    return isString(str) ? str.split(separator) : str
};

const uniqueArray = (arr, isStrict) => {
    if (!isArray(arr)) {
        return arr
    }
    if (arr.length < 2) {
        return [arr[0]] || []
    }
    var tempObj = {};
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        var v = arr[i];
        var condition = isStrict ? (typeof tempObj[v] !== typeof v) : false;
        if ((typeof tempObj[v] === 'undefined') || condition) {
            tempObj[v] = v;
            newArr.push(v)
        }
    }
    return newArr
};

const forEachSorted = (obj, iterator, context) => {
    var keys = Object.keys(obj).sort();
    for (var i = 0; i < keys.length; i++) {
        iterator.call(context, obj[keys[i]], keys[i])
    }
    return keys
};

const serializeValue = (v) => {
    if (isObject(v)) {
        return isDate(v) ? v.toISOString() : toJson(v)
    }
    return v
};

const encodeUriQuery = (val, pctEncodeSpaces) => {
    return encodeURIComponent(val).replace(/%40/gi, '@')
        .replace(/%3A/gi, ':').replace(/%24/g, '$')
        .replace(/%2C/gi, ',').replace(/%3B/gi, ';')
        .replace(/%20/g, (pctEncodeSpaces ? '%20' : '+'))
};

const httpParamSerialize = (params) => {
    if (!params) {
        return ''
    }
    var parts = [];
    forEachSorted(params, function (value, key) {
        if (value === null || isUndefined(value)) {
            return
        }
        if (isArray(value)) {
            value.forEach(function (v) {
                parts.push(encodeUriQuery(key) + '=' + encodeUriQuery(serializeValue(v)))
            })
        } else {
            parts.push(encodeUriQuery(key) + '=' + encodeUriQuery(serializeValue(value)))
        }
    });
    return parts.join('&')
};

const getQueryStringByName = (name) => {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    var context = '';
    if (r != null) {
        context = r[2]
    }
    reg = null;
    r = null;
    return context == null || context === '' || context === 'undefined' ? '' : context
};

const extend = (dst) => {
    return baseExtend(dst, [].slice.call(arguments, 1), false)
};

const baseExtend = (dst, objs, deep) => {
    var h = dst.$$hashKey;
    for (var i = 0, ii = objs.length; i < ii; ++i) {
        var obj = objs[i];
        if (!isObject(obj) && !isFunction(obj)) {
            continue
        }
        var keys = Object.keys(obj);
        for (var j = 0, jj = keys.length; j < jj; j++) {
            var key = keys[j];
            var src = obj[key];
            if (deep && isObject(src)) {
                if (isDate(src)) {
                    dst[key] = new Date(src.valueOf())
                } else if (isRegExp(src)) {
                    dst[key] = new RegExp(src)
                } else if (src.nodeName) {
                    dst[key] = src.cloneNode(true)
                } else if (isElement(src)) {
                    dst[key] = src.clone()
                } else {
                    if (!isObject(dst[key])) {
                        dst[key] = isArray(src) ? [] : {}
                    }
                    baseExtend(dst[key], [src], true)
                }
            } else {
                dst[key] = src
            }
        }
    }
    setHashKey(dst, h);
    return dst
};
const objExtend = function (o, n) {
    var obj = o;
    for (var p in n) {
        if (n.hasOwnProperty(p) && (!obj.hasOwnProperty(p)))
            obj[p] = n[p];
    }
    return obj
};

const setHashKey = (obj, h) => {
    if (h) {
        obj.$$hashKey = h
    } else {
        delete obj.$$hashKey
    }
};

const formatJson = (json, options) => {
    var reg = null;
    var formatted = '';
    var pad = 0;
    var PADDING = '    '; // one can also use '\t' or a different number of spaces
    if (isUndefined(json)) {
        return ''
    }
    // optional settings
    options = options || {};
    // remove newline where '{' or '[' follows ':'
    options.newlineAfterColonIfBeforeBraceOrBracket = !!options.newlineAfterColonIfBeforeBraceOrBracket;
    // use a space after a colon
    options.spaceAfterColon = !!options.spaceAfterColon;
    if (isUndefined(json)) {
        return ''
    }
    // begin formatting...
    try {
        if (typeof json !== 'string') {
            // make sure we start with the JSON as a string
            json = JSON.stringify(json)
        } else {
            // is already a string, so parse and re-stringify in order to remove extra whitespace
            json = JSON.parse(json);
            json = JSON.stringify(json)
        }
    } catch (error) {
        return json
    }

    // add newline before and after curly braces
    reg = /([{}])/g;
    json = json.replace(reg, '\r\n$1\r\n');

    // add newline before and after square brackets
    reg = /([\[\]])/g;
    json = json.replace(reg, '\r\n$1\r\n');

    // add newline after comma
    reg = /(,)/g;
    json = json.replace(reg, '$1\r\n');

    // remove multiple newlines
    reg = /(\r\n\r\n)/g;
    json = json.replace(reg, '\r\n');

    // remove newlines before commas
    reg = /\r\n,/g;
    json = json.replace(reg, ',');

    // optional formatting...
    if (!options.newlineAfterColonIfBeforeBraceOrBracket) {
        reg = /:\r\n\{/g;
        json = json.replace(reg, ':{');
        reg = /:\r\n\[/g;
        json = json.replace(reg, ':[')
    }
    if (options.spaceAfterColon) {
        reg = /:/g;
        json = json.replace(reg, ':')
    }

    json.split('\r\n').forEach(function (node) {
        var i = 0;
        var indent = 0;
        var padding = '';

        if (node.match(/\{$/) || node.match(/\[$/)) {
            indent = 1
        } else if (node.match(/\}/) || node.match(/]/)) {
            if (pad !== 0) {
                pad -= 1
            }
        } else if (node.match(/\{\}/) || node.match(/[[\]]/)) {
            pad = 0
        } else {
            indent = 0
        }

        for (i = 0; i < pad; i++) {
            padding += PADDING
        }

        formatted += padding + node + '\r\n';
        pad += indent
    });

    return formatted
};

const copy = (source, destination, stackSource, stackDest) => {
    if (!destination) {
        destination = source;
        if (source) {
            if (isArray(source)) {
                destination = copy(source, [], stackSource, stackDest)
            } else if (isDate(source)) {
                destination = new Date(source.getTime())
            } else if (isRegExp(source)) {
                destination = new RegExp(source.source, source.toString().match(/[^\/]*$/)[0]);
                destination.lastIndex = source.lastIndex
            } else if (isObject(source)) {
                var emptyObject = Object.create(Object.getPrototypeOf(source));
                destination = copy(source, emptyObject, stackSource, stackDest)
            }
        }
    } else {
        if (source === destination) {
            throw Error('CopyError', "Can't copy! Source and destination are identical.")
        }

        stackSource = stackSource || [];
        stackDest = stackDest || [];

        if (isObject(source)) {
            var index = stackSource.indexOf(source);
            if (index !== -1) {
                return stackDest[index]
            }
            stackSource.push(source);
            stackDest.push(destination)
        }

        var result;
        if (isArray(source)) {
            destination.length = 0;
            for (var i = 0; i < source.length; i++) {
                result = copy(source[i], null, stackSource, stackDest);
                if (isObject(source[i])) {
                    stackSource.push(source[i]);
                    stackDest.push(result)
                }
                destination.push(result)
            }
        } else {
            var h = destination.$$hashKey;
            if (isArray(destination)) {
                destination.length = 0
            } else {
                for (var desKey in destination) {
                    delete destination[desKey]
                }
            }
            for (var key in source) {
                if (source.hasOwnProperty(key)) {
                    result = copy(source[key], null, stackSource, stackDest);
                    if (isObject(source[key])) {
                        stackSource.push(source[key]);
                        stackDest.push(result)
                    }
                    destination[key] = result
                }
            }
            setHashKey(destination, h)
        }
    }
    return destination
};

export default {
    extend: extend,
    objExtend: objExtend,
    copy: copy,
    isUndefined: isUndefined,
    isDefined: isDefined,
    isObject: isObject,
    isBlankObject: isBlankObject,
    isString: isString,
    isNumber: isNumber,
    isFunction: isFunction,
    isDate: isDate,
    isArray: isArray,
    toJson: toJson,
    fromJson: fromJson,
    arrayToStr: arrayToStr,
    strToArray: strToArray,
    uniqueArray: uniqueArray,
    httpParamSerialize: httpParamSerialize,
    getQueryStringByName: getQueryStringByName,
    formatJson: formatJson,
    padZeroLeft: padding,
    sessionStorageUtil: {
        get(key, defaultVal) {
            var stored = window.sessionStorage.getItem(key);
            try {
                stored = fromJson(stored)
            } catch (error) {
                stored = null
            }
            if (defaultVal && stored === null) {
                stored = defaultVal
            }
            return stored
        },
        set(key, value) {
            if (value) {
                window.sessionStorage.setItem(key, toJson(value))
            }
        },
        clear(key) {
            window.sessionStorage.removeItem(key)
        }
    },
    localStorageUtil: {
        get(key, defaultVal) {
            var stored = window.localStorage.getItem(key);
            try {
                stored = fromJson(stored)
            } catch (error) {
                stored = null
            }
            if (defaultVal && stored === null) {
                stored = defaultVal
            }
            return stored
        },
        set(key, value) {
            if (value) {
                window.localStorage.setItem(key, toJson(value))
            }
        },
        clear(key) {
            window.localStorage.removeItem(key)
        }
    },
    formatDate: {
        format: function (date, pattern) {
            pattern = pattern || DEFAULT_PATTERN;
            return pattern.replace(SIGN_REGEXP, function ($0) {
                switch ($0.charAt(0)) {
                    case 'y':
                        return padding(date.getFullYear(), $0.length);
                    case 'M':
                        return padding(date.getMonth() + 1, $0.length);
                    case 'd':
                        return padding(date.getDate(), $0.length);
                    case 'w':
                        return date.getDay() + 1;
                    case 'h':
                        return padding(date.getHours(), $0.length);
                    case 'm':
                        return padding(date.getMinutes(), $0.length);
                    case 's':
                        return padding(date.getSeconds(), $0.length)
                }
            })
        },
        parse: function (dateString, pattern) {
            var matchs1 = pattern.match(SIGN_REGEXP);
            var matchs2 = dateString.match(/(\d)+/g);
            if (matchs1.length === matchs2.length) {
                var _date = new Date(1970, 0, 1);
                for (var i = 0; i < matchs1.length; i++) {
                    var _int = parseInt(matchs2[i]);
                    var sign = matchs1[i];
                    switch (sign.charAt(0)) {
                        case 'y':
                            _date.setFullYear(_int);
                            break;
                        case 'M':
                            _date.setMonth(_int - 1);
                            break;
                        case 'd':
                            _date.setDate(_int);
                            break;
                        case 'h':
                            _date.setHours(_int);
                            break;
                        case 'm':
                            _date.setMinutes(_int);
                            break;
                        case 's':
                            _date.setSeconds(_int);
                            break
                    }
                }
                return _date
            }
            return null
        },
        getAge: function (strBirthday) {
            var returnAge;
            var strBirthdayArr = strBirthday.split("-");
            var birthYear = strBirthdayArr[0];
            var birthMonth = strBirthdayArr[1];
            var birthDay = strBirthdayArr[2];

            var d = new Date();
            var nowYear = d.getFullYear();
            var nowMonth = d.getMonth() + 1;
            var nowDay = d.getDate();

            if (nowYear == birthYear) {
                returnAge = 0; //同年 则为0岁
            } else {
                var ageDiff = nowYear - birthYear; //年之差
                if (ageDiff > 0) {
                    if (nowMonth == birthMonth) {
                        var dayDiff = nowDay - birthDay; //日之差
                        if (dayDiff < 0) {
                            returnAge = ageDiff - 1;
                        } else {
                            returnAge = ageDiff;
                        }
                    } else {
                        var monthDiff = nowMonth - birthMonth; //月之差
                        if (monthDiff < 0) {
                            returnAge = ageDiff - 1;
                        } else {
                            returnAge = ageDiff;
                        }
                    }
                } else {
                    returnAge = -1; //返回-1 表示出生日期输入错误 晚于今天
                }
            }
            return returnAge; //返回周岁年龄
        }
    }
}
