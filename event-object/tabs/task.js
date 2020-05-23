'use strict'
class TabsItem {
    constructor(item) {
        this.element = item.closest('.tabs');
        this.linkList = Array.from(this.element.getElementsByClassName('tab'));
        this.contentList = Array.from(this.element.getElementsByClassName('tab__content'));
    }
    hideTab(index) {
        if (index !== -1) {
            this.linkList[index].classList.remove('tab_active');
            this.contentList[index].classList.remove('tab__content_active');
        };
    };
    showTab(linkItem) {
        this.hideTab(this.linkList.findIndex(item => item.classList.contains('tab_active')));
        const index = this.linkList.findIndex(item => item === linkItem);
        this.linkList[index].classList.add('tab_active');
        this.contentList[index].classList.add('tab__content_active');
    };
    initListen(handler) {
        this.linkList.forEach(elem => {
            elem.addEventListener('click', handler);
        });
    };
};

function tabsHandler(event){
    const tabs = new TabsItem(this);
    tabs.showTab(this);
};

function tabsInit() {
    debugger;
    const tabsList = Array.from(document.getElementsByClassName('tabs'));
    tabsList.forEach(elem => {
        const tabs = new TabsItem(elem);
        tabs.initListen(tabsHandler);
    });
};
tabsInit();