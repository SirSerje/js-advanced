var mySingleton = (function () {
  // Данная переменная будет хранить ссылку на экземпляр Синглтона
  var instance;
  function init() {
    // Синглтон
    // Приватные методы и переменные
    function privateMethod(){
        console.log( "I am private" );
    }
    var privateVariable = "Я приватная";
    var privateRandomNumber = Math.random();
    return {
      // Публичные методы и переменные
      publicMethod: function () {
        console.log( "Посмотрите на меня, я публичный!" );
      },
      publicProperty: "Я тоже публичный",
      getRandomNumber: function() {
        return privateRandomNumber;
      }
    };
  };
  return {
    // Получение экземпляра Синглтона, если он один
    // или его создание, если его до сих пор нет
    getInstance: function () {
      if ( !instance ) {
        instance = init();
      }
      return instance;
    }
 
  };
 
})();
 
// Пример плохого синглтона
 
var myBadSingleton = (function () {
 
  // Данная переменная будет хранить ссылку на экземпляр Синглтона
  var instance;
 
  function init() {
 
    // Синглтон
 
    var privateRandomNumber = Math.random();
 
    return {
 
      getRandomNumber: function() {
        return privateRandomNumber;
      }
 
    };
 
  };
 
  return {
 
    // В итоге мы можем получить несколько экзмепляров Синглтон,
    // чего не предусматривает паттерн
    getInstance: function () {
 
      instance = init();
 
      return instance;
    }
 
  };
 
})();
 
 
// А теперь используем:
 
var singleA = mySingleton.getInstance();
var singleB = mySingleton.getInstance();
console.log( singleA.getRandomNumber() === singleB.getRandomNumber() ); // ПРАВДА
 
var badSingleA = myBadSingleton.getInstance();
var badSingleB = myBadSingleton.getInstance();
console.log( badSingleA.getRandomNumber() === badSingleB.getRandomNumber() ); // ЛОЖЬ
 
// ПРИМЕЧАНИЕ:
// в примере мы используем метод random, поэтому есть вероятность,
// что числа будут одинаковыми, что всё же маловероятно