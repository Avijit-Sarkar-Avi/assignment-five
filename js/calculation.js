function getInputFieldById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldString = inputField.value;
    const inputValue = parseFloat(inputFieldString);
    inputField.value = '';
    return inputValue;
}

function getTextFieldById(textFieldId) {
    const textField = document.getElementById(textFieldId);
    const textFieldString = textField.innerText;
    const textValue = parseFloat(textFieldString);
    return textValue;
}

function setTextElementValueById(textFieldId, newValue) {
    const textField = document.getElementById(textFieldId);
    textField.innerText = newValue;
}





document.getElementById('btn-player').addEventListener('click', function () {
    const perPlayerCost = getInputFieldById('player-cost');
    const playerCount = getTextFieldById('player-count');



    const fivePlayerCost = perPlayerCost * playerCount;

    const totalPlayer = getTextFieldById('total-playercost');
    const totalPlayerCost = totalPlayer + fivePlayerCost;

    setTextElementValueById('total-playercost', totalPlayerCost);
})

document.getElementById('btn-total').addEventListener('click', function () {
    const totalPlayer = getTextFieldById('total-playercost');
    const managerCost = getInputFieldById('manager-cost');
    const coachCost = getInputFieldById('caoch-cost');
    const totalCost = getTextFieldById('total-cost');
    const totalAmount = managerCost + coachCost + totalCost + totalPlayer;
    setTextElementValueById('total-cost', totalAmount);

})


