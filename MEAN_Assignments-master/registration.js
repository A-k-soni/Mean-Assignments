let registerUser = async () => {

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;



    let url = `http://localhost:3000/adduser?username=${username}&password=${password}&email=${email}&mobile=${mobile}`;


    /* const xhr = new XMLHttpRequest();
     xhr.open('GET', url);
     xhr.onload = () => {
         const res = xhr.responseText;
         console.log(res);
         document.querySelector("#username").value = "";
         document.querySelector("#password").value = "";
         document.querySelector("#email").value = "";
         document.querySelector("#mobile").value = "";
     };
     xhr.send();*/

    await fetch(url);
    document.querySelector("#username").value = "";
    document.querySelector("#password").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#mobile").value = "";
};