[![Build Status](https://travis-ci.org/lablancas/pubsub.svg)](https://travis-ci.org/lablancas/template-helpers)

# Template Helpers
This is a small utility package to provide access to underscore and momentjs functions in your templates

## Underscore

Here's the signature for [Underscore union](http://underscorejs.org/#union)

    _.union(*arrays) 
    Computes the union of the passed-in arrays: the list of unique items, in order, that are present in one or more of the arrays.

    _.union([1, 2, 3], [101, 2, 1, 10], [2, 1]);
    => [1, 2, 3, 101, 10]

Example usage

    {{#each _ 'union' letters numbers }} 
    <span>{{this}}</span>
    {{/each}}


## Moment JS

Here's the signature for [MomentJS Formatting](http://momentjs.com/docs/#/displaying/format/)

    moment().format();                                // "2014-09-08T08:02:17-05:00" (ISO 8601)
    moment().format("dddd, MMMM Do YYYY, h:mm:ss a"); // "Sunday, February 14th 2010, 3:25:50 pm"
    moment().format("ddd, hA");                       // "Sun, 3PM"

Example usage for new Date() or now()

    {{moment null 'format'                                 }} // returns now() formatted as "2014-09-08T08:02:17-05:00" (ISO 8601)
    {{moment null 'format' 'dddd, MMMM Do YYYY, h:mm:ss a' }} // returns now() formatted as "Sunday, February 14th 2010, 3:25:50 pm"
    {{moment null 'format' 'ddd, hA'                       }} // returns now() formatted as "Sun, 3PM"

Example usage for an existing Date object

    {{moment myDate 'format'                                 }} // returns myDate formatted as "2014-09-08T08:02:17-05:00" (ISO 8601)
    {{moment myDate 'format' 'dddd, MMMM Do YYYY, h:mm:ss a' }} // returns myDate formatted as "Sunday, February 14th 2010, 3:25:50 pm"
    {{moment myDate 'format' 'ddd, hA'                       }} // returns myDate formatted as "Sun, 3PM"
