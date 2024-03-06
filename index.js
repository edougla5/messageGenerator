//message generator program outputs random daily quotes
let message1 = 'It takes courage to grow up and become who you really are.'
let message2 = 'Your self-worth is determined by you. You don\'t have to depend on someone telling you who you are.'
let message3 = 'Keep your face always toward the sunshine, and shadows will fall behind you.'
let randMessage
let randInt

randInt = Math.floor(Math.random()*3)
if(randInt===0) {
    console.log(message1)
} else if(randInt===1) {
    console.log(message2)
} else {
    console.log(message3)
}