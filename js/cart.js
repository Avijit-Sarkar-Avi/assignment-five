const cartArray = [];

function displayPlayers(players) {

    const playerList = document.getElementById('players-cart');
    playerList.innerHTML = '';


    if (cartArray.length < 6) {

        for (let i = 0; i < players.length; i++) {
            const addPlayer = cartArray[i].playerName;



            const ol = document.createElement('ol');
            ol.innerHTML = `
            <li>${i + 1}. <span>${addPlayer}</span></li>
            `;
            playerList.appendChild(ol);
        }

    }

    else {
        alert('You have selected Top Five!')
    }

}



function addToCart(element) {
    const playerName = element.parentNode.parentNode.children[0].innerText;

    const playerObj = {
        playerName: playerName,
    }
    cartArray.push(playerObj);

    document.getElementById('player-count').innerText = cartArray.length;
    displayPlayers(cartArray);

}

