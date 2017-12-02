var docEl = document.documentElement;
var newWidth = docEl.clientWidth;

var fontEl = document.createElement('style');
docEl.firstElementChild.appendChild(fontEl);
fontEl.innerHTML = 'html{font-size:' + newWidth + 'px!important;}';

