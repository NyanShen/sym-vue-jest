import httpsAxios from "@/configs/https-axios";

function loginIn(login) {
    return httpsAxios.fetchPost('/api/tokens', {
        $skipAuthHandler: true,
        username: login.username,
        password: login.password,
        verifyCode: login.verifyCode
    });
}

function loginOut(tokenId) {
    httpsAxios.fetchRequest({
        url: "/api/tokens/" + tokenId,
        method: "DELETE"
    });
}

export default { loginIn, loginOut }