
function initMenuLinks() {
    const menuLinks = Array.from(document.getElementsByClassName('menu__link'));
    menuLinks.forEach(element => {
        element.addEventListener('click', clickHandler);
    });
}

function clearSubMenu(menuLink) {
    const menu = menuLink.closest('.menu_main');
    const subitems = Array.from(menu.getElementsByClassName('menu_sub'));
    subitems.forEach(element => {
        if (element.classList.contains('menu_active')) {
            element.classList.remove('menu_active');
        };
    });
};

function clickHandler(event) {
    const subMenu = Array.from(event.currentTarget.closest('.menu__item').getElementsByClassName('menu_sub'));
    if (subMenu.length !== 0) {
        event.preventDefault()
        clearSubMenu(event.currentTarget);
        subMenu.forEach(element => {
            element.classList.add('menu_active');
        });
    };
};
initMenuLinks()