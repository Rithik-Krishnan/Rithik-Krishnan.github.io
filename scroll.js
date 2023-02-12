var image = document.getElementById('image');

function fadeOutOnScroll(element) {
    if (!element) {
        return;
    }

    var distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
    var elementHeight = element.offsetHeight;
    var scrollTop = document.documentElement.scrollTop;

    var opacity = 1;

    if (scrollTop > distanceToTop) {
        opacity = 1 - (scrollTop - distanceToTop) / elementHeight;
    }

    if (opacity >= 0) {
        element.style.opacity = opacity;
    }
}

function scrollHandler() {
    fadeOutOnScroll(image);
}

window.addEventListener('scroll', scrollHandler);

const soundCloud = document.querySelector('.sound-cloud')
const off = document.querySelector('#off');
const on = document.querySelector('#on');
const myAudio = document.querySelector('#myAudio');

off.addEventListener('click', () => soundTrack('off'));
on.addEventListener('click', () => soundTrack('on'));

const soundTrack = (soundState) => {
    if (soundState === 'off') {
        on.style.display = 'block';
        off.style.display = 'none';
        soundCloud.style.color = "#08fdd8";
        myAudio.play();
    } else if (soundState === 'on') {
        on.style.display = 'none';
        off.style.display = 'block';
        soundCloud.style.color = "#e01212";
        myAudio.pause();
    }
}

window.onload = function() {

  var pageTitle = document.title;
  var attentionMessage = "Come on mate don't go!😭";

  document.addEventListener('visibilitychange', function(e) {
    var isPageActive = !document.hidden;

    if(!isPageActive){
      document.title = attentionMessage;
    }else {
      document.title = pageTitle;
    }
  });
};
