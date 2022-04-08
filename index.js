const CryptoJS = require("crypto-js");
const crypto = require("crypto");

function encryptpassword(password) {
    var hash = 0, i, chr, len;
    if (password.length == 0) return hash;
    for (i = 0, len = password.length; i < len; i++) {
        chr = password.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}

function decryptpassword(password) {
    var hash = 0, i, chr, len;
    if (password.length == 0) return hash;
    for (i = 0, len = password.length; i < len; i++) {
        chr = password.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}

function encrypt(text) {
    var cipher = CryptoJS.AES.encrypt(text, "Secret Passphrase");
    return cipher.toString();
}

function decrypt(text) {
    var bytes = CryptoJS.AES.decrypt(text, "Secret Passphrase");
    return bytes.toString(CryptoJS.enc.Utf8);
}


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomPassword(password){
    var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+-=[]{}|;':,./<>?";
    var pass = "";
    for (var x = 0; x < password; x++) {
        var i = Math.floor(Math.random() * chars.length);
        pass += chars.charAt(i);
    }
    return pass;
}

function randomString(length) {
    var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    var pass = "";
    for (var x = 0; x < length; x++) {
        var i = Math.floor(Math.random() * chars.length);
        pass += chars.charAt(i);
    }
    return pass;
}

function randomBytes(length) {
    var bytes = crypto.randomBytes(length);
    return bytes.toString('hex');
}

