!function(t){var o={};function n(e){if(o[e])return o[e].exports;var r=o[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=o,n.d=function(t,o,e){n.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:e})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,o){if(1&o&&(t=n(t)),8&o)return t;if(4&o&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var r in t)n.d(e,r,function(o){return t[o]}.bind(null,r));return e},n.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(o,"a",o),o},n.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},n.p="",n(n.s=0)}([function(t,o,n){"use strict";n.r(o);var e=function(){document.querySelector(".js-modal-form").innerHTML='\n\t<div class="modal-form__container">\n\t\t<div class="modal-form__head">\n\t\t\t<h2 class="modal-form__title">Successfull payment</h2>\n\t\t\t<p class="modal-form__hint">Your request has been accepted and will be processed within 24 working hours. We will send you a payment details and all information to your email.</p>\n\t\t</div>\n\t\t<div class="modal-form__img-wrap modal-form__img-wrap_status">\n\t\t\t<img src="img/successful.png" alt="successful">\n\t\t</div>\n\t\t<button class="modal-form__submit-btn">Back</button>\n  \t</div>\n\t',window.history.pushState("object or string","Title","?status=paymentsuccess")},r=function(){document.querySelector(".js-modal-form").innerHTML='\n\t<div class="modal-form__container">\n\t\t<div class="modal-form__head">\n\t\t\t<h2 class="modal-form__title">Your payment failed</h2>\n\t\t\t<p class="modal-form__hint">Sorry, but we’ve having trouble processing your payment. You have been not charged for this transaction.</p>\n\t\t</div>\n\t\t<div class="modal-form__img-wrap modal-form__img-wrap_status">\n\t\t\t<img src="img/failed.png" alt="error">\n\t\t</div>\n\t\t<button class="modal-form__submit-btn modal-form__submit-btn_error">Try to pay again</button>\n\t</div>\n\t',window.history.pushState("object or string","Title","?status=paymenterror")},a=function(t){var o=t;o.textContent="",o.classList.add("modal-form__submit-btn_loading"),setTimeout(function(){var t=[e,r];t[Math.floor(Math.random()*t.length)].call()},1500)},l=function(){for(var t=document.querySelectorAll(".modal-form__product-input"),o=!1,n=function(n){if(t[n].value){var e=t[n].closest(".modal-form__product-group");e.classList.remove("modal-form__product-group_invalid"),e.classList.add("modal-form__product-group_valid"),"email"===t[n].type&&(a=t[n].value,/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(a)?(e.classList.remove("modal-form__product-group_invalid"),e.classList.add("modal-form__product-group_valid"),o=!0):(e.classList.remove("modal-form__product-group_valid"),e.classList.add("modal-form__product-group_invalid"),o=!1))}else{var r=t[n].closest(".modal-form__product-group");r.classList.remove("modal-form__product-group_valid"),r.classList.add("modal-form__product-group_invalid"),o=!1}var a;t[n].addEventListener("input",function(){if(t[n].value){var o=t[n].closest(".modal-form__product-group");o.classList.remove("modal-form__product-group_invalid"),o.classList.add("modal-form__product-group_valid")}else{var e=t[n].closest(".modal-form__product-group");e.classList.remove("modal-form__product-group_valid"),e.classList.add("modal-form__product-group_invalid")}})},e=0;e<t.length;e++)n(e);return o},c=function(){var t=document.querySelector(".modal-form__container");setTimeout(function(){t.classList.remove("modal-form__container_hidden")},70)},d=function(){for(var t=document.querySelectorAll(".modal-form__product-input"),o={email:null,products:[]},n=0;n<t.length;n++){var e=t[n];0===n?o.email=e.value:n%2!=0&&o.products.push({product:e.value,link:t[n+1].value})}return JSON.stringify(o)},s=function(){var t,o;document.querySelector(".js-modal-form").innerHTML='\n\t\t<div class="modal-form__container">\n\t\t\t<div class="modal-form__product-group">\n\t\t\t\t<h2 class="modal-form__product-title">Info</h2>\n\t\t\t\t<label class="modal-form__product-label" >Enter your email address\n\t\t\t\t\t<input class="js-group-input modal-form__product-input" type="email" placeholder="team@checkforpatent.com" required>\n\t\t\t\t</label>\n\t\t\t</div>\n\t\t\t<div class="modal-form__product-group">\n\t\t\t\t<h2 class="modal-form__product-title">Product 1</h2>\n\t\t\t\t<label class="modal-form__product-label">Enter main keyword for the product\n\t\t\t\t\t<input class="js-product-input modal-form__product-input" type="text" placeholder="for example, sylicon wine cup" required>\n\t\t\t\t</label>\n\t\t\t</div>\n\t\t\t<div class="modal-form__product-group">\n\t\t\t\t<label class="modal-form__product-label">Enter link to the similar product as a reference\n\t\t\t\t\t<input class="js-product-input modal-form__product-input" type="url" placeholder="https://..." required>\n\t\t\t\t</label>\n\t\t\t</div>\n\t\t\t<button class="js-add-btn modal-form__add-btn">\n\t\t\t\tAdd more products\n\t\t\t\t<svg width="13" height="13" fill="none" xmlns="http://www.w3.org/2000/svg">\n\t\t\t\t\t<path d="M6.5 3.405a.464.464 0 00-.464.464V9.13a.464.464 0 10.928 0V3.869a.464.464 0 00-.464-.464z" fill="#23C967"/>\n\t\t\t\t\t<path d="M9.131 6.036H3.87a.464.464 0 100 .928H9.13a.464.464 0 100-.928z" fill="#23C967"/>\n\t\t\t\t\t<path d="M6.5 0A6.507 6.507 0 000 6.5C0 10.084 2.916 13 6.5 13S13 10.084 13 6.5 10.084 0 6.5 0zm0 12.071A5.578 5.578 0 01.929 6.5C.929 3.428 3.428.929 6.5.929c3.072 0 5.571 2.499 5.571 5.571 0 3.072-2.499 5.571-5.571 5.571z" fill="#23C967"/>\n\t\t\t\t</svg>\n\t\t\t</button>\n\t\t\t<p class="js-description modal-form__description">We offer discount up to 36% for multiple checks</p>\n\t\t  \t<button class="js-submit-btn modal-form__submit-btn">Submit and Pay 24.99 USD</button>\n\t\t\t<p class="js-secure-title modal-form__secure-title">\n\t\t\t\t<svg width="11" height="15" fill="none" xmlns="http://www.w3.org/2000/svg">\n\t\t\t\t\t<g clip-path="url(#clip0)">\n\t\t\t\t\t<path d="M9.78 9.222a.668.668 0 00-.53-.262H9v-1.8c0-1.15-.344-2.137-1.031-2.962-.688-.826-1.51-1.238-2.47-1.238-.958 0-1.78.412-2.468 1.237C2.344 5.023 2 6.01 2 7.16v1.8h-.25a.668.668 0 00-.531.262A.963.963 0 001 9.86v5.4c0 .25.073.463.219.638a.669.669 0 00.531.262h7.5a.669.669 0 00.531-.262.964.964 0 00.219-.638v-5.4a.962.962 0 00-.22-.638zM7.5 8.96h-4v-1.8c0-.663.195-1.228.586-1.697.39-.469.862-.703 1.414-.703.552 0 1.023.234 1.414.703.39.469.586 1.034.586 1.697v1.8z" fill="#AFB4CC"/>\n\t\t\t\t\t</g>\n\t\t\t\t\t<defs>\n\t\t\t\t\t<clippath id="clip0">\n\t\t\t\t\t<path fill="#fff" transform="translate(0 .96)" d="M0 0h11v13.2H0z"/>\n\t\t\t\t\t</clippath>\n\t\t\t\t\t</defs>\n\t\t\t\t</svg>Secure payment with Stripe\n\t\t  \t</p>\n\t\t</div>\n\t',document.querySelector(".js-submit-btn").addEventListener("click",function(t){if(t.preventDefault(),l()){var o=d();console.log(o),a(this)}}),t=document.querySelector(".js-add-btn"),o=document.querySelector(".js-modal-form"),t.addEventListener("click",function(){var t={title:"Adding more products",subTitle:"The more items you check, the better the price.",products:[{count:5,active:!0,checked:!0,price:80,title:"5 products for 80 usd / 16$ for each",hint:"You safe 36% on each patent check"},{count:4,price:72,title:"4 products for 72 usd / 18$ for each",hint:"You safe 28% on each patent check"},{count:3,price:60,title:"3 products for 60 usd / 20$ for each",hint:"You safe 20% on each patent check"},{count:2,price:44,title:"2 products for 44 usd / 22$ for each",hint:"You safe 12% on each patent check"},{count:1,price:24.99,title:"1 product for 24.99 usd"}],button:"Continue"},n=document.querySelectorAll("input"),e=[];n.forEach(function(t){return e.push(t.value)});var r=t.products.map(function(t){var o=t.hint?'<p class="modal-form__products-hint">'.concat(t.hint,"</p>"):"",n=t.active?" modal-form__products-item_active":"",e=t.checked?"checked":"";return'\n\t\t\t\t<li class="modal-form__products-item'.concat(n,'" \n\t\t\t\t\t\tdata-value="').concat(t.price,'" \n\t\t\t\t\t\tdata-count="').concat(t.count,'">\n\t\t\t\t\t<label class="modal-form__products-label">\n\t\t\t\t\t<input class="modal-form__products-input" type="radio" name="radio" ').concat(e,'>\n\t\t\t\t\t<span class="modal-form__fake-input"></span>\n\t\t\t\t\t<div class="modal-form__products-text">\n\t\t\t\t\t\t<h3 class="modal-form__products-title">').concat(t.title,"</h3>\n\t\t\t\t\t\t").concat(o,"\n\t\t\t\t\t</div>\n\t\t\t\t\t</label>\n\t\t\t\t</li>\n\t\t\t")});o.innerHTML='\n\t\t\t<div class="modal-form__container modal-form__container_hidden">\n\t\t\t\t<div class="modal-form__head">\n\t\t\t\t\t<h2 class="modal-form__title">'.concat(t.title,'</h2>\n\t\t\t\t\t<p class="modal-form__hint">').concat(t.subTitle,'</p>\n\t\t\t\t</div>\n\t\t\t\t<ul class="modal-form__products-list">').concat(r.join(" "),'</ul>\n\t\t\t\t<button class="js-step-btn modal-form__submit-btn">').concat(t.button,"</button>\n\t\t\t</div>\n\t\t"),c(),function(t){document.querySelector(".js-step-btn").addEventListener("click",function(o){o.preventDefault(),document.querySelectorAll(".modal-form__products-input").forEach(function(o){if(o.checked){var n=o.closest(".modal-form__products-item").dataset;!function(t){for(var o=t.value,n=t.count,e=t.inputValues,r=document.querySelector(".js-modal-form"),s=o,i=s/n,u="",m=0;m<n;m++){var p=0===m?'value="'.concat(e[2],'"'):"",f=0===m?'value="'.concat(e[1],'"'):"",_=0===m?"":'<button class="modal-form__product-button js-product-button" title="Remove product">\n\t\t\t\t\t<svg class="modal-form__product-icon" width="13" height="14" fill="none" xmlns="http://www.w3.org/2000/svg">\n\t\t\t\t\t\t<g clip-path="url(#clip0)" fill="#23C967">\n\t\t\t\t\t\t\t<path d="M6.5 13.206c-3.584 0-6.5-2.926-6.5-6.524S2.916.158 6.5.158 13 3.084 13 6.682s-2.916 6.524-6.5 6.524zm0-12.116C3.428 1.09.929 3.598.929 6.682c0 3.084 2.499 5.592 5.571 5.592 3.072 0 5.572-2.508 5.572-5.592 0-3.084-2.5-5.592-5.572-5.592z"/>\n\t\t\t\t\t\t\t<path d="M8.822 9.478a.462.462 0 01-.329-.136L3.85 4.682a.467.467 0 010-.66.463.463 0 01.657 0l4.643 4.66a.467.467 0 01-.328.796z"/>\n\t\t\t\t\t\t\t<path d="M4.179 9.478a.467.467 0 01-.328-.796l4.642-4.66a.463.463 0 01.657 0 .467.467 0 010 .66l-4.643 4.66a.462.462 0 01-.328.136z"/>\n\t\t\t\t\t\t</g>\n\t\t\t\t\t\t<defs>\n\t\t\t\t\t\t\t<clippath id="clip0">\n\t\t\t\t\t\t\t\t<path fill="#fff" transform="translate(0 .158)" d="M0 0h13v13.049H0z"/>\n\t\t\t\t\t\t\t</clippath>\n\t\t\t\t\t\t</defs>\n\t\t\t\t\t</svg>\n\t\t\t\t</button>';u+='\n\t\t\t<div class="modal-form__product-group">\n\t\t\t\t<div class="modal-form__product-head">\n\t\t\t\t\t<h2 class="modal-form__product-title">Product '.concat(m+1,"</h2>\n\t\t\t\t\t").concat(_,'\n\t\t\t\t</div>\n\t\t\t\t<label class="modal-form__product-label">Enter main keyword for the product\n\t\t\t\t\t<input class="js-product-input modal-form__product-input" type="text" placeholder="for example, sylicon wine cup" required ').concat(f,'>\n\t\t\t\t</label>\n\t\t\t</div>\n\t\t\t<div class="modal-form__product-group">\n\t\t\t\t<label class="modal-form__product-label">Enter link to the similar product as a reference\n\t\t\t\t\t<input class="js-group-input modal-form__product-input" type="url" placeholder="https://..." ').concat(p,">\n\t\t\t\t</label>\n\t\t\t</div>\n\t\t")}r.innerHTML='\n\t\t<div class="modal-form__container modal-form__container_hidden">\n\t\t\t<div class="modal-form__chosen-list">\n\t\t\t\t<div class="modal-form__product-group">\n\t\t\t\t\t<h2 class="modal-form__product-title">Info</h2>\n\t\t\t\t\t<label class="modal-form__product-label">Enter your email address\n\t\t\t\t\t\t<input class="js-group-input modal-form__product-input" value="'.concat(e[0],'" type="email" placeholder="team@checkforpatent.com" required>\n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\t\t\t\t').concat(u,'\n\t\t\t</div>\n\t\t\t<button class="js-submit-btn modal-form__submit-btn">Submit and Pay ').concat(s," USD</button>\n\t\t</div>\n\t"),c(),r.addEventListener("click",function(t){var o=t.target,e=document.querySelector(".js-submit-btn");if(t.preventDefault(),o.closest(".js-product-button")){var r=o.closest(".modal-form__product-group");r.nextSibling.nextSibling.classList.add("modal-form__product-group_remove"),r.classList.add("modal-form__product-group_remove"),setTimeout(function(){var t;if(r.nextSibling.nextSibling.remove(),r.remove(),(s-=i)/i<n)switch(t=s/i){case 4:t*=18;break;case 3:t*=20;break;case 2:t*=22}e.innerHTML=t>i?"Submit and Pay ".concat(t," USD"):"Submit and Pay 24.99 USD"},500)}}),document.querySelector(".js-submit-btn").addEventListener("click",function(){if(l()){var t=d();console.log(t),a(this)}})}({value:n.value,count:n.count,inputValues:t})}})})}(e)}),o.addEventListener("click",function(t){var o=t.target;o.classList.contains("modal-form__products-input")&&(document.querySelectorAll(".modal-form__products-item").forEach(function(t){return t.classList.remove("modal-form__products-item_active")}),o.closest(".modal-form__products-item").classList.add("modal-form__products-item_active"))})};document.addEventListener("DOMContentLoaded",function(){s()})}]);