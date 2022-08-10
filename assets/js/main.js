const searchFunction = () => {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById('searchInput');
  filter = input.value.toUpperCase();
  table = document.getElementById('paperTable');
  tr = table.getElementsByTagName('tr');

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName('td')[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = '';
      } else {
        tr[i].style.display = 'none';
      }
    }
  }
};

const RemoveButton = () => {
  const removeButton = document.createElement('button');

  removeButton.innerText = 'Remover';
  removeButton.addEventListener('click', deleteRow);
  removeButton.classList.add('remove-button');

  return removeButton;
};

const deleteRow = (e) => {
  const removeButton = e.target;

  const usedPaper = removeButton.parentElement;

  usedPaper.remove();

  return removeButton;
};

const saveToLocalStorage = () => {
  localStorage.setItem('material');
};

const addTableRow = (e) => {
  e.preventDefault();

  // gets the input from the form
  const tableBody = document.querySelector('[data-tbody]');
  const input1 = document.querySelector('[data-form-material]');
  const material = input1.value;
  localStorage.setItem('materialLocal', JSON.stringify(material));
  console.log(localStorage);
  if (material === '') {
    window.alert('Preencha todos os campos!');
    return;
  }

  const input2 = document.querySelector('[data-form-magazine]');
  const magazine = input2.value;
  localStorage.setItem('magazineLocal', magazine);
  console.log(localStorage);
  if (magazine === '') {
    window.alert('Preencha todos os campos!');
    return;
  }
  const input3 = document.querySelector('[data-form-position]');
  const position = input3.value;
  localStorage.setItem('positionLocal', position);
  console.log(localStorage);
  if (position === '') {
    window.alert('Preencha todos os campos!');
    return;
  }

  const side = document.querySelector('input[name="paper-side"]:checked').value;

  // creates a new table cell in the html document
  const localMaterial = JSON.parse(localStorage.getItem('materialLocal'));
  const localMagazine = localStorage.getItem('magazineLocal');
  const localPosition = localStorage.getItem('positionLocal');
  const addRow = document.createElement('tr');
  const content = `<td>${localMaterial}</td><td>${localMagazine}${localPosition}</td><td>${side}</td>`;

  addRow.innerHTML = content;

  tableBody.appendChild(addRow);
  addRow.appendChild(RemoveButton());
  input1.value = '';
  input2.value = '';
  input3.value = '';
};

// creates a function to interact with the form button
const newPaper = document.querySelector('[data-form-button]');
newPaper.addEventListener('click', addTableRow);
