const tabItem = document.querySelectorAll('.tabs-btn-item');
const tabsContent = document.querySelectorAll('.tabs-content-item');


tabItem.forEach(function (element) {
  element.addEventListener('click', open);
})

function open(evt) {
const tabTarget = evt.currentTarget;
const button = tabTarget.dataSet.button;

    tabItem.forEach(function(item){
    item.classList.remove('tabs-btn-item--active');
});
tabTarget.classList.add('tabs-btn-item--active');

    tabContent.classList.add('tabs-btn-item--active');

    tabContent.forEach(function(item){
    item.classList.remowe('tabs-content-item--active');
});

document.querySelector(`#${button}`).classList.add('tabs-btn--active');

}