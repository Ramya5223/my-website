const radios = document.querySelectorAll('input[name="unit"]');
const total = document.getElementById('total');

const prices = {
    unit1: '$10.00 USD',
    unit2: '$18.00 USD',
    unit3: '$24.00 USD'
};

const dropdowns = {
    unit1: document.getElementById('dropdowns1'),
    unit2: document.getElementById('dropdowns2'),
    unit3: document.getElementById('dropdowns3')
};

function updateUI() {
    radios.forEach(radio => {
        if (radio.checked) {
            total.textContent = prices[radio.id];
            Object.keys(dropdowns).forEach(id => {
                dropdowns[id].style.display = (id === radio.id) ? 'block' : 'none';
            });
        }
    });
}
updateUI();
radios.forEach(radio => radio.addEventListener('change', updateUI));
