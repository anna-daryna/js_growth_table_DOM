var e=document.querySelector(".field"),t=document.querySelector(".append-row"),n=document.querySelector(".remove-row"),l=document.querySelector(".append-column"),r=document.querySelector(".remove-column");function o(){var o=e.rows.length,c=e.rows[0].cells.length;t.disabled=o>=10,n.disabled=o<=2,l.disabled=c>=10,r.disabled=c<=2}t.addEventListener("click",function(){if(e.rows.length<10){for(var t=e.insertRow(),n=0;n<e.rows[0].cells.length;n++)t.insertCell().textContent="";o()}}),n.addEventListener("click",function(){e.rows.length>2&&(e.deleteRow(-1),o())}),l.addEventListener("click",function(){if(e.rows[0].cells.length<10){for(var t=0;t<e.rows.length;t++)e.rows[t].insertCell().textContent="";o()}}),r.addEventListener("click",function(){if(e.rows[0].cells.length>2){for(var t=0;t<e.rows.length;t++)e.rows[t].deleteCell(-1);o()}}),o();
//# sourceMappingURL=index.4d4d1434.js.map
