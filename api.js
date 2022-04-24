document.querySelector('#getAll').addEventListener('click',getAll)
function getAll(){
    var xhr = new XMLHttpRequest()
    xhr.open('GET','https://reqres.in/api/users?page=2',true)
    xhr.onload = function(){
        if(this.status === 200){
            let info = JSON.parse(this.responseText)
            console.log(this.responseText)
            let html = ""
            info.data.forEach(element => {
                html += 
                    `<div class="card">
                        <div class="card__name">${element.first_name}</div>
                        <div class="card__email">${element.email}</div>
                        <div class="card__picture">
                            <img src="${element.avatar}" alt="">
                        </div>
                    </div>`
            });
            document.querySelector('#placeholder').innerHTML = html
        }
    }
    xhr.send()
}