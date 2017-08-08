(function() {
  var $imgs = $('ul#trip li a img');
  var $search = $('#box');
  var cache = [];
  
  $imgs.each(function() {
    cache.push({
      element: this,
      text: this.title.trim().toLowerCase()
    });
  });
  
  function filter() {
    var query = this.value.trim().toLowerCase()
    
    cache.forEach(function(cacheItem) {
      var index = 0;
      if (query) {
        index = cacheItem.text.indexOf(query);
      }
      
      $(cacheItem.element).parent().parent().toggle(index != -1);
    });
  }
      
      if ('oninput' in $search[0]) {
        $search.on('input', filter);
    } else {
      $search.on('keyup', filter);
    }
  }());