document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const textAreaElement = document.querySelector('textarea');
    const addButtons = document.querySelectorAll('.add-product');
    let totalPrice = 0;

    addButtons.forEach((button) => {
        button.addEventListener('click', () => {

            const productPrice = button.closest('.product')
                .querySelector('.product-line-price').textContent;
            const productName = button.closest('.product')
                .querySelector('.product-title').textContent;
            totalPrice += parseFloat(productPrice);

            textAreaElement.textContent += `Added ${productName} for ${productPrice} to the cart.\n`;
        });
    });
}
