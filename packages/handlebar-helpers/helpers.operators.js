 // Helper scope
if (typeof Helpers === 'undefined') {
    Helpers = {};
}

if (typeof Handlebars !== 'undefined') {

    Handlebars.registerHelper('getLength', function (a) {
      return a && a.length;
    });

    Handlebars.registerHelper('isSelected', function (a, b) {
      return (a === b)?' selected': '';
    });

    Handlebars.registerHelper('isChecked', function (a, b) {
      return (a === b)?' checked': '';
    });

    Handlebars.registerHelper('cutString', function (str, len) {
      return (str.length > len)?str.substr(0, Math.max(len-3, 0))+'...':str;
    });

    Handlebars.registerHelper('$eq', function (a, b) {
      return (a === b); //Only text, numbers, boolean - not array & objects
    });

    Handlebars.registerHelper('$neq', function (a, b) {
      return (a !== b); //Only text, numbers, boolean - not array & objects
    });

    Handlebars.registerHelper('$in', function (a, b, c, d) {
      return ( a === b || a === c || a === d);
    });

    Handlebars.registerHelper('$nin', function (a, b, c, d) {
      return ( a !== b || a !== c || a !== d);
    });

    Handlebars.registerHelper('$exists', function (a) {
      return ( a !== undefined);
    });

    Handlebars.registerHelper('$lt', function (a, b) {
      return (a < b);
    });

    Handlebars.registerHelper('$gt', function (a, b) {
      return (a > b);
    });

    Handlebars.registerHelper('$lte', function (a, b) {
      return (a < b);
    });

    Handlebars.registerHelper('$gte', function (a, b) {
      return (a > b);
    });


    Handlebars.registerHelper('$and', function (a, b) {
      return (a && b);
    });

    Handlebars.registerHelper('$or', function (a, b) {
      return (a || b);
    });

    Handlebars.registerHelper('$not', function (a) {
      return (!a);
    });

    Handlebars.registerHelper('getText', function (text) { // Deprecating
      return Helpers.getText(text);
    });

    // Handlebars.registerHelper('userRole', function ( /* arguments */) {
    //   var role = Session.get('currentRole');
    //   return _.any(arguments, function(value) { return (value == role); });
    // });

    // expects an array: languageText['say.hello.to.me']['en'] = 'Say hello to me:)';
    // ex.:
    // getText('Say.Hello.To.Me') == 'say hello to me:)'; // lowercase
    // getText('SAY.HELLO.TO.ME') == 'SAY HELLO TO ME:)'; // uppercase
    // getText('Say.hello.to.me') == 'Say hello to me:)'; // uppercase first letter, rest lowercase
    // getText('Say.Hello.To.Me') == 'Say Hello To Me:)'; // camelCase

    var _languageDeps = new Deps.Dependency();
    var currentLanguage = 'en';

    // language = 'en'
    Helpers.setLanguage = function(language) {
      if (language && language !== currentLanguage) {
        currentLanguage = language;
        _languageDeps.changed();
      }
    };

    Helpers.language = function() {
      _languageDeps.depend();
      return currentLanguage;
    };

    Helpers.getText = function(text) {
      // handleCase will mimic text Case making src same case as text
      function handleCase(text, src) {
        // Return lowercase
        if (text == text.toLowerCase())
          return src.toLowerCase();
        // Return uppercase
        if (text == text.toUpperCase())
          return src.toUpperCase();
        // Return uppercase first letter, rest lowercase
        if (text.substr(1) == text.substr(1).toLowerCase() )
          return src.substr(0, 1).toUpperCase()+src.substr(1).toLowerCase();
        // Return CamelCase
        return src.replace(/( [a-z])/g, function($1){
          return $1.toUpperCase();
        });
      }
      var txt = text.toLowerCase();
      // TODO: Tidy the return line - kinda messy
      return handleCase(text, (languageText && languageText[txt])?( (languageText[txt][Helpers.language()])?languageText[txt][Helpers.language()]: languageText[txt].en):'['+text+']' );
    };

    /*
        Then $uper helper - Credit goes to @belisarius222 aka Ted Blackman for sparking an idear for a solution
    */
    Helpers.superScope = {};

    Helpers.addScope = function(name, obj) {
      // TODO: Get rid of underscore
      Helpers.superScope[name] = _.bind(function() { return this; }, obj);
    };

    Helpers.removeScope = function(name) {
      delete Helpers.superScope[name];
    };
    
    Helpers.addScope('Session', Session);
    Helpers.addScope('Meteor', Meteor);

    Handlebars.registerHelper('$', function() {
      return Helpers.superScope;
    });
}
