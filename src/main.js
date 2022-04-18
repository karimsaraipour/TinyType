var TINYTYPE = TINYTYPE || {}

window.addEventListener('contextmenu', (event) => {event.preventDefault()});

(function() {
    function scrollHorizontally(e) {
        e = window.event || e;
        let delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        document.getElementById('keyboard').scrollLeft -= (delta * 4); 
        e.preventDefault();
    }
    if (document.getElementById('keyboard').addEventListener) {
        // IE9, Chrome, Safari, Opera
        document.getElementById('keyboard').addEventListener('mousewheel', scrollHorizontally, false);
        // Firefox
        document.getElementById('keyboard').addEventListener('DOMMouseScroll', scrollHorizontally, false);
    } else {
        // IE 6/7/8
        document.getElementById('keyboard').attachEvent('onmousewheel', scrollHorizontally);
    }
})();


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

    $("#space").on('mousedown', TINYTYPE.space);
    $("#backspace").on('mousedown', TINYTYPE.delete);
    
})


TINYTYPE.typeLetter = (event) => {
    let currentTextField = $("#textfield").val();
    let letter = event.data.letter;
    if (event.button === 2) {
        // event.preventDefault();
        letter = letter.toUpperCase();
    }
    let newTextField = currentTextField + letter;
    $("#textfield").val(newTextField);
}

TINYTYPE.space = () => {
    let currentTextField = $("#textfield").val();
    let newTextField = currentTextField + " ";
    $("#textfield").val(newTextField);
};

TINYTYPE.delete = (event) => {  
    let currentTextField = $("#textfield").val();
    console.log('backspace')
    if (event.button === 0) {
        let newTextField = currentTextField.slice(0, -1);
        console.log('backspac2e');
        
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

