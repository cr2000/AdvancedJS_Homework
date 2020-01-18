console.log(`helo`);


let textInput = $(`#input`);
let colorInput = $(`#color`);
let button = $(`#generate`);
let messageHeader = $(`#message`);


// Event

button.click( function() {
   let inputText = textInput.val();
   let inputColor = colorInput.val();
//    let message = $(`#message`).toggle(true);
   
   if(inputText === `` || inputColor === ``) {
    $(`#message`).text(`Error message`);
    return;
    }
    let outputText = $(`#message`).before($(`<h1></h1>`).text(inputText).css(`color`,inputColor)).toggle();
})
