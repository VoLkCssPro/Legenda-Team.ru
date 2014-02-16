(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages\handlebar-helpers\helpers.operators.js                                                              //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
 // Helper scope                                                                                                // 1
if (typeof Helpers === 'undefined') {                                                                           // 2
    Helpers = {};                                                                                               // 3
}                                                                                                               // 4
                                                                                                                // 5
if (typeof Handlebars !== 'undefined') {                                                                        // 6
                                                                                                                // 7
    Handlebars.registerHelper('getLength', function (a) {                                                       // 8
      return a && a.length;                                                                                     // 9
    });                                                                                                         // 10
                                                                                                                // 11
    Handlebars.registerHelper('isSelected', function (a, b) {                                                   // 12
      return (a === b)?' selected': '';                                                                         // 13
    });                                                                                                         // 14
                                                                                                                // 15
    Handlebars.registerHelper('isChecked', function (a, b) {                                                    // 16
      return (a === b)?' checked': '';                                                                          // 17
    });                                                                                                         // 18
                                                                                                                // 19
    Handlebars.registerHelper('cutString', function (str, len) {                                                // 20
      return (str.length > len)?str.substr(0, Math.max(len-3, 0))+'...':str;                                    // 21
    });                                                                                                         // 22
                                                                                                                // 23
    Handlebars.registerHelper('$eq', function (a, b) {                                                          // 24
      return (a === b); //Only text, numbers, boolean - not array & objects                                     // 25
    });                                                                                                         // 26
                                                                                                                // 27
    Handlebars.registerHelper('$neq', function (a, b) {                                                         // 28
      return (a !== b); //Only text, numbers, boolean - not array & objects                                     // 29
    });                                                                                                         // 30
                                                                                                                // 31
    Handlebars.registerHelper('$in', function (a, b, c, d) {                                                    // 32
      return ( a === b || a === c || a === d);                                                                  // 33
    });                                                                                                         // 34
                                                                                                                // 35
    Handlebars.registerHelper('$nin', function (a, b, c, d) {                                                   // 36
      return ( a !== b || a !== c || a !== d);                                                                  // 37
    });                                                                                                         // 38
                                                                                                                // 39
    Handlebars.registerHelper('$exists', function (a) {                                                         // 40
      return ( a !== undefined);                                                                                // 41
    });                                                                                                         // 42
                                                                                                                // 43
    Handlebars.registerHelper('$lt', function (a, b) {                                                          // 44
      return (a < b);                                                                                           // 45
    });                                                                                                         // 46
                                                                                                                // 47
    Handlebars.registerHelper('$gt', function (a, b) {                                                          // 48
      return (a > b);                                                                                           // 49
    });                                                                                                         // 50
                                                                                                                // 51
    Handlebars.registerHelper('$lte', function (a, b) {                                                         // 52
      return (a < b);                                                                                           // 53
    });                                                                                                         // 54
                                                                                                                // 55
    Handlebars.registerHelper('$gte', function (a, b) {                                                         // 56
      return (a > b);                                                                                           // 57
    });                                                                                                         // 58
                                                                                                                // 59
                                                                                                                // 60
    Handlebars.registerHelper('$and', function (a, b) {                                                         // 61
      return (a && b);                                                                                          // 62
    });                                                                                                         // 63
                                                                                                                // 64
    Handlebars.registerHelper('$or', function (a, b) {                                                          // 65
      return (a || b);                                                                                          // 66
    });                                                                                                         // 67
                                                                                                                // 68
    Handlebars.registerHelper('$not', function (a) {                                                            // 69
      return (!a);                                                                                              // 70
    });                                                                                                         // 71
                                                                                                                // 72
    Handlebars.registerHelper('getText', function (text) { // Deprecating                                       // 73
      return Helpers.getText(text);                                                                             // 74
    });                                                                                                         // 75
                                                                                                                // 76
    // Handlebars.registerHelper('userRole', function ( /* arguments */) {                                      // 77
    //   var role = Session.get('currentRole');                                                                 // 78
    //   return _.any(arguments, function(value) { return (value == role); });                                  // 79
    // });                                                                                                      // 80
                                                                                                                // 81
    // expects an array: languageText['say.hello.to.me']['en'] = 'Say hello to me:)';                           // 82
    // ex.:                                                                                                     // 83
    // getText('Say.Hello.To.Me') == 'say hello to me:)'; // lowercase                                          // 84
    // getText('SAY.HELLO.TO.ME') == 'SAY HELLO TO ME:)'; // uppercase                                          // 85
    // getText('Say.hello.to.me') == 'Say hello to me:)'; // uppercase first letter, rest lowercase             // 86
    // getText('Say.Hello.To.Me') == 'Say Hello To Me:)'; // camelCase                                          // 87
                                                                                                                // 88
    var _languageDeps = new Deps.Dependency();                                                                  // 89
    var currentLanguage = 'en';                                                                                 // 90
                                                                                                                // 91
    // language = 'en'                                                                                          // 92
    Helpers.setLanguage = function(language) {                                                                  // 93
      if (language && language !== currentLanguage) {                                                           // 94
        currentLanguage = language;                                                                             // 95
        _languageDeps.changed();                                                                                // 96
      }                                                                                                         // 97
    };                                                                                                          // 98
                                                                                                                // 99
    Helpers.language = function() {                                                                             // 100
      _languageDeps.depend();                                                                                   // 101
      return currentLanguage;                                                                                   // 102
    };                                                                                                          // 103
                                                                                                                // 104
    Helpers.getText = function(text) {                                                                          // 105
      // handleCase will mimic text Case making src same case as text                                           // 106
      function handleCase(text, src) {                                                                          // 107
        // Return lowercase                                                                                     // 108
        if (text == text.toLowerCase())                                                                         // 109
          return src.toLowerCase();                                                                             // 110
        // Return uppercase                                                                                     // 111
        if (text == text.toUpperCase())                                                                         // 112
          return src.toUpperCase();                                                                             // 113
        // Return uppercase first letter, rest lowercase                                                        // 114
        if (text.substr(1) == text.substr(1).toLowerCase() )                                                    // 115
          return src.substr(0, 1).toUpperCase()+src.substr(1).toLowerCase();                                    // 116
        // Return CamelCase                                                                                     // 117
        return src.replace(/( [a-z])/g, function($1){                                                           // 118
          return $1.toUpperCase();                                                                              // 119
        });                                                                                                     // 120
      }                                                                                                         // 121
      var txt = text.toLowerCase();                                                                             // 122
      // TODO: Tidy the return line - kinda messy                                                               // 123
      return handleCase(text, (languageText && languageText[txt])?( (languageText[txt][Helpers.language()])?languageText[txt][Helpers.language()]: languageText[txt].en):'['+text+']' );
    };                                                                                                          // 125
                                                                                                                // 126
    /*                                                                                                          // 127
        Then $uper helper - Credit goes to @belisarius222 aka Ted Blackman for sparking an idear for a solution // 128
    */                                                                                                          // 129
    Helpers.superScope = {};                                                                                    // 130
                                                                                                                // 131
    Helpers.addScope = function(name, obj) {                                                                    // 132
      // TODO: Get rid of underscore                                                                            // 133
      Helpers.superScope[name] = _.bind(function() { return this; }, obj);                                      // 134
    };                                                                                                          // 135
                                                                                                                // 136
    Helpers.removeScope = function(name) {                                                                      // 137
      delete Helpers.superScope[name];                                                                          // 138
    };                                                                                                          // 139
                                                                                                                // 140
    Helpers.addScope('Session', Session);                                                                       // 141
    Helpers.addScope('Meteor', Meteor);                                                                         // 142
                                                                                                                // 143
    Handlebars.registerHelper('$', function() {                                                                 // 144
      return Helpers.superScope;                                                                                // 145
    });                                                                                                         // 146
}                                                                                                               // 147
                                                                                                                // 148
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);
