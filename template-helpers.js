// Write your package code here!

TemplateHelpers = {};

// parameters:
// functionName {String} the name of the underscore function you want to use
// args* the arguments you want to pass into underscore (see the documentation)
TemplateHelpers.underscore = function(){
    var fnName = arguments[0];
    
    
    if( Match.test(fnName, String) ){
        var fn = _[fnName];

        if(Match.test(fn, Function)){

            var args = [];
            for(i=1; i < arguments.length; i++){ //FIXME ... only include Spacebars.kw if no other args?
                
                if( !Match.test(arguments[i], Spacebars.kw) )
                    args.push(arguments[i]);
            }

            return fn.apply(null, args);
        }
        else {
            throw new Meteor.Error('invalid-function-name', 'Could not find a valid underscore function named ' + fnName);
        }
    }
    else
        throw new Meteor.Error('missing-function-name', 'A function name is required as the first argument');
};


// parameters:
// date {Date} date to use in moment(date); otherwise, moment() is used
// functionName {String} [Optional] If provided, the name of the underscore function you want will be called; otherwise, it will return a moment object
// args* the arguments you want to pass into momentjs function (see the documentation)
TemplateHelpers.moment = function(){

    var date = arguments[0];
    var m = Match.test(date, Date) ? moment(date) : moment();

    var fnName = arguments[1];

    if( Match.test(fnName, String) ){

        var fn = m[fnName];

        if(Match.test(fn, Function)){

            var args = [];
            for(i=2; i < arguments.length; i++){ //FIXME ... only include Spacebars.kw if no other args?
                
                if( !Match.test(arguments[i], Spacebars.kw) )
                    args.push(arguments[i]);
            }

            return fn.apply(m, args);
        }
        else {
            throw new Meteor.Error('invalid-function-name', 'Could not find a valid momentjs function named ' + fnName);
        }

    }
    else
        return m;
};

if(Meteor.isClient){
    UI.registerHelper("_", TemplateHelpers.underscore);
    UI.registerHelper("moment", TemplateHelpers.moment);
}
    
    