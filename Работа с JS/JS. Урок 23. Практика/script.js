let response;
var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);

xhr.setRequestHeader('Content-Type', 'application/json');

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        response = JSON.parse(xhr.responseText);
        
        let replacer = ['city', 'street', 'suite', 'zipcode'];
        let length = response.length;
        //console.log(length);

        for (let i = 0; i < length; i++) {
            console.log('****************************************');
            console.log(`Имя пользователя: ${response[i].name}\nНикнейм: ${response[i].username}\nПочта: ${response[i].email}` + 
                `\nАдрес: \n\tГород: ${response[i].address.city}\n\tУлица: ${response[i].address.street}` +
                `\n\tДом/Кв: ${response[i].address.suite}\n\tПочтовый индекс: ${response[i].address.zipcode}` + 
                `\nНомер телефона: ${response[i].phone}\nВебсайт: ${response[i].website}\nМесто работы: ${response[i].company.name}`);
            console.log('****************************************');
            //console.log(JSON.stringify(response[i].address, replacer));
            
        }

        //let address = JSON.stringify(response.address, replacer);

        //let jsonAddress = JSON.parse(address);

        //console.log(address);
        //console.log(jsonAddress);

        
        
        //console.log(xhr.responseText);
        //console.log(response);
    }
};

xhr.send();

//console.log(response);