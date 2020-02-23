function activeTabItem(item, tabItems) {
    let tabIndex = item.key;
    tabItems.forEach(function (tabItem) {
        tabItem.active = false;
    });
    item.active = true;
    return tabIndex;
}

export {activeTabItem};