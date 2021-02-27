/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(() => {
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]

  const renderTweets = function(tweets) {
    for (tweet of tweets) {
      const value = createTweetElement(tweet)
      $(".tweets").prepend(value)
    }
  };
  // onmouseover="bigImg(this)" onmouseout="normalImg(this)"
  // onmouseover = "document.getElementById('userhandle').style.display = 'block'"
  const createTweetElement = function(tweet) {
    let html = `<article class="tweet" id="tweet" >
    <header class="tweet-header">
      <img src="${tweet.user.avatars}" class="profile-img"></img>
      <p class="name-tag">${tweet.user.name}</p>
      <p class="userhandle">${tweet.user.handle}</p>
    </header>
    <p class="tweet-paragraph">${tweet.content.text}</p>
    <footer>
      <p>10 days ago</p>
      <div class="icons">
        <i class="fas fa-flag fa-xs"></i>
        <i class="far fa-retweet fa-xs"></i>
        <i class="far fa-heart fa-xs"></i>
      </div>
    </footer>
  </article>`
  return html  
  };

  $(document).ready(function() {
    $("#long-text").hide()
  })
  $(document).ready(function() {
    $("#empty-box").hide()
  })

  $(function() {
    const targetForm = document.getElementById("target");
    targetForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const value = document.getElementById("tweet-text").value;
    if (value.length > 140) {
      $(document).ready(function() {
        $("#long-text").show()
      })
      // alert("Text is too long");
      return;
    }
    if (value.length === 0) {
      $(document).ready(function() {
        $("#empty-box").show()
      })
      // alert("Text field cannot be empty");
      return;
    }
    $(document).ready(function() {
      $("#long-text").hide()
    })
    $(document).ready(function() {
      $("#empty-box").hide()
    })

      const formData = $(targetForm).serialize();
      $.ajax("/tweets", {
        method: 'POST',
        data: formData,
      }).done(function(data) {
        $('.tweets').trigger('reload')
      })
    })
  });

  const loadTweets = function() {
    $.ajax("/tweets", {
      method: 'GET',
      dataType: "json"
    }).then(function(result) {
      $("#tweet-text").val('')
      $('.tweets').empty()
      renderTweets(result);
    })
  };
  $('.tweets').on('reload', loadTweets).trigger('reload');
});