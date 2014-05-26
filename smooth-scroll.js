/*
 * SmoothScroll
 * Licence MIT
 * Originally Written by Gabriel Delépine
 */
(function initSmoothScroll(window, undefined) {
  'use strict';
  var height_fixed_header = 0, // For layout with header with position:fixed. Write here the height of your header for your anchor don't be hiden behind
      speed = 500,
      moving_frequency = 15, // Affects performance! High number makes scroll more smooth
      links = document.getElementsByTagName('a'),
      href;
  
  for (var i=0; i<links.length; i++) {
    if (links[i].attributes.href === undefined) {
      href = null;
    } else {
      href = links[i].attributes.href.nodeValue.toString();
    }
    if (href !== null && href.length > 1 && href.indexOf('#') != -1) {
      links[i].onclick = function handleClick() {
        var element,
            href = this.attributes.href.nodeValue.toString(),
            url = href.substr(0, href.indexOf('#')),
            id = href.substr(href.indexOf('#')+1);
        if (element = document.getElementById(id)) {

          var hop_count = (speed - (speed % moving_frequency)) / moving_frequency, // Always make an integer
            getScrollTopDocumentAtBegin = getScrollTopDocument(),
            gap = (getScrollTopElement(element) - getScrollTopDocumentAtBegin) / hop_count;

          if (window.history && typeof window.history.pushState == 'function') {
            window.history.pushState({}, undefined, url+'#'+id);// Change URL for modern browser
          }
          
          for (var i = 1; i <= hop_count; i++) {
            (function scroll() {
              var hop_top_position = gap*i;
              setTimeout(function() { 
                window.scrollTo(0, hop_top_position + getScrollTopDocumentAtBegin);
              }, moving_frequency*i);
            })();
          }
          
          return false;
        }
      };
    }
  }
  
  var getScrollTopElement = function getScrollTopElement(e) {
    var top = height_fixed_header * -1;

    while (e.offsetParent != undefined && e.offsetParent != null) {
      top += e.offsetTop + (e.clientTop != null ? e.clientTop : 0);
      e = e.offsetParent;
    }
    
    return top;
  };
  
  var getScrollTopDocument = function getScrollTopDocument() {
    var top;
    if (document.documentElement.scrollTop !== undefined) {
      top = document.documentElement.scrollTop;
    } else {
      top = document.body.scrollTop;
    }
    return top;
  };
})(window);
