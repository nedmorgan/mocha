module.exports = {
  sayHello: function() {
    return 'hello'
  },
  addNumbers: function(value1, value2) {
    return value1 + value2
  },
  reverseWord: function(word) {
    return word
      .split('')
      .reverse()
      .join('')
  }
}
