const greetingMessages = [
    "Hello",
    "Hi",
    "Hey",
    "Greetings",
    "Good day",
    "Howdy",
    "Nice to meet you, "
]

module.exports = {
    getRandomElement: function(arr) {
        return arr[Math.floor(Math.random() * arr.length)]
    },

    greet: function(name = 'Friend') {
        const randomGreeting = this.getRandomElement(greetingMessages)
        return `${randomGreeting}, ${name}!`
    }
}
