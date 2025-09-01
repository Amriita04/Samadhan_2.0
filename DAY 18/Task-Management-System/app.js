const cards = document.querySelectorAll('.card');
const columns = document.querySelectorAll('.column');

cards.forEach(card => {
  card.addEventListener('dragstart', dragStart);
});

columns.forEach(column => {
  column.addEventListener('dragover', dragOver);
  column.addEventListener('drop', drop);
});

function dragStart(e) {
  e.dataTransfer.setData('text/plain', e.target.innerText);
  e.dataTransfer.setData('text/html', e.target.outerHTML);
  e.target.classList.add('dragging');
}

function dragOver(e) {
  e.preventDefault();
}

function drop(e) {
  e.preventDefault();
  const data = e.dataTransfer.getData('text/html');
  const draggingCard = document.querySelector('.dragging');
  if (draggingCard) {
    draggingCard.remove();
  }
  this.insertAdjacentHTML('beforeend', data);
  const newCard = this.lastElementChild;
  newCard.classList.remove('dragging');
  newCard.addEventListener('dragstart', dragStart);
}
