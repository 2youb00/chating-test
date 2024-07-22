var socket=io.connect('http://localhost:3005');
let username=document.querySelector("#username");
let mesage=document.querySelector("#message");
let sendbtn=document.querySelector("#send");
let meg_container=document.querySelector(".meg-container");

sendbtn.addEventListener('click',function(){
    if(username.value!=''||mesage.value!=''){
        socket.emit('chat',{username:username.value, message:mesage.value});
    mesage.value='';
    }
});

socket.on('chat2',function(data){
    console.log('message: ', data);
    meg_container.innerHTML+=`
    <div class="container">
    <h3>${data.username} :</h3>
    <p>${data.message}</p>
  </div>
    `;
});