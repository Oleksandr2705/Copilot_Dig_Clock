// filepath: /c:/Document/VS_My/Copilot/Digital_oclock/clock.js
let lastPlayedMinute = -1; // Последняя минута, в которую проигрывался звук

export function updateTime() { // Обновление времени на часах
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const colonElement = document.getElementById('colon');
    const dateElement = document.getElementById('date'); // Элемент с датой
    const now = new Date(); // Текущее время
    const hours = now.getHours().toString().padStart(2, '0'); // Часы
    const minutes = now.getMinutes().toString().padStart(2, '0'); // Минуты

    const daysOfWeekGenitive = ['неділя', 'понеділок', 'вівторок', 'середа', 'четвер', 'п\'ятниця', 'субота']; // Родительный падеж
    const monthsGenitive = ['січня', 'лютого', 'березня', 'квітня', 'травня', 'червня', 'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня']; // Родительный падеж

    const dayOfWeek = daysOfWeekGenitive[now.getDay()]; // День недели
    const day = now.getDate(); // День месяца
    const month = monthsGenitive[now.getMonth()]; // Месяц

    hoursElement.textContent = hours;
    minutesElement.textContent = minutes;
    dateElement.textContent = `${dayOfWeek}, ${day} ${month}`; // Вывод даты

    // Переключение видимости двоеточия
    colonElement.classList.toggle('hidden');

    playChime();
}

export function playChime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    console.log(`Current time: ${hours}:${minutes}`);

    if (minutes === lastPlayedMinute) {
        return; // Звук уже проигран в эту минуту
    }

    lastPlayedMinute = minutes;

    let chimeFile = '';

    if (minutes === 0) {
        chimeFile = `sound/${hours === 0 ? 12 : hours}.mp3`;
    } else if (minutes === 30) {
        chimeFile = 'sound/30.mp3';
    }

    if (chimeFile) {
        const chime = new Audio(chimeFile);
        console.log(`Playing chime: ${chimeFile}`);
        chime.play();
    }
}