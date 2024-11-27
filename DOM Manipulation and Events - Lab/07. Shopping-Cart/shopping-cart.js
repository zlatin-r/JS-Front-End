document.addEventListener('DOMContentLoaded', solve);

// function solve() {
//     const textAreaElement = document.querySelector('textarea');
//     const addButtons = document.querySelectorAll('.add-product');
//     const checkOutButton = document.querySelector('.checkout');
//     const allButtons = document.querySelectorAll('button');
//     const boughtProducts = {};
//
//     addButtons.forEach((button) => {
//         button.addEventListener('click', (e) => {
//
//             const productElement = button.parentElement.parentElement;
//             const productPrice = productElement.querySelector('.product-line-price').textContent;
//             const productName = productElement.querySelector('.product-title').textContent;
//
//             if (boughtProducts.hasOwnProperty(productName)) {
//                 boughtProducts[productName] += parseFloat(productPrice);
//             } else {
//                 boughtProducts[productName] = parseFloat(productPrice);
//             }
//
//             textAreaElement.textContent += `Added ${productName} for ${productPrice} to the cart.\n`;
//         });
//     });
//
//     checkOutButton.addEventListener('click', (e) => {
//         const totalPrice = Object.values(boughtProducts).reduce((sum, price) => sum + price, 0);
//         const productsList = Object.keys(boughtProducts).join(', ');
//
//         allButtons.forEach((button) => {
//             button.disabled = true;
//         });
//
//         textAreaElement.textContent += `You bought ${productsList} for ${totalPrice.toFixed(2)}.`;
//     });
// }

//-------------------------------------------------------------------------------------------------------------------

function solve() {
    const resultEL = document.querySelector('textarea[disabled]');
    const checkoutBtnEl = document.querySelector('button.checkout');
    const prodCatalogEl = document.querySelector('.shopping-cart');

    const products = {};

    prodCatalogEl.addEventListener('change', (e) => {
        if (e.target.nodeName !== 'BUTTON') return;

        switch (e.target.getAttribute('class')) {
            case 'add-product':

                const productEl = e.target.closest('.product');
                const name = productEl.querySelector('.product-title').textContent;
                const price = Number(productEl.querySelector('.product-line-price').textContent);

                resultEL.value += `Added ${name} for ${price.toFixed(2)} to the cart.`;

                products[name] ??= 0;
                products[name] += price;

                break;

            case 'checkout':



                console.log(checkoutBtnEl);
                break;
        }
    })
}