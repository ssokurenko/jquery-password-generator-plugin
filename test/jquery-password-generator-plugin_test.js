(function ($) {
  module('jQuery.passGen');

  test('is passGen', function () {
    expect(2);
    strictEqual($.passGen(), 'passGen.', 'should be passGen');
    strictEqual($.passGen({punctuation: '!'}), 'passGen!', 'should be thoroughly passGen');
  });

}(jQuery));
