//Typing animation

var typed = new Typed(".auto-type",{
    strings: [
      '<span class="one">CSE Department.</span>',
      '<span class="two">World Of Innovation.</span>',
      '<span class="two">The Realm Of Teaching.</span>',
      '<span class="one">CSE Department.</span>'
    ],
    typeSpeed:100,
    backSpeed:50,
    loop:false,
    showCursor: true,
    onComplete: function() {
      var cursor = document.querySelector('.typed-cursor');
      cursor.style.display = 'none';
    }
  })

  //HOD

function toggleParagraph() {
  var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  var paragraph = document.getElementById("paragraph");
  var text= document.getElementById("Show")
  if (screenWidth >= 600) {
    var halfImage = document.getElementById("halfImage");
    if (paragraph.style.display === "none") {
      paragraph.style.display = "block";
      halfImage.style.backgroundImage = "url('../assets/images/hodsir.jpg')";
      text.innerHTML = "Show Less";

    } else {
      paragraph.style.display = "none";
      halfImage.style.backgroundImage = "url('../assets/images/hod.jpeg')";
      text.innerHTML = "Show More";
    }
  }
  else{
    if (paragraph.style.display === "none") {
      paragraph.style.display = "block";
      text.innerHTML = "Show Less";
    } else {
      paragraph.style.display = "none";
      text.innerHTML = "Show More";
    }
  }
}

toggleParagraph();
  // Counting Numbers
function animateCounterNumbers() {
  var counterElements = document.querySelectorAll('.counter-numbers');
  var duration = 1000; 
  var totalSteps = 100; 

  counterElements.forEach(function(element) {
    var targetNumber = parseInt(element.getAttribute('data-number'));
    var startNumber = 0;
    var step = targetNumber / totalSteps;
    var intervalDuration = duration / totalSteps;

    var interval = setInterval(function() {
      if (startNumber >= targetNumber) {
        clearInterval(interval);
        element.textContent = targetNumber + "+";
        return;
      }
      startNumber += step;
      element.textContent = Math.round(startNumber);
    }, intervalDuration);
  });
}

function handleIntersection(entries, observer) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      animateCounterNumbers();
      observer.unobserve(entry.target);
    }
  });
}

var counterSection = document.querySelector('.section-work-data');
var observer = new IntersectionObserver(handleIntersection, {
  root: null,
  rootMargin: '0px',
  threshold: 0.5 
});

observer.observe(counterSection);

