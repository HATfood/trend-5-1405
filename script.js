const months=["فروردین","اردیبهشت","خرداد","تیر","مرداد","شهریور","مهر"];
const categories=[
 {name:"چای خارجی",unit:"تن",companyShare:57.2,monthlyShares:[53.1,56.6,51.9,55.9,64.4,58.3,59.6],brands:["فامیلا","بلوط","کیمبال","هم‌خوان"],values:[[33.739229,34.20713,23.933406,21.395844,28.056483,41.842749,13.494651045],[36.24935,39.086734,32.902813,41.574811,43.229611,40.871179,15.194621],[7.07819,3.39951,0.837586,0.381446,0.258902,0.162152,0.05155],[53.29034529,111.96444485,69.8288282,60.17751621,120.66434798,70.48912692,36.81883512]],others:[115.1590908,144.38502276,118.17420667,97.6190222,106.03050332,109.72223728,44.47075622],monthTotals:[245.51620509,333.04284161,245.67683987,221.14863941,298.2398473,263.0874442,110.030413385],aggregateValues:[196.669492045,249.109119,12.169336,523.23344457],aggregateOthers:735.56083925,aggregateTotal:1716.742230865,topBrands:{month:[{name:"هم‌خوان",value:36.81883512,share:33.4624},{name:"شهرزاد",value:30.16910516,share:27.4189},{name:"بلوط",value:15.194621,share:13.8095}],year:[{name:"هم‌خوان",value:523.23344457,share:30.4783},{name:"شهرزاد",value:354.25490216,share:20.6353},{name:"بلوط",value:249.109119,share:14.5106}]},color:"#087f8c",soft:"#d9f1ef"},
 {name:"چای ایرانی",unit:"تن",companyShare:72.7,monthlyShares:[74.5,78.2,69.1,73.8,68.4,71,69.7],brands:["بلوط","هم‌خوان"],values:[[19.946842,47.815535,30.222093,17.49725,19.600423,25.767098,9.029687],[44.60405,49.55015,38.1764,32.97525,34.4021525,24.4334,11.5756]],others:[22.0934,27.159,30.52015,17.90155,24.99595,20.47545,8.9599],monthTotals:[86.644292,124.524685,98.918643,68.37405,78.9985255,70.675948,29.565187],aggregateValues:[169.878928,235.7170025],aggregateOthers:152.1054,aggregateTotal:557.7013305,topBrands:{month:[{name:"هم‌خوان",value:11.5756,share:39.1528},{name:"بلوط",value:9.029687,share:30.5416},{name:"رفاه لاهیجان",value:6.56365,share:22.2006}],year:[{name:"هم‌خوان",value:235.7170025,share:42.2658},{name:"بلوط",value:169.878928,share:30.4606},{name:"رفاه لاهیجان",value:91.1669,share:16.3469}]},color:"#1f9d78",soft:"#dcf5e9"},
 {name:"قهوه",unit:"تن",companyShare:4.7,monthlyShares:[1.1,2.3,3.6,3.9,4.7,9.6,11.5],brands:["بلوط"],values:[[1.10419303,2.9050626,3.36455878,3.58991674,4.65321235,10.7184353,5.03243196]],others:[99.23090216,122.23658528,89.62675771,88.17292336,94.10862074,100.62199709,38.60609365],monthTotals:[100.33509519,125.14164788,92.99131649,91.7628401,98.76183309,111.34043239,43.63852561],aggregateValues:[31.36781076],aggregateOthers:632.60387999,aggregateTotal:663.97169075,topBrands:{month:[{name:"نستله",value:10.494218,share:24.0481},{name:"نسکافه",value:10.41895479,share:23.8756},{name:"مولتی‌کافه",value:9.02178506,share:20.6739}],year:[{name:"مولتی‌کافه",value:205.95233066,share:31.0182},{name:"نسکافه",value:150.22595418,share:22.6254},{name:"نستله",value:138.539769,share:20.8653}]},color:"#8a5a3b",soft:"#f2e4d8"},
 {name:"دمنوش",unit:"کیلوگرم",companyShare:74.7,monthlyShares:[59.3,71.3,75.9,76.2,80.6,78.6,78.2],brands:["فامیلا"],values:[[874.592,1871.656,2296.345,1517.712,1966.892,1639.884,645.674]],others:[599.934,751.598,729.04,474.235,473.838,447.505,180.379],monthTotals:[1474.526,2623.254,3025.385,1991.947,2440.73,2087.389,826.053],aggregateValues:[10812.755],aggregateOthers:3656.529,aggregateTotal:14469.284,topBrands:{month:[{name:"فامیلا",value:645.674,share:78.1637},{name:"مهر گیاه",value:180.339,share:21.8314},{name:"گلستان",value:0.04,share:0.0048}],year:[{name:"فامیلا",value:10812.755,share:74.729},{name:"مهر گیاه",value:3656.266,share:25.2692},{name:"گلستان",value:0.263,share:0.0018}]},color:"#6b5ca5",soft:"#e9e5f5"},
 {name:"ادویه",unit:"تن",companyShare:87,monthlyShares:[95.1,85.8,82.7,83.2,86.2,88.2,88.9],brands:["فامیلا","سانتین"],values:[[18.26151,18.20864,17.02268,17.69158,17.93262,19.30909,7.39217],[20.01765,19.09196,17.20287,16.87085,18.36745,19.80236,7.74674]],others:[1.96148536,6.19391632,7.14349576,6.95809386,5.79871722,5.2200216,1.89006692],monthTotals:[40.24064536,43.49451632,41.36904576,41.52052386,42.09878722,44.3314716,17.02897692],aggregateValues:[115.81829,119.09988],aggregateOthers:35.16579704,aggregateTotal:270.08396704,topBrands:{month:[{name:"سانتین",value:7.74674,share:45.4915},{name:"فامیلا",value:7.39217,share:43.4094},{name:"گلستان",value:1.20746,share:7.0906}],year:[{name:"سانتین",value:119.09988,share:44.0974},{name:"فامیلا",value:115.81829,share:42.8823},{name:"گلستان",value:22.878545,share:8.4709}]},color:"#d97706",soft:"#fff0d0"},
 {name:"نمک",unit:"تن",companyShare:40.9,monthlyShares:[37.8,33.6,36.2,38.2,43.6,49.9,52.4],brands:["سانتین"],values:[[399.5293326,428.62183321,443.28654253,459.70801804,587.43522005,683.51725903,272.2754568]],others:[656.56269453,848.62117664,780.78567749,745.14472761,758.47756422,685.89845339,247.0093227],monthTotals:[1056.09202713,1277.24300985,1224.07222002,1204.85274565,1345.91278427,1369.41571242,519.2847795],aggregateValues:[3274.37366226],aggregateOthers:4722.49961658,aggregateTotal:7996.87327884,topBrands:{month:[{name:"سانتین",value:272.2754568,share:52.4328},{name:"تابان",value:126.76165,share:24.4108},{name:"فردینه",value:77.72891478,share:14.9685}],year:[{name:"سانتین",value:3274.37366226,share:40.9457},{name:"تابان",value:2357.90675,share:29.4854},{name:"فردینه",value:1630.26082956,share:20.3862}]},color:"#2563a8",soft:"#dcecf9"}
];
const categoryImages={
 "چای خارجی":"assets/chai-khareji.png",
 "چای ایرانی":"assets/chai-irani.png",
 "قهوه":"assets/ghahve.png",
 "دمنوش":"assets/damnoosh.png",
 "ادویه":"assets/advieh.png",
 "نمک":"assets/namak.png"
};
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

function openReferenceImage(src,alt){
 el("lightbox-image").src=src;
 el("lightbox-image").alt=alt;
 el("image-lightbox").classList.add("open");
 el("image-lightbox").setAttribute("aria-hidden","false");
 document.body.classList.add("lightbox-open");
 el("lightbox-close").focus();
}
function closeReferenceImage(){
 el("image-lightbox").classList.remove("open");
 el("image-lightbox").setAttribute("aria-hidden","true");
 document.body.classList.remove("lightbox-open");
}
function setupLightbox(){
 el("lightbox-close").addEventListener("click",closeReferenceImage);
 el("image-lightbox").addEventListener("click",event=>{if(event.target===el("image-lightbox"))closeReferenceImage()});
 document.addEventListener("keydown",event=>{if(event.key==="Escape"&&el("image-lightbox").classList.contains("open"))closeReferenceImage()});
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
 el("kpis").innerHTML='<article><span>فروش تجمعی گروه</span><strong>'+fa(cat.aggregateTotal)+'</strong><small>'+cat.unit+' از ابتدای ۱۴۰۵</small></article><article><span>فروش برندهای شرکت</span><strong>'+fa(grandCompany)+'</strong><small>'+cat.unit+'</small></article><article><span>ماه اوج فروش گروه</span><strong>'+months[bestIndex]+'</strong><small>'+fa(cat.monthTotals[bestIndex])+' '+cat.unit+'</small></article><article class="accent-card" style="background:'+cat.color+'"><span>سهم هستی آرین</span><strong>'+fa(cat.companyShare)+'٪</strong><small>از گروه '+cat.name+'</small></article>';
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
 const leaderboards='<div class="market-leaders"><div class="leaders-head"><b>۳ برند برتر گروه</b><small>سهم هر برند از کل فروش گروه</small></div><div class="leaderboards">'+renderLeaders("مهر","تا ۱۰ مهر",cat.topBrands.month)+renderLeaders("کل سال","۱۴۰۵ تا کنون",cat.topBrands.year)+'</div></div>';
 el("share-panel").innerHTML=panelHead("۰۲","ترکیب فروش تجمعی","بر اساس اعداد مرجع تا ۱۰ مهر ۱۴۰۵","")+'<div class="donut" style="background:conic-gradient('+cat.color+' '+cat.companyShare+'%,#e9ece8 0)"><div><strong>'+fa(cat.companyShare)+'٪</strong><span>سهم هستی آرین</span></div></div><div class="legend"><span><i style="background:'+cat.color+'"></i>هستی آرین <b>'+fa(grandCompany)+' '+cat.unit+'</b></span><span><i></i>سایر برندها <b>'+fa(cat.aggregateOthers)+' '+cat.unit+'</b></span></div>'+leaderboards;
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
 const imageSrc=categoryImages[cat.name];
 el("reference-image").innerHTML='<button type="button" aria-label="نمایش تمام‌صفحه نمودار '+cat.name+'"><img src="'+imageSrc+'" alt="نمودار '+cat.name+'"></button>';
 el("reference-image").querySelector("button").addEventListener("click",()=>openReferenceImage(imageSrc,"نمودار "+cat.name));
}
setupLightbox();
render();
setupLogin();
