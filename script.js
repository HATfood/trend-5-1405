const months=["فروردین","اردیبهشت","خرداد","تیر","مرداد"];
const categories=[
 {name:"چای خارجی",unit:"تن",companyShare:57.3,monthlyShares:[52.9,56.5,51.7,57.2,66],brands:["فامیلا","بلوط","کیمبال","هم‌خوان"],values:[[34,34,24,21,27],[36,39,33,41,42],[7,3,1,0,0],[53,112,70,60,120]],others:[116,146,119,92,98],monthTotals:[246,335,246,215,288],aggregateValues:[141,192,12,415],aggregateOthers:567,aggregateTotal:1327,color:"#087f8c",soft:"#d9f1ef"},
 {name:"چای ایرانی",unit:"تن",companyShare:73.4,monthlyShares:[74.5,78.2,69.2,74.4,68.8],brands:["بلوط","هم‌خوان"],values:[[20,48,30,17,19],[45,50,38,33,34]],others:[22,27,31,17,24],monthTotals:[87,125,99,68,77],aggregateValues:[135,199],aggregateOthers:121,aggregateTotal:455,color:"#1f9d78",soft:"#dcf5e9"},
 {name:"قهوه",unit:"تن",companyShare:3,monthlyShares:[2.3,3.6,4.1,5,3.1],brands:["بلوط"],values:[[1,3,3,3.6,5]],others:[99,122,90,84,86],monthTotals:[100,125,93,88,91],aggregateValues:[15],aggregateOthers:482,aggregateTotal:497,color:"#8a5a3b",soft:"#f2e4d8"},
 {name:"دمنوش",unit:"کیلوگرم",companyShare:74,monthlyShares:[59.3,71.4,75.9,77.2,80.9],brands:["فامیلا"],values:[[875,1876,2296,1516,1891]],others:[600,752,729,449,447],monthTotals:[1475,2628,3025,1965,2338],aggregateValues:[8454],aggregateOthers:2976,aggregateTotal:11430,color:"#6b5ca5",soft:"#e9e5f5"},
 {name:"ادویه",unit:"تن",companyShare:86.9,monthlyShares:[95.1,85.8,82.7,84.1,87.1],brands:["فامیلا","سانتین"],values:[[18,18,17,17,17],[20,19,17,16,17]],others:[2,6,7,6,5],monthTotals:[40,44,41,40,40],aggregateValues:[88,90],aggregateOthers:27,aggregateTotal:205,color:"#d97706",soft:"#fff0d0"},
 {name:"نمک",unit:"تن",companyShare:38.2,monthlyShares:[37.8,33.5,35.9,39.1,44.5],brands:["سانتین"],values:[[400,429,443,452,561]],others:[657,849,790,705,699],monthTotals:[1056,1278,1224,1157,1260],aggregateValues:[2285],aggregateOthers:3690,aggregateTotal:5976,color:"#2563a8",soft:"#dcecf9"}
];
const fa=n=>new Intl.NumberFormat("fa-IR",{maximumFractionDigits:1}).format(n);
const sum=a=>a.reduce((x,y)=>x+y,0);
const pct=(now,prev)=>prev===0?null:(now-prev)/prev*100;
const el=id=>document.getElementById(id);
let active=0;
const passwordHash="00a9343f048bf05f68d6379512d4eade08b21545a8e4bd7f684cd2241a8baa89";

async function sha256(value){
 const bytes=new TextEncoder().encode(value);
 const digest=await crypto.subtle.digest("SHA-256",bytes);
 return Array.from(new Uint8Array(digest)).map(byte=>byte.toString(16).padStart(2,"0")).join("");
}
function unlockDashboard(){
 document.body.classList.remove("locked");
 el("login-gate").classList.add("hidden");
 el("dashboard").setAttribute("aria-hidden","false");
 try{sessionStorage.setItem("hat-dashboard-unlocked","1")}catch(error){}
}
function setupLogin(){
 try{if(sessionStorage.getItem("hat-dashboard-unlocked")==="1"){unlockDashboard();return}}catch(error){}
 const form=el("login-form");
 const input=el("login-password");
 const errorBox=el("login-error");
 form.addEventListener("submit",async event=>{
  event.preventDefault();
  const button=form.querySelector("button");
  button.disabled=true;
  errorBox.textContent="";
  try{
   if(await sha256(input.value)===passwordHash){unlockDashboard();input.value="";return}
   errorBox.textContent="رمز واردشده صحیح نیست.";
  }catch(error){
   errorBox.textContent="امکان بررسی رمز در این مرورگر وجود ندارد.";
  }finally{
   button.disabled=false;
  }
  form.classList.remove("shake");
  void form.offsetWidth;
  form.classList.add("shake");
  input.select();
 });
}

function panelHead(number,title,subtitle,unit){
 return '<div class="panel-head"><div><span class="section-no">'+number+'</span><div><h2>'+title+'</h2><small>'+subtitle+'</small></div></div>'+(unit?'<span class="unit">'+unit+'</span>':'')+'</div>';
}
function renderTabs(){
 el("tabs").innerHTML=categories.map((c,i)=>'<button type="button" data-index="'+i+'" class="'+(i===active?'active':'')+'" style="'+(i===active?'--accent:'+c.color:'')+'"><span>'+c.name+'</span><small>'+fa(c.companyShare)+'٪ سهم شرکت</small></button>').join("");
 el("tabs").querySelectorAll("button").forEach(button=>button.addEventListener("click",()=>{active=Number(button.dataset.index);render();}));
}
function render(){
 const cat=categories[active];
 const ownMonthly=months.map((_,i)=>cat.values.reduce((s,v)=>s+v[i],0));
 const grandCompany=sum(cat.aggregateValues);
 const bestIndex=cat.monthTotals.indexOf(Math.max(...cat.monthTotals));
 const max=Math.max(...ownMonthly,1);
 const columnMaxes=cat.values.map(v=>Math.max(...v));
 renderTabs();
 el("kpis").innerHTML='<article><span>فروش تجمعی گروه</span><strong>'+fa(cat.aggregateTotal)+'</strong><small>'+cat.unit+' در پنج ماه</small></article><article><span>فروش برندهای شرکت</span><strong>'+fa(grandCompany)+'</strong><small>'+cat.unit+'</small></article><article><span>ماه اوج فروش گروه</span><strong>'+months[bestIndex]+'</strong><small>'+fa(cat.monthTotals[bestIndex])+' '+cat.unit+'</small></article><article class="accent-card" style="background:'+cat.color+'"><span>سهم هستی آرین</span><strong>'+fa(cat.companyShare)+'٪</strong><small>از گروه '+cat.name+'</small></article>';
 const bars=ownMonthly.map((v,i)=>{
  const change=i?pct(v,ownMonthly[i-1]):null;
  const delta=change===null?'<span class="delta neutral">ماه پایه</span>':'<span class="delta '+(change>=0?'up':'down')+'"><i>'+(change>=0?'▲':'▼')+'</i>'+fa(Math.abs(change))+'٪</span>';
  return '<div class="bar-item"><div class="value-box"><b>'+fa(v)+'</b><small>'+cat.unit+'</small></div><div class="bar-track"><span style="height:'+Math.max(6,v/max*100)+'%;background:'+cat.color+'"></span></div><strong class="month-name">'+months[i]+'</strong>'+delta+'</div>';
 }).join("");
 const summary=months.slice(1).map((m,i)=>{
  const change=pct(ownMonthly[i+1],ownMonthly[i]);
  return '<div class="'+(change>=0?'positive':'negative')+'"><span>'+months[i]+' ← '+m+'</span><b>'+(change>=0?'+':'−')+fa(Math.abs(change))+'٪</b><small>'+(change>=0?'رشد فروش':'کاهش فروش')+'</small></div>';
 }).join("");
 el("trend-panel").innerHTML=panelHead("۰۱","روند فروش برندهای شرکت","مجموع برندهای هستی آرین در هر ماه",cat.unit)+'<div class="bar-chart" aria-label="روند فروش '+cat.name+'">'+bars+'</div><div class="trend-summary">'+summary+'</div>';
 el("share-panel").innerHTML=panelHead("۰۲","ترکیب فروش تجمعی","بر اساس اعداد مرجع پنج‌ماهه","")+'<div class="donut" style="background:conic-gradient('+cat.color+' '+cat.companyShare+'%,#e9ece8 0)"><div><strong>'+fa(cat.companyShare)+'٪</strong><span>سهم هستی آرین</span></div></div><div class="legend"><span><i style="background:'+cat.color+'"></i>هستی آرین <b>'+fa(grandCompany)+' '+cat.unit+'</b></span><span><i></i>سایر برندها <b>'+fa(cat.aggregateOthers)+' '+cat.unit+'</b></span></div>';
 const rows=months.map((m,i)=>{
  const change=i?pct(ownMonthly[i],ownMonthly[i-1]):null;
  const brandCells=cat.values.map((v,j)=>'<td><div class="cell-bar" style="--fill:'+v[i]/columnMaxes[j]*100+'%;--bar:'+cat.soft+'"><span>'+fa(v[i])+'</span></div></td>').join("");
  const delta=change===null?'<span class="table-delta neutral">پایه</span>':'<span class="table-delta '+(change>=0?'up':'down')+'">'+(change>=0?'▲':'▼')+' '+fa(Math.abs(change))+'٪</span>';
  return '<tr><td><b>'+m+'</b></td>'+brandCells+'<td><b>'+fa(ownMonthly[i])+'</b></td><td>'+fa(cat.others[i])+'</td><td><b>'+fa(cat.monthTotals[i])+'</b></td><td><span class="share-pill" style="color:'+cat.color+';background:'+cat.soft+'">'+fa(cat.monthlyShares[i])+'٪</span></td><td>'+delta+'</td></tr>';
 }).join("");
 const headers=cat.brands.map(b=>'<th>'+b+'</th>').join("");
 const aggregateCells=cat.aggregateValues.map(v=>'<td>'+fa(v)+'</td>').join("");
 el("table-panel").innerHTML=panelHead("۰۳","مقایسه عملکرد ماهانه","نوار داخل هر سلول، شدت فروش همان برند را در ماه‌های مختلف نشان می‌دهد.","همه اعداد: "+cat.unit)+'<div class="table-scroll"><table><thead><tr><th>ماه</th>'+headers+'<th>جمع شرکت</th><th>سایر برندها</th><th>کل گروه</th><th>سهم شرکت</th><th>تغییر شرکت</th></tr></thead><tbody>'+rows+'<tr class="total-row"><td>۱۴۰۵ تا کنون</td>'+aggregateCells+'<td>'+fa(grandCompany)+'</td><td>'+fa(cat.aggregateOthers)+'</td><td>'+fa(cat.aggregateTotal)+'</td><td>'+fa(cat.companyShare)+'٪</td><td>—</td></tr></tbody></table></div>';
 el("footer-unit").textContent="واحد این بخش: "+cat.unit;
}
render();
setupLogin();
