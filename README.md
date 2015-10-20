# Password Generator jQuery Plugin

Fast jQuery plugin for generating random passwords for your web pages.


### Download 
- [Production version][min] (minimized)
- [Development version][max] (with code formatting and comments)

[min]: https://raw.githubusercontent.com/ssokurenko/jquery-password-generator-plugin/master/dist/jquery.jquery-password-generator-plugin.min.js
[max]: https://raw.githubusercontent.com/ssokurenko/jquery-password-generator-plugin/master/dist/jquery.jquery-password-generator-plugin.js


### Usage on your web page:

```html
<script src="jquery.js"></script>
<script src="dist/jquery-password-generator-plugin.min.js"></script>
<script>
  jQuery(function ($) {
    console.log($.passGen());
  });
</script>
```

### Live DEMO

[Password Generator Plugin](http://ssokurenko.github.io/jquery-password-generator-plugin/)


## Project Setup for Development and Testing

Install required npm mobules

```
sudo npm install

```

Install bower dependencies

```
bower install
```

## Grunt commands


### Run server

```
grunt serve
```

If everything goes OK, the Demo will be available at: [http://localhost:7777](http://localhost:7777)

Tests can be found at: [http://localhost:7777/test/jquery-password-generator-plugin.html](http://localhost:7777/test/jquery-password-generator-plugin.html)

### Run tests
```
grunt test
```

Test results will be available at the console

### Building the project

```
grunt build
```

Generated files will be available at the dist folder:

```
dist/jquery.jquery-password-generator-plugin.js
dist/jquery.jquery-password-generator-plugin.min.js
```


## License

MIT © Sergey Sokurenko
