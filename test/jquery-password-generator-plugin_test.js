(function ($) {
  module('jQuery.passGen');

  test('General Tests for $.passGen', function () {
    expect(3);
    strictEqual(typeof($.passGen()), 'string', 'Generated password should be a string');
    strictEqual($.passGen().length, 10, 'Default generated password length should be 10 digits');
    strictEqual($.passGen({'length':20}).length, 20, 'Number of password characters should be exactly as the length option');
  });

}(jQuery));