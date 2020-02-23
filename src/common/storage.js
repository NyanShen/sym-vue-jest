import { simpleLocalStorage } from "simple-storage";

function setItem(key, value) {
    simpleLocalStorage.setItem(key, JSON.stringify(value));
}

function getItem(key) {
    return JSON.parse(simpleLocalStorage.getItem(key));
}

function getCurrentUser() {
    const storageUser = simpleLocalStorage.getItem('currentUser');
    if (storageUser) {
        const currentUser = JSON.parse(atob(storageUser));
        currentUser.fullName = decodeURIComponent(currentUser.fullName || '');
        return currentUser;
    }
}

function clearAllItems() {
    simpleLocalStorage.clear();
}

export default { setItem, getItem, getCurrentUser, clearAllItems }