var messagesCount = $('p').length;
$('#count').text(messagesCount);



$("body").on("click", '.trash', function(){
    this.parentNode.remove();
    var messagesCount = $('p').length;
    $('#count').text(messagesCount);
})

$('#btn-add').click(function(){
    var message = $('#add-message').val();
    $("body").append(`
                        <div class="row">
                            <img class="avatar" src="avatar-1.jpg">
                            <div>
                                <h6>Eric Dupont</h6>
                                <p>`+ message + `</p>
                            </div>
                            <img class="trash"src="trash.png">
                        </div>`

    );
    $('#count').text($('p').length);
    $('#add-message').val("");
})

$('#btn-search').click(function(){
    $('h6').each(function(){
        if($("#search-message").val() != $(this).text()){
            $(this).parent().parent().fadeOut();
        } else {
            $(this).parent().parent().show();
        }
    })
    $("#search-message").val("");
})
