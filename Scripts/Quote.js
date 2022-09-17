var quotes = ['"To know your Enemy, you must become your Enemy." - Sun Tzu', 
'"It\'s only after we\'ve lost everything that we\'re free to do anything. - Tyler Durden"',
'"Be the change that you wish to see in the world" - Mahatma Gandhi',
'"I love THE VOICE, and THE LIGHT" - Crunchy Man',
'"I will drink the Sahara through a plastic straw" - Crunchy Man',
'"Don\'t quote me on this" - Oliver',
'"you quoted me as [REDACTED]? quote me as Oliver" - Oliver',
'"I have never once eaten another human being." - Crunchy Man',
'"AAAAAAAAAAAAAGGHHH IT BURNS" - Lilly',
'"Join him" - Me',
'"https://www.youtube.com/watch?v=dQw4w9WgXcQ" - Somebody',
'"There are no sides, just people that help you and people that don\'t" - Jessica Hyde',
'"This website is very mobile friendly 10/10" - Billy joe bob son of billy bob'];

var Quotebox = document.getElementById("Quote");
var Rand = Math.floor(Math.random()*quotes.length);

Quotebox.innerHTML = quotes[Rand];