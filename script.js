const yearEl=document.getElementById('year');if(yearEl){yearEl.textContent=new Date().getFullYear()}
const phone='05068715322';
['callBtn','fabCall'].forEach(id=>{const el=document.getElementById(id);if(el){el.setAttribute('href',`tel:${phone}`)}});
const schedule='かねひで大宮 10/29〜11/2';
const scheduleEl=document.getElementById('scheduleText');if(scheduleEl){scheduleEl.textContent=schedule}
