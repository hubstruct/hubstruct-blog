console.log(mdc);

// Top Nav Bar
console.log(mdc.topAppBar);

const tab = mdc.topAppBar.MDCTopAppBar;
const topAppBar = new tab.attachTo(document.querySelector('.mdc-top-app-bar'));



console.log(mdc.ripple);

const rip = mdc.ripple.MDCRipple;
const ripple = new rip.attachTo(document.querySelector('.mdc-card__primary-action'))