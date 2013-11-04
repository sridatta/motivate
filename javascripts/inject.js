(function(){
  var quotes = [ 
   "If the universe tried for billions of years, it would not be able to create another copy of you.",
   "Do your work. Don't be stupid.",
   "Dude, sucking at something is the first step to being sorta good at something",
   "Yesterday you said tomorrow.",
   "Can't? Or won't?",
   "Do something instead of killing time. Because time is killing you.",
   "It's a magical world, ol' buddy. Let's go exploring.",
   "No one is coming to save you.",
   "I arise in the morning torn between a desire to improve the world and a desire to enjoy the world. This makes it hard to plan the day.",
   "If you're going through hell, keep on going.",
   "Do something instead of killing time. Because time is killing you.",
   "The grass isn't always greener on the other side. It's green where you water it.",
   "A smooth sea never made a skilled sailor",
   "Life is a joke. You either make it a funny joke or a bad joke",
   "We are all in the gutter, but some of us are looking at the stars",
   "Wolves do not lose sleep over the opinion of sheep",
   "Everything you can imagine is real",
   "A good traveler has no fixed plans and is not intent on arriving",
   "Do not go gentle into that good night. Rage, rage against the dying of the light."
  ]

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

    // Set the image and quote
    document.getElementsByTagName("html")[0].style.background = 'url("/img/'+ randomImage +'") no-repeat center center fixed';
    // TODO (@Warpling): figure out why the above is overridding the background-size property in style.css
    //                   making the following necessary.
    document.getElementsByTagName("html")[0].style.backgroundSize = 'cover';
    document.getElementById("quote").innerHTML = randomQuote;
    // Start the CSS transtions
    document.getElementById("quote").className = 'move';
  }

})()
