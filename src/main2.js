var TINYTYPE = TINYTYPE || {}

window.addEventListener('contextmenu', (event) => {event.preventDefault()})
$(document).ready(() => {
    console.log('Initialize TinyType')
    // modify basic html to have divs for alphabet
    let alphabet = () => {
        let alphabet = [];
        for (i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
            alphabet.push(String.fromCharCode(i));
        }
        return alphabet
    }
    
    $.each(alphabet.call(), (index, element) => {
        $("#keyboard").append("<td><div class='letter' id='" + element + "'>" + element + "</div></td>");
        $("#" + element).on('click', {letter : element}, TINYTYPE.typeLetter);
        $("#" + element).on('dblclick', {letter : element.toUpperCase()}, TINYTYPE.typeLetter);
        $("#" + element).on('contextMenu', TINYTYPE.deleteSingle);


    });

    $("#fn").on('click', TINYTYPE.insertSpace);
    $("#fn").on('dblclick', TINYTYPE.deleteSingle);
    $("#fn").on('contextMenu', TINYTYPE.deleteWord);

    
})


TINYTYPE.deleteSingle = () => {
    let currentTextField = $("#textfield").val();
    let newTextField = currentTextField.substring(0, currentTextField.length - 1);
    $("#textfield").val(newTextField);
}

TINYTYPE.insertSpace = () => {
    let currentTextField = $("#textfield").val();
    let newTextField = currentTextField + " ";
    $("#textfield").val(newTextField);
}

TINYTYPE.deleteWord = () => {
    let currentTextField = $("#textfield").val();
    let lastSpace = currentTextField.lastIndexOf(" ")
    if (lastSpace == -1) {
        $("#textfield").val("");
    }
    else {
        let newTextField = currentTextField.substring(0, lastSpace);
        $("#textfield").val(newTextField);
    }
}
TINYTYPE.typeLetter = (event) => {
    let letter = event.data.letter;
    let currentTextField = $("#textfield").val();
    let newTextField = currentTextField + letter;
    $("#textfield").val(newTextField);
}
