import httpsAxios from "@/configs/https-axios";

function getVerifyCode() {
    return httpsAxios.fetchGet('/api/verification-codes/image');
}

function codeVerification(params) {
    const url = '/api/verification-codes/image/'+params.imageId+'/verify-code/'+params.verifyCode;
    return httpsAxios.fetchGet(url)
}

export default {getVerifyCode, codeVerification}