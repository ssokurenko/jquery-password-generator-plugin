/*
 * Copyright (c) 2015 Sergey Sokurenko
 * Licensed under the MIT license.
 *
 */

(function ($) {
  $.passGen = function (options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.passGen.options, options);

    // Return the name of your plugin plus a punctuation character.
    return 'passGen works' + options.punctuation;
  };

  // Default options.
  $.passGen.options = {
    punctuation: '.'
  };
}(jQuery));