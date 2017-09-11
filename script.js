var eighthours = moment(new Date(2017, 9, 9, 8, 0, 1));
var remaining = eighthours;
remaining.format("HH:mm:ss");

var timer = new Tock();
var timer = new Tock({
countdown: true,
interval: 1000,
callback: function () {
    remaining.subtract(1, 'seconds');
    document.getElementById("timer").innerHTML = remaining.format("HH") + ':' + remaining.format("mm") + ':' + remaining.format("ss");
    document.title = remaining.hour() + ':' + remaining.minute() + ':' + remaining.second();
},
complete: function () {
  console.log('end');
}});

start();
function start() {
    timer.start(eighthours.format("HH:mm:ss"));
};

function addten() {
  remaining.add(10, 'minutes');
  document.getElementById("timer").innerHTML = remaining.format("HH") + ':' + remaining.format("mm") + ':' + remaining.format("ss");
  document.title = remaining.hour() + ':' + remaining.minute() + ':' + remaining.second();
}

function reset() {
  remaining = moment(new Date(2017, 9, 9, 8, 0, 0));
  document.getElementById("timer").innerHTML = remaining.format("HH") + ':' + remaining.format("mm") + ':' + remaining.format("ss");
  document.title = remaining.hour() + ':' + remaining.minute() + ':' + remaining.second();
}
