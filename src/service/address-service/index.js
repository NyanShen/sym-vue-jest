import httpsAxios from "@/configs/https-axios";

function fetchProvinces() {
    return httpsAxios.fetchGet('/api/common/provinces');
}
function fetchAddressBytype(params) {
    return httpsAxios.fetchGet(`/api/common/${params.type}`,{
        baseCode: params.baseCode,
        parentCode: params.parentCode
    })
}
export default {fetchProvinces, fetchAddressBytype};