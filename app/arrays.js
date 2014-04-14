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

        for(i=arr.length; i > 0; i--){
            if(arr[i] === item){
                arr.splice(i, 1)
            }
        }
        return arr;


    },

    append : function(arr, item) {

       arr.push(item);

       return arr;

    },

    truncate : function(arr) {

        arr.pop();
        return arr;
    },

    prepend : function(arr, item) {
        new_array = [item];
        for(i=0, len = arr.length; i < len; i++){
            new_array.push(arr[i]);
        }
        return new_array;
    },

    curtail : function(arr) {
        arr.splice(0,1);
        return arr;

    },

    concat : function(arr1, arr2) {
        for(i=0, len = arr2.length; i < len; i++){
            arr1.push(arr2[i]);
        }
        return arr1;
    },

    insert : function(arr, item, index) {
        arr.splice(index, 0, item);
        return arr;
    },

    count : function(arr, item) {
        count = 0;
        for(i=0, len = arr.length; i<len; i++){
            if(arr[i] === item){
                count += 1;
            }

        }
        return count;
    },

    duplicates : function(arr) {

      var seen = {};
      var dupes = [];

      for (var i = 0, len = arr.length; i < len; i++) {
        seen[arr[i]] = seen[arr[i]] ? seen[arr[i]] + 1 : 1;
      }

      for (var item in seen) {
        if (seen.hasOwnProperty(item) && seen[item] > 1) {
          dupes.push(item);
        }
      }

      return dupes;
    },

    square : function(arr) {
        arr2 = [];

        for(i=0; arr.length > i; i++){
            arr2.push(arr[i]*arr[i]);
        }
        return arr2;
    },

    findAllOccurrences : function(arr, target) {
        count = [];
        for(i=0, len = arr.length; i<len; i++){
            if(arr[i] === target){
                count.push(i);
            }

        }
        return count;

    }
  };
});
