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
        $("#" + element).on('mousedown', {letter: element}, TINYTYPE.typeLetter);


    });

    $("#backspace").on('mousedown', TINYTYPE.delete);
    
})


TINYTYPE.typeLetter = (event) => {
    let currentTextField = $("#textfield").val();
    let letter = event.data.letter;
    if (event.button === 2) {
        event.preventDefault();
        letter = letter.toUpperCase();
    }
    let newTextField = currentTextField + letter;
    $("#textfield").val(newTextField);
}

TINYTYPE.delete = (event) => {  
    let currentTextField = $("#textfield").val();
    if (event.button === 1) {
        let newTextField = currentTextField.substring(0, currentTextField.length - 1);
        $("#textfield").val(newTextField);
    }
    else if (event.button === 2) {
        let lastSpace = currentTextField.lastIndexOf(" ")
        if (lastSpace == -1) {
            $("#textfield").val("");
        }
        else {
            let newTextField = currentTextField.substring(0, lastSpace);
            $("#textfield").val(newTextField);
        }
    }

}
