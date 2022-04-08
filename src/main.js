var TINYTYPE = TINYTYPE || {}


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

    $("#backspace").on('mousedown', TINYTYPE.deleteOne);
    
})


TINYTYPE.typeLetter = (event) => {
    let currentTextField = $("#textfield").val();
    let letter = event.data.letter;
    console.log(letter)
    let newTextField = currentTextField + letter;
    $("#textfield").val(newTextField);
}

TINYTYPE.deleteOne = () => {
    let currentTextField = $("#textfield").val();
    let newTextField = currentTextField.substring(0, currentTextField.length - 1);
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