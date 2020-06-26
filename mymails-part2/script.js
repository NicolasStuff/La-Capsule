var counter = document.getElementsByClassName('row').length -1 ;

console.log(counter);

document.getElementById('counter').textContent = "Messages total: " + counter;

var trash = document.getElementsByClassName('trash_button');

for(var i = 0; i < trash.length; i++) {
    document.getElementsByClassName('trash')[i].addEventListener("click", 
    function(){
        this.parentNode.parentNode.remove();
        var counter = document.getElementsByClassName('row').length -1 ;
        document.getElementById('counter').textContent = "Messages total: " + counter;
    }
    )
}