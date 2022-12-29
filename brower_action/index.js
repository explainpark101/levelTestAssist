


window.addEventListener('DOMContentLoaded', () => {
  renderAll();
})

const renderAll = async () => {
  const PasswordBox = document.querySelector("input[name=passwordCode]");
  const 이름 = document.querySelector("input[type='이름']");
  const 학교 = document.querySelector("input[type='학교']");
  const 학년 = document.querySelector("input[type='학년']");
  const 연락처 = document.querySelector("input[type='연락처']");
  await chrome.storage.local.get("이름",(result)=>{
    이름.value = result.이름;
  });
  await chrome.storage.local.get("학교",(result)=>{
    학교.value = result.학교;
  });
  await chrome.storage.local.get("학년",(result)=>{
    학년.value = result.학년;
  });
  await chrome.storage.local.get("연락처",(result)=>{
    연락처.value = result.연락처;
  });
  
  [이름, 학교, 학년, 연락처].forEach(el=>{el.addEventListener("change", (e)=>{
    chrome.storage.local.set({"이름": 이름.value});
    chrome.storage.local.set({"학교": 학교.value});
    chrome.storage.local.set({"학년": 학년.value});
    chrome.storage.local.set({"연락처": 연락처.value});
  });});
}