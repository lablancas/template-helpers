// Write your tests here!
// Here is an example.
Tinytest.add('template-helpers - _.each', function (test) {
  test.instanceOf(TemplateHelpers.underscore, Function);

  // arrays
  TemplateHelpers.underscore('each', [42], function (val, index) {
    test.equal(index, 0);
    test.equal(val, 42);
  });

  // objects with 'length' field aren't treated as arrays
  TemplateHelpers.underscore('each', {length: 42}, function (val, key) {
    test.equal(key, 'length');
    test.equal(val, 42);
  });

  // An object with a 'callee' field isn't treated as arguments
  TemplateHelpers.underscore('each', {callee: 42}, function (val, key) {
    test.equal(key, 'callee');
    test.equal(val, 42);
  });

  // An object with a 'callee' field isn't treated as arguments
  TemplateHelpers.underscore('each', {length: 4, callee: 42}, function (val, key) {
    if (key === 'callee')
      test.equal(val, 42);
    else if (key === 'length')
      test.equal(val, 4);
    else
      test.fail({message: 'unexpected key: ' + key});
  });


  // NOTE: An object with a numberic 'length' field *and* a function
  // 'callee' field will be treated as an array in IE. This may or may
  // not be fixable, but isn't a big deal since: (1) 'callee' is a
  // pretty rare key, and (2) JSON objects can't have functions
  // anyways, which is the main use-case for _.each.
});

Tinytest.add('template-helpers - momentjs', function (test) {
    test.instanceOf(TemplateHelpers.moment, Function);
    
    var date = new Date("2014-02-15T12:10:30");
    
    if(Meteor.isClient){
        adjustedHour   = date.getHours() + Math.floor(date.getTimezoneOffset()/60);
        adjustedMinute = date.getMinutes() + Math.floor(date.getTimezoneOffset()%60);
        
        date.setHours(adjustedHour);
        date.setMinutes(adjustedMinute);
    }
    
    test.instanceOf(TemplateHelpers.moment()._d, Date);
    
    test.instanceOf(TemplateHelpers.moment(date)._d, Date);
    
    // test getters
    test.equal(TemplateHelpers.moment(date, 'month'),  1, "month should be february (1)");
    test.equal(TemplateHelpers.moment(date, 'date'),   15, "date should be 15th");
    test.equal(TemplateHelpers.moment(date, 'year'),   2014, "year should be 2014");
    
    test.equal(TemplateHelpers.moment(date, 'hour'),   12, "hour should be 12 pm or 1200");
    
    test.equal(TemplateHelpers.moment(date, 'minute'), 10, "minute should be 10");
    test.equal(TemplateHelpers.moment(date, 'second'), 30, "second should be 30");

    test.equal(TemplateHelpers.moment(date, 'format', 'dddd, MMMM Do YYYY, h:mm:ss a'), "Saturday, February 15th 2014, 12:10:30 pm");
    
    
    test.equal(TemplateHelpers.moment(moment().subtract(1, "minutes")._d, 'fromNow'), 'a minute ago');
    test.equal(TemplateHelpers.moment(moment().subtract(1, "minutes")._d, 'fromNow', true), 'a minute');
    
    
});
