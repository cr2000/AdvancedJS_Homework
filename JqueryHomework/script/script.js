let input = $(`input`);
let button = $(`#theButton`);
let placeForText = $(`#printArea`);

// Event
button.click (function(){
    let inputVal = $(`input`).val();
    $(`#areaForText`).text(`Helo there ${inputVal}!`);
})
