const assert = require('chai').assert
// const sayHello = require('../app').sayHello
// const addNumbers = require('../app').addNumbers
const app = require('../app')

//Results
let sayHelloResult = app.sayHello()
let addNumbersResult = app.addNumbers(5, 5)
let reverseWordResult = app.reverseWord('walter')
let smallerNumberResult = app.smallerNumber(5, 8)

describe('App', function() {
  describe('sayHello()', function() {
    it('sayHello should return hello', function() {
      // let result = app.sayHello()
      assert.equal(sayHelloResult, 'hello')
    })
    it('sayHello should return type string', function() {
      // let result = app.sayHello()
      assert.typeOf(sayHelloResult, 'string')
    })
  })
  describe('addNumbers()', function() {
    it('addNumbers should be above 5', function() {
      // let result = app.addNumbers(5, 5)
      assert.isAbove(addNumbersResult, 5)
    })
    it('addNumber should return type number', function() {
      // let result = app.addNumbers(5, 5)
      assert.typeOf(addNumbersResult, 'number')
    })
  })
  describe('smallerNumber()', function() {
    it('smallerNumber should return the smaller of the two numbers', function() {
      assert.equal(smallerNumberResult, 5)
    })
  })
  describe('reverseWord()', function() {
    it('reverseWord should reverse a word', function() {
      assert.equal(reverseWordResult, 'retlaw')
    })
  })
})
