let cart = [];
const cartElement = document.querySelector('#cart');

window.addEventListener('load', (e) => {
    if (cart.length === 0) {
        cartElement.classList.toggle('hide');
    }

    const buttons = document.getElementsByTagName('button');

    for (const button of buttons) {
        // console.log(button);
        button.addEventListener('click', (e) => {
            cart.push(
                {
                    title: 'Katt',
                    price: 100
                }
            );
            updateCart();
        }, false);
    }


}, false);

function updateCart() {
    if (cart.length !== 0 && cartElement.classList[1] === 'hide') {
        cartElement.classList.toggle('hide');
    }


    total = 0;

    const cartList = document.querySelector('#cart-list');

    cartList.innerHTML = '';

    for (const product of cart) {
        const li = document.createElement('li');
        li.textContent = product.title;

        cartList.appendChild(li);

        total += product.price;
    }

    const totalElement = document.querySelector('#total');
    totalElement.textContent = total + 'kr';
}
