function changeTitle (){
   ttl4.innerText = "hemos cambiado";
   ttl4.classList.add ("chetoTtl");
}

function restorestyle(){
ttl4.classList.remove ("chetoTtl");
}

function handleToggle( ){
if(ttl4.classList.contains("chetoTtl")){
    console.log("tiene");
}else{
    console.log("no tiene");
}
   }
const para = document.querySelector ("p");
const allPara = document.querySelectorAll ("p");
const ttl4 = document.getElementById (`ttl`);
const btn = document.getElementsByTagName ("button");
const btnToggle = document.getElementById("btnToggle")
btnToggle.addEventListener("click", handleToggle);
btn[0].addEventListener("click", changeTitle);
btn[1].addEventListener("click", restorestyle);

console.log ("primer parrafo", para);
console.log ("todos" , allPara);
allPara [2].innerText = "Ma que Loren"

//vamos a cambiar todos los parrafos con un bucle, utilizaremos la longitud del arreglo que contienen los parrafo para indicarle al bucle cuantas veces debe eterrar
for (let i =0; i< allPara.length; i++) {
    allPara [i].textContent = `párrafo número  ${i + 1}`;
}


let age = 50;
let fName = "Marcelo";
let sName = "Eduardo";
let like = "programar y enseñar";

console.log ( "Mi nombre es " + fName + "" + sName + "y me encanta" + like + "y tengo " + age + " años.");
// string interpolation
console.log (`Mi nombre es ${fName} me encanta ${like} y tengo ${age} años
`); 



//crear elementos en el DOM de acuerdo a datos que ingresen de una fuente externa (base de datos, API, etc.)

const list = document.getElementById ("userList");

const usersData = ["penelope61amor", "gaticaMonkey", "firulete","pedrito", "laJuli33" ]
for (let i= 0; i < usersData.length; i++){
const item = document.createElement("li");
item.textContent = usersData [i];
list.appendChild(item);
}