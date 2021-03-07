const characterCounter = function() {
  const myTweetText = document.getElementById('tweet-text');
  const myCounter = document.getElementById('counter');
  $(myTweetText).on("input", function() {
    const max = 140;
    let length = $(this).val().length;
    let numOfCharsLeft = max - length;
    if (length >= max) {
      $(myCounter).text(numOfCharsLeft, "You have reached the limit");
      $(myCounter).css("color", "red");
    } else {
      $(myCounter).css("color", "#545149");
      $(myCounter).text(numOfCharsLeft + " characters left");
    }
  });
};


$(document).ready(function() {
  characterCounter();
});