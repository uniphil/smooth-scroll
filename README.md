smooth-scroll
=============

smooth scrolling anchors page without framework dependency.

This is a fork of https://github.com/Yappli/smooth-scroll, modifying it's behaviour in the following ways:

 * the scroll is eased instead of linear
 * a function, `smoothScroll("querySelectorExpr")`, is exported to the global namespace. You must manually assign elements as targets for smooth scrolling.

Example:

```html
<a href="#menu"><!-- some custom JS shows/hides the menu -->
</a>
<ul id="menu">
  <a href="#videos">videos</a><!-- we want to smooth-scroll to these -->
  <a href="#photos">photos</a>
</ul>
<div id="videos">
  ...
</div>
<div id="photos">
  ...
</div>
```

```javascript
smoothScroll("#videos, #photos");
```

ta-daa

[**demo**](http://uniphil.github.io/smooth-scroll/)
