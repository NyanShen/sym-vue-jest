import httpsAxios from "@/configs/https-axios";

function fetchIdentityItems() {
    return httpsAxios.fetchGet('/api/common/identities');
}

export default {fetchIdentityItems};