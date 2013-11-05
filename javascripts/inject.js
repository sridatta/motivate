(function(){

  var quotes = [{"quote":"Practice isn't the thing you do when you're good. It's the thing you do that makes you good.", "author":"Malcolm Gladwell"},
{"quote":"You can never quit. Winners never quite, and quitters never win.", "author":"Ted Turner"},
{"quote":"Live long and prosper.", "author":"Spock"},
{"quote":"It's a lack of faith that makes people afraid of meeting challengs, and I believed in myself.", "author":"Muhammad Ali"},
{"quote":"I was born not knowing and have had only a little time to change that here and there.", "author":"Richard Feynman"},
{"quote":"Begin at the beginning and go on till you come to the end; then stop.", "author":"Lewis Carroll"},
{"quote":"The way I did it, every job was A+.", "author":"Steve Wozniak"},
{"quote":"Action will delineate and define you.", "author":"Thomas Jefferson"},
{"quote":"I play to win,whether during practice or a real game.", "author":"Michael Jordan"},
{"quote":"Show me a thoroughly satisfied man and I will show you a failure.", "author":"Thomas Edison"},
{"quote":"I don't know where I'm going, but I'm on my way.", "author":"Carl Sagan"},
{"quote":"I never see what has been done; I only see what remains to be done.", "author":"Buddha"},
{"quote":"I start where the last man left off.", "author":"Thomas Edison"},
{"quote":"You can't wait for inspiration. You have to go after it with a club.", "author":"Jack London"},
{"quote":"The perfect is the enemy of the good.", "author":"Voltaire"},
{"quote":"Many of life's failures are people who did not realize how close they were to success when they gave up.", "author":"Thomas Edison"},
{"quote":"At the age of six I wanted to be a cook. At seven I wanted to be Napoleon. And my ambition has been growing steadily ever since.", "author":"Salvador Dali"},
{"quote":"Without fear, you'd never survive.", "author":"Woody Allen"},
{"quote":"In theory there is no difference between theory and practice. In practice there is.", "author":"Yogi Berra"},
{"quote":"There will be a time when we must choose between what is easy and what is right.", "author":"Albus Dumbledore"},
{"quote":"Stop waiting for things to happen and instead make them happen.", "author":""},
{"quote":"Amateurs practice until they get it right. Professionals practice until they can't get it wrong.", "author":"Unknown"},
{"quote":"You don't learn to walk by following rules. You learn by doing, and by falling over.", "author":"Richard Branson"},
{"quote":"It's not knowing what to do, it's doing what you know.", "author":"Tony Robbins"},
{"quote":"I'm as proud of what we don't do as I am of what we do.", "author":"Steve Jobs"},
{"quote":"Do, or do not. There is no try.", "author":"Yoda"},
{"quote":"Efficiency is doing things right; effectiveness is doing the right things.", "author":"Peter Drucker"},
{"quote":"Focus is a matter of deciding what things you're not going to do.", "author":"John Carmack"},
{"quote":"A superior man is modest in his speech, but exceeds in his actions.", "author":"Confucius"},
{"quote":"To infinity and beyond!", "author":"Buzz Lightyear"},
{"quote":"It does not matter how slowly you go as long as you do not stop.", "author":"Confucius"},
{"quote":"One can have no smaller or greater mastery than mastery of oneself.", "author":"Leonardo da Vinci"},
{"quote":"We are an impossibility in an impossible universe.", "author":"Ray Bradbury"},
{"quote":"To be idle is a short road to death and to be dilligent is a way of life.", "author":"Buddha"},
{"quote":"If you want a thing done well, do it yourself.", "author":"Napoleon Bonaparte"},
{"quote":"Roads? Where we're going, we don't need roads.", "author":"Dr. Emmett Brown"},
{"quote":"I skate to where the puck is going to be, not where it has been.", "author":"Wayne Gretzky"},
{"quote":"Failure is the opportunity to begin again more intelligently.", "author":"Henry Ford"},
{"quote":"Yesterday is gone. Tomorrow has not yet come. We have only today. Let us begin.", "author":"Mother Teresa"}];

  var images = [ 
    "153.jpg",
    "158.jpg",
    "2264.jpg",
    "2266.jpg",
    "2272.jpg",
    "2284.jpg",
    "2310.jpg",
    "2338.jpg",
    "2346.jpg"
  ]

  function pickRandomProperty(obj) {
    var result;
    var count = 0;
    for (var prop in obj)
      if (Math.random() < 1/++count)
        result = prop;
    return result;
  }

  window.onload = function() {
    var randomImage = images[pickRandomProperty(images)];
    var randomQuote = quotes[pickRandomProperty(quotes)];

    document.getElementsByTagName('html')[0].style.background = 'url("/img/'+ randomImage +'") no-repeat center center fixed';
    // TODO (@Warpling): figure out why the above is overridding the background-size property in style.css
    document.getElementsByTagName('html')[0].style.backgroundSize = 'cover';
    document.getElementById('quote').innerHTML = randomQuote['quote'];
    if(randomQuote['author'])
      document.getElementById('author').innerHTML = "&mdash; " + randomQuote['author'];
    // Start the CSS transtions
    document.getElementById('quote').className = 'move';
    document.getElementById('author').className = 'move';
  }

})()
