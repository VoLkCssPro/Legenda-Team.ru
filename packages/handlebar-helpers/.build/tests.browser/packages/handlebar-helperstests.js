(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages\handlebar-helpers\template.helpers_tests.js                                                              //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
Template.__define__("test_helpers_00",Package.handlebars.Handlebars.json_ast_to_func(["Hi"]));                       // 1
Template.__define__("test_helpers_10",Package.handlebars.Handlebars.json_ast_to_func([["{",[[0,"$","Session","get"],"test"]]]));
Template.__define__("test_helpers_20",Package.handlebars.Handlebars.json_ast_to_func([["{",[[0,"$","Session","equals"],"test","sdfsdfdsf"]]]));
Template.__define__("test_helpers_21",Package.handlebars.Handlebars.json_ast_to_func([["{",[[0,"$","Session","equals"],"test",1]]]));
Template.__define__("test_helpers_22",Package.handlebars.Handlebars.json_ast_to_func([["{",[[0,"$","Session","equals"],"test","1"]]]));
Template.__define__("test_helpers_23",Package.handlebars.Handlebars.json_ast_to_func([["{",[[0,"$","Session","equals"],"test",[0,"'a', 'b', 'c'"]]]]));
Template.__define__("test_helpers_25",Package.handlebars.Handlebars.json_ast_to_func([["{",[[0,"$","Session","equals"],"test",true]]]));
Template.__define__("test_helpers_26",Package.handlebars.Handlebars.json_ast_to_func([["{",[[0,"$","Session","equals"],"test",false]]]));
Template.__define__("test_helpers_27",Package.handlebars.Handlebars.json_ast_to_func([["#",[[0,"if"],[0,"$","Session","equals"],"test",false],["Test is false"],["Test is true"]]]));
Template.__define__("test_helpers_30",Package.handlebars.Handlebars.json_ast_to_func([["{",[[0,"findOne"],"testCollection","{}"]]]));
Template.__define__("test_helpers_31",Package.handlebars.Handlebars.json_ast_to_func([["{",[[0,"find"],"testCollection","{}"]]]));
Template.__define__("test_helpers_32",Package.handlebars.Handlebars.json_ast_to_func([["#",[[0,"with"],[0,"findOne"],"testCollection","{}"],["ok"]]]));
Template.__define__("test_helpers_33",Package.handlebars.Handlebars.json_ast_to_func([["#",[[0,"with"],[0,"findOne"],"testCollection","{}"],[["{",[[0,"a"]]]]]]));
Template.__define__("test_helpers_34",Package.handlebars.Handlebars.json_ast_to_func([["#",[[0,"each"],[0,"find"],"testCollection","{}"],[["{",[[0,"a"]]]],["none"]]]));
                                                                                                                     // 15
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages\handlebar-helpers\helpers_tests.js                                                                       //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
window.testCollection = new Meteor.Collection('test', { connection: null });                                         // 1
                                                                                                                     // 2
(function () {                                                                                                       // 3
  Tinytest.add('Handlebar helpers - init session templates', function (test) {                                       // 4
	  var frag = Meteor.render(Template.test_helpers_00);                                                               // 5
	  test.equal(canonicalizeHtml(DomUtils.fragmentToHtml(frag)), "Hi");                                                // 6
	});                                                                                                                 // 7
                                                                                                                     // 8
	Tinytest.add('Handlebar helpers - init session helpers', function (test) {                                          // 9
	  test.notEqual(Handlebars._default_helpers['$'], undefined, '$: Handlebars loaded after session_helpers?');        // 10
	  test.notEqual(Handlebars._default_helpers['find'], undefined, 'find: Handlebars loaded after session_helpers?');  // 11
	  test.notEqual(Handlebars._default_helpers['findOne'], undefined, 'findOne: Handlebars loaded after session_helpers?');
	});                                                                                                                 // 13
                                                                                                                     // 14
	Tinytest.add('Handlebar helpers - test {{getSession}}', function (test) {                                           // 15
		Session.set('test', undefined);                                                                                    // 16
		var onscreen = OnscreenDiv(Meteor.render(Template.test_helpers_10));                                               // 17
		test.include(["<!--empty-->", 'ok'], onscreen.rawHtml(), 'getSession should be empty or set from last session');   // 18
		Session.set('test', 'jlfkjsdfldf');                                                                                // 19
		Meteor.flush();                                                                                                    // 20
		test.equal(onscreen.rawHtml(), "jlfkjsdfldf", 'getSession dont return as expected');                               // 21
		Session.set('test', 'ok');                                                                                         // 22
		Meteor.flush();                                                                                                    // 23
		test.equal(onscreen.rawHtml(), "ok", 'getSession dont return "ok" as expected');                                   // 24
		onscreen.kill();                                                                                                   // 25
	});                                                                                                                 // 26
                                                                                                                     // 27
	Tinytest.add('Handlebar helpers - {{sessionEquals}} String', function (test) {                                      // 28
		//Template.test_helpers_20                                                                                         // 29
		Session.set('test', undefined);                                                                                    // 30
		var onscreen = OnscreenDiv(Meteor.render(Template.test_helpers_20));                                               // 31
		test.equal(onscreen.rawHtml(), 'false');                                                                           // 32
		Session.set('test', 'sdfsdfdsf');                                                                                  // 33
		Meteor.flush();                                                                                                    // 34
		test.equal(onscreen.rawHtml(), 'true');                                                                            // 35
		Session.set('test', 'ok');                                                                                         // 36
		Meteor.flush();                                                                                                    // 37
		test.equal(onscreen.rawHtml(), 'false');                                                                           // 38
		onscreen.kill();                                                                                                   // 39
	});                                                                                                                 // 40
                                                                                                                     // 41
	Tinytest.add('Handlebar helpers - {{sessionEquals}} Integer', function (test) {                                     // 42
		//Template.test_helpers_21                                                                                         // 43
		Session.set('test', undefined);                                                                                    // 44
		var onscreen = OnscreenDiv(Meteor.render(Template.test_helpers_21));                                               // 45
		var onscreen2 = OnscreenDiv(Meteor.render(Template.test_helpers_22));                                              // 46
		var onscreen3 = OnscreenDiv(Meteor.render(Template.test_helpers_20));                                              // 47
		test.equal(onscreen.rawHtml(), 'false');                                                                           // 48
		                                                                                                                   // 49
		Session.set('test', 1);                                                                                            // 50
		Meteor.flush();                                                                                                    // 51
		test.equal(onscreen.rawHtml(), 'true');                                                                            // 52
		test.equal(onscreen2.rawHtml(), 'false');                                                                          // 53
		test.equal(onscreen3.rawHtml(), 'false');                                                                          // 54
                                                                                                                     // 55
		Session.set('test', 'ok');                                                                                         // 56
		Meteor.flush();                                                                                                    // 57
		test.equal(onscreen.rawHtml(), 'false');                                                                           // 58
		onscreen.kill();                                                                                                   // 59
		onscreen2.kill();                                                                                                  // 60
		onscreen3.kill();                                                                                                  // 61
                                                                                                                     // 62
	});                                                                                                                 // 63
                                                                                                                     // 64
	//XXX: Only string and int can be passed as parametre for helpers?                                                  // 65
	Tinytest.add('Handlebar helpers - {{sessionEquals}} Array', function (test) {                                       // 66
		//Test of arrays                                                                                                   // 67
		//Template.test_helpers_23                                                                                         // 68
		Session.set('test', undefined);                                                                                    // 69
		var onscreen = OnscreenDiv(Meteor.render(Template.test_helpers_23));                                               // 70
		//test.equal(onscreen.rawHtml(), 'false');                                                                         // 71
		Session.set('test', ['a', 'b', 'c']);                                                                              // 72
		Meteor.flush();                                                                                                    // 73
		test.equal(onscreen.rawHtml(), 'true', 'Issue 617, This fails due to lack of support for value input as array');   // 74
		Session.set('test', 'ok');                                                                                         // 75
		Meteor.flush();                                                                                                    // 76
		test.equal(onscreen.rawHtml(), 'false');                                                                           // 77
		onscreen.kill();                                                                                                   // 78
	});                                                                                                                 // 79
                                                                                                                     // 80
	//XXX: Only string and int can be passed as parametre for helpers?                                                  // 81
	Tinytest.add('Handlebar helpers - {{sessionEquals}} Objects', function (test) {                                     // 82
		//Test of arrays                                                                                                   // 83
		//Template.test_helpers_23                                                                                         // 84
		Session.set('test', undefined);                                                                                    // 85
		var onscreen = OnscreenDiv(Meteor.render(Template.test_helpers_24));                                               // 86
		test.notEqual(Template.test_helpers_24, undefined, 'Handlebars does not support objects as input in helpers');     // 87
		//test.equal(onscreen.rawHtml(), 'false');                                                                         // 88
		Session.set('test', {foo: 'bar'});                                                                                 // 89
		Meteor.flush();                                                                                                    // 90
		test.equal(onscreen.rawHtml(), 'true', 'Issue 617, This fails due to lack of support for value input as objects'); // 91
		Session.set('test', 'ok');                                                                                         // 92
		Meteor.flush();                                                                                                    // 93
		test.equal(onscreen.rawHtml(), 'false');                                                                           // 94
		onscreen.kill();                                                                                                   // 95
	});                                                                                                                 // 96
                                                                                                                     // 97
	Tinytest.add('Handlebar helpers - {{sessionEquals}} Boolean', function (test) {                                     // 98
		//Template.test_helpers_24                                                                                         // 99
		Session.set('test', undefined);                                                                                    // 100
		var onscreen1 = OnscreenDiv(Meteor.render(Template.test_helpers_25));                                              // 101
		var onscreen2 = OnscreenDiv(Meteor.render(Template.test_helpers_26));                                              // 102
		var onscreen3 = OnscreenDiv(Meteor.render(Template.test_helpers_27)); //Test if sessionEquals                      // 103
		test.equal(onscreen1.rawHtml(), 'false');                                                                          // 104
		Session.set('test', true);                                                                                         // 105
		Meteor.flush();                                                                                                    // 106
		test.equal(onscreen1.rawHtml(), 'true');                                                                           // 107
		test.equal(onscreen2.rawHtml(), 'false');                                                                          // 108
		test.equal(onscreen3.rawHtml(), 'Test is true');                                                                   // 109
		Session.set('test', false);                                                                                        // 110
		Meteor.flush();                                                                                                    // 111
		test.equal(onscreen1.rawHtml(), 'false');                                                                          // 112
		test.equal(onscreen2.rawHtml(), 'true');                                                                           // 113
		test.equal(onscreen3.rawHtml(), 'Test is false');                                                                  // 114
		onscreen1.kill();                                                                                                  // 115
		onscreen2.kill();                                                                                                  // 116
		onscreen3.kill();                                                                                                  // 117
	});                                                                                                                 // 118
                                                                                                                     // 119
	Tinytest.addAsync("Handlebar helpers - test {{findOne}} and {{find}}", function (test, onComplete) {                // 120
		testCollection.insert({ a: 1, b:2 });                                                                              // 121
                                                                                                                     // 122
		var onscreen1 = OnscreenDiv(Meteor.render(Template.test_helpers_30)); //findOne                                    // 123
		var onscreen2 = OnscreenDiv(Meteor.render(Template.test_helpers_31)); //find                                       // 124
		var onscreen3 = OnscreenDiv(Meteor.render(Template.test_helpers_32)); //with find                                  // 125
		var onscreen4 = OnscreenDiv(Meteor.render(Template.test_helpers_33)); //with find return a                         // 126
		var onscreen5 = OnscreenDiv(Meteor.render(Template.test_helpers_34)); //each find return a                         // 127
                                                                                                                     // 128
		test.notEqual(Template.test_helpers_30, undefined, 'findOne');                                                     // 129
		test.notEqual(Template.test_helpers_31, undefined, 'find');                                                        // 130
		test.notEqual(Template.test_helpers_32, undefined, 'with');                                                        // 131
		test.notEqual(Template.test_helpers_33, undefined, 'with return a');                                               // 132
		test.notEqual(Template.test_helpers_34, undefined, 'each return a');                                               // 133
                                                                                                                     // 134
		test.equal(onscreen1.rawHtml(), '[object Object]', '{{findOne}}');                                                 // 135
		test.equal(onscreen2.rawHtml(), '[object Object]', '{{find}}');                                                    // 136
		test.equal(onscreen3.rawHtml(), 'ok', 'with {{findOne}}');                                                         // 137
		test.equal(onscreen4.rawHtml(), '1', 'with {{findOne}}');                                                          // 138
		test.equal(onscreen5.rawHtml(), '1', 'each {{find}}');                                                             // 139
		//console.log(onscreen5.rawHtml());                                                                                // 140
                                                                                                                     // 141
		testCollection.remove({}); //Remove all                                                                            // 142
		Meteor.flush();                                                                                                    // 143
		test.equal(onscreen1.rawHtml(), '<!--empty-->', '{{findOne}}');                                                    // 144
		test.equal(onscreen2.rawHtml(), '[object Object]', '{{find}}'); //Guess this allways returns an object             // 145
		//test.equal(onscreen3.rawHtml(), 'ok', 'with {{findOne}}');                                                       // 146
		test.equal(onscreen4.rawHtml(), '<!--empty-->', 'with {{findOne}}');                                               // 147
		test.equal(onscreen5.rawHtml(), 'none', 'each {{find}}');                                                          // 148
		//console.log(onscreen5.rawHtml());                                                                                // 149
		onscreen1.kill();                                                                                                  // 150
		onscreen2.kill();                                                                                                  // 151
		onscreen3.kill();                                                                                                  // 152
		onscreen4.kill();                                                                                                  // 153
		onscreen5.kill();                                                                                                  // 154
		onComplete();                                                                                                      // 155
	});                                                                                                                 // 156
                                                                                                                     // 157
}());                                                                                                                // 158
                                                                                                                     // 159
//Test API:                                                                                                          // 160
//test.isFalse(v, msg)                                                                                               // 161
//test.isTrue(v, msg)                                                                                                // 162
//test.equalactual, expected, message, not                                                                           // 163
//test.length(obj, len)                                                                                              // 164
//test.include(s, v)                                                                                                 // 165
//test.isNaN(v, msg)                                                                                                 // 166
//test.isUndefined(v, msg)                                                                                           // 167
//test.isNotNull                                                                                                     // 168
//test.isNull                                                                                                        // 169
//test.throws(func)                                                                                                  // 170
//test.instanceOf(obj, klass)                                                                                        // 171
//test.notEqual(actual, expected, message)                                                                           // 172
//test.runId()                                                                                                       // 173
//test.exception(exception)                                                                                          // 174
//test.expect_fail()                                                                                                 // 175
//test.ok(doc)                                                                                                       // 176
//test.fail(doc)                                                                                                     // 177
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);
