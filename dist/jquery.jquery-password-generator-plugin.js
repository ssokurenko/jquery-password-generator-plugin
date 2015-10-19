/*! jquery-password-generator-plugin - v0.0.0 - 2015-10-19
* Copyright (c) 2015 Sergey Sokurenko; Licensed MIT */
(function ($) {
  $.passGen = function (options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.passGen.options, options);
    // Return the name of your plugin plus a punctuation character.
    return 'passGen' + options.punctuation;
  };

  // Default options.
  $.passGen.options = {
    punctuation: '.'
  };
}(jQuery));