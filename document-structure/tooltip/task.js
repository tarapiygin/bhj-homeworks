'use strict'

function findTooltip() {
    const hasTooltipList = Array.from(document.getElementsByClassName('has-tooltip'));

    hasTooltipList.forEach(item => {
        const tooltipTemplate = document.createElement('div');
        tooltipTemplate.classList.add('tooltip');
        tooltipTemplate.textContent = item.getAttribute('title');

        const itemsStyle = item.getBoundingClientRect();
        tooltipTemplate.style.top = (itemsStyle.height + itemsStyle.top) + 'px';
        tooltipTemplate.style.left = itemsStyle.left + 'px';
        item.insertAdjacentElement('afterend', tooltipTemplate);

        item.addEventListener('click', tooltipHadnler);
    });
}
function tooltipHadnler(e) {
    e.preventDefault();
    this.nextSibling.classList.toggle('tooltip_active');
};

window.addEventListener("load", function (event) {
    findTooltip();
});