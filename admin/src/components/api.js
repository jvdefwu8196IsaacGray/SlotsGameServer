const xxtea = require("xxtea");

const axios = require("axios");

const crypto = require('crypto');

const url = "api/"

const publicKey = "7521B62854F6491F263AF3090AB9E759";

function format_data(args)
{
    var sign = ""

    for(let key in args) sign += key + args[key];
    
    sign += publicKey;

    args["sign"] = crypto.createHash('md5').update(sign).digest('hex');

    let buf1 = JSON.stringify(args);

    let buf2 = Buffer.from(buf1).toString('base64');

    let buf3 = Buffer.from(buf2).toString('hex');

    console.log(args);

    return {
        a: "...当",
        b: "这感觉未发生",
        c: "不知道你光临",
        xxtea: buf3
    };
}

export function out(view)
{
    localStorage.removeItem("auth");

    localStorage.removeItem("username");

    view.$router.push({path: "/"});
}

export function login(username, password)
{
    const args = {
        appCodeName: navigator.appCodeName,
        appName: navigator.appName,
        appVersion: navigator.appVersion,
        cookieEnabled: navigator.cookieEnabled,
        language: navigator.language,
        platform: navigator.platform,
        userAgent: navigator.userAgent,
        "username": username,        
        "password": password
    }

    return axios.post(url + "login", format_data(args));
}

export function register(username, password, phone, code)
{
    const args = {
        appCodeName: navigator.appCodeName,
        appName: navigator.appName,
        appVersion: navigator.appVersion,
        cookieEnabled: navigator.cookieEnabled,
        language: navigator.language,
        platform: navigator.platform,
        userAgent: navigator.userAgent,
        "username": username,        
        "password": password,
        "phone": phone,
        "code": code
    }

    return axios.post(url + "register", format_data(args));
}

export function sendCode(phone)
{
    const args = {
        appCodeName: navigator.appCodeName,
        appName: navigator.appName,
        appVersion: navigator.appVersion,
        cookieEnabled: navigator.cookieEnabled,
        language: navigator.language,
        platform: navigator.platform,
        userAgent: navigator.userAgent,
        "phone": phone
    }

    return axios.post(url + "sendCode", format_data(args));
}

export function index()
{
    const args = {
        appCodeName: navigator.appCodeName,
        appName: navigator.appName,
        appVersion: navigator.appVersion,
        cookieEnabled: navigator.cookieEnabled,
        language: navigator.language,
        platform: navigator.platform,
        userAgent: navigator.userAgent
    }

    return axios.post(url + "admin/index", format_data(args));
}

export function users(page, size, order, uid, like, status)
{
    const args = {
        appCodeName: navigator.appCodeName,
        appName: navigator.appName,
        appVersion: navigator.appVersion,
        cookieEnabled: navigator.cookieEnabled,
        language: navigator.language,
        platform: navigator.platform,
        userAgent: navigator.userAgent,
        "page": page,
        "size": size,
        "auth": localStorage.getItem("auth"),
        "username": localStorage.getItem("username"),
        "order": order,
        "uid" : uid,
        "like": like,
        "status": status
    }

    return axios.post(url + "admin/users", format_data(args));
}

export function pays(page, size, order, uid, like)
{
    const args = {
        appCodeName: navigator.appCodeName,
        appName: navigator.appName,
        appVersion: navigator.appVersion,
        cookieEnabled: navigator.cookieEnabled,
        language: navigator.language,
        platform: navigator.platform,
        userAgent: navigator.userAgent,
        "page": page,
        "size": size,
        "auth": localStorage.getItem("auth"),
        "username": localStorage.getItem("username"),
        "order": order,
        "uid" : uid,
        "like": like,
    }

    return axios.post(url + "admin/pays", format_data(args));
}

export function historys(page, size, order, uid, like)
{
    const args = {
        appCodeName: navigator.appCodeName,
        appName: navigator.appName,
        appVersion: navigator.appVersion,
        cookieEnabled: navigator.cookieEnabled,
        language: navigator.language,
        platform: navigator.platform,
        userAgent: navigator.userAgent,
        "page": page,
        "size": size,
        "auth": localStorage.getItem("auth"),
        "username": localStorage.getItem("username"),
        "order": order,
        "uid" : uid,
        "like": like,
    }

    return axios.post(url + "admin/historys", format_data(args));
}

export function results(page, size, order, uid, like)
{
    const args = {
        appCodeName: navigator.appCodeName,
        appName: navigator.appName,
        appVersion: navigator.appVersion,
        cookieEnabled: navigator.cookieEnabled,
        language: navigator.language,
        platform: navigator.platform,
        userAgent: navigator.userAgent,
        "page": page,
        "size": size,
        "auth": localStorage.getItem("auth"),
        "username": localStorage.getItem("username"),
        "order": order,
        "uid" : uid,
        "like": like,
    }

    return axios.post(url + "admin/results", format_data(args));
}

export function cashs(page, size, order, uid, like)
{
    const args = {
        appCodeName: navigator.appCodeName,
        appName: navigator.appName,
        appVersion: navigator.appVersion,
        cookieEnabled: navigator.cookieEnabled,
        language: navigator.language,
        platform: navigator.platform,
        userAgent: navigator.userAgent,
        "page": page,
        "size": size,
        "auth": localStorage.getItem("auth"),
        "username": localStorage.getItem("username"),
        "order": order,
        "uid" : uid,
        "like": like,
    }

    return axios.post(url + "admin/cashs", format_data(args));
}

export function errors(page, size, order, like)
{
    const args = {
        appCodeName: navigator.appCodeName,
        appName: navigator.appName,
        appVersion: navigator.appVersion,
        cookieEnabled: navigator.cookieEnabled,
        language: navigator.language,
        platform: navigator.platform,
        userAgent: navigator.userAgent,
        "page": page,
        "size": size,
        "auth": localStorage.getItem("auth"),
        "username": localStorage.getItem("username"),
        "order": order,
        "like": like,
    }

    return axios.post(url + "admin/errors", format_data(args));
}

export function user(uid)
{
    const args = {
        appCodeName: navigator.appCodeName,
        appName: navigator.appName,
        appVersion: navigator.appVersion,
        cookieEnabled: navigator.cookieEnabled,
        language: navigator.language,
        platform: navigator.platform,
        userAgent: navigator.userAgent,
        "uid" : uid
    }

    return axios.post(url + "admin/user/info", format_data(args));
}

export function score(uid, score, comment)
{
    const args = {
        appCodeName: navigator.appCodeName,
        appName: navigator.appName,
        appVersion: navigator.appVersion,
        cookieEnabled: navigator.cookieEnabled,
        language: navigator.language,
        platform: navigator.platform,
        userAgent: navigator.userAgent,
        "uid" : uid,
        "score": score,
        "comment": comment,
    }

    return axios.post(url + "admin/user/score", format_data(args));
}


export function lock(uid, lock)
{
    const args = {
        appCodeName: navigator.appCodeName,
        appName: navigator.appName,
        appVersion: navigator.appVersion,
        cookieEnabled: navigator.cookieEnabled,
        language: navigator.language,
        platform: navigator.platform,
        userAgent: navigator.userAgent,
        "uid" : uid,
        "lock" : lock
    }

    return axios.post(url + "admin/user/lock", format_data(args));
}
