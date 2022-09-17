const headerTime = document.querySelector('.header__time');
const headerDate = document.querySelector('.header__date');

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 
        'Sep', 'Oct', 'Nov', 'Dec'];
setInterval(() => {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const hoursIn12HrFormat = hour >= 13 ? hour % 12 : hour;
    const minutes = time.getMinutes();
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const doubleDigitMin = minutes < 10 ? minutes.toString().padStart(2, '0') : minutes;
    const doubleDigitDate = date < 10 ? date.toString().padStart(2, '0') : date;

    headerTime.innerHTML = hoursIn12HrFormat + ':' + doubleDigitMin + ' ' 
        + `<span id="am-pm"> ${ampm}<span>`;
    headerDate.innerText = `${days[day]}, ${months[month]} ${doubleDigitDate}`;

}, 1000);