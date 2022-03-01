const url = 'http://worldtimeapi.org/api/timezone/';

/*TODO: lav passende attributter ud fra de markerede JSON værdier som kan manipulerer med klokken  */
// Altså vælg tidszone fra drop down, og set uret.

let dateTime = new Date;
let ddValue = '';

const dropdown = document.getElementById('dropdown');
const pbTime = document.getElementById('time');
const pbUTC = document.getElementById('UTC');
const pbTimeCon = document.getElementById('timezone-continent');
const pbTimeCity = document.getElementById('timezone-city')

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
      console.log(res);
      getTime(res.datetime);
      pbUTC.innerText = 'utc ' + res.utc_offset;
      pbTimeCon.innerText = res.timezone.split('/')[0];
      pbTimeCity.innerText = res.timezone.split('/')[1].replace('_',' ');

    });
};

function getTime(time) {
  dateTime = time;
  dateTime = dateTime.split('T')[1];
  dateTime = dateTime.split('.')[0];

  // console.log(dateTime);

  pbTime.innerText = dateTime;

}



