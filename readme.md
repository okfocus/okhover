# okhover by OKFocus

OKHover is a jQuery plugin that makes it easy to reproduce the tiled background effect seen on the [OKFocus website](http://okfoc.us "OKFocus"). It uses HTML5 data attributes and is designed to be simple yet highly customizable.

### Requirements

The only real technical requirement besides jQuery itself, is declaring the HTML5 doctype for your web application. This is achieved by making sure the first line of your HTML is `<!doctype html>`. This ensures that using data attributes will be considered valid markup by browsers.

### Usage

For a simple example, consider this snippet of code:

``` html
<ul>
  <li data-okimage='http://example.com/path/to/an/image.gif'>
    <a href='#'>I'm a link</a>
  </li>
</ul>
```

The above will have no visible effect. To achieve the hovering effect, you'll have to include this javascript after including the OKHover source.

``` js
$(function(){
    $('li').okhover();  
}):
```

When you hover on an `<li>`, you'll now see the okhover effect in action. The data attribute `data-image` is a reference to the image that will appear tiled in the background.

### Options

The following options are available to you:

<table>
  <tbody>
    <tr>
      <th>option</th>
      <th>description</th>
      <th>default</th>
    </tr>
    <tr>
      <td>fadeIn</td>
      <td>A boolean that controls if the background image will fade in</td>
      <td>false</td>
    </tr>
    <tr>
      <td>fadeOut</td>
      <td>A boolean that controls if the background image will fade out</td>
      <td>false</td>
    </tr>
    <tr>
      <td>fadeInDuration</td>
      <td>A number that controls how long the fade-in will be (in milliseconds)</td>
      <td>400 milliseconds</td>
    </tr>
    <tr>
      <td>z-index</td>
      <td>A number that controls the z-index of the background div</td>
      <td>-1</td>
    </tr>
    <tr>
      <td>el</td>
      <td>If you would like to the effect to appear somewhere else (any DOM element that supports the background-image property)</td>
      <td>null</td>
    </tr>
  </tbody>
</table>
 
Here's an example with a lot of options:

``` js
$(function(){
    $('div').okhover({
        fadeIn: true,
        fadeOut: true,
        fadeInDuration: 2000,
        zIndex: 420,
        el: 'a'
    });
});
```

### Run Tests

OKFocus tests JavaScript with Jasmine. Run tests:

``` sh
$ bundle install
$ rake jasmine
```
