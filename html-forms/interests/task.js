'use strict'

function init() {
    const checkBoxList = Array.from(document.getElementsByClassName('interest__check'));

    checkBoxList.forEach(item => item.addEventListener('change', checkHandler))
}
function checkHandler(e) {

    function checkUp(child) {
        const parent = child.closest('ul.interests');
        if (parent === null) {
            return 0;
        }
        const parentBox = parent.closest('.interest').getElementsByClassName('interest__check')[0];
        parentBox.checked = true;

        const parentBoxList = Array.from(parent.getElementsByClassName('interest__check'));

        parentBox.indeterminate = !parentBoxList.every(item => item.checked);

        checkUp(parentBox);
    };

    function checkDown(child) {
        const parent = child.closest('ul.interests');
        if (parent === null) {
            return 0;
        }
        const parentBox = parent.closest('.interest').getElementsByClassName('interest__check')[0];
        const parentBoxList = Array.from(parent.getElementsByClassName('interest__check'));

        parentBox.checked = !parentBoxList.every(item => !item.checked);
        if (parentBox.checked) {
            parentBox.indeterminate = true;
        } else {
            parentBox.indeterminate = false;
        };
        checkDown(parentBox);
    };

    if (this.checked) {
        const childBoxList = Array.from(this.closest('.interest').getElementsByClassName('interest__check'));
        if (childBoxList.length !== 0) {
            childBoxList.forEach(item => item.checked = true);
        };
        checkUp(this);
    } else {
        const childBoxList = Array.from(this.closest('.interest').getElementsByClassName('interest__check'));
        if (childBoxList.length !== 0) {
            childBoxList.forEach(item => item.checked = false);
        };
        checkDown(this);
    }
}

init();