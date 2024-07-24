let themeBtn = document.querySelector('#theme-btn');

if (localStorage.getItem('theme') === 'active') {
  themeBtn.classList.add('fa-sun');
  document.body.classList.add('active');
}

themeBtn.onclick = () => {
  themeBtn.classList.toggle('fa-sun');

  if (themeBtn.classList.contains('fa-sun')) {
    localStorage.setItem('theme', 'active');
    document.body.classList.add('active');
  } else {
    localStorage.setItem('theme', 'inactive');
    document.body.classList.remove('active');
  }
};



AOS.init({
  duration:800,
  delay:400
});

var countDownDate = new Date("Oct 25, 2024 00:00:00").getTime();
var x = setInterval(function(){
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24))
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);


  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
},1000);