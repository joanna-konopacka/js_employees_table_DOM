function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);if("Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(t,n)}}(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var n=document.createElement("form"),r=document.querySelector("body");function a(e,t,n,a){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",i=document.createElement("div");i.className="notification ".concat(o),i.dataset.qa="notification",i.style.top="".concat(e,"px"),i.style.right="".concat(t,"px"),i.innerHTML='\n    <h2 class="title">'.concat(n,"</h2>\n    <p>").concat(a,"</p>\n  "),r.append(i),setTimeout(function(){i.hidden=!0},2e3)}function o(e){return e.name.length<4?(a(500,10,"Error!","Something went wrong!<br> Name field cannot be empty! Or less then 4 letters!","error"),!1):e.position?!(18>+e.age||+e.age>90)||(a(500,10,"Error!","Something went wrong!<br> Age must be more 18 & less 90","error"),!1):(a(500,10,"Error!","Something went wrong!<br> Position field cannot be empty!","error"),!1)}n.className="new-employee-form",n.action="#",n.method="post",n.innerHTML='\n  <label>Name: <input data-qa="name" name="name" type="text"></label>\n  <label>Position: <input\n    data-qa="position" name="position" type="text"></label>\n  <label>Office: <select data-qa="office" name="office">\n    <option>Tokyo</option>\n    <option>Singapore</option>\n    <option>London</option>\n    <option>New York</option>\n    <option>Edinburgh</option>\n    <option>San Francisco</option>\n    </select>\n  </label>\n  <label>Age: <input\n    data-qa="age" name="age" type="number"></label>\n  <label>Salary: <input data-qa="salary" name="salary" type="number"></label>\n  <button type="submit">Save to table</button>\n',r.append(n);var i=document.querySelector("tbody");function l(e){return+e.slice(1).split(",").join("")}n.addEventListener("submit",function(e){e.preventDefault();var t=Object.fromEntries(new FormData(n).entries()),r=document.createElement("tr"),l=Number(t.salary).toLocaleString("en-US");r.innerHTML="\n    <td>".concat(t.name,"</td>\n    <td>").concat(t.position,"</td>\n    <td>").concat(t.office,"</td>\n    <td>").concat(t.age,"</td>\n    <td>").concat("$"+l,"</td>\n  "),!0===o(t)?(a(500,10,"Success!","Good!\n Employee has been added!","success"),i.append(r),n.reset()):o(t)}),addEventListener("click",function(e){var n=document.querySelector("thead").children[0].children,r=document.querySelector("tfoot"),a=t(n).findIndex(function(t){return t.innerText===e.target.innerText&&!r.contains(e.target)});if(-1!==a){var o=!0,i=!1,c=void 0;try{for(var u,d,s=n[Symbol.iterator]();!(o=(d=s.next()).done);o=!0){var m=d.value;m.hasAttribute("data-status")&&m!==n[a]&&m.removeAttribute("data-status")}}catch(e){i=!0,c=e}finally{try{o||null==s.return||s.return()}finally{if(i)throw c}}"on"===n[a].dataset.status?(n[a].dataset.status="off",u="down"):(n[a].dataset.status="on",u="up"),function(e,n,r){var a=t(e.children).sort(function(e,t){if(4===n){var a=l(e.children[n].innerText),o=l(t.children[n].innerText);return"down"===r?o-a:a-o}var i=e.children[n].innerText,c=t.children[n].innerText;return"down"===r?c.localeCompare(i):i.localeCompare(c)});e.append.apply(e,t(a))}(document.querySelector("tbody"),a,u)}}),addEventListener("click",function(e){var t=document.querySelector("tbody");if(t.contains(e.target)){var n=!0,r=!1,a=void 0;try{for(var o,i=t.children[Symbol.iterator]();!(n=(o=i.next()).done);n=!0){var l=o.value;l.classList.contains("active")&&l.classList.remove("active")}}catch(e){r=!0,a=e}finally{try{n||null==i.return||i.return()}finally{if(r)throw a}}e.target.parentElement.className="active"}});var c=null;addEventListener("dblclick",function(e){if(document.querySelector("tbody").contains(e.target)){document.querySelector(".cell-input")&&(document.querySelector(".cell-input").parentElement.innerText=c.innerText);var n=t(e.target.parentElement.children).findIndex(function(t){return t===e.target}),r=e.target;c=e.target.cloneNode(!0),r.innerHTML='<input\n    class="cell-input" name="data" type="text" value="">',n>2&&(r.innerHTML='<input\n      class="cell-input" name="data" type="number" value="">');var a=document.querySelector(".cell-input");a.addEventListener("keypress",function(e){if("Enter"===e.key){if(0===e.target.value.length&&(r.innerText=c.innerText),0===n&&e.target.value.length<4||3===n&&(18>Number(e.target.value)||Number(e.target.value)>90)){a.reset();return}if(r.innerText=e.target.value,4===n){var t=Number(e.target.value).toLocaleString("en-US");r.innerText="$".concat(t)}}})}});//# sourceMappingURL=index.7e74c61b.js.map

//# sourceMappingURL=index.7e74c61b.js.map
