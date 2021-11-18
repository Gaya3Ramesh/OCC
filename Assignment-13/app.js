function add(){
    const title = document.getElementById("title").value;
    const desc = document.getElementById("desc").value;
    let li = document.createElement("li");
    let uList = document.getElementById("uList")

    const Todo = {
        title:title,
        desc:desc,
    }
    console.log(Todo);
    li.innerHTML = JSON.stringify(Todo);
    uList.appendChild(li)   
}
