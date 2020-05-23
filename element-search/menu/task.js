
function initMenuLinks() {
    const mainMenu = Array.from(document.getElementsByClassName('menu_main'));
    const menuLinks = Array.from(document.getElementsByClassName('menu__link'));
    mainMenu.forEach(element => {
        element.addEventListener('click', clickHandler, );
    });
    menuLinks.forEach(element => {
        element.addEventListener('click', clickHandler);
    });
}

function clearSubMenu(menuItem) {
    const menu = menuItem.closest('.menu_main');
    const subItems = Array.from(menu.getElementsByClassName('menu_sub'));
    subItems.forEach(element => {
        if (element.classList.contains('menu_active')) {
            element.classList.remove('menu_active');
        };
    });
};

function clickHandler(event) {
    debugger;
    if (event.currentTarget.classList.contains('menu_main')) {
        clearSubMenu(this);
    } else {
        event.stopPropagation()
        const subMenu = Array.from(event.currentTarget.closest('.menu__item').getElementsByClassName('menu_sub'));
        if (subMenu.length !== 0) {
            event.preventDefault()
            clearSubMenu(event.currentTarget);
            subMenu.forEach(element => {
                element.classList.add('menu_active');
            });
        };
    }
};
initMenuLinks()