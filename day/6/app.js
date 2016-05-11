const days = document.querySelectorAll('.Main-day')
const message = document.getElementById('message')

const months = [
  'January','February','March','April','May','June','July',
  'August','September','October','November','December'
]

const messages = [
  'No vayas por donde el camino te lleve ve por donde no hay camino y deja huella',
  'Semana... que seas cortita o pases rapidito para que pronto sea viernes',
  'La inspiración siempre cantara y jamas explicara',
  'la verdades amistad nunca termina, los amigos son para siempre',
  'Ya casi es viernes, wiiiii',
  'Viernes..!! Sii..!! Te Extrañaba Desde El Lunes..',
  'Empieza el fin de semana! :D',
]

const d = new Date()
const getDay = d.getDay()
const getMonth = d.getMonth()
const getDate = d.getDate()

const currentDay = days[getDay]
const currentDate = currentDay.getElementsByClassName('currentDate')[0]
const month = currentDay.getElementsByClassName('month')[0]
const date = currentDay.getElementsByClassName('date')[0]

currentDay.classList.toggle('today')
currentDate.classList.toggle('show')

month.textContent = months[getMonth]
date.textContent = getDate
message.textContent = messages[getDay]
