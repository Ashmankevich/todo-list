const e=document.getElementById("root"),t=document.createElement("div");t.className="container",e.append(t);const n=document.createElement("div");n.className="row",t.append(n);const c=document.createElement("div");c.className="wrapper main-items",n.append(c);const o=document.createElement("button");o.className="btn delete-all",o.textContent="Delete All",c.append(o);const a=document.createElement("button");a.className="btn delete-last",a.textContent="Delete Last",c.append(a);const d=document.createElement("input");d.className="input-enter-todo",d.setAttribute("placeholder","Enter todo..."),c.append(d);const s=document.createElement("button");s.className="btn add",s.textContent="Add",c.append(s);const l=document.createElement("div");l.className="wrapper addition-items",n.append(l);const r=document.createElement("div");r.className="all-count",l.append(r);const i=document.createElement("p");i.className="text-count-name",i.textContent="All",r.append(i);const m=document.createElement("p");m.className="text-all-count",m.textContent="0",r.append(m);const u=document.createElement("div");u.className="completed",l.append(u);const p=document.createElement("p");p.className="text-completed-name",p.textContent="Completed",u.append(p);const E=document.createElement("p");E.className="text-all-completed",E.textContent="0",u.append(E);const b=document.createElement("button");b.className="btn hide-completed",b.textContent="Hide",l.append(b);const y=document.createElement("button");y.className="btn show-completed",y.textContent="Show",l.append(y);const v=document.createElement("div");v.className="wrap-search",l.append(v);const f=document.createElement("div");f.className="gg-search",v.append(f);const h=document.createElement("input");h.className="input-search-todo",l.append(h);const k=document.createElement("div");k.className="todo-close",k.classList.add("btn-search"),l.append(k);const N=document.createElement("span");N.className="btn-close",N.classList.add("icon"),k.append(N);const g=document.createElement("ul");g.className="wrapper list-todo",t.append(g);const L=document.createElement("div");L.id="confirm-wrap-container",t.append(L);const x=document.createElement("div");x.id="confirm-wrap",L.append(x);const w=document.createElement("p");w.id="confirm-message",x.append(w);const C=document.createElement("button");C.type="button",C.className="button-ok",C.name="ok",C.textContent="Ok",x.append(C);const A=document.createElement("button");A.type="button",A.className="button-cancel",A.name="cancel",A.textContent="Cancel",x.append(A);let S=document.createElement("div");S.id="alert-wrap-container",t.append(S);let q=document.createElement("div");q.id="alert-wrap",S.append(q);const I=document.createElement("div");I.className="todo-close",q.append(I);const T=document.createElement("span");T.className="btn-close",T.classList.add("alert"),I.append(T);let M=document.createElement("p");function B(){let e=[];for(let t of document.querySelectorAll(".item-complete"))e.push(t);E.textContent=e.length,0==E.textContent?(b.setAttribute("disabled",!0),y.setAttribute("disabled",!0)):(b.removeAttribute("disabled"),y.removeAttribute("disabled"))}function D(){m.textContent=R.length,0==m.textContent?(a.setAttribute("disabled",!1),o.setAttribute("disabled",!1),h.setAttribute("disabled",!1)):(a.removeAttribute("disabled"),o.removeAttribute("disabled"),h.removeAttribute("disabled"))}function H(){let e=new Date,t=e.getFullYear(),n=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],c=e.getDate(),o=e.getHours(),a=e.getMinutes();return c<10&&(c=" "+c),o<10&&(o="0"+o),a<10&&(a="0"+a),c+" "+n+" "+t+" - "+o+":"+a}M.id="alert-message",q.append(M);const J=document.getElementById("confirm-wrap-container");function O(){let e=document.createElement("div");e.id="cover-div",document.body.style.overflowY="hidden",document.body.append(e)}function Y(){document.getElementById("cover-div").remove(),document.body.style.overflowY="",J.style.display="none"}function F(e){O();let t=document.getElementById("confirm-message"),n=document.querySelector(".button-ok"),c=document.querySelector(".button-cancel");t.innerHTML=e,c.addEventListener("click",(()=>Y())),n.onkeydown=function(e){if("Tab"==e.key&&e.shiftKey)return c.focus(),!1},c.onkeydown=function(e){if("Tab"==e.key&&!e.shiftKey)return n.focus(),!1},J.style.display="block"}const K=document.getElementById("alert-wrap-container");function j(){document.getElementById("cover-div").remove(),document.body.style.overflowY="",K.style.display="none"}function z(e){O();let t=document.getElementById("alert-message"),n=document.querySelector(".btn-close");t.innerHTML=e,n.addEventListener("click",(()=>j())),K.addEventListener("click",(()=>j())),K.style.display="block"}class G{constructor(){this.description=d.value,this.isChecked=!1,this.id=Date.now(),this.date=H()}}function P(){!d.value.trim()?z("If you want to continue, please enter some todo"):(R.push(new G),U(),d.value="",Q(),D())}function Q(){g.innerHTML="";[...R.filter((e=>!1===e.isChecked)),...R.filter((e=>!0===e.isChecked))].forEach((e=>function(e){const t=document.createElement("li");t.className="wrapper todo-item",t.id=e.id,g.append(t);const n=document.createElement("input");n.className="todo-input",n.type="checkbox",n.checked=e.isChecked;const c=document.createElement("label");c.className="custom-checkbox",e.isChecked&&t.classList.toggle("item-complete"),t.append(c),c.append(n);let o=document.createElement("span");o.className="task-desc",o.textContent=e.description,c.append(o),e.isChecked&&o.classList.toggle("text-complete");const a=document.createElement("div");a.className="wrapper todo-close",t.append(a);const d=document.createElement("div");d.className="todo-close",a.append(d);const s=document.createElement("span");s.className="btn-close",d.append(s);const l=document.createElement("div");l.className="todo-date",a.append(l),l.append(e.date)}(e)))}let R;d.addEventListener("keydown",(function(e){"Enter"==e.code&&P()}));const U=()=>localStorage.setItem("allTasks",JSON.stringify(R));window.addEventListener("load",(function(){localStorage.allTasks===R?R=[]:(R=JSON.parse(localStorage.getItem("allTasks")),Q(),D(),B())})),s.addEventListener("click",P),o.addEventListener("click",(function(){F("You are going to delete all tasks. Are you sure?"),document.querySelector(".button-ok").addEventListener("click",(()=>{R.splice(0),g.innerHTML="",U(),D(),B(),Y()}))})),a.addEventListener("click",(function(){R.pop(),Q(),D(),B(),U()})),g.addEventListener("click",(function(e){if("btn-close"!=e.target.className)return;let t=e.target.closest(".todo-item"),n=Number(t.getAttribute("id"));t&&t.classList.add("animation"),setTimeout((()=>{t.remove(),R.forEach(((e,t)=>{n===e.id&&R.splice(t,1)})),U(),D(),B()}),500)})),g.addEventListener("change",(function(e){if("todo-input"!=e.target.className)return;let t=e.target.closest(".todo-item"),n=Number(t.getAttribute("id")),c=t.querySelector(".task-desc");e.target.checked?(t.classList.add("item-complete"),c.classList.add("text-complete")):(t.classList.remove("item-complete"),c.classList.remove("text-complete")),R.forEach((e=>{n===e.id&&(e.isChecked=!e.isChecked)})),B(),Q(),U()})),b.addEventListener("click",(function(){for(let e of document.querySelectorAll(".item-complete"))e.style.display="none"})),y.addEventListener("click",(function(){for(let e of document.querySelectorAll(".item-complete"))e.style.display="flex"})),h.addEventListener("input",(function(){let e=this.value.trim().toLowerCase(),t=document.querySelectorAll(".todo-item"),n=document.querySelector(".btn-search");t.forEach((t=>{-1==t.textContent.toLowerCase().indexOf(e)?t.style.display="none":t.style.display="flex"})),n.style.display=""!=e?"block":"none"})),k.addEventListener("click",(function(){h.value&&(h.value=" "),document.querySelectorAll(".todo-item").forEach((e=>e.style.display="flex")),document.querySelector(".btn-search").style.display="none"}));
//# sourceMappingURL=index.e093d083.js.map
