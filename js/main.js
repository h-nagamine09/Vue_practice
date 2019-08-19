(function() {
  'use strict';

  // 双方向データバインディング
  // two way data binding

  var vm = new Vue({
    el: '#app',
    data: {
      // name:'taguchi'
      todos: [
        'task1',
        'task2',
        'task3'
      ]
    }
  });
})();
