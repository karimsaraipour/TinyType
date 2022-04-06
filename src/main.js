var TINYTYPE = TINYTYPE || {}


$(document).ready(() => {
    console.log('Initialize TinyType')
    // Calling the function
    let alphabet = () => {
        let alphabet = [];
        for (i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
            alphabet.push(String.fromCharCode(i));
        }
        return alphabet
    }
    
    console.log(alphabet.call())
    // Printing the array inside the .letters element
    $.each(alphabet.call(), (index, element) => {
        $("#keyboard").append("<td><div class='letter'>" + element + "</div></td>");
    });
    
})
