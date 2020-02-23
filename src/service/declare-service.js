import httpsAxios from "@/configs/https-axios";

function fetchDeclaredItems(params) {
    return httpsAxios.fetchGet('/api/declared/items',params);
}

export default {fetchDeclaredItems};