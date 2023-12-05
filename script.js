console.log('working');

const modal = document.querySelector('#modal');
const content = document.querySelector('#content');
const backdrop = document.querySelector('#modal-backdrop');
const progress = document.querySelector('#progress')


content.addEventListener('click', openCard);

function openCard(event) {
  if (!modal.classList.contains('open') && event.target.closest('.card')) {
    modal.classList.add('open');
  }
}

backdrop.onclick = function () {
  modal.classList.remove('open');
};

const technologies = [
  {
    title: 'HTML',
    discription: 'HTML text',
    type: 'html',
    done: true,
  },
  { title: 'CSS', 
  discription: 'CSS text',
   type: 'css', 
   done: false },
];



function init(){
if(technologies.length === 0){
content.innerHTML = `<p class='empty'>Технологий пока нет. Добавьте первую</p>`
} else {
  let html = ''
for(let i = 0;i<technologies.length;i++){
  const tech = technologies[i]
  html += toCard(tech)
}
// content.innerHTML = technologies.map(toCard).join()
}
}



function toCard(tech){
  const doneClass = tech.done? 'done' : ''
  return `
  <div class="card ${doneClass}">
  <h3>${tech.title}</h3>
</div>
`
}


init()