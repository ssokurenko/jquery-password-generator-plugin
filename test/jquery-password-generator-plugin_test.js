(function ($) {
  module('jQuery.passGen');

  test('is string', function () {
    expect(1);
    strictEqual(typeof($.passGen()), 'string', 'Generated password should be a string');
  });

}(jQuery));