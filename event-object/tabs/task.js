const tabNavigation = document.querySelectorAll('.tab');
const tabContent = document.querySelectorAll('.tab__content');

const tabs = Array.from(tabNavigation);
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const index = tabs.indexOf(tab);

    tabNavigation.forEach(A => A.classList.remove('tab_active'));
    tabContent.forEach(A => A.classList.remove('tab__content_active'));

    tabs[index].classList.add('tab_active');
    tabContent[index].classList.add('tab__content_active');
  });
});