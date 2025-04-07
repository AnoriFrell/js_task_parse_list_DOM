var r=document.querySelector("ul");Array.from(r.children).sort(function(r,e){return Number(e.dataset.salary.replaceAll("$","").replaceAll(",",""))-Number(r.dataset.salary.replaceAll("$","").replaceAll(",",""))}).forEach(function(e){return r.appendChild(e)});
//# sourceMappingURL=index.657badde.js.map
