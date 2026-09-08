const months=["فروردین","اردیبهشت","خرداد","تیر","مرداد","شهریور"];
const categories=[
 {name:"چای خارجی",unit:"تن",companyShare:57.1,monthlyShares:[52.9,56.5,51.7,57.2,66.1,55.4],brands:["فامیلا","بلوط","کیمبال","هم‌خوان"],values:[[34,34,24,21,27,18.825122],[36,39,33,41,42,19.5989],[7,3,1,0,0,0.074478],[53,112,70,60,120,25.08185148]],others:[116,146,119,92,98,51.18684134],monthTotals:[246,335,246,215,288,114.76719282],aggregateValues:[160.054304,211.655234,12.0303,440.9831382],aggregateOthers:619.9511584,aggregateTotal:1444.6741346,topBrands:{month:[{name:"شهرزاد",value:28.61844868,share:24.9361},{name:"هم‌خوان",value:25.08185148,share:21.8545},{name:"بلوط",value:19.5989,share:17.0771}],year:[{name:"هم‌خوان",value:440.9831382,share:30.5247},{name:"شهرزاد",value:280.8817432,share:19.4426},{name:"بلوط",value:211.655234,share:14.6507}]},color:"#087f8c",soft:"#d9f1ef"},
 {name:"چای ایرانی",unit:"تن",companyShare:73.3,monthlyShares:[74.5,78.2,69.2,74.4,68.8,73.4],brands:["بلوط","هم‌خوان"],values:[[20,48,30,17,19,12.737073],[45,50,38,33,34,9.8487]],others:[22,27,31,17,24,8.182],monthTotals:[87,125,99,68,77,30.767773],aggregateValues:[147.857418,209.4262025],aggregateOthers:129.9026,aggregateTotal:487.1862205,topBrands:{month:[{name:"بلوط",value:12.737073,share:41.3974},{name:"هم‌خوان",value:9.8487,share:32.0098},{name:"رفاه لاهیجان",value:4.3219,share:14.0468}],year:[{name:"هم‌خوان",value:209.4262025,share:42.9869},{name:"بلوط",value:147.857418,share:30.3493},{name:"رفاه لاهیجان",value:75.56705,share:15.5109}]},color:"#1f9d78",soft:"#dcf5e9"},
 {name:"قهوه",unit:"تن",companyShare:3.6,monthlyShares:[1.1,2.3,3.6,4.1,5,8.2],brands:["بلوط"],values:[[1,3,3,3.6,5,4.29646881]],others:[99,122,90,84,86,48.20646558],monthTotals:[100,125,93,88,91,52.50293439],aggregateValues:[19.90017098],aggregateOthers:531.81784095,aggregateTotal:551.71801193,topBrands:{month:[{name:"مولتی‌کافه",value:14.3004829,share:27.2375},{name:"نسکافه",value:11.41714835,share:21.7457},{name:"نستله",value:9.006706,share:17.1547}],year:[{name:"مولتی‌کافه",value:181.3532018,share:32.8706},{name:"نسکافه",value:124.69962177,share:22.6021},{name:"نستله",value:111.562326,share:20.2209}]},color:"#8a5a3b",soft:"#f2e4d8"},
 {name:"دمنوش",unit:"کیلوگرم",companyShare:74.4,monthlyShares:[59.3,71.4,75.9,77.2,80.9,79.5],brands:["فامیلا"],values:[[875,1876,2296,1516,1891,799.307]],others:[600,752,729,449,447,205.715],monthTotals:[1475,2628,3025,1965,2338,1005.022],aggregateValues:[9302.941],aggregateOthers:3192.793,aggregateTotal:12495.734,topBrands:{month:[{name:"فامیلا",value:799.307,share:79.5313},{name:"مهر گیاه",value:205.715,share:20.4687}],year:[{name:"فامیلا",value:9302.941,share:74.4489},{name:"مهر گیاه",value:3192.57,share:25.5493},{name:"گلستان",value:0.223,share:0.0018}]},color:"#6b5ca5",soft:"#e9e5f5"},
 {name:"ادویه",unit:"تن",companyShare:87.1,monthlyShares:[95.1,85.8,82.7,84.1,87.1,88],brands:["فامیلا","سانتین"],values:[[18,18,17,17,17,9.26183],[20,19,17,16,17,9.54478]],others:[2,6,7,6,5,2.56246906],monthTotals:[40,44,41,40,40,21.36907906],aggregateValues:[97.86785,100.00369],aggregateOthers:29.3782306,aggregateTotal:227.2497706,topBrands:{month:[{name:"سانتین",value:9.54478,share:44.6663},{name:"فامیلا",value:9.26183,share:43.3422},{name:"گلستان",value:1.641215,share:7.6803}],year:[{name:"سانتین",value:100.00369,share:44.0061},{name:"فامیلا",value:97.86785,share:43.0662},{name:"گلستان",value:18.759605,share:8.2551}]},color:"#d97706",soft:"#fff0d0"},
 {name:"نمک",unit:"تن",companyShare:39.2,monthlyShares:[37.8,33.5,35.9,39.1,44.5,48.1],brands:["سانتین"],values:[[400,429,443,452,561,317.62227708]],others:[657,849,790,705,699,343.33743713],monthTotals:[1056,1278,1224,1157,1260,660.95971421],aggregateValues:[2615.5936806],aggregateOthers:4050.37871862,aggregateTotal:6665.97239922,topBrands:{month:[{name:"سانتین",value:317.62227708,share:48.0547},{name:"تابان",value:171.35925,share:25.9258},{name:"فردینه",value:116.82975503,share:17.6758}],year:[{name:"سانتین",value:2615.5936806,share:39.238},{name:"تابان",value:2025.9934,share:30.3931},{name:"فردینه",value:1414.3911662,share:21.2181}]},color:"#2563a8",soft:"#dcecf9"}
];
const fa=n=>new Intl.NumberFormat("fa-IR",{maximumFractionDigits:1}).format(n);
const faShare=n=>n>0&&n<.1?"کمتر از ۰٫۱٪":fa(n)+"٪";
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
 el("kpis").innerHTML='<article><span>فروش تجمعی گروه</span><strong>'+fa(cat.aggregateTotal)+'</strong><small>'+cat.unit+' در ۶ ماه</small></article><article><span>فروش برندهای شرکت</span><strong>'+fa(grandCompany)+'</strong><small>'+cat.unit+'</small></article><article><span>ماه اوج فروش گروه</span><strong>'+months[bestIndex]+'</strong><small>'+fa(cat.monthTotals[bestIndex])+' '+cat.unit+'</small></article><article class="accent-card" style="background:'+cat.color+'"><span>سهم هستی آرین</span><strong>'+fa(cat.companyShare)+'٪</strong><small>از گروه '+cat.name+'</small></article>';
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
 const renderLeaders=(title,subtitle,items)=>'<section class="leaderboard"><h3>'+title+'<small>'+subtitle+'</small></h3><div>'+items.map((item,index)=>'<article><span class="rank">'+fa(index+1)+'</span><p><b>'+item.name+'</b><small>'+fa(item.value)+' '+cat.unit+'</small></p><strong>'+faShare(item.share)+'</strong></article>').join('')+'</div></section>';
 const leaderboards='<div class="market-leaders"><div class="leaders-head"><b>۳ برند برتر گروه</b><small>سهم هر برند از کل فروش گروه</small></div><div class="leaderboards">'+renderLeaders("شهریور","تا ۱۵ شهریور",cat.topBrands.month)+renderLeaders("کل سال","۱۴۰۵ تا کنون",cat.topBrands.year)+'</div></div>';
 el("share-panel").innerHTML=panelHead("۰۲","ترکیب فروش تجمعی","بر اساس اعداد مرجع ۶ ماهه تا ۱۵ شهریور","")+'<div class="donut" style="background:conic-gradient('+cat.color+' '+cat.companyShare+'%,#e9ece8 0)"><div><strong>'+fa(cat.companyShare)+'٪</strong><span>سهم هستی آرین</span></div></div><div class="legend"><span><i style="background:'+cat.color+'"></i>هستی آرین <b>'+fa(grandCompany)+' '+cat.unit+'</b></span><span><i></i>سایر برندها <b>'+fa(cat.aggregateOthers)+' '+cat.unit+'</b></span></div>'+leaderboards;
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
