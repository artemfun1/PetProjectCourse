console.log('working');

const modal = document.querySelector('#modal');
const content = document.querySelector('#content');
const backdrop = document.querySelector('#modal-backdrop');
const progress = document.querySelector('#progress')


const APP_TITLE = document.title


content.addEventListener('click', openCard);
modal.addEventListener('change', toggleTech)

function openCard(event) {
  const data = event.target.dataset
  const tech = technologies.find(t => t.type === data.type)

  if (!tech) return
 
  openModal(toModal(tech), tech.title)
  
}

function toModal(tech){
  const checked = tech.done ? 'checked' : ''
return `
<h2>${tech.title}</h2>
<p>${tech.discription}
</p>
<hr />
<div>
  <input type="checkbox" id="done" ${checked} data-type='${tech.type}' />
  <label for="done">Выучил</label>
</div>`
}

function toggleTech(event){
  const type = event.target.dataset.type
  const tech = technologies.find(t => t.type === type)
  tech.done = event.target.checked
  init()
}

function openModal(html, title){
  document.title = `${title} | ${APP_TITLE} `
  modal.innerHTML = html
  modal.classList.add('open');
}


backdrop.onclick = function () {
  modal.classList.remove('open');
  document.title = APP_TITLE
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
   done: false},
   
];

function init(){
renderCards()
renderProgress()

}

function renderProgress(){
const percent = computeProgressPercent()
let background

if (percent <=30){
  background = '#e75a5a'
} else if (percent>30 && percent<70){
  background = '#f99415'
} else if(percent >= 70){
background = '#73ba3c'
}
progress.style.background = background
progress.style.width = `${percent}%`
progress.textContent = percent? percent +'%' : ''
}

function computeProgressPercent(){
if(technologies.length === 0) return 0
let doneCount = 0 
for(let i =0;i<technologies.length;i++){
  if(technologies[i].done){
    doneCount++
  }
}
return  Math.round((100* doneCount) / technologies.length)
}

function renderCards(){
if(technologies.length === 0){
content.innerHTML = `<p class='empty'>Технологий пока нет. Добавьте первую</p>`
} else {
  let html = ''
for(let i = 0;i<technologies.length;i++){
  const tech = technologies[i]
  html += toCard(tech)
}
content.innerHTML = html
}
}

function toCard(tech){
  const doneClass = tech.done? 'done' : ''
  return `
  <div class="card ${doneClass}" data-type="${tech.type}">
  <h3 data-type="${tech.type}">${tech.title}</h3>
</div>
`
}


init()