// Count down as user input texts, if user goes over limit 140, text colour 
$(document).ready(function() {
  const myTweetText = document.getElementById('tweet-text');
  const myCounter = document.getElementById('counter');
  const MAXCOUNTER = 140;

  myTweetText.addEventListener('input', () => {
    const remaining = MAXCOUNTER - myTweetText.value.length;
    const color = remaining < MAXCOUNTER * 0 ? 'red' : null;

    myCounter.textContent = `${remaining}`;
    myCounter.style.color = color;
  });
});
