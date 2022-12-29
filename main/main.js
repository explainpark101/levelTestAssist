function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
const csrftoken = getCookie('csrftoken');

const reportThis = () => {
    new Promise((resolve, reject)=>{
        let content = {};
        
        return resolve();
    })
    fetch("localhost:8000/testing/result",{
        method:"POST",
        headers:{
            "Content-Type":"application/json; charset=euc-kr",
            "X-CSRFToken": csrftoken
        },
        body: JSON.stringify({url:window.location.href})
    })
    .then(resp=>{
        console.log(resp);
        return resp.json()
    })
    .then(data=>{
        console.log(data);
    });
}


reportThis();