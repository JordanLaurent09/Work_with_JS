let element = document.getElementsByClassName('product-button');

for (let i = 0; i < element.length; i++) {
    
    element[i].addEventListener('click', (event)=> {
        let berryName = event.target.parentNode;
        let name = berryName.childNodes[1];
        console.log(name.textContent);
    })
}