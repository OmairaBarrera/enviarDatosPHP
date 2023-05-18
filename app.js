let myform = document.querySelector('#myForm');
myform.addEventListener("submit", async (e) => {
    e.preventDefault();
    let myHeaders = new Headers({"Content-type":"application/json"})
    let data = Object.fromEntries(new FormData(e.target));
    let config = {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(data)
    };
    let res = await(await fetch("api.php",config)).json();
    console.log(res);
})