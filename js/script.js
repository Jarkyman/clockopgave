const url = 'http://worldtimeapi.org/api/timezone/';

/*TODO: lav passende attributter ud fra de markerede JSON værdier som kan manipulerer med klokken  */
// Altså vælg tidszone fra drop down, og set uret.

let dateTime = new Date;
let ddValue = '';

const dropdown = document.getElementById('dropdown');
const pbTime = document.getElementById('time');

setInterval(function () {
  if (ddValue) {
    worldTimeApiFetch(url + ddValue)
  }
}, 1000);

dropdown.addEventListener('change', () => {
  //console.log(dropdown.value);
  ddValue = dropdown.value;
});

const worldTimeApiFetch = function (url) {
  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      //console.log(res);
      getTime(res.datetime);
    });
};

function getTime(time) {
  dateTime = time;
  dateTime = dateTime.split('T')[1];
  dateTime = dateTime.split('.')[0];

  // console.log(dateTime);

  pbTime.innerText = dateTime;
}


