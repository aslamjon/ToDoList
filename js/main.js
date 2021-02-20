let data = [
    {id:1,content:'task',completed:false},
    {id:2,content:'Developer',completed:false}
];


function Res() {
    document.getElementById("result").innerHTML = '';
    for(let i = 0; data.length > i; i++) {
        document.getElementById("result").innerHTML += `
        <div class="d-flex justify-content-between mt-1 flex-md-wrap-reverse">
            <div class="mr-3">
                <span class="mr-2 bold">${(data.indexOf(data[i],i)+1)}.</span>`+
                `${(data[i].completed) ? '<span class="text-line-through">'+data[i].content+'</span>' : data[i].content}`+
            `</div>
            
            <span>
                <img src="img/check1.svg" alt="check" class="cursor-pointer icon-chack" onclick="Complated(${data[i].id})">
                <img src="img/delete (1).svg" alt="delete" class="cursor-pointer icon-delete"  onclick="Delete(${data[i].id})">
            </span>
        </div>
        `;
    }
}

Res()

function Add() {
    let text = document.forms['main']['content'].value;
    if(text !== '') {
        let obj = {id:data.length+1,content:text,completed:false};
        data.push(obj);
        document.forms['main']['content'].value = '';
        Res()
    } else {
        alert('there is not information. plase try again')
    }
    
}

function Delete(id) {
    for(let i = 0; data.length > i; i++) {
        if(id === data[i].id) {
            data.splice(i,1);
            Res()
        }
    }
}

function Complated(id) {
    for(let i = 0; data.length > i; i++) {
        if(id === data[i].id) {
            data[i].completed = true;
            Res()
        }
    }
}

function ClearComplated() {
    for(let i = 0; data.length > i; i++) {
        if(data[i].completed == true) {
            data.splice(i,1);
            Res()
        }
    }
}

function ClearAll() {
    for(let i = 0; data.length > i; i++) {
        data.splice(i,100);
        Res()
    }
}