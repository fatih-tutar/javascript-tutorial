document.querySelector('#getInfo').addEventListener('click',loadInformation)

function loadInformation(){
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'info.json', true)
    xhr.onload = function() {
        if(this.status === 200){
            console.log('Successful!')
            console.log(this.responseText)
            console.log(JSON.parse(this.responseText))
            let info = JSON.parse(this.responseText)
            let html = 
                `<tr>
                    <td>${info.name}</td>
                    <td>${info.surname}</td>
                    <td>${info.age}</td>
                </tr>`
            document.querySelector("#tbody").innerHTML = html
        }else{
            console.log('Unsuccessful!')
        }
    }
    xhr.send()
}

document.querySelector('#getAllInfos').addEventListener('click', loadInformations)

function loadInformations(){
    const xhr = new XMLHttpRequest()
    xhr.open('GET','info.json',true)
    xhr.onload = function(){
        let info = JSON.parse(this.responseText)
        let html = ""
        info.forEach(element => {
            html += `<tr>
                <td>${element.name}</td>
                <td>${element.surname}</td>
                <td>${element.age}</td>
            </tr>`
        });
        document.querySelector('#tbody').innerHTML = html
    }
    xhr.send()
}