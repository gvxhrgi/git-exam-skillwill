const time = new Date();
const yyyy = time.getFullYear();
const mm = String(time.getMonth() + 1).padStart(2, '0');
const dd = String(time.getDate()).padStart(2, '0');

const dateTimeElement = document.querySelector('.date-time');

if (dateTimeElement) {
    dateTimeElement.textContent = `${dd}-${mm}-${yyyy}`;
}