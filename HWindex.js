const ul = document.querySelector('ul');
const form = document.querySelector('form');
const input = document.querySelector('input');

form.onsubmit = function (event) {
  event.preventDefault();
  if (!input.value) return;
  const li = document.createElement('li');

  li.textContent = input.value;
  ul.append(li);
  input.value = '';
};
