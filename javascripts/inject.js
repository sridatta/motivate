(function(){

  var quotes = [
      {quote:"Practice isn't the thing you do when you're good. It's the thing you do that makes you good.", author:"Malcolm Gladwell"},
      {quote:"You can never quit. Winners never quit, and quitters never win.", author:"Ted Turner"},
      {quote:"Live long and prosper.", author:"Spock"},
      {quote:"It's a lack of faith that makes people afraid of meeting challengs, and I believed in myself.", author:"Muhammad Ali"},
      {quote:"I was born not knowing and have had only a little time to change that here and there.", author:"Richard Feynman"},
      {quote:"Begin at the beginning and go on till you come to the end; then stop.", author:"Lewis Carroll"},
      // {quote:"The way I did it, every job was A+.", author:"Steve Wozniak"},
      {quote:"Action will delineate and define you.", author:"Thomas Jefferson"},
      {quote:"I play to win, whether during practice or a real game.", author:"Michael Jordan"},
      {quote:"Show me a thoroughly satisfied man and I will show you a failure.", author:"Thomas Edison"},
      {quote:"I don't know where I'm going, but I'm on my way.", author:"Carl Sagan"},
      {quote:"I never see what has been done; I only see what remains to be done.", author:"Buddha"},
      {quote:"I start where the last man left off.", author:"Thomas Edison"},
      {quote:"You can't wait for inspiration. You have to go after it with a club.", author:"Jack London"},
      {quote:"The perfect is the enemy of the good.", author:"Voltaire"},
      {quote:"Many of life's failures are people who did not realize how close they were to success when they gave up.", author:"Thomas Edison"},
      {quote:"At the age of six I wanted to be a cook. At seven I wanted to be Napoleon. And my ambition has been growing steadily ever since.", author:"Salvador Dali"},
      {quote:"Without fear, you'd never survive.", author:"Woody Allen"},
      {quote:"In theory there is no difference between theory and practice. In practice there is.", author:"Yogi Berra"},
      {quote:"There will be a time when we must choose between what is easy and what is right.", author:"Albus Dumbledore"},
      {quote:"Stop waiting for things to happen and instead make them happen.", author:""},
      {quote:"Amateurs practice until they get it right. Professionals practice until they can't get it wrong.", author:"Unknown"},
      {quote:"You don't learn to walk by following rules. You learn by doing, and by falling over.", author:"Richard Branson"},
      {quote:"It's not knowing what to do, it's doing what you know.", author:"Tony Robbins"},
      {quote:"I'm as proud of what we don't do as I am of what we do.", author:"Steve Jobs"},
      {quote:"Do, or do not. There is no try.", author:"Yoda"},
      {quote:"Efficiency is doing things right; effectiveness is doing the right things.", author:"Peter Drucker"},
      {quote:"Focus is a matter of deciding what things you're not going to do.", author:"John Carmack"},
      {quote:"A superior man is modest in his speech, but exceeds in his actions.", author:"Confucius"},
      {quote:"To infinity and beyond!", author:"Buzz Lightyear"},
      {quote:"It does not matter how slowly you go as long as you do not stop.", author:"Confucius"},
      {quote:"One can have no smaller or greater mastery than mastery of oneself.", author:"Leonardo da Vinci"},
      {quote:"We are an impossibility in an impossible universe.", author:"Ray Bradbury"},
      {quote:"To be idle is a short road to death and to be dilligent is a way of life.", author:"Buddha"},
      {quote:"If you want a thing done well, do it yourself.", author:"Napoleon Bonaparte"},
      {quote:"Roads? Where we're going, we don't need roads.", author:"Dr. Emmett Brown"},
      {quote:"I skate to where the puck is going to be, not where it has been.", author:"Wayne Gretzky"},
      {quote:"Failure is simply the opportunity to begin again, this time more intelligently.", author:"Henry Ford"},
      {quote:"Yesterday is gone. Tomorrow has not yet come. We have only today. Let us begin.", author:"Mother Teresa"},
      {quote:"When you stop doing things for fun you might as well be dead", author:"Ernest Hemingway"},
      {quote:"Limit everything to the essential but do not remove the poetry", author:"Dieter Rams"},
      {quote:"There's a way to do it better &ndash; find it.", author:"Thomas A. Edison"},
      {quote:"Never doubt that a small group of thoughtful, committed citizens can change the world. Indeed, It is the only thing that ever has.", author:"Margaret Mead"},
      {quote:"Good design is as little design as possible.", author:"Dieter Rams"},
      {quote:"Give me six hours to chop a tree, I will spend the first four sharpening my axe.", author:"Abe Lincoln"},
      {quote:"Life is a tragedy when seen in close-up, but a comedy in a long-shot.", author:"Charlie Chaplin"},
      {quote:"Sometimes you never realize the value of a moment until it becomes a memory", author:"Dr. Seuss"},
      {quote:"It is the mark of an educated mind, to entertain a thought without accepting it", author:"Aristotle"},
      {quote:"Another flaw in the human character is that everyone wants to build and nobody wants to do maintenance.",author:"Kurt Vonnegut"},
      {quote:"A ship in harbor is safe, but that's not why ships are built."},
      {quote:"There are 1,000 lessons in defeat, but only one in victory", author:"Confucious"},
      {quote:"Life isn't about finding yourself. Life is about creating yourself.", author:"George Bernard Shaw"},
      {quote:"But you don't become great by trying to be great. You become great by wanting to do something, and doing it so hard that you become great in the process.", author:"Randall Munroe"},
      {quote:"In the depths of winter, I finally learned that within me there lay an invincible summer", author:"Albert Camus"},
      {quote:"Unless someone like you cares a whole awful lot, Nothing is going to get better. It's not.", author:"Dr. Seuss"},
      {quote:"Today you are you, this is truer than true. There is no one alive who is you-er than you.", author:"Dr. Seuss"},
      {quote:"Do nothing, say nothing, and be nothing, and you'll never be criticized.", author:"Elbert Hubbard"},
      {quote:"The only thing necessary for the triumph of evil is for good men to do nothing", author:"Edmund Burke"},
      {quote:"Rivers know this: there is no hurry. We shall get there some day.", author:"Winnie the Pooh"},
      {quote:"The bigger the mountain, the better the view."},
      {quote:"Treat the earth well. It was not given to you by your parents, it was loaned to you by your children.",author:"Kenyan Proverb"},
      {quote:"No one can make you feel inferior without your consent.", author:"Eleanor Roosevelt"},
      {quote:"Intelligence plus character &ndash; that is the goal of true education.", author:"Martin Luther King Jr."},
      {quote:"Stay hungry, stay foolish.", author:"Steve Jobs"},
      {quote:"Simplicity is the ultimate sophistication."}
    ];

  var images = [
    "153.jpg",
    "158.jpg",
    "2264.jpg",
    "2266.jpg",
    "2272.jpg",
    "2284.jpg",
    "2310.jpg",
    "2346.jpg",
    "10.jpg",
    "11.jpg",
    "12.jpg",
    "13.jpg",
    "14.jpg",
    "15.jpg",
    "16.jpg",
    "17.jpg",
    "18.jpg",
    "19.jpg",
    "20.jpg",
    "21.jpg"
  ];

  function chooseOne(arr) {
    return arr[parseInt((Math.random() * arr.length), 10)];
  }

  window.onload = function() {
    var randomImage = chooseOne(images);
    var randomQuote = chooseOne(quotes);

    document.getElementById('background-image').style.backgroundImage = 'url("/img/'+ randomImage +'")';
    document.getElementsByTagName('quote')[0].innerHTML = randomQuote.quote;
    if(randomQuote.author)
      document.getElementsByTagName('author')[0].innerHTML = "&mdash; " + randomQuote.author + " &mdash;";
    // Start the CSS transtions
    document.getElementsByTagName('quote')[0].className = 'move';
    document.getElementsByTagName('author')[0].className = 'move';
  };

})();
