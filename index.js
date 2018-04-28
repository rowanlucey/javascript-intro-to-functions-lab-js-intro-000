function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log('Hello'.toUpperCase())
}

function logWhisper(string) {
  console.log('Hello'.toLowerCase())
}

function sayHiToGrandma(string) {
  var lowercase = 'hello!'
    if (lowercase.toLowerCase() === lowercase) {
      return "I can't hear you!";
    }
  var uppercase = 'Hello!'
    if (uppercase.toUpperCase() === uppercase) {
      return "YES INDEED!";
    }
  var mixedCase = 'Hi there!'
    if ("I love you, Grandma.") {
      return "I love you, too.";
    }
}
