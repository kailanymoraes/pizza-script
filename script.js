let modalQtd;

pizzaJson.map((item,index)=>{

    //clonando o pizza-item

    let pizzaItem = document.querySelector('.models .pizza-item').cloneNode(true);

    //appent = cria um elemento dentro do local especificado sempre na ultima posição, ou seja, não substitui os elementos que já estavam dentro
    document.querySelector('.pizza-area').append(pizzaItem);

    //definindo um atributo chamado data-key ao elemento .pizza-item contendo o id da pizza que foi selecionada pelo usuário
    pizzaItem.setAttribute('data-key', index);

    pizzaItem.querySelector('.pizza-item--img img').src = item.img;

    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;

    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;

    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;

    pizzaItem.querySelector('a').addEventListener('click', (event)=> {
        event.preventDefault();

        modalQtd = 1
        let key = event.target.closest('.pizza-item').getAttribute('data-key');

        document.querySelector('.pizzaBig img').src = pizzaJson[key].img;

        document.querySelector('.pizzaInfo h1').innerHTML = pizzaJson[key].name
        document.querySelector('.pizzaInfo--desc').innerHTML = pizzaJson[key].description
        document.querySelector('.pizzaInfo--actualPrice').innerHTML = `R$ ${pizzaJson[key].price.toFixed(2)}`

        document.querySelector('.pizzaInfo--size.selected').classList.remove('selected')

        document.querySelectorAll('.pizzaInfo--size').forEach((size,sizeIndex)=>{

            //fará que o tamanho grande sempre seja selecionada por padrão ao usuário clicar em uma piza
            if(sizeIndex == 2){
                size.classList.add('selected');
            }
            size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex];
            //size.querySelector('span').innerHTML = '123';
        });

        //definindo sempre 1 para a quantidade de pizza
        document.querySelector('.pizzaInfo--qt').innerHTML = modalQtd;

        document.querySelector('.pizzaWindowArea').style.opacity = 0;

        //exibindo a janela modal na tela ao clicar em uma pizza
        document.querySelector('.pizzaWindowArea').style.display = 'flex';

        setTimeout(()=> {
            document.querySelector('.pizzaWindowArea').style.opacity = 1;
        }, 200)

        console.log(pizzaJson[key]);


    });

})