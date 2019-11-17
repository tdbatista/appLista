var lista=document.getElementById("lista");

function excluirlista(i){

    var itens=lista.childNodes;
    console.log(itens);
    var item=document.getElementById(i);
    lista.removeChild(item);
}

function addlista(){
    var diag =  document.getElementById("adddiag");
    var elementAdd = document.getElementById("novo");
    elementAdd.style.visibility="hidden";
    var elementNome = document.createElement("input");
    elementNome.setAttribute("id","nome");
    var elementLink = document.createElement("input");
    elementLink.setAttribute("id","link");    
    var elementOk = document.createElement("button");
    elementOk.setAttribute("onclick","confirmaadd()");    
    var textBtn = document.createTextNode("OK");
    elementOk.appendChild(textBtn);
    diag.appendChild(elementNome);
    diag.appendChild(elementLink);
    diag.appendChild(elementOk);
}

function tamlista(){
    cont = lista.getElementsByTagName("li").length;
    return cont;
}

function confirmaadd(){
    var elementAdd = document.getElementById("novo");
    var elementNome = document.getElementById("nome");
    var elementLink = document.getElementById("link");
   
    var item=document.createElement("li");
    var link=document.createElement("a");
    var btn = document.createElement("button");
    item.setAttribute("id",tamlista()-1);
    link.appendChild(document.createTextNode(elementNome.value));
    link.setAttribute("href","http://"+elementLink.value);
    link.setAttribute("target","_blank");
    btn.appendChild(document.createTextNode("Excluir"));
    btn.setAttribute("id","excluir");
    btn.setAttribute("onclick","excluirlista("+(tamlista()-1)+")");
    item.appendChild(link);
    item.appendChild(btn);
    elementAdd.remove;
    lista.appendChild(item);
    lista.appendChild(elementAdd);
    elementAdd.style.visibility="visible"; 
    var diag =  document.getElementById("adddiag");
    while (diag.firstChild)diag.removeChild(diag.firstChild); 
    
}