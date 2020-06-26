var messagesCount = document.getElementsByTagName('p').length;
document.getElementById('count').textContent = messagesCount;

for(var i=0; i<document.getElementsByClassName('trash').length; i++){
    document.getElementsByClassName('trash')[i].addEventListener("click",
    function(){
        this.parentNode.remove();
        var messagesCount = document.getElementsByTagName('p').length;
        document.getElementById('count').textContent = messagesCount;
    }
    )

}
document.getElementById('add_button').addEventListener('click',
function() {
    var input = document.getElementById('add_message').value;

    //creation de la div dans le body 
    var bigDiv = document.createElement('div');
    bigDiv.setAttribute('class', 'row');
    document.body.appendChild(bigDiv);

    //creation de l'avatar dans la div
    var avatar = document.createElement('img');
    avatar.setAttribute('class', 'avatar');
    avatar.src = "avatar-3.jpg";
    bigDiv.appendChild(avatar);

    //creation de la div dans la div enfant 
    var smallDiv = document.createElement('div');
    bigDiv.appendChild(smallDiv);

    //creation du Nom dans la small div
    var name = document.createElement("h6");
    name.innerHTML = "Nicolas Ivorra";
    smallDiv.appendChild(name)

    //creation de la balise de text dans la small div
    var element = document.createElement("p");
    element.innerHTML = input;
    smallDiv.appendChild(element)

    //creation de l'image trash dans la div
    var trash = document.createElement('img');
    trash.setAttribute('class', 'trash');
    trash.src = 'trash.png';
    bigDiv.appendChild(trash);

    //document.getElementsByClassName('trash').src = "trash.png";
    //creation de l'avatar dans la div
    //document.body.bigDiv.appendChild(trash);
    //document.body.getElementById("row").appendChild(trash);
}
)