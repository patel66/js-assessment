if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {

        for(i=0, len = arr.length; i < len; i++) {
            if(arr[i] === item){
                return i;
            }

        }
        return -1;

    },

    sum : function(arr) {
        sum = 0;

        for(i=0, len = arr.length; i < len; i++){
            sum += arr[i];
        }

        return sum;

    },

    remove : function(arr, item) {
        var new_array = [];

        for(i=0, len = arr.length; i < len; i++){
            if(arr[i] !== item){
                new_array.push(arr[i]);
            }
        }

        return new_array;
    },

    removeWithoutCopy : function(arr, item) {
        var new_array = [];

        for(i=0, len = arr.length; i < len; i++){
            if(arr[i] !== item){
                new_array.push(arr[i]);
            }
        }

        return new_array;

    },

    append : function(arr, item) {

    },

    truncate : function(arr) {

    },

    prepend : function(arr, item) {

    },

    curtail : function(arr) {

    },

    concat : function(arr1, arr2) {

    },

    insert : function(arr, item, index) {

    },

    count : function(arr, item) {

    },

    duplicates : function(arr) {

    },

    square : function(arr) {

    },

    findAllOccurrences : function(arr, target) {

    }
  };
});
