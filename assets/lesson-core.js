
var VIDEO_SRC=window.ALI_ASSET_BASE+'media/ali-marhab.mp4';
var SFX={"click": "data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjYwLjE2LjEwMAAAAAAAAAAAAAAA//s4wAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAADAAADYACAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMD///////////////////////////////////////////8AAAAATGF2YzYwLjMxAAAAAAAAAAAAAAAAJAUAAAAAAAAAA2APakscAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//s4xAAACEADb/QRgAHYqC97DIABaLZUNEQgAACqBl0sYD4Pg+fWH4ILBAEAQwfPiAEAfggcVLvuic/5QH4IAhWD7ygPg+D/4IO/g+D78Tgd8H///nIngAe7WJU4MzATBAABrAOJf/nOSFlnqJApp2ByH0YsHxKhIONaUGmSIQC9xkUSaDowP6JFKkyKUVjbiRqsosKCF6zY4lxtNHt5YqxxkD41TgYqksNmtV/mVXpKaWuu+Ln+qvn2a/j//8rJjp8cP8nLFuK678bfbaoAlZlmQBAACPSp//s4xAUCi2T1W9xUAAFYIeZQAJlYQLEQFZSqHQFvgWZma2mGv1KUoWaCg6AWBssXUSMFhZa+VrKXKFmddW28q9BWDvX5KvWpNhl2tfVZraLVfaYFg60RajxVf5V3ET+Gi0Gqdu8RFILChGwk+Jm5zkjco0tRKqeZw1T4DHhLb23KeXl8o4lZFGmraEjUpBhQcjjV23zlVOd6eWp4SNtGvTxTvh295rd7a2+jRIHSsKHg0oCmsiEwEg8R+WRVWlUJZL8VgYIFZZZZLOLKClllln//6yyyy2VD//s4xA2DxnT+0EAAZeAAADSAAAAEI///JrZZyggdlTlBA6I9bXxUUb/6xUW4ukxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq", "pop": "data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjYwLjE2LjEwMAAAAAAAAAAAAAAA//s4wAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAFAAAFEABVVVVVVVVVVVVVVVVVVVVVVVVVgICAgICAgICAgICAgICAgICAgICqqqqqqqqqqqqqqqqqqqqqqqqqqtXV1dXV1dXV1dXV1dXV1dXV1dXV//////////////////////////8AAAAATGF2YzYwLjMxAAAAAAAAAAAAAAAAJAU+AAAAAAAABRCVQB5gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//s4xAAACXUBWTSTgAGinC93HoAAgQALwAA9znPz1RGkFAABhULhtYB4BYOxLJzDGmGGavzz3+hhlee/M8z/mGGNqYZ/8wwzMMb/5n5hhhjKOEAQ9n4OBjghyjv5Q5B8/QJaALx/9/nU00ySQQA9k//jl273oexi4F3EqCFegyAsDqeD5RM4x9UUZVC9uMuRww0gqxuhI+nsY66fUdShSu8vKay/x82r33ul1cVB3P+ODJYKLP9F4NqYsJqjbrGpDFYW7ffKopi6FQuQAAAnjdpEAD/yx3Kd//s4xAcAC4hla/2DAAFkk2v8DIwoVMby8zCUACATk6n6tY089tp8LasJKb7bTOHqBXro8mEpQiGipw6SiUG2ihIJColGhpKEpIHrtp4VBY84NduOSuOLUsd2IfeDQ/iVqzrKglCAAJpfRtIgDCnwtwy7MeQyOhMsikjKto8QyUMHEr6kdJjBuS/lts3hV5szZZHkGci+9UBUMhQ6wSjXIHseyTeQjBYGhUkSoUp5F7cVc+dVhL9CFnd1esJKEbAN/9kaQAH/jljKndMsRxBa15LSNcKRoT0a//s4xA2ADDzXYawYa3GFL2YquCABZI2Z0jIBCS5w28raBl1qQUSsJmE2RjNe7qwZmI6VjVWY8muiqu3neqv0SMeJTAia6eUBQlvqYdMixplYiep7yp3tfkVMDVAAAhyIgAAZ0m5wueYBDIKW55ShmzCeFQA1lPijnO87z/+ZS1NqhjGqFIYzzPDDlQyloZ1KWZTSqy/UuUqI/81DI+/lXqyG36skxu3L1KlFb6lKVkylKxl39Kmt1YMSfiiK1QAAAAgIBAGDCIBAGAAIuBD16RkfgkREp7Ri//s4xA0ADGyRLbmxAAEjA2HbsiAAtE1gBsCxLq3hP52vax7tY5Tr9nU9cvfOedyVLK3zvFiACBk46zsQgQFHHAtPCJKVbVxoeB8uPPn3saVne70lyg4MggIHRKVusSAUF+smpcvkwkzelOBUBIoOpis6i1NaWdWRxFJMInVuyvqPSyGTvDrH654j+elYlfzp1QNHtnEp0rUFA6WUerDuJXQ0oKDAK4qqBQJh7LCCWT4xKxTL4wKInFlFmQuadpYu43KRJCRQETQXjK1pH+yyORkyhgoNHI////s4xBgDyaS4wiYYaYAAADSAAAAE/zVrUcjJlDAqGXekJCpEyAgmK//9bMVFW/xXiopVTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV", "ok": "data:audio/mpeg;base64,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", "no": "data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjYwLjE2LjEwMAAAAAAAAAAAAAAA//s4wAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAEAAAEOABmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmaZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzP////////////////////////////////8AAAAATGF2YzYwLjMxAAAAAAAAAAAAAAAAJAKuAAAAAAAABDhMkKTaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//s4xAAACtB/X1T0AAF9EC63HsAAAADoAAAKg0zrUb++5D8FsAhgqxMzrZ7+/rhPREd3d3/9BQGgKAFAaGX///8EBwDQPDHwQBAEwfB8HwfBAEAQBAEwfB8PwfrD9QIAhBAEAQd//u/3esH24ALNtnASAAAQA2KAAALwSJ0uVQpSNBpFMohaYIaSucduN69NOb+tc9Piw+07BkSRLMo5u5VdlqGZWLr6x/ayzPbSWgaQpkIsMA0FhYCAsDYWCp0Z/q5oXXv/8VErF61Lky0U6DklXYHvBqtM//s4xAaADITLVhmcAAGEMyyDMNAAxXKFZ39238dNBaNLRSOTWl6+ACKBmZOIyJpzTr+waFW5TaVu9LZQ5c/MZ2pZBMEwFRwVA2UgjO7NWzr98drGU3e54dq5Vccu95/////4VM8dZ/n/2u6qvyt5YSBi6bdvldJ78MkptVKYQnBVx6nkEwXRO2dJWPQyZf99//6mYvv/7N4wYn4SMJQcZTN0P//9Mkz5cBbwvZTEbJYeH///+cMTdNTILus3NP/////MCUNi4s00EGL7mioppoKObIkJAM9z//s4xAUADAh/e7zHgBFSlCvoww04NaVMw+DMoAehWuu9XGtZve97xPm+2BGCLjrJmEINE+xiAXygCPgJBfBnglAUwJEcEKXUGmI0FhmsxAqNIlmgJ5ENEhEJXAydEQNfO/VbthXDUq5H4qdABWgohOXg8Wk8ihMB4KjYxfG1JIjzi0iJoTCU5TEiVmzOG6xLWpzUebhLZz6TVdY2s46lNr0jEiinlXeLjEWFXbHhUNWDJXtCoNPER4s8lCv/levXACkSE5AZm4f/URV0cDKQxgTrMzwVGVs5//s4xAwDChSRKu1hA2DLA53Nh5hYhyBmswZE5y0oKgyFAXDUuiUOWLXJkY9X/z//P/1alEjUerplGCMyZCQuGf//FGo/X//jP8qGiqtYMjnlBt4WKgQCC4cg4ycErJAYBzrA5EGQqJDT1ihp8Vb2f4oj64p/q/2X//lcU62//ULqTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq", "open": "data:audio/mpeg;base64,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MAAHl5Nd0lPN8CMsR9MTAsUIkff/5/UoZfUwIdH8n7CTHud8d+7+61fCffloAbgBNBvn1q1jp0mpk+Ty6NPiMgCvYEgqVQwMMynNt19OUkXNDl1M+wyMQAVIQAX7D1KLF////8T/zf9XRmCBxFi9WXekkF71///0dOoaOf6FEyAHbZder3qSX2pRKL0XgyErDwEXJM6wwBAKCpg8ShrMvhu4oBnVj5ysFRhkI4cJQEANL5OVoMivO3//P/+J//s4xB+DCyCzKEx0ToFLFiWNzQoIf7f/WkYFO+xZoXuSeVPo7Hbvb7nJ6sn6rZEF0ogBulPh/L+tWZBLoNbs7q33aMAAgwOLzH7ROTtUxo4jVoaNEbD15pCYISGPIpjssZNS6///7Y3+wYgMtTspmT/0YEKfuFbP/v/Mf8b3gVvbqRAK2tsEA5W0u0ahW3PUjtS0OBTBxYznHMnYEBYWDREACQcpks4v65sGg6Of/2ZG0RnOeajI1K9nRFsyHt/yh4mYee/IW+i/cneqzgJn/6U19R+IAqk5//s4xCsBCiS3MOZs6sE+FqTJsA5Ime7X/jS1JiTr3MJFzISkwzNNpcBkLMvFkzQcHK6o8cv9uNEdt5FX4zQ+n9iNl///9YWCIGT64EVe180yy3vftq3vjaeACShxm+xiLyAJpjneVdZWsOUEuixZQzSYNvIAsGpquVD7i3tVq0qJdbcjq87LkVW/8GccEMDI7/pKR1LuqP0sX/T/f/+7qi9P/WfQE5a+vghAIhuOXeSAhZI1WarUZisANoxiJqKm/380+8cTuYpmMCMOZbFF46Tn+P3//7Se//s4xDwACTVjJk2AUIkblqZ1AJnoQBkSDhjKuqtqLBzTwZWM4fWWCB//+r1emgAv1IAKgZah7e2nfFcT0Ulua5iHVuOWeZT/8m2peRqwMjJcjUrt7epHCb6Rw9gwMBoCgoOwE8TfCR6QZks9xE+3/ssyrPSpCgAqBLaRrJQQaXZSa1aeWyASoGUeDTCyMShqVDZbncSsWGhK5YiKnRMHS1YNCUFc7PVhqVOgrEWdne9R0r8sPPEQVEWJTsSiWgAGAiSEigMQLMPLKLKLKPMPMjIyMjMjL/mX//s4xFUCCMS1JsY8akElheDIYaRY////5GRl///y2WWWWyyyy2WWf3///ssstlllgMKGCggYIORqqqDD//lVP001TEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//s4xG6DyM1AgEMEb8gAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV", "win": "data:audio/mpeg;base64,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", "swipe": "data:audio/mpeg;base64,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"};
var MUTE=false;try{MUTE=localStorage.getItem('ali-mute')==='1'}catch(x){}
function snd(k){if(MUTE||!SFX[k])return;try{var a=new Audio(SFX[k]);a.volume=.7;var q=a.play();if(q&&q.catch)q.catch(function(){})}catch(x){}}
function muteUI(){var m=$('#mt');if(m)m.textContent=MUTE?'🔇':'🔊'}

/* ملف قصة سمير وسميح، مثل: samir-story.mp4 */
var VIDEO2_SRC=window.ALI_ASSET_BASE+'media/samir-story.mp4';


var P=[
 {k:'hook', n:'التهيئة الحافزة', m:4, d:'فيديو مبارزة علي ومرحب، ثم سؤال «هل الأفلام الكرتونية مصدر موثوق؟» بنعم أو لا على الألواح، ثم دلائل «من هو؟» من الكتاب.', s:'أجب عن سؤال الفيديو، ثم خمّن الشخصية من الدلائل.'},
 {k:'prior',n:'التعلم القبلي', m:4, d:'شجرة القرابة: يضع كل طالب النبي ﷺ وأبا طالب وحمزة والعباس وجعفر وصفية في مواضعها الصحيحة.', s:'المس الاسم ثم المس مكانه من قرابة علي رضي الله عنه، وتظهر نتيجتك فور الانتهاء.'},
 {k:'goals',n:'أهداف التعلم', m:2, d:'أربع بوابات تفتح الواحدة تلو الأخرى كلما تحقق هدف.', s:'هذه بوابات رحلتك. كل بوابة تُفتح بإجابتك الصحيحة.'},
 {k:'o1',n:'الهدف ١ · التعريف به', m:6, d:'عرض تفاعلي: الاسم والجد والمولد والزوجة والأبناء، ثم جولة من ٣ أسئلة في لعبة الفارس.', s:'تابع الشاشة، ثم انطلق بالفارس.'},
 {k:'o2',n:'الهدف ٢ · النشأة والصفات', m:6, d:'نشأته في بيت النبوة وصفاته: التقوى والزهد والشجاعة والفصاحة والعلم، ثم جولة تقويم بنائي.', s:'اختر صفة تحب أن تتصف بها، ثم جولة الفارس.'},
 {k:'o3',n:'الهدف ٣ · مواقف مشرقة', m:5, d:'تُعرض المواقف الأربعة معًا ويحفظها الطلاب في ٦٥ ثانية بدون تنقّل، ثم تُفتح الجولة وتنتقل مباشرة للهدف التالي.', s:'احفظ المواقف الأربعة قبل أن تُغطّى البطاقات، ثم جولة الفارس.'},
 {k:'o4',n:'الهدف ٤ · الخلافة والوفاة', m:7, d:'لغز «صندوق الخلافة»: يقرأ الطلاب المخطوطات ويفتحون القفل ويحددون الكوفة على الخريطة بأنفسهم، ثم جولة الفارس.', s:'اقرأ المخطوطات الأربع، افتح الصندوق، وحدّد مكان الوفاة.'},
 {k:'fin', n:'التقويم الختامي', m:9, d:'تحدي سمير وسميح، وبعد كل جولة يظهر سؤال من أسئلة الدرس على كل الألواح، ثم الجولة النهائية.', s:'ترقّب كلمة «سمير» في القصة، وبعد كل جولة أجب عن السؤال.'},
 {k:'end', n:'الخاتمة · أسمو بقيمي', m:2, d:'يختار كل طالب قيمة يقتدي بها من سيرة علي رضي الله عنه.', s:'اختر القيمة التي ستعمل بها هذا الأسبوع.'}
];
var GL=[
 'يُعرّف بالصحابي الجليل علي بن أبي طالب: نسبه ومولده وزوجته وأبناءه.',
 'يبيّن نشأته في بيت النبوة وأبرز صفاته.',
 'يستنتج مواقفه المشرقة في خدمة الدعوة الإسلامية.',
 'يذكر خلافته وكيف كانت وفاته.'
];
var A=['١','٢','٣','٤','٥','٦','٧','٨','٩'];
var $=function(s){return document.querySelector(s)};
var role=window.ALI_ROLE||'s',code='',sessionEpoch=0,st={i:0,t:Date.now(),c:0,a:0,g:0,m:0},id=(window.crypto&&crypto.randomUUID?crypto.randomUUID().replace(/-/g,''):Math.random().toString(36).slice(2)+Math.random().toString(36).slice(2)),peers={},OFF=0,LIVE=0,GOT=0;

function SN(){return Date.now()+OFF}
function setMsg(m){var e=$('#mode');if(e)e.textContent=m}
function cs(){var e=$('#cst');if(e){e.textContent=LIVE?'● متصل':'● جارٍ إعادة الاتصال';e.className=LIVE?'ok':'bad'}}
function toast(text){var e=document.getElementById('notify');if(e){e.textContent=text;e.hidden=false;clearTimeout(toast.timer);toast.timer=setTimeout(function(){e.hidden=true},6500)}}
function request(action,data){
  return new Promise(function(resolve,reject){
    if(!window.google||!google.script||!google.script.run){reject(Error('هذه الصفحة يجب فتحها من رابط تطبيق Google Apps Script، وليس كملف HTML محلي.'));return}
    try{google.script.run.withSuccessHandler(resolve).withFailureHandler(function(e){reject(Error(e&&e.message||String(e)))}).api(action,data||{})}catch(e){reject(e)}
  })
}
var authToken='',syncChain=Promise.resolve(),pollTimer=0,reportTimer=0,pollBusy=false,reportBusy=false,writeBusy=false;
function shiftTime(s,delta){['t','ge','mm','L'].forEach(function(k){if(s[k])s[k]+=delta});if(s.sm&&s.sm.t)s.sm.t+=delta}
function setState(s){
  if(!s||s.i==null)return;
  var wasStarted=!!st.started,wasEnded=!!st.ended,wasPaused=!!st.paused;
  if(s.i!==st.i&&role==='s')snd('swipe');
  if(s.g&&!st.g&&role==='s')snd('open');
  if(s.sm&&(!st.sm||s.sm.t!==st.sm.t))AR=Date.now();
  if(s.mm&&s.mm!==st.mm)MMAR=Date.now();
  GOT=1;st=s;
  if(wasStarted!==!!s.started||wasEnded!==!!s.ended||wasPaused!==!!s.paused)shown=-1;
  draw();pauseUI();
}
var prevGamePause=false;
function pauseUI(){
  var e=document.getElementById('pauseLayer');if(!e)return;
  var pause=role==='s'&&st.started&&st.paused&&!st.ended;
  e.classList.toggle('hide',!pause);
  if(GF&&!GF._end&&prevGamePause!==pause){
    try{GF.contentWindow.postMessage({t:pause?'teacherPause':'teacherResume'},new URL(window.ALI_ASSET_BASE).origin)}catch(ex){}
  }
  prevGamePause=pause;
}
function push(){
  var captured=JSON.parse(JSON.stringify(st));
  syncChain=syncChain.catch(function(){}).then(function(){
    writeBusy=true;
    return request('teacherCommand',{token:authToken,state:captured}).then(function(result){LIVE=1;cs();if(result&&result.state)st.version=Math.max(st.version||0,result.state.version||0);return result})
      .catch(function(err){LIVE=0;cs();toast('لم يُرسل أمر المعلم: '+err.message);throw err}).finally(function(){writeBusy=false})
  });
  return syncChain;
}
function count(){
  var n=0,now=SN(),k,q,x=0;
  for(k in peers)if(now-(peers[k].t||0)<40000)n++;
  var e=$('#cnt');if(e)e.textContent=n;
  var d=$('#dn'),kk=P[st.i].k;
  for(q in peers)if(now-(peers[q].t||0)<40000&&peers[q].r&&peers[q].r[kk]!=null)x++;
  pqr();gbr();if(d)d.textContent=x+' من '+n;
  var c=document.getElementById('onlineCount');if(c)c.textContent=n;
}
function pollOnce(){
  if(pollBusy||!authToken)return Promise.resolve();
  pollBusy=true;
  return request(role==='t'?'teacherPoll':'studentPoll',{token:authToken}).then(function(data){
    LIVE=1;cs();
    if(data.serverNow)OFF=data.serverNow-Date.now();
    if(role==='t'){
      if(data.code&&data.code!==code){code=data.code;shown=-1}
      peers=data.peers||{};ANS=data.answers||{};
      if(data.state&&data.state.version>(st.version||0)&&!writeBusy) setState(data.state);
      count();
    }else if(data.state){
      if(JSON.stringify(data.state)!==JSON.stringify(st))setState(data.state);
    }
  }).catch(function(err){
    LIVE=0;cs();
    if(/انتهت جلسة|غيّر المعلم|جلسة الطالب غير|لم يعد هذا الطالب/.test(err.message)){
      clearTimeout(pollTimer);authToken='';toast(err.message);setTimeout(function(){location.reload()},2000);
    }
  }).finally(function(){pollBusy=false})
}
function startPoll(){
  function loop(){
    var delay=(role==='t'?5200:6700)+Math.round(Math.random()*1100);
    pollTimer=setTimeout(function(){pollOnce().finally(loop)},delay)
  }
  loop()
}
function sendReport(){
  if(role!=='s'||!authToken)return;
  if(reportBusy){clearTimeout(reportTimer);reportTimer=setTimeout(sendReport,1600);return}
  reportBusy=true;
  request('studentUpdate',{token:authToken,report:lite(),answers:(me.A||[]).slice(0,200)})
    .then(function(){LIVE=1;cs()})
    .catch(function(err){LIVE=0;cs();toast('تعذر حفظ التقدم؛ ستتم المحاولة مجددًا: '+err.message)})
    .finally(function(){reportBusy=false})
}
function queueReport(){clearTimeout(reportTimer);reportTimer=setTimeout(sendReport,900)}
function connect(){
  startPoll();
  if(role==='s'){hbf=queueReport;queueReport();setInterval(function(){queueReport()},19000)}
}
function teacherInit(){return Promise.resolve()}

/* ===== الرسم ===== */
function mmss(sec){sec=Math.max(0,Math.round(sec));return String(Math.floor(sec/60)).padStart(2,'0')+':'+String(sec%60).padStart(2,'0')}
var VIDEO=VIDEO_SRC,shown=-1,hbf=function(){},me={},K={sel:-1,done:{},err:0,order:null};
var CL=['ابن عمّ النبي ﷺ','أحد الخلفاء الراشدين','أحد العشرة المبشّرين بالجنة','أحد كتّاب الوحي','أول من أسلم من الصبيان'];
var KIN=[['جدّه','عبد المطلب'],['أبوه','أبو طالب'],['ابن عمّه','النبي ﷺ'],['أخوه','جعفر'],['عمّه «أسد الله»','حمزة'],['عمّته','صفية'],['زوجته','فاطمة الزهراء'],['ابناه','الحسن والحسين']];
function hook(isT){
  var h='';
  if(isT)h+='<div class="vslot">'+(VIDEO?'<video src="'+VIDEO+'" controls playsinline></video>':'هنا يُعرض فيديو مبارزة علي ومرحب بعد إضافة الملف النهائي')+'</div>';
  h+='<div class="box" id="pq"></div><div class="clues" id="cl"></div>';
  h+=isT?'<div class="row"><button class="nb" id="qs">عرض السؤال على الألواح</button><button class="nb" id="an">اكشف الجواب</button><button class="nb pr" id="cn">اكشف الدليل التالي</button></div>':'<input class="guess" id="gs" placeholder="اكتب تخمينك هنا…" autocomplete="off">';
  return h}
function pqr(){
  var pq=$('#pq');if(!pq)return;
  if(role==='t'){
    var y=0,nn=0,q;for(q in peers){var v=peers[q].r&&peers[q].r.hook;if(v==='y')y++;if(v==='n')nn++}
    pq.innerHTML='<strong>السؤال بعد الفيديو:</strong> هل الأفلام الكرتونية مصدر موثوق للمعلومات؟<br>نعم: <b>'+y+'</b> · لا: <b>'+nn+'</b>'+(st.a?'<br><strong>الجواب: لا.</strong> هي للتسلية، والمعلومة الموثوقة نأخذها من الكتب والمصادر الصحيحة.':'');
  }else{
    if(!st.q){pq.innerHTML='<strong>شاهد الفيديو على الشاشة بانتباه… سيظهر السؤال بعد قليل.</strong>';return}var c=me.hook,off=(c||st.a)?' disabled':'';
    pq.innerHTML='<strong>هل الأفلام الكرتونية مصدر موثوق للمعلومات؟</strong><div class="row"><button class="nb'+(c==='y'?' pr':'')+'" data-a="y"'+off+'>نعم</button><button class="nb'+(c==='n'?' pr':'')+'" data-a="n"'+off+'>لا</button></div>'+(st.a?'<p>'+(c==='n'?'أحسنت! الأفلام للتسلية، ومصدر معلوماتنا الموثوق هو الكتب والمصادر الصحيحة.':'الجواب الصحيح: لا. الأفلام للتسلية، ومصدر معلوماتنا الموثوق هو الكتب والمصادر الصحيحة.')+'</p>':'');
  }
}
function prior(isT){
  if(isT)return '<div class="tree" id="pt"></div><div><button class="nb" id="rv">اعرض الإجابات</button> <span class="ts">الألواح التي أنجزت: <b id="dn">0</b></span></div><div class="box">رضي الله عنهم جميعًا. القرابة هنا بالنسبة إلى علي بن أبي طالب رضي الله عنه.</div>';
  return '<div class="tree" id="pt"></div><div class="chips" id="pc"></div>'}
function pr(){
  var s=$('#pt');if(!s)return;
  s.innerHTML=KIN.map(function(k,i){var d=K.done[i];return '<button class="sl'+(d?' ok':'')+'" data-s="'+i+'"><small>'+k[0]+'</small><b>'+(d?k[1]:'؟')+'</b></button>'}).join('');
  $('#pc').innerHTML=K.order.filter(function(i){return !K.done[i]}).map(function(i){return '<button class="chip'+(K.sel===i?' on':'')+'" data-c="'+i+'">'+KIN[i][1]+'</button>'}).join('')||'<div class="rev">أحسنت! عدد أخطائك: '+K.err+'</div>';
}
function upd(){
  var c=st.c||0,cl=$('#cl'),gs=$('#gs');if(gs)gs.style.display=c>0?'':'none';
  if(cl)cl.innerHTML=(role==='s'&&!c?'<div class="ts">ستظهر الدلائل هنا واحدًا بعد الآخر…</div>':'')+(role==='t'?CL:CL.slice(0,c)).map(function(x,i){return '<div class="cl'+(i<c?' on':'')+'">'+(i<c?x:'؟')+'</div>'}).join('')+(c>=6?'<div class="rev">علي بن أبي طالب رضي الله عنه</div>':'');
  var cn=$('#cn');if(cn){cn.textContent=c>=5?'اكشف الشخصية':'اكشف الدليل التالي';cn.disabled=c>=6}
  var pt=$('#pt');if(pt&&role==='t')pt.innerHTML=KIN.map(function(k){return '<div class="sl'+(st.c?' ok':'')+'"><small>'+k[0]+'</small><b>'+(st.c?k[1]:'؟')+'</b></div>'}).join('');
  ctr();smr();endr();mmr();pzr();pzt();tick();count();
}
function bind(){
  var f=$('#vf');if(f)f.onchange=function(){var v=$('#vd');v.src=URL.createObjectURL(f.files[0]);v.play().catch(function(){})};
  if(role!=='s')return;
  if(P[st.i].k==='prior'){if(!K.order)K.order=[0,1,2,3,4,5,6,7].sort(function(){return Math.random()-.5});pr()}
  $('#stu').onclick=function(e){
        var zz=e.target.closest('[data-pz]');if(zz){pzAct(zz.dataset.pz);return}
    var sa=e.target.closest('[data-sa]');if(sa){saAns(+sa.dataset.sa);return}
    if(e.target.closest('#smb')){smp();return}
    if(e.target.closest('[data-a]')){snd('pop')}var vb=e.target.closest('[data-v]');if(vb){pickV(+vb.dataset.v);return}
    if(e.target.closest('#gstart')){play(P[st.i].k);return}
    var a=e.target.closest('[data-a]');if(a&&!me.hook&&!st.a){report('hook',a.dataset.a);pqr();return}
    var c=e.target.closest('[data-c]'),s=e.target.closest('[data-s]');
    if(c){snd('click');K.sel=+c.dataset.c;pr();return}
    if(!s||K.sel<0)return;
    var i=+s.dataset.s;if(K.done[i])return;
    if(i===K.sel){snd('ok');K.done[i]=1;if(Object.keys(K.done).length===8)report('prior',Math.max(0,8-K.err))}else{K.err++;snd('no')}
    K.sel=-1;pr();
    if(!K.done[i]){var b=$('[data-s="'+i+'"]');if(b){b.classList.add('bad');setTimeout(function(){b.classList.remove('bad')},450)}}
  };
}
function report(k,v){me[k]=v;hbf();sv()}
/* ===== لعبة الفارس ===== */
var QB={
 o1:[['جدّ علي بن أبي طالب رضي الله عنه هو:',['عبد المطلب','أبو سفيان','عبد الله']],['وُلد علي رضي الله عنه في:',['مكة المكرمة','المدينة المنورة','الكوفة']],['زوجة علي رضي الله عنه هي:',['فاطمة الزهراء بنت النبي ﷺ','خديجة بنت خويلد','عائشة بنت أبي بكر']]],
 o2:[['من ربّى عليًّا رضي الله عنه في بيته؟',['النبي ﷺ','حمزة','أبو بكر الصديق']],['علي أول من أسلم من:',['الصبيان','النساء','كبار السن']],['أي الصفات التالية ليست من صفاته رضي الله عنه؟',['البخل','الشجاعة','الزهد']]],
 o3:[['بات علي في فراش النبي ﷺ ليلة:',['الهجرة','الإسراء','بدر']],['ولّاه النبي ﷺ القضاء في:',['اليمن','الشام','مصر']],['شارك علي مع النبي ﷺ في الغزوات جميعها عدا:',['غزوة تبوك','غزوة بدر','غزوة خيبر']]],
 o4:[['بُويع علي بالخلافة بعد مقتل الخليفة:',['عثمان بن عفان','عمر بن الخطاب','أبي بكر الصديق']],['ترتيب علي بين الخلفاء الراشدين:',['الرابع','الثاني','الثالث']],['قُتل علي رضي الله عنه في:',['الكوفة بالعراق','المدينة المنورة','مكة المكرمة']]],
 fin:[['ابنا علي الحسن والحسين هما سيّدا شباب:',['أهل الجنة','قريش','المدينة']],['كان لعلي دور كبير في غزوة بدر وفتح:',['خيبر','القسطنطينية','الأندلس']],['قتله غدرًا:',['عبد الرحمن بن ملجم','أبو جهل','أبو لهب']],['علي أحد العشرة المبشّرين بالجنة.',['صحيحة','غير صحيحة']],['عبارة «بات علي في فراش النبي ﷺ ليلة الإسراء»:',['غير صحيحة، والصحيح ليلة الهجرة','صحيحة']]]
};
var G=null,raf=0,lastT=0,cv,cx,AC;
function beep(f,d,w){try{AC=AC||new (window.AudioContext||window.webkitAudioContext)();var o=AC.createOscillator(),g=AC.createGain();o.frequency.value=f;g.gain.value=.08;o.connect(g);g.connect(AC.destination);var t=AC.currentTime+(w||0);o.start(t);o.stop(t+d)}catch(x){}}
var R={m:0,sh:0,dead:0};
function sk(){return 'ali:'+code+':'+sessionEpoch+':'+id}
function sv(){try{localStorage.setItem(sk(),JSON.stringify({me:me,R:R}))}catch(x){}}
function ld(){try{var d=JSON.parse(localStorage.getItem(sk()));if(d){me=d.me||me;R=d.R||R}}catch(x){}}
function esc(s){return String(s).replace(/[&<>"']/g,function(c){return '&#'+c.charCodeAt(0)+';'})}
function rows(){var a=[],q,now=SN();for(q in peers){var p=peers[q],r=p.r||{};a.push({id:q,n:r.n||'طالب',d:r.d||0,c:r.q||0,t:r.t||0,p:r.prior,on:now-p.t<40000})}return a.sort(function(x,y){return y.d-x.d})}
function board(n){
  var a=rows().slice(0,n);if(!a.length)return '<em>لا يوجد طلاب متصلون بعد.</em>';
  return '<table class="bt">'+a.map(function(r,i){return '<tr><td>'+(i<3?['🥇','🥈','🥉'][i]:i+1)+'</td><td>'+esc(r.n)+'</td><td><b>'+r.d+'</b> م</td><td>'+(r.t?Math.round(r.c/r.t*100)+'%':'—')+'</td></tr>'}).join('')+'</table>'}
function dash(o){
  var d=$('#db');if(o!==undefined)d.classList.toggle('hide',!o);if(d.classList.contains('hide'))return;
  var a=rows(),n=a.length,c=0,t=0,m=0;a.forEach(function(r){c+=r.c;t+=r.t;m+=r.d});
  var hq=qstat();
  d.innerHTML='<div class="dh"><h2>لوحة المتابعة</h2><button class="nb" id="dbx">إغلاق</button></div><div class="ds"><span>الطلاب: <b>'+n+'</b></span><span>دقة الإجابات: <b>'+(t?Math.round(c/t*100):0)+'%</b></span><span>متوسط الأمتار: <b>'+(n?Math.round(m/n):0)+'</b></span></div>'+
  (hq.length?'<div class="box"><strong>الأسئلة الأكثر خطأً:</strong><br>'+hq.map(function(o){return esc(o.q)+' — '+Math.round(o.c/o.t*100)+'% صحيحة ('+o.t+' إجابة)'}).join('<br>')+'</div>':'')+
  '<div class="dt"><table class="bt"><tr><th></th><th>الاسم</th><th>أفضل مسافة</th><th>الإجابات الصحيحة</th><th>الدقة</th><th>القبلي</th><th>الحالة</th></tr>'+
  a.map(function(r,i){
    var A=(ANS[r.id]&&ANS[r.id].A)||[];
    return '<tr><td>'+(i+1)+'</td><td>'+esc(r.n)+'</td><td><b>'+r.d+'</b> م</td><td>'+r.c+' من '+r.t+'</td><td>'+(r.t?Math.round(r.c/r.t*100)+'%':'—')+'</td><td>'+(r.p!=null?r.p+' من ٨':'—')+'</td><td>'+(r.on?'🟢 متصل':'⚪ غير متصل')+'</td></tr>'+
    '<tr><td></td><td colspan="6"><details data-id="'+esc(r.id)+'"'+(OPENS[r.id]?' open':'')+'><summary>إجاباته ('+A.length+')</summary>'+A.map(function(x){return '<div class="'+(x[3]?'ya':'na')+'">'+(x[3]?'✓':'✗')+' '+esc(x[1])+' ← <b>'+esc(x[2])+'</b></div>'}).join('')+'</details></td></tr>';
  }).join('')+'</table></div>';
}
function sec(){gbr();chk();pzTick();smr();endr();mmr();pzt();var d=$('#db');if(role==='t'&&d&&!d.classList.contains('hide'))dash()}
function gbr(){
  var b=$('#gb');if(!b)return;
  var k=P[st.i].k,n=QB[k].length,open=st.g&&SN()<st.ge;
  if(role==='t'){
    var x=0,s=0,q;for(q in peers){var v=peers[q].r&&peers[q].r[k];if(v!=null){x++;s+=v}}
    b.innerHTML='<strong>الجولة:</strong> '+(open?'مفتوحة · المتبقي <b>'+mmss((st.ge-SN())/1000)+'</b>':'مغلقة')+' · أجاب عن أسئلة الهدف: <b>'+x+'</b>'+(x&&s/x/n<.7?' · <strong>الإتقان أقل من ٧٠٪، يُنصح بإعادة شرح موجزة</strong>':'')+'<br><strong>ترتيب المتصدرين:</strong>'+board(5);
  }else{
    var m=me[k];
    b.innerHTML=open?'<button class="nb pr" id="gstart">'+(m==null?'ابدأ التحدّي':'تابع الجري')+'</button> <span class="ts">أفضل مسافة لك: '+(me.d||0)+' م</span>':m!=null?'<strong>انتهت الجولة.</strong> أجبت عن '+m+' من '+n+' بشكل صحيح · أفضل مسافة: <b>'+(me.d||0)+'</b> م · تقدمك محفوظ للجولة القادمة.':'سيفتح المعلم الجولة بعد الشرح. استعد!';
  }
}
var GF=null,GK=null,GA=0;

function shuf(a){return a.slice().sort(function(){return Math.random()-.5})}
function conv(q){var o=shuf(q[1].map(function(t,i){return i}));return [q[0],o.map(function(i){return q[1][i]}),o.indexOf(0)]}
function play(k){
  GK=k;GA=0;var g=$('#gm');g.innerHTML='';g.onclick=null;
  var f=document.createElement('iframe');f.id='gf';f.title='لعبة الفارس';g.appendChild(f);
  var h=document.createElement('div');h.id='gh';h.innerHTML='<span id="gt"></span><span id="gdm"></span><button id="gxit">خروج</button>';g.appendChild(h);
  g.classList.remove('hide');GF=f;f.src=window.ALI_ASSET_BASE+'assets/game.html';chk();
}
function chk(){
  if(!GF||GF._end)return;
  var open=st.g&&(st.paused||SN()<st.ge)&&P[st.i].k===GK,h=$('#gh');
  var t1=$('#gt');if(t1){t1.textContent='⏱ '+mmss((st.ge-SN())/1000);$('#gdm').textContent=(me.d||0)+' م'}
  if(!open)endGame();
}
function endGame(){
  if(!GF||GF._end)return;GF._end=1;
  try{GF.contentWindow.postMessage({t:'end'},new URL(window.ALI_ASSET_BASE).origin)}catch(x){}
  setTimeout(function(){
    if(GF){GF.remove();GF=null}
    var g=$('#gm');
    g.innerHTML='<div class="gend"><div><h2>انتهت الجولة ⏱</h2><p>أفضل مسافة لك: <b>'+(me.d||0)+'</b> م</p><p>'+(GA?'تقدمك محفوظ، وتكمل من مكانك في الجولة القادمة.':'ستبدأ الجولة القادمة من جديد.')+'</p><button class="nb pr" id="gok">رجوع</button></div></div>';
    g.onclick=function(e){if(e.target.closest('#gok')){g.classList.add('hide');g.innerHTML='';g.onclick=null;GK=null;gbr()}};
  },600);
}
addEventListener('message',function(e){
  var m=e.data;if(!GF||e.source!==GF.contentWindow||!m||!m.g||e.origin!==new URL(window.ALI_ASSET_BASE).origin)return;
  if(m.t==='ready'){pushAns();
    var pool=[];Object.keys(QB).forEach(function(x){QB[x].forEach(function(q){pool.push(conv(q))})});
    GF.contentWindow.postMessage({t:'init',name:me.n||'طالب',k:GK,title:P[st.i].n,qs:shuf(QB[GK]).map(conv),pool:pool,ge:st.ge-OFF,sk:code+':'},new URL(window.ALI_ASSET_BASE).origin);
  }else if(m.t==='ans'){me.t=(me.t||0)+1;if(m.ok)me.q=(me.q||0)+1;(me.A=me.A||[]).push([GK,String(m.q||'').slice(0,70),String(m.a||'').slice(0,40),m.ok?1:0]);hbf();sv();pushAns()}
  else if(m.t==='dist'||m.t==='over'){me.d=Math.max(me.d||0,m.d|0);hbf();sv()}
  else if(m.t==='round'){report(GK,m.first)}
  else if(m.t==='ended'){GA=m.alive}
});
document.addEventListener('click',function(e){if(e.target.closest&&e.target.closest('#gxit'))endGame()});
var DUR={o1:3,o2:3,o3:3,o4:3,fin:4},AR=0,SL=0,SMSG='',ANS={},OPENS={},FT=0;
var VAL=['طلب العلم','الشجاعة','التقوى','الزهد','العدل'];
var MAP='<svg viewBox="0 0 280 160" role="img" aria-label="خريطة تقريبية" style="width:min(420px,100%);background:var(--bg);border-radius:14px"><g font-size="13" text-anchor="middle" fill="var(--tx)"><circle cx="190" cy="30" r="5" fill="var(--mu)"/><text x="190" y="20">بغداد</text><circle cx="185" cy="62" r="7" fill="var(--gd)"/><text x="185" y="84">الكوفة</text><circle cx="222" cy="92" r="5" fill="var(--mu)"/><text x="222" y="108">البصرة</text><circle cx="70" cy="125" r="6" fill="var(--tl)"/><text x="70" y="146">المدينة المنورة</text></g><path d="M78 118 C110 92 150 80 178 68" stroke="var(--gd)" stroke-width="2" fill="none" stroke-dasharray="5 4"/></svg>';
var CT={
 o1:[['اسمه ونسبه','علي بن أبي طالب رضي الله عنه، وجدّه عبد المطلب.'],['مولده','وُلد في مكة المكرمة قبل البعثة بعشر سنين.'],['زوجته','فاطمة الزهراء رضي الله عنها، بنت سيدنا رسول الله ﷺ.'],['أبناؤه','الحسن والحسين رضي الله عنهما، وهما سيّدا شباب أهل الجنة.'],['أتأمل وأستخرج','من بطاقة التعريف: ما صلة قرابته بسيدنا رسول الله ﷺ؟','ابن عمّه ﷺ؛ فأبوه أبو طالب هو عمّ النبي ﷺ.']],
 o2:[['ربّاه النبي ﷺ','ربّى النبي ﷺ عليًّا في بيته تخفيفًا عن عمه أبي طالب لكثرة عياله.'],['إسلامه','عرض عليه النبي ﷺ الإسلام عند بدء الدعوة فأسلم، وكان أول من أسلم من الصبيان، وهو أحد العشرة المبشّرين بالجنة.'],['صفاته','التقوى · الزهد · مكارم الأخلاق · سعة العلم · الحكمة · الفصاحة · الشجاعة'],['شهادة النبي ﷺ له','«أنتَ مِنّي بمنزلةِ هارونَ مِنْ موسى، إلّا أنّهُ لا نبيَّ بعدي» [البخاري ومسلم]، و«لا يُحبُّكَ إلّا مؤمنٌ، ولا يُبغضُكَ إلّا منافقٌ» [مسلم].'],['أتأمل لأقتدي','اختر صفة تحب أن تتصف بها، واذكر شخصًا يحمل هذه الصفات.','الإجابة مفتوحة: يُدار نقاش قصير مع الطلاب.']],
 o3:[['فراش النبي ﷺ','بات في فراش النبي ﷺ ليلة الهجرة فداءً له، وبعد أن أدّى مهمته لحق بالنبي ﷺ إلى المدينة المنورة.'],['القضاء في اليمن','ولّاه النبي ﷺ القضاء في اليمن بتكليف منه.'],['الغزوات','شارك مع النبي ﷺ في الغزوات جميعها عدا غزوة تبوك، إذ ولّاه النبي ﷺ على المدينة المنورة.'],['حامل الراية','حمل الراية في كثير من المعارك، وكان له دور كبير في غزوة بدر وفتح خيبر.'],['أفكر وأبيّن','كان النبي ﷺ والصحابة الكرام يستشيرون عليًّا في كثير من المواقف. ما دلالة ذلك؟','دلالة على علمه وحكمته ورجاحة عقله وثقتهم به.']],
 o4:[['البيعة بالخلافة','بعد مقتل الخليفة الراشد الثالث عثمان بن عفان رضي الله عنه بايعه المسلمون بالخلافة، فكان الخليفة الراشد الرابع.'],['العدل','حرص رضي الله عنه على إقامة العدل بين الرعية.'],['وفاته','قُتل غدرًا في الكوفة بالعراق سنة ٤٠ هـ على يد عبد الرحمن بن مُلجم، بعد أن قضى خمس سنوات خليفةً للمسلمين.'],['أربط مع الجغرافيا','تقع الكوفة في جمهورية العراق.<br>'+MAP],['الخلفاء الراشدون الأربعة','أبو بكر الصديق · عمر بن الخطاب · عثمان بن عفان · علي بن أبي طالب رضي الله عنهم.']]
};
var MEMO={o3:CT.o3.slice(0,4)};delete CT.o3;delete CT.o4;
var MMD=65,MMAR=0,SQO={},FQ=[],FI=0;
var SC=[['مخطوطة البيعة','بعد مقتل الخليفة الراشد الثالث عثمان بن عفان رضي الله عنه بايع المسلمون الصحابي الجليل علي بن أبي طالب رضي الله عنه بالخلافة.'],['مخطوطة العدل','حرص رضي الله عنه على إقامة العدل بين الرعية، وقضى خمس سنوات خليفةً للمسلمين.'],['مخطوطة الوفاة','قُتل رضي الله عنه غدرًا في الكوفة بالعراق سنة ٤٠ هـ على يد عبد الرحمن بن مُلجم.'],['مخطوطة الخلفاء','الخلفاء الراشدون الأربعة هم: أبو بكر الصديق، ثم عمر بن الخطاب، ثم عثمان بن عفان، ثم علي بن أبي طالب رضي الله عنهم.']];
var WL=['ترتيبه بين الخلفاء الراشدين','مدة خلافته (سنوات)','سنة وفاته (هـ)'],WR=[[1,4],[1,10],[30,50]],CITY=['بغداد','الكوفة','البصرة','المدينة المنورة'];
function nextFQ(){if(!FQ.length||FI>=FQ.length){FQ=shuf([0,1,2,3,4]);FI=0}return FQ[FI++]}
var MV=[
 ['ليلة الهجرة','<svg viewBox="0 0 120 90" aria-hidden="true"><circle cx="88" cy="22" r="14" fill="var(--gd)"/><circle cx="95" cy="18" r="12" fill="var(--sf)"/><circle cx="30" cy="16" r="2.2" fill="var(--gd)"/><circle cx="52" cy="28" r="1.8" fill="var(--gd)"/><rect x="20" y="56" width="80" height="16" rx="6" fill="var(--ln)"/><rect x="24" y="48" width="20" height="12" rx="5" fill="var(--sf)" stroke="var(--mu)" stroke-width="2"/><path d="M16 80V46M104 80V58" stroke="var(--mu)" stroke-width="4" stroke-linecap="round"/><path d="M16 80h88" stroke="var(--tl)" stroke-width="5" stroke-linecap="round"/></svg>'],
 ['قاضي اليمن','<svg viewBox="0 0 120 90" aria-hidden="true"><path d="M60 14v62M36 78h48" stroke="var(--mu)" stroke-width="5" stroke-linecap="round"/><path d="M24 28h72" stroke="var(--gd)" stroke-width="5" stroke-linecap="round"/><path d="M24 28L12 54M24 28l12 26M96 28L84 54M96 28l12 26" stroke="var(--gd)" stroke-width="2.5"/><path d="M10 54a14 9 0 0 0 28 0zM82 54a14 9 0 0 0 28 0z" fill="var(--tl)"/></svg>'],
 ['الغزوات','<svg viewBox="0 0 120 90" aria-hidden="true"><path d="M60 8l34 12v26c0 20-16 34-34 40-18-6-34-20-34-40V20z" fill="var(--sf)" stroke="var(--gd)" stroke-width="5"/><path d="M60 26l5 12 13 1-10 8 4 13-12-7-12 7 4-13-10-8 13-1z" fill="var(--tl)"/></svg>'],
 ['حامل الراية','<svg viewBox="0 0 120 90" aria-hidden="true"><path d="M10 82h100V54h-10v-8h-10v8H80v-8H70v8H52V42H42v12H30v-8H20v8H10z" fill="var(--ln)"/><path d="M60 80V10" stroke="var(--mu)" stroke-width="4" stroke-linecap="round"/><path d="M60 10c14 6 22-6 38 0v24c-16-6-24 6-38 0z" fill="var(--gd)"/></svg>']
];
function mmr(){
  var k=P[st.i].k,S=MEMO[k],e=$('#mm');if(!S||!e)return;
  var start=role==='t'?st.mm:(MMAR||st.mm),el=st.mm?(Date.now()-start)/1000:0,left=st.mm?Math.max(0,MMD-el):MMD,live=st.mm&&left>0,vis=live?Math.min(4,Math.floor(el/6)+1):0;
  setH(e,'<div class="mt">'+(!st.mm?'🧭 رحلة علي: أربع محطات… سيبدأ المعلم وقت الحفظ':live?'⏱ احفظوا المحطات: <b>'+Math.ceil(left)+'</b> ث':'✅ انتهى الحفظ. تذكّروا المحطات من الصور ثم ابدؤوا اللعبة')+'</div><div class="bar"><i style="width:'+(live?Math.round(el/MMD*100):(st.mm?100:0))+'%"></i></div><div class="mg">'+S.map(function(s,i){var on=live&&i<vis;return '<div class="st'+(on?' on':'')+'"><b class="no">'+A[i]+'</b><div class="si">'+MV[i][1]+'</div><h3>'+(on?MV[i][0]:'؟')+'</h3><p>'+(on?s[1]:'')+'</p></div>'}).join('')+'</div>'+(live&&vis>=4?'<p class="ts">اربطها بقصة: بات في الفراش، ثم سافر قاضيًا إلى اليمن، ثم شارك في الغزوات، ثم حمل الراية.</p>':''));
}
function pzt(){
  var e=$('#pzt');if(!e)return;
  var x=0,s2=0,best=null,q,n=0;for(q in peers){n++;var r=peers[q].r||{};if(r.pz4!=null){x++;s2+=r.pz4;if(r.o4t!=null&&(!best||r.o4t<best.t))best={n:r.n||'طالب',t:r.o4t}}}
  setH(e,'<strong>🔐 لغز صندوق الخلافة:</strong> فتحه <b>'+x+'</b> من <b>'+n+'</b>'+(x?' · متوسط النقاط <b>'+(s2/x).toFixed(1)+'/٣</b>':'')+(best?' · 🥇 الأسرع: '+esc(best.n)+' ('+best.t+' ث)':'')+'<br>الطلاب يتنقلون بأنفسهم بين المخطوطات والقفل والخريطة، ولا تحتاج للشرح.');
}
var RT=75;
function pzTick(){var z=me.z,c=$('#pzc');if(!z||!z.t0||z.s>0)return;var l=Math.ceil(RT-(Date.now()-z.t0)/1000);if(l<=0){z.s=1;z.f='';sv();pzr();return}if(c)c.textContent='⏱ وقت القراءة: '+l+' ث'}
function trig(){if(role!=='t'||P[st.i].k!=='fin'||!st.m)return;st.sr=0;st.sm={i:(st.sm?st.sm.i:0)+1,k:'r',t:Date.now(),sq:nextFQ()};push();upd()}
function lcr(){var v=$('#lcv');if(!v)return;var b=$('#ls');if(b)b.classList.toggle('hide',!!st.L);if(!st.L){v.textContent='45:00';return}var el=((st.paused?st.pausedAt:Date.now())-st.L)/1000,left=45*60-el,pl=0,i;for(i=0;i<st.i;i++)pl+=P[i].m*60;var d=Math.round((el-pl)/60);v.textContent=(left<0?'−':'')+mmss(Math.abs(left));v.className=left<60?'bad':left<300?'warn':'';$('#lcd').textContent=d>1?'متأخر '+d+' د':d<-1?'متقدم '+(-d)+' د':'على الجدول'}
function ZZ(){return me.z||(me.z={r:[0,0,0,0],o:-1,s:0,w:[1,1,30],tr:0,t0:0,f:''})}
function pzr(){
  var e=$('#pz4');if(!e)return;var z=ZZ(),h='';
  if(z.s===0){
    h='<strong>🔎 مهمتك: افتح «صندوق الخلافة»</strong><p>اقرأ المخطوطات الأربع وتذكّر ما فيها؛ تُغلق بعد ٧٥ ثانية من فتح أول مخطوطة، ثم تضبط القفل من ذاكرتك.</p><div class="mt" id="pzc"></div><div class="chips">'+SC.map(function(s,i){return '<button class="chip'+(z.o===i?' on':'')+'" data-pz="sc:'+i+'">📜 '+s[0]+(z.r[i]?' ✓':'')+'</button>'}).join('')+'</div>'+(z.o>=0?'<div class="cd"><h3>'+SC[z.o][0]+'</h3><p>'+SC[z.o][1]+'</p></div>':'')+(z.r.every(Boolean)?'<button class="nb pr" data-pz="lk">🔐 اذهب إلى القفل</button>':'<p class="ts">اقرأ المخطوطات الأربع كلها ليظهر القفل.</p>');
  }else if(z.s===1){
    h='<strong>🔐 اضبط رمز القفل</strong><div class="whs">'+WL.map(function(l,i){return '<div class="wh"><small>'+l+'</small><div><button class="nb" data-pz="w:'+i+':-1">−</button><b>'+z.w[i]+'</b><button class="nb" data-pz="w:'+i+':1">+</button></div></div>'}).join('')+'</div><div class="row"><button class="nb pr" data-pz="op">افتح الصندوق</button>'+(z.t0&&Date.now()-z.t0<RT*1000?'<button class="nb" data-pz="bk">📜 المخطوطات</button>':'')+'</div>'+(z.f?'<p class="na">'+z.f+'</p>':'');
  }else if(z.s===2){
    h='<strong>🗺 ممتاز! بقيت خطوة: أين قُتل علي رضي الله عنه؟</strong>'+MAP+'<div class="chips">'+CITY.map(function(c,i){return '<button class="chip" data-pz="c:'+i+'">'+c+'</button>'}).join('')+'</div>'+(z.f?'<p class="na">'+z.f+'</p>':'');
  }else h='<div class="cd"><h3>🔓 فُتح الصندوق!</h3><p>علي بن أبي طالب: الخليفة الراشد الرابع، خمس سنوات في الخلافة، وقُتل في الكوفة سنة ٤٠ هـ. نقاطك: <b>'+Math.max(0,3-z.tr)+' / ٣</b></p></div>';
  setH(e,h);
}
function ans4(q,a,ok){me.t=(me.t||0)+1;if(ok)me.q=(me.q||0)+1;(me.A=me.A||[]).push(['o4',q.slice(0,70),String(a).slice(0,40),ok?1:0]);hbf();pushAns()}
function pzAct(a){
  var z=ZZ(),p=a.split(':');if(!z.t0)z.t0=Date.now();
  if(p[0]==='sc'){z.o=+p[1];z.r[+p[1]]=1;snd('swipe')}
  else if(p[0]==='lk'){z.s=1;z.f='';snd('click')}
  else if(p[0]==='bk'){if(z.t0&&Date.now()-z.t0<RT*1000){z.s=0;snd('click')}}
  else if(p[0]==='w'){var i=+p[1];z.w[i]=Math.max(WR[i][0],Math.min(WR[i][1],z.w[i]+(+p[2])));snd('click')}
  else if(p[0]==='op'){var C=[4,5,40],okc=z.w.map(function(v,i){return v===C[i]}),all=okc.every(Boolean);ans4('قفل الصندوق (الرتبة · المدة · سنة الوفاة)',z.w.join(' · '),all);
    if(all){z.s=2;z.f='';snd('ok')}else{z.tr++;z.f='الصحيح من عجلاتك: '+(okc.some(Boolean)?okc.map(function(o,i){return o?'✓ '+WL[i]:''}).filter(Boolean).join('، '):'لا شيء بعد')+'. أعد قراءة المخطوطات.';snd('no')}}
  else if(p[0]==='c'){var ok=+p[1]===1;ans4('أين قُتل علي رضي الله عنه؟',CITY[+p[1]],ok);
    if(ok){z.s=3;z.f='';snd('ok');me.o4t=Math.round((Date.now()-z.t0)/1000);report('pz4',Math.max(0,3-z.tr))}else{z.tr++;z.f='ليست هذه المدينة، راجع المخطوطة.';snd('no')}}
  sv();pzr();
}
function saAns(i){
  var x=st.sm;if(!x||x.k!=='r'||(me.sa&&me.sa.i===x.t))return;
  var q=QB.fin[x.sq],t=q[1][i],ok=i===0?1:0;
  me.sa={i:x.t,t:t,ok:ok};me.t=(me.t||0)+1;if(ok)me.q=(me.q||0)+1;(me.A=me.A||[]).push(['fin',q[0].slice(0,70),String(t).slice(0,40),ok]);
  snd('pop');hbf();sv();pushAns();smr();
}
function setH(e,h){if(e&&e.dataset.h!==h){e.innerHTML=h;e.dataset.h=h}}
function lite(){var o={},k;for(k in me)if(k!=='A')o[k]=me[k];return o}
function pushAns(){hbf()}
function ctr(){
  var S=CT[P[st.i].k];if(!S)return;
  var i=Math.min(st.c||0,S.length-1),s=S[i];
  setH($('#ct'),'<div class="cd"><small>'+(i+1)+' / '+S.length+'</small><h3>'+s[0]+'</h3><p>'+s[1]+'</p>'+(s[2]?(st.a?'<div class="an">'+s[2]+'</div>':'<div class="an off">؟</div>'):'')+'</div>');
}
function smh(isT){
  return '<div class="box"><strong>⚡ تحدي سمير وسميح</strong>'+(isT?'<div class="vslot">'+(VIDEO2_SRC?'<video src="'+VIDEO2_SRC+'" autoplay loop muted playsinline></video>':'هنا يُعرض فيديو أبطال القصة (١٠ ثوانٍ يتكرر)')+'</div><div class="row"><button class="nb pr" id="sm0">▶ ابدأ التحدي</button><button class="nb" id="sm1">⏺ تسجيل ذكر «سمير» (أو المسافة)</button><button class="nb" id="sm3">✅ اكشف جواب السؤال</button></div>':'')+'<div id="smr"></div></div>';
}
function smr(){
  var e=$('#smr');if(!e)return;
  if(role==='t'){
    var x=st.sm,h='',b=$('#sm0');if(b)b.textContent=st.m?'⏹ أنهِ التحدي':'▶ ابدأ التحدي';
    if(!st.m)h='اضغط «ابدأ التحدي» ثم احكِ القصة بصوتك، وعند ذكر الاسم الصحيح اضغط المسافة أو زر الريموت دون أن يلاحظ أحد.';
    else if(!x)h='التحدي يعمل… بانتظار ذكر الاسم.';
    else if(Date.now()-x.t<6000)h='⏺ تم التسجيل…';
    else{
      var a=[],q,cnt={},ans=0,q2=QB.fin[x.sq];
      for(q in peers){var r=peers[q].r||{};if(r.sm&&r.sm.i===x.t&&r.sm.rt>=0)a.push({n:r.n||'طالب',rt:r.sm.rt});if(r.sa&&r.sa.i===x.t){cnt[r.sa.t]=(cnt[r.sa.t]||0)+1;ans++}}
      a.sort(function(u,v){return u.rt-v.rt});
      h='<strong>الأسرع:</strong> '+(a.length?a.slice(0,2).map(function(o,i){return (i?'🥈 ':'🥇 ')+esc(o.n)+' ('+(o.rt/1000).toFixed(2)+' ث)'}).join(' · '):'لم يضغط أحد بعد')+'<br><strong>سؤال الجولة (يظهر على الألواح بعد ٥ ثوانٍ):</strong> '+esc(q2[0])+'<br>'+q2[1].map(function(o,i){return (i?'▫ ':'✅ ')+esc(o)+': <b>'+(cnt[o]||0)+'</b>'}).join(' · ')+'<br>أجاب <b>'+ans+'</b>'+(st.sr?' · كُشف الجواب للطلاب':'');
    }
    setH(e,h);
  }else{
    var x2=st.sm;
    if(!st.m){setH(e,'ينتظر المعلم لبدء التحدي…');return}
    if(x2&&x2.k==='r'&&AR&&Date.now()-AR>5000){
      var q3=QB.fin[x2.sq],ord=SQO[x2.t]||(SQO[x2.t]=shuf(q3[1].map(function(_,i){return i}))),my=me.sa&&me.sa.i===x2.t?me.sa:null;
      setH(e,'<strong>سؤال الجولة:</strong> '+q3[0]+'<div class="chips">'+ord.map(function(i){return '<button class="chip'+(my&&my.t===q3[1][i]?' on':'')+'" data-sa="'+i+'"'+(my?' disabled':'')+'>'+q3[1][i]+'</button>'}).join('')+'</div>'+(my?'<p>تم تسجيل إجابتك'+(st.sr?(my.ok?' ✅ صحيحة':' ❌ الصحيح: '+q3[1][0]):'، انتظر كشف الجواب')+'</p>':''));
    }else setH(e,'<button class="nb pr big" id="smb"'+(SL>Date.now()?' disabled':'')+'>⚡ سمير!</button><div class="ts">'+SMSG+'</div>');
  }
}
function smp(){
  var e=st.sm,now=Date.now();if(SL>now)return;
  if(e&&e.k==='r'&&AR&&now-AR<9000&&(!me.sm||me.sm.i!==e.t)){me.sm={i:e.t,rt:now-AR};snd('ok');SMSG='🎯 سجّلتَ '+((now-AR)/1000).toFixed(2)+' ث'}
  else{me.fs=(me.fs||0)+1;SL=now+3000;snd('no');SMSG='⚠ تسرّعت! لم يُذكر اسم «سمير» الآن'}
  hbf();sv();smr();
}
function endr(){
  var e=$('#enr');if(!e)return;
  if(role==='t'){
    var c=VAL.map(function(){return 0}),q;for(q in peers){var v=peers[q].r&&peers[q].r.val;if(v!=null&&c[v]!=null)c[v]++}
    setH(e,'<strong>القيمة التي اختارها الطلاب:</strong>'+VAL.map(function(v,i){return '<div class="bar2"><span>'+v+'</span><i style="width:'+Math.min(100,c[i]*12)+'%"></i><b>'+c[i]+'</b></div>'}).join(''));
  }else setH(e,'<strong>أقتدي بالصحابي علي رضي الله عنه، وسأتحلّى بـ:</strong><div class="chips">'+VAL.map(function(v,i){return '<button class="chip'+(me.val===i?' on':'')+'" data-v="'+i+'">'+v+'</button>'}).join('')+'</div>'+(me.val!=null?'<p>بارك الله فيك! اخترت: '+VAL[me.val]+'</p>':''));
}
function pickV(i){snd('pop');me.val=i;report('end',i);endr()}
function qstat(){
  var m={},id;for(id in ANS)(ANS[id].A||[]).forEach(function(a){var o=m[a[1]]||(m[a[1]]={q:a[1],c:0,t:0});o.t++;o.c+=a[3]});
  return Object.keys(m).map(function(k){return m[k]}).filter(function(o){return o.t>=2}).sort(function(a,b){return a.c/a.t-b.c/b.t}).slice(0,3);
}
function body(p,isT){
  var h='<p class="lead">'+(isT?p.d:p.s)+'</p>';
  if(p.k==='hook')return h+hook(isT);
  if(p.k==='prior')return h+prior(isT);
  if(p.k==='goals'){h+='<div class="gates">'+GL.map(function(g,i){return '<div class="gate"><b>بوابة '+A[i]+'</b><span>'+g+'</span></div>'}).join('')+'</div>'}
  else if(p.k==='end'){h+='<div class="box" id="enr"></div>'}
  else if(QB[p.k]){h+=(CT[p.k]?'<div id="ct"></div>'+(isT?'<div class="row"><button class="nb" id="cp">السابقة</button><button class="nb pr" id="cx">الشريحة التالية</button><button class="nb" id="ca">اكشف الجواب</button></div>':''):'')+(MEMO[p.k]?'<div id="mm"></div>'+(isT?'<div class="row"><button class="nb pr" id="mm0">⏱ ابدأ وقت الحفظ (٦٥ ث)</button></div>':''):'')+(p.k==='o4'?(isT?'<div class="box" id="pzt"></div>':'<div class="box" id="pz4"></div>'):'')+(p.k==='fin'?smh(isT):'')+(p.k==='fin'?'':'<div class="box" id="gb"></div>'+(isT?'<div class="row"><button class="nb pr" id="og">▶ افتح الجولة</button><button class="nb" id="oc">⏹ أوقف الجولة</button></div>':''))}
  else if(isT){h+='<div class="box"><strong>على ألواح الطلاب الآن:</strong> '+p.s+'</div><div class="box">سيُبنى محتوى هذه المرحلة في خطوة لاحقة؛ وهذه الشاشة هي هيكلها وتوقيتها.</div>'}
  return h;
}
function draw(){
  if(role==='s'&&(!GOT||!st.started||st.ended)){$('#stu').innerHTML='<div class="cd waitbox"><h3>'+(st.ended?'🏁 انتهت الحصة':'⏳ بانتظار المعلم…')+'</h3><p>'+(st.ended?'شكرًا على مشاركتك في رحلة الفارس.':'انضممت إلى الحصة <b>'+code+'</b>. ستظهر المرحلة تلقائيًا عندما يضغط المعلم «ابدأ الحصة».')+'</p></div>';return}
  if(shown===st.i){upd();return}
  shown=st.i;
  var p=P[st.i];
  if(role==='t'){
    $('#rail').innerHTML='<div class="railTop"><div class="jc"><small>رمز انضمام الطلاب</small><b>'+code+'</b></div><div class="lc"><small>المتبقي للحصة</small><b id="lcv">45:00</b><span id="lcd"></span><button class="nb pr" id="ls">▶ ابدأ الحصة</button></div><div class="railActions"><button class="nb" id="dbn">📊 المتابعة</button><button class="nb" id="pauseBtn">'+(st.paused?'▶ استئناف':'⏸ إيقاف مؤقت')+'</button><button class="nb" id="settingsBtn">⚙ الإعدادات</button></div></div><h2>مراحل الحصة</h2><div class="phaseList">'+P.map(function(q,i){
      return '<button class="ph '+(i===st.i?'on':i<st.i?'dn':'')+'" data-i="'+i+'"><i>'+(i<st.i?'✓':A[i])+'</i><span>'+q.n+'</span><em>'+q.m+' د</em></button>'}).join('')+
      '</div><div class="stat">الألواح المتصلة: <b id="cnt">0</b></div>';
    $('#stage').innerHTML='<div class="top"><h2>'+p.n+'</h2><div class="clock" id="clk"></div></div>'+body(p,true)+
      '<div class="nav"><button class="nb" id="pv"'+(st.i===0?' disabled':'')+'>السابق</button><div class="bar"><i id="br"></i></div><button class="nb pr" id="nx"'+(st.i===P.length-1?' disabled':'')+'>التالي</button></div>';
    count();
  }else{
    $('#stu').innerHTML='<div class="nm"><span>رمز الحصة: '+code+'</span><span>المرحلة '+A[st.i]+' من '+A[P.length-1]+'</span></div><div class="top"><h2>'+p.n+'</h2></div>'+body(p,false);
  }
  bind();upd();
}
function tick(){
  if(role!=='t')return;lcr();if(!st.started){var c0=$('#clk');if(c0)c0.textContent='--:--';return}
  var p=P[st.i],left=p.m*60-((st.paused?st.pausedAt:Date.now())-st.t)/1000,c=$('#clk'),b=$('#br');
  if(c){c.textContent=mmss(left);c.classList.toggle('low',left<60)}
  if(b)b.style.width=Math.min(100,(1-left/(p.m*60))*100)+'%';
}
function go(i){if(i<0||i>=P.length)return;if(!st.started){toast('اضغط «ابدأ الحصة» أولًا.');return}st={i:i,t:Date.now(),c:0,a:0,g:0,m:0,q:0,L:st.L||Date.now(),started:true,paused:false,ended:false,version:st.version||1};shown=-1;push();draw();pauseUI()}

/* ===== الدخول والتحكم (Google Apps Script) ===== */
function resetReady(){var e=$('#go');if(e)e.disabled=false}
function loginError(e){setMsg('⚠ '+(e&&e.message||e));resetReady()}
function initCommon(){
  $('#mt').classList.remove('hide');
  $('#mt').onclick=function(){MUTE=!MUTE;try{localStorage.setItem('ali-mute',MUTE?'1':'0')}catch(x){}muteUI();if(!MUTE)snd('click')};
  muteUI();
  $('#db').onclick=function(e){if(e.target.closest('#dbx'))dash(0)};
  $('#db').addEventListener('toggle',function(e){var x=e.target;if(x.dataset&&x.dataset.id)OPENS[x.dataset.id]=x.open},true);
  setInterval(sec,1000);
}
function showSettings(){
  var w=$('#teacherSettings');if(!w)return;
  $('#settingCode').value=code;
  $('#settingPass').value='';$('#settingOldPass').value='';
  w.classList.remove('hide');
}
function hideSettings(){var w=$('#teacherSettings');if(w)w.classList.add('hide')}
function controls(){
  $('#rail').onclick=function(e){
    var b=e.target.closest('button');if(!b)return;
    if(b.id==='ls'){
      st.started=true;st.ended=false;st.paused=false;st.L=Date.now();st.t=Date.now();push();shown=-1;draw();return
    }
    if(b.id==='dbn'){dash(1);return}
    if(b.id==='pauseBtn'){
      if(!st.started)return toast('ابدأ الحصة أولًا');
      if(!st.paused){st.paused=true;st.pausedAt=Date.now()}
      else{shiftTime(st,Date.now()-st.pausedAt);st.paused=false;st.pausedAt=0}
      push();shown=-1;draw();return
    }
    if(b.id==='settingsBtn'){showSettings();return}
    var p=e.target.closest('.ph');if(p)go(+p.dataset.i)
  };
  $('#stage').onclick=function(e){
    var b=e.target.closest('button');if(!b)return;
    if(!st.started){toast('ابدأ الحصة أولًا.');return}
    if(st.paused){toast('الحصة متوقفة مؤقتًا.');return}
    if(b.id==='nx')go(st.i+1);
    if(b.id==='pv')go(st.i-1);
    if(b.id==='cn'){st.c=Math.min(6,(st.c||0)+1);push();upd()}
    if(b.id==='rv'){st.c=1;push();upd()}
    if(b.id==='an'){st.a=1;push();upd()}
    if(b.id==='og'){st.g=1;st.ge=SN()+(DUR[P[st.i].k]||3)*60000;push();upd()}
    if(b.id==='oc'){st.g=0;push();upd()}
    var CN=(CT[P[st.i].k]||[]).length;
    if(b.id==='cx'){st.c=Math.min(CN-1,(st.c||0)+1);st.a=0;push();upd()}
    if(b.id==='cp'){st.c=Math.max(0,(st.c||0)-1);st.a=0;push();upd()}
    if(b.id==='ca'){st.a=1;push();upd()}
    if(b.id==='qs'){st.q=1;push();upd()}
    if(b.id==='sm0'){st.m=st.m?0:1;push();upd()}
    if(b.id==='sm1')trig();
    if(b.id==='sm3'){st.sr=1;push();upd()}
    if(b.id==='mm0'){st.mm=Date.now();push();upd()}
    if(['qs','an','ca','cn','rv'].indexOf(b.id)>=0)snd('pop');
  };
  document.onkeydown=function(e){
    if(document.activeElement&&['INPUT','TEXTAREA'].indexOf(document.activeElement.tagName)>=0)return;
    if($('#teacherSettings')&&!$('#teacherSettings').classList.contains('hide'))return;
    if(st.paused||!st.started)return;
    var k=P[st.i].k;
    if(k==='fin'&&st.m&&[' ','PageDown','ArrowDown','s','S','س'].indexOf(e.key)>=0){e.preventDefault();trig();return}
    if(e.key==='ArrowLeft')go(st.i+1);
    if(e.key==='ArrowRight')go(st.i-1);
  };
  $('#closeSettings').onclick=hideSettings;
  $('#teacherSettings').addEventListener('click',function(e){if(e.target===$('#teacherSettings'))hideSettings()});
  $('#toggleNewPassword').onclick=function(){var e=$('#settingPass');e.type=e.type==='password'?'text':'password'};
  $('#saveCode').onclick=function(){
    var newCode=($('#settingCode').value||'').trim();
    if(newCode!==code&&!confirm('تغيير الرمز سيُلغي دخول الطلاب الحاليين، وسيتعين عليهم إدخال الرمز الجديد. هل تريد المتابعة؟'))return;
    request('changeCode',{token:authToken,code:newCode}).then(function(o){code=o.code;shown=-1;draw();toast('✅ تم تحديث الرمز إلى '+code+'؛ يجب على الطلاب إعادة الدخول.');hideSettings()}).catch(function(e){toast('تعذر تغيير الرمز: '+e.message)})
  };
  $('#generateCode').onclick=function(){$('#settingCode').value=String(Math.floor(10000+Math.random()*90000))};
  $('#savePass').onclick=function(){
    var oldPass=$('#settingOldPass').value,newPass=$('#settingPass').value;
    if(!oldPass||!newPass)return toast('أدخل كلمة المرور الحالية والجديدة.');
    if(!confirm('بعد تغيير كلمة المرور ستحتاج لتسجيل الدخول مرة أخرى.'))return;
    request('changePassword',{token:authToken,currentPassword:oldPass,newPassword:newPass}).then(function(){alert('✅ تم تغيير كلمة المرور. احفظها الآن؛ لا يمكن استرجاع القديمة.');location.reload()}).catch(function(e){toast('تعذر تغيير كلمة المرور: '+e.message)})
  };
  $('#newClass').onclick=function(){
    if(!confirm('ستبدأ حصة جديدة. سيتم مسح الطلاب الحاليين من لوحة المتابعة وإعادتهم لشاشة الانضمام. النتائج القديمة تبقى في Google Sheets.'))return;
    request('newClass',{token:authToken}).then(function(o){peers={};ANS={};setState(o.state);shown=-1;draw();hideSettings();toast('✅ الحصة الجديدة جاهزة')}).catch(function(e){toast(e.message)})
  };
  $('#endClass').onclick=function(){
    if(!confirm('هل تريد إنهاء الحصة وإظهار شاشة الانتهاء على ألواح الطلاب؟'))return;
    st.ended=true;st.paused=false;push();shown=-1;draw();hideSettings();toast('تم إنهاء الحصة')
  };
  $('#exportData').onclick=function(){
    request('exportCsv',{token:authToken}).then(function(csv){
      var a=document.createElement('a'),obj=URL.createObjectURL(new Blob([csv],{type:'text/csv;charset=utf-8'}));
      a.href=obj;a.download='Ali-Lesson-Responses.csv';document.body.appendChild(a);a.click();a.remove();setTimeout(function(){URL.revokeObjectURL(obj)},1000)
    }).catch(function(e){toast(e.message)})
  };
}
function begin(){
  var btn=$('#go');btn.disabled=true;setMsg('جارٍ الاتصال والتحقق…');
  if(role==='t'){
    var pass=($('#pin').value||'');
    if(!pass)return loginError('أدخل كلمة مرور المعلم.');
    request('teacherLogin',{password:pass}).then(function(o){
      authToken=o.token;code=o.data.code;st=o.data.state;GOT=1;
      peers=o.data.peers||{};ANS=o.data.answers||{};
      OFF=(o.data.serverNow||Date.now())-Date.now();LIVE=1;cs();
      initCommon();$('#entry').classList.add('hide');$('#app').classList.remove('hide');
      controls();draw();connect();setInterval(tick,1000);
      $('#pin').value='';
    }).catch(loginError)
  }else{
    var name=($('#nm').value||'').trim(),join=($('#code').value||'').trim();
    if(!name||join.length<5)return loginError('أدخل اسمك ورمز الانضمام.');
    try{id=localStorage.getItem('ali-id')||id;localStorage.setItem('ali-id',id)}catch(x){}
    request('studentJoin',{name:name,code:join,device:id}).then(function(o){
      authToken=o.token;code=o.code;sessionEpoch=o.epoch||1;st=o.state;GOT=1;OFF=(o.serverNow||Date.now())-Date.now();
      ld();me.n=name;sv();LIVE=1;cs();
      initCommon();$('#entry').classList.add('hide');$('#stu').classList.remove('hide');
      connect();shown=-1;draw();pauseUI();
    }).catch(loginError)
  }
}
$('#go').onclick=begin;
$('#entry').addEventListener('keydown',function(e){if(e.key==='Enter')begin()});
setMsg(role==='t'?'أدخل كلمة مرور المعلم لإدارة الحصة.':'أدخل الاسم ورمز الانضمام الظاهر عند المعلم.');
