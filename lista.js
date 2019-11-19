var lista=document.getElementById("lista");
var item=document.querySelector("ul#lista li");
var link=document.querySelector("ul#lista li a");
var button=document.querySelector("ul#lista li button");

if (localStorage.getItem("lista")==null)
    var todo = new Array(0);
else
var todo = JSON.parse(localStorage.getItem("lista")); 

console.log(item,link,button);
console.log(localStorage.getItem("lista"));
console.log(todo.length);
renderlista();

function excluirlista(i){
    todo.splice(i,1);   
    renderlista();
}

function salvalista(){
    localStorage.setItem("lista",JSON.stringify(todo));

}

function renderlista(){
    lista.innerHTML='';
    for(todoItem of todo){
        if (todoItem!=undefined){
            var newItem = document.createElement("li");
            var newLink = document.createElement("a");
            var newButton = document.createElement("button");    
            newLink.setAttribute("href","http://"+todoItem[1]);
            newLink.setAttribute("target","_blank");
            newLink.appendChild(document.createTextNode(todoItem[0]));
            newButton.appendChild(document.createTextNode("Excluir"));
            newButton.setAttribute("onclick","excluirlista(" + todo.indexOf(todoItem)+")");
            newItem.appendChild(newLink);
            newItem.appendChild(newButton);
            lista.appendChild(newItem);
        }
    }

    var newItem = document.createElement("li");
    newItem.setAttribute("id","novo");
    var newButton = document.createElement("button");
    newButton.appendChild(document.createTextNode("Adicionar"));
    newButton.setAttribute("onclick","addlista()");
    newButton.setAttribute("id","add");
    //var liadd = document.querySelector("ul#lista li#novo");
    newItem.appendChild(newButton);        
    lista.appendChild(newItem);
    salvalista();
}

function addlista(){
    var diag =  document.getElementById("adddiag");
    var elementAdd = document.getElementById("novo");
    elementAdd.style.visibility="hidden";
    diag.style.visibility="visible";
}

function tamlista(){
    cont = lista.getElementsByTagName("li").length;
    return cont;
}

function confirmaadd(){
    var elementAdd = document.getElementById("novo");
    var elementNome = document.getElementById("nome");
    var elementLink = document.getElementById("link");
    todo.push([elementNome.value,elementLink.value]);
    elementAdd.style.visibility="visible"; 
    var diag =  document.getElementById("adddiag");
    diag.style.visibility="hidden";
    elementNome.value='';
    elementLink.value='';
    renderlista();
    
}