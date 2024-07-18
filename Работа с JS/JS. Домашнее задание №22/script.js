let element = document.getElementsByClassName('product-button');

let totalAmount = document.getElementById('total-amount');

let amountNumber = parseInt(totalAmount.textContent);


for(let i = 0; i < element.length; i++) {
    let keyName = element[i].parentNode.childNodes[1].textContent;

    if(localStorage.getItem(keyName) != null) {
        amountNumber += parseInt(localStorage.getItem(keyName));
        totalAmount.textContent = amountNumber;
    }
}

for (let i = 0; i < element.length; i++) {
    
    element[i].addEventListener('click', (event)=> {
        let berryName = event.target.parentNode;
        let name = berryName.childNodes[1].textContent;

        if (localStorage.getItem(name) != null) {
            let itemCount = localStorage.getItem(name);
            itemCount++;

            localStorage.setItem(name, itemCount);
        }
        else {
            localStorage.setItem(name, 1);
        }
        amountNumber++;

        totalAmount.textContent = amountNumber;
    })
}



let basketCase = document.getElementsByClassName('basket');

//console.log(basketCase.innerHTML);

let pushReadyBasket = basketCase[0];

//console.log(basketCase[0].innerHTML);

pushReadyBasket.addEventListener('click', () => {

    basketCase[0].innerHTML = '<img class="basket-image" src="basket.png" alt="">' + 
    '<p class="zero-point" id="total-amount">' + `${amountNumber}` + '</p>'

    let basketDiv = document.createElement('div');
    
    basketDiv.textContent = "Корзина товаров";

    basketDiv.className = 'product-container';
   
    pushReadyBasket.appendChild(basketDiv);

    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);

        console.log(key);

        for (let j = 0; j < element.length; j++) {
            if (key === element[j].parentNode.childNodes[1].textContent) {

                let berryInfo = document.createElement('div');

                berryInfo.className = 'product-box';
                

                let title = document.createElement('h3');
                title.textContent = key;

                let description = document.createElement('p');
                description.textContent = element[j].parentNode.childNodes[5].textContent;

                let picture = document.createElement('img');
                picture.className = 'product-image';
                
                picture.src = element[j].parentNode.childNodes[3].src;

                berryInfo.appendChild(title);
                berryInfo.appendChild(description);
                berryInfo.appendChild(picture);

                basketDiv.appendChild(berryInfo);


                console.log(element[j].parentNode.childNodes[3].src);
                console.log(element[j].parentNode.childNodes[5].textContent);
            }
        }
        
    }

    //console.log(basketCase[0].innerHTML);
});