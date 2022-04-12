const btnCreateCont = document.getElementById("createCont")
const nameCont = document.getElementById("nameCont")
const btnZerarCont = document.getElementById("zerar")

function newContador() {
    const c = document.createElement("div");
    if (nameCont.value === "") {
      return alert("Informe um tipo para contar.");
    }
    const type = nameCont.value;
    c.style.background = randomColor();
    c.classList.add("nameCont");
    ampliar(event); 
    c.innerHTML = `
    <div class="box" ">
    Contador ${type}: <br/>
    <p class="valor" id="valor">0</p>
    <button class="button" id="zerar" onclick="zerar(event)">Zerar</button>
    <br/>
  </div>
    `;
    c.onclick = (event) => {
        ampliar(event);
    };
    document.getElementById("listCont").appendChild(c);
    document.getElementById("nameCont").value = "";
  }

function zerar(event) {
    event.stopPropagation();
    const element = event.target.parentElement;
    const count = element.children[1];
    count.innerHTML = "0";  
}

function randomColor() {
    return("#" + parseInt(Math.random() * 0xffffff).toString(16).padStart(6, "0"));
}

function ampliar(event) {
    console.log(event);
    console.log(event.target);
    if(event.target.classList[0] == "box"){
    const element = event.target;
    console.log(element);
    const c = element.children[1];
    count.innerHTML = parseInt(c.innerHTML) + 1;
} else {
    const element = event.target.parentElement;
    const c = element.children[1];
    c.innerHTML = parseInt(c.innerHTML) + 1;

  }
}