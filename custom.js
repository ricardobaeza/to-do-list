


$('#myInput').on('keydown', function (event) {
    if (event.which === 13) {
        newElement();
    }
});


let newElement = () => {
let myinput = $('#myInput').val();
    if (myinput === '') {
        alert('you have to enter something in the text field');
    } else {
        $('#list').append('<div class=" card-body listItemContainer">' + '<div contenteditable="true" class=" listItem">' + myinput +
            '</div>'  + '<span class="x-and-check">' + '<i class=" delete far fa-times-circle"></i>' + '<i class="completed fas fa-check"></i>' + '</span>' + '</div>');
    }
    $('#myInput').val("");
    $('.delete').click(function () {
            $(this).parent().parent().remove();
    });

    $('.completed').click(function () {
        $(this).parent().parent().css('background-color', '#62f774');
        $(this).parent().parent().addClass('deleteComplete');
    })
};



let deleteCompleted = () => {
    $('.deleteComplete').remove();
}