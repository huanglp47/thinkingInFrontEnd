// 移动端适配
(function() {
  var n = 750;
  ! function(document, window) {
    var doc, resizeFn, eventName;
    return doc = document.documentElement,
      eventName = 'orientationchange' in window ? "orientationchange" : 'resize',
      resizeFn = function() {
        var client_width = null;
        return (client_width = doc.clientWidth) ?
          (client_width >= n ? (client_width = n, doc.style.width = n+"px") :
            doc.style.width = client_width + 'px',
            doc.style.fontSize = 100 * (client_width / n) + 'px',
            doc.dataset.percent = 100 * (client_width / n)) : 'undefined';
      },
      resizeFn(),
      window.addEventListener ? window.addEventListener(eventName, resizeFn, false) : 'undefined';
  }(document, window)
}).call(this);
