(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "+eM2":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "EVdn":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.4.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2019-05-01T21:04Z
 */
( function( global, factory ) {

	"use strict";

	if (  true && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};




	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.4.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a global context
	globalEval: function( code, options ) {
		DOMEval( code, { nonce: options && options.nonce } );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.4
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2019-04-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) &&

				// Support: IE 8 only
				// Exclude object elements
				(nodeType !== 1 || context.nodeName.toLowerCase() !== "object") ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 && rdescend.test( selector ) ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem.namespaceURI,
		docElem = (elem.ownerDocument || elem).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( typeof elem.contentDocument !== "undefined" ) {
			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();
						return result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								} );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Fall back to offsetWidth/offsetHeight when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	// Support: Android <=4.1 - 4.3 only
	// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
	// Support: IE 9-11 only
	// Also use offsetWidth/offsetHeight for when box sizing is unreliable
	// We use getClientRects() to check for hidden/disconnected.
	// In those cases, the computed value can be trusted to be border-box
	if ( ( !support.boxSizingReliable() && isBorderBox ||
		val === "auto" ||
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
					jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = Date.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url, options ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),

/***/ "Iab2":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(a,b){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}})(this,function(){"use strict";function b(a,b){return"undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(b,c,d){var e=new XMLHttpRequest;e.open("GET",b),e.responseType="blob",e.onload=function(){a(e.response,c,d)},e.onerror=function(){console.error("could not download file")},e.send()}function d(a){var b=new XMLHttpRequest;b.open("HEAD",a,!1);try{b.send()}catch(a){}return 200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,a=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i)})}}:function(a,b,d,e){if(e=e||open("","_blank"),e&&(e.document.title=e.document.body.innerText="downloading..."),"string"==typeof a)return c(a,b,d);var g="application/octet-stream"===a.type,h=/constructor/i.test(f.HTMLElement)||f.safari,i=/CriOS\/[\d]+/.test(navigator.userAgent);if((i||g&&h)&&"object"==typeof FileReader){var j=new FileReader;j.onloadend=function(){var a=j.result;a=i?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),e?e.location.href=a:location=a,e=null},j.readAsDataURL(a)}else{var k=f.URL||f.webkitURL,l=k.createObjectURL(a);e?e.location=l:location.href=l,e=null,setTimeout(function(){k.revokeObjectURL(l)},4E4)}});f.saveAs=a.saveAs=a, true&&(module.exports=a)});

//# sourceMappingURL=FileSaver.min.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("yLpj")))

/***/ }),

/***/ "LdiE":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "VS3o":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_$3Dmol, $) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var require;var require;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(e,t){"use strict"; true&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";var r=[],n=e.document,i=Object.getPrototypeOf,o=r.slice,a=r.concat,s=r.push,l=r.indexOf,c={},u=c.toString,h=c.hasOwnProperty,f=h.toString,d=f.call(Object),p={};function m(e,t){var r=(t=t||n).createElement("script");r.text=e,t.head.appendChild(r).parentNode.removeChild(r)}var v=function(e,t){return new v.fn.init(e,t)},g=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,y=/^-ms-/,b=/-([a-z])/g,x=function(e,t){return t.toUpperCase()};function w(e){var t=!!e&&"length"in e&&e.length,r=v.type(e);return"function"!==r&&!v.isWindow(e)&&("array"===r||0===t||"number"==typeof t&&t>0&&t-1 in e)}v.fn=v.prototype={jquery:"3.2.1",constructor:v,length:0,toArray:function(){return o.call(this)},get:function(e){return null==e?o.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=v.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return v.each(this,e)},map:function(e){return this.pushStack(v.map(this,function(t,r){return e.call(t,r,t)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,r=+e+(e<0?t:0);return this.pushStack(r>=0&&r<t?[this[r]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:r.sort,splice:r.splice},v.extend=v.fn.extend=function(){var e,t,r,n,i,o,a=arguments[0]||{},s=1,l=arguments.length,c=!1;for("boolean"==typeof a&&(c=a,a=arguments[s]||{},s++),"object"==typeof a||v.isFunction(a)||(a={}),s===l&&(a=this,s--);s<l;s++)if(null!=(e=arguments[s]))for(t in e)r=a[t],a!==(n=e[t])&&(c&&n&&(v.isPlainObject(n)||(i=Array.isArray(n)))?(i?(i=!1,o=r&&Array.isArray(r)?r:[]):o=r&&v.isPlainObject(r)?r:{},a[t]=v.extend(c,o,n)):void 0!==n&&(a[t]=n));return a},v.extend({expando:"jQuery"+("3.2.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isFunction:function(e){return"function"===v.type(e)},isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){var t=v.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},isPlainObject:function(e){var t,r;return!(!e||"[object Object]"!==u.call(e))&&(!(t=i(e))||"function"==typeof(r=h.call(t,"constructor")&&t.constructor)&&f.call(r)===d)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?c[u.call(e)]||"object":typeof e},globalEval:function(e){m(e)},camelCase:function(e){return e.replace(y,"ms-").replace(b,x)},each:function(e,t){var r,n=0;if(w(e))for(r=e.length;n<r&&!1!==t.call(e[n],n,e[n]);n++);else for(n in e)if(!1===t.call(e[n],n,e[n]))break;return e},trim:function(e){return null==e?"":(e+"").replace(g,"")},makeArray:function(e,t){var r=t||[];return null!=e&&(w(Object(e))?v.merge(r,"string"==typeof e?[e]:e):s.call(r,e)),r},inArray:function(e,t,r){return null==t?-1:l.call(t,e,r)},merge:function(e,t){for(var r=+t.length,n=0,i=e.length;n<r;n++)e[i++]=t[n];return e.length=i,e},grep:function(e,t,r){for(var n=[],i=0,o=e.length,a=!r;i<o;i++)!t(e[i],i)!==a&&n.push(e[i]);return n},map:function(e,t,r){var n,i,o=0,s=[];if(w(e))for(n=e.length;o<n;o++)null!=(i=t(e[o],o,r))&&s.push(i);else for(o in e)null!=(i=t(e[o],o,r))&&s.push(i);return a.apply([],s)},guid:1,proxy:function(e,t){var r,n,i;if("string"==typeof t&&(r=e[t],t=e,e=r),v.isFunction(e))return n=o.call(arguments,2),(i=function(){return e.apply(t||this,n.concat(o.call(arguments)))}).guid=e.guid=e.guid||v.guid++,i},now:Date.now,support:p}),"function"==typeof Symbol&&(v.fn[Symbol.iterator]=r[Symbol.iterator]),v.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){c["[object "+t+"]"]=t.toLowerCase()});var D=function(e){var t,r,n,i,o,a,s,l,c,u,h,f,d,p,m,v,g,y,b,x="sizzle"+1*new Date,w=e.document,D=0,C=0,A=ae(),$=ae(),S=ae(),M=function(e,t){return e===t&&(h=!0),0},_={}.hasOwnProperty,z=[],T=z.pop,L=z.push,E=z.push,F=z.slice,k=function(e,t){for(var r=0,n=e.length;r<n;r++)if(e[r]===t)return r;return-1},I="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",P="[\\x20\\t\\r\\n\\f]",O="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",R="\\["+P+"*("+O+")(?:"+P+"*([*^$|!~]?=)"+P+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+P+"*\\]",N=":("+O+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+R+")*)|.*)\\)|)",B=new RegExp(P+"+","g"),V=new RegExp("^"+P+"+|((?:^|[^\\\\])(?:\\\\.)*)"+P+"+$","g"),U=new RegExp("^"+P+"*,"+P+"*"),j=new RegExp("^"+P+"*([>+~]|"+P+")"+P+"*"),G=new RegExp("="+P+"*([^\\]'\"]*?)"+P+"*\\]","g"),q=new RegExp(N),H=new RegExp("^"+O+"$"),W={ID:new RegExp("^#("+O+")"),CLASS:new RegExp("^\\.("+O+")"),TAG:new RegExp("^("+O+"|[*])"),ATTR:new RegExp("^"+R),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+P+"*(even|odd|(([+-]|)(\\d*)n|)"+P+"*(?:([+-]|)"+P+"*(\\d+)|))"+P+"*\\)|)","i"),bool:new RegExp("^(?:"+I+")$","i"),needsContext:new RegExp("^"+P+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+P+"*((?:-\\d)?\\d*)"+P+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,X=/^[^{]+\{\s*\[native \w/,Q=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,K=/[+~]/,J=new RegExp("\\\\([\\da-f]{1,6}"+P+"?|("+P+")|.)","ig"),ee=function(e,t,r){var n="0x"+t-65536;return n!=n||r?t:n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320)},te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,re=function(e,t){return t?"\0"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},ne=function(){f()},ie=ye(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{E.apply(z=F.call(w.childNodes),w.childNodes),z[w.childNodes.length].nodeType}catch(e){E={apply:z.length?function(e,t){L.apply(e,F.call(t))}:function(e,t){for(var r=e.length,n=0;e[r++]=t[n++];);e.length=r-1}}}function oe(e,t,n,i){var o,s,c,u,h,p,g,y=t&&t.ownerDocument,D=t?t.nodeType:9;if(n=n||[],"string"!=typeof e||!e||1!==D&&9!==D&&11!==D)return n;if(!i&&((t?t.ownerDocument||t:w)!==d&&f(t),t=t||d,m)){if(11!==D&&(h=Q.exec(e)))if(o=h[1]){if(9===D){if(!(c=t.getElementById(o)))return n;if(c.id===o)return n.push(c),n}else if(y&&(c=y.getElementById(o))&&b(t,c)&&c.id===o)return n.push(c),n}else{if(h[2])return E.apply(n,t.getElementsByTagName(e)),n;if((o=h[3])&&r.getElementsByClassName&&t.getElementsByClassName)return E.apply(n,t.getElementsByClassName(o)),n}if(r.qsa&&!S[e+" "]&&(!v||!v.test(e))){if(1!==D)y=t,g=e;else if("object"!==t.nodeName.toLowerCase()){for((u=t.getAttribute("id"))?u=u.replace(te,re):t.setAttribute("id",u=x),s=(p=a(e)).length;s--;)p[s]="#"+u+" "+ge(p[s]);g=p.join(","),y=K.test(e)&&me(t.parentNode)||t}if(g)try{return E.apply(n,y.querySelectorAll(g)),n}catch(e){}finally{u===x&&t.removeAttribute("id")}}}return l(e.replace(V,"$1"),t,n,i)}function ae(){var e=[];return function t(r,i){return e.push(r+" ")>n.cacheLength&&delete t[e.shift()],t[r+" "]=i}}function se(e){return e[x]=!0,e}function le(e){var t=d.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ce(e,t){for(var r=e.split("|"),i=r.length;i--;)n.attrHandle[r[i]]=t}function ue(e,t){var r=t&&e,n=r&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(n)return n;if(r)for(;r=r.nextSibling;)if(r===t)return-1;return e?1:-1}function he(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function fe(e){return function(t){var r=t.nodeName.toLowerCase();return("input"===r||"button"===r)&&t.type===e}}function de(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ie(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function pe(e){return se(function(t){return t=+t,se(function(r,n){for(var i,o=e([],r.length,t),a=o.length;a--;)r[i=o[a]]&&(r[i]=!(n[i]=r[i]))})})}function me(e){return e&&void 0!==e.getElementsByTagName&&e}for(t in r=oe.support={},o=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},f=oe.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!==d&&9===a.nodeType&&a.documentElement?(p=(d=a).documentElement,m=!o(d),w!==d&&(i=d.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",ne,!1):i.attachEvent&&i.attachEvent("onunload",ne)),r.attributes=le(function(e){return e.className="i",!e.getAttribute("className")}),r.getElementsByTagName=le(function(e){return e.appendChild(d.createComment("")),!e.getElementsByTagName("*").length}),r.getElementsByClassName=X.test(d.getElementsByClassName),r.getById=le(function(e){return p.appendChild(e).id=x,!d.getElementsByName||!d.getElementsByName(x).length}),r.getById?(n.filter.ID=function(e){var t=e.replace(J,ee);return function(e){return e.getAttribute("id")===t}},n.find.ID=function(e,t){if(void 0!==t.getElementById&&m){var r=t.getElementById(e);return r?[r]:[]}}):(n.filter.ID=function(e){var t=e.replace(J,ee);return function(e){var r=void 0!==e.getAttributeNode&&e.getAttributeNode("id");return r&&r.value===t}},n.find.ID=function(e,t){if(void 0!==t.getElementById&&m){var r,n,i,o=t.getElementById(e);if(o){if((r=o.getAttributeNode("id"))&&r.value===e)return[o];for(i=t.getElementsByName(e),n=0;o=i[n++];)if((r=o.getAttributeNode("id"))&&r.value===e)return[o]}return[]}}),n.find.TAG=r.getElementsByTagName?function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):r.qsa?t.querySelectorAll(e):void 0}:function(e,t){var r,n=[],i=0,o=t.getElementsByTagName(e);if("*"===e){for(;r=o[i++];)1===r.nodeType&&n.push(r);return n}return o},n.find.CLASS=r.getElementsByClassName&&function(e,t){if(void 0!==t.getElementsByClassName&&m)return t.getElementsByClassName(e)},g=[],v=[],(r.qsa=X.test(d.querySelectorAll))&&(le(function(e){p.appendChild(e).innerHTML="<a id='"+x+"'></a><select id='"+x+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+P+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+P+"*(?:value|"+I+")"),e.querySelectorAll("[id~="+x+"-]").length||v.push("~="),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+x+"+*").length||v.push(".#.+[+~]")}),le(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=d.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+P+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),p.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(r.matchesSelector=X.test(y=p.matches||p.webkitMatchesSelector||p.mozMatchesSelector||p.oMatchesSelector||p.msMatchesSelector))&&le(function(e){r.disconnectedMatch=y.call(e,"*"),y.call(e,"[s!='']:x"),g.push("!=",N)}),v=v.length&&new RegExp(v.join("|")),g=g.length&&new RegExp(g.join("|")),t=X.test(p.compareDocumentPosition),b=t||X.test(p.contains)?function(e,t){var r=9===e.nodeType?e.documentElement:e,n=t&&t.parentNode;return e===n||!(!n||1!==n.nodeType||!(r.contains?r.contains(n):e.compareDocumentPosition&&16&e.compareDocumentPosition(n)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},M=t?function(e,t){if(e===t)return h=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!r.sortDetached&&t.compareDocumentPosition(e)===n?e===d||e.ownerDocument===w&&b(w,e)?-1:t===d||t.ownerDocument===w&&b(w,t)?1:u?k(u,e)-k(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return h=!0,0;var r,n=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===d?-1:t===d?1:i?-1:o?1:u?k(u,e)-k(u,t):0;if(i===o)return ue(e,t);for(r=e;r=r.parentNode;)a.unshift(r);for(r=t;r=r.parentNode;)s.unshift(r);for(;a[n]===s[n];)n++;return n?ue(a[n],s[n]):a[n]===w?-1:s[n]===w?1:0},d):d},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==d&&f(e),t=t.replace(G,"='$1']"),r.matchesSelector&&m&&!S[t+" "]&&(!g||!g.test(t))&&(!v||!v.test(t)))try{var n=y.call(e,t);if(n||r.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){}return oe(t,d,null,[e]).length>0},oe.contains=function(e,t){return(e.ownerDocument||e)!==d&&f(e),b(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==d&&f(e);var i=n.attrHandle[t.toLowerCase()],o=i&&_.call(n.attrHandle,t.toLowerCase())?i(e,t,!m):void 0;return void 0!==o?o:r.attributes||!m?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},oe.escape=function(e){return(e+"").replace(te,re)},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},oe.uniqueSort=function(e){var t,n=[],i=0,o=0;if(h=!r.detectDuplicates,u=!r.sortStable&&e.slice(0),e.sort(M),h){for(;t=e[o++];)t===e[o]&&(i=n.push(o));for(;i--;)e.splice(n[i],1)}return u=null,e},i=oe.getText=function(e){var t,r="",n=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)r+=i(e)}else if(3===o||4===o)return e.nodeValue}else for(;t=e[n++];)r+=i(t);return r},(n=oe.selectors={cacheLength:50,createPseudo:se,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(J,ee),e[3]=(e[3]||e[4]||e[5]||"").replace(J,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,r=!e[6]&&e[2];return W.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":r&&q.test(r)&&(t=a(r,!0))&&(t=r.indexOf(")",r.length-t)-r.length)&&(e[0]=e[0].slice(0,t),e[2]=r.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(J,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=A[e+" "];return t||(t=new RegExp("(^|"+P+")"+e+"("+P+"|$)"))&&A(e,function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,r){return function(n){var i=oe.attr(n,e);return null==i?"!="===t:!t||(i+="","="===t?i===r:"!="===t?i!==r:"^="===t?r&&0===i.indexOf(r):"*="===t?r&&i.indexOf(r)>-1:"$="===t?r&&i.slice(-r.length)===r:"~="===t?(" "+i.replace(B," ")+" ").indexOf(r)>-1:"|="===t&&(i===r||i.slice(0,r.length+1)===r+"-"))}},CHILD:function(e,t,r,n,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===n&&0===i?function(e){return!!e.parentNode}:function(t,r,l){var c,u,h,f,d,p,m=o!==a?"nextSibling":"previousSibling",v=t.parentNode,g=s&&t.nodeName.toLowerCase(),y=!l&&!s,b=!1;if(v){if(o){for(;m;){for(f=t;f=f[m];)if(s?f.nodeName.toLowerCase()===g:1===f.nodeType)return!1;p=m="only"===e&&!p&&"nextSibling"}return!0}if(p=[a?v.firstChild:v.lastChild],a&&y){for(b=(d=(c=(u=(h=(f=v)[x]||(f[x]={}))[f.uniqueID]||(h[f.uniqueID]={}))[e]||[])[0]===D&&c[1])&&c[2],f=d&&v.childNodes[d];f=++d&&f&&f[m]||(b=d=0)||p.pop();)if(1===f.nodeType&&++b&&f===t){u[e]=[D,d,b];break}}else if(y&&(b=d=(c=(u=(h=(f=t)[x]||(f[x]={}))[f.uniqueID]||(h[f.uniqueID]={}))[e]||[])[0]===D&&c[1]),!1===b)for(;(f=++d&&f&&f[m]||(b=d=0)||p.pop())&&((s?f.nodeName.toLowerCase()!==g:1!==f.nodeType)||!++b||(y&&((u=(h=f[x]||(f[x]={}))[f.uniqueID]||(h[f.uniqueID]={}))[e]=[D,b]),f!==t)););return(b-=i)===n||b%n==0&&b/n>=0}}},PSEUDO:function(e,t){var r,i=n.pseudos[e]||n.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);return i[x]?i(t):i.length>1?(r=[e,e,"",t],n.setFilters.hasOwnProperty(e.toLowerCase())?se(function(e,r){for(var n,o=i(e,t),a=o.length;a--;)e[n=k(e,o[a])]=!(r[n]=o[a])}):function(e){return i(e,0,r)}):i}},pseudos:{not:se(function(e){var t=[],r=[],n=s(e.replace(V,"$1"));return n[x]?se(function(e,t,r,i){for(var o,a=n(e,null,i,[]),s=e.length;s--;)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,n(t,null,o,r),t[0]=null,!r.pop()}}),has:se(function(e){return function(t){return oe(e,t).length>0}}),contains:se(function(e){return e=e.replace(J,ee),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:se(function(e){return H.test(e||"")||oe.error("unsupported lang: "+e),e=e.replace(J,ee).toLowerCase(),function(t){var r;do{if(r=m?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(r=r.toLowerCase())===e||0===r.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var r=e.location&&e.location.hash;return r&&r.slice(1)===t.id},root:function(e){return e===p},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:de(!1),disabled:de(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!n.pseudos.empty(e)},header:function(e){return Z.test(e.nodeName)},input:function(e){return Y.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:pe(function(){return[0]}),last:pe(function(e,t){return[t-1]}),eq:pe(function(e,t,r){return[r<0?r+t:r]}),even:pe(function(e,t){for(var r=0;r<t;r+=2)e.push(r);return e}),odd:pe(function(e,t){for(var r=1;r<t;r+=2)e.push(r);return e}),lt:pe(function(e,t,r){for(var n=r<0?r+t:r;--n>=0;)e.push(n);return e}),gt:pe(function(e,t,r){for(var n=r<0?r+t:r;++n<t;)e.push(n);return e})}}).pseudos.nth=n.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})n.pseudos[t]=he(t);for(t in{submit:!0,reset:!0})n.pseudos[t]=fe(t);function ve(){}function ge(e){for(var t=0,r=e.length,n="";t<r;t++)n+=e[t].value;return n}function ye(e,t,r){var n=t.dir,i=t.next,o=i||n,a=r&&"parentNode"===o,s=C++;return t.first?function(t,r,i){for(;t=t[n];)if(1===t.nodeType||a)return e(t,r,i);return!1}:function(t,r,l){var c,u,h,f=[D,s];if(l){for(;t=t[n];)if((1===t.nodeType||a)&&e(t,r,l))return!0}else for(;t=t[n];)if(1===t.nodeType||a)if(u=(h=t[x]||(t[x]={}))[t.uniqueID]||(h[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[n]||t;else{if((c=u[o])&&c[0]===D&&c[1]===s)return f[2]=c[2];if(u[o]=f,f[2]=e(t,r,l))return!0}return!1}}function be(e){return e.length>1?function(t,r,n){for(var i=e.length;i--;)if(!e[i](t,r,n))return!1;return!0}:e[0]}function xe(e,t,r,n,i){for(var o,a=[],s=0,l=e.length,c=null!=t;s<l;s++)(o=e[s])&&(r&&!r(o,n,i)||(a.push(o),c&&t.push(s)));return a}function we(e,t,r,n,i,o){return n&&!n[x]&&(n=we(n)),i&&!i[x]&&(i=we(i,o)),se(function(o,a,s,l){var c,u,h,f=[],d=[],p=a.length,m=o||function(e,t,r){for(var n=0,i=t.length;n<i;n++)oe(e,t[n],r);return r}(t||"*",s.nodeType?[s]:s,[]),v=!e||!o&&t?m:xe(m,f,e,s,l),g=r?i||(o?e:p||n)?[]:a:v;if(r&&r(v,g,s,l),n)for(c=xe(g,d),n(c,[],s,l),u=c.length;u--;)(h=c[u])&&(g[d[u]]=!(v[d[u]]=h));if(o){if(i||e){if(i){for(c=[],u=g.length;u--;)(h=g[u])&&c.push(v[u]=h);i(null,g=[],c,l)}for(u=g.length;u--;)(h=g[u])&&(c=i?k(o,h):f[u])>-1&&(o[c]=!(a[c]=h))}}else g=xe(g===a?g.splice(p,g.length):g),i?i(null,a,g,l):E.apply(a,g)})}function De(e){for(var t,r,i,o=e.length,a=n.relative[e[0].type],s=a||n.relative[" "],l=a?1:0,u=ye(function(e){return e===t},s,!0),h=ye(function(e){return k(t,e)>-1},s,!0),f=[function(e,r,n){var i=!a&&(n||r!==c)||((t=r).nodeType?u(e,r,n):h(e,r,n));return t=null,i}];l<o;l++)if(r=n.relative[e[l].type])f=[ye(be(f),r)];else{if((r=n.filter[e[l].type].apply(null,e[l].matches))[x]){for(i=++l;i<o&&!n.relative[e[i].type];i++);return we(l>1&&be(f),l>1&&ge(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(V,"$1"),r,l<i&&De(e.slice(l,i)),i<o&&De(e=e.slice(i)),i<o&&ge(e))}f.push(r)}return be(f)}return ve.prototype=n.filters=n.pseudos,n.setFilters=new ve,a=oe.tokenize=function(e,t){var r,i,o,a,s,l,c,u=$[e+" "];if(u)return t?0:u.slice(0);for(s=e,l=[],c=n.preFilter;s;){for(a in r&&!(i=U.exec(s))||(i&&(s=s.slice(i[0].length)||s),l.push(o=[])),r=!1,(i=j.exec(s))&&(r=i.shift(),o.push({value:r,type:i[0].replace(V," ")}),s=s.slice(r.length)),n.filter)!(i=W[a].exec(s))||c[a]&&!(i=c[a](i))||(r=i.shift(),o.push({value:r,type:a,matches:i}),s=s.slice(r.length));if(!r)break}return t?s.length:s?oe.error(e):$(e,l).slice(0)},s=oe.compile=function(e,t){var r,i=[],o=[],s=S[e+" "];if(!s){for(t||(t=a(e)),r=t.length;r--;)(s=De(t[r]))[x]?i.push(s):o.push(s);(s=S(e,function(e,t){var r=t.length>0,i=e.length>0,o=function(o,a,s,l,u){var h,p,v,g=0,y="0",b=o&&[],x=[],w=c,C=o||i&&n.find.TAG("*",u),A=D+=null==w?1:Math.random()||.1,$=C.length;for(u&&(c=a===d||a||u);y!==$&&null!=(h=C[y]);y++){if(i&&h){for(p=0,a||h.ownerDocument===d||(f(h),s=!m);v=e[p++];)if(v(h,a||d,s)){l.push(h);break}u&&(D=A)}r&&((h=!v&&h)&&g--,o&&b.push(h))}if(g+=y,r&&y!==g){for(p=0;v=t[p++];)v(b,x,a,s);if(o){if(g>0)for(;y--;)b[y]||x[y]||(x[y]=T.call(l));x=xe(x)}E.apply(l,x),u&&!o&&x.length>0&&g+t.length>1&&oe.uniqueSort(l)}return u&&(D=A,c=w),b};return r?se(o):o}(o,i))).selector=e}return s},l=oe.select=function(e,t,r,i){var o,l,c,u,h,f="function"==typeof e&&e,d=!i&&a(e=f.selector||e);if(r=r||[],1===d.length){if((l=d[0]=d[0].slice(0)).length>2&&"ID"===(c=l[0]).type&&9===t.nodeType&&m&&n.relative[l[1].type]){if(!(t=(n.find.ID(c.matches[0].replace(J,ee),t)||[])[0]))return r;f&&(t=t.parentNode),e=e.slice(l.shift().value.length)}for(o=W.needsContext.test(e)?0:l.length;o--&&(c=l[o],!n.relative[u=c.type]);)if((h=n.find[u])&&(i=h(c.matches[0].replace(J,ee),K.test(l[0].type)&&me(t.parentNode)||t))){if(l.splice(o,1),!(e=i.length&&ge(l)))return E.apply(r,i),r;break}}return(f||s(e,d))(i,t,!m,r,!t||K.test(e)&&me(t.parentNode)||t),r},r.sortStable=x.split("").sort(M).join("")===x,r.detectDuplicates=!!h,f(),r.sortDetached=le(function(e){return 1&e.compareDocumentPosition(d.createElement("fieldset"))}),le(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||ce("type|href|height|width",function(e,t,r){if(!r)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),r.attributes&&le(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||ce("value",function(e,t,r){if(!r&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),le(function(e){return null==e.getAttribute("disabled")})||ce(I,function(e,t,r){var n;if(!r)return!0===e[t]?t.toLowerCase():(n=e.getAttributeNode(t))&&n.specified?n.value:null}),oe}(e);v.find=D,v.expr=D.selectors,v.expr[":"]=v.expr.pseudos,v.uniqueSort=v.unique=D.uniqueSort,v.text=D.getText,v.isXMLDoc=D.isXML,v.contains=D.contains,v.escapeSelector=D.escape;var C=function(e,t,r){for(var n=[],i=void 0!==r;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(i&&v(e).is(r))break;n.push(e)}return n},A=function(e,t){for(var r=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&r.push(e);return r},$=v.expr.match.needsContext;function S(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var M=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,_=/^.[^:#\[\.,]*$/;function z(e,t,r){return v.isFunction(t)?v.grep(e,function(e,n){return!!t.call(e,n,e)!==r}):t.nodeType?v.grep(e,function(e){return e===t!==r}):"string"!=typeof t?v.grep(e,function(e){return l.call(t,e)>-1!==r}):_.test(t)?v.filter(t,e,r):(t=v.filter(t,e),v.grep(e,function(e){return l.call(t,e)>-1!==r&&1===e.nodeType}))}v.filter=function(e,t,r){var n=t[0];return r&&(e=":not("+e+")"),1===t.length&&1===n.nodeType?v.find.matchesSelector(n,e)?[n]:[]:v.find.matches(e,v.grep(t,function(e){return 1===e.nodeType}))},v.fn.extend({find:function(e){var t,r,n=this.length,i=this;if("string"!=typeof e)return this.pushStack(v(e).filter(function(){for(t=0;t<n;t++)if(v.contains(i[t],this))return!0}));for(r=this.pushStack([]),t=0;t<n;t++)v.find(e,i[t],r);return n>1?v.uniqueSort(r):r},filter:function(e){return this.pushStack(z(this,e||[],!1))},not:function(e){return this.pushStack(z(this,e||[],!0))},is:function(e){return!!z(this,"string"==typeof e&&$.test(e)?v(e):e||[],!1).length}});var T,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(v.fn.init=function(e,t,r){var i,o;if(!e)return this;if(r=r||T,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:L.exec(e))||!i[1]&&t)return!t||t.jquery?(t||r).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof v?t[0]:t,v.merge(this,v.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:n,!0)),M.test(i[1])&&v.isPlainObject(t))for(i in t)v.isFunction(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(o=n.getElementById(i[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):v.isFunction(e)?void 0!==r.ready?r.ready(e):e(v):v.makeArray(e,this)}).prototype=v.fn,T=v(n);var E=/^(?:parents|prev(?:Until|All))/,F={children:!0,contents:!0,next:!0,prev:!0};function k(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}v.fn.extend({has:function(e){var t=v(e,this),r=t.length;return this.filter(function(){for(var e=0;e<r;e++)if(v.contains(this,t[e]))return!0})},closest:function(e,t){var r,n=0,i=this.length,o=[],a="string"!=typeof e&&v(e);if(!$.test(e))for(;n<i;n++)for(r=this[n];r&&r!==t;r=r.parentNode)if(r.nodeType<11&&(a?a.index(r)>-1:1===r.nodeType&&v.find.matchesSelector(r,e))){o.push(r);break}return this.pushStack(o.length>1?v.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?l.call(v(e),this[0]):l.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(v.uniqueSort(v.merge(this.get(),v(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),v.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return C(e,"parentNode")},parentsUntil:function(e,t,r){return C(e,"parentNode",r)},next:function(e){return k(e,"nextSibling")},prev:function(e){return k(e,"previousSibling")},nextAll:function(e){return C(e,"nextSibling")},prevAll:function(e){return C(e,"previousSibling")},nextUntil:function(e,t,r){return C(e,"nextSibling",r)},prevUntil:function(e,t,r){return C(e,"previousSibling",r)},siblings:function(e){return A((e.parentNode||{}).firstChild,e)},children:function(e){return A(e.firstChild)},contents:function(e){return S(e,"iframe")?e.contentDocument:(S(e,"template")&&(e=e.content||e),v.merge([],e.childNodes))}},function(e,t){v.fn[e]=function(r,n){var i=v.map(this,t,r);return"Until"!==e.slice(-5)&&(n=r),n&&"string"==typeof n&&(i=v.filter(n,i)),this.length>1&&(F[e]||v.uniqueSort(i),E.test(e)&&i.reverse()),this.pushStack(i)}});var I=/[^\x20\t\r\n\f]+/g;function P(e){return e}function O(e){throw e}function R(e,t,r,n){var i;try{e&&v.isFunction(i=e.promise)?i.call(e).done(t).fail(r):e&&v.isFunction(i=e.then)?i.call(e,t,r):t.apply(void 0,[e].slice(n))}catch(e){r.apply(void 0,[e])}}v.Callbacks=function(e){e="string"==typeof e?function(e){var t={};return v.each(e.match(I)||[],function(e,r){t[r]=!0}),t}(e):v.extend({},e);var t,r,n,i,o=[],a=[],s=-1,l=function(){for(i=i||e.once,n=t=!0;a.length;s=-1)for(r=a.shift();++s<o.length;)!1===o[s].apply(r[0],r[1])&&e.stopOnFalse&&(s=o.length,r=!1);e.memory||(r=!1),t=!1,i&&(o=r?[]:"")},c={add:function(){return o&&(r&&!t&&(s=o.length-1,a.push(r)),function t(r){v.each(r,function(r,n){v.isFunction(n)?e.unique&&c.has(n)||o.push(n):n&&n.length&&"string"!==v.type(n)&&t(n)})}(arguments),r&&!t&&l()),this},remove:function(){return v.each(arguments,function(e,t){for(var r;(r=v.inArray(t,o,r))>-1;)o.splice(r,1),r<=s&&s--}),this},has:function(e){return e?v.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=r="",this},disabled:function(){return!o},lock:function(){return i=a=[],r||t||(o=r=""),this},locked:function(){return!!i},fireWith:function(e,r){return i||(r=[e,(r=r||[]).slice?r.slice():r],a.push(r),t||l()),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!n}};return c},v.extend({Deferred:function(t){var r=[["notify","progress",v.Callbacks("memory"),v.Callbacks("memory"),2],["resolve","done",v.Callbacks("once memory"),v.Callbacks("once memory"),0,"resolved"],["reject","fail",v.Callbacks("once memory"),v.Callbacks("once memory"),1,"rejected"]],n="pending",i={state:function(){return n},always:function(){return o.done(arguments).fail(arguments),this},catch:function(e){return i.then(null,e)},pipe:function(){var e=arguments;return v.Deferred(function(t){v.each(r,function(r,n){var i=v.isFunction(e[n[4]])&&e[n[4]];o[n[1]](function(){var e=i&&i.apply(this,arguments);e&&v.isFunction(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[n[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,n,i){var o=0;function a(t,r,n,i){return function(){var s=this,l=arguments,c=function(){var e,c;if(!(t<o)){if((e=n.apply(s,l))===r.promise())throw new TypeError("Thenable self-resolution");c=e&&("object"==typeof e||"function"==typeof e)&&e.then,v.isFunction(c)?i?c.call(e,a(o,r,P,i),a(o,r,O,i)):(o++,c.call(e,a(o,r,P,i),a(o,r,O,i),a(o,r,P,r.notifyWith))):(n!==P&&(s=void 0,l=[e]),(i||r.resolveWith)(s,l))}},u=i?c:function(){try{c()}catch(e){v.Deferred.exceptionHook&&v.Deferred.exceptionHook(e,u.stackTrace),t+1>=o&&(n!==O&&(s=void 0,l=[e]),r.rejectWith(s,l))}};t?u():(v.Deferred.getStackHook&&(u.stackTrace=v.Deferred.getStackHook()),e.setTimeout(u))}}return v.Deferred(function(e){r[0][3].add(a(0,e,v.isFunction(i)?i:P,e.notifyWith)),r[1][3].add(a(0,e,v.isFunction(t)?t:P)),r[2][3].add(a(0,e,v.isFunction(n)?n:O))}).promise()},promise:function(e){return null!=e?v.extend(e,i):i}},o={};return v.each(r,function(e,t){var a=t[2],s=t[5];i[t[1]]=a.add,s&&a.add(function(){n=s},r[3-e][2].disable,r[0][2].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,r=t,n=Array(r),i=o.call(arguments),a=v.Deferred(),s=function(e){return function(r){n[e]=this,i[e]=arguments.length>1?o.call(arguments):r,--t||a.resolveWith(n,i)}};if(t<=1&&(R(e,a.done(s(r)).resolve,a.reject,!t),"pending"===a.state()||v.isFunction(i[r]&&i[r].then)))return a.then();for(;r--;)R(i[r],s(r),a.reject);return a.promise()}});var N=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;v.Deferred.exceptionHook=function(t,r){e.console&&e.console.warn&&t&&N.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,r)},v.readyException=function(t){e.setTimeout(function(){throw t})};var B=v.Deferred();function V(){n.removeEventListener("DOMContentLoaded",V),e.removeEventListener("load",V),v.ready()}v.fn.ready=function(e){return B.then(e).catch(function(e){v.readyException(e)}),this},v.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--v.readyWait:v.isReady)||(v.isReady=!0,!0!==e&&--v.readyWait>0||B.resolveWith(n,[v]))}}),v.ready.then=B.then,"complete"===n.readyState||"loading"!==n.readyState&&!n.documentElement.doScroll?e.setTimeout(v.ready):(n.addEventListener("DOMContentLoaded",V),e.addEventListener("load",V));var U=function(e,t,r,n,i,o,a){var s=0,l=e.length,c=null==r;if("object"===v.type(r))for(s in i=!0,r)U(e,t,s,r[s],!0,o,a);else if(void 0!==n&&(i=!0,v.isFunction(n)||(a=!0),c&&(a?(t.call(e,n),t=null):(c=t,t=function(e,t,r){return c.call(v(e),r)})),t))for(;s<l;s++)t(e[s],r,a?n:n.call(e[s],s,t(e[s],r)));return i?e:c?t.call(e):l?t(e[0],r):o},j=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=v.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},j(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,r){var n,i=this.cache(e);if("string"==typeof t)i[v.camelCase(t)]=r;else for(n in t)i[v.camelCase(n)]=t[n];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][v.camelCase(t)]},access:function(e,t,r){return void 0===t||t&&"string"==typeof t&&void 0===r?this.get(e,t):(this.set(e,t,r),void 0!==r?r:t)},remove:function(e,t){var r,n=e[this.expando];if(void 0!==n){if(void 0!==t){r=(t=Array.isArray(t)?t.map(v.camelCase):(t=v.camelCase(t))in n?[t]:t.match(I)||[]).length;for(;r--;)delete n[t[r]]}(void 0===t||v.isEmptyObject(n))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!v.isEmptyObject(t)}};var q=new G,H=new G,W=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Y=/[A-Z]/g;function Z(e,t,r){var n;if(void 0===r&&1===e.nodeType)if(n="data-"+t.replace(Y,"-$&").toLowerCase(),"string"==typeof(r=e.getAttribute(n))){try{r=function(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:W.test(e)?JSON.parse(e):e)}(r)}catch(e){}H.set(e,t,r)}else r=void 0;return r}v.extend({hasData:function(e){return H.hasData(e)||q.hasData(e)},data:function(e,t,r){return H.access(e,t,r)},removeData:function(e,t){H.remove(e,t)},_data:function(e,t,r){return q.access(e,t,r)},_removeData:function(e,t){q.remove(e,t)}}),v.fn.extend({data:function(e,t){var r,n,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=H.get(o),1===o.nodeType&&!q.get(o,"hasDataAttrs"))){for(r=a.length;r--;)a[r]&&0===(n=a[r].name).indexOf("data-")&&(n=v.camelCase(n.slice(5)),Z(o,n,i[n]));q.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){H.set(this,e)}):U(this,function(t){var r;if(o&&void 0===t)return void 0!==(r=H.get(o,e))?r:void 0!==(r=Z(o,e))?r:void 0;this.each(function(){H.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){H.remove(this,e)})}}),v.extend({queue:function(e,t,r){var n;if(e)return t=(t||"fx")+"queue",n=q.get(e,t),r&&(!n||Array.isArray(r)?n=q.access(e,t,v.makeArray(r)):n.push(r)),n||[]},dequeue:function(e,t){t=t||"fx";var r=v.queue(e,t),n=r.length,i=r.shift(),o=v._queueHooks(e,t);"inprogress"===i&&(i=r.shift(),n--),i&&("fx"===t&&r.unshift("inprogress"),delete o.stop,i.call(e,function(){v.dequeue(e,t)},o)),!n&&o&&o.empty.fire()},_queueHooks:function(e,t){var r=t+"queueHooks";return q.get(e,r)||q.access(e,r,{empty:v.Callbacks("once memory").add(function(){q.remove(e,[t+"queue",r])})})}}),v.fn.extend({queue:function(e,t){var r=2;return"string"!=typeof e&&(t=e,e="fx",r--),arguments.length<r?v.queue(this[0],e):void 0===t?this:this.each(function(){var r=v.queue(this,e,t);v._queueHooks(this,e),"fx"===e&&"inprogress"!==r[0]&&v.dequeue(this,e)})},dequeue:function(e){return this.each(function(){v.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var r,n=1,i=v.Deferred(),o=this,a=this.length,s=function(){--n||i.resolveWith(o,[o])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";a--;)(r=q.get(o[a],e+"queueHooks"))&&r.empty&&(n++,r.empty.add(s));return s(),i.promise(t)}});var X=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Q=new RegExp("^(?:([+-])=|)("+X+")([a-z%]*)$","i"),K=["Top","Right","Bottom","Left"],J=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&v.contains(e.ownerDocument,e)&&"none"===v.css(e,"display")},ee=function(e,t,r,n){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];for(o in i=r.apply(e,n||[]),t)e.style[o]=a[o];return i};function te(e,t,r,n){var i,o=1,a=20,s=n?function(){return n.cur()}:function(){return v.css(e,t,"")},l=s(),c=r&&r[3]||(v.cssNumber[t]?"":"px"),u=(v.cssNumber[t]||"px"!==c&&+l)&&Q.exec(v.css(e,t));if(u&&u[3]!==c){c=c||u[3],r=r||[],u=+l||1;do{u/=o=o||".5",v.style(e,t,u+c)}while(o!==(o=s()/l)&&1!==o&&--a)}return r&&(u=+u||+l||0,i=r[1]?u+(r[1]+1)*r[2]:+r[2],n&&(n.unit=c,n.start=u,n.end=i)),i}var re={};function ne(e){var t,r=e.ownerDocument,n=e.nodeName,i=re[n];return i||(t=r.body.appendChild(r.createElement(n)),i=v.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),re[n]=i,i)}function ie(e,t){for(var r,n,i=[],o=0,a=e.length;o<a;o++)(n=e[o]).style&&(r=n.style.display,t?("none"===r&&(i[o]=q.get(n,"display")||null,i[o]||(n.style.display="")),""===n.style.display&&J(n)&&(i[o]=ne(n))):"none"!==r&&(i[o]="none",q.set(n,"display",r)));for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}v.fn.extend({show:function(){return ie(this,!0)},hide:function(){return ie(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){J(this)?v(this).show():v(this).hide()})}});var oe=/^(?:checkbox|radio)$/i,ae=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,se=/^$|\/(?:java|ecma)script/i,le={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ce(e,t){var r;return r=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&S(e,t)?v.merge([e],r):r}function ue(e,t){for(var r=0,n=e.length;r<n;r++)q.set(e[r],"globalEval",!t||q.get(t[r],"globalEval"))}le.optgroup=le.option,le.tbody=le.tfoot=le.colgroup=le.caption=le.thead,le.th=le.td;var he,fe,de=/<|&#?\w+;/;function pe(e,t,r,n,i){for(var o,a,s,l,c,u,h=t.createDocumentFragment(),f=[],d=0,p=e.length;d<p;d++)if((o=e[d])||0===o)if("object"===v.type(o))v.merge(f,o.nodeType?[o]:o);else if(de.test(o)){for(a=a||h.appendChild(t.createElement("div")),s=(ae.exec(o)||["",""])[1].toLowerCase(),l=le[s]||le._default,a.innerHTML=l[1]+v.htmlPrefilter(o)+l[2],u=l[0];u--;)a=a.lastChild;v.merge(f,a.childNodes),(a=h.firstChild).textContent=""}else f.push(t.createTextNode(o));for(h.textContent="",d=0;o=f[d++];)if(n&&v.inArray(o,n)>-1)i&&i.push(o);else if(c=v.contains(o.ownerDocument,o),a=ce(h.appendChild(o),"script"),c&&ue(a),r)for(u=0;o=a[u++];)se.test(o.type||"")&&r.push(o);return h}he=n.createDocumentFragment().appendChild(n.createElement("div")),(fe=n.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),he.appendChild(fe),p.checkClone=he.cloneNode(!0).cloneNode(!0).lastChild.checked,he.innerHTML="<textarea>x</textarea>",p.noCloneChecked=!!he.cloneNode(!0).lastChild.defaultValue;var me=n.documentElement,ve=/^key/,ge=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ye=/^([^.]*)(?:\.(.+)|)/;function be(){return!0}function xe(){return!1}function we(){try{return n.activeElement}catch(e){}}function De(e,t,r,n,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof r&&(n=n||r,r=void 0),t)De(e,s,r,n,t[s],o);return e}if(null==n&&null==i?(i=r,n=r=void 0):null==i&&("string"==typeof r?(i=n,n=void 0):(i=n,n=r,r=void 0)),!1===i)i=xe;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return v().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=v.guid++)),e.each(function(){v.event.add(this,t,i,n,r)})}v.event={global:{},add:function(e,t,r,n,i){var o,a,s,l,c,u,h,f,d,p,m,g=q.get(e);if(g)for(r.handler&&(r=(o=r).handler,i=o.selector),i&&v.find.matchesSelector(me,i),r.guid||(r.guid=v.guid++),(l=g.events)||(l=g.events={}),(a=g.handle)||(a=g.handle=function(t){return void 0!==v&&v.event.triggered!==t.type?v.event.dispatch.apply(e,arguments):void 0}),c=(t=(t||"").match(I)||[""]).length;c--;)d=m=(s=ye.exec(t[c])||[])[1],p=(s[2]||"").split(".").sort(),d&&(h=v.event.special[d]||{},d=(i?h.delegateType:h.bindType)||d,h=v.event.special[d]||{},u=v.extend({type:d,origType:m,data:n,handler:r,guid:r.guid,selector:i,needsContext:i&&v.expr.match.needsContext.test(i),namespace:p.join(".")},o),(f=l[d])||((f=l[d]=[]).delegateCount=0,h.setup&&!1!==h.setup.call(e,n,p,a)||e.addEventListener&&e.addEventListener(d,a)),h.add&&(h.add.call(e,u),u.handler.guid||(u.handler.guid=r.guid)),i?f.splice(f.delegateCount++,0,u):f.push(u),v.event.global[d]=!0)},remove:function(e,t,r,n,i){var o,a,s,l,c,u,h,f,d,p,m,g=q.hasData(e)&&q.get(e);if(g&&(l=g.events)){for(c=(t=(t||"").match(I)||[""]).length;c--;)if(d=m=(s=ye.exec(t[c])||[])[1],p=(s[2]||"").split(".").sort(),d){for(h=v.event.special[d]||{},f=l[d=(n?h.delegateType:h.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=f.length;o--;)u=f[o],!i&&m!==u.origType||r&&r.guid!==u.guid||s&&!s.test(u.namespace)||n&&n!==u.selector&&("**"!==n||!u.selector)||(f.splice(o,1),u.selector&&f.delegateCount--,h.remove&&h.remove.call(e,u));a&&!f.length&&(h.teardown&&!1!==h.teardown.call(e,p,g.handle)||v.removeEvent(e,d,g.handle),delete l[d])}else for(d in l)v.event.remove(e,d+t[c],r,n,!0);v.isEmptyObject(l)&&q.remove(e,"handle events")}},dispatch:function(e){var t,r,n,i,o,a,s=v.event.fix(e),l=new Array(arguments.length),c=(q.get(this,"events")||{})[s.type]||[],u=v.event.special[s.type]||{};for(l[0]=s,t=1;t<arguments.length;t++)l[t]=arguments[t];if(s.delegateTarget=this,!u.preDispatch||!1!==u.preDispatch.call(this,s)){for(a=v.event.handlers.call(this,s,c),t=0;(i=a[t++])&&!s.isPropagationStopped();)for(s.currentTarget=i.elem,r=0;(o=i.handlers[r++])&&!s.isImmediatePropagationStopped();)s.rnamespace&&!s.rnamespace.test(o.namespace)||(s.handleObj=o,s.data=o.data,void 0!==(n=((v.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,l))&&!1===(s.result=n)&&(s.preventDefault(),s.stopPropagation()));return u.postDispatch&&u.postDispatch.call(this,s),s.result}},handlers:function(e,t){var r,n,i,o,a,s=[],l=t.delegateCount,c=e.target;if(l&&c.nodeType&&!("click"===e.type&&e.button>=1))for(;c!==this;c=c.parentNode||this)if(1===c.nodeType&&("click"!==e.type||!0!==c.disabled)){for(o=[],a={},r=0;r<l;r++)void 0===a[i=(n=t[r]).selector+" "]&&(a[i]=n.needsContext?v(i,this).index(c)>-1:v.find(i,this,null,[c]).length),a[i]&&o.push(n);o.length&&s.push({elem:c,handlers:o})}return c=this,l<t.length&&s.push({elem:c,handlers:t.slice(l)}),s},addProp:function(e,t){Object.defineProperty(v.Event.prototype,e,{enumerable:!0,configurable:!0,get:v.isFunction(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[v.expando]?e:new v.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==we()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===we()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&S(this,"input"))return this.click(),!1},_default:function(e){return S(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},v.removeEvent=function(e,t,r){e.removeEventListener&&e.removeEventListener(t,r)},v.Event=function(e,t){if(!(this instanceof v.Event))return new v.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?be:xe,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&v.extend(this,t),this.timeStamp=e&&e.timeStamp||v.now(),this[v.expando]=!0},v.Event.prototype={constructor:v.Event,isDefaultPrevented:xe,isPropagationStopped:xe,isImmediatePropagationStopped:xe,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=be,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=be,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=be,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},v.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&ve.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&ge.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},v.event.addProp),v.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){v.event.special[e]={delegateType:t,bindType:t,handle:function(e){var r,n=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===n||v.contains(n,i))||(e.type=o.origType,r=o.handler.apply(this,arguments),e.type=t),r}}}),v.fn.extend({on:function(e,t,r,n){return De(this,e,t,r,n)},one:function(e,t,r,n){return De(this,e,t,r,n,1)},off:function(e,t,r){var n,i;if(e&&e.preventDefault&&e.handleObj)return n=e.handleObj,v(e.delegateTarget).off(n.namespace?n.origType+"."+n.namespace:n.origType,n.selector,n.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(r=t,t=void 0),!1===r&&(r=xe),this.each(function(){v.event.remove(this,e,r,t)})}});var Ce=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Ae=/<script|<style|<link/i,$e=/checked\s*(?:[^=]|=\s*.checked.)/i,Se=/^true\/(.*)/,Me=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function _e(e,t){return S(e,"table")&&S(11!==t.nodeType?t:t.firstChild,"tr")&&v(">tbody",e)[0]||e}function ze(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Te(e){var t=Se.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function Le(e,t){var r,n,i,o,a,s,l,c;if(1===t.nodeType){if(q.hasData(e)&&(o=q.access(e),a=q.set(t,o),c=o.events))for(i in delete a.handle,a.events={},c)for(r=0,n=c[i].length;r<n;r++)v.event.add(t,i,c[i][r]);H.hasData(e)&&(s=H.access(e),l=v.extend({},s),H.set(t,l))}}function Ee(e,t){var r=t.nodeName.toLowerCase();"input"===r&&oe.test(e.type)?t.checked=e.checked:"input"!==r&&"textarea"!==r||(t.defaultValue=e.defaultValue)}function Fe(e,t,r,n){t=a.apply([],t);var i,o,s,l,c,u,h=0,f=e.length,d=f-1,g=t[0],y=v.isFunction(g);if(y||f>1&&"string"==typeof g&&!p.checkClone&&$e.test(g))return e.each(function(i){var o=e.eq(i);y&&(t[0]=g.call(this,i,o.html())),Fe(o,t,r,n)});if(f&&(o=(i=pe(t,e[0].ownerDocument,!1,e,n)).firstChild,1===i.childNodes.length&&(i=o),o||n)){for(l=(s=v.map(ce(i,"script"),ze)).length;h<f;h++)c=i,h!==d&&(c=v.clone(c,!0,!0),l&&v.merge(s,ce(c,"script"))),r.call(e[h],c,h);if(l)for(u=s[s.length-1].ownerDocument,v.map(s,Te),h=0;h<l;h++)c=s[h],se.test(c.type||"")&&!q.access(c,"globalEval")&&v.contains(u,c)&&(c.src?v._evalUrl&&v._evalUrl(c.src):m(c.textContent.replace(Me,""),u))}return e}function ke(e,t,r){for(var n,i=t?v.filter(t,e):e,o=0;null!=(n=i[o]);o++)r||1!==n.nodeType||v.cleanData(ce(n)),n.parentNode&&(r&&v.contains(n.ownerDocument,n)&&ue(ce(n,"script")),n.parentNode.removeChild(n));return e}v.extend({htmlPrefilter:function(e){return e.replace(Ce,"<$1></$2>")},clone:function(e,t,r){var n,i,o,a,s=e.cloneNode(!0),l=v.contains(e.ownerDocument,e);if(!(p.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||v.isXMLDoc(e)))for(a=ce(s),n=0,i=(o=ce(e)).length;n<i;n++)Ee(o[n],a[n]);if(t)if(r)for(o=o||ce(e),a=a||ce(s),n=0,i=o.length;n<i;n++)Le(o[n],a[n]);else Le(e,s);return(a=ce(s,"script")).length>0&&ue(a,!l&&ce(e,"script")),s},cleanData:function(e){for(var t,r,n,i=v.event.special,o=0;void 0!==(r=e[o]);o++)if(j(r)){if(t=r[q.expando]){if(t.events)for(n in t.events)i[n]?v.event.remove(r,n):v.removeEvent(r,n,t.handle);r[q.expando]=void 0}r[H.expando]&&(r[H.expando]=void 0)}}}),v.fn.extend({detach:function(e){return ke(this,e,!0)},remove:function(e){return ke(this,e)},text:function(e){return U(this,function(e){return void 0===e?v.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Fe(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||_e(this,e).appendChild(e)})},prepend:function(){return Fe(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=_e(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Fe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Fe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(v.cleanData(ce(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return v.clone(this,e,t)})},html:function(e){return U(this,function(e){var t=this[0]||{},r=0,n=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ae.test(e)&&!le[(ae.exec(e)||["",""])[1].toLowerCase()]){e=v.htmlPrefilter(e);try{for(;r<n;r++)1===(t=this[r]||{}).nodeType&&(v.cleanData(ce(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return Fe(this,arguments,function(t){var r=this.parentNode;v.inArray(this,e)<0&&(v.cleanData(ce(this)),r&&r.replaceChild(t,this))},e)}}),v.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){v.fn[e]=function(e){for(var r,n=[],i=v(e),o=i.length-1,a=0;a<=o;a++)r=a===o?this:this.clone(!0),v(i[a])[t](r),s.apply(n,r.get());return this.pushStack(n)}});var Ie=/^margin/,Pe=new RegExp("^("+X+")(?!px)[a-z%]+$","i"),Oe=function(t){var r=t.ownerDocument.defaultView;return r&&r.opener||(r=e),r.getComputedStyle(t)};function Re(e,t,r){var n,i,o,a,s=e.style;return(r=r||Oe(e))&&(""!==(a=r.getPropertyValue(t)||r[t])||v.contains(e.ownerDocument,e)||(a=v.style(e,t)),!p.pixelMarginRight()&&Pe.test(a)&&Ie.test(t)&&(n=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=r.width,s.width=n,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function Ne(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function t(){if(l){l.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",l.innerHTML="",me.appendChild(s);var t=e.getComputedStyle(l);r="1%"!==t.top,a="2px"===t.marginLeft,i="4px"===t.width,l.style.marginRight="50%",o="4px"===t.marginRight,me.removeChild(s),l=null}}var r,i,o,a,s=n.createElement("div"),l=n.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",p.clearCloneStyle="content-box"===l.style.backgroundClip,s.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",s.appendChild(l),v.extend(p,{pixelPosition:function(){return t(),r},boxSizingReliable:function(){return t(),i},pixelMarginRight:function(){return t(),o},reliableMarginLeft:function(){return t(),a}}))}();var Be=/^(none|table(?!-c[ea]).+)/,Ve=/^--/,Ue={position:"absolute",visibility:"hidden",display:"block"},je={letterSpacing:"0",fontWeight:"400"},Ge=["Webkit","Moz","ms"],qe=n.createElement("div").style;function He(e){var t=v.cssProps[e];return t||(t=v.cssProps[e]=function(e){if(e in qe)return e;for(var t=e[0].toUpperCase()+e.slice(1),r=Ge.length;r--;)if((e=Ge[r]+t)in qe)return e}(e)||e),t}function We(e,t,r){var n=Q.exec(t);return n?Math.max(0,n[2]-(r||0))+(n[3]||"px"):t}function Ye(e,t,r,n,i){var o,a=0;for(o=r===(n?"border":"content")?4:"width"===t?1:0;o<4;o+=2)"margin"===r&&(a+=v.css(e,r+K[o],!0,i)),n?("content"===r&&(a-=v.css(e,"padding"+K[o],!0,i)),"margin"!==r&&(a-=v.css(e,"border"+K[o]+"Width",!0,i))):(a+=v.css(e,"padding"+K[o],!0,i),"padding"!==r&&(a+=v.css(e,"border"+K[o]+"Width",!0,i)));return a}function Ze(e,t,r){var n,i=Oe(e),o=Re(e,t,i),a="border-box"===v.css(e,"boxSizing",!1,i);return Pe.test(o)?o:(n=a&&(p.boxSizingReliable()||o===e.style[t]),"auto"===o&&(o=e["offset"+t[0].toUpperCase()+t.slice(1)]),(o=parseFloat(o)||0)+Ye(e,t,r||(a?"border":"content"),n,i)+"px")}function Xe(e,t,r,n,i){return new Xe.prototype.init(e,t,r,n,i)}v.extend({cssHooks:{opacity:{get:function(e,t){if(t){var r=Re(e,"opacity");return""===r?"1":r}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{float:"cssFloat"},style:function(e,t,r,n){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=v.camelCase(t),l=Ve.test(t),c=e.style;if(l||(t=He(s)),a=v.cssHooks[t]||v.cssHooks[s],void 0===r)return a&&"get"in a&&void 0!==(i=a.get(e,!1,n))?i:c[t];"string"===(o=typeof r)&&(i=Q.exec(r))&&i[1]&&(r=te(e,t,i),o="number"),null!=r&&r==r&&("number"===o&&(r+=i&&i[3]||(v.cssNumber[s]?"":"px")),p.clearCloneStyle||""!==r||0!==t.indexOf("background")||(c[t]="inherit"),a&&"set"in a&&void 0===(r=a.set(e,r,n))||(l?c.setProperty(t,r):c[t]=r))}},css:function(e,t,r,n){var i,o,a,s=v.camelCase(t);return Ve.test(t)||(t=He(s)),(a=v.cssHooks[t]||v.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,r)),void 0===i&&(i=Re(e,t,n)),"normal"===i&&t in je&&(i=je[t]),""===r||r?(o=parseFloat(i),!0===r||isFinite(o)?o||0:i):i}}),v.each(["height","width"],function(e,t){v.cssHooks[t]={get:function(e,r,n){if(r)return!Be.test(v.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ze(e,t,n):ee(e,Ue,function(){return Ze(e,t,n)})},set:function(e,r,n){var i,o=n&&Oe(e),a=n&&Ye(e,t,n,"border-box"===v.css(e,"boxSizing",!1,o),o);return a&&(i=Q.exec(r))&&"px"!==(i[3]||"px")&&(e.style[t]=r,r=v.css(e,t)),We(0,r,a)}}}),v.cssHooks.marginLeft=Ne(p.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Re(e,"marginLeft"))||e.getBoundingClientRect().left-ee(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),v.each({margin:"",padding:"",border:"Width"},function(e,t){v.cssHooks[e+t]={expand:function(r){for(var n=0,i={},o="string"==typeof r?r.split(" "):[r];n<4;n++)i[e+K[n]+t]=o[n]||o[n-2]||o[0];return i}},Ie.test(e)||(v.cssHooks[e+t].set=We)}),v.fn.extend({css:function(e,t){return U(this,function(e,t,r){var n,i,o={},a=0;if(Array.isArray(t)){for(n=Oe(e),i=t.length;a<i;a++)o[t[a]]=v.css(e,t[a],!1,n);return o}return void 0!==r?v.style(e,t,r):v.css(e,t)},e,t,arguments.length>1)}}),v.Tween=Xe,Xe.prototype={constructor:Xe,init:function(e,t,r,n,i,o){this.elem=e,this.prop=r,this.easing=i||v.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=n,this.unit=o||(v.cssNumber[r]?"":"px")},cur:function(){var e=Xe.propHooks[this.prop];return e&&e.get?e.get(this):Xe.propHooks._default.get(this)},run:function(e){var t,r=Xe.propHooks[this.prop];return this.options.duration?this.pos=t=v.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),r&&r.set?r.set(this):Xe.propHooks._default.set(this),this}},Xe.prototype.init.prototype=Xe.prototype,Xe.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=v.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){v.fx.step[e.prop]?v.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[v.cssProps[e.prop]]&&!v.cssHooks[e.prop]?e.elem[e.prop]=e.now:v.style(e.elem,e.prop,e.now+e.unit)}}},Xe.propHooks.scrollTop=Xe.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},v.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},v.fx=Xe.prototype.init,v.fx.step={};var Qe,Ke,Je=/^(?:toggle|show|hide)$/,et=/queueHooks$/;function tt(){Ke&&(!1===n.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(tt):e.setTimeout(tt,v.fx.interval),v.fx.tick())}function rt(){return e.setTimeout(function(){Qe=void 0}),Qe=v.now()}function nt(e,t){var r,n=0,i={height:e};for(t=t?1:0;n<4;n+=2-t)i["margin"+(r=K[n])]=i["padding"+r]=e;return t&&(i.opacity=i.width=e),i}function it(e,t,r){for(var n,i=(ot.tweeners[t]||[]).concat(ot.tweeners["*"]),o=0,a=i.length;o<a;o++)if(n=i[o].call(r,t,e))return n}function ot(e,t,r){var n,i,o=0,a=ot.prefilters.length,s=v.Deferred().always(function(){delete l.elem}),l=function(){if(i)return!1;for(var t=Qe||rt(),r=Math.max(0,c.startTime+c.duration-t),n=1-(r/c.duration||0),o=0,a=c.tweens.length;o<a;o++)c.tweens[o].run(n);return s.notifyWith(e,[c,n,r]),n<1&&a?r:(a||s.notifyWith(e,[c,1,0]),s.resolveWith(e,[c]),!1)},c=s.promise({elem:e,props:v.extend({},t),opts:v.extend(!0,{specialEasing:{},easing:v.easing._default},r),originalProperties:t,originalOptions:r,startTime:Qe||rt(),duration:r.duration,tweens:[],createTween:function(t,r){var n=v.Tween(e,c.opts,t,r,c.opts.specialEasing[t]||c.opts.easing);return c.tweens.push(n),n},stop:function(t){var r=0,n=t?c.tweens.length:0;if(i)return this;for(i=!0;r<n;r++)c.tweens[r].run(1);return t?(s.notifyWith(e,[c,1,0]),s.resolveWith(e,[c,t])):s.rejectWith(e,[c,t]),this}}),u=c.props;for(!function(e,t){var r,n,i,o,a;for(r in e)if(i=t[n=v.camelCase(r)],o=e[r],Array.isArray(o)&&(i=o[1],o=e[r]=o[0]),r!==n&&(e[n]=o,delete e[r]),(a=v.cssHooks[n])&&"expand"in a)for(r in o=a.expand(o),delete e[n],o)r in e||(e[r]=o[r],t[r]=i);else t[n]=i}(u,c.opts.specialEasing);o<a;o++)if(n=ot.prefilters[o].call(c,e,u,c.opts))return v.isFunction(n.stop)&&(v._queueHooks(c.elem,c.opts.queue).stop=v.proxy(n.stop,n)),n;return v.map(u,it,c),v.isFunction(c.opts.start)&&c.opts.start.call(e,c),c.progress(c.opts.progress).done(c.opts.done,c.opts.complete).fail(c.opts.fail).always(c.opts.always),v.fx.timer(v.extend(l,{elem:e,anim:c,queue:c.opts.queue})),c}v.Animation=v.extend(ot,{tweeners:{"*":[function(e,t){var r=this.createTween(e,t);return te(r.elem,e,Q.exec(t),r),r}]},tweener:function(e,t){v.isFunction(e)?(t=e,e=["*"]):e=e.match(I);for(var r,n=0,i=e.length;n<i;n++)r=e[n],ot.tweeners[r]=ot.tweeners[r]||[],ot.tweeners[r].unshift(t)},prefilters:[function(e,t,r){var n,i,o,a,s,l,c,u,h="width"in t||"height"in t,f=this,d={},p=e.style,m=e.nodeType&&J(e),g=q.get(e,"fxshow");for(n in r.queue||(null==(a=v._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,f.always(function(){f.always(function(){a.unqueued--,v.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[n],Je.test(i)){if(delete t[n],o=o||"toggle"===i,i===(m?"hide":"show")){if("show"!==i||!g||void 0===g[n])continue;m=!0}d[n]=g&&g[n]||v.style(e,n)}if((l=!v.isEmptyObject(t))||!v.isEmptyObject(d))for(n in h&&1===e.nodeType&&(r.overflow=[p.overflow,p.overflowX,p.overflowY],null==(c=g&&g.display)&&(c=q.get(e,"display")),"none"===(u=v.css(e,"display"))&&(c?u=c:(ie([e],!0),c=e.style.display||c,u=v.css(e,"display"),ie([e]))),("inline"===u||"inline-block"===u&&null!=c)&&"none"===v.css(e,"float")&&(l||(f.done(function(){p.display=c}),null==c&&(u=p.display,c="none"===u?"":u)),p.display="inline-block")),r.overflow&&(p.overflow="hidden",f.always(function(){p.overflow=r.overflow[0],p.overflowX=r.overflow[1],p.overflowY=r.overflow[2]})),l=!1,d)l||(g?"hidden"in g&&(m=g.hidden):g=q.access(e,"fxshow",{display:c}),o&&(g.hidden=!m),m&&ie([e],!0),f.done(function(){for(n in m||ie([e]),q.remove(e,"fxshow"),d)v.style(e,n,d[n])})),l=it(m?g[n]:0,n,f),n in g||(g[n]=l.start,m&&(l.end=l.start,l.start=0))}],prefilter:function(e,t){t?ot.prefilters.unshift(e):ot.prefilters.push(e)}}),v.speed=function(e,t,r){var n=e&&"object"==typeof e?v.extend({},e):{complete:r||!r&&t||v.isFunction(e)&&e,duration:e,easing:r&&t||t&&!v.isFunction(t)&&t};return v.fx.off?n.duration=0:"number"!=typeof n.duration&&(n.duration in v.fx.speeds?n.duration=v.fx.speeds[n.duration]:n.duration=v.fx.speeds._default),null!=n.queue&&!0!==n.queue||(n.queue="fx"),n.old=n.complete,n.complete=function(){v.isFunction(n.old)&&n.old.call(this),n.queue&&v.dequeue(this,n.queue)},n},v.fn.extend({fadeTo:function(e,t,r,n){return this.filter(J).css("opacity",0).show().end().animate({opacity:t},e,r,n)},animate:function(e,t,r,n){var i=v.isEmptyObject(e),o=v.speed(t,r,n),a=function(){var t=ot(this,v.extend({},e),o);(i||q.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,r){var n=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=v.timers,a=q.get(this);if(i)a[i]&&a[i].stop&&n(a[i]);else for(i in a)a[i]&&a[i].stop&&et.test(i)&&n(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(r),t=!1,o.splice(i,1));!t&&r||v.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,r=q.get(this),n=r[e+"queue"],i=r[e+"queueHooks"],o=v.timers,a=n?n.length:0;for(r.finish=!0,v.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)n[t]&&n[t].finish&&n[t].finish.call(this);delete r.finish})}}),v.each(["toggle","show","hide"],function(e,t){var r=v.fn[t];v.fn[t]=function(e,n,i){return null==e||"boolean"==typeof e?r.apply(this,arguments):this.animate(nt(t,!0),e,n,i)}}),v.each({slideDown:nt("show"),slideUp:nt("hide"),slideToggle:nt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){v.fn[e]=function(e,r,n){return this.animate(t,e,r,n)}}),v.timers=[],v.fx.tick=function(){var e,t=0,r=v.timers;for(Qe=v.now();t<r.length;t++)(e=r[t])()||r[t]!==e||r.splice(t--,1);r.length||v.fx.stop(),Qe=void 0},v.fx.timer=function(e){v.timers.push(e),v.fx.start()},v.fx.interval=13,v.fx.start=function(){Ke||(Ke=!0,tt())},v.fx.stop=function(){Ke=null},v.fx.speeds={slow:600,fast:200,_default:400},v.fn.delay=function(t,r){return t=v.fx&&v.fx.speeds[t]||t,r=r||"fx",this.queue(r,function(r,n){var i=e.setTimeout(r,t);n.stop=function(){e.clearTimeout(i)}})},function(){var e=n.createElement("input"),t=n.createElement("select").appendChild(n.createElement("option"));e.type="checkbox",p.checkOn=""!==e.value,p.optSelected=t.selected,(e=n.createElement("input")).value="t",e.type="radio",p.radioValue="t"===e.value}();var at,st=v.expr.attrHandle;v.fn.extend({attr:function(e,t){return U(this,v.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){v.removeAttr(this,e)})}}),v.extend({attr:function(e,t,r){var n,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return void 0===e.getAttribute?v.prop(e,t,r):(1===o&&v.isXMLDoc(e)||(i=v.attrHooks[t.toLowerCase()]||(v.expr.match.bool.test(t)?at:void 0)),void 0!==r?null===r?void v.removeAttr(e,t):i&&"set"in i&&void 0!==(n=i.set(e,r,t))?n:(e.setAttribute(t,r+""),r):i&&"get"in i&&null!==(n=i.get(e,t))?n:null==(n=v.find.attr(e,t))?void 0:n)},attrHooks:{type:{set:function(e,t){if(!p.radioValue&&"radio"===t&&S(e,"input")){var r=e.value;return e.setAttribute("type",t),r&&(e.value=r),t}}}},removeAttr:function(e,t){var r,n=0,i=t&&t.match(I);if(i&&1===e.nodeType)for(;r=i[n++];)e.removeAttribute(r)}}),at={set:function(e,t,r){return!1===t?v.removeAttr(e,r):e.setAttribute(r,r),r}},v.each(v.expr.match.bool.source.match(/\w+/g),function(e,t){var r=st[t]||v.find.attr;st[t]=function(e,t,n){var i,o,a=t.toLowerCase();return n||(o=st[a],st[a]=i,i=null!=r(e,t,n)?a:null,st[a]=o),i}});var lt=/^(?:input|select|textarea|button)$/i,ct=/^(?:a|area)$/i;function ut(e){return(e.match(I)||[]).join(" ")}function ht(e){return e.getAttribute&&e.getAttribute("class")||""}v.fn.extend({prop:function(e,t){return U(this,v.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[v.propFix[e]||e]})}}),v.extend({prop:function(e,t,r){var n,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&v.isXMLDoc(e)||(t=v.propFix[t]||t,i=v.propHooks[t]),void 0!==r?i&&"set"in i&&void 0!==(n=i.set(e,r,t))?n:e[t]=r:i&&"get"in i&&null!==(n=i.get(e,t))?n:e[t]},propHooks:{tabIndex:{get:function(e){var t=v.find.attr(e,"tabindex");return t?parseInt(t,10):lt.test(e.nodeName)||ct.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),p.optSelected||(v.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),v.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){v.propFix[this.toLowerCase()]=this}),v.fn.extend({addClass:function(e){var t,r,n,i,o,a,s,l=0;if(v.isFunction(e))return this.each(function(t){v(this).addClass(e.call(this,t,ht(this)))});if("string"==typeof e&&e)for(t=e.match(I)||[];r=this[l++];)if(i=ht(r),n=1===r.nodeType&&" "+ut(i)+" "){for(a=0;o=t[a++];)n.indexOf(" "+o+" ")<0&&(n+=o+" ");i!==(s=ut(n))&&r.setAttribute("class",s)}return this},removeClass:function(e){var t,r,n,i,o,a,s,l=0;if(v.isFunction(e))return this.each(function(t){v(this).removeClass(e.call(this,t,ht(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof e&&e)for(t=e.match(I)||[];r=this[l++];)if(i=ht(r),n=1===r.nodeType&&" "+ut(i)+" "){for(a=0;o=t[a++];)for(;n.indexOf(" "+o+" ")>-1;)n=n.replace(" "+o+" "," ");i!==(s=ut(n))&&r.setAttribute("class",s)}return this},toggleClass:function(e,t){var r=typeof e;return"boolean"==typeof t&&"string"===r?t?this.addClass(e):this.removeClass(e):v.isFunction(e)?this.each(function(r){v(this).toggleClass(e.call(this,r,ht(this),t),t)}):this.each(function(){var t,n,i,o;if("string"===r)for(n=0,i=v(this),o=e.match(I)||[];t=o[n++];)i.hasClass(t)?i.removeClass(t):i.addClass(t);else void 0!==e&&"boolean"!==r||((t=ht(this))&&q.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":q.get(this,"__className__")||""))})},hasClass:function(e){var t,r,n=0;for(t=" "+e+" ";r=this[n++];)if(1===r.nodeType&&(" "+ut(ht(r))+" ").indexOf(t)>-1)return!0;return!1}});var ft=/\r/g;v.fn.extend({val:function(e){var t,r,n,i=this[0];return arguments.length?(n=v.isFunction(e),this.each(function(r){var i;1===this.nodeType&&(null==(i=n?e.call(this,r,v(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=v.map(i,function(e){return null==e?"":e+""})),(t=v.valHooks[this.type]||v.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))})):i?(t=v.valHooks[i.type]||v.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(r=t.get(i,"value"))?r:"string"==typeof(r=i.value)?r.replace(ft,""):null==r?"":r:void 0}}),v.extend({valHooks:{option:{get:function(e){var t=v.find.attr(e,"value");return null!=t?t:ut(v.text(e))}},select:{get:function(e){var t,r,n,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],l=a?o+1:i.length;for(n=o<0?l:a?o:0;n<l;n++)if(((r=i[n]).selected||n===o)&&!r.disabled&&(!r.parentNode.disabled||!S(r.parentNode,"optgroup"))){if(t=v(r).val(),a)return t;s.push(t)}return s},set:function(e,t){for(var r,n,i=e.options,o=v.makeArray(t),a=i.length;a--;)((n=i[a]).selected=v.inArray(v.valHooks.option.get(n),o)>-1)&&(r=!0);return r||(e.selectedIndex=-1),o}}}}),v.each(["radio","checkbox"],function(){v.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=v.inArray(v(e).val(),t)>-1}},p.checkOn||(v.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var dt=/^(?:focusinfocus|focusoutblur)$/;v.extend(v.event,{trigger:function(t,r,i,o){var a,s,l,c,u,f,d,p=[i||n],m=h.call(t,"type")?t.type:t,g=h.call(t,"namespace")?t.namespace.split("."):[];if(s=l=i=i||n,3!==i.nodeType&&8!==i.nodeType&&!dt.test(m+v.event.triggered)&&(m.indexOf(".")>-1&&(g=m.split("."),m=g.shift(),g.sort()),u=m.indexOf(":")<0&&"on"+m,(t=t[v.expando]?t:new v.Event(m,"object"==typeof t&&t)).isTrigger=o?2:3,t.namespace=g.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),r=null==r?[t]:v.makeArray(r,[t]),d=v.event.special[m]||{},o||!d.trigger||!1!==d.trigger.apply(i,r))){if(!o&&!d.noBubble&&!v.isWindow(i)){for(c=d.delegateType||m,dt.test(c+m)||(s=s.parentNode);s;s=s.parentNode)p.push(s),l=s;l===(i.ownerDocument||n)&&p.push(l.defaultView||l.parentWindow||e)}for(a=0;(s=p[a++])&&!t.isPropagationStopped();)t.type=a>1?c:d.bindType||m,(f=(q.get(s,"events")||{})[t.type]&&q.get(s,"handle"))&&f.apply(s,r),(f=u&&s[u])&&f.apply&&j(s)&&(t.result=f.apply(s,r),!1===t.result&&t.preventDefault());return t.type=m,o||t.isDefaultPrevented()||d._default&&!1!==d._default.apply(p.pop(),r)||!j(i)||u&&v.isFunction(i[m])&&!v.isWindow(i)&&((l=i[u])&&(i[u]=null),v.event.triggered=m,i[m](),v.event.triggered=void 0,l&&(i[u]=l)),t.result}},simulate:function(e,t,r){var n=v.extend(new v.Event,r,{type:e,isSimulated:!0});v.event.trigger(n,null,t)}}),v.fn.extend({trigger:function(e,t){return this.each(function(){v.event.trigger(e,t,this)})},triggerHandler:function(e,t){var r=this[0];if(r)return v.event.trigger(e,t,r,!0)}}),v.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){v.fn[t]=function(e,r){return arguments.length>0?this.on(t,null,e,r):this.trigger(t)}}),v.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),p.focusin="onfocusin"in e,p.focusin||v.each({focus:"focusin",blur:"focusout"},function(e,t){var r=function(e){v.event.simulate(t,e.target,v.event.fix(e))};v.event.special[t]={setup:function(){var n=this.ownerDocument||this,i=q.access(n,t);i||n.addEventListener(e,r,!0),q.access(n,t,(i||0)+1)},teardown:function(){var n=this.ownerDocument||this,i=q.access(n,t)-1;i?q.access(n,t,i):(n.removeEventListener(e,r,!0),q.remove(n,t))}}});var pt=e.location,mt=v.now(),vt=/\?/;v.parseXML=function(t){var r;if(!t||"string"!=typeof t)return null;try{r=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){r=void 0}return r&&!r.getElementsByTagName("parsererror").length||v.error("Invalid XML: "+t),r};var gt=/\[\]$/,yt=/\r?\n/g,bt=/^(?:submit|button|image|reset|file)$/i,xt=/^(?:input|select|textarea|keygen)/i;function wt(e,t,r,n){var i;if(Array.isArray(t))v.each(t,function(t,i){r||gt.test(e)?n(e,i):wt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,r,n)});else if(r||"object"!==v.type(t))n(e,t);else for(i in t)wt(e+"["+i+"]",t[i],r,n)}v.param=function(e,t){var r,n=[],i=function(e,t){var r=v.isFunction(t)?t():t;n[n.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==r?"":r)};if(Array.isArray(e)||e.jquery&&!v.isPlainObject(e))v.each(e,function(){i(this.name,this.value)});else for(r in e)wt(r,e[r],t,i);return n.join("&")},v.fn.extend({serialize:function(){return v.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=v.prop(this,"elements");return e?v.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!v(this).is(":disabled")&&xt.test(this.nodeName)&&!bt.test(e)&&(this.checked||!oe.test(e))}).map(function(e,t){var r=v(this).val();return null==r?null:Array.isArray(r)?v.map(r,function(e){return{name:t.name,value:e.replace(yt,"\r\n")}}):{name:t.name,value:r.replace(yt,"\r\n")}}).get()}});var Dt=/%20/g,Ct=/#.*$/,At=/([?&])_=[^&]*/,$t=/^(.*?):[ \t]*([^\r\n]*)$/gm,St=/^(?:GET|HEAD)$/,Mt=/^\/\//,_t={},zt={},Tt="*/".concat("*"),Lt=n.createElement("a");function Et(e){return function(t,r){"string"!=typeof t&&(r=t,t="*");var n,i=0,o=t.toLowerCase().match(I)||[];if(v.isFunction(r))for(;n=o[i++];)"+"===n[0]?(n=n.slice(1)||"*",(e[n]=e[n]||[]).unshift(r)):(e[n]=e[n]||[]).push(r)}}function Ft(e,t,r,n){var i={},o=e===zt;function a(s){var l;return i[s]=!0,v.each(e[s]||[],function(e,s){var c=s(t,r,n);return"string"!=typeof c||o||i[c]?o?!(l=c):void 0:(t.dataTypes.unshift(c),a(c),!1)}),l}return a(t.dataTypes[0])||!i["*"]&&a("*")}function kt(e,t){var r,n,i=v.ajaxSettings.flatOptions||{};for(r in t)void 0!==t[r]&&((i[r]?e:n||(n={}))[r]=t[r]);return n&&v.extend(!0,e,n),e}Lt.href=pt.href,v.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:pt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(pt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Tt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":v.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?kt(kt(e,v.ajaxSettings),t):kt(v.ajaxSettings,e)},ajaxPrefilter:Et(_t),ajaxTransport:Et(zt),ajax:function(t,r){"object"==typeof t&&(r=t,t=void 0),r=r||{};var i,o,a,s,l,c,u,h,f,d,p=v.ajaxSetup({},r),m=p.context||p,g=p.context&&(m.nodeType||m.jquery)?v(m):v.event,y=v.Deferred(),b=v.Callbacks("once memory"),x=p.statusCode||{},w={},D={},C="canceled",A={readyState:0,getResponseHeader:function(e){var t;if(u){if(!s)for(s={};t=$t.exec(a);)s[t[1].toLowerCase()]=t[2];t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return u?a:null},setRequestHeader:function(e,t){return null==u&&(e=D[e.toLowerCase()]=D[e.toLowerCase()]||e,w[e]=t),this},overrideMimeType:function(e){return null==u&&(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(u)A.always(e[A.status]);else for(t in e)x[t]=[x[t],e[t]];return this},abort:function(e){var t=e||C;return i&&i.abort(t),$(0,t),this}};if(y.promise(A),p.url=((t||p.url||pt.href)+"").replace(Mt,pt.protocol+"//"),p.type=r.method||r.type||p.method||p.type,p.dataTypes=(p.dataType||"*").toLowerCase().match(I)||[""],null==p.crossDomain){c=n.createElement("a");try{c.href=p.url,c.href=c.href,p.crossDomain=Lt.protocol+"//"+Lt.host!=c.protocol+"//"+c.host}catch(e){p.crossDomain=!0}}if(p.data&&p.processData&&"string"!=typeof p.data&&(p.data=v.param(p.data,p.traditional)),Ft(_t,p,r,A),u)return A;for(f in(h=v.event&&p.global)&&0==v.active++&&v.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!St.test(p.type),o=p.url.replace(Ct,""),p.hasContent?p.data&&p.processData&&0===(p.contentType||"").indexOf("application/x-www-form-urlencoded")&&(p.data=p.data.replace(Dt,"+")):(d=p.url.slice(o.length),p.data&&(o+=(vt.test(o)?"&":"?")+p.data,delete p.data),!1===p.cache&&(o=o.replace(At,"$1"),d=(vt.test(o)?"&":"?")+"_="+mt+++d),p.url=o+d),p.ifModified&&(v.lastModified[o]&&A.setRequestHeader("If-Modified-Since",v.lastModified[o]),v.etag[o]&&A.setRequestHeader("If-None-Match",v.etag[o])),(p.data&&p.hasContent&&!1!==p.contentType||r.contentType)&&A.setRequestHeader("Content-Type",p.contentType),A.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Tt+"; q=0.01":""):p.accepts["*"]),p.headers)A.setRequestHeader(f,p.headers[f]);if(p.beforeSend&&(!1===p.beforeSend.call(m,A,p)||u))return A.abort();if(C="abort",b.add(p.complete),A.done(p.success),A.fail(p.error),i=Ft(zt,p,r,A)){if(A.readyState=1,h&&g.trigger("ajaxSend",[A,p]),u)return A;p.async&&p.timeout>0&&(l=e.setTimeout(function(){A.abort("timeout")},p.timeout));try{u=!1,i.send(w,$)}catch(e){if(u)throw e;$(-1,e)}}else $(-1,"No Transport");function $(t,r,n,s){var c,f,d,w,D,C=r;u||(u=!0,l&&e.clearTimeout(l),i=void 0,a=s||"",A.readyState=t>0?4:0,c=t>=200&&t<300||304===t,n&&(w=function(e,t,r){for(var n,i,o,a,s=e.contents,l=e.dataTypes;"*"===l[0];)l.shift(),void 0===n&&(n=e.mimeType||t.getResponseHeader("Content-Type"));if(n)for(i in s)if(s[i]&&s[i].test(n)){l.unshift(i);break}if(l[0]in r)o=l[0];else{for(i in r){if(!l[0]||e.converters[i+" "+l[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==l[0]&&l.unshift(o),r[o]}(p,A,n)),w=function(e,t,r,n){var i,o,a,s,l,c={},u=e.dataTypes.slice();if(u[1])for(a in e.converters)c[a.toLowerCase()]=e.converters[a];for(o=u.shift();o;)if(e.responseFields[o]&&(r[e.responseFields[o]]=t),!l&&n&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=u.shift())if("*"===o)o=l;else if("*"!==l&&l!==o){if(!(a=c[l+" "+o]||c["* "+o]))for(i in c)if((s=i.split(" "))[1]===o&&(a=c[l+" "+s[0]]||c["* "+s[0]])){!0===a?a=c[i]:!0!==c[i]&&(o=s[0],u.unshift(s[1]));break}if(!0!==a)if(a&&e.throws)t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}(p,w,A,c),c?(p.ifModified&&((D=A.getResponseHeader("Last-Modified"))&&(v.lastModified[o]=D),(D=A.getResponseHeader("etag"))&&(v.etag[o]=D)),204===t||"HEAD"===p.type?C="nocontent":304===t?C="notmodified":(C=w.state,f=w.data,c=!(d=w.error))):(d=C,!t&&C||(C="error",t<0&&(t=0))),A.status=t,A.statusText=(r||C)+"",c?y.resolveWith(m,[f,C,A]):y.rejectWith(m,[A,C,d]),A.statusCode(x),x=void 0,h&&g.trigger(c?"ajaxSuccess":"ajaxError",[A,p,c?f:d]),b.fireWith(m,[A,C]),h&&(g.trigger("ajaxComplete",[A,p]),--v.active||v.event.trigger("ajaxStop")))}return A},getJSON:function(e,t,r){return v.get(e,t,r,"json")},getScript:function(e,t){return v.get(e,void 0,t,"script")}}),v.each(["get","post"],function(e,t){v[t]=function(e,r,n,i){return v.isFunction(r)&&(i=i||n,n=r,r=void 0),v.ajax(v.extend({url:e,type:t,dataType:i,data:r,success:n},v.isPlainObject(e)&&e))}}),v._evalUrl=function(e){return v.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,throws:!0})},v.fn.extend({wrapAll:function(e){var t;return this[0]&&(v.isFunction(e)&&(e=e.call(this[0])),t=v(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return v.isFunction(e)?this.each(function(t){v(this).wrapInner(e.call(this,t))}):this.each(function(){var t=v(this),r=t.contents();r.length?r.wrapAll(e):t.append(e)})},wrap:function(e){var t=v.isFunction(e);return this.each(function(r){v(this).wrapAll(t?e.call(this,r):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){v(this).replaceWith(this.childNodes)}),this}}),v.expr.pseudos.hidden=function(e){return!v.expr.pseudos.visible(e)},v.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},v.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var It={0:200,1223:204},Pt=v.ajaxSettings.xhr();p.cors=!!Pt&&"withCredentials"in Pt,p.ajax=Pt=!!Pt,v.ajaxTransport(function(t){var r,n;if(p.cors||Pt&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];for(a in t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest"),i)s.setRequestHeader(a,i[a]);r=function(e){return function(){r&&(r=n=s.onload=s.onerror=s.onabort=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(It[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=r(),n=s.onerror=r("error"),void 0!==s.onabort?s.onabort=n:s.onreadystatechange=function(){4===s.readyState&&e.setTimeout(function(){r&&n()})},r=r("abort");try{s.send(t.hasContent&&t.data||null)}catch(e){if(r)throw e}},abort:function(){r&&r()}}}),v.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),v.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return v.globalEval(e),e}}}),v.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),v.ajaxTransport("script",function(e){var t,r;if(e.crossDomain)return{send:function(i,o){t=v("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",r=function(e){t.remove(),r=null,e&&o("error"===e.type?404:200,e.type)}),n.head.appendChild(t[0])},abort:function(){r&&r()}}});var Ot,Rt=[],Nt=/(=)\?(?=&|$)|\?\?/;v.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Rt.pop()||v.expando+"_"+mt++;return this[e]=!0,e}}),v.ajaxPrefilter("json jsonp",function(t,r,n){var i,o,a,s=!1!==t.jsonp&&(Nt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Nt.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=v.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Nt,"$1"+i):!1!==t.jsonp&&(t.url+=(vt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||v.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},n.always(function(){void 0===o?v(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=r.jsonpCallback,Rt.push(i)),a&&v.isFunction(o)&&o(a[0]),a=o=void 0}),"script"}),p.createHTMLDocument=((Ot=n.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ot.childNodes.length),v.parseHTML=function(e,t,r){return"string"!=typeof e?[]:("boolean"==typeof t&&(r=t,t=!1),t||(p.createHTMLDocument?((i=(t=n.implementation.createHTMLDocument("")).createElement("base")).href=n.location.href,t.head.appendChild(i)):t=n),a=!r&&[],(o=M.exec(e))?[t.createElement(o[1])]:(o=pe([e],t,a),a&&a.length&&v(a).remove(),v.merge([],o.childNodes)));var i,o,a},v.fn.load=function(e,t,r){var n,i,o,a=this,s=e.indexOf(" ");return s>-1&&(n=ut(e.slice(s)),e=e.slice(0,s)),v.isFunction(t)?(r=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&v.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(n?v("<div>").append(v.parseHTML(e)).find(n):e)}).always(r&&function(e,t){a.each(function(){r.apply(this,o||[e.responseText,t,e])})}),this},v.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){v.fn[t]=function(e){return this.on(t,e)}}),v.expr.pseudos.animated=function(e){return v.grep(v.timers,function(t){return e===t.elem}).length},v.offset={setOffset:function(e,t,r){var n,i,o,a,s,l,c=v.css(e,"position"),u=v(e),h={};"static"===c&&(e.style.position="relative"),s=u.offset(),o=v.css(e,"top"),l=v.css(e,"left"),("absolute"===c||"fixed"===c)&&(o+l).indexOf("auto")>-1?(a=(n=u.position()).top,i=n.left):(a=parseFloat(o)||0,i=parseFloat(l)||0),v.isFunction(t)&&(t=t.call(e,r,v.extend({},s))),null!=t.top&&(h.top=t.top-s.top+a),null!=t.left&&(h.left=t.left-s.left+i),"using"in t?t.using.call(e,h):u.css(h)}},v.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){v.offset.setOffset(this,e,t)});var t,r,n,i,o=this[0];return o?o.getClientRects().length?(n=o.getBoundingClientRect(),r=(t=o.ownerDocument).documentElement,i=t.defaultView,{top:n.top+i.pageYOffset-r.clientTop,left:n.left+i.pageXOffset-r.clientLeft}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,r=this[0],n={top:0,left:0};return"fixed"===v.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),S(e[0],"html")||(n=e.offset()),n={top:n.top+v.css(e[0],"borderTopWidth",!0),left:n.left+v.css(e[0],"borderLeftWidth",!0)}),{top:t.top-n.top-v.css(r,"marginTop",!0),left:t.left-n.left-v.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&"static"===v.css(e,"position");)e=e.offsetParent;return e||me})}}),v.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var r="pageYOffset"===t;v.fn[e]=function(n){return U(this,function(e,n,i){var o;if(v.isWindow(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[n];o?o.scrollTo(r?o.pageXOffset:i,r?i:o.pageYOffset):e[n]=i},e,n,arguments.length)}}),v.each(["top","left"],function(e,t){v.cssHooks[t]=Ne(p.pixelPosition,function(e,r){if(r)return r=Re(e,t),Pe.test(r)?v(e).position()[t]+"px":r})}),v.each({Height:"height",Width:"width"},function(e,t){v.each({padding:"inner"+e,content:t,"":"outer"+e},function(r,n){v.fn[n]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(!0===i||!0===o?"margin":"border");return U(this,function(t,r,i){var o;return v.isWindow(t)?0===n.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?v.css(t,r,s):v.style(t,r,i,s)},t,a?i:void 0,a)}})}),v.fn.extend({bind:function(e,t,r){return this.on(e,null,t,r)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,r,n){return this.on(t,e,r,n)},undelegate:function(e,t,r){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",r)}}),v.holdReady=function(e){e?v.readyWait++:v.ready(!0)},v.isArray=Array.isArray,v.parseJSON=JSON.parse,v.nodeName=S, true&&!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function(){return v}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));var Bt=e.jQuery,Vt=e.$;return v.noConflict=function(t){return e.$===v&&(e.$=Vt),t&&e.jQuery===v&&(e.jQuery=Bt),v},t||(e.jQuery=e.$=v),v}),function(e,t){!function(e){"use strict";function t(e,t,r){e.byteLength;for(var n=0,i=r.length;n<i;n++){var o=r.charCodeAt(n);if(o<128)e.setUint8(t++,o>>>0&127|0);else if(o<2048)e.setUint8(t++,o>>>6&31|192),e.setUint8(t++,o>>>0&63|128);else if(o<65536)e.setUint8(t++,o>>>12&15|224),e.setUint8(t++,o>>>6&63|128),e.setUint8(t++,o>>>0&63|128);else{if(!(o<1114112))throw new Error("bad codepoint "+o);e.setUint8(t++,o>>>18&7|240),e.setUint8(t++,o>>>12&63|128),e.setUint8(t++,o>>>6&63|128),e.setUint8(t++,o>>>0&63|128)}}}function r(e){for(var t=0,r=0,n=e.length;r<n;r++){var i=e.charCodeAt(r);if(i<128)t+=1;else if(i<2048)t+=2;else if(i<65536)t+=3;else{if(!(i<1114112))throw new Error("bad codepoint "+i);t+=4}}return t}function n(e){var n=new ArrayBuffer(function e(t){var n=typeof t;if("string"===n){var i=r(t);if(i<32)return 1+i;if(i<256)return 2+i;if(i<65536)return 3+i;if(i<4294967296)return 5+i}if(t instanceof Uint8Array){var i=t.byteLength;if(i<256)return 2+i;if(i<65536)return 3+i;if(i<4294967296)return 5+i}if("number"===n){if(Math.floor(t)!==t)return 9;if(t>=0){if(t<128)return 1;if(t<256)return 2;if(t<65536)return 3;if(t<4294967296)return 5;throw new Error("Number too big 0x"+t.toString(16))}if(t>=-32)return 1;if(t>=-128)return 2;if(t>=-32768)return 3;if(t>=-2147483648)return 5;throw new Error("Number too small -0x"+t.toString(16).substr(1))}if("boolean"===n||null===t)return 1;if("object"===n){var o=0;if(Array.isArray(t)){i=t.length;for(var a=0;a<i;a++)o+=e(t[a])}else{var s=Object.keys(t);i=s.length;for(var a=0;a<i;a++){var l=s[a];o+=e(l)+e(t[l])}}if(i<16)return 1+o;if(i<65536)return 3+o;if(i<4294967296)return 5+o;throw new Error("Array or object too long 0x"+i.toString(16))}throw new Error("Unknown type "+n)}(e)),i=new DataView(n);return function e(n,i,o){var a=typeof n;if("string"===a){var s=r(n);if(s<32)return i.setUint8(o,160|s),t(i,o+1,n),1+s;if(s<256)return i.setUint8(o,217),i.setUint8(o+1,s),t(i,o+2,n),2+s;if(s<65536)return i.setUint8(o,218),i.setUint16(o+1,s),t(i,o+3,n),3+s;if(s<4294967296)return i.setUint8(o,219),i.setUint32(o+1,s),t(i,o+5,n),5+s}if(n instanceof Uint8Array){var s=n.byteLength,l=new Uint8Array(i.buffer);if(s<256)return i.setUint8(o,196),i.setUint8(o+1,s),l.set(n,o+2),2+s;if(s<65536)return i.setUint8(o,197),i.setUint16(o+1,s),l.set(n,o+3),3+s;if(s<4294967296)return i.setUint8(o,198),i.setUint32(o+1,s),l.set(n,o+5),5+s}if("number"===a){if(!isFinite(n))throw new Error("Number not finite: "+n);if(Math.floor(n)!==n)return i.setUint8(o,203),i.setFloat64(o+1,n),9;if(n>=0){if(n<128)return i.setUint8(o,n),1;if(n<256)return i.setUint8(o,204),i.setUint8(o+1,n),2;if(n<65536)return i.setUint8(o,205),i.setUint16(o+1,n),3;if(n<4294967296)return i.setUint8(o,206),i.setUint32(o+1,n),5;throw new Error("Number too big 0x"+n.toString(16))}if(n>=-32)return i.setInt8(o,n),1;if(n>=-128)return i.setUint8(o,208),i.setInt8(o+1,n),2;if(n>=-32768)return i.setUint8(o,209),i.setInt16(o+1,n),3;if(n>=-2147483648)return i.setUint8(o,210),i.setInt32(o+1,n),5;throw new Error("Number too small -0x"+(-n).toString(16).substr(1))}if(null===n)return i.setUint8(o,192),1;if("boolean"===a)return i.setUint8(o,n?195:194),1;if("object"===a){var c=0,u=Array.isArray(n);if(u)s=n.length;else{var h=Object.keys(n);s=h.length}if(s<16?(i.setUint8(o,s|(u?144:128)),c=1):s<65536?(i.setUint8(o,u?220:222),i.setUint16(o+1,s),c=3):s<4294967296&&(i.setUint8(o,u?221:223),i.setUint32(o+1,s),c=5),u)for(var f=0;f<s;f++)c+=e(n[f],i,o+c);else for(var f=0;f<s;f++){var d=h[f];c+=e(d,i,o+c),c+=e(n[d],i,o+c)}return c}throw new Error("Unknown type "+a)}(e,i,0),new Uint8Array(n)}var i=["mmtfVersion","mmtfProducer","unitCell","spaceGroup","structureId","title","depositionDate","releaseDate","experimentalMethods","resolution","rFree","rWork","bioAssemblyList","ncsOperatorList","entityList","groupList","numBonds","numAtoms","numGroups","numChains","numModels","groupsPerChain","chainsPerModel"],o=i.concat(["xCoordList","yCoordList","zCoordList","groupIdList","groupTypeList","chainIdList","bFactorList","atomIdList","altLocList","occupancyList","secStructList","insCodeList","sequenceIndexList","chainNameList","bondAtomList","bondOrderList"]);function a(e,t,r){return t?new e(t.buffer,t.byteOffset,t.byteLength/(r||1)):void 0}function s(e){return a(DataView,e)}function l(e){return a(Uint8Array,e)}function c(e){return a(Int8Array,e)}function u(e){return a(Int32Array,e,4)}function h(e,t){var r=e.length/2;t||(t=new Int16Array(r));for(var n=0,i=0;n<r;++n,i+=2)t[n]=e[i]<<8^e[i+1]<<0;return t}function f(e,t){var r=e.length/4;t||(t=new Int32Array(r));for(var n=0,i=0;n<r;++n,i+=4)t[n]=e[i]<<24^e[i+1]<<16^e[i+2]<<8^e[i+3]<<0;return t}function d(e,t){var r=e.length;t||(t=new Uint8Array(4*r));for(var n=s(t),i=0;i<r;++i)n.setInt32(4*i,e[i]);return l(t)}function p(e,t,r){var n=e.length,i=1/t;r||(r=new Float32Array(n));for(var o=0;o<n;++o)r[o]=e[o]*i;return r}function m(e,t,r){var n=e.length;r||(r=new Int32Array(n));for(var i=0;i<n;++i)r[i]=Math.round(e[i]*t);return r}function v(e,t){var r,n;if(!t){var i=0;for(r=0,n=e.length;r<n;r+=2)i+=e[r+1];t=new e.constructor(i)}var o=0;for(r=0,n=e.length;r<n;r+=2)for(var a=e[r],s=e[r+1],l=0;l<s;++l)t[o]=a,++o;return t}function g(e){if(0===e.length)return new Int32Array;var t,r,n=2;for(t=1,r=e.length;t<r;++t)e[t-1]!==e[t]&&(n+=2);var i=new Int32Array(n),o=0,a=1;for(t=1,r=e.length;t<r;++t)e[t-1]!==e[t]?(i[o]=e[t-1],i[o+1]=a,a=1,o+=2):++a;return i[o]=e[e.length-1],i[o+1]=a,i}function y(e,t){var r=e.length;t||(t=new e.constructor(r)),r&&(t[0]=e[0]);for(var n=1;n<r;++n)t[n]=e[n]+t[n-1];return t}function b(e,t){var r=e.length;t||(t=new e.constructor(r)),t[0]=e[0];for(var n=1;n<r;++n)t[n]=e[n]-e[n-1];return t}function x(e,t){var r,n,i=e instanceof Int8Array?127:32767,o=-i-1,a=e.length;if(!t){var s=0;for(r=0;r<a;++r)e[r]<i&&e[r]>o&&++s;t=new Int32Array(s)}for(r=0,n=0;r<a;){for(var l=0;e[r]===i||e[r]===o;)l+=e[r],++r;l+=e[r],++r,t[n]=l,++n}return t}function w(e,t,r){return p(x(e,u(r)),t,r)}function D(e,t,r){var n=x(e,u(r));return function(e,t,r){return p(y(e,u(r)),t,r)}(n,t,a(Float32Array,n,4))}function C(e,t,r){return function(e,t){var r,n=t?127:32767,i=-n-1,o=e.length,a=0;for(r=0;r<o;++r){var s=e[r];0===s?++a:a+=s===n||s===i?2:s>0?Math.ceil(s/n):Math.ceil(s/i)}var l=t?new Int8Array(a):new Int16Array(a),c=0;for(r=0;r<o;++r){var s=e[r];if(s>=0)for(;s>=n;)l[c]=n,++c,s-=n;else for(;s<=i;)l[c]=i,++c,s-=i;l[c]=s,++c}return l}(function(e,t,r){return b(m(e,t),r)}(e,t),r)}function A(e,t,r,n){var i=new ArrayBuffer(12+n.byteLength),o=new Uint8Array(i),a=new DataView(i);return a.setInt32(0,e),a.setInt32(4,t),r&&o.set(r,8),o.set(n,12),o}function $(e){var t=e.length,r=l(e);return A(2,t,void 0,r)}function S(e){var t=e.length,r=d(e);return A(4,t,void 0,r)}function M(e,t){var r=e.length/t,n=d([t]),i=l(e);return A(5,r,n,i)}function _(e){var t=e.length,r=d(g(e));return A(6,t,void 0,r)}function z(e){var t=e.length,r=d(g(b(e)));return A(8,t,void 0,r)}function T(e,t){var r=e.length,n=d([t]),i=d(function(e,t){return g(m(e,t))}(e,t));return A(9,r,n,i)}function L(e,t){var r=e.length,n=d([t]),i=function(e,t){var r=e.length;t||(t=new Uint8Array(2*r));for(var n=s(t),i=0;i<r;++i)n.setInt16(2*i,e[i]);return l(t)}(C(e,t));return A(10,r,n,i)}function E(e){var t={};return i.forEach(function(r){void 0!==e[r]&&(t[r]=e[r])}),e.bondAtomList&&(t.bondAtomList=S(e.bondAtomList)),e.bondOrderList&&(t.bondOrderList=$(e.bondOrderList)),t.xCoordList=L(e.xCoordList,1e3),t.yCoordList=L(e.yCoordList,1e3),t.zCoordList=L(e.zCoordList,1e3),e.bFactorList&&(t.bFactorList=L(e.bFactorList,100)),e.atomIdList&&(t.atomIdList=z(e.atomIdList)),e.altLocList&&(t.altLocList=_(e.altLocList)),e.occupancyList&&(t.occupancyList=T(e.occupancyList,100)),t.groupIdList=z(e.groupIdList),t.groupTypeList=S(e.groupTypeList),e.secStructList&&(t.secStructList=$(e.secStructList)),e.insCodeList&&(t.insCodeList=_(e.insCodeList)),e.sequenceIndexList&&(t.sequenceIndexList=z(e.sequenceIndexList)),t.chainIdList=M(e.chainIdList,4),e.chainNameList&&(t.chainNameList=M(e.chainNameList,4)),t}function F(e){var t=0,r=new DataView(e.buffer);function n(e){for(var t={},r=0;r<e;r++){var n=s();t[n]=s()}return t}function i(r){var n=e.subarray(t,t+r);return t+=r,n}function o(r){var n=e.subarray(t,t+r);t+=r;if(r>65535){for(var i=[],o=0;o<n.length;o+=65535)i.push(String.fromCharCode.apply(null,n.subarray(o,o+65535)));return i.join("")}return String.fromCharCode.apply(null,n)}function a(e){for(var t=new Array(e),r=0;r<e;r++)t[r]=s();return t}function s(){var s,l,c=e[t];if(0==(128&c))return t++,c;if(128==(240&c))return t++,n(l=15&c);if(144==(240&c))return t++,a(l=15&c);if(160==(224&c))return t++,o(l=31&c);if(224==(224&c))return s=r.getInt8(t),t++,s;switch(c){case 192:return t++,null;case 194:return t++,!1;case 195:return t++,!0;case 196:return l=r.getUint8(t+1),t+=2,i(l);case 197:return l=r.getUint16(t+1),t+=3,i(l);case 198:return l=r.getUint32(t+1),t+=5,i(l);case 202:return s=r.getFloat32(t+1),t+=5,s;case 203:return s=r.getFloat64(t+1),t+=9,s;case 204:return s=e[t+1],t+=2,s;case 205:return s=r.getUint16(t+1),t+=3,s;case 206:return s=r.getUint32(t+1),t+=5,s;case 208:return s=r.getInt8(t+1),t+=2,s;case 209:return s=r.getInt16(t+1),t+=3,s;case 210:return s=r.getInt32(t+1),t+=5,s;case 217:return l=r.getUint8(t+1),t+=2,o(l);case 218:return l=r.getUint16(t+1),t+=3,o(l);case 219:return l=r.getUint32(t+1),t+=5,o(l);case 220:return l=r.getUint16(t+1),t+=3,a(l);case 221:return l=r.getUint32(t+1),t+=5,a(l);case 222:return l=r.getUint16(t+1),t+=3,n(l);case 223:return l=r.getUint32(t+1),t+=5,n(l)}throw new Error("Unknown type 0x"+c.toString(16))}return s()}function k(e,t,r,n){switch(e){case 1:return function(e,t){var r=e.length;t||(t=new Float32Array(r/4));for(var n=s(t),i=s(e),o=0,a=0,l=r/4;o<l;++o,a+=4)n.setFloat32(a,i.getFloat32(a),!0);return t}(t);case 2:return c(t);case 3:return h(t);case 4:return f(t);case 5:return l(t);case 6:return v(f(t),new Uint8Array(r));case 7:return v(f(t));case 8:return y(v(f(t)),i);case 9:return function(e,t,r){return p(v(e,u(r)),t,r)}(f(t),f(n)[0]);case 10:return D(h(t),f(n)[0]);case 11:return p(h(t),f(n)[0]);case 12:return w(h(t),f(n)[0]);case 13:return w(c(t),f(n)[0]);case 14:return x(h(t));case 15:return x(c(t))}var i}function I(e,t){var r=(t=t||{}).ignoreFields,n={};return o.forEach(function(t){var i,o,a,l,c,u=!!r&&-1!==r.indexOf(t),h=e[t];u||void 0===h||(h instanceof Uint8Array?n[t]=k.apply(null,(o=s(i=h),a=o.getInt32(0),l=o.getInt32(4),c=i.subarray(8,12),i=i.subarray(12),[a,i,l,c])):n[t]=h)}),n}function P(e){return String.fromCharCode.apply(null,e).replace(/\0/g,"")}var O="http://mmtf.rcsb.org/v1.0/",R=O+"full/",N=O+"reduced/";function B(e,t){return e instanceof ArrayBuffer&&(e=new Uint8Array(e)),I(e instanceof Uint8Array?F(e):e,t)}function V(e,t,r,n){var i=new XMLHttpRequest;i.addEventListener("load",function(){try{var e=B(i.response);r(e)}catch(e){n(e)}},!0),i.addEventListener("error",n,!0),i.responseType="arraybuffer",i.open("GET",t+e.toUpperCase()),i.send()}e.encode=function(e){return n(E(e))},e.decode=B,e.traverse=function(e,t,r){var n,i,o,a,s,l,c=(r=r||{}).firstModelOnly,u=t.onModel,h=t.onChain,f=t.onGroup,d=t.onAtom,p=t.onBond,m=0,v=0,g=0,y=0,b=0,x=-1,w=e.chainNameList,D=e.secStructList,C=e.insCodeList,A=e.sequenceIndexList,$=e.atomIdList,S=e.bFactorList,M=e.altLocList,_=e.occupancyList,z=e.bondAtomList,T=e.bondOrderList;for(n=0,i=e.chainsPerModel.length;n<i&&!(c&&m>0);++n){var L=e.chainsPerModel[m];for(u&&u({chainCount:L,modelIndex:m}),o=0;o<L;++o){var E=e.groupsPerChain[v];if(h){var F=P(e.chainIdList.subarray(4*v,4*v+4)),k=null;w&&(k=P(w.subarray(4*v,4*v+4))),h({groupCount:E,chainIndex:v,modelIndex:m,chainId:F,chainName:k})}for(a=0;a<E;++a){var I=e.groupList[e.groupTypeList[g]],O=I.atomNameList.length;if(f){var R=null;D&&(R=D[g]);var N=null;e.insCodeList&&(N=String.fromCharCode(C[g]));var B=null;A&&(B=A[g]),f({atomCount:O,groupIndex:g,chainIndex:v,modelIndex:m,groupId:e.groupIdList[g],groupType:e.groupTypeList[g],groupName:I.groupName,singleLetterCode:I.singleLetterCode,chemCompType:I.chemCompType,secStruct:R,insCode:N,sequenceIndex:B})}for(s=0;s<O;++s){if(d){var V=null;$&&(V=$[y]);var U=null;S&&(U=S[y]);var j=null;M&&(j=String.fromCharCode(M[y]));var G=null;_&&(G=_[y]),d({atomIndex:y,groupIndex:g,chainIndex:v,modelIndex:m,atomId:V,element:I.elementList[s],atomName:I.atomNameList[s],formalCharge:I.formalChargeList[s],xCoord:e.xCoordList[y],yCoord:e.yCoordList[y],zCoord:e.zCoordList[y],bFactor:U,altLoc:j,occupancy:G})}y+=1}if(p){var q=I.bondAtomList;for(s=0,l=I.bondOrderList.length;s<l;++s)p({atomIndex1:y-O+q[2*s],atomIndex2:y-O+q[2*s+1],bondOrder:I.bondOrderList[s]})}g+=1}v+=1}if(b=x+1,x=y-1,p&&z)for(s=0,l=z.length;s<l;s+=2){var H=z[s],W=z[s+1];(H>=b&&H<=x||W>=b&&W<=x)&&p({atomIndex1:H,atomIndex2:W,bondOrder:T?T[s/2]:null})}m+=1}},e.fetch=function(e,t,r){V(e,R,t,r)},e.fetchReduced=function(e,t,r){V(e,N,t,r)},e.version="v1.0.0",e.fetchUrl=R,e.fetchReducedUrl=N,e.encodeMsgpack=n,e.encodeMmtf=E,e.decodeMsgpack=F,e.decodeMmtf=I,Object.defineProperty(e,"__esModule",{value:!0})}(e.MMTF=e.MMTF||{})}(this),function(e){if(true)module.exports=e();else {}}(function(){return function e(t,r,n){function i(a,s){if(!r[a]){if(!t[a]){var l="function"==typeof require&&require;if(!s&&l)return require(a,!0);if(o)return o(a,!0);var c=new Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c}var u=r[a]={exports:{}};t[a][0].call(u.exports,function(e){var r=t[a][1][e];return i(r||e)},u,u.exports,e,t,r,n)}return r[a].exports}for(var o="function"==typeof require&&require,a=0;a<n.length;a++)i(n[a]);return i}({1:[function(e,t,r){"use strict";var n="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Int32Array;r.assign=function(e){for(var t=Array.prototype.slice.call(arguments,1);t.length;){var r=t.shift();if(r){if("object"!=typeof r)throw new TypeError(r+"must be non-object");for(var n in r)r.hasOwnProperty(n)&&(e[n]=r[n])}}return e},r.shrinkBuf=function(e,t){return e.length===t?e:e.subarray?e.subarray(0,t):(e.length=t,e)};var i={arraySet:function(e,t,r,n,i){if(t.subarray&&e.subarray)e.set(t.subarray(r,r+n),i);else for(var o=0;o<n;o++)e[i+o]=t[r+o]},flattenChunks:function(e){var t,r,n,i,o,a;for(n=0,t=0,r=e.length;t<r;t++)n+=e[t].length;for(a=new Uint8Array(n),i=0,t=0,r=e.length;t<r;t++)o=e[t],a.set(o,i),i+=o.length;return a}},o={arraySet:function(e,t,r,n,i){for(var o=0;o<n;o++)e[i+o]=t[r+o]},flattenChunks:function(e){return[].concat.apply([],e)}};r.setTyped=function(e){e?(r.Buf8=Uint8Array,r.Buf16=Uint16Array,r.Buf32=Int32Array,r.assign(r,i)):(r.Buf8=Array,r.Buf16=Array,r.Buf32=Array,r.assign(r,o))},r.setTyped(n)},{}],2:[function(e,t,r){"use strict";var n=e("./common"),i=!0,o=!0;try{String.fromCharCode.apply(null,[0])}catch(e){i=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(e){o=!1}for(var a=new n.Buf8(256),s=0;s<256;s++)a[s]=s>=252?6:s>=248?5:s>=240?4:s>=224?3:s>=192?2:1;function l(e,t){if(t<65537&&(e.subarray&&o||!e.subarray&&i))return String.fromCharCode.apply(null,n.shrinkBuf(e,t));for(var r="",a=0;a<t;a++)r+=String.fromCharCode(e[a]);return r}a[254]=a[254]=1,r.string2buf=function(e){var t,r,i,o,a,s=e.length,l=0;for(o=0;o<s;o++)55296==(64512&(r=e.charCodeAt(o)))&&o+1<s&&56320==(64512&(i=e.charCodeAt(o+1)))&&(r=65536+(r-55296<<10)+(i-56320),o++),l+=r<128?1:r<2048?2:r<65536?3:4;for(t=new n.Buf8(l),a=0,o=0;a<l;o++)55296==(64512&(r=e.charCodeAt(o)))&&o+1<s&&56320==(64512&(i=e.charCodeAt(o+1)))&&(r=65536+(r-55296<<10)+(i-56320),o++),r<128?t[a++]=r:r<2048?(t[a++]=192|r>>>6,t[a++]=128|63&r):r<65536?(t[a++]=224|r>>>12,t[a++]=128|r>>>6&63,t[a++]=128|63&r):(t[a++]=240|r>>>18,t[a++]=128|r>>>12&63,t[a++]=128|r>>>6&63,t[a++]=128|63&r);return t},r.buf2binstring=function(e){return l(e,e.length)},r.binstring2buf=function(e){for(var t=new n.Buf8(e.length),r=0,i=t.length;r<i;r++)t[r]=e.charCodeAt(r);return t},r.buf2string=function(e,t){var r,n,i,o,s=t||e.length,c=new Array(2*s);for(n=0,r=0;r<s;)if((i=e[r++])<128)c[n++]=i;else if((o=a[i])>4)c[n++]=65533,r+=o-1;else{for(i&=2===o?31:3===o?15:7;o>1&&r<s;)i=i<<6|63&e[r++],o--;o>1?c[n++]=65533:i<65536?c[n++]=i:(i-=65536,c[n++]=55296|i>>10&1023,c[n++]=56320|1023&i)}return l(c,n)},r.utf8border=function(e,t){var r;for((t=t||e.length)>e.length&&(t=e.length),r=t-1;r>=0&&128==(192&e[r]);)r--;return r<0?t:0===r?t:r+a[e[r]]>t?r:t}},{"./common":1}],3:[function(e,t,r){"use strict";t.exports=function(e,t,r,n){for(var i=65535&e|0,o=e>>>16&65535|0,a=0;0!==r;){r-=a=r>2e3?2e3:r;do{o=o+(i=i+t[n++]|0)|0}while(--a);i%=65521,o%=65521}return i|o<<16|0}},{}],4:[function(e,t,r){t.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],5:[function(e,t,r){"use strict";var n=function(){for(var e,t=[],r=0;r<256;r++){e=r;for(var n=0;n<8;n++)e=1&e?3988292384^e>>>1:e>>>1;t[r]=e}return t}();t.exports=function(e,t,r,i){var o=n,a=i+r;e^=-1;for(var s=i;s<a;s++)e=e>>>8^o[255&(e^t[s])];return-1^e}},{}],6:[function(e,t,r){"use strict";t.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],7:[function(e,t,r){"use strict";t.exports=function(e,t){var r,n,i,o,a,s,l,c,u,h,f,d,p,m,v,g,y,b,x,w,D,C,A,$,S;r=e.state,n=e.next_in,$=e.input,i=n+(e.avail_in-5),o=e.next_out,S=e.output,a=o-(t-e.avail_out),s=o+(e.avail_out-257),l=r.dmax,c=r.wsize,u=r.whave,h=r.wnext,f=r.window,d=r.hold,p=r.bits,m=r.lencode,v=r.distcode,g=(1<<r.lenbits)-1,y=(1<<r.distbits)-1;e:do{p<15&&(d+=$[n++]<<p,p+=8,d+=$[n++]<<p,p+=8),b=m[d&g];t:for(;;){if(d>>>=x=b>>>24,p-=x,0===(x=b>>>16&255))S[o++]=65535&b;else{if(!(16&x)){if(0==(64&x)){b=m[(65535&b)+(d&(1<<x)-1)];continue t}if(32&x){r.mode=12;break e}e.msg="invalid literal/length code",r.mode=30;break e}w=65535&b,(x&=15)&&(p<x&&(d+=$[n++]<<p,p+=8),w+=d&(1<<x)-1,d>>>=x,p-=x),p<15&&(d+=$[n++]<<p,p+=8,d+=$[n++]<<p,p+=8),b=v[d&y];r:for(;;){if(d>>>=x=b>>>24,p-=x,!(16&(x=b>>>16&255))){if(0==(64&x)){b=v[(65535&b)+(d&(1<<x)-1)];continue r}e.msg="invalid distance code",r.mode=30;break e}if(D=65535&b,p<(x&=15)&&(d+=$[n++]<<p,(p+=8)<x&&(d+=$[n++]<<p,p+=8)),(D+=d&(1<<x)-1)>l){e.msg="invalid distance too far back",r.mode=30;break e}if(d>>>=x,p-=x,D>(x=o-a)){if((x=D-x)>u&&r.sane){e.msg="invalid distance too far back",r.mode=30;break e}if(C=0,A=f,0===h){if(C+=c-x,x<w){w-=x;do{S[o++]=f[C++]}while(--x);C=o-D,A=S}}else if(h<x){if(C+=c+h-x,(x-=h)<w){w-=x;do{S[o++]=f[C++]}while(--x);if(C=0,h<w){w-=x=h;do{S[o++]=f[C++]}while(--x);C=o-D,A=S}}}else if(C+=h-x,x<w){w-=x;do{S[o++]=f[C++]}while(--x);C=o-D,A=S}for(;w>2;)S[o++]=A[C++],S[o++]=A[C++],S[o++]=A[C++],w-=3;w&&(S[o++]=A[C++],w>1&&(S[o++]=A[C++]))}else{C=o-D;do{S[o++]=S[C++],S[o++]=S[C++],S[o++]=S[C++],w-=3}while(w>2);w&&(S[o++]=S[C++],w>1&&(S[o++]=S[C++]))}break}}break}}while(n<i&&o<s);n-=w=p>>3,d&=(1<<(p-=w<<3))-1,e.next_in=n,e.next_out=o,e.avail_in=n<i?i-n+5:5-(n-i),e.avail_out=o<s?s-o+257:257-(o-s),r.hold=d,r.bits=p}},{}],8:[function(e,t,r){"use strict";var n=e("../utils/common"),i=e("./adler32"),o=e("./crc32"),a=e("./inffast"),s=e("./inftrees"),l=0,c=1,u=2,h=4,f=5,d=6,p=0,m=1,v=2,g=-2,y=-3,b=-4,x=-5,w=8,D=1,C=2,A=3,$=4,S=5,M=6,_=7,z=8,T=9,L=10,E=11,F=12,k=13,I=14,P=15,O=16,R=17,N=18,B=19,V=20,U=21,j=22,G=23,q=24,H=25,W=26,Y=27,Z=28,X=29,Q=30,K=31,J=32,ee=852,te=592,re=15;function ne(e){return(e>>>24&255)+(e>>>8&65280)+((65280&e)<<8)+((255&e)<<24)}function ie(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new n.Buf16(320),this.work=new n.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function oe(e){var t;return e&&e.state?(t=e.state,e.total_in=e.total_out=t.total=0,e.msg="",t.wrap&&(e.adler=1&t.wrap),t.mode=D,t.last=0,t.havedict=0,t.dmax=32768,t.head=null,t.hold=0,t.bits=0,t.lencode=t.lendyn=new n.Buf32(ee),t.distcode=t.distdyn=new n.Buf32(te),t.sane=1,t.back=-1,p):g}function ae(e){var t;return e&&e.state?((t=e.state).wsize=0,t.whave=0,t.wnext=0,oe(e)):g}function se(e,t){var r,n;return e&&e.state?(n=e.state,t<0?(r=0,t=-t):(r=1+(t>>4),t<48&&(t&=15)),t&&(t<8||t>15)?g:(null!==n.window&&n.wbits!==t&&(n.window=null),n.wrap=r,n.wbits=t,ae(e))):g}function le(e,t){var r,n;return e?(n=new ie,e.state=n,n.window=null,(r=se(e,t))!==p&&(e.state=null),r):g}var ce,ue,he=!0;function fe(e){if(he){var t;for(ce=new n.Buf32(512),ue=new n.Buf32(32),t=0;t<144;)e.lens[t++]=8;for(;t<256;)e.lens[t++]=9;for(;t<280;)e.lens[t++]=7;for(;t<288;)e.lens[t++]=8;for(s(c,e.lens,0,288,ce,0,e.work,{bits:9}),t=0;t<32;)e.lens[t++]=5;s(u,e.lens,0,32,ue,0,e.work,{bits:5}),he=!1}e.lencode=ce,e.lenbits=9,e.distcode=ue,e.distbits=5}r.inflateReset=ae,r.inflateReset2=se,r.inflateResetKeep=oe,r.inflateInit=function(e){return le(e,re)},r.inflateInit2=le,r.inflate=function(e,t){var r,ee,te,re,ie,oe,ae,se,le,ce,ue,he,de,pe,me,ve,ge,ye,be,xe,we,De,Ce,Ae,$e=0,Se=new n.Buf8(4),Me=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!e||!e.state||!e.output||!e.input&&0!==e.avail_in)return g;(r=e.state).mode===F&&(r.mode=k),ie=e.next_out,te=e.output,ae=e.avail_out,re=e.next_in,ee=e.input,oe=e.avail_in,se=r.hold,le=r.bits,ce=oe,ue=ae,De=p;e:for(;;)switch(r.mode){case D:if(0===r.wrap){r.mode=k;break}for(;le<16;){if(0===oe)break e;oe--,se+=ee[re++]<<le,le+=8}if(2&r.wrap&&35615===se){r.check=0,Se[0]=255&se,Se[1]=se>>>8&255,r.check=o(r.check,Se,2,0),se=0,le=0,r.mode=C;break}if(r.flags=0,r.head&&(r.head.done=!1),!(1&r.wrap)||(((255&se)<<8)+(se>>8))%31){e.msg="incorrect header check",r.mode=Q;break}if((15&se)!==w){e.msg="unknown compression method",r.mode=Q;break}if(le-=4,we=8+(15&(se>>>=4)),0===r.wbits)r.wbits=we;else if(we>r.wbits){e.msg="invalid window size",r.mode=Q;break}r.dmax=1<<we,e.adler=r.check=1,r.mode=512&se?L:F,se=0,le=0;break;case C:for(;le<16;){if(0===oe)break e;oe--,se+=ee[re++]<<le,le+=8}if(r.flags=se,(255&r.flags)!==w){e.msg="unknown compression method",r.mode=Q;break}if(57344&r.flags){e.msg="unknown header flags set",r.mode=Q;break}r.head&&(r.head.text=se>>8&1),512&r.flags&&(Se[0]=255&se,Se[1]=se>>>8&255,r.check=o(r.check,Se,2,0)),se=0,le=0,r.mode=A;case A:for(;le<32;){if(0===oe)break e;oe--,se+=ee[re++]<<le,le+=8}r.head&&(r.head.time=se),512&r.flags&&(Se[0]=255&se,Se[1]=se>>>8&255,Se[2]=se>>>16&255,Se[3]=se>>>24&255,r.check=o(r.check,Se,4,0)),se=0,le=0,r.mode=$;case $:for(;le<16;){if(0===oe)break e;oe--,se+=ee[re++]<<le,le+=8}r.head&&(r.head.xflags=255&se,r.head.os=se>>8),512&r.flags&&(Se[0]=255&se,Se[1]=se>>>8&255,r.check=o(r.check,Se,2,0)),se=0,le=0,r.mode=S;case S:if(1024&r.flags){for(;le<16;){if(0===oe)break e;oe--,se+=ee[re++]<<le,le+=8}r.length=se,r.head&&(r.head.extra_len=se),512&r.flags&&(Se[0]=255&se,Se[1]=se>>>8&255,r.check=o(r.check,Se,2,0)),se=0,le=0}else r.head&&(r.head.extra=null);r.mode=M;case M:if(1024&r.flags&&((he=r.length)>oe&&(he=oe),he&&(r.head&&(we=r.head.extra_len-r.length,r.head.extra||(r.head.extra=new Array(r.head.extra_len)),n.arraySet(r.head.extra,ee,re,he,we)),512&r.flags&&(r.check=o(r.check,ee,he,re)),oe-=he,re+=he,r.length-=he),r.length))break e;r.length=0,r.mode=_;case _:if(2048&r.flags){if(0===oe)break e;he=0;do{we=ee[re+he++],r.head&&we&&r.length<65536&&(r.head.name+=String.fromCharCode(we))}while(we&&he<oe);if(512&r.flags&&(r.check=o(r.check,ee,he,re)),oe-=he,re+=he,we)break e}else r.head&&(r.head.name=null);r.length=0,r.mode=z;case z:if(4096&r.flags){if(0===oe)break e;he=0;do{we=ee[re+he++],r.head&&we&&r.length<65536&&(r.head.comment+=String.fromCharCode(we))}while(we&&he<oe);if(512&r.flags&&(r.check=o(r.check,ee,he,re)),oe-=he,re+=he,we)break e}else r.head&&(r.head.comment=null);r.mode=T;case T:if(512&r.flags){for(;le<16;){if(0===oe)break e;oe--,se+=ee[re++]<<le,le+=8}if(se!==(65535&r.check)){e.msg="header crc mismatch",r.mode=Q;break}se=0,le=0}r.head&&(r.head.hcrc=r.flags>>9&1,r.head.done=!0),e.adler=r.check=0,r.mode=F;break;case L:for(;le<32;){if(0===oe)break e;oe--,se+=ee[re++]<<le,le+=8}e.adler=r.check=ne(se),se=0,le=0,r.mode=E;case E:if(0===r.havedict)return e.next_out=ie,e.avail_out=ae,e.next_in=re,e.avail_in=oe,r.hold=se,r.bits=le,v;e.adler=r.check=1,r.mode=F;case F:if(t===f||t===d)break e;case k:if(r.last){se>>>=7&le,le-=7&le,r.mode=Y;break}for(;le<3;){if(0===oe)break e;oe--,se+=ee[re++]<<le,le+=8}switch(r.last=1&se,le-=1,3&(se>>>=1)){case 0:r.mode=I;break;case 1:if(fe(r),r.mode=V,t===d){se>>>=2,le-=2;break e}break;case 2:r.mode=R;break;case 3:e.msg="invalid block type",r.mode=Q}se>>>=2,le-=2;break;case I:for(se>>>=7&le,le-=7&le;le<32;){if(0===oe)break e;oe--,se+=ee[re++]<<le,le+=8}if((65535&se)!=(se>>>16^65535)){e.msg="invalid stored block lengths",r.mode=Q;break}if(r.length=65535&se,se=0,le=0,r.mode=P,t===d)break e;case P:r.mode=O;case O:if(he=r.length){if(he>oe&&(he=oe),he>ae&&(he=ae),0===he)break e;n.arraySet(te,ee,re,he,ie),oe-=he,re+=he,ae-=he,ie+=he,r.length-=he;break}r.mode=F;break;case R:for(;le<14;){if(0===oe)break e;oe--,se+=ee[re++]<<le,le+=8}if(r.nlen=257+(31&se),se>>>=5,le-=5,r.ndist=1+(31&se),se>>>=5,le-=5,r.ncode=4+(15&se),se>>>=4,le-=4,r.nlen>286||r.ndist>30){e.msg="too many length or distance symbols",r.mode=Q;break}r.have=0,r.mode=N;case N:for(;r.have<r.ncode;){for(;le<3;){if(0===oe)break e;oe--,se+=ee[re++]<<le,le+=8}r.lens[Me[r.have++]]=7&se,se>>>=3,le-=3}for(;r.have<19;)r.lens[Me[r.have++]]=0;if(r.lencode=r.lendyn,r.lenbits=7,Ce={bits:r.lenbits},De=s(l,r.lens,0,19,r.lencode,0,r.work,Ce),r.lenbits=Ce.bits,De){e.msg="invalid code lengths set",r.mode=Q;break}r.have=0,r.mode=B;case B:for(;r.have<r.nlen+r.ndist;){for(;ve=($e=r.lencode[se&(1<<r.lenbits)-1])>>>16&255,ge=65535&$e,!((me=$e>>>24)<=le);){if(0===oe)break e;oe--,se+=ee[re++]<<le,le+=8}if(ge<16)se>>>=me,le-=me,r.lens[r.have++]=ge;else{if(16===ge){for(Ae=me+2;le<Ae;){if(0===oe)break e;oe--,se+=ee[re++]<<le,le+=8}if(se>>>=me,le-=me,0===r.have){e.msg="invalid bit length repeat",r.mode=Q;break}we=r.lens[r.have-1],he=3+(3&se),se>>>=2,le-=2}else if(17===ge){for(Ae=me+3;le<Ae;){if(0===oe)break e;oe--,se+=ee[re++]<<le,le+=8}le-=me,we=0,he=3+(7&(se>>>=me)),se>>>=3,le-=3}else{for(Ae=me+7;le<Ae;){if(0===oe)break e;oe--,se+=ee[re++]<<le,le+=8}le-=me,we=0,he=11+(127&(se>>>=me)),se>>>=7,le-=7}if(r.have+he>r.nlen+r.ndist){e.msg="invalid bit length repeat",r.mode=Q;break}for(;he--;)r.lens[r.have++]=we}}if(r.mode===Q)break;if(0===r.lens[256]){e.msg="invalid code -- missing end-of-block",r.mode=Q;break}if(r.lenbits=9,Ce={bits:r.lenbits},De=s(c,r.lens,0,r.nlen,r.lencode,0,r.work,Ce),r.lenbits=Ce.bits,De){e.msg="invalid literal/lengths set",r.mode=Q;break}if(r.distbits=6,r.distcode=r.distdyn,Ce={bits:r.distbits},De=s(u,r.lens,r.nlen,r.ndist,r.distcode,0,r.work,Ce),r.distbits=Ce.bits,De){e.msg="invalid distances set",r.mode=Q;break}if(r.mode=V,t===d)break e;case V:r.mode=U;case U:if(oe>=6&&ae>=258){e.next_out=ie,e.avail_out=ae,e.next_in=re,e.avail_in=oe,r.hold=se,r.bits=le,a(e,ue),ie=e.next_out,te=e.output,ae=e.avail_out,re=e.next_in,ee=e.input,oe=e.avail_in,se=r.hold,le=r.bits,r.mode===F&&(r.back=-1);break}for(r.back=0;ve=($e=r.lencode[se&(1<<r.lenbits)-1])>>>16&255,ge=65535&$e,!((me=$e>>>24)<=le);){if(0===oe)break e;oe--,se+=ee[re++]<<le,le+=8}if(ve&&0==(240&ve)){for(ye=me,be=ve,xe=ge;ve=($e=r.lencode[xe+((se&(1<<ye+be)-1)>>ye)])>>>16&255,ge=65535&$e,!(ye+(me=$e>>>24)<=le);){if(0===oe)break e;oe--,se+=ee[re++]<<le,le+=8}se>>>=ye,le-=ye,r.back+=ye}if(se>>>=me,le-=me,r.back+=me,r.length=ge,0===ve){r.mode=W;break}if(32&ve){r.back=-1,r.mode=F;break}if(64&ve){e.msg="invalid literal/length code",r.mode=Q;break}r.extra=15&ve,r.mode=j;case j:if(r.extra){for(Ae=r.extra;le<Ae;){if(0===oe)break e;oe--,se+=ee[re++]<<le,le+=8}r.length+=se&(1<<r.extra)-1,se>>>=r.extra,le-=r.extra,r.back+=r.extra}r.was=r.length,r.mode=G;case G:for(;ve=($e=r.distcode[se&(1<<r.distbits)-1])>>>16&255,ge=65535&$e,!((me=$e>>>24)<=le);){if(0===oe)break e;oe--,se+=ee[re++]<<le,le+=8}if(0==(240&ve)){for(ye=me,be=ve,xe=ge;ve=($e=r.distcode[xe+((se&(1<<ye+be)-1)>>ye)])>>>16&255,ge=65535&$e,!(ye+(me=$e>>>24)<=le);){if(0===oe)break e;oe--,se+=ee[re++]<<le,le+=8}se>>>=ye,le-=ye,r.back+=ye}if(se>>>=me,le-=me,r.back+=me,64&ve){e.msg="invalid distance code",r.mode=Q;break}r.offset=ge,r.extra=15&ve,r.mode=q;case q:if(r.extra){for(Ae=r.extra;le<Ae;){if(0===oe)break e;oe--,se+=ee[re++]<<le,le+=8}r.offset+=se&(1<<r.extra)-1,se>>>=r.extra,le-=r.extra,r.back+=r.extra}if(r.offset>r.dmax){e.msg="invalid distance too far back",r.mode=Q;break}r.mode=H;case H:if(0===ae)break e;if(he=ue-ae,r.offset>he){if((he=r.offset-he)>r.whave&&r.sane){e.msg="invalid distance too far back",r.mode=Q;break}he>r.wnext?(he-=r.wnext,de=r.wsize-he):de=r.wnext-he,he>r.length&&(he=r.length),pe=r.window}else pe=te,de=ie-r.offset,he=r.length;he>ae&&(he=ae),ae-=he,r.length-=he;do{te[ie++]=pe[de++]}while(--he);0===r.length&&(r.mode=U);break;case W:if(0===ae)break e;te[ie++]=r.length,ae--,r.mode=U;break;case Y:if(r.wrap){for(;le<32;){if(0===oe)break e;oe--,se|=ee[re++]<<le,le+=8}if(ue-=ae,e.total_out+=ue,r.total+=ue,ue&&(e.adler=r.check=r.flags?o(r.check,te,ue,ie-ue):i(r.check,te,ue,ie-ue)),ue=ae,(r.flags?se:ne(se))!==r.check){e.msg="incorrect data check",r.mode=Q;break}se=0,le=0}r.mode=Z;case Z:if(r.wrap&&r.flags){for(;le<32;){if(0===oe)break e;oe--,se+=ee[re++]<<le,le+=8}if(se!==(4294967295&r.total)){e.msg="incorrect length check",r.mode=Q;break}se=0,le=0}r.mode=X;case X:De=m;break e;case Q:De=y;break e;case K:return b;case J:default:return g}return e.next_out=ie,e.avail_out=ae,e.next_in=re,e.avail_in=oe,r.hold=se,r.bits=le,(r.wsize||ue!==e.avail_out&&r.mode<Q&&(r.mode<Y||t!==h))&&function(e,t,r,i){var o,a=e.state;return null===a.window&&(a.wsize=1<<a.wbits,a.wnext=0,a.whave=0,a.window=new n.Buf8(a.wsize)),i>=a.wsize?(n.arraySet(a.window,t,r-a.wsize,a.wsize,0),a.wnext=0,a.whave=a.wsize):((o=a.wsize-a.wnext)>i&&(o=i),n.arraySet(a.window,t,r-i,o,a.wnext),(i-=o)?(n.arraySet(a.window,t,r-i,i,0),a.wnext=i,a.whave=a.wsize):(a.wnext+=o,a.wnext===a.wsize&&(a.wnext=0),a.whave<a.wsize&&(a.whave+=o))),0}(e,e.output,e.next_out,ue-e.avail_out)?(r.mode=K,b):(ce-=e.avail_in,ue-=e.avail_out,e.total_in+=ce,e.total_out+=ue,r.total+=ue,r.wrap&&ue&&(e.adler=r.check=r.flags?o(r.check,te,ue,e.next_out-ue):i(r.check,te,ue,e.next_out-ue)),e.data_type=r.bits+(r.last?64:0)+(r.mode===F?128:0)+(r.mode===V||r.mode===P?256:0),(0===ce&&0===ue||t===h)&&De===p&&(De=x),De)},r.inflateEnd=function(e){if(!e||!e.state)return g;var t=e.state;return t.window&&(t.window=null),e.state=null,p},r.inflateGetHeader=function(e,t){var r;return e&&e.state?0==(2&(r=e.state).wrap)?g:(r.head=t,t.done=!1,p):g},r.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":1,"./adler32":3,"./crc32":5,"./inffast":7,"./inftrees":9}],9:[function(e,t,r){"use strict";var n=e("../utils/common"),i=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],o=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],a=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],s=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];t.exports=function(e,t,r,l,c,u,h,f){var d,p,m,v,g,y,b,x,w,D=f.bits,C=0,A=0,$=0,S=0,M=0,_=0,z=0,T=0,L=0,E=0,F=null,k=0,I=new n.Buf16(16),P=new n.Buf16(16),O=null,R=0;for(C=0;C<=15;C++)I[C]=0;for(A=0;A<l;A++)I[t[r+A]]++;for(M=D,S=15;S>=1&&0===I[S];S--);if(M>S&&(M=S),0===S)return c[u++]=20971520,c[u++]=20971520,f.bits=1,0;for($=1;$<S&&0===I[$];$++);for(M<$&&(M=$),T=1,C=1;C<=15;C++)if(T<<=1,(T-=I[C])<0)return-1;if(T>0&&(0===e||1!==S))return-1;for(P[1]=0,C=1;C<15;C++)P[C+1]=P[C]+I[C];for(A=0;A<l;A++)0!==t[r+A]&&(h[P[t[r+A]]++]=A);if(0===e?(F=O=h,y=19):1===e?(F=i,k-=257,O=o,R-=257,y=256):(F=a,O=s,y=-1),E=0,A=0,C=$,g=u,_=M,z=0,m=-1,v=(L=1<<M)-1,1===e&&L>852||2===e&&L>592)return 1;for(;;){0,b=C-z,h[A]<y?(x=0,w=h[A]):h[A]>y?(x=O[R+h[A]],w=F[k+h[A]]):(x=96,w=0),d=1<<C-z,$=p=1<<_;do{c[g+(E>>z)+(p-=d)]=b<<24|x<<16|w|0}while(0!==p);for(d=1<<C-1;E&d;)d>>=1;if(0!==d?(E&=d-1,E+=d):E=0,A++,0==--I[C]){if(C===S)break;C=t[r+h[A]]}if(C>M&&(E&v)!==m){for(0===z&&(z=M),g+=$,T=1<<(_=C-z);_+z<S&&!((T-=I[_+z])<=0);)_++,T<<=1;if(L+=1<<_,1===e&&L>852||2===e&&L>592)return 1;c[m=E&v]=M<<24|_<<16|g-u|0}}return 0!==E&&(c[g+E]=C-z<<24|64<<16|0),f.bits=M,0}},{"../utils/common":1}],10:[function(e,t,r){"use strict";t.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],11:[function(e,t,r){"use strict";t.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],"/lib/inflate.js":[function(e,t,r){"use strict";var n=e("./zlib/inflate.js"),i=e("./utils/common"),o=e("./utils/strings"),a=e("./zlib/constants"),s=e("./zlib/messages"),l=e("./zlib/zstream"),c=e("./zlib/gzheader"),u=Object.prototype.toString,h=function(e){this.options=i.assign({chunkSize:16384,windowBits:0,to:""},e||{});var t=this.options;t.raw&&t.windowBits>=0&&t.windowBits<16&&(t.windowBits=-t.windowBits,0===t.windowBits&&(t.windowBits=-15)),!(t.windowBits>=0&&t.windowBits<16)||e&&e.windowBits||(t.windowBits+=32),t.windowBits>15&&t.windowBits<48&&0==(15&t.windowBits)&&(t.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new l,this.strm.avail_out=0;var r=n.inflateInit2(this.strm,t.windowBits);if(r!==a.Z_OK)throw new Error(s[r]);this.header=new c,n.inflateGetHeader(this.strm,this.header)};function f(e,t){var r=new h(t);if(r.push(e,!0),r.err)throw r.msg;return r.result}h.prototype.push=function(e,t){var r,s,l,c,h,f=this.strm,d=this.options.chunkSize;if(this.ended)return!1;s=t===~~t?t:!0===t?a.Z_FINISH:a.Z_NO_FLUSH,"string"==typeof e?f.input=o.binstring2buf(e):"[object ArrayBuffer]"===u.call(e)?f.input=new Uint8Array(e):f.input=e,f.next_in=0,f.avail_in=f.input.length;do{if(0===f.avail_out&&(f.output=new i.Buf8(d),f.next_out=0,f.avail_out=d),(r=n.inflate(f,a.Z_NO_FLUSH))!==a.Z_STREAM_END&&r!==a.Z_OK)return this.onEnd(r),this.ended=!0,!1;f.next_out&&(0!==f.avail_out&&r!==a.Z_STREAM_END&&(0!==f.avail_in||s!==a.Z_FINISH&&s!==a.Z_SYNC_FLUSH)||("string"===this.options.to?(l=o.utf8border(f.output,f.next_out),c=f.next_out-l,h=o.buf2string(f.output,l),f.next_out=c,f.avail_out=d-c,c&&i.arraySet(f.output,f.output,l,c,0),this.onData(h)):this.onData(i.shrinkBuf(f.output,f.next_out))))}while(f.avail_in>0&&r!==a.Z_STREAM_END);return r===a.Z_STREAM_END&&(s=a.Z_FINISH),s===a.Z_FINISH?(r=n.inflateEnd(this.strm),this.onEnd(r),this.ended=!0,r===a.Z_OK):s!==a.Z_SYNC_FLUSH||(this.onEnd(a.Z_OK),f.avail_out=0,!0)},h.prototype.onData=function(e){this.chunks.push(e)},h.prototype.onEnd=function(e){e===a.Z_OK&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=i.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg},r.Inflate=h,r.inflate=f,r.inflateRaw=function(e,t){return(t=t||{}).raw=!0,f(e,t)},r.ungzip=f},{"./utils/common":1,"./utils/strings":2,"./zlib/constants":4,"./zlib/gzheader":6,"./zlib/inflate.js":8,"./zlib/messages":10,"./zlib/zstream":11}]},{},[])("/lib/inflate.js")}),function(e,t){ true?module.exports=t():undefined}(this,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.i=function(e){return e},r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=6)}([function(e,t,r){"use strict";function n(e){e.offset%4!=0&&e.skip(4-e.offset%4)}e.exports.notNetcdf=function(e,t){if(e)throw new TypeError("Not a valid NetCDF v3.x file: "+t)},e.exports.padding=n,e.exports.readName=function(e){var t=e.readUint32(),r=e.readChars(t);return n(e),r}},function(e,t,r){"use strict";const n=r(0).notNetcdf,i={BYTE:1,CHAR:2,SHORT:3,INT:4,FLOAT:5,DOUBLE:6};function o(e,t){if(1!==e){for(var r=new Array(e),n=0;n<e;n++)r[n]=t();return r}return t()}e.exports=i,e.exports.num2str=function(e){switch(Number(e)){case i.BYTE:return"byte";case i.CHAR:return"char";case i.SHORT:return"short";case i.INT:return"int";case i.FLOAT:return"float";case i.DOUBLE:return"double";default:return"undefined"}},e.exports.num2bytes=function(e){switch(Number(e)){case i.BYTE:case i.CHAR:return 1;case i.SHORT:return 2;case i.INT:case i.FLOAT:return 4;case i.DOUBLE:return 8;default:return-1}},e.exports.str2num=function(e){switch(String(e)){case"byte":return i.BYTE;case"char":return i.CHAR;case"short":return i.SHORT;case"int":return i.INT;case"float":return i.FLOAT;case"double":return i.DOUBLE;default:return-1}},e.exports.readType=function(e,t,r){switch(t){case i.BYTE:return e.readBytes(r);case i.CHAR:return 0===(a=e.readChars(r)).charCodeAt(a.length-1)?a.substring(0,a.length-1):a;case i.SHORT:return o(r,e.readInt16.bind(e));case i.INT:return o(r,e.readInt32.bind(e));case i.FLOAT:return o(r,e.readFloat32.bind(e));case i.DOUBLE:return o(r,e.readFloat64.bind(e));default:return void n(!0,"non valid type "+t)}var a}},function(e,t){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(r=window)}e.exports=r},function(e,t,r){"use strict";const n=r(1);e.exports.nonRecord=function(e,t){const r=n.str2num(t.type);for(var i=t.size/n.num2bytes(r),o=new Array(i),a=0;a<i;a++)o[a]=n.readType(e,r,1);return o},e.exports.record=function(e,t,r){const i=n.str2num(t.type),o=t.size?t.size/n.num2bytes(i):1;var a=r.length,s=new Array(a);const l=r.recordStep;for(var c=0;c<a;c++){var u=e.offset;s[c]=n.readType(e,i,o),e.seek(u+l)}return s}},function(e,t,r){"use strict";const n=r(0),i=r(1),o=0,a=10,s=11,l=12;function c(e){const t=e.readUint32();if(t===o)return n.notNetcdf(e.readUint32()!==o,"wrong empty tag for list of attributes"),[];{n.notNetcdf(t!==l,"wrong tag for list of attributes");const o=e.readUint32();for(var r=new Array(o),a=0;a<o;a++){var s=n.readName(e),c=e.readUint32();n.notNetcdf(c<1||c>6,"non valid type "+c);var u=e.readUint32(),h=i.readType(e,c,u);n.padding(e),r[a]={name:s,type:i.num2str(c),value:h}}}return r}e.exports=function(e,t){var r={recordDimension:{length:e.readUint32()}};r.version=t;var l=function(e){var t,r;const i=e.readUint32();if(i===o)return n.notNetcdf(e.readUint32()!==o,"wrong empty tag for list of dimensions"),[];{n.notNetcdf(i!==a,"wrong tag for list of dimensions");const o=e.readUint32();for(var s=new Array(o),l=0;l<o;l++){var c=n.readName(e);const i=e.readUint32();0===i&&(t=l,r=c),s[l]={name:c,size:i}}}return{dimensions:s,recordId:t,recordName:r}}(e);r.recordDimension.id=l.recordId,r.recordDimension.name=l.recordName,r.dimensions=l.dimensions,r.globalAttributes=c(e);var u=function(e,t,r){const a=e.readUint32();var l=0;if(a===o)return n.notNetcdf(e.readUint32()!==o,"wrong empty tag for list of variables"),[];{n.notNetcdf(a!==s,"wrong tag for list of variables");const o=e.readUint32();for(var u=new Array(o),h=0;h<o;h++){var f=n.readName(e);const o=e.readUint32();for(var d=new Array(o),p=0;p<o;p++)d[p]=e.readUint32();var m=c(e),v=e.readUint32();n.notNetcdf(v<1&&v>6,"non valid type "+v);const a=e.readUint32();var g=e.readUint32();2===r&&(n.notNetcdf(g>0,"offsets larger than 4GB not supported"),g=e.readUint32()),d[0]===t&&(l+=a),u[h]={name:f,dimensions:d,attributes:m,type:i.num2str(v),size:a,offset:g,record:d[0]===t}}}return{variables:u,recordStep:l}}(e,l.recordId,t);return r.variables=u.variables,r.recordDimension.recordStep=u.recordStep,r}},function(e,t,r){"use strict";(function(t){const n=r(11),i=8192,o=[];e.exports=class{constructor(e,t){t=t||{};var r=!1;void 0===e&&(e=i),"number"==typeof e?e=new ArrayBuffer(e):(r=!0,this._lastWrittenByte=e.byteLength);const n=t.offset?t.offset>>>0:0;let o=e.byteLength-n,a=n;e.buffer&&(e.byteLength!==e.buffer.byteLength&&(a=e.byteOffset+n),e=e.buffer),this._lastWrittenByte=r?o:0,this.buffer=e,this.length=o,this.byteLength=o,this.byteOffset=a,this.offset=0,this.littleEndian=!0,this._data=new DataView(this.buffer,a,o),this._mark=0,this._marks=[]}available(e){return void 0===e&&(e=1),this.offset+e<=this.length}isLittleEndian(){return this.littleEndian}setLittleEndian(){return this.littleEndian=!0,this}isBigEndian(){return!this.littleEndian}setBigEndian(){return this.littleEndian=!1,this}skip(e){return void 0===e&&(e=1),this.offset+=e,this}seek(e){return this.offset=e,this}mark(){return this._mark=this.offset,this}reset(){return this.offset=this._mark,this}pushMark(){return this._marks.push(this.offset),this}popMark(){const e=this._marks.pop();if(void 0===e)throw new Error("Mark stack empty");return this.seek(e),this}rewind(){return this.offset=0,this}ensureAvailable(e){if(void 0===e&&(e=1),!this.available(e)){const t=2*(this.offset+e),r=new Uint8Array(t);r.set(new Uint8Array(this.buffer)),this.buffer=r.buffer,this.length=this.byteLength=t,this._data=new DataView(this.buffer)}return this}readBoolean(){return 0!==this.readUint8()}readInt8(){return this._data.getInt8(this.offset++)}readUint8(){return this._data.getUint8(this.offset++)}readByte(){return this.readUint8()}readBytes(e){void 0===e&&(e=1);for(var t=new Uint8Array(e),r=0;r<e;r++)t[r]=this.readByte();return t}readInt16(){var e=this._data.getInt16(this.offset,this.littleEndian);return this.offset+=2,e}readUint16(){var e=this._data.getUint16(this.offset,this.littleEndian);return this.offset+=2,e}readInt32(){var e=this._data.getInt32(this.offset,this.littleEndian);return this.offset+=4,e}readUint32(){var e=this._data.getUint32(this.offset,this.littleEndian);return this.offset+=4,e}readFloat32(){var e=this._data.getFloat32(this.offset,this.littleEndian);return this.offset+=4,e}readFloat64(){var e=this._data.getFloat64(this.offset,this.littleEndian);return this.offset+=8,e}readChar(){return String.fromCharCode(this.readInt8())}readChars(e){void 0===e&&(e=1),o.length=e;for(var t=0;t<e;t++)o[t]=this.readChar();return o.join("")}readUtf8(e){void 0===e&&(e=1);const t=this.readChars(e);return n.decode(t)}writeBoolean(e){return this.writeUint8(e?255:0),this}writeInt8(e){return this.ensureAvailable(1),this._data.setInt8(this.offset++,e),this._updateLastWrittenByte(),this}writeUint8(e){return this.ensureAvailable(1),this._data.setUint8(this.offset++,e),this._updateLastWrittenByte(),this}writeByte(e){return this.writeUint8(e)}writeBytes(e){this.ensureAvailable(e.length);for(var t=0;t<e.length;t++)this._data.setUint8(this.offset++,e[t]);return this._updateLastWrittenByte(),this}writeInt16(e){return this.ensureAvailable(2),this._data.setInt16(this.offset,e,this.littleEndian),this.offset+=2,this._updateLastWrittenByte(),this}writeUint16(e){return this.ensureAvailable(2),this._data.setUint16(this.offset,e,this.littleEndian),this.offset+=2,this._updateLastWrittenByte(),this}writeInt32(e){return this.ensureAvailable(4),this._data.setInt32(this.offset,e,this.littleEndian),this.offset+=4,this._updateLastWrittenByte(),this}writeUint32(e){return this.ensureAvailable(4),this._data.setUint32(this.offset,e,this.littleEndian),this.offset+=4,this._updateLastWrittenByte(),this}writeFloat32(e){return this.ensureAvailable(4),this._data.setFloat32(this.offset,e,this.littleEndian),this.offset+=4,this._updateLastWrittenByte(),this}writeFloat64(e){return this.ensureAvailable(8),this._data.setFloat64(this.offset,e,this.littleEndian),this.offset+=8,this._updateLastWrittenByte(),this}writeChar(e){return this.writeUint8(e.charCodeAt(0))}writeChars(e){for(var t=0;t<e.length;t++)this.writeUint8(e.charCodeAt(t));return this}writeUtf8(e){const t=n.encode(e);return this.writeChars(t)}toArray(){return new Uint8Array(this.buffer,this.byteOffset,this._lastWrittenByte)}getBuffer(){return void 0!==t?t.from(this.toArray()):this.toArray()}_updateLastWrittenByte(){this.offset>this._lastWrittenByte&&(this._lastWrittenByte=this.offset)}}}).call(t,r(8).Buffer)},function(e,t,r){"use strict";const n=r(5),i=r(0),o=r(3),a=r(4);e.exports=class{constructor(e){const t=new n(e);t.setBigEndian(),i.notNetcdf("CDF"!==t.readChars(3),"should start with CDF");const r=t.readByte();i.notNetcdf(r>2,"unknown version"),this.header=a(t,r),this.buffer=t}get version(){return 1===this.header.version?"classic format":"64-bit offset format"}get recordDimension(){return this.header.recordDimension}get dimensions(){return this.header.dimensions}get globalAttributes(){return this.header.globalAttributes}get variables(){return this.header.variables}getDataVariable(e){var t;return t="string"==typeof e?this.header.variables.find(function(t){return t.name===e}):e,i.notNetcdf(void 0===t,"variable not found"),this.buffer.seek(t.offset),t.record?o.record(this.buffer,t,this.header.recordDimension):o.nonRecord(this.buffer,t)}}},function(e,t,r){"use strict";t.byteLength=function(e){return 3*e.length/4-c(e)},t.toByteArray=function(e){var t,r,n,a,s,l,u=e.length;s=c(e),l=new o(3*u/4-s),n=s>0?u-4:u;var h=0;for(t=0,r=0;t<n;t+=4,r+=3)a=i[e.charCodeAt(t)]<<18|i[e.charCodeAt(t+1)]<<12|i[e.charCodeAt(t+2)]<<6|i[e.charCodeAt(t+3)],l[h++]=a>>16&255,l[h++]=a>>8&255,l[h++]=255&a;2===s?(a=i[e.charCodeAt(t)]<<2|i[e.charCodeAt(t+1)]>>4,l[h++]=255&a):1===s&&(a=i[e.charCodeAt(t)]<<10|i[e.charCodeAt(t+1)]<<4|i[e.charCodeAt(t+2)]>>2,l[h++]=a>>8&255,l[h++]=255&a);return l},t.fromByteArray=function(e){for(var t,r=e.length,i=r%3,o="",a=[],s=0,l=r-i;s<l;s+=16383)a.push(u(e,s,s+16383>l?l:s+16383));1===i?(t=e[r-1],o+=n[t>>2],o+=n[t<<4&63],o+="=="):2===i&&(t=(e[r-2]<<8)+e[r-1],o+=n[t>>10],o+=n[t>>4&63],o+=n[t<<2&63],o+="=");return a.push(o),a.join("")};for(var n=[],i=[],o="undefined"!=typeof Uint8Array?Uint8Array:Array,a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",s=0,l=a.length;s<l;++s)n[s]=a[s],i[a.charCodeAt(s)]=s;function c(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");return"="===e[t-2]?2:"="===e[t-1]?1:0}function u(e,t,r){for(var i,o,a=[],s=t;s<r;s+=3)i=(e[s]<<16)+(e[s+1]<<8)+e[s+2],a.push(n[(o=i)>>18&63]+n[o>>12&63]+n[o>>6&63]+n[63&o]);return a.join("")}i["-".charCodeAt(0)]=62,i["_".charCodeAt(0)]=63},function(e,t,r){"use strict";(function(e){var n=r(7),i=r(9),o=r(10);function a(){return l.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function s(e,t){if(a()<t)throw new RangeError("Invalid typed array length");return l.TYPED_ARRAY_SUPPORT?(e=new Uint8Array(t)).__proto__=l.prototype:(null===e&&(e=new l(t)),e.length=t),e}function l(e,t,r){if(!(l.TYPED_ARRAY_SUPPORT||this instanceof l))return new l(e,t,r);if("number"==typeof e){if("string"==typeof t)throw new Error("If encoding is specified then the first argument must be a string");return h(this,e)}return c(this,e,t,r)}function c(e,t,r,n){if("number"==typeof t)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&t instanceof ArrayBuffer?function(e,t,r,n){if(t.byteLength,r<0||t.byteLength<r)throw new RangeError("'offset' is out of bounds");if(t.byteLength<r+(n||0))throw new RangeError("'length' is out of bounds");t=void 0===r&&void 0===n?new Uint8Array(t):void 0===n?new Uint8Array(t,r):new Uint8Array(t,r,n);l.TYPED_ARRAY_SUPPORT?(e=t).__proto__=l.prototype:e=f(e,t);return e}(e,t,r,n):"string"==typeof t?function(e,t,r){"string"==typeof r&&""!==r||(r="utf8");if(!l.isEncoding(r))throw new TypeError('"encoding" must be a valid string encoding');var n=0|p(t,r),i=(e=s(e,n)).write(t,r);i!==n&&(e=e.slice(0,i));return e}(e,t,r):function(e,t){if(l.isBuffer(t)){var r=0|d(t.length);return 0===(e=s(e,r)).length?e:(t.copy(e,0,0,r),e)}if(t){if("undefined"!=typeof ArrayBuffer&&t.buffer instanceof ArrayBuffer||"length"in t)return"number"!=typeof t.length||(n=t.length)!=n?s(e,0):f(e,t);if("Buffer"===t.type&&o(t.data))return f(e,t.data)}var n;throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(e,t)}function u(e){if("number"!=typeof e)throw new TypeError('"size" argument must be a number');if(e<0)throw new RangeError('"size" argument must not be negative')}function h(e,t){if(u(t),e=s(e,t<0?0:0|d(t)),!l.TYPED_ARRAY_SUPPORT)for(var r=0;r<t;++r)e[r]=0;return e}function f(e,t){var r=t.length<0?0:0|d(t.length);e=s(e,r);for(var n=0;n<r;n+=1)e[n]=255&t[n];return e}function d(e){if(e>=a())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+a().toString(16)+" bytes");return 0|e}function p(e,t){if(l.isBuffer(e))return e.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(e)||e instanceof ArrayBuffer))return e.byteLength;"string"!=typeof e&&(e=""+e);var r=e.length;if(0===r)return 0;for(var n=!1;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":case void 0:return V(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return U(e).length;default:if(n)return V(e).length;t=(""+t).toLowerCase(),n=!0}}function m(e,t,r){var n=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if((r>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return T(this,t,r);case"utf8":case"utf-8":return S(this,t,r);case"ascii":return _(this,t,r);case"latin1":case"binary":return z(this,t,r);case"base64":return $(this,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return L(this,t,r);default:if(n)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}function v(e,t,r){var n=e[t];e[t]=e[r],e[r]=n}function g(e,t,r,n,i){if(0===e.length)return-1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),r=+r,isNaN(r)&&(r=i?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(i)return-1;r=e.length-1}else if(r<0){if(!i)return-1;r=0}if("string"==typeof t&&(t=l.from(t,n)),l.isBuffer(t))return 0===t.length?-1:y(e,t,r,n,i);if("number"==typeof t)return t&=255,l.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):y(e,[t],r,n,i);throw new TypeError("val must be string, number or Buffer")}function y(e,t,r,n,i){var o,a=1,s=e.length,l=t.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(e.length<2||t.length<2)return-1;a=2,s/=2,l/=2,r/=2}function c(e,t){return 1===a?e[t]:e.readUInt16BE(t*a)}if(i){var u=-1;for(o=r;o<s;o++)if(c(e,o)===c(t,-1===u?0:o-u)){if(-1===u&&(u=o),o-u+1===l)return u*a}else-1!==u&&(o-=o-u),u=-1}else for(r+l>s&&(r=s-l),o=r;o>=0;o--){for(var h=!0,f=0;f<l;f++)if(c(e,o+f)!==c(t,f)){h=!1;break}if(h)return o}return-1}function b(e,t,r,n){r=Number(r)||0;var i=e.length-r;n?(n=Number(n))>i&&(n=i):n=i;var o=t.length;if(o%2!=0)throw new TypeError("Invalid hex string");n>o/2&&(n=o/2);for(var a=0;a<n;++a){var s=parseInt(t.substr(2*a,2),16);if(isNaN(s))return a;e[r+a]=s}return a}function x(e,t,r,n){return j(V(t,e.length-r),e,r,n)}function w(e,t,r,n){return j(function(e){for(var t=[],r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}(t),e,r,n)}function D(e,t,r,n){return w(e,t,r,n)}function C(e,t,r,n){return j(U(t),e,r,n)}function A(e,t,r,n){return j(function(e,t){for(var r,n,i,o=[],a=0;a<e.length&&!((t-=2)<0);++a)r=e.charCodeAt(a),n=r>>8,i=r%256,o.push(i),o.push(n);return o}(t,e.length-r),e,r,n)}function $(e,t,r){return 0===t&&r===e.length?n.fromByteArray(e):n.fromByteArray(e.slice(t,r))}function S(e,t,r){r=Math.min(e.length,r);for(var n=[],i=t;i<r;){var o,a,s,l,c=e[i],u=null,h=c>239?4:c>223?3:c>191?2:1;if(i+h<=r)switch(h){case 1:c<128&&(u=c);break;case 2:128==(192&(o=e[i+1]))&&(l=(31&c)<<6|63&o)>127&&(u=l);break;case 3:o=e[i+1],a=e[i+2],128==(192&o)&&128==(192&a)&&(l=(15&c)<<12|(63&o)<<6|63&a)>2047&&(l<55296||l>57343)&&(u=l);break;case 4:o=e[i+1],a=e[i+2],s=e[i+3],128==(192&o)&&128==(192&a)&&128==(192&s)&&(l=(15&c)<<18|(63&o)<<12|(63&a)<<6|63&s)>65535&&l<1114112&&(u=l)}null===u?(u=65533,h=1):u>65535&&(u-=65536,n.push(u>>>10&1023|55296),u=56320|1023&u),n.push(u),i+=h}return function(e){var t=e.length;if(t<=M)return String.fromCharCode.apply(String,e);var r="",n=0;for(;n<t;)r+=String.fromCharCode.apply(String,e.slice(n,n+=M));return r}(n)}t.Buffer=l,t.SlowBuffer=function(e){+e!=e&&(e=0);return l.alloc(+e)},t.INSPECT_MAX_BYTES=50,l.TYPED_ARRAY_SUPPORT=void 0!==e.TYPED_ARRAY_SUPPORT?e.TYPED_ARRAY_SUPPORT:function(){try{var e=new Uint8Array(1);return e.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===e.foo()&&"function"==typeof e.subarray&&0===e.subarray(1,1).byteLength}catch(e){return!1}}(),t.kMaxLength=a(),l.poolSize=8192,l._augment=function(e){return e.__proto__=l.prototype,e},l.from=function(e,t,r){return c(null,e,t,r)},l.TYPED_ARRAY_SUPPORT&&(l.prototype.__proto__=Uint8Array.prototype,l.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&l[Symbol.species]===l&&Object.defineProperty(l,Symbol.species,{value:null,configurable:!0})),l.alloc=function(e,t,r){return function(e,t,r,n){return u(t),t<=0?s(e,t):void 0!==r?"string"==typeof n?s(e,t).fill(r,n):s(e,t).fill(r):s(e,t)}(null,e,t,r)},l.allocUnsafe=function(e){return h(null,e)},l.allocUnsafeSlow=function(e){return h(null,e)},l.isBuffer=function(e){return!(null==e||!e._isBuffer)},l.compare=function(e,t){if(!l.isBuffer(e)||!l.isBuffer(t))throw new TypeError("Arguments must be Buffers");if(e===t)return 0;for(var r=e.length,n=t.length,i=0,o=Math.min(r,n);i<o;++i)if(e[i]!==t[i]){r=e[i],n=t[i];break}return r<n?-1:n<r?1:0},l.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},l.concat=function(e,t){if(!o(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return l.alloc(0);var r;if(void 0===t)for(t=0,r=0;r<e.length;++r)t+=e[r].length;var n=l.allocUnsafe(t),i=0;for(r=0;r<e.length;++r){var a=e[r];if(!l.isBuffer(a))throw new TypeError('"list" argument must be an Array of Buffers');a.copy(n,i),i+=a.length}return n},l.byteLength=p,l.prototype._isBuffer=!0,l.prototype.swap16=function(){var e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)v(this,t,t+1);return this},l.prototype.swap32=function(){var e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)v(this,t,t+3),v(this,t+1,t+2);return this},l.prototype.swap64=function(){var e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)v(this,t,t+7),v(this,t+1,t+6),v(this,t+2,t+5),v(this,t+3,t+4);return this},l.prototype.toString=function(){var e=0|this.length;return 0===e?"":0===arguments.length?S(this,0,e):m.apply(this,arguments)},l.prototype.equals=function(e){if(!l.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===l.compare(this,e)},l.prototype.inspect=function(){var e="",r=t.INSPECT_MAX_BYTES;return this.length>0&&(e=this.toString("hex",0,r).match(/.{2}/g).join(" "),this.length>r&&(e+=" ... ")),"<Buffer "+e+">"},l.prototype.compare=function(e,t,r,n,i){if(!l.isBuffer(e))throw new TypeError("Argument must be a Buffer");if(void 0===t&&(t=0),void 0===r&&(r=e?e.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),t<0||r>e.length||n<0||i>this.length)throw new RangeError("out of range index");if(n>=i&&t>=r)return 0;if(n>=i)return-1;if(t>=r)return 1;if(this===e)return 0;for(var o=(i>>>=0)-(n>>>=0),a=(r>>>=0)-(t>>>=0),s=Math.min(o,a),c=this.slice(n,i),u=e.slice(t,r),h=0;h<s;++h)if(c[h]!==u[h]){o=c[h],a=u[h];break}return o<a?-1:a<o?1:0},l.prototype.includes=function(e,t,r){return-1!==this.indexOf(e,t,r)},l.prototype.indexOf=function(e,t,r){return g(this,e,t,r,!0)},l.prototype.lastIndexOf=function(e,t,r){return g(this,e,t,r,!1)},l.prototype.write=function(e,t,r,n){if(void 0===t)n="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)n=t,r=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t|=0,isFinite(r)?(r|=0,void 0===n&&(n="utf8")):(n=r,r=void 0)}var i=this.length-t;if((void 0===r||r>i)&&(r=i),e.length>0&&(r<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var o=!1;;)switch(n){case"hex":return b(this,e,t,r);case"utf8":case"utf-8":return x(this,e,t,r);case"ascii":return w(this,e,t,r);case"latin1":case"binary":return D(this,e,t,r);case"base64":return C(this,e,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return A(this,e,t,r);default:if(o)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),o=!0}},l.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var M=4096;function _(e,t,r){var n="";r=Math.min(e.length,r);for(var i=t;i<r;++i)n+=String.fromCharCode(127&e[i]);return n}function z(e,t,r){var n="";r=Math.min(e.length,r);for(var i=t;i<r;++i)n+=String.fromCharCode(e[i]);return n}function T(e,t,r){var n=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>n)&&(r=n);for(var i="",o=t;o<r;++o)i+=B(e[o]);return i}function L(e,t,r){for(var n=e.slice(t,r),i="",o=0;o<n.length;o+=2)i+=String.fromCharCode(n[o]+256*n[o+1]);return i}function E(e,t,r){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>r)throw new RangeError("Trying to access beyond buffer length")}function F(e,t,r,n,i,o){if(!l.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<o)throw new RangeError('"value" argument is out of bounds');if(r+n>e.length)throw new RangeError("Index out of range")}function k(e,t,r,n){t<0&&(t=65535+t+1);for(var i=0,o=Math.min(e.length-r,2);i<o;++i)e[r+i]=(t&255<<8*(n?i:1-i))>>>8*(n?i:1-i)}function I(e,t,r,n){t<0&&(t=4294967295+t+1);for(var i=0,o=Math.min(e.length-r,4);i<o;++i)e[r+i]=t>>>8*(n?i:3-i)&255}function P(e,t,r,n,i,o){if(r+n>e.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function O(e,t,r,n,o){return o||P(e,0,r,4),i.write(e,t,r,n,23,4),r+4}function R(e,t,r,n,o){return o||P(e,0,r,8),i.write(e,t,r,n,52,8),r+8}l.prototype.slice=function(e,t){var r,n=this.length;if((e=~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),(t=void 0===t?n:~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),t<e&&(t=e),l.TYPED_ARRAY_SUPPORT)(r=this.subarray(e,t)).__proto__=l.prototype;else{var i=t-e;r=new l(i,void 0);for(var o=0;o<i;++o)r[o]=this[o+e]}return r},l.prototype.readUIntLE=function(e,t,r){e|=0,t|=0,r||E(e,t,this.length);for(var n=this[e],i=1,o=0;++o<t&&(i*=256);)n+=this[e+o]*i;return n},l.prototype.readUIntBE=function(e,t,r){e|=0,t|=0,r||E(e,t,this.length);for(var n=this[e+--t],i=1;t>0&&(i*=256);)n+=this[e+--t]*i;return n},l.prototype.readUInt8=function(e,t){return t||E(e,1,this.length),this[e]},l.prototype.readUInt16LE=function(e,t){return t||E(e,2,this.length),this[e]|this[e+1]<<8},l.prototype.readUInt16BE=function(e,t){return t||E(e,2,this.length),this[e]<<8|this[e+1]},l.prototype.readUInt32LE=function(e,t){return t||E(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},l.prototype.readUInt32BE=function(e,t){return t||E(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},l.prototype.readIntLE=function(e,t,r){e|=0,t|=0,r||E(e,t,this.length);for(var n=this[e],i=1,o=0;++o<t&&(i*=256);)n+=this[e+o]*i;return n>=(i*=128)&&(n-=Math.pow(2,8*t)),n},l.prototype.readIntBE=function(e,t,r){e|=0,t|=0,r||E(e,t,this.length);for(var n=t,i=1,o=this[e+--n];n>0&&(i*=256);)o+=this[e+--n]*i;return o>=(i*=128)&&(o-=Math.pow(2,8*t)),o},l.prototype.readInt8=function(e,t){return t||E(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},l.prototype.readInt16LE=function(e,t){t||E(e,2,this.length);var r=this[e]|this[e+1]<<8;return 32768&r?4294901760|r:r},l.prototype.readInt16BE=function(e,t){t||E(e,2,this.length);var r=this[e+1]|this[e]<<8;return 32768&r?4294901760|r:r},l.prototype.readInt32LE=function(e,t){return t||E(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},l.prototype.readInt32BE=function(e,t){return t||E(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},l.prototype.readFloatLE=function(e,t){return t||E(e,4,this.length),i.read(this,e,!0,23,4)},l.prototype.readFloatBE=function(e,t){return t||E(e,4,this.length),i.read(this,e,!1,23,4)},l.prototype.readDoubleLE=function(e,t){return t||E(e,8,this.length),i.read(this,e,!0,52,8)},l.prototype.readDoubleBE=function(e,t){return t||E(e,8,this.length),i.read(this,e,!1,52,8)},l.prototype.writeUIntLE=function(e,t,r,n){(e=+e,t|=0,r|=0,n)||F(this,e,t,r,Math.pow(2,8*r)-1,0);var i=1,o=0;for(this[t]=255&e;++o<r&&(i*=256);)this[t+o]=e/i&255;return t+r},l.prototype.writeUIntBE=function(e,t,r,n){(e=+e,t|=0,r|=0,n)||F(this,e,t,r,Math.pow(2,8*r)-1,0);var i=r-1,o=1;for(this[t+i]=255&e;--i>=0&&(o*=256);)this[t+i]=e/o&255;return t+r},l.prototype.writeUInt8=function(e,t,r){return e=+e,t|=0,r||F(this,e,t,1,255,0),l.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),this[t]=255&e,t+1},l.prototype.writeUInt16LE=function(e,t,r){return e=+e,t|=0,r||F(this,e,t,2,65535,0),l.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8):k(this,e,t,!0),t+2},l.prototype.writeUInt16BE=function(e,t,r){return e=+e,t|=0,r||F(this,e,t,2,65535,0),l.TYPED_ARRAY_SUPPORT?(this[t]=e>>>8,this[t+1]=255&e):k(this,e,t,!1),t+2},l.prototype.writeUInt32LE=function(e,t,r){return e=+e,t|=0,r||F(this,e,t,4,4294967295,0),l.TYPED_ARRAY_SUPPORT?(this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e):I(this,e,t,!0),t+4},l.prototype.writeUInt32BE=function(e,t,r){return e=+e,t|=0,r||F(this,e,t,4,4294967295,0),l.TYPED_ARRAY_SUPPORT?(this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e):I(this,e,t,!1),t+4},l.prototype.writeIntLE=function(e,t,r,n){if(e=+e,t|=0,!n){var i=Math.pow(2,8*r-1);F(this,e,t,r,i-1,-i)}var o=0,a=1,s=0;for(this[t]=255&e;++o<r&&(a*=256);)e<0&&0===s&&0!==this[t+o-1]&&(s=1),this[t+o]=(e/a>>0)-s&255;return t+r},l.prototype.writeIntBE=function(e,t,r,n){if(e=+e,t|=0,!n){var i=Math.pow(2,8*r-1);F(this,e,t,r,i-1,-i)}var o=r-1,a=1,s=0;for(this[t+o]=255&e;--o>=0&&(a*=256);)e<0&&0===s&&0!==this[t+o+1]&&(s=1),this[t+o]=(e/a>>0)-s&255;return t+r},l.prototype.writeInt8=function(e,t,r){return e=+e,t|=0,r||F(this,e,t,1,127,-128),l.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),e<0&&(e=255+e+1),this[t]=255&e,t+1},l.prototype.writeInt16LE=function(e,t,r){return e=+e,t|=0,r||F(this,e,t,2,32767,-32768),l.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8):k(this,e,t,!0),t+2},l.prototype.writeInt16BE=function(e,t,r){return e=+e,t|=0,r||F(this,e,t,2,32767,-32768),l.TYPED_ARRAY_SUPPORT?(this[t]=e>>>8,this[t+1]=255&e):k(this,e,t,!1),t+2},l.prototype.writeInt32LE=function(e,t,r){return e=+e,t|=0,r||F(this,e,t,4,2147483647,-2147483648),l.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24):I(this,e,t,!0),t+4},l.prototype.writeInt32BE=function(e,t,r){return e=+e,t|=0,r||F(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),l.TYPED_ARRAY_SUPPORT?(this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e):I(this,e,t,!1),t+4},l.prototype.writeFloatLE=function(e,t,r){return O(this,e,t,!0,r)},l.prototype.writeFloatBE=function(e,t,r){return O(this,e,t,!1,r)},l.prototype.writeDoubleLE=function(e,t,r){return R(this,e,t,!0,r)},l.prototype.writeDoubleBE=function(e,t,r){return R(this,e,t,!1,r)},l.prototype.copy=function(e,t,r,n){if(r||(r=0),n||0===n||(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<r&&(n=r),n===r)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("sourceStart out of bounds");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-r&&(n=e.length-t+r);var i,o=n-r;if(this===e&&r<t&&t<n)for(i=o-1;i>=0;--i)e[i+t]=this[i+r];else if(o<1e3||!l.TYPED_ARRAY_SUPPORT)for(i=0;i<o;++i)e[i+t]=this[i+r];else Uint8Array.prototype.set.call(e,this.subarray(r,r+o),t);return o},l.prototype.fill=function(e,t,r,n){if("string"==typeof e){if("string"==typeof t?(n=t,t=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),1===e.length){var i=e.charCodeAt(0);i<256&&(e=i)}if(void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!l.isEncoding(n))throw new TypeError("Unknown encoding: "+n)}else"number"==typeof e&&(e&=255);if(t<0||this.length<t||this.length<r)throw new RangeError("Out of range index");if(r<=t)return this;var o;if(t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0),"number"==typeof e)for(o=t;o<r;++o)this[o]=e;else{var a=l.isBuffer(e)?e:V(new l(e,n).toString()),s=a.length;for(o=0;o<r-t;++o)this[o+t]=a[o%s]}return this};var N=/[^+\/0-9A-Za-z-_]/g;function B(e){return e<16?"0"+e.toString(16):e.toString(16)}function V(e,t){var r;t=t||1/0;for(var n=e.length,i=null,o=[],a=0;a<n;++a){if((r=e.charCodeAt(a))>55295&&r<57344){if(!i){if(r>56319){(t-=3)>-1&&o.push(239,191,189);continue}if(a+1===n){(t-=3)>-1&&o.push(239,191,189);continue}i=r;continue}if(r<56320){(t-=3)>-1&&o.push(239,191,189),i=r;continue}r=65536+(i-55296<<10|r-56320)}else i&&(t-=3)>-1&&o.push(239,191,189);if(i=null,r<128){if((t-=1)<0)break;o.push(r)}else if(r<2048){if((t-=2)<0)break;o.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;o.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;o.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return o}function U(e){return n.toByteArray(function(e){if((e=function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}(e).replace(N,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function j(e,t,r,n){for(var i=0;i<n&&!(i+r>=t.length||i>=e.length);++i)t[i+r]=e[i];return i}}).call(t,r(2))},function(e,t){t.read=function(e,t,r,n,i){var o,a,s=8*i-n-1,l=(1<<s)-1,c=l>>1,u=-7,h=r?i-1:0,f=r?-1:1,d=e[t+h];for(h+=f,o=d&(1<<-u)-1,d>>=-u,u+=s;u>0;o=256*o+e[t+h],h+=f,u-=8);for(a=o&(1<<-u)-1,o>>=-u,u+=n;u>0;a=256*a+e[t+h],h+=f,u-=8);if(0===o)o=1-c;else{if(o===l)return a?NaN:1/0*(d?-1:1);a+=Math.pow(2,n),o-=c}return(d?-1:1)*a*Math.pow(2,o-n)},t.write=function(e,t,r,n,i,o){var a,s,l,c=8*o-i-1,u=(1<<c)-1,h=u>>1,f=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,d=n?0:o-1,p=n?1:-1,m=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(s=isNaN(t)?1:0,a=u):(a=Math.floor(Math.log(t)/Math.LN2),t*(l=Math.pow(2,-a))<1&&(a--,l*=2),(t+=a+h>=1?f/l:f*Math.pow(2,1-h))*l>=2&&(a++,l/=2),a+h>=u?(s=0,a=u):a+h>=1?(s=(t*l-1)*Math.pow(2,i),a+=h):(s=t*Math.pow(2,h-1)*Math.pow(2,i),a=0));i>=8;e[r+d]=255&s,d+=p,s/=256,i-=8);for(a=a<<i|s,c+=i;c>0;e[r+d]=255&a,d+=p,a/=256,c-=8);e[r+d-p]|=128*m}},function(e,t){var r={}.toString;e.exports=Array.isArray||function(e){return"[object Array]"==r.call(e)}},function(e,t,r){(function(e,n){var i;!function(o){var a="object"==typeof t&&t,s=("object"==typeof e&&e&&e.exports,"object"==typeof n&&n);s.global!==s&&s.window;var l,c,u,h=String.fromCharCode;function f(e){for(var t,r,n=[],i=0,o=e.length;i<o;)(t=e.charCodeAt(i++))>=55296&&t<=56319&&i<o?56320==(64512&(r=e.charCodeAt(i++)))?n.push(((1023&t)<<10)+(1023&r)+65536):(n.push(t),i--):n.push(t);return n}function d(e){if(e>=55296&&e<=57343)throw Error("Lone surrogate U+"+e.toString(16).toUpperCase()+" is not a scalar value")}function p(e,t){return h(e>>t&63|128)}function m(e){if(0==(4294967168&e))return h(e);var t="";return 0==(4294965248&e)?t=h(e>>6&31|192):0==(4294901760&e)?(d(e),t=h(e>>12&15|224),t+=p(e,6)):0==(4292870144&e)&&(t=h(e>>18&7|240),t+=p(e,12),t+=p(e,6)),t+=h(63&e|128)}function v(){if(u>=c)throw Error("Invalid byte index");var e=255&l[u];if(u++,128==(192&e))return 63&e;throw Error("Invalid continuation byte")}function g(){var e,t;if(u>c)throw Error("Invalid byte index");if(u==c)return!1;if(e=255&l[u],u++,0==(128&e))return e;if(192==(224&e)){if((t=(31&e)<<6|v())>=128)return t;throw Error("Invalid continuation byte")}if(224==(240&e)){if((t=(15&e)<<12|v()<<6|v())>=2048)return d(t),t;throw Error("Invalid continuation byte")}if(240==(248&e)&&(t=(7&e)<<18|v()<<12|v()<<6|v())>=65536&&t<=1114111)return t;throw Error("Invalid UTF-8 detected")}var y={version:"2.1.2",encode:function(e){for(var t=f(e),r=t.length,n=-1,i="";++n<r;)i+=m(t[n]);return i},decode:function(e){l=f(e),c=l.length,u=0;for(var t,r=[];!1!==(t=g());)r.push(t);return function(e){for(var t,r=e.length,n=-1,i="";++n<r;)(t=e[n])>65535&&(i+=h((t-=65536)>>>10&1023|55296),t=56320|1023&t),i+=h(t);return i}(r)}};void 0===(i=function(){return y}.call(t,r,t,e))||(e.exports=i)}()}).call(t,r(12)(e),r(2))},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}}])}),$3Dmol=function(e){return __webpack_provided_window_dot_$3Dmol||{}}(window), true&&"object"==typeof module.exports&&(module.exports=$3Dmol),$3Dmol.notrack||$.get("https://3dmol.csb.pitt.edu/track/report.cgi"),String.prototype.startsWith||(String.prototype.startsWith=function(e){return 0===this.lastIndexOf(e,0)}),String.prototype.endsWith||(String.prototype.endsWith=function(e){return-1!==this.indexOf(e,this.length-e.length)}),$.ajaxTransport("+binary",function(e,t,r){if(window.FormData&&(e.dataType&&"binary"==e.dataType||e.data&&(window.ArrayBuffer&&e.data instanceof ArrayBuffer||window.Blob&&e.data instanceof Blob)))return{send:function(t,r){var n=new XMLHttpRequest,i=e.url,o=e.type,a=e.async||!0,s=e.responseType||"blob",l=e.data||null,c=e.username||null,u=e.password||null,h=function(){var t={};t[e.dataType]=n.response,r(n.status,n.statusText,t,n.getAllResponseHeaders())};for(var f in n.addEventListener("load",h),n.addEventListener("error",h),n.addEventListener("abort",h),n.open(o,i,a,c,u),t)n.setRequestHeader(f,t[f]);n.responseType=s,n.send(l)},abort:function(){r.abort()}}}),$3Dmol.createViewer=function(e,t){if("string"===$.type(e)&&(e=$("#"+e)),e){t=t||{};try{return new $3Dmol.GLViewer(e,t)}catch(e){throw"error creating viewer: "+e}return null}},$3Dmol.createViewerGrid=function(e,t,r){if("string"===$.type(e)&&(e=$("#"+e)),e){t=t||{},r=r||{};var n=[],i=document.createElement("canvas");r.rows=t.rows,r.cols=t.cols,r.control_all=null!=t.control_all&&t.control_all,$(e).append($(i));try{for(var o=0;o<t.rows;o++){for(var a=[],s=0;s<t.cols;s++){r.row=o,r.col=s,r.canvas=i,r.viewers=n,r.control_all=t.control_all;var l=$3Dmol.createViewer(e,r);a.push(l)}n.unshift(a)}}catch(e){throw"error creating viewer grid: "+e}return n}},$3Dmol.viewers={},$3Dmol.getbin=function(e,t,r,n){var i=new Promise(function(t,i){r=null==r?"GET":r,$.ajax({url:e,dataType:"binary",method:r,data:n,responseType:"arraybuffer",processData:!1}).done(function(e){t(e)}).fail(function(e,t){console.log(t),i()})});return t?i.then(t):i},$3Dmol.base64ToArray=function(e){for(var t=window.atob(e),r=t.length,n=new Uint8Array(r),i=0;i<r;i++)n[i]=t.charCodeAt(i);return n},$3Dmol.download=function(e,t,r,n){var i="",o="",a="",s="",l=null,c=t.addModel();if("mmtf:"===e.substr(0,5))o=r&&r.pdbUri?r.pdbUri:"https://mmtf.rcsb.org/v1.0/full/",e=e.substr(5).toUpperCase(),s=o+e,r&&void 0===r.noComputeSecondaryStructure&&(r.noComputeSecondaryStructure=!0),l=new Promise(function(e){$3Dmol.getbin(s).then(function(n){c.addMolData(n,"mmtf",r),t.zoomTo(),t.render(),e(c)})});else{if("pdb:"===e.substr(0,4)){if(i="mmtf",r&&r.format&&(i=r.format),r&&void 0===r.noComputeSecondaryStructure&&(r.noComputeSecondaryStructure=!0),!(e=e.substr(4).toUpperCase()).match(/^[1-9][A-Za-z0-9]{3}$/))return void alert("Wrong PDB ID");"mmtf"==i?(a=r&&r.mmtfUri?r.mmtfUri:"https://mmtf.rcsb.org/v1.0/full/",s=a+e.toUpperCase()):(o=r&&r.pdbUri?r.pdbUri:"https://files.rcsb.org/view/",s=o+e+"."+i)}else if("cid:"==e.substr(0,4)){if(i="sdf",!(e=e.substr(4)).match(/^[0-9]+$/))return void alert("Wrong Compound ID");s="https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/"+e+"/SDF?record_type=3d"}else"url:"==e.substr(0,4)&&(s=e.substr(4),i=s);var u=function(e){c.addMolData(e,i,r),t.zoomTo(),t.render()};l=new Promise(function(e){"mmtf"==i?$3Dmol.getbin(s).then(function(t){u(t),e(c)}):$.get(s,function(t){u(t),e(c)}).fail(function(e){console.log("fetch of "+s+" failed: "+e.statusText)})})}return n?(l.then(function(e){n(e)}),c):l},$3Dmol.SurfaceType={VDW:1,MS:2,SAS:3,SES:4},$3Dmol.mergeGeos=function(e,t){var r=t.geometry;void 0!==r&&e.geometryGroups.push(r.geometryGroups[0])},$3Dmol.multiLineString=function(e){return e.toString().replace(/^[^\/]+\/\*!?/,"").replace(/\*\/[^\/]+$/,"")},$3Dmol.syncSurface=!1,(window.navigator.userAgent.indexOf("MSIE ")>=0||window.navigator.userAgent.indexOf("Trident/")>=0)&&($3Dmol.syncSurface=!0),$3Dmol.specStringToObject=function(e){if("object"==typeof e)return e;if(void 0===e||null==e)return e;var t=function(e){return $.isNumeric(e)?Math.floor(parseFloat(e))==parseInt(e)?parseFloat(e):e.indexOf(".")>=0?parseFloat(e):parseInt(e):"true"===e||"false"!==e&&e},r={};if("all"===(e=e.replace(/%7E/,"~")))return r;for(var n=e.split(";"),i=0;i<n.length;i++){var o=n[i].split(":"),a=o[0],s={},l=o[1];if(l)if(-1!==(l=l.replace(/~/g,"=")).indexOf("="))for(var c=l.split(","),u=0;u<c.length;u++){var h=c[u].split("=",2);s[h[0]]=t(h[1])}else s=-1!==l.indexOf(",")?l.split(","):t(l);r[a]=s}return r},$3Dmol.getExtent=function(e,t){var r,n,i,o,a,s,l,c,u,h,f=!t;if(r=n=i=9999,o=a=s=-9999,l=c=u=h=0,0===e.length)return[[0,0,0],[0,0,0],[0,0,0]];for(var d=0;d<e.length;d++){var p=e[d];if(void 0!==p&&isFinite(p.x)&&isFinite(p.y)&&isFinite(p.z)&&(h++,l+=p.x,c+=p.y,u+=p.z,r=r<p.x?r:p.x,n=n<p.y?n:p.y,i=i<p.z?i:p.z,o=o>p.x?o:p.x,a=a>p.y?a:p.y,s=s>p.z?s:p.z,p.symmetries&&f))for(var m=0;m<p.symmetries.length;m++)h++,l+=p.symmetries[m].x,c+=p.symmetries[m].y,u+=p.symmetries[m].z,r=r<p.symmetries[m].x?r:p.symmetries[m].x,n=n<p.symmetries[m].y?n:p.symmetries[m].y,i=i<p.symmetries[m].z?i:p.symmetries[m].z,o=o>p.symmetries[m].x?o:p.symmetries[m].x,a=a>p.symmetries[m].y?a:p.symmetries[m].y,s=s>p.symmetries[m].z?s:p.symmetries[m].z}return[[r,n,i],[o,a,s],[l/h,c/h,u/h]]},$3Dmol.getAtomProperty=function(e,t){var r=null;return e.properties&&void 0!==e.properties[t]?r=e.properties[t]:void 0!==e[t]&&(r=e[t]),r},$3Dmol.getPropertyRange=function(e,t){for(var r=Number.POSITIVE_INFINITY,n=Number.NEGATIVE_INFINITY,i=0,o=e.length;i<o;i++){var a=e[i],s=$3Dmol.getAtomProperty(a,t);null!=s&&(s<r&&(r=s),s>n&&(n=s))}return isFinite(r)||isFinite(n)?isFinite(r)?isFinite(n)||(n=r):r=n:r=n=0,[r,n]}, true&&!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function(){return $3Dmol}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)),$3Dmol.createStereoViewer=function(e){var t=this;if("string"===$.type(e)&&(e=$("#"+e)),e){var r=$3Dmol.createViewerGrid(e,{rows:1,cols:2,control_all:!0});this.glviewer1=r[0][0],this.glviewer2=r[0][1],this.glviewer1.setAutoEyeSeparation(!1),this.glviewer2.setAutoEyeSeparation(!0),this.glviewer1.linkViewer(this.glviewer2),this.glviewer2.linkViewer(this.glviewer1);for(var n=Object.getOwnPropertyNames(this.glviewer1).filter(function(e){return"function"==typeof t.glviewer1[e]}),i=0;i<n.length;i++)this[n[i]]=function(e){return function(){var t=this.glviewer1[e].apply(this.glviewer1,arguments),r=this.glviewer2[e].apply(this.glviewer2,arguments);return[t,r]}}(n[i]);this.setCoordinates=function(e,t,r){for(var n=0;n<e.length;n++)e[n].setCoordinates(t,r)},this.surfacesFinished=function(){return this.glviewer1.surfacesFinished()&&this.glviewer2.surfacesFinished()},this.isAnimated=function(){return this.glviewer1.isAnimated()||this.glviewer2.isAnimated()},this.render=function(e){this.glviewer1.render(),this.glviewer2.render(),e&&e(this)},this.getCanvas=function(){return this.glviewer1.getCanvas()}}};var $3Dmol=$3Dmol||{};$3Dmol.Math={clamp:function(e,t,r){return Math.min(Math.max(e,t),r)},degToRad:function(){var e=Math.PI/180;return function(t){return t*e}}()},$3Dmol.Quaternion=function(e,t,r,n){this.x=e||0,this.y=t||0,this.z=r||0,this.w=void 0!==n?n:1},$3Dmol.Quaternion.prototype={constructor:$3Dmol.Quaternion,set:function(e,t,r,n){return this.x=e,this.y=t,this.z=r,this.w=n,this},copy:function(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this},conjugate:function(){return this.x*=-1,this.y*=-1,this.z*=-1,this},inverse:function(){return this.conjugate().normalize()},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)},lengthxyz:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)},normalize:function(){var e=this.length();return 0===e?(this.x=0,this.y=0,this.z=0,this.w=1):(e=1/e,this.x*=e,this.y*=e,this.z*=e,this.w*=e),this},multiply:function(e){return this.multiplyQuaternions(this,e)},multiplyScalar:function(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this},multiplyQuaternions:function(e,t){var r=e.x,n=e.y,i=e.z,o=e.w,a=t.x,s=t.y,l=t.z,c=t.w;return this.x=r*c+o*a+n*l-i*s,this.y=n*c+o*s+i*a-r*l,this.z=i*c+o*l+r*s-n*a,this.w=o*c-r*a-n*s-i*l,this},sub:function(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this},clone:function(){return new $3Dmol.Quaternion(this.x,this.y,this.z,this.w)},setFromEuler:function(e){var t=Math.cos(e.x/2),r=Math.cos(e.y/2),n=Math.cos(e.z/2),i=Math.sin(e.x/2),o=Math.sin(e.y/2),a=Math.sin(e.z/2);return this.x=i*r*n+t*o*a,this.y=t*o*n-i*r*a,this.z=t*r*a+i*o*n,this.w=t*r*n-i*o*a,this}},$3Dmol.Vector2=function(e,t){this.x=e||0,this.y=t||0},$3Dmol.Vector2.prototype={constructor:$3Dmol.Vector2,set:function(e,t){return this.x=e,this.y=t,this},subVectors:function(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this},copy:function(e){return this.x=e.x,this.y=e.y,this},clone:function(){return new $3Dmol.Vector2(this.x,this.y)}},$3Dmol.Vector3=function(e,t,r){this.x=e||0,this.y=t||0,this.z=r||0},$3Dmol.Vector3.prototype={constructor:$3Dmol.Vector3,set:function(e,t,r){return this.x=e,this.y=t,this.z=r,this},copy:function(e){return this.x=e.x,this.y=e.y,this.z=e.z,this},add:function(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this},addVectors:function(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this},sub:function(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this},subVectors:function(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this},multiplyScalar:function(e){return this.x*=e,this.y*=e,this.z*=e,this},divideScalar:function(e){return 0!==e?(this.x/=e,this.y/=e,this.z/=e):(this.x=0,this.y=0,this.z=0),this},max:function(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this},min:function(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this},distanceTo:function(e){return Math.sqrt(this.distanceToSquared(e))},distanceToSquared:function(e){var t=this.x-e.x,r=this.y-e.y,n=this.z-e.z;return t*t+r*r+n*n},applyMatrix4:function(e){var t=this.x,r=this.y,n=this.z,i=e.elements;return this.x=i[0]*t+i[4]*r+i[8]*n+i[12],this.y=i[1]*t+i[5]*r+i[9]*n+i[13],this.z=i[2]*t+i[6]*r+i[10]*n+i[14],this},applyProjection:function(e){var t=this.x,r=this.y,n=this.z,i=e.elements,o=i[3]*t+i[7]*r+i[11]*n+i[15];return this.x=(i[0]*t+i[4]*r+i[8]*n+i[12])/o,this.y=(i[1]*t+i[5]*r+i[9]*n+i[13])/o,this.z=(i[2]*t+i[6]*r+i[10]*n+i[14])/o,this},applyQuaternion:function(e){var t=this.x,r=this.y,n=this.z,i=e.x,o=e.y,a=e.z,s=e.w,l={};l.x=2*(r*a-n*o),l.y=2*(n*i-t*a),l.z=2*(t*o-r*i);var c={};return c.x=l.y*a-l.z*o,c.y=l.z*i-l.x*a,c.z=l.x*o-l.y*i,this.x=t+s*l.x+c.x,this.y=r+s*l.y+c.y,this.z=n+s*l.z+c.z,this},negate:function(){return this.multiplyScalar(-1)},dot:function(e){return this.x*e.x+this.y*e.y+this.z*e.z},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z},normalize:function(){return this.divideScalar(this.length())},cross:function(e){var t=this.x,r=this.y,n=this.z;return this.x=r*e.z-n*e.y,this.y=n*e.x-t*e.z,this.z=t*e.y-r*e.x,this},crossVectors:function(e,t){return this.x=e.y*t.z-e.z*t.y,this.y=e.z*t.x-e.x*t.z,this.z=e.x*t.y-e.y*t.x,this},getPositionFromMatrix:function(e){return this.x=e.elements[12],this.y=e.elements[13],this.z=e.elements[14],this},setEulerFromRotationMatrix:function(e,t){var r=e.elements,n=r[0],i=r[4],o=r[8],a=r[5],s=r[9],l=r[6],c=r[10];return void 0===t||"XYZ"===t?(this.y=Math.asin($3Dmol.Math.clamp(o,-1,1)),Math.abs(o)<.99999?(this.x=Math.atan2(-s,c),this.z=Math.atan2(-i,n)):(this.x=Math.atan2(l,a),this.z=0)):console.error("Error with vector's setEulerFromRotationMatrix: Unknown order: "+t),this},rotateAboutVector:function(e,t){e.normalize();var r=Math.cos(t),n=Math.sin(t),i=this.clone().multiplyScalar(r),o=e.clone().cross(this).multiplyScalar(n),a=e.clone().multiplyScalar(e.clone().dot(this)).multiplyScalar(1-r),s=i.add(o).add(a);return this.x=s.x,this.y=s.y,this.z=s.z,this},setFromMatrixPosition:function(e){var t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this},transformDirection:function(e){var t=this.x,r=this.y,n=this.z,i=e.elements;return this.x=i[0]*t+i[4]*r+i[8]*n,this.y=i[1]*t+i[5]*r+i[9]*n,this.z=i[2]*t+i[6]*r+i[10]*n,this.normalize()},clone:function(){return new $3Dmol.Vector3(this.x,this.y,this.z)}},$3Dmol.Matrix3=function(e,t,r,n,i,o,a,s,l){this.elements=new Float32Array(9),this.set(void 0!==e?e:1,t||0,r||0,n||0,void 0!==i?i:1,o||0,a||0,s||0,void 0!==l?l:1)},$3Dmol.Matrix3.prototype={constructor:$3Dmol.Matrix3,set:function(e,t,r,n,i,o,a,s,l){var c=this.elements;return c[0]=e,c[3]=t,c[6]=r,c[1]=n,c[4]=i,c[7]=o,c[2]=a,c[5]=s,c[8]=l,this},identity:function(){return this.set(1,0,0,0,1,0,0,0,1),this},copy:function(e){var t=e.elements;this.set(t[0],t[3],t[6],t[1],t[4],t[7],t[2],t[5],t[8])},multiplyScalar:function(e){var t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this},getInverse:function(e,t){var r=e.elements,n=this.elements;n[0]=r[10]*r[5]-r[6]*r[9],n[1]=-r[10]*r[1]+r[2]*r[9],n[2]=r[6]*r[1]-r[2]*r[5],n[3]=-r[10]*r[4]+r[6]*r[8],n[4]=r[10]*r[0]-r[2]*r[8],n[5]=-r[6]*r[0]+r[2]*r[4],n[6]=r[9]*r[4]-r[5]*r[8],n[7]=-r[9]*r[0]+r[1]*r[8],n[8]=r[5]*r[0]-r[1]*r[4];var i=r[0]*n[0]+r[1]*n[3]+r[2]*n[6];if(0===i){var o="Matrix3.getInverse(): can't invert matrix, determinant is 0";if(t)throw new Error(o);return console.warn(o),this.identity(),this}return this.multiplyScalar(1/i),this},getDeterminant:function(){var e=this.elements;return e[0]*e[4]*e[8]+e[1]*e[5]*e[6]+e[2]*e[3]*e[7]-e[2]*e[4]*e[6]-e[1]*e[3]*e[8]-e[0]*e[5]*e[7]},transpose:function(){var e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this},clone:function(){var e=this.elements;return new $3Dmol.Matrix3(e[0],e[3],e[6],e[1],e[4],e[7],e[2],e[5],e[8])}},$3Dmol.Matrix4=function(e,t,r,n,i,o,a,s,l,c,u,h,f,d,p,m){if(void 0===t&&void 0!==e)this.elements=new Float32Array(e);else{var v=this.elements=new Float32Array(16);v[0]=void 0!==e?e:1,v[4]=t||0,v[8]=r||0,v[12]=n||0,v[1]=i||0,v[5]=void 0!==o?o:1,v[9]=a||0,v[13]=s||0,v[2]=l||0,v[6]=c||0,v[10]=void 0!==u?u:1,v[14]=h||0,v[3]=f||0,v[7]=d||0,v[11]=p||0,v[15]=void 0!==m?m:1}},$3Dmol.Matrix4.prototype={constructor:$3Dmol.Matrix4,set:function(e,t,r,n,i,o,a,s,l,c,u,h,f,d,p,m){var v=this.elements;return v[0]=e,v[4]=t,v[8]=r,v[12]=n,v[1]=i,v[5]=o,v[9]=a,v[13]=s,v[2]=l,v[6]=c,v[10]=u,v[14]=h,v[3]=f,v[7]=d,v[11]=p,v[15]=m,this},identity:function(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this},copy:function(e){var t=e.elements;return this.set(t[0],t[4],t[8],t[12],t[1],t[5],t[9],t[13],t[2],t[6],t[10],t[14],t[3],t[7],t[11],t[15]),this},matrix3FromTopLeft:function(){var e=this.elements;return new $3Dmol.Matrix3(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10])},setRotationFromEuler:function(e,t){var r=this.elements,n=e.x,i=e.y,o=e.z,a=Math.cos(n),s=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(o),h=Math.sin(o);if(void 0===t||"XYZ"===t){var f=a*u,d=a*h,p=s*u,m=s*h;r[0]=l*u,r[4]=-l*h,r[8]=c,r[1]=d+p*c,r[5]=f-m*c,r[9]=-s*l,r[2]=m-f*c,r[6]=p+d*c,r[10]=a*l}else console.error("Error with matrix4 setRotationFromEuler. Order: "+t);return this},setRotationFromQuaternion:function(e){var t=this.elements,r=e.x,n=e.y,i=e.z,o=e.w,a=r+r,s=n+n,l=i+i,c=r*a,u=r*s,h=r*l,f=n*s,d=n*l,p=i*l,m=o*a,v=o*s,g=o*l;return t[0]=1-(f+p),t[4]=u-g,t[8]=h+v,t[1]=u+g,t[5]=1-(c+p),t[9]=d-m,t[2]=h-v,t[6]=d+m,t[10]=1-(c+f),this},lookAt:function(){var e=new $3Dmol.Vector3,t=new $3Dmol.Vector3,r=new $3Dmol.Vector3;return function(n,i,o){var a=this.elements;return r.subVectors(n,i).normalize(),0===r.length()&&(r.z=1),e.crossVectors(o,r).normalize(),0===e.length()&&(r.x+=1e-4,e.crossVectors(o,r).normalize()),t.crossVectors(r,e),a[0]=e.x,a[4]=t.x,a[8]=r.x,a[1]=e.y,a[5]=t.y,a[9]=r.y,a[2]=e.z,a[6]=t.z,a[10]=r.z,this}}(),multiplyMatrices:function(e,t){var r=e.elements,n=t.elements,i=this.elements,o=r[0],a=r[4],s=r[8],l=r[12],c=r[1],u=r[5],h=r[9],f=r[13],d=r[2],p=r[6],m=r[10],v=r[14],g=r[3],y=r[7],b=r[11],x=r[15],w=n[0],D=n[4],C=n[8],A=n[12],$=n[1],S=n[5],M=n[9],_=n[13],z=n[2],T=n[6],L=n[10],E=n[14],F=n[3],k=n[7],I=n[11],P=n[15];return i[0]=o*w+a*$+s*z+l*F,i[4]=o*D+a*S+s*T+l*k,i[8]=o*C+a*M+s*L+l*I,i[12]=o*A+a*_+s*E+l*P,i[1]=c*w+u*$+h*z+f*F,i[5]=c*D+u*S+h*T+f*k,i[9]=c*C+u*M+h*L+f*I,i[13]=c*A+u*_+h*E+f*P,i[2]=d*w+p*$+m*z+v*F,i[6]=d*D+p*S+m*T+v*k,i[10]=d*C+p*M+m*L+v*I,i[14]=d*A+p*_+m*E+v*P,i[3]=g*w+y*$+b*z+x*F,i[7]=g*D+y*S+b*T+x*k,i[11]=g*C+y*M+b*L+x*I,i[15]=g*A+y*_+b*E+x*P,this},multiplyScalar:function(e){var t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this},makeTranslation:function(e,t,r){return this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this},transpose:function(){var e,t=this.elements;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this},getPosition:function(){var e=new $3Dmol.Vector3;return function(){console.warn("DEPRECATED: Matrix4's .getPosition() has been removed. Use Vector3.getPositionFromMatrix( matrix ) instead.");var t=this.elements;return e.set(t[12],t[13],t[14])}}(),setPosition:function(e){var t=this.elements;return t[12]=e.x,t[13]=e.y,t[14]=e.z,this},getInverse:function(e,t){var r=this.elements,n=e.elements,i=n[0],o=n[4],a=n[8],s=n[12],l=n[1],c=n[5],u=n[9],h=n[13],f=n[2],d=n[6],p=n[10],m=n[14],v=n[3],g=n[7],y=n[11],b=n[15];r[0]=u*m*g-h*p*g+h*d*y-c*m*y-u*d*b+c*p*b,r[4]=s*p*g-a*m*g-s*d*y+o*m*y+a*d*b-o*p*b,r[8]=a*h*g-s*u*g+s*c*y-o*h*y-a*c*b+o*u*b,r[12]=s*u*d-a*h*d-s*c*p+o*h*p+a*c*m-o*u*m,r[1]=h*p*v-u*m*v-h*f*y+l*m*y+u*f*b-l*p*b,r[5]=a*m*v-s*p*v+s*f*y-i*m*y-a*f*b+i*p*b,r[9]=s*u*v-a*h*v-s*l*y+i*h*y+a*l*b-i*u*b,r[13]=a*h*f-s*u*f+s*l*p-i*h*p-a*l*m+i*u*m,r[2]=c*m*v-h*d*v+h*f*g-l*m*g-c*f*b+l*d*b,r[6]=s*d*v-o*m*v-s*f*g+i*m*g+o*f*b-i*d*b,r[10]=o*h*v-s*c*v+s*l*g-i*h*g-o*l*b+i*c*b,r[14]=s*c*f-o*h*f-s*l*d+i*h*d+o*l*m-i*c*m,r[3]=u*d*v-c*p*v-u*f*g+l*p*g+c*f*y-l*d*y,r[7]=o*p*v-a*d*v+a*f*g-i*p*g-o*f*y+i*d*y,r[11]=a*c*v-o*u*v-a*l*g+i*u*g+o*l*y-i*c*y,r[15]=o*u*f-a*c*f+a*l*d-i*u*d-o*l*p+i*c*p;var x=n[0]*r[0]+n[1]*r[4]+n[2]*r[8]+n[3]*r[12];if(0===x){var w="Matrix4.getInverse(): can't invert matrix, determinant is 0";if(t)throw new Error(w);return console.warn(w),this.identity(),this}return this.multiplyScalar(1/x),this},isReflected:function(){return this.matrix3FromTopLeft().getDeterminant()<0},compose:function(){var e=new $3Dmol.Matrix4,t=new $3Dmol.Matrix4;return function(r,n,i){var o=this.elements;return e.identity(),e.setRotationFromQuaternion(n),t.makeScale(i.x,i.y,i.z),this.multiplyMatrices(e,t),o[12]=r.x,o[13]=r.y,o[14]=r.z,this}}(),decompose:function(){var e=new $3Dmol.Vector3,t=new $3Dmol.Vector3,r=new $3Dmol.Vector3,n=new $3Dmol.Matrix4;return function(i,o,a){var s=this.elements;return e.set(s[0],s[1],s[2]),t.set(s[4],s[5],s[6]),r.set(s[8],s[9],s[10]),i=i instanceof $3Dmol.Vector3?i:new $3Dmol.Vector3,o=o instanceof $3Dmol.Quaternion?o:new $3Dmol.Quaternion,(a=a instanceof $3Dmol.Vector3?a:new $3Dmol.Vector3).x=e.length(),a.y=t.length(),a.z=r.length(),i.x=s[12],i.y=s[13],i.z=s[14],n.copy(this),n.elements[0]/=a.x,n.elements[1]/=a.x,n.elements[2]/=a.x,n.elements[4]/=a.y,n.elements[5]/=a.y,n.elements[6]/=a.y,n.elements[8]/=a.z,n.elements[9]/=a.z,n.elements[10]/=a.z,o.setFromRotationMatrix(n),[i,o,a]}}(),scale:function(e){var t=this.elements,r=e.x,n=e.y,i=e.z;return t[0]*=r,t[4]*=n,t[8]*=i,t[1]*=r,t[5]*=n,t[9]*=i,t[2]*=r,t[6]*=n,t[10]*=i,t[3]*=r,t[7]*=n,t[11]*=i,this},getMaxScaleOnAxis:function(){var e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,Math.max(r,n)))},makeFrustum:function(e,t,r,n,i,o){var a=this.elements,s=2*i/(t-e),l=2*i/(n-r),c=(t+e)/(t-e),u=(n+r)/(n-r),h=-(o+i)/(o-i),f=-2*o*i/(o-i);return a[0]=s,a[4]=0,a[8]=c,a[12]=0,a[1]=0,a[5]=l,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=f,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this},makePerspective:function(e,t,r,n){var i=r*Math.tan($3Dmol.Math.degToRad(.5*e)),o=-i,a=o*t,s=i*t;return this.makeFrustum(a,s,o,i,r,n)},makeOrthographic:function(e,t,r,n,i,o){var a=this.elements,s=1/(t-e),l=1/(r-n),c=1/(o-i),u=(t+e)*s,h=(r+n)*l,f=(o+i)*c;return a[0]=2*s,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*c,a[14]=-f,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this},isEqual:function(e){var t=e.elements,r=this.elements;return r[0]==t[0]&&r[4]==t[4]&&r[8]==t[8]&&r[12]==t[12]&&r[1]==t[1]&&r[5]==t[5]&&r[9]==t[9]&&r[13]==t[13]&&r[2]==t[2]&&r[6]==t[6]&&r[10]==t[10]&&r[14]==t[14]&&r[3]==t[3]&&r[7]==t[7]&&r[11]==t[11]&&r[15]==t[15]},clone:function(){var e=this.elements;return new $3Dmol.Matrix4(e[0],e[4],e[8],e[12],e[1],e[5],e[9],e[13],e[2],e[6],e[10],e[14],e[3],e[7],e[11],e[15])},isIdentity:function(){var e=this.elements;return 1==e[0]&&0==e[4]&&0==e[8]&&0==e[12]&&0==e[1]&&1==e[5]&&0==e[9]&&0==e[13]&&0==e[2]&&0==e[6]&&1==e[10]&&0==e[14]&&0==e[3]&&0==e[7]&&0==e[11]&&1==e[15]}},$3Dmol.Vector3.prototype.unproject=function(){var e=new $3Dmol.Matrix4;return function(t){return e.multiplyMatrices(t.matrixWorld,e.getInverse(t.projectionMatrix)),this.applyMatrix4(e)}}(),$3Dmol.Ray=function(e,t){this.origin=void 0!==e?e:new $3Dmol.Vector3,this.direction=void 0!==t?t:new $3Dmol.Vector3},$3Dmol.Ray.prototype={constructor:$3Dmol.Ray,set:function(e,t){return this.origin.copy(e),this.direction.copy(t),this},copy:function(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this},at:function(e,t){return(t||new $3Dmol.Vector3).copy(this.direction).multiplyScalar(e).add(this.origin)},recast:function(){var e=new $3Dmol.Vector3;return function(t){return this.origin.copy(this.at(t,e)),this}}(),closestPointToPoint:function(e,t){var r=t||new $3Dmol.Vector3;r.subVectors(e,this.origin);var n=r.dot(this.direction);return r.copy(this.direction).multiplyScalar(n).add(this.origin)},distanceToPoint:function(){var e=new $3Dmol.Vector3;return function(t){var r=e.subVectors(t,this.origin).dot(this.direction);return e.copy(this.direction).multiplyScalar(r).add(this.origin),e.distanceTo(t)}}(),isIntersectionCylinder:function(){},isIntersectionSphere:function(e){return this.distanceToPoint(e.center)<=e.radius},isIntersectionPlane:function(e){return 0!==e.normal.dot(this.direction)||0===e.distanceToPoint(this.origin)},distanceToPlane:function(e){var t=e.normal.dot(this.direction);return 0===t?0===e.distanceToPoint(this.origin)?0:void 0:-(this.origin.dot(e.normal)+e.constant)/t},intersectPlane:function(e,t){var r=this.distanceToPlane(e);if(void 0!==r)return this.at(r,t)},applyMatrix4:function(e){return this.direction.add(this.origin).applyMatrix4(e),this.origin.applyMatrix4(e),this.direction.sub(this.origin),this},equals:function(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)},clone:function(){return(new $3Dmol.Ray).copy(this)}},$3Dmol.Sphere=function(e,t){this.center=void 0!==e?e:new $3Dmol.Vector3,this.radius=void 0!==t?t:0},$3Dmol.Sphere.prototype={constructor:$3Dmol.Sphere,set:function(e,t){return this.center.copy(e),this.radius=t,this},copy:function(e){return this.center.copy(e.center),this.radius=e.radius,this},applyMatrix4:function(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this},translate:function(e){return this.center.add(e),this},equals:function(e){return e.center.equals(this.center)&&e.radius===this.radius},clone:function(){return(new $3Dmol.Sphere).copy(this)}},$3Dmol.Cylinder=function(e,t,r){this.c1=void 0!==e?e:new $3Dmol.Vector3,this.c2=void 0!==t?t:new $3Dmol.Vector3,this.direction=(new $3Dmol.Vector3).subVectors(this.c2,this.c1).normalize(),this.radius=void 0!==r?r:0},$3Dmol.Cylinder.prototype={constructor:$3Dmol.Cylinder,copy:function(e){return this.c1.copy(e.c1),this.c2.copy(e.c2),this.direction.copy(e.direction),this.radius=e.radius,this},lengthSq:function(){var e=new $3Dmol.Vector3;return function(){return e.subVectors(this.c2,this.c1).lengthSq()}}(),applyMatrix4:function(e){return this.direction.add(this.c1).applyMatrix4(e),this.c1.applyMatrix4(e),this.c2.applyMatrix4(e),this.direction.sub(this.c1).normalize(),this.radius=this.radius*e.getMaxScaleOnAxis(),this}},$3Dmol.Triangle=function(e,t,r){this.a=void 0!==e?e:new $3Dmol.Vector3,this.b=void 0!==t?t:new $3Dmol.Vector3,this.c=void 0!==r?r:new $3Dmol.Vector3},$3Dmol.Triangle.prototype={constructor:$3Dmol.Triangle,copy:function(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this},applyMatrix4:function(e){return this.a.applyMatrix4(e),this.b.applyMatrix4(e),this.c.applyMatrix4(e),this},getNormal:function(){var e=new $3Dmol.Vector3;return function(){var t=this.a.clone();return t.sub(this.b),e.subVectors(this.c,this.b),t.cross(e),t.normalize(),t}}()},$3Dmol.EventDispatcher=function(){var e={};this.addEventListener=function(t,r){void 0===e[t]&&(e[t]=[]),-1===e[t].indexOf(r)&&e[t].push(r)},this.removeEventListener=function(t,r){var n=e[t].indexOf(r);-1!==n&&e[t].splice(n,1)},this.dispatchEvent=function(t){var r=e[t.type];if(void 0!==r){t.target=this;for(var n=0,i=r.length;n<i;n++)r[n].call(this,t)}}},$3Dmol.Color=function(e){return arguments.length>1?(this.r=arguments[0]||0,this.g=arguments[1]||0,this.b=arguments[2]||0,this):this.set(e)},$3Dmol.Color.prototype={constructor:$3Dmol.Color,r:0,g:0,b:0,set:function(e){if(e instanceof $3Dmol.Color)return e.clone();"number"==typeof e?this.setHex(e):"object"==typeof e&&"r"in e&&"g"in e&&"b"in e&&(this.r=e.r,this.g=e.g,this.b=e.b)},setHex:function(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,this},getHex:function(){return Math.round(255*this.r)<<16|Math.round(255*this.g)<<8|Math.round(255*this.b)},clone:function(){return new $3Dmol.Color(this.r,this.g,this.b)},copy:function(e){return this.r=e.r,this.g=e.g,this.b=e.b,this},scaled:function(){var e={};return e.r=Math.round(255*this.r),e.g=Math.round(255*this.g),e.b=Math.round(255*this.b),e.a=1,e}},$3Dmol.Object3D=function(){this.id=$3Dmol.Object3DIDCount++,this.name="",this.parent=void 0,this.children=[],this.position=new $3Dmol.Vector3,this.rotation=new $3Dmol.Vector3,this.matrix=new $3Dmol.Matrix4,this.matrixWorld=new $3Dmol.Matrix4,this.quaternion=new $3Dmol.Quaternion,this.eulerOrder="XYZ",this.up=new $3Dmol.Vector3(0,1,0),this.scale=new $3Dmol.Vector3(1,1,1),this.matrixAutoUpdate=!0,this.matrixWorldNeedsUpdate=!0,this.rotationAutoUpdate=!0,this.useQuaternion=!1,this.visible=!0},$3Dmol.Object3D.prototype={constructor:$3Dmol.Object3D,lookAt:function(e){this.matrix.lookAt(e,this.position,this.up),this.rotationAutoUpdate&&(!0===this.useQuaternion?this.quaternion.copy(this.matrix.decompose()[1]):this.rotation.setEulerFromRotationMatrix(this.matrix,this.eulerOrder))},add:function(e){if(e!==this){e.parent=this,this.children.push(e);for(var t=this;void 0!==t.parent;)t=t.parent;void 0!==t&&t instanceof $3Dmol.Scene&&t.__addObject(e)}else console.error("Can't add $3Dmol.Object3D to itself")},remove:function(e){var t=this.children.indexOf(e);if(-1!==t){e.parent=void 0,this.children.splice(t,1);for(var r=this;void 0!==r.parent;)r=r.parent;void 0!==r&&r instanceof $3Dmol.Scene&&r.__removeObject(e)}},vrml:function(e){e||(e=" ");var t=2*Math.atan2(this.quaternion.lengthxyz(),this.quaternion.w),r=0,n=0,i=0;if(0!=t){let e=Math.sin(t/2);r=this.quaternion.x/e,n=this.quaternion.y/e,i=this.quaternion.z/e}var o=e+"Transform {\n"+e+" center "+this.position.x+" "+this.position.y+" "+this.position.z+"\n"+e+" rotation "+r+" "+n+" "+i+" "+t+"\n"+e+" children [\n";this.geometry&&(o+=this.geometry.vrml(e,this.material));for(var a=0;a<this.children.length;a++)o+=this.children[a].vrml(e+" ")+",\n";return o+=" ]\n",o+="}"},updateMatrix:function(){this.matrix.setPosition(this.position),!1===this.useQuaternion?this.matrix.setRotationFromEuler(this.rotation,this.eulerOrder):this.matrix.setRotationFromQuaternion(this.quaternion),1===this.scale.x&&1===this.scale.y&&1===this.scale.z||this.matrix.scale(this.scale),this.matrixWorldNeedsUpdate=!0},updateMatrixWorld:function(e){!0===this.matrixAutoUpdate&&this.updateMatrix(),!0!==this.matrixWorldNeedsUpdate&&!0!==e||(void 0===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1;for(var t=0;t<this.children.length;t++)this.children[t].updateMatrixWorld(!0)},clone:function(e){void 0===e&&(e=new $3Dmol.Object3D),e.name=this.name,e.up.copy(this.up),e.position.copy(this.position),e.rotation.copy(this.rotation),e.eulerOrder=this.eulerOrder,e.scale.copy(this.scale),e.rotationAutoUpdate=this.rotationAutoUpdate,e.matrix.copy(this.matrix),e.matrixWorld.copy(this.matrixWorld),e.quaternion.copy(this.quaternion),e.matrixAutoUpdate=this.matrixAutoUpdate,e.matrixWorldNeedsUpdate=this.matrixWorldNeedsUpdate,e.useQuaternion=this.useQuaternion,e.visible=this.visible;for(var t=0;t<this.children.length;t++){var r=this.children[t];e.add(r.clone())}return e},setVisible:function(e){this.visible=e;for(var t=0;t<this.children.length;t++){this.children[t].setVisible(e)}}},$3Dmol.Object3DIDCount=0,$3Dmol.Geometry=function(){var e=function(e){this.id=e||0,this.vertexArray=null,this.colorArray=null,this.normalArray=null,this.faceArray=null,this.radiusArray=null,this.lineArray=null,this.vertices=0,this.faceidx=0,this.lineidx=0};e.prototype.setColors=function(e){var t=this.vertexArray,r=this.colorArray;if(t.length==r.length)for(var n=0;n<t.length;n+=3){var i=e(t[n],t[n+1],t[n+2]);i instanceof $3Dmol.Color||(i=$3Dmol.CC.color(i)),r[n]=i.r,r[n+1]=i.g,r[n+2]=i.b}else console.log("Cannot re-color geometry group due to mismatched lengths.")},e.prototype.getNumVertices=function(){return this.vertices},e.prototype.getVertices=function(){return this.vertexArray},e.prototype.getCentroid=function(){for(var e,t,r,n,i=new $3Dmol.Vector3,o=0;o<this.vertices;++o)e=3*o,t=this.vertexArray[e],r=this.vertexArray[e+1],n=this.vertexArray[e+2],i.x+=t,i.y+=r,i.z+=n;return i.divideScalar(this.vertices),i},e.prototype.setNormals=function(){var e=this.faceArray,t=this.vertexArray,r=this.normalArray;if(this.vertices&&this.faceidx)for(var n,i,o,a,s,l,c,u=0;u<e.length/3;++u)n=3*e[3*u],i=3*e[3*u+1],o=3*e[3*u+2],a=new $3Dmol.Vector3(t[n],t[n+1],t[n+2]),s=new $3Dmol.Vector3(t[i],t[i+1],t[i+2]),l=new $3Dmol.Vector3(t[o],t[o+1],t[o+2]),a.subVectors(a,s),l.subVectors(l,s),l.cross(a),(c=l).normalize(),r[n]+=c.x,r[i]+=c.x,r[o]+=c.x,r[n+1]+=c.y,r[i+1]+=c.y,r[o+1]+=c.y,r[n+2]+=c.z,r[i+2]+=c.z,r[o+2]+=c.z},e.prototype.setLineIndices=function(){if(this.faceidx&&(!this.lineArray||this.lineArray.length!=2*this.faceidx||this.lineidx!=2*this.faceidx)){var e=this.faceArray,t=this.lineArray=new Uint16Array(2*this.faceidx);this.lineidx=2*this.faceidx;for(var r=0;r<this.faceidx/3;++r){var n=3*r,i=2*n,o=e[n],a=e[n+1],s=e[n+2];t[i]=o,t[i+1]=a,t[i+2]=o,t[i+3]=s,t[i+4]=a,t[i+5]=s}}},e.prototype.vrml=function(e,t){var r="";r+=e+"Shape {\n"+e+" appearance Appearance {\n"+e+"  material Material {\n"+e+"   diffuseColor "+t.color.r+" "+t.color.g+" "+t.color.b+"\n",t.transparent&&(r+=e+"   transparency "+(1-t.opacity)+"\n"),r+=e+"  }\n",r+=e+" }\n";var n=e;if(e+=" ",t instanceof $3Dmol.LineBasicMaterial){let t,n,i;r+=e+"geometry IndexedLineSet {\n"+e+" colorPerVertex TRUE\n"+e+" coord Coordinate {\n"+e+"  point [\n";for(let o=0;o<this.vertices;++o){let a=3*o;r+=e+"   "+(t=this.vertexArray[a])+" "+(n=this.vertexArray[a+1])+" "+(i=this.vertexArray[a+2])+",\n"}if(r+=e+"  ]\n",r+=e+" }\n",this.colorArray){r+=e+" color Color {\n"+e+"  color [\n";for(let o=0;o<this.vertices;++o){let a=3*o;r+=e+"   "+(t=this.colorArray[a])+" "+(n=this.colorArray[a+1])+" "+(i=this.colorArray[a+2])+",\n"}r+=e+"  ]\n",r+=e+" }\n"}r+=e+" coordIndex [\n";for(let t=0;t<this.vertices;t+=2)r+=e+"  "+t+", "+(t+1)+", -1,\n";r+=e+" ]\n",r+=e+"}\n"}else{let t,n,o;r+=e+"geometry IndexedFaceSet {\n"+e+" colorPerVertex TRUE\n"+e+" normalPerVertex TRUE\n"+e+" solid FALSE\n",r+=e+" coord Coordinate {\n"+e+"  point [\n";for(let i=0;i<this.vertices;++i){let a=3*i;r+=e+"   "+(t=this.vertexArray[a])+" "+(n=this.vertexArray[a+1])+" "+(o=this.vertexArray[a+2])+",\n"}r+=e+"  ]\n",r+=e+" }\n",r+=e+" normal Normal {\n"+e+"  vector [\n";for(let i=0;i<this.vertices;++i){let a=3*i;r+=e+"   "+(t=this.normalArray[a])+" "+(n=this.normalArray[a+1])+" "+(o=this.normalArray[a+2])+",\n"}if(r+=e+"  ]\n",r+=e+" }\n",this.colorArray){r+=e+" color Color {\n"+e+"  color [\n";for(let i=0;i<this.vertices;++i){let a=3*i;r+=e+"   "+(t=this.colorArray[a])+" "+(n=this.colorArray[a+1])+" "+(o=this.colorArray[a+2])+",\n"}r+=e+"  ]\n",r+=e+" }\n"}r+=e+" coordIndex [\n";for(var i=0;i<this.faceidx;i+=3)r+=e+"  "+(t=this.faceArray[i])+", "+(n=this.faceArray[i+1])+", "+(o=this.faceArray[i+2])+", -1,\n";r+=e+" ]\n",r+=e+"}\n"}return r+=n+"}"},e.prototype.truncateArrayBuffers=function(e,t){e=!0===e;var r=this.vertexArray,n=this.colorArray,i=this.normalArray,o=this.faceArray,a=this.lineArray,s=this.radiusArray;this.vertexArray=r.subarray(0,3*this.vertices),this.colorArray=n.subarray(0,3*this.vertices),e?(this.normalArray=i.subarray(0,3*this.vertices),this.faceArray=o.subarray(0,this.faceidx),this.lineidx>0?this.lineArray=a.subarray(0,this.lineidx):this.lineArray=new Uint16Array(0)):(this.normalArray=new Float32Array(0),this.faceArray=new Uint16Array(0),this.lineArray=new Uint16Array(0)),s&&(this.radiusArray=s.subarray(0,this.vertices)),t&&(this.normalArray&&(this.normalArray=new Float32Array(this.normalArray)),this.faceArray&&(this.faceArray=new Uint16Array(this.faceArray)),this.lineArray&&(this.lineArray=new Uint16Array(this.lineArray)),this.vertexArray&&(this.vertexArray=new Float32Array(this.vertexArray)),this.colorArray&&(this.colorArray=new Float32Array(this.colorArray)),this.radiusArray&&(this.radiusArray=new Float32Array(this.radiusArray))),this.__inittedArrays=!0};var t=function(t){var r=new e(t.geometryGroups.length);return t.geometryGroups.push(r),t.groups=t.geometryGroups.length,r.vertexArray=new Float32Array(196605),r.colorArray=new Float32Array(196605),t.mesh&&(r.normalArray=new Float32Array(196605),r.faceArray=new Uint16Array(393210),r.lineArray=new Uint16Array(393210)),t.radii&&(r.radiusArray=new Float32Array(65535)),r.useOffset=t.offset,r},r=function(e,t,r){$3Dmol.EventDispatcher.call(this),this.id=$3Dmol.GeometryIDCount++,this.name="",this.hasTangents=!1,this.dynamic=!0,this.mesh=!0===e,this.radii=t||!1,this.offset=r||!1,this.verticesNeedUpdate=!1,this.elementsNeedUpdate=!1,this.normalsNeedUpdate=!1,this.colorsNeedUpdate=!1,this.buffersNeedUpdate=!1,this.geometryGroups=[],this.groups=0};return r.prototype={constructor:r,updateGeoGroup:function(e){e=e||0;var r=this.groups>0?this.geometryGroups[this.groups-1]:null;return(!r||r.vertices+e>r.vertexArray.length/3)&&(r=t(this)),r},vrml:function(e,t){for(var r="",n=this.geometryGroups.length,i=0;i<n;i++){r+=this.geometryGroups[i].vrml(e,t)+",\n"}return r},addGeoGroup:function(){return t(this)},setUpNormals:function(e){e=e||!1;for(var t=0;t<this.groups;t++){this.geometryGroups[t].setNormals(e)}},setColors:function(e){for(var t=this.geometryGroups.length,r=0;r<t;r++){this.geometryGroups[r].setColors(e)}},setUpWireframe:function(){for(var e=0;e<this.groups;e++){this.geometryGroups[e].setLineIndices()}},initTypedArrays:function(){for(var e=0;e<this.groups;e++){var t=this.geometryGroups[e];!0!==t.__inittedArrays&&t.truncateArrayBuffers(this.mesh,!1)}},dispose:function(){this.dispatchEvent({type:"dispose"})}},r}(),Object.defineProperty($3Dmol.Geometry.prototype,"vertices",{get:function(){for(var e=0,t=0;t<this.groups;t++)e+=this.geometryGroups[t].vertices;return e}}),$3Dmol.GeometryIDCount=0,$3Dmol.Raycaster=function(){var e,t=function(e,t,r,n){this.ray=new $3Dmol.Ray(e,t),this.ray.direction.lengthSq()>0&&this.ray.direction.normalize(),this.near=n||0,this.far=r||1/0},r=new $3Dmol.Sphere,n=new $3Dmol.Cylinder,i=new $3Dmol.Triangle,o=new $3Dmol.Vector3,a=new $3Dmol.Vector3,s=new $3Dmol.Vector3,l=new $3Dmol.Vector3,c=new $3Dmol.Vector3,u=function(e,t){return e.distance-t.distance},h=function(e){return Math.min(Math.max(e,-1),1)},f=function(e,t,u,f){if(c.getPositionFromMatrix(e.matrixWorld),void 0===t.intersectionShape)return f;var d,p,m,v,g,y,b,x,w,D,C,A,$,S,M=t.intersectionShape,_=u.linePrecision,z=(_*=e.matrixWorld.getMaxScaleOnAxis())*_;if(void 0!==t.boundingSphere&&t.boundingSphere instanceof $3Dmol.Sphere&&(r.copy(t.boundingSphere),r.applyMatrix4(e.matrixWorld),!u.ray.isIntersectionSphere(r)))return f;for(d=0,p=M.triangle.length;d<p;d++)if(M.triangle[d]instanceof $3Dmol.Triangle){if(i.copy(M.triangle[d]),i.applyMatrix4(e.matrixWorld),m=i.getNormal(),(v=u.ray.direction.dot(m))>=0)continue;if(o.subVectors(i.a,u.ray.origin),(b=m.dot(o)/v)<0)continue;a.copy(u.ray.direction).multiplyScalar(b).add(u.ray.origin),a.sub(i.a),s.copy(i.b).sub(i.a),l.copy(i.c).sub(i.a);var T=s.dot(l),L=s.lengthSq(),E=l.lengthSq();if((A=(L*a.dot(l)-T*a.dot(s))/(L*E-T*T))<0||A>1)continue;if((C=(a.dot(s)-A*T)/L)<0||C>1||C+A>1)continue;f.push({clickable:t,distance:b})}for(d=0,p=M.cylinder.length;d<p;d++)if(M.cylinder[d]instanceof $3Dmol.Cylinder){if(n.copy(M.cylinder[d]),n.applyMatrix4(e.matrixWorld),o.subVectors(n.c1,u.ray.origin),g=o.dot(n.direction),y=o.dot(u.ray.direction),0===(w=1-(v=h(u.ray.direction.dot(n.direction)))*v))continue;$=(v*y-g)/w,S=(y-v*g)/w,a.copy(n.direction).multiplyScalar($).add(n.c1),s.copy(u.ray.direction).multiplyScalar(S).add(u.ray.origin),x=l.subVectors(a,s).lengthSq();var F=n.radius*n.radius;if(x<=F){if((C=v*(A=b=(D=(v*g-y)*(v*g-y)-w*(o.lengthSq()-g*g-F))<=0?Math.sqrt(x):(y-v*g-Math.sqrt(D))/w)-g)<0||C*C>n.lengthSq()||A<0)continue;f.push({clickable:t,distance:b})}}for(d=0,p=M.line.length;d<p;d+=2){a.copy(M.line[d]),a.applyMatrix4(e.matrixWorld),s.copy(M.line[d+1]),s.applyMatrix4(e.matrixWorld),l.subVectors(s,a);var k=l.lengthSq();l.normalize(),o.subVectors(a,u.ray.origin);var I=o.dot(l);y=o.dot(u.ray.direction),0!==(w=1-(v=h(u.ray.direction.dot(l)))*v)&&($=(v*y-I)/w,S=(y-v*I)/w,a.add(l.multiplyScalar($)),s.copy(u.ray.direction).multiplyScalar(S).add(u.ray.origin),(x=l.subVectors(s,a).lengthSq())<z&&$*$<k&&f.push({clickable:t,distance:S}))}for(d=0,p=M.sphere.length;d<p;d++)if(M.sphere[d]instanceof $3Dmol.Sphere&&(r.copy(M.sphere[d]),r.applyMatrix4(e.matrixWorld),u.ray.isIntersectionSphere(r))){a.subVectors(r.center,u.ray.origin);var P=a.dot(u.ray.direction);return D=P*P-(a.lengthSq()-r.radius*r.radius),P<0?f:(b=D<=0?P:P-Math.sqrt(D),f.push({clickable:t,distance:b}),f)}};return t.prototype.precision=1e-4,t.prototype.linePrecision=.2,t.prototype.set=function(e,t){this.ray.set(e,t)},t.prototype.setFromCamera=(e=new $3Dmol.Matrix4,function(t,r){r.ortho?(this.ray.origin.set(t.x,t.y,(r.near+r.far)/(r.near-r.far)).unproject(r),this.ray.direction.set(0,0,-1).transformDirection(r.matrixWorld)):(this.ray.origin.setFromMatrixPosition(r.matrixWorld),this.ray.direction.set(t.x,t.y,t.z),r.projectionMatrixInverse.getInverse(r.projectionMatrix),e.multiplyMatrices(r.matrixWorld,r.projectionMatrixInverse),this.ray.direction.applyProjection(e),this.ray.direction.sub(this.ray.origin).normalize())}),t.prototype.intersectObjects=function(e,t){for(var r=[],n=0,i=t.length;n<i;n++)f(e,t[n],this,r);return r.sort(u),r},t}(),$3Dmol.Projector=function(){let e=new $3Dmol.Matrix4;this.projectVector=function(t,r){return r.matrixWorldInverse.getInverse(r.matrixWorld),e.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),t.applyProjection(e)},this.unprojectVector=function(t,r){return r.projectionMatrixInverse.getInverse(r.projectionMatrix),e.multiplyMatrices(r.matrixWorld,r.projectionMatrixInverse),t.applyProjection(e)}},$3Dmol.Camera=function(e,t,r,n,i){$3Dmol.Object3D.call(this),this.fov=void 0!==e?e:50,this.aspect=void 0!==t?t:1,this.near=void 0!==r?r:.1,this.far=void 0!==n?n:2e3,this.projectionMatrix=new $3Dmol.Matrix4,this.projectionMatrixInverse=new $3Dmol.Matrix4,this.matrixWorldInverse=new $3Dmol.Matrix4;var o=this.position.z;this.right=o*Math.tan(Math.PI/180*e),this.left=-this.right,this.top=this.right/this.aspect,this.bottom=-this.top,this.ortho=!!i,this.updateProjectionMatrix()},$3Dmol.Camera.prototype=Object.create($3Dmol.Object3D.prototype),$3Dmol.Camera.prototype.lookAt=function(e){this.matrix.lookAt(this.position,e,this.up),this.rotationAutoUpdate&&(!1===this.useQuaternion?this.rotation.setEulerFromRotationMatrix(this.matrix,this.eulerOrder):this.quaternion.copy(this.matrix.decompose()[1]))},$3Dmol.Camera.prototype.updateProjectionMatrix=function(){this.ortho?this.projectionMatrix.makeOrthographic(this.left,this.right,this.top,this.bottom,this.near,this.far):this.projectionMatrix.makePerspective(this.fov,this.aspect,this.near,this.far),this.projectionMatrixInverse.getInverse(this.projectionMatrix)},$3Dmol.SpritePlugin=function(){var e,t,r,n={};function i(e,t){return e.z!==t.z?t.z-e.z:t.id-e.id}this.init=function(i){e=i.context,t=i,r=i.getPrecision(),n.vertices=new Float32Array(16),n.faces=new Uint16Array(6);var o=0;n.vertices[o++]=-1,n.vertices[o++]=-1,n.vertices[o++]=0,n.vertices[o++]=0,n.vertices[o++]=1,n.vertices[o++]=-1,n.vertices[o++]=1,n.vertices[o++]=0,n.vertices[o++]=1,n.vertices[o++]=1,n.vertices[o++]=1,n.vertices[o++]=1,n.vertices[o++]=-1,n.vertices[o++]=1,n.vertices[o++]=0,n.vertices[o++]=1,o=0,n.faces[o++]=0,n.faces[o++]=1,n.faces[o++]=2,n.faces[o++]=0,n.faces[o++]=2,n.faces[o++]=3,n.vertexBuffer=e.createBuffer(),n.elementBuffer=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,n.vertexBuffer),e.bufferData(e.ARRAY_BUFFER,n.vertices,e.STATIC_DRAW),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n.elementBuffer),e.bufferData(e.ELEMENT_ARRAY_BUFFER,n.faces,e.STATIC_DRAW),n.program=function(t,r){var n=e.createProgram(),i=e.createShader(e.FRAGMENT_SHADER),o=e.createShader(e.VERTEX_SHADER),a="precision "+r+" float;\n";if(e.shaderSource(i,a+t.fragmentShader),e.shaderSource(o,a+t.vertexShader),e.compileShader(i),e.compileShader(o),!e.getShaderParameter(i,e.COMPILE_STATUS)||!e.getShaderParameter(o,e.COMPILE_STATUS))return console.error(e.getShaderInfoLog(i)),console.error("could not initialize shader"),null;e.attachShader(n,i),e.attachShader(n,o),e.linkProgram(n),e.getProgramParameter(n,e.LINK_STATUS)||console.error("Could not initialize shader");return n}($3Dmol.ShaderLib.sprite,r),n.attributes={},n.uniforms={},n.attributes.position=e.getAttribLocation(n.program,"position"),n.attributes.uv=e.getAttribLocation(n.program,"uv"),n.uniforms.uvOffset=e.getUniformLocation(n.program,"uvOffset"),n.uniforms.uvScale=e.getUniformLocation(n.program,"uvScale"),n.uniforms.rotation=e.getUniformLocation(n.program,"rotation"),n.uniforms.scale=e.getUniformLocation(n.program,"scale"),n.uniforms.alignment=e.getUniformLocation(n.program,"alignment"),n.uniforms.color=e.getUniformLocation(n.program,"color"),n.uniforms.map=e.getUniformLocation(n.program,"map"),n.uniforms.opacity=e.getUniformLocation(n.program,"opacity"),n.uniforms.useScreenCoordinates=e.getUniformLocation(n.program,"useScreenCoordinates"),n.uniforms.screenPosition=e.getUniformLocation(n.program,"screenPosition"),n.uniforms.modelViewMatrix=e.getUniformLocation(n.program,"modelViewMatrix"),n.uniforms.projectionMatrix=e.getUniformLocation(n.program,"projectionMatrix"),n.uniforms.fogType=e.getUniformLocation(n.program,"fogType"),n.uniforms.fogDensity=e.getUniformLocation(n.program,"fogDensity"),n.uniforms.fogNear=e.getUniformLocation(n.program,"fogNear"),n.uniforms.fogFar=e.getUniformLocation(n.program,"fogFar"),n.uniforms.fogColor=e.getUniformLocation(n.program,"fogColor"),n.uniforms.alphaTest=e.getUniformLocation(n.program,"alphaTest")},this.render=function(r,o,a,s){var l=r.__webglSprites,c=l.length;if(c){var u=n.attributes,h=n.uniforms,f=.5*a,d=.5*s;e.useProgram(n.program),e.enableVertexAttribArray(u.position),e.enableVertexAttribArray(u.uv),e.disable(e.CULL_FACE),e.enable(e.BLEND),e.bindBuffer(e.ARRAY_BUFFER,n.vertexBuffer),e.vertexAttribPointer(u.position,2,e.FLOAT,!1,16,0),e.vertexAttribPointer(u.uv,2,e.FLOAT,!1,16,8),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n.elementBuffer),e.uniformMatrix4fv(h.projectionMatrix,!1,o.projectionMatrix.elements),e.activeTexture(e.TEXTURE0),e.uniform1i(h.map,0);var p=0,m=0,v=r.fog;v?(e.uniform3f(h.fogColor,v.color.r,v.color.g,v.color.b),e.uniform1f(h.fogNear,v.near),e.uniform1f(h.fogFar,v.far),e.uniform1i(h.fogType,1),p=1,m=1):(e.uniform1i(h.fogType,0),p=0,m=0);var g,y,b,x,w,D=[];for(g=0;g<c;g++)b=(y=l[g]).material,y.visible&&0!==b.opacity&&(b.useScreenCoordinates?y.z=-y.position.z:(y._modelViewMatrix.multiplyMatrices(o.matrixWorldInverse,y.matrixWorld),y.z=-y._modelViewMatrix.elements[14]));for(l.sort(i),g=0;g<c;g++)if(b=(y=l[g]).material,y.visible&&0!==b.opacity&&b.map&&b.map.image&&b.map.image.width){e.uniform1f(h.alphaTest,b.alphaTest);var C=b.map.image.width,A=b.map.image.height;D[0]=C*t.devicePixelRatio/a,D[1]=A*t.devicePixelRatio/s,!0===b.useScreenCoordinates?(e.uniform1i(h.useScreenCoordinates,1),e.uniform3f(h.screenPosition,(y.position.x*t.devicePixelRatio-f)/f,(d-y.position.y*t.devicePixelRatio)/d,Math.max(0,Math.min(1,y.position.z)))):(e.uniform1i(h.useScreenCoordinates,0),e.uniformMatrix4fv(h.modelViewMatrix,!1,y._modelViewMatrix.elements)),p!==(w=r.fog&&b.fog?m:0)&&(e.uniform1i(h.fogType,w),p=w),x=1/(b.scaleByViewport?s:1),D[0]*=x*y.scale.x,D[1]*=x*y.scale.y,e.uniform2f(h.uvScale,b.uvScale.x,b.uvScale.y),e.uniform2f(h.uvOffset,b.uvOffset.x,b.uvOffset.y),e.uniform2f(h.alignment,b.alignment.x,b.alignment.y),e.uniform1f(h.opacity,b.opacity),e.uniform3f(h.color,b.color.r,b.color.g,b.color.b),e.uniform1f(h.rotation,y.rotation),e.uniform2fv(h.scale,D),t.setDepthTest(b.depthTest),t.setDepthWrite(b.depthWrite),t.setTexture(b.map,0),e.drawElements(e.TRIANGLES,6,e.UNSIGNED_SHORT,0)}e.enable(e.CULL_FACE)}}},$3Dmol.Light=function(e,t){$3Dmol.Object3D.call(this),this.color=new $3Dmol.Color(e),this.position=new $3Dmol.Vector3(0,1,0),this.target=new $3Dmol.Object3D,this.intensity=void 0!==t?t:1,this.castShadow=!1,this.onlyShadow=!1},$3Dmol.Light.prototype=Object.create($3Dmol.Object3D.prototype),$3Dmol.Material=function(){$3Dmol.EventDispatcher.call(this),this.id=$3Dmol.MaterialIdCount++,this.name="",this.side=$3Dmol.FrontSide,this.opacity=1,this.transparent=!1,this.depthTest=!0,this.depthWrite=!0,this.stencilTest=!0,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.alphaTest=0,this.visible=!0,this.needsUpdate=!0},$3Dmol.Material.prototype.setValues=function(e){if(void 0!==e)for(var t in e){var r=e[t];if(void 0!==r){if(t in this){var n=this[t];n instanceof $3Dmol.Color&&r instanceof $3Dmol.Color?n.copy(r):n instanceof $3Dmol.Color?n.set(r):n instanceof $3Dmol.Vector3&&r instanceof $3Dmol.Vector3?n.copy(r):this[t]=r}}else console.warn("$3Dmol.Material: '"+t+"' parameter is undefined.")}},$3Dmol.Material.prototype.clone=function(e){return void 0===e&&(e=new $3Dmol.Material),e.name=this.name,e.side=this.side,e.opacity=this.opacity,e.transparent=this.transparent,e.depthTest=this.depthTest,e.depthWrite=this.depthWrite,e.stencilTest=this.stencilTest,e.polygonOffset=this.polygonOffset,e.polygonOffsetFactor=this.polygonOffsetFactor,e.polygonOffsetUnits=this.polygonOffsetUnits,e.alphaTest=this.alphaTest,e.overdraw=this.overdraw,e.visible=this.visible,e},$3Dmol.Material.prototype.dispose=function(){this.dispatchEvent({type:"dispose"})},$3Dmol.MaterialIdCount=0,$3Dmol.LineBasicMaterial=function(e){$3Dmol.Material.call(this),this.color=new $3Dmol.Color(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.vertexColors=!1,this.fog=!0,this.shaderID="basic",this.setValues(e)},$3Dmol.LineBasicMaterial.prototype=Object.create($3Dmol.Material.prototype),$3Dmol.LineBasicMaterial.prototype.clone=function(){var e=new $3Dmol.LineBasicMaterial;return $3Dmol.Material.prototype.clone.call(this,e),e.color.copy(this.color),e},$3Dmol.MeshLambertMaterial=function(e){$3Dmol.Material.call(this),this.color=new $3Dmol.Color(16777215),this.ambient=new $3Dmol.Color(1048575),this.emissive=new $3Dmol.Color(0),this.wrapAround=!1,this.wrapRGB=new $3Dmol.Vector3(1,1,1),this.map=null,this.lightMap=null,this.specularMap=null,this.envMap=null,this.reflectivity=1,this.refractionRatio=.98,this.fog=!0,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.shading=$3Dmol.SmoothShading,this.shaderID="lambert",this.vertexColors=$3Dmol.NoColors,this.skinning=!1,this.setValues(e)},$3Dmol.MeshLambertMaterial.prototype=Object.create($3Dmol.Material.prototype),$3Dmol.MeshLambertMaterial.prototype.clone=function(e){return void 0===e&&(e=new $3Dmol.MeshLambertMaterial),$3Dmol.Material.prototype.clone.call(this,e),e.color.copy(this.color),e.ambient.copy(this.ambient),e.emissive.copy(this.emissive),e.wrapAround=this.wrapAround,e.wrapRGB.copy(this.wrapRGB),e.map=this.map,e.lightMap=this.lightMap,e.specularMap=this.specularMap,e.envMap=this.envMap,e.combine=this.combine,e.reflectivity=this.reflectivity,e.refractionRatio=this.refractionRatio,e.fog=this.fog,e.shading=this.shading,e.shaderID=this.shaderID,e.vertexColors=this.vertexColors,e.skinning=this.skinning,e.morphTargets=this.morphTargets,e.morphNormals=this.morphNormals,e},$3Dmol.MeshDoubleLambertMaterial=function(e){$3Dmol.MeshLambertMaterial.call(this,e),this.shaderID="lambertdouble",this.side=$3Dmol.DoubleSide},$3Dmol.MeshDoubleLambertMaterial.prototype=Object.create($3Dmol.MeshLambertMaterial.prototype),$3Dmol.MeshDoubleLambertMaterial.prototype.clone=function(){var e=new $3Dmol.MeshDoubleLambertMaterial;return $3Dmol.MeshLambertMaterial.prototype.clone.call(this,e),e},$3Dmol.MeshOutlineMaterial=function(e){$3Dmol.Material.call(this),e=e||{},this.fog=!0,this.shaderID="outline",this.wireframe=!1,this.outlineColor=e.color||new $3Dmol.Color(0,0,0),this.outlineWidth=e.width||.1,this.outlinePushback=e.pushback||1},$3Dmol.MeshOutlineMaterial.prototype=Object.create($3Dmol.Material.prototype),$3Dmol.MeshOutlineMaterial.prototype.clone=function(e){return void 0===e&&(e=new $3Dmol.MeshOutlineMaterial),$3Dmol.Material.prototype.clone.call(this,e),e.fog=this.fog,e.shaderID=this.shaderID,e.wireframe=this.wireframe,e},$3Dmol.ImposterMaterial=function(e){$3Dmol.Material.call(this),this.color=new $3Dmol.Color(16777215),this.ambient=new $3Dmol.Color(1048575),this.emissive=new $3Dmol.Color(0),this.imposter=!0,this.wrapAround=!1,this.wrapRGB=new $3Dmol.Vector3(1,1,1),this.map=null,this.lightMap=null,this.specularMap=null,this.envMap=null,this.reflectivity=1,this.refractionRatio=.98,this.fog=!0,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.shading=$3Dmol.SmoothShading,this.shaderID=null,this.vertexColors=$3Dmol.NoColors,this.skinning=!1,this.setValues(e)},$3Dmol.ImposterMaterial.prototype=Object.create($3Dmol.Material.prototype),$3Dmol.ImposterMaterial.prototype.clone=function(){var e=new $3Dmol.ImposterMaterial;return $3Dmol.Material.prototype.clone.call(this,e),e.color.copy(this.color),e.ambient.copy(this.ambient),e.emissive.copy(this.emissive),e.wrapAround=this.wrapAround,e.wrapRGB.copy(this.wrapRGB),e.map=this.map,e.lightMap=this.lightMap,e.specularMap=this.specularMap,e.envMap=this.envMap,e.combine=this.combine,e.reflectivity=this.reflectivity,e.refractionRatio=this.refractionRatio,e.fog=this.fog,e.shading=this.shading,e.shaderID=this.shaderID,e.vertexColors=this.vertexColors,e.skinning=this.skinning,e.morphTargets=this.morphTargets,e.morphNormals=this.morphNormals,e},$3Dmol.SphereImposterMaterial=function(e){$3Dmol.ImposterMaterial.call(this),this.shaderID="sphereimposter",this.setValues(e)},$3Dmol.SphereImposterMaterial.prototype=Object.create($3Dmol.ImposterMaterial.prototype),$3Dmol.SphereImposterMaterial.prototype.clone=function(){var e=new $3Dmol.SphereImposterMaterial;return $3Dmol.ImposterMaterial.prototype.clone.call(this,e),e},$3Dmol.SphereImposterOutlineMaterial=function(e){$3Dmol.ImposterMaterial.call(this),e=e||{},this.shaderID="sphereimposteroutline",this.outlineColor=e.color||new $3Dmol.Color(0,0,0),this.outlineWidth=e.width||.1,this.outlinePushback=e.pushback||1,this.setValues(e)},$3Dmol.SphereImposterOutlineMaterial.prototype=Object.create($3Dmol.ImposterMaterial.prototype),$3Dmol.SphereImposterOutlineMaterial.prototype.clone=function(){var e=new $3Dmol.SphereImposterOutlineMaterial;return $3Dmol.ImposterMaterial.prototype.clone.call(this,e),e.outlineColor=this.outlineColor,e.outlineWidth=this.outlineWidth,e.outlinePushback=this.outlinePushback,e},$3Dmol.StickImposterMaterial=function(e){$3Dmol.ImposterMaterial.call(this),this.shaderID="stickimposter",this.setValues(e)},$3Dmol.StickImposterMaterial.prototype=Object.create($3Dmol.ImposterMaterial.prototype),$3Dmol.StickImposterMaterial.prototype.clone=function(){var e=new $3Dmol.StickImposterMaterial;return $3Dmol.ImposterMaterial.prototype.clone.call(this,e),e},$3Dmol.StickImposterOutlineMaterial=function(e){$3Dmol.ImposterMaterial.call(this),e=e||{},this.shaderID="stickimposteroutline",this.outlineColor=e.color||new $3Dmol.Color(0,0,0),this.outlineWidth=e.width||.1,this.outlinePushback=e.pushback||1,this.setValues(e)},$3Dmol.StickImposterOutlineMaterial.prototype=Object.create($3Dmol.ImposterMaterial.prototype),$3Dmol.StickImposterOutlineMaterial.prototype.clone=function(){var e=new $3Dmol.StickImposterOutlineMaterial;return $3Dmol.ImposterMaterial.prototype.clone.call(this,e),e.outlineColor=this.outlineColor,e.outlineWidth=this.outlineWidth,e.outlinePushback=this.outlinePushback,e},$3Dmol.InstancedMaterial=function(e){$3Dmol.Material.call(this),this.color=new $3Dmol.Color(16777215),this.ambient=new $3Dmol.Color(1048575),this.emissive=new $3Dmol.Color(0),this.wrapAround=!1,this.wrapRGB=new $3Dmol.Vector3(1,1,1),this.map=null,this.lightMap=null,this.specularMap=null,this.envMap=null,this.reflectivity=1,this.refractionRatio=.98,this.fog=!0,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.shading=$3Dmol.SmoothShading,this.shaderID="instanced",this.vertexColors=$3Dmol.NoColors,this.skinning=!1,this.sphere=null,this.setValues(e)},$3Dmol.InstancedMaterial.prototype=Object.create($3Dmol.Material.prototype),$3Dmol.InstancedMaterial.prototype.clone=function(){var e=new $3Dmol.InstancedMaterial;return $3Dmol.Material.prototype.clone.call(this,e),e.color.copy(this.color),e.ambient.copy(this.ambient),e.emissive.copy(this.emissive),e.wrapAround=this.wrapAround,e.wrapRGB.copy(this.wrapRGB),e.map=this.map,e.lightMap=this.lightMap,e.specularMap=this.specularMap,e.envMap=this.envMap,e.combine=this.combine,e.reflectivity=this.reflectivity,e.refractionRatio=this.refractionRatio,e.fog=this.fog,e.shading=this.shading,e.shaderID=this.shaderID,e.vertexColors=this.vertexColors,e.skinning=this.skinning,e.morphTargets=this.morphTargets,e.morphNormals=this.morphNormals,e.sphere=this.sphere,e},$3Dmol.SpriteMaterial=function(e){$3Dmol.Material.call(this),this.color=new $3Dmol.Color(16777215),this.map=new $3Dmol.Texture,this.useScreenCoordinates=!0,this.depthTest=!this.useScreenCoordinates,this.sizeAttenuation=!this.useScreenCoordinates,this.scaleByViewPort=!this.sizeAttenuation,this.alignment=$3Dmol.SpriteAlignment.center.clone(),this.fog=!1,this.uvOffset=new $3Dmol.Vector2(0,0),this.uvScale=new $3Dmol.Vector2(1,1),this.setValues(e),void 0===(e=e||{}).depthTest&&(this.depthTest=!this.useScreenCoordinates),void 0===e.sizeAttenuation&&(this.sizeAttenuation=!this.useScreenCoordinates),void 0===e.scaleByViewPort&&(this.scaleByViewPort=!this.sizeAttenuation)},$3Dmol.SpriteMaterial.prototype=Object.create($3Dmol.Material.prototype),$3Dmol.SpriteMaterial.prototype.clone=function(){var e=new $3Dmol.SpriteMaterial;return $3Dmol.Material.prototype.clone.call(this,e),e.color.copy(this.color),e.map=this.map,e.useScreenCoordinates=this.useScreenCoordinates,e.sizeAttenuation=this.sizeAttenuation,e.scaleByViewport=this.scaleByViewPort,e.alignment.copy(this.alignment),e.uvOffset.copy(this.uvOffset),e},$3Dmol.SpriteAlignment={},$3Dmol.SpriteAlignment.topLeft=new $3Dmol.Vector2(1,-1),$3Dmol.SpriteAlignment.topCenter=new $3Dmol.Vector2(0,-1),$3Dmol.SpriteAlignment.topRight=new $3Dmol.Vector2(-1,-1),$3Dmol.SpriteAlignment.centerLeft=new $3Dmol.Vector2(1,0),$3Dmol.SpriteAlignment.center=new $3Dmol.Vector2(0,0),$3Dmol.SpriteAlignment.centerRight=new $3Dmol.Vector2(-1,0),$3Dmol.SpriteAlignment.bottomLeft=new $3Dmol.Vector2(1,1),$3Dmol.SpriteAlignment.bottomCenter=new $3Dmol.Vector2(0,1),$3Dmol.SpriteAlignment.bottomRight=new $3Dmol.Vector2(-1,1),$3Dmol.Texture=function(e){$3Dmol.EventDispatcher.call(this),this.id=$3Dmol.TextureIdCount++,this.name="",this.image=e,this.mipmaps=[],this.mapping=new $3Dmol.UVMapping,this.wrapS=$3Dmol.ClampToEdgeWrapping,this.wrapT=$3Dmol.ClampToEdgeWrapping,this.magFilter=$3Dmol.LinearFilter,this.minFilter=$3Dmol.LinearMipMapLinearFilter,this.anisotropy=1,this.format=$3Dmol.RGBAFormat,this.type=$3Dmol.UnsignedByteType,this.offset=new $3Dmol.Vector2(0,0),this.repeat=new $3Dmol.Vector2(1,1),this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.needsUpdate=!1,this.onUpdate=null},$3Dmol.Texture.prototype={constructor:$3Dmol.Texture,clone:function(e){return void 0===e&&(e=new $3Dmol.Texture),e.image=this.image,e.mipmaps=this.mipmaps.slice(0),e.mapping=this.mapping,e.wrapS=this.wrapS,e.wrapT=this.wrapT,e.magFilter=this.magFilter,e.minFilter=this.minFilter,e.anisotropy=this.anisotropy,e.format=this.format,e.type=this.type,e.offset.copy(this.offset),e.repeat.copy(this.repeat),e.generateMipmaps=this.generateMipmaps,e.premultiplyAlpha=this.premultiplyAlpha,e.flipY=this.flipY,e.unpackAlignment=this.unpackAlignment,e},dispose:function(){this.dispatchEvent({type:"dispose"})}},$3Dmol.TextureIdCount=0,$3Dmol.FrontSide=0,$3Dmol.BackSide=1,$3Dmol.DoubleSide=2,$3Dmol.NoShading=0,$3Dmol.FlatShading=1,$3Dmol.SmoothShading=2,$3Dmol.NoColors=0,$3Dmol.FaceColors=1,$3Dmol.VertexColors=2,$3Dmol.MultiplyOperation=0,$3Dmol.MixOperation=1,$3Dmol.AddOperation=2,$3Dmol.UVMapping=function(){},$3Dmol.ClampToEdgeWrapping=1001,$3Dmol.LinearFilter=1006,$3Dmol.LinearMipMapLinearFilter=1008,$3Dmol.UnsignedByteType=1009,$3Dmol.RGBAFormat=1021,$3Dmol.Line=function(e,t,r){$3Dmol.Object3D.call(this),this.geometry=e,this.material=void 0!==t?t:new $3Dmol.LineBasicMaterial({color:16777215*Math.random()}),this.type=void 0!==r?r:$3Dmol.LineStrip},$3Dmol.LineStrip=0,$3Dmol.LinePieces=1,$3Dmol.Line.prototype=Object.create($3Dmol.Object3D.prototype),$3Dmol.Line.prototype.clone=function(e){return void 0===e&&(e=new $3Dmol.Line(this.geometry,this.material,this.type)),$3Dmol.Object3D.prototype.clone.call(this,e),e},$3Dmol.Mesh=function(e,t){$3Dmol.Object3D.call(this),this.geometry=e,this.material=void 0!==t?t:new $3Dmol.MeshBasicMaterial({color:16777215*Math.random(),wireframe:!0})},$3Dmol.Mesh.prototype=Object.create($3Dmol.Object3D.prototype),$3Dmol.Mesh.prototype.clone=function(e){return void 0===e&&(e=new $3Dmol.Mesh(this.geometry,this.material)),$3Dmol.Object3D.prototype.clone.call(this,e),e},$3Dmol.Sprite=function(e){$3Dmol.Object3D.call(this),this.material=void 0!==e?e:new $3Dmol.SpriteMaterial,this.rotation3d=this.rotation,this.rotation=0},$3Dmol.Sprite.prototype=Object.create($3Dmol.Object3D.prototype),$3Dmol.Sprite.prototype.updateMatrix=function(){this.matrix.setPosition(this.position),this.rotation3d.set(0,0,this.rotation),this.matrix.setRotationFromEuler(this.rotation3d),1===this.scale.x&&1===this.scale.y||this.matrix.scale(this.scale),this.matrixWorldNeedsUpdate=!0},$3Dmol.Sprite.prototype.clone=function(e){return void 0===e&&(e=new $3Dmol.Sprite(this.material)),$3Dmol.Object3D.prototype.clone.call(this,e),e},$3Dmol.Renderer=function(e){e=e||{},this.row=e.row,this.col=e.col,this.rows=e.rows,this.cols=e.cols;var t=void 0!==e.canvas?e.canvas:document.createElement("canvas"),r=void 0!==e.precision?e.precision:"highp",n=void 0===e.alpha||e.alpha,i=void 0===e.premultipliedAlpha||e.premultipliedAlpha,o=void 0!==e.antialias&&e.antialias,a=void 0===e.stencil||e.stencil,s=void 0!==e.preserveDrawingBuffer&&e.preserveDrawingBuffer,l=void 0!==e.clearColor?new $3Dmol.Color(e.clearColor):new $3Dmol.Color(0),c=void 0!==e.clearAlpha?e.clearAlpha:0,u=new $3Dmol.MeshOutlineMaterial(e.outline),h=new $3Dmol.SphereImposterOutlineMaterial(e.outline),f=new $3Dmol.StickImposterOutlineMaterial(e.outline),d=!!e.outline;this.domElement=t,this.context=null,this.devicePixelRatio=void 0!==e.devicePixelRatio?e.devicePixelRatio:void 0!==window.devicePixelRatio?window.devicePixelRatio:1,t.id=e.id,this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.autoUpdateObjects=!0,this.autoUpdateScene=!0,this.renderPluginsPost=[],this.info={memory:{programs:0,geometries:0,textures:0},render:{calls:0,vertices:0,faces:0,points:0}};var p,m=this,v=[],g=0,y=null,b=-1,x=null,w=null,D=0,C=-1,A=-1,$=-1,S=-1,M=null,_=null,z=0,T=0,L=0,E=0,F={},k=new $3Dmol.Matrix4,I=new $3Dmol.Vector3,P=new $3Dmol.Vector3,O=!0,R={ambient:[0,0,0],directional:{length:0,colors:[],positions:[]},point:{length:0,colors:[],positions:[],distances:[]},spot:{length:0,colors:[],positions:[],distances:[],directions:[],anglesCos:[],exponents:[]},hemi:{length:0,skyColors:[],groundColors:[],positions:[]}};!function(){try{if(!(p=t.getContext("experimental-webgl",{alpha:n,premultipliedAlpha:i,antialias:o,stencil:a,preserveDrawingBuffer:s}))&&!(p=t.getContext("webgl",{alpha:n,premultipliedAlpha:i,antialias:o,stencil:a,preserveDrawingBuffer:s})))throw"Error creating WebGL context."}catch(e){console.error(e)}}(),p.clearColor(0,0,0,1),p.clearDepth(1),p.clearStencil(0),p.enable(p.DEPTH_TEST),p.depthFunc(p.LEQUAL),p.frontFace(p.CCW),p.cullFace(p.BACK),p.enable(p.CULL_FACE),p.enable(p.BLEND),p.blendEquation(p.FUNC_ADD),p.blendFunc(p.SRC_ALPHA,p.ONE_MINUS_SRC_ALPHA),p.clearColor(l.r,l.g,l.b,c),this.context=p;var N=p.getExtension("ANGLE_instanced_arrays"),B=p.getExtension("EXT_frag_depth");function V(e){F[e]||(p.enableVertexAttribArray(e),F[e]=!0)}function U(e){e!==_&&(p.lineWidth(e),_=e)}this.supportedExtensions=function(){return{supportsAIA:Boolean(N),supportsImposters:Boolean(B)}},this.getContext=function(){return p},this.getPrecision=function(){return r},this.setClearColorHex=function(e,t){l.setHex(e),c=t,p.clearColor(l.r,l.g,l.b,c)},this.enableOutline=function(e){u=new $3Dmol.MeshOutlineMaterial(e),h=new $3Dmol.SphereImposterOutlineMaterial(e),f=new $3Dmol.StickImposterOutlineMaterial(e),d=!0},this.disableOutline=function(){d=!1},this.setViewport=function(){if(null!=this.rows&&null!=this.cols&&null!=this.row&&null!=this.col){var e=t.width/this.cols,r=t.height/this.rows;z=e*this.devicePixelRatio,T=r*this.devicePixelRatio,p.drawingBufferWidth=3*z,p.drawingBufferHeight=T,p.enable(p.SCISSOR_TEST),p.scissor(e*this.col,r*this.row,e,r),p.viewport(e*this.col,r*this.row,e,r)}},this.setSize=function(e,r){if(null!=this.rows&&null!=this.cols&&null!=this.row&&null!=this.col){var n=e/this.cols,i=r/this.rows;t.width=e*this.devicePixelRatio,t.height=r*this.devicePixelRatio,z=n*this.devicePixelRatio,T=i*this.devicePixelRatio,t.style.width=e+"px",t.style.height=r+"px",this.setViewport()}else z=t.width=e*this.devicePixelRatio,T=t.height=r*this.devicePixelRatio,t.style.width=e+"px",t.style.height=r+"px",p.viewport(0,0,p.drawingBufferWidth,p.drawingBufferHeight)},this.clear=function(e,t,r){var n=0;(void 0===e||e)&&(n|=p.COLOR_BUFFER_BIT),(void 0===t||t)&&(n|=p.DEPTH_BUFFER_BIT),(void 0===r||r)&&(n|=p.STENCIL_BUFFER_BIT),p.clear(n)},this.clearTarget=function(e,t,r){this.clear(e,t,r)},this.setMaterialFaces=function(e,t){var r=e.side===$3Dmol.DoubleSide,n=e.side===$3Dmol.BackSide;n=t?!n:n,C!==r&&(r?p.disable(p.CULL_FACE):p.enable(p.CULL_FACE),C=r),A!==n&&(n?p.frontFace(p.CW):p.frontFace(p.CCW),A=n)},this.setDepthTest=function(e){$!==e&&(e?p.enable(p.DEPTH_TEST):p.disable(p.DEPTH_TEST),$=e)},this.setDepthWrite=function(e){S!==e&&(p.depthMask(e),S=e)},this.setBlending=function(e){e?(p.enable(p.BLEND),p.blendEquationSeparate(p.FUNC_ADD,p.FUNC_ADD),p.blendFuncSeparate(p.SRC_ALPHA,p.ONE_MINUS_SRC_ALPHA,p.ONE,p.ONE_MINUS_SRC_ALPHA)):p.disable(p.BLEND),e},this.addPostPlugin=function(e){e.init(this),this.renderPluginsPost.push(e)};var j=function(e){var t=e.program;if(void 0!==t){var r,n,i;e.program=void 0;var o=!1;for(r=0,n=v.length;r<n;r++)if((i=v[r]).program===t){i.usedTimes--,0===i.usedTimes&&(o=!0);break}if(!0===o){var a=[];for(r=0,n=v.length;r<n;r++)(i=v[r]).program!==t&&a.push(i);v=a,p.deleteProgram(t),m.info.memory.programs--}}},G=function(e){var t=e.target;t.removeEventListener("dispose",G),function(e){if(e.__webglInit=void 0,void 0!==e.__webglVertexBuffer&&p.deleteBuffer(e.__webglVertexBuffer),void 0!==e.__webglColorBuffer&&p.deleteBuffer(e.__webglColorBuffer),void 0!==e.geometryGroups)for(var t=0,r=e.groups;t<r;t++){var n=e.geometryGroups[t];void 0!==n.__webglVertexBuffer&&p.deleteBuffer(n.__webglVertexBuffer),void 0!==n.__webglColorBuffer&&p.deleteBuffer(n.__webglColorBuffer),void 0!==n.__webglNormalBuffer&&p.deleteBuffer(n.__webglNormalBuffer),void 0!==n.__webglFaceBuffer&&p.deleteBuffer(n.__webglFaceBuffer),void 0!==n.__webglLineBuffer&&p.deleteBuffer(n.__webglLineBuffer)}}(t),m.info.memory.geometries--},q=function(e){var t=e.target;t.removeEventListener("dispose",q),function(e){if(e.image&&e.image.__webglTextureCube)p.deleteTexture(e.image.__webglTextureCube);else{if(!e.__webglInit)return;e.__webglInit=!1,p.deleteTexture(e.__webglTexture)}}(t),m.info.memory.textures--},H=function(e){var t=e.target;t.removeEventListener("dispose",H),j(t)};function W(e,t){var r;return"fragment"===e?r=p.createShader(p.FRAGMENT_SHADER):"vertex"===e&&(r=p.createShader(p.VERTEX_SHADER)),p.shaderSource(r,t),p.compileShader(r),p.getShaderParameter(r,p.COMPILE_STATUS)?r:(console.error(p.getShaderInfoLog(r)),console.error("could not initialize shader"),null)}function Y(e,t,r,n,i){n.needsUpdate&&(n.program&&j(n),m.initMaterial(n,t,r,i),n.needsUpdate=!1);var o=!1,a=n.program,s=a.uniforms,l=n.uniforms;return a!=y&&(p.useProgram(a),y=a,o=!0),n.id!=b&&(b=n.id,o=!0),e!=w&&(w=e,o=!0),p.uniformMatrix4fv(s.projectionMatrix,!1,e.projectionMatrix.elements),p.uniformMatrix4fv(s.modelViewMatrix,!1,i._modelViewMatrix.elements),p.uniformMatrix3fv(s.normalMatrix,!1,i._normalMatrix.elements),o&&(l.fogColor.value=r.color,l.fogNear.value=r.near,l.fogFar.value=r.far,n.shaderID.startsWith("lambert")||"instanced"===n.shaderID||n.shaderID.endsWith("imposter")?(p.uniformMatrix4fv(s.viewMatrix,!1,e.matrixWorldInverse.elements),O&&(!function(e,t){var r,n,i,o,a,s=R,l=s.directional.colors,c=s.directional.positions,u=0,h=0;for(r=0,n=t.length;r<n;r++)if(i=t[r],o=i.color,a=i.intensity,i.distance,i instanceof $3Dmol.Light){if(0,P.getPositionFromMatrix(i.matrixWorld),I.getPositionFromMatrix(i.target.matrixWorld),P.sub(I),P.normalize(),0===P.x&&0===P.y&&0===P.z)continue;c[h]=P.x,c[h+1]=P.y,c[h+2]=P.z,l[h]=o.r*a,l[h+1]=o.g*a,l[h+2]=o.b*a,h+=3,u++}s.ambient[0]=0,s.ambient[1]=0,s.ambient[2]=0,s.directional.length=u}(0,t),O=!1),l.directionalLightColor.value=R.directional.colors,l.directionalLightDirection.value=R.directional.positions):n.shaderID.endsWith("outline")?(l.outlineColor.value=n.outlineColor,l.outlineWidth.value=n.outlineWidth,l.outlinePushback.value=n.outlinePushback):"sphereimposter"===n.shaderID&&(p.uniformMatrix4fv(s.viewMatrix,!1,e.matrixWorldInverse.elements),p.uniformMatrix3fv(s.normalMatrix,!1,i._normalMatrix.elements),l.directionalLightColor.value=R.directional.colors,l.directionalLightDirection.value=R.directional.positions),l.opacity.value=n.opacity,function(e,t){var r,n,i,o;for(r in t)e[r]&&(n=t[r].type,i=t[r].value,o=e[r],"f"===n?p.uniform1f(o,i):"fv"===n?p.uniform3fv(o,i):"c"===n?p.uniform3f(o,i.r,i.g,i.b):"f4"===n&&p.uniform4f(o,i[0],i[1],i[2],i[3]))}(s,l)),a}function Z(e,t,r,n,i,o,a){var s,l,c,v,g,y,b,x;t?(g=e.length-1,y=-1,b=-1):(g=0,y=e.length,b=1);for(var w=g;w!==y;w+=b)if((s=e[w]).render){if(l=s.object,c=s.buffer,!(v=s[r]))continue;a&&m.setBlending(!0),m.setDepthTest(v.depthTest),m.setDepthWrite(v.depthWrite),x=v.polygonOffset,v.polygonOffsetFactor,v.polygonOffsetUnits,M!==x&&(x?p.enable(p.POLYGON_OFFSET_FILL):p.disable(p.POLYGON_OFFSET_FILL));var D=l._modelViewMatrix.isReflected();m.setMaterialFaces(v,D),m.renderBuffer(n,i,o,v,c,l),(d||v.outline)&&("sphereimposter"==v.shaderID?m.renderBuffer(n,i,o,h,c,l):"stickimposter"==v.shaderID?m.renderBuffer(n,i,o,f,c,l):v.wireframe||"basic"===v.shaderID||0===v.opacity||m.renderBuffer(n,i,o,u,c,l))}}function X(e,t){var r,n,i,o;if(!e.__webglInit&&(e.__webglInit=!0,e._modelViewMatrix=new $3Dmol.Matrix4,e._normalMatrix=new $3Dmol.Matrix3,void 0!==e.geometry&&void 0===e.geometry.__webglInit&&(e.geometry.__webglInit=!0,e.geometry.addEventListener("dispose",G)),e instanceof $3Dmol.Mesh||e instanceof $3Dmol.Line))for(i=e.geometry,e.material,r=0,n=i.geometryGroups.length;r<n;r++)(o=i.geometryGroups[r]).id=D++,o.__webglVertexBuffer||(e instanceof $3Dmol.Mesh?(te(o),i.elementsNeedUpdate=!0,i.normalsNeedUpdate=!0):e instanceof $3Dmol.Line&&re(o),i.verticesNeedUpdate=!0,i.colorsNeedUpdate=!0);if(!e.__webglActive){if(e instanceof $3Dmol.Mesh||e instanceof $3Dmol.Line)for(r=0,n=(i=e.geometry).geometryGroups.length;r<n;r++)o=i.geometryGroups[r],ne(t.__webglObjects,o,e);else e instanceof $3Dmol.Sprite&&t.__webglSprites.push(e);e.__webglActive=!0}}function Q(e){var t,r=e.geometry;if(e instanceof $3Dmol.Mesh||e instanceof $3Dmol.Line){for(var n=0,i=r.geometryGroups.length;n<i;n++)t=r.geometryGroups[n],(r.verticesNeedUpdate||r.elementsNeedUpdate||r.colorsNeedUpdate||r.normalsNeedUpdate)&&ee(t,p.STATIC_DRAW);r.verticesNeedUpdate=!1,r.elementsNeedUpdate=!1,r.normalsNeedUpdate=!1,r.colorsNeedUpdate=!1,r.buffersNeedUpdate=!1}}function K(e,t){e instanceof $3Dmol.Mesh||e instanceof $3Dmol.Line?function(e,t){for(var r=e.length-1;r>=0;--r)e[r].object===t&&e.splice(r,1)}(t.__webglObjects,e):e instanceof $3Dmol.Sprite&&function(e,t){for(var r=e.length-1;r>=0;--r)e[r]===t&&e.splice(r,1)}(t.__webglSprites,e),e.__webglActive=!1}function J(e){var t=e.object.material;if(t.transparent){if(e.opaque=null,e.transparent=t,!t.wireframe){var r=t.clone();r.opacity=0,e.blank=r}}else e.opaque=t,e.transparent=null}function ee(e,t){var r=e.vertexArray,n=e.colorArray;if(void 0!==e.__webglOffsetBuffer?(p.bindBuffer(p.ARRAY_BUFFER,e.__webglOffsetBuffer),p.bufferData(p.ARRAY_BUFFER,r,t)):(p.bindBuffer(p.ARRAY_BUFFER,e.__webglVertexBuffer),p.bufferData(p.ARRAY_BUFFER,r,t)),p.bindBuffer(p.ARRAY_BUFFER,e.__webglColorBuffer),p.bufferData(p.ARRAY_BUFFER,n,t),e.normalArray&&void 0!==e.__webglNormalBuffer){var i=e.normalArray;p.bindBuffer(p.ARRAY_BUFFER,e.__webglNormalBuffer),p.bufferData(p.ARRAY_BUFFER,i,t)}if(e.radiusArray&&void 0!==e.__webglRadiusBuffer&&(p.bindBuffer(p.ARRAY_BUFFER,e.__webglRadiusBuffer),p.bufferData(p.ARRAY_BUFFER,e.radiusArray,t)),e.faceArray&&void 0!==e.__webglFaceBuffer){var o=e.faceArray;p.bindBuffer(p.ELEMENT_ARRAY_BUFFER,e.__webglFaceBuffer),p.bufferData(p.ELEMENT_ARRAY_BUFFER,o,t)}if(e.lineArray&&void 0!==e.__webglLineBuffer){var a=e.lineArray;p.bindBuffer(p.ELEMENT_ARRAY_BUFFER,e.__webglLineBuffer),p.bufferData(p.ELEMENT_ARRAY_BUFFER,a,t)}}function te(e){e.radiusArray&&(e.__webglRadiusBuffer=p.createBuffer()),e.useOffset&&(e.__webglOffsetBuffer=p.createBuffer()),e.__webglVertexBuffer=p.createBuffer(),e.__webglNormalBuffer=p.createBuffer(),e.__webglColorBuffer=p.createBuffer(),e.__webglFaceBuffer=p.createBuffer(),e.__webglLineBuffer=p.createBuffer(),m.info.memory.geometries++}function re(e){e.__webglVertexBuffer=p.createBuffer(),e.__webglColorBuffer=p.createBuffer(),m.info.memory.geometries++}function ne(e,t,r){e.push({buffer:t,object:r,opaque:null,transparent:null})}function ie(e,t){e._modelViewMatrix.multiplyMatrices(t.matrixWorldInverse,e.matrixWorld),e._normalMatrix.getInverse(e._modelViewMatrix),e._normalMatrix.transpose()}function oe(e){return 0==(e&e-1)}function ae(){return p.LINEAR}function se(e){return e===$3Dmol.UnsignedByteType?p.UNSIGNED_BYTE:e===$3Dmol.RGBAFormat?p.RGBA:0}this.initMaterial=function(e){var t,n;if(e.addEventListener("dispose",H),n=e.shaderID){var i=$3Dmol.ShaderLib[n];e.vertexShader=i.vertexShader,e.fragmentShader=i.fragmentShader,e.uniforms=$3Dmol.ShaderUtils.clone(i.uniforms)}t={wireframe:e.wireframe,fragdepth:e.imposter},e.program=function(e,t,n,i){var o,a,s,l,c=[];for(o in c.push(e),c.push(t),i)c.push(o),c.push(i[o]);for(l=c.join(),o=0,a=v.length;o<a;o++){var u=v[o];if(u.code===l)return u.usedTimes++,u.program}s=p.createProgram();var h,f,d,y="precision "+r+" float;",b=[y].join("\n"),x=W("fragment",[i.fragdepth?"#extension GL_EXT_frag_depth: enable":"",i.wireframe?"#define WIREFRAME 1":"",y].join("\n")+e),w=W("vertex",b+t);for(f in p.attachShader(s,w),p.attachShader(s,x),p.linkProgram(s),p.getProgramParameter(s,p.LINK_STATUS)||console.error("Could not initialize shader"),s.uniforms={},s.attributes={},h=["viewMatrix","modelViewMatrix","projectionMatrix","normalMatrix"],n)h.push(f);for(d=0;d<h.length;d++){var D=h[d];s.uniforms[D]=p.getUniformLocation(s,D)}for(h=["position","normal","color","lineDistance","offset","radius"],d=0;d<h.length;d++){var C=h[d];s.attributes[C]=p.getAttribLocation(s,C)}return s.id=g++,v.push({program:s,code:l,usedTimes:1}),m.info.memory.programs=v.length,s}(e.fragmentShader,e.vertexShader,e.uniforms,t)},this.renderBuffer=function(e,t,r,n,i,o){if(n.visible){var a,s;s=(a=Y(e,t,r,n,o)).attributes;var l,c,u=!1,h=n.wireframe?1:0,f=16777215*i.id+2*a.id+h;if(f!==x&&(x=f,u=!0),u&&(!function(){for(var e in F)F[e]&&(p.disableVertexAttribArray(e),F[e]=!1)}(),s.position>=0&&(p.bindBuffer(p.ARRAY_BUFFER,i.__webglVertexBuffer),V(s.position),p.vertexAttribPointer(s.position,3,p.FLOAT,!1,0,0)),s.color>=0&&(p.bindBuffer(p.ARRAY_BUFFER,i.__webglColorBuffer),V(s.color),p.vertexAttribPointer(s.color,3,p.FLOAT,!1,0,0)),s.normal>=0&&(p.bindBuffer(p.ARRAY_BUFFER,i.__webglNormalBuffer),V(s.normal),p.vertexAttribPointer(s.normal,3,p.FLOAT,!1,0,0)),s.offset>=0&&(p.bindBuffer(p.ARRAY_BUFFER,i.__webglOffsetBuffer),V(s.offset),p.vertexAttribPointer(s.offset,3,p.FLOAT,!1,0,0)),s.radius>=0&&(p.bindBuffer(p.ARRAY_BUFFER,i.__webglRadiusBuffer),V(s.radius),p.vertexAttribPointer(s.radius,1,p.FLOAT,!1,0,0))),o instanceof $3Dmol.Mesh){if("instanced"===n.shaderID){var d=n.sphere.geometryGroups[0];u&&(p.bindBuffer(p.ARRAY_BUFFER,i.__webglVertexBuffer),p.bufferData(p.ARRAY_BUFFER,d.vertexArray,p.STATIC_DRAW),p.bindBuffer(p.ARRAY_BUFFER,i.__webglNormalBuffer),p.bufferData(p.ARRAY_BUFFER,d.normalArray,p.STATIC_DRAW),p.bindBuffer(p.ELEMENT_ARRAY_BUFFER,i.__webglFaceBuffer),p.bufferData(p.ELEMENT_ARRAY_BUFFER,d.faceArray,p.STATIC_DRAW)),l=d.faceidx,N.vertexAttribDivisorANGLE(s.offset,1),N.vertexAttribDivisorANGLE(s.radius,1),N.vertexAttribDivisorANGLE(s.color,1),N.drawElementsInstancedANGLE(p.TRIANGLES,l,p.UNSIGNED_SHORT,0,i.radiusArray.length),N.vertexAttribDivisorANGLE(s.offset,0),N.vertexAttribDivisorANGLE(s.radius,0),N.vertexAttribDivisorANGLE(s.color,0)}else n.wireframe?(c=i.lineidx,U(n.wireframeLinewidth),u&&p.bindBuffer(p.ELEMENT_ARRAY_BUFFER,i.__webglLineBuffer),p.drawElements(p.LINES,c,p.UNSIGNED_SHORT,0)):(l=i.faceidx,u&&p.bindBuffer(p.ELEMENT_ARRAY_BUFFER,i.__webglFaceBuffer),p.drawElements(p.TRIANGLES,l,p.UNSIGNED_SHORT,0));m.info.render.calls++,m.info.render.vertices+=l,m.info.render.faces+=l/3}else o instanceof $3Dmol.Line&&(c=i.vertices,U(n.linewidth),p.drawArrays(p.LINES,0,c),m.info.render.calls++)}},this.render=function(e,t,r){if(t instanceof $3Dmol.Camera!=!1){var n,i,o,a,s,u=e.__lights,h=e.fog;for(b=-1,O=!0,this.autoUpdateScene&&e.updateMatrixWorld(),void 0===t.parent&&t.updateMatrixWorld(),t.matrixWorldInverse.getInverse(t.matrixWorld),k.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this.autoUpdateObjects&&this.initWebGLObjects(e),m.info.render.calls=0,m.info.render.vertices=0,m.info.render.faces=0,m.info.render.points=0,L=z,E=T,this.setViewport(),(this.autoClear||r)&&(p.clearColor(l.r,l.g,l.b,c),this.clear(this.autoClearColor,this.autoClearDepth,this.autoClearStencil)),n=0,i=(s=e.__webglObjects).length;n<i;n++)a=(o=s[n]).object,o.render=!1,a.visible&&(ie(a,t),J(o),o.render=!0);this.setBlending(!1),Z(e.__webglObjects,!0,"opaque",t,u,h,!1),Z(e.__webglObjects,!0,"blank",t,u,h,!0),Z(e.__webglObjects,!1,"transparent",t,u,h,!0),function(e,t,r){if(x=-1,y=null,w=null,-1,S=-1,$=-1,C=-1,b=-1,A=-1,!e.length)return;for(var n=0,i=e.length;n<i;n++)O=!0,e[n].render(t,r,L,E),x=-1,y=null,w=null,-1,S=-1,$=-1,C=-1,b=-1,A=-1}(this.renderPluginsPost,e,t),this.setDepthTest(!0),this.setDepthWrite(!0)}else console.error("$3Dmol.Renderer.render: camera is not an instance of $3Dmol.Camera.")},this.initWebGLObjects=function(e){if(e.__webglObjects||(e.__webglObjects=[],e.__webglObjectsImmediate=[],e.__webglSprites=[],e.__webglFlares=[]),e.__objectsAdded.length){for(;e.__objectsAdded.length;)X(e.__objectsAdded[0],e),e.__objectsAdded.splice(0,1);x=-1}for(;e.__objectsRemoved.length;)K(e.__objectsRemoved[0],e),e.__objectsRemoved.splice(0,1);for(var t=0,r=e.__webglObjects.length;t<r;t++)Q(e.__webglObjects[t].object)},this.getXYRatio=function(){return null!=this.rows&&null!=this.cols&&null!=this.row&&null!=this.col?[this.cols,this.rows]:[1,1]},this.getAspect=function(e,r){null!=e&&null!=r||(e=t.width,r=t.height);var n=e/r;null!=this.rows&&null!=this.cols&&null!=this.row&&null!=this.col&&(n=e/this.cols/(r/this.rows));return n},this.setTexture=function(e,t){if(e.needsUpdate){e.__webglInit||(e.__webglInit=!0,e.addEventListener("dispose",q),e.__webglTexture=p.createTexture(),m.info.memory.textures++),p.activeTexture(p.TEXTURE0+t),p.bindTexture(p.TEXTURE_2D,e.__webglTexture),p.pixelStorei(p.UNPACK_FLIP_Y_WEBGL,e.flipY),p.pixelStorei(p.UNPACK_PREMULTIPLY_ALPHA_WEBGL,e.premultiplyAlpha),p.pixelStorei(p.UNPACK_ALIGNMENT,e.unpackAlignment);var r=e.image,n=oe(r.width)&&oe(r.height),i=se(e.format),o=se(e.type);!function(e,t,r){r?(p.texParameteri(e,p.TEXTURE_WRAP_S,se(t.wrapS)),p.texParameteri(e,p.TEXTURE_WRAP_T,se(t.wrapT)),p.texParameteri(e,p.TEXTURE_MAG_FILTER,se(t.magFilter)),p.texParameteri(e,p.TEXTURE_MIN_FILTER,se(t.minFilter))):(p.texParameteri(e,p.TEXTURE_WRAP_S,p.CLAMP_TO_EDGE),p.texParameteri(e,p.TEXTURE_WRAP_T,p.CLAMP_TO_EDGE),p.texParameteri(e,p.TEXTURE_MAG_FILTER,ae(t.magFilter)),p.texParameteri(e,p.TEXTURE_MIN_FILTER,ae(t.minFilter)))}(p.TEXTURE_2D,e,n);var a,s=e.mipmaps;if(s.length>0&&n){for(var l=0,c=s.length;l<c;l++)a=s[l],p.texImage2D(p.TEXTURE_2D,l,i,i,o,a);e.generateMipmaps=!1}else p.texImage2D(p.TEXTURE_2D,0,i,i,o,e.image);e.generateMipmaps&&n&&p.generateMipmap(p.TEXTURE_2D),e.needsUpdate=!1,e.onUpdate&&e.onUpdate()}else p.activeTexture(p.TEXTURE0+t),p.bindTexture(p.TEXTURE_2D,e.__webglTexture)},this.addPostPlugin(new $3Dmol.SpritePlugin)},$3Dmol.Scene=function(){$3Dmol.Object3D.call(this),this.fog=null,this.overrideMaterial=null,this.matrixAutoUpdate=!1,this.__objects=[],this.__lights=[],this.__objectsAdded=[],this.__objectsRemoved=[]},$3Dmol.Scene.prototype=Object.create($3Dmol.Object3D.prototype),$3Dmol.Scene.prototype.__addObject=function(e){if(e instanceof $3Dmol.Light)-1===this.__lights.indexOf(e)&&this.__lights.push(e),e.target&&void 0===e.target.parent&&this.add(e.target);else if(-1===this.__objects.indexOf(e)){this.__objects.push(e),this.__objectsAdded.push(e);var t=this.__objectsRemoved.indexOf(e);-1!==t&&this.__objectsRemoved.splice(t,1)}for(var r=0;r<e.children.length;r++)this.__addObject(e.children[r])},$3Dmol.Scene.prototype.__removeObject=function(e){var t;e instanceof $3Dmol.Light?-1!==(t=this.__lights.indexOf(e))&&this.__lights.splice(t,1):-1!==(t=this.__objects.indexOf(e))&&(this.__objects.splice(t,1),this.__objectsRemoved.push(e),-1!==this.__objectsAdded.indexOf(e)&&this.__objectsAdded.splice(t,1));for(var r=0;r<e.children.length;r++)this.__removeObject(e.children[r])},$3Dmol.Fog=function(e,t,r){this.name="",this.color=new $3Dmol.Color(e),this.near=void 0!==t?t:1,this.far=void 0!==r?r:1e3},$3Dmol.Fog.prototype.clone=function(){return new $3Dmol.Fog(this.color.getHex(),this.near,this.far)},$3Dmol.ShaderUtils={clone:function(e){var t,r={};for(t in e){r[t]={},r[t].type=e[t].type;var n=e[t].value;n instanceof $3Dmol.Color?r[t].value=n.clone():"number"==typeof n?r[t].value=n:n instanceof Array?r[t].value=[]:console.error("Error copying shader uniforms from ShaderLib: unknown type for uniform")}return r},stickimposterFragmentShader:["uniform float opacity;","uniform mat4 projectionMatrix;","uniform vec3 fogColor;","uniform float fogNear;","uniform float fogFar;","varying vec3 vLight;","varying vec3 vColor;","varying vec3 cposition;","varying vec3 p1;","varying vec3 p2;","varying float r;","void main() {","    vec3 color = abs(vColor);","    vec3 pos = cposition;","    vec3 p = pos;","    vec3 v = normalize(pos);","    vec3 pa = p1;","    vec3 va = normalize(p2-p1);","    vec3 tmp1 = v-(dot(v,va)*va);","    vec3 deltap = p-pa;","    float A = dot(tmp1,tmp1);","    if(A == 0.0) discard;","    vec3 tmp2 = deltap-(dot(deltap,va)*va);","    float B = 2.0*dot(tmp1, tmp2);","    float C = dot(tmp2,tmp2)-r*r;","    float det = (B*B) - (4.0*A*C);","    if(det < 0.0) discard;","    float sqrtDet = sqrt(det);","    float posT = (-B+sqrtDet)/(2.0*A);","    float negT = (-B-sqrtDet)/(2.0*A);","    float intersectionT = min(posT,negT);","    vec3 qi = p+v*intersectionT;","    float dotp1 = dot(va,qi-p1);","    float dotp2 = dot(va,qi-p2);","    vec3 norm;","    if( dotp1 < 0.0 || dotp2 > 0.0) {","       vec3 cp;","       if( dotp1 < 0.0) {        cp = p1;","       } else {","          cp = p2;","       }","       vec3 diff = p-cp;","       A = dot(v,v);","       B = dot(diff,v)*2.0;","       C = dot(diff,diff)-r*r;","       det = (B*B) - (4.0*C);","       if(det < 0.0) discard;","       sqrtDet = sqrt(det);","       posT = (-B+sqrtDet)/(2.0);","       negT = (-B-sqrtDet)/(2.0);","       float t = min(posT,negT);","       qi = p+v*t;","       norm = normalize(qi-cp);","    } else {","       norm = normalize(qi-(dotp1*va + p1));","    }","    vec4 clipPos = projectionMatrix * vec4(qi, 1.0);","    float ndcDepth = clipPos.z / clipPos.w;","    float depth = ((gl_DepthRange.diff * ndcDepth) + gl_DepthRange.near + gl_DepthRange.far) / 2.0;","    gl_FragDepthEXT = depth;"].join("\n")},$3Dmol.ShaderLib={basic:{fragmentShader:["uniform mat4 viewMatrix;","uniform float opacity;","uniform vec3 fogColor;","uniform float fogNear;","uniform float fogFar;","varying vec3 vColor;","void main() {","    gl_FragColor = vec4( vColor, opacity );","    float depth = gl_FragCoord.z / gl_FragCoord.w;","    float fogFactor = smoothstep( fogNear, fogFar, depth );","    gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );","}"].join("\n"),vertexShader:["uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","attribute vec3 position;","attribute vec3 color;","varying vec3 vColor;","void main() {","    vColor = color;","    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );","    gl_Position = projectionMatrix * mvPosition;","}"].join("\n"),uniforms:{opacity:{type:"f",value:1},fogColor:{type:"c",value:new $3Dmol.Color(1,1,1)},fogNear:{type:"f",value:1},fogFar:{type:"f",value:2e3}}},sphereimposter:{fragmentShader:["uniform mat4 viewMatrix;","uniform float opacity;","uniform mat4 projectionMatrix;","uniform vec3 fogColor;","uniform float fogNear;","uniform float fogFar;","uniform float uDepth;","uniform vec3 directionalLightColor[ 1 ];","varying vec3 vColor;","varying vec2 mapping;","varying float rval;","varying vec3 vLight;","varying vec3 center;","void main() {","    float lensqr = dot(mapping,mapping);","    float rsqr = rval*rval;","    if(lensqr > rsqr)","       discard;","    float z = sqrt(rsqr-lensqr);","    vec3 cameraPos = center+ vec3(mapping.x,mapping.y,z);","    vec4 clipPos = projectionMatrix * vec4(cameraPos, 1.0);","    float ndcDepth = clipPos.z / clipPos.w;","    gl_FragDepthEXT = ((gl_DepthRange.diff * ndcDepth) + gl_DepthRange.near + gl_DepthRange.far) / 2.0;","    vec3 norm = normalize(vec3(mapping.x,mapping.y,z));","    float dotProduct = dot( norm, vLight );","    vec3 directionalLightWeighting = vec3( max( dotProduct, 0.0 ) );","    vec3 vLight = directionalLightColor[ 0 ] * directionalLightWeighting;","    gl_FragColor = vec4(vLight*vColor, opacity*opacity );","    float fogFactor = smoothstep( fogNear, fogFar, gl_FragDepthEXT/gl_FragCoord.w );","    gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );","}"].join("\n"),vertexShader:["uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 directionalLightColor[ 1 ];","uniform vec3 directionalLightDirection[ 1 ];","attribute vec3 position;","attribute vec3 normal;","attribute vec3 color;","varying vec2 mapping;","varying vec3 vColor;","varying float rval;","varying vec3 vLight;","varying vec3 center;","void main() {","    vColor = color;","    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );","    center = mvPosition.xyz;","    vec4 projPosition = projectionMatrix * mvPosition;","    vec4 adjust = projectionMatrix* vec4(normal,0.0); adjust.z = 0.0; adjust.w = 0.0;","    vec4 lDirection = viewMatrix * vec4( directionalLightDirection[ 0 ], 0.0 );","    vLight = normalize( lDirection.xyz );","    mapping = normal.xy;","    rval = abs(normal.x);","    gl_Position = projPosition+adjust;","}"].join("\n"),uniforms:{opacity:{type:"f",value:1},fogColor:{type:"c",value:new $3Dmol.Color(1,1,1)},fogNear:{type:"f",value:1},fogFar:{type:"f",value:2e3},directionalLightColor:{type:"fv",value:[]},directionalLightDirection:{type:"fv",value:[]}}},lambert:{fragmentShader:["uniform mat4 viewMatrix;","uniform float opacity;","uniform vec3 fogColor;","uniform float fogNear;","uniform float fogFar;","varying vec3 vLightFront;","varying vec3 vColor;","void main() {","    gl_FragColor = vec4( vec3 ( 1.0 ), opacity );","    #ifndef WIREFRAME","    gl_FragColor.xyz *= vLightFront;","    #endif","    gl_FragColor = gl_FragColor * vec4( vColor, opacity );","    float depth = gl_FragCoord.z / gl_FragCoord.w;","    float fogFactor = smoothstep( fogNear, fogFar, depth );","    gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );","}"].join("\n"),vertexShader:["uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 directionalLightColor[ 1 ];","uniform vec3 directionalLightDirection[ 1 ];","attribute vec3 position;","attribute vec3 normal;","attribute vec3 color;","varying vec3 vColor;","varying vec3 vLightFront;","void main() {","    vColor = color;","    vec3 objectNormal = normal;","    vec3 transformedNormal = normalMatrix * objectNormal;","    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );","    vLightFront = vec3( 0.0 );","    transformedNormal = normalize( transformedNormal );","    vec4 lDirection = viewMatrix * vec4( directionalLightDirection[ 0 ], 0.0 );","    vec3 dirVector = normalize( lDirection.xyz );","    float dotProduct = dot( transformedNormal, dirVector );","    vec3 directionalLightWeighting = vec3( max( dotProduct, 0.0 ) );","    vLightFront += directionalLightColor[ 0 ] * directionalLightWeighting;","    gl_Position = projectionMatrix * mvPosition;","}"].join("\n"),uniforms:{opacity:{type:"f",value:1},fogColor:{type:"c",value:new $3Dmol.Color(1,1,1)},fogNear:{type:"f",value:1},fogFar:{type:"f",value:2e3},directionalLightColor:{type:"fv",value:[]},directionalLightDirection:{type:"fv",value:[]}}},instanced:{fragmentShader:["uniform mat4 viewMatrix;","uniform float opacity;","uniform vec3 fogColor;","uniform float fogNear;","uniform float fogFar;","varying vec3 vLightFront;","varying vec3 vColor;","void main() {","    gl_FragColor = vec4( vec3 ( 1.0 ), opacity );","    #ifndef WIREFRAME","    gl_FragColor.xyz *= vLightFront;","    #endif","    gl_FragColor = gl_FragColor * vec4( vColor, opacity );","    float depth = gl_FragCoord.z / gl_FragCoord.w;","    float fogFactor = smoothstep( fogNear, fogFar, depth );","    gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );","}"].join("\n"),vertexShader:["uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 directionalLightColor[ 1 ];","uniform vec3 directionalLightDirection[ 1 ];","attribute vec3 offset;","attribute vec3 position;","attribute vec3 normal;","attribute vec3 color;","attribute float radius;","varying vec3 vColor;","varying vec3 vLightFront;","void main() {","    vColor = color;","    vec3 objectNormal = normal;","    vec3 transformedNormal = normalMatrix * objectNormal;","    vec4 mvPosition = modelViewMatrix * vec4( position * radius + offset, 1.0 );","    vLightFront = vec3( 0.0 );","    transformedNormal = normalize( transformedNormal );","    vec4 lDirection = viewMatrix * vec4( directionalLightDirection[ 0 ], 0.0 );","    vec3 dirVector = normalize( lDirection.xyz );","    float dotProduct = dot( transformedNormal, dirVector );","    vec3 directionalLightWeighting = vec3( max( dotProduct, 0.0 ) );","    vLightFront += directionalLightColor[ 0 ] * directionalLightWeighting;","    gl_Position = projectionMatrix * mvPosition;","}"].join("\n"),uniforms:{opacity:{type:"f",value:1},fogColor:{type:"c",value:new $3Dmol.Color(1,1,1)},fogNear:{type:"f",value:1},fogFar:{type:"f",value:2e3},directionalLightColor:{type:"fv",value:[]},directionalLightDirection:{type:"fv",value:[]}}},outline:{fragmentShader:["uniform float opacity;","uniform vec3 outlineColor;","uniform vec3 fogColor;","uniform float fogNear;","uniform float fogFar;","void main() {","    gl_FragColor = vec4( outlineColor, 1 );","}"].join("\n"),vertexShader:["uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform float outlineWidth;","uniform float outlinePushback;","attribute vec3 position;","attribute vec3 normal;","attribute vec3 color;","void main() {","    vec4 norm = modelViewMatrix*vec4(normalize(normal),0.0);","    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );","    mvPosition.xy += norm.xy*outlineWidth;","    gl_Position = projectionMatrix * mvPosition;","    mvPosition.z -= outlinePushback;","    vec4 pushpos = projectionMatrix*mvPosition;","    gl_Position.z = gl_Position.w*pushpos.z/pushpos.w;","}"].join("\n"),uniforms:{opacity:{type:"f",value:1},outlineColor:{type:"c",value:new $3Dmol.Color(0,0,0)},fogColor:{type:"c",value:new $3Dmol.Color(1,1,1)},fogNear:{type:"f",value:1},fogFar:{type:"f",value:2e3},outlineWidth:{type:"f",value:.1},outlinePushback:{type:"f",value:1}}},sphereimposteroutline:{fragmentShader:["uniform float opacity;","uniform vec3 outlineColor;","uniform vec3 fogColor;","uniform float fogNear;","uniform float fogFar;","uniform mat4 projectionMatrix;","varying vec2 mapping;","varying float rval;","varying vec3 center;","uniform float outlinePushback;","void main() {","    float lensqr = dot(mapping,mapping);","    float rsqr = rval*rval;","    if(lensqr > rsqr)","       discard;","    float z = sqrt(rsqr-lensqr);","    vec3 cameraPos = center+ vec3(mapping.x,mapping.y,z-outlinePushback);","    vec4 clipPos = projectionMatrix * vec4(cameraPos, 1.0);","    float ndcDepth = clipPos.z / clipPos.w;","    gl_FragDepthEXT = ((gl_DepthRange.diff * ndcDepth) + gl_DepthRange.near + gl_DepthRange.far) / 2.0;","    gl_FragColor = vec4(outlineColor, 1 );","}"].join("\n"),vertexShader:["uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform float outlineWidth;","uniform float outlinePushback;","attribute vec3 position;","attribute vec3 normal;","attribute vec3 color;","varying vec2 mapping;","varying float rval;","varying vec3 center;","void main() {","    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );","    center = mvPosition.xyz;","    vec4 projPosition = projectionMatrix * mvPosition;","    vec2 norm = normal.xy + vec2(sign(normal.x)*outlineWidth,sign(normal.y)*outlineWidth);","    vec4 adjust = projectionMatrix* vec4(norm,normal.z,0.0); adjust.z = 0.0; adjust.w = 0.0;","    mapping = norm.xy;","    rval = abs(norm.x);","    gl_Position = projPosition+adjust;","}"].join("\n"),uniforms:{opacity:{type:"f",value:1},outlineColor:{type:"c",value:new $3Dmol.Color(0,0,0)},fogColor:{type:"c",value:new $3Dmol.Color(1,1,1)},fogNear:{type:"f",value:1},fogFar:{type:"f",value:2e3},outlineWidth:{type:"f",value:.1},outlinePushback:{type:"f",value:1}}},stickimposter:{fragmentShader:[$3Dmol.ShaderUtils.stickimposterFragmentShader,"    float dotProduct = dot( norm, vLight );","    vec3 light = vec3( max( dotProduct, 0.0 ) );","    gl_FragColor = vec4(light*color, opacity*opacity );","    float fogFactor = smoothstep( fogNear, fogFar, depth );","    gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );","}"].join("\n"),vertexShader:["uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 directionalLightColor[ 1 ];","uniform vec3 directionalLightDirection[ 1 ];","attribute vec3 position;","attribute vec3 normal;","attribute vec3 color;","attribute float radius;","varying vec3 vColor;","varying vec3 vLight;","varying vec3 cposition;","varying vec3 p1;","varying vec3 p2;","varying float r;","void main() {","    vColor = color; vColor.z = abs(vColor.z);","    r = abs(radius);","    vec4 to = modelViewMatrix*vec4(normal, 1.0);","    vec4 pt = modelViewMatrix*vec4(position, 1.0);","    vec4 mvPosition = pt;","    p1 = pt.xyz; p2 = to.xyz;","    vec3 norm = to.xyz-pt.xyz;","    float mult = 1.1;","    if(length(p1) > length(p2)) {","       mvPosition = to;","    }","    vec3 n = normalize(mvPosition.xyz);","    if(color.z >= 0.0) {","       vec3 pnorm = normalize(p1);","       float t = dot(mvPosition.xyz-p1,n)/dot(pnorm,n);","       mvPosition.xyz = p1+t*pnorm;","    } else {","       vec3 pnorm = normalize(p2);","       float t = dot(mvPosition.xyz-p2,n)/dot(pnorm,n);","       mvPosition.xyz = p2+t*pnorm;","       mult *= -1.0;","    }","    vec3 cr = normalize(cross(mvPosition.xyz,norm))*radius;","    vec3 doublecr = normalize(cross(mvPosition.xyz,cr))*radius;","    mvPosition.xy +=  mult*(cr + doublecr).xy;","    cposition = mvPosition.xyz;","    gl_Position = projectionMatrix * mvPosition;","    vec4 lDirection = viewMatrix * vec4( directionalLightDirection[ 0 ], 0.0 );","    vLight = normalize( lDirection.xyz )*directionalLightColor[0];","}"].join("\n"),uniforms:{opacity:{type:"f",value:1},fogColor:{type:"c",value:new $3Dmol.Color(1,1,1)},fogNear:{type:"f",value:1},fogFar:{type:"f",value:2e3},directionalLightColor:{type:"fv",value:[]},directionalLightDirection:{type:"fv",value:[]}}},stickimposteroutline:{fragmentShader:$3Dmol.ShaderUtils.stickimposterFragmentShader+"gl_FragColor = vec4(color,1.0);}",vertexShader:["uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 directionalLightColor[ 1 ];","uniform vec3 directionalLightDirection[ 1 ];","uniform vec3 outlineColor;","uniform float outlineWidth;","uniform float outlinePushback;","attribute vec3 position;","attribute vec3 normal;","attribute vec3 color;","attribute float radius;","varying vec3 vColor;","varying vec3 vLight;","varying vec3 cposition;","varying vec3 p1;","varying vec3 p2;","varying float r;","void main() {","    vColor = outlineColor;","    float rad = radius+sign(radius)*outlineWidth;","    r = abs(rad);","    vec4 to = modelViewMatrix*vec4(normal, 1.0);","    vec4 pt = modelViewMatrix*vec4(position, 1.0);","    to.xyz += normalize(to.xyz)*outlinePushback;","    pt.xyz += normalize(pt.xyz)*outlinePushback;","    vec4 mvPosition = pt;","    p1 = pt.xyz; p2 = to.xyz;","    vec3 norm = to.xyz-pt.xyz;","    float mult = 1.1;","    if(length(p1) > length(p2)) {","       mvPosition = to;","    }","    vec3 n = normalize(mvPosition.xyz);","    if(color.z >= 0.0) {","       vec3 pnorm = normalize(p1);","       float t = dot(mvPosition.xyz-p1,n)/dot(pnorm,n);","       mvPosition.xyz = p1+t*pnorm;","    } else {","       vec3 pnorm = normalize(p2);","       float t = dot(mvPosition.xyz-p2,n)/dot(pnorm,n);","       mvPosition.xyz = p2+t*pnorm;","       mult *= -1.0;","    }","    vec3 cr = normalize(cross(mvPosition.xyz,norm))*rad;","    vec3 doublecr = normalize(cross(mvPosition.xyz,cr))*rad;","    mvPosition.xy +=  mult*(cr + doublecr).xy;","    cposition = mvPosition.xyz;","    gl_Position = projectionMatrix * mvPosition;","    vLight = vec3(1.0,1.0,1.0);","}"].join("\n"),uniforms:{opacity:{type:"f",value:1},fogColor:{type:"c",value:new $3Dmol.Color(1,1,1)},fogNear:{type:"f",value:1},fogFar:{type:"f",value:2e3},outlineColor:{type:"c",value:new $3Dmol.Color(0,0,0)},outlineWidth:{type:"f",value:.1},outlinePushback:{type:"f",value:1}}},lambertdouble:{fragmentShader:["uniform mat4 viewMatrix;","uniform float opacity;","uniform vec3 fogColor;","uniform float fogNear;","uniform float fogFar;","varying vec3 vLightFront;","varying vec3 vLightBack;","varying vec3 vColor;","void main() {","    gl_FragColor = vec4( vec3 ( 1.0 ), opacity );","    #ifndef WIREFRAME","    if ( gl_FrontFacing )","       gl_FragColor.xyz *= vLightFront;","    else","       gl_FragColor.xyz *= vLightBack;","    #endif","    gl_FragColor = gl_FragColor * vec4( vColor, opacity );","    float depth = gl_FragCoord.z / gl_FragCoord.w;","    float fogFactor = smoothstep( fogNear, fogFar, depth );","    gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );","}"].join("\n"),vertexShader:["uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 directionalLightColor[ 1 ];","uniform vec3 directionalLightDirection[ 1 ];","attribute vec3 position;","attribute vec3 normal;","attribute vec3 color;","varying vec3 vColor;","varying vec3 vLightFront;","varying vec3 vLightBack;","void main() {","    vColor = color;","    vec3 objectNormal = normal;","    vec3 transformedNormal = normalMatrix * objectNormal;","    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );","    vLightFront = vec3( 0.0 );","    vLightBack = vec3( 0.0 );","    transformedNormal = normalize( transformedNormal );","    vec4 lDirection = viewMatrix * vec4( directionalLightDirection[ 0 ], 0.0 );","    vec3 dirVector = normalize( lDirection.xyz );","    float dotProduct = dot( transformedNormal, dirVector );","    vec3 directionalLightWeighting = vec3( max( dotProduct, 0.0 ) );","    vec3 directionalLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );","    vLightFront += directionalLightColor[ 0 ] * directionalLightWeighting;","    vLightBack += directionalLightColor[ 0 ] * directionalLightWeightingBack;","    gl_Position = projectionMatrix * mvPosition;","}"].join("\n"),uniforms:{opacity:{type:"f",value:1},fogColor:{type:"c",value:new $3Dmol.Color(1,1,1)},fogNear:{type:"f",value:1},fogFar:{type:"f",value:2e3},directionalLightColor:{type:"fv",value:[]},directionalLightDirection:{type:"fv",value:[]}}},sprite:{fragmentShader:["uniform vec3 color;","uniform sampler2D map;","uniform float opacity;","uniform int fogType;","uniform vec3 fogColor;","uniform float fogDensity;","uniform float fogNear;","uniform float fogFar;","uniform float alphaTest;","varying vec2 vUV;","void main() {","    vec4 texture = texture2D(map, vUV);","    if (texture.a < alphaTest) discard;","    gl_FragColor = vec4(color * texture.xyz, texture.a * opacity);","    if (fogType > 0) {","        float depth = gl_FragCoord.z / gl_FragCoord.w;","        float fogFactor = 0.0;","        if (fogType == 1) {","            fogFactor = smoothstep(fogNear, fogFar, depth);","        }","        else {","            const float LOG2 = 1.442695;","            float fogFactor = exp2(- fogDensity * fogDensity * depth * depth * LOG2);","            fogFactor = 1.0 - clamp(fogFactor, 0.0, 1.0);","        }","        gl_FragColor = mix(gl_FragColor, vec4(fogColor, gl_FragColor.w), fogFactor);","    }","}"].join("\n"),vertexShader:["uniform int useScreenCoordinates;","uniform vec3 screenPosition;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform float rotation;","uniform vec2 scale;","uniform vec2 alignment;","uniform vec2 uvOffset;","uniform vec2 uvScale;","attribute vec2 position;","attribute vec2 uv;","varying vec2 vUV;","void main() {","    vUV = uvOffset + uv * uvScale;","    vec2 alignedPosition = position + alignment;","    vec2 rotatedPosition;","    rotatedPosition.x = ( cos(rotation) * alignedPosition.x - sin(rotation) * alignedPosition.y ) * scale.x;","    rotatedPosition.y = ( sin(rotation) * alignedPosition.x + cos(rotation) * alignedPosition.y ) * scale.y;","    vec4 finalPosition;","    if(useScreenCoordinates != 0) {","        finalPosition = vec4(screenPosition.xy + rotatedPosition, screenPosition.z, 1.0);","    }","    else {","        finalPosition = projectionMatrix * modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0); finalPosition /= finalPosition.w;","        finalPosition.xy += rotatedPosition; ","    }","    gl_Position = finalPosition;","}"].join("\n"),uniforms:{}}},"undefined"==typeof console&&(console={log:function(){}}),$3Dmol.ProteinSurface=function(){var e,t,r=0,n=0,i=0,o=2,a=0,s=0,l=0,c=0,u=null,h=null,f=null,d=0,p=0,m=0,v=0,g=0,y=0,b={H:1.2,Li:1.82,Na:2.27,K:2.75,C:1.7,N:1.55,O:1.52,F:1.47,P:1.8,S:1.8,CL:1.75,BR:1.85,SE:1.9,ZN:1.39,CU:1.4,NI:1.63,X:2},x=function(e){return e.elem&&void 0!==b[e.elem]?e.elem:"X"},w={},D={},C=[new Int32Array([1,0,0]),new Int32Array([-1,0,0]),new Int32Array([0,1,0]),new Int32Array([0,-1,0]),new Int32Array([0,0,1]),new Int32Array([0,0,-1]),new Int32Array([1,1,0]),new Int32Array([1,-1,0]),new Int32Array([-1,1,0]),new Int32Array([-1,-1,0]),new Int32Array([1,0,1]),new Int32Array([1,0,-1]),new Int32Array([-1,0,1]),new Int32Array([-1,0,-1]),new Int32Array([0,1,1]),new Int32Array([0,1,-1]),new Int32Array([0,-1,1]),new Int32Array([0,-1,-1]),new Int32Array([1,1,1]),new Int32Array([1,1,-1]),new Int32Array([1,-1,1]),new Int32Array([-1,1,1]),new Int32Array([1,-1,-1]),new Int32Array([-1,-1,1]),new Int32Array([-1,1,-1]),new Int32Array([-1,-1,-1])];this.getFacesAndVertices=function(a){var s={};for(let e=0,t=a.length;e<t;e++)s[a[e]]=!0;var l=t;for(let e=0,t=l.length;e<t;e++)l[e].x=l[e].x/o-r,l[e].y=l[e].y/o-n,l[e].z=l[e].z/o-i;var c=[];for(let t=0,r=e.length;t<r;t+=3){var d=e[t],p=e[t+1],m=e[t+2],v=l[d].atomid,g=l[p].atomid,y=l[m].atomid,b=v;g<b&&(b=g),y<b&&(b=y),s[b]&&(d!==p&&p!==m&&d!==m&&(c.push(d),c.push(p),c.push(m)))}return u=null,h=null,f=null,{vertices:l,faces:c}},this.initparm=function(e,t,b){b>1e6&&(o=1);var x=1/o*5.5;d=e[0][0],v=e[1][0],p=e[0][1],g=e[1][1],m=e[0][2],y=e[1][2],t?(d-=1.4+x,p-=1.4+x,m-=1.4+x,v+=1.4+x,g+=1.4+x,y+=1.4+x):(d-=x,p-=x,m-=x,v+=x,g+=x,y+=x),d=Math.floor(d*o)/o,p=Math.floor(p*o)/o,m=Math.floor(m*o)/o,v=Math.ceil(v*o)/o,g=Math.ceil(g*o)/o,y=Math.ceil(y*o)/o,r=-d,n=-p,i=-m,l=Math.ceil(o*(v-d))+1,s=Math.ceil(o*(g-p))+1,a=Math.ceil(o*(y-m))+1,this.boundingatom(t),c=1.4*o,u=new Uint8Array(l*s*a),h=new Float64Array(l*s*a),f=new Int32Array(l*s*a)},this.boundingatom=function(e){var t,r,n,i=[];for(var a in b)if(b.hasOwnProperty(a)){var s=b[a];i[a]=e?(s+1.4)*o+.5:s*o+.5,n=i[a]*i[a],D[a]=Math.floor(i[a])+1,w[a]=new Int32Array(D[a]*D[a]);var l=0;for(let e=0;e<D[a];e++)for(let i=0;i<D[a];i++)(t=e*e+i*i)>n?w[a][l]=-1:(r=Math.sqrt(n-t),w[a][l]=Math.floor(r)),l++}},this.fillvoxels=function(e,t){for(let e=0,t=u.length;e<t;e++)u[e]=0,h[e]=-1,f[e]=-1;for(let n in t){var r=e[t[n]];void 0!==r&&this.fillAtom(r,e)}for(let e=0,t=u.length;e<t;e++)1&u[e]&&(u[e]|=2)},this.fillAtom=function(e,t){var c,h,d,p,m,v,g,y,b,C,A,$,S,M,_,z,T,L,E;c=Math.floor(.5+o*(e.x+r)),h=Math.floor(.5+o*(e.y+n)),d=Math.floor(.5+o*(e.z+i));var F=x(e),k=0,I=s*a;for(C=0,E=D[F];C<E;C++)for(A=0;A<E;A++){if(-1!=w[F][k])for(z=-1;z<2;z++)for(T=-1;T<2;T++)for(L=-1;L<2;L++)if(0!==z&&0!==T&&0!==L)for(g=z*C,b=L*A,$=0;$<=w[F][k];$++)if(M=h+(y=$*T),_=d+b,!((S=c+g)<0||M<0||_<0||S>=l||M>=s||_>=a)){var P=S*I+M*a+_;if(1&u[P]){var O=t[f[P]];O.serial!=e.serial&&g*g+y*y+b*b<(p=c+g-Math.floor(.5+o*(O.x+r)))*p+(m=h+y-Math.floor(.5+o*(O.y+n)))*m+(v=d+b-Math.floor(.5+o*(O.z+i)))*v&&(f[P]=e.serial)}else u[P]|=1,f[P]=e.serial}k++}},this.fillvoxelswaals=function(e,t){for(let e=0,t=u.length;e<t;e++)u[e]&=-3;for(let r in t){let n=e[t[r]];void 0!==n&&this.fillAtomWaals(n,e)}},this.fillAtomWaals=function(e,t){var c,h,d,p,m,v,g,y,b,C,A,$,S,M,_,z,T,L,E,F=0;c=Math.floor(.5+o*(e.x+r)),h=Math.floor(.5+o*(e.y+n)),d=Math.floor(.5+o*(e.z+i));var k=x(e),I=s*a;for(S=0,E=D[k];S<E;S++)for(M=0;M<E;M++){if(-1!=w[k][F])for(z=-1;z<2;z++)for(T=-1;T<2;T++)for(L=-1;L<2;L++)if(0!==z&&0!==T&&0!==L)for(g=z*S,b=L*M,_=0;_<=w[k][F];_++)if(A=h+(y=_*T),$=d+b,!((C=c+g)<0||A<0||$<0||C>=l||A>=s||$>=a)){var P=C*I+A*a+$;if(2&u[P]){var O=t[f[P]];O.serial!=e.serial&&g*g+y*y+b*b<(p=c+g-Math.floor(.5+o*(O.x+r)))*p+(m=h+y-Math.floor(.5+o*(O.y+n)))*m+(v=d+b-Math.floor(.5+o*(O.z+i)))*v&&(f[P]=e.serial)}else u[P]|=2,f[P]=e.serial}F++}},this.buildboundary=function(){var e=s*a;for(let c=0;c<l;c++)for(let h=0;h<a;h++)for(let f=0;f<s;f++){var t=c*e+f*a+h;if(1&u[t])for(var r=0;r<26;){var n=c+C[r][0],i=h+C[r][2],o=f+C[r][1];if(n>-1&&n<l&&o>-1&&o<s&&i>-1&&i<a&&!(1&u[n*e+o*a+i])){u[t]|=4;break}r++}}};var A=function(e,t,r){var n=new Int32Array(e*t*r*3);this.set=function(e,i,o,a){var s=3*((e*t+i)*r+o);n[s]=a.ix,n[s+1]=a.iy,n[s+2]=a.iz},this.get=function(e,i,o){var a=3*((e*t+i)*r+o);return{ix:n[a],iy:n[a+1],iz:n[a+2]}}};this.fastdistancemap=function(){var e,t,r,n,i,f=new A(l,s,a),d=s*a,p=c*c,m=[],v=[];for(e=0;e<l;e++)for(t=0;t<s;t++)for(r=0;r<a;r++)if(u[i=e*d+t*a+r]&=-3,1&u[i]&&4&u[i]){var g={ix:e,iy:t,iz:r};f.set(e,t,r,g),m.push(g),h[i]=0,u[i]|=2,u[i]&=-5}do{for(v=this.fastoneshell(m,f),m=[],e=0,n=v.length;e<n;e++)i=d*v[e].ix+a*v[e].iy+v[e].iz,u[i]&=-5,h[i]<=1.0404*p&&m.push({ix:v[e].ix,iy:v[e].iy,iz:v[e].iz})}while(0!==m.length);m=[],v=[],f=null;var y=o-.5;y<0&&(y=0);var b=p-.5/(.1+y);for(e=0;e<l;e++)for(t=0;t<s;t++)for(r=0;r<a;r++)u[i=e*d+t*a+r]&=-5,1&u[i]&&(2&u[i]&&!(2&u[i]&&h[i]>=b)||(u[i]|=4))},this.fastoneshell=function(e,t){var r,n,i,o,c,f,d,p,m,v,g,y,b=[];if(0===e.length)return b;var x={ix:-1,iy:-1,iz:-1},w=s*a;for(d=0,m=e.length;d<m;d++)for(r=e[d].ix,n=e[d].iy,i=e[d].iz,g=t.get(r,n,i),p=0;p<6;p++)x.ix=r+C[p][0],x.iy=n+C[p][1],x.iz=i+C[p][2],x.ix<l&&x.ix>-1&&x.iy<s&&x.iy>-1&&x.iz<a&&x.iz>-1&&(y=x.ix*w+a*x.iy+x.iz,1&u[y]&&!(2&u[y])?(t.set(x.ix,x.iy,i+C[p][2],g),v=(o=x.ix-g.ix)*o+(c=x.iy-g.iy)*c+(f=x.iz-g.iz)*f,h[y]=v,u[y]|=2,u[y]|=4,b.push({ix:x.ix,iy:x.iy,iz:x.iz})):1&u[y]&&2&u[y]&&(v=(o=x.ix-g.ix)*o+(c=x.iy-g.iy)*c+(f=x.iz-g.iz)*f)<h[y]&&(t.set(x.ix,x.iy,x.iz,g),h[y]=v,4&u[y]||(u[y]|=4,b.push({ix:x.ix,iy:x.iy,iz:x.iz}))));for(d=0,m=e.length;d<m;d++)for(r=e[d].ix,n=e[d].iy,i=e[d].iz,g=t.get(r,n,i),p=6;p<18;p++)x.ix=r+C[p][0],x.iy=n+C[p][1],x.iz=i+C[p][2],x.ix<l&&x.ix>-1&&x.iy<s&&x.iy>-1&&x.iz<a&&x.iz>-1&&(y=x.ix*w+a*x.iy+x.iz,1&u[y]&&!(2&u[y])?(t.set(x.ix,x.iy,i+C[p][2],g),v=(o=x.ix-g.ix)*o+(c=x.iy-g.iy)*c+(f=x.iz-g.iz)*f,h[y]=v,u[y]|=2,u[y]|=4,b.push({ix:x.ix,iy:x.iy,iz:x.iz})):1&u[y]&&2&u[y]&&(v=(o=x.ix-g.ix)*o+(c=x.iy-g.iy)*c+(f=x.iz-g.iz)*f)<h[y]&&(t.set(x.ix,x.iy,x.iz,g),h[y]=v,4&u[y]||(u[y]|=4,b.push({ix:x.ix,iy:x.iy,iz:x.iz}))));for(d=0,m=e.length;d<m;d++)for(r=e[d].ix,n=e[d].iy,i=e[d].iz,g=t.get(r,n,i),p=18;p<26;p++)x.ix=r+C[p][0],x.iy=n+C[p][1],x.iz=i+C[p][2],x.ix<l&&x.ix>-1&&x.iy<s&&x.iy>-1&&x.iz<a&&x.iz>-1&&(y=x.ix*w+a*x.iy+x.iz,1&u[y]&&!(2&u[y])?(t.set(x.ix,x.iy,i+C[p][2],g),v=(o=x.ix-g.ix)*o+(c=x.iy-g.iy)*c+(f=x.iz-g.iz)*f,h[y]=v,u[y]|=2,u[y]|=4,b.push({ix:x.ix,iy:x.iy,iz:x.iz})):1&u[y]&&2&u[y]&&(v=(o=x.ix-g.ix)*o+(c=x.iy-g.iy)*c+(f=x.iz-g.iz)*f)<h[y]&&(t.set(x.ix,x.iy,x.iz,g),h[y]=v,4&u[y]||(u[y]|=4,b.push({ix:x.ix,iy:x.iy,iz:x.iz}))));return b},this.marchingcubeinit=function(e){for(var t=0,r=u.length;t<r;t++)1==e?u[t]&=-5:4==e?(u[t]&=-3,4&u[t]&&(u[t]|=2),u[t]&=-5):2==e?4&u[t]&&2&u[t]?u[t]&=-5:4&u[t]&&!(2&u[t])&&(u[t]|=2):3==e&&(u[t]&=-5)},this.marchingcube=function(r){this.marchingcubeinit(r),t=[],e=[],$3Dmol.MarchingCube.march(u,t,e,{smooth:1,nX:l,nY:s,nZ:a});for(var n=s*a,i=0,o=t.length;i<o;i++)t[i].atomid=f[t[i].x*n+a*t[i].y+t[i].z];$3Dmol.MarchingCube.laplacianSmooth(1,t,e)}},$3Dmol.autoload=function(viewer,callback){var i,dataname,type;if(void 0!==$(".viewer_3Dmoljs")[0]&&($3Dmol.autoinit=!0),$3Dmol.autoinit){viewer=null!=viewer?viewer:null,$3Dmol.viewers={};var nviewers=0;$(".viewer_3Dmoljs").each(function(){var viewerdiv=$(this),datauri=[],datatypes=[],uri="";"static"==viewerdiv.css("position")&&viewerdiv.css("position","relative"),type=null,viewerdiv.data("pdb")?(datauri.push("https://files.rcsb.org/view/"+viewerdiv.data("pdb")+".pdb"),datatypes.push("pdb")):viewerdiv.data("cid")?(datatypes.push("sdf"),datauri.push("https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/"+viewerdiv.data("cid")+"/SDF?record_type=3d")):(viewerdiv.data("href")||viewerdiv.data("url"))&&(uri=viewerdiv.data("href"),datauri.push(uri),type=uri.substr(uri.lastIndexOf(".")+1),datatypes.push(type));var divdata=viewerdiv.data();for(i in divdata)"pdb"===i.substring(0,3)&&"pdb"!==i?(datauri.push("https://files.rcsb.org/view/"+divdata[i]+".pdb"),datatypes.push("pdb")):"href"===i.substring(0,4)&&"href"!==i?(uri=divdata[i],datauri.push(uri),datatypes.push(uri.substr(uri.lastIndexOf(".")+1))):"cid"===i.substring(0,3)&&"cid"!==i&&(datauri.push("https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/"+divdata[i]+"/SDF?record_type=3d"),datatypes.push("sdf"));var options={};viewerdiv.data("options")&&(options=$3Dmol.specStringToObject(viewerdiv.data("options")));var bgcolor=$3Dmol.CC.color(viewerdiv.data("backgroundcolor")),style={line:{}};viewerdiv.data("style")&&(style=$3Dmol.specStringToObject(viewerdiv.data("style")));var select={};viewerdiv.data("select")&&(select=$3Dmol.specStringToObject(viewerdiv.data("select")));var selectstylelist=[],surfaces=[],labels=[],zoomto={},d=viewerdiv.data(),stylere=/style(.+)/,surfre=/surface(.*)/,reslabre=/labelres(.*)/,keys=[];for(dataname in d)d.hasOwnProperty(dataname)&&keys.push(dataname);for(keys.sort(),i=0;i<keys.length;i++){dataname=keys[i];var m=stylere.exec(dataname),selname,newsel,styleobj;m&&(selname="select"+m[1],newsel=$3Dmol.specStringToObject(d[selname]),styleobj=$3Dmol.specStringToObject(d[dataname]),selectstylelist.push([newsel,styleobj])),m=surfre.exec(dataname),m&&(selname="select"+m[1],newsel=$3Dmol.specStringToObject(d[selname]),styleobj=$3Dmol.specStringToObject(d[dataname]),surfaces.push([newsel,styleobj])),m=reslabre.exec(dataname),m&&(selname="select"+m[1],newsel=$3Dmol.specStringToObject(d[selname]),styleobj=$3Dmol.specStringToObject(d[dataname]),labels.push([newsel,styleobj])),"zoomto"==dataname&&(zoomto=$3Dmol.specStringToObject(d[dataname]))}var applyStyles=function(e){var t,r;for(e.setStyle(select,style),i=0;i<selectstylelist.length;i++)t=selectstylelist[i][0]||{},r=selectstylelist[i][1]||{line:{}},e.setStyle(t,r);for(i=0;i<surfaces.length;i++)t=surfaces[i][0]||{},r=surfaces[i][1]||{},e.addSurface($3Dmol.SurfaceType.VDW,r,t,t);for(i=0;i<labels.length;i++)t=labels[i][0]||{},r=labels[i][1]||{},e.addResLabels(t,r);e.zoomTo(zoomto),e.render()},glviewer=viewer;try{null==glviewer&&(glviewer=$3Dmol.viewers[this.id||nviewers++]=$3Dmol.createViewer(viewerdiv,{defaultcolors:$3Dmol.rasmolElementColors})),glviewer.setBackgroundColor(bgcolor)}catch(e){console.log(e),window.location="http://get.webgl.org"}if(0!=datauri.length){i=0;var process=function(moldata){uri=datauri[i];var type=viewerdiv.data("type")||viewerdiv.data("datatype")||datatypes[i];if(glviewer.addModel(moldata,type,options),i+=1,i<datauri.length)$.get(datauri[i],process,"text");else{if(applyStyles(glviewer),viewerdiv.data("callback")){var runres=eval(viewerdiv.data("callback"));"function"==typeof runres&&runres(glviewer)}callback&&callback(glviewer)}};$.get(datauri[0],process,"text")}else{if(viewerdiv.data("element")){var moldata=$("#"+viewerdiv.data("element")).val()||"";type=viewerdiv.data("type")||viewerdiv.data("datatype"),type||(console.log("Warning: No type specified for embedded viewer with moldata from "+viewerdiv.data("element")+"\n assuming type 'pdb'"),type="pdb"),glviewer.addModel(moldata,type,options)}if(applyStyles(glviewer),viewerdiv.data("callback")){var runres=eval(viewerdiv.data("callback"));"function"==typeof runres&&runres(glviewer)}callback&&callback(glviewer)}})}},$(document).ready(function(){$3Dmol.autoload()});var htmlColors=$3Dmol.htmlColors={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgrey:11119017,darkgreen:25600,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,grey:8421504,green:32768,greenyellow:11403055,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgrey:13882323,lightgreen:9498256,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};$3Dmol.CC={cache:{0:new $3Dmol.Color(0)},color:function e(t){if(!t)return this.cache[0];if(void 0!==this.cache[t])return this.cache[t];if(t&&t.constructor===Array)return t.map(e,this);if("number"==typeof(t=this.getHex(t))){var r=new $3Dmol.Color(t);return this.cache[t]=r,r}return t},getHex:function(e){return isNaN(parseInt(e))?"string"==typeof e?(4==(e=e.trim()).length&&"#"==e[0]&&(e="#"+e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),7==e.length&&"#"==e[0]?parseInt(e.substring(1),16):htmlColors[e.toLowerCase()]||0):e:parseInt(e)}},$3Dmol.CC=$3Dmol.CC,$3Dmol.CC.color=$3Dmol.CC.color,$3Dmol.ssColors=$3Dmol.ssColors||{},$3Dmol.ssColors.pyMol={h:16711680,s:16776960,c:65280},$3Dmol.ssColors.Jmol={h:16711808,s:16762880,c:16777215},$3Dmol.elementColors=$3Dmol.elementColors||{},$3Dmol.elementColors.defaultColor=16716947,$3Dmol.elementColors.Jmol={H:16777215,He:14286847,HE:14286847,Li:13402367,LI:13402367,Be:12779264,BE:12779264,B:16758197,C:9474192,N:3166456,O:16715021,F:9494608,Ne:11789301,NE:11789301,Na:11230450,NA:11230450,Mg:9109248,MG:9109248,Al:12560038,AL:12560038,Si:1578e4,SI:1578e4,P:16744448,S:16777008,Cl:2093087,CL:2093087,Ar:8442339,AR:8442339,K:9388244,Ca:4062976,CA:4062976,Sc:15132390,SC:15132390,Ti:12567239,TI:12567239,V:10921643,Cr:9083335,CR:9083335,Mn:10255047,MN:10255047,Fe:14706227,FE:14706227,Co:15765664,CO:15765664,Ni:5296208,NI:5296208,Cu:13140019,CU:13140019,Zn:8224944,ZN:8224944,Ga:12750735,GA:12750735,Ge:6721423,GE:6721423,As:12419299,AS:12419299,Se:16752896,SE:16752896,Br:10889513,BR:10889513,Kr:6076625,KR:6076625,Rb:7351984,RB:7351984,Sr:65280,SR:65280,Y:9764863,Zr:9756896,ZR:9756896,Nb:7586505,NB:7586505,Mo:5551541,MO:5551541,Tc:3907230,TC:3907230,Ru:2396047,RU:2396047,Rh:687500,RH:687500,Pd:27013,PD:27013,Ag:12632256,AG:12632256,Cd:16767375,CD:16767375,In:10909043,IN:10909043,Sn:6717568,SN:6717568,Sb:10380213,SB:10380213,Te:13924864,TE:13924864,I:9699476,Xe:4366e3,XE:4366e3,Cs:5707663,CS:5707663,Ba:51456,BA:51456,La:7394559,LA:7394559,Ce:16777159,CE:16777159,Pr:14286791,PR:14286791,Nd:13107143,ND:13107143,Pm:10747847,PM:10747847,Sm:9437127,SM:9437127,Eu:6422471,EU:6422471,Gd:4587463,GD:4587463,Tb:3211207,TB:3211207,Dy:2097095,DY:2097095,Ho:65436,HO:65436,Er:58997,ER:58997,Tm:54354,TM:54354,Yb:48952,YB:48952,Lu:43812,LU:43812,Hf:5096191,HF:5096191,Ta:5089023,TA:5089023,W:2200790,Re:2522539,RE:2522539,Os:2516630,OS:2516630,Ir:1528967,IR:1528967,Pt:13684960,PT:13684960,Au:16765219,AU:16765219,Hg:12105936,HG:12105936,Tl:10900557,TL:10900557,Pb:5724513,PB:5724513,Bi:10375093,BI:10375093,Po:11230208,PO:11230208,At:7688005,AT:7688005,Rn:4358806,RN:4358806,Fr:4325478,FR:4325478,Ra:32e3,RA:32e3,Ac:7384058,AC:7384058,Th:47871,TH:47871,Pa:41471,PA:41471,U:36863,Np:33023,NP:33023,Pu:27647,PU:27647,Am:5528818,AM:5528818,Cm:7888099,CM:7888099,Bk:9064419,BK:9064419,Cf:10565332,CF:10565332,Es:11739092,ES:11739092,Fm:11739066,FM:11739066,Md:11734438,MD:11734438,No:12389767,NO:12389767,Lr:13041766,LR:13041766,Rf:13369433,RF:13369433,Db:13697103,DB:13697103,Sg:14221381,SG:14221381,Bh:14680120,BH:14680120,Hs:15073326,HS:15073326,Mt:15400998,MT:15400998},$3Dmol.elementColors.rasmol={H:16777215,He:16761035,HE:16761035,Li:11674146,LI:11674146,B:65280,C:13158600,N:9408511,O:15728640,F:14329120,Na:255,NA:255,Mg:2263842,MG:2263842,Al:8421520,AL:8421520,Si:14329120,SI:14329120,P:16753920,S:16762930,Cl:65280,CL:65280,Ca:8421520,CA:8421520,Ti:8421520,TI:8421520,Cr:8421520,CR:8421520,Mn:8421520,MN:8421520,Fe:16753920,FE:16753920,Ni:10824234,NI:10824234,Cu:10824234,CU:10824234,Zn:10824234,ZN:10824234,Br:10824234,BR:10824234,Ag:8421520,AG:8421520,I:10494192,Ba:16753920,BA:16753920,Au:14329120,AU:14329120},$3Dmol.elementColors.defaultColors=$3Dmol.elementColors.rasmol,$3Dmol.elementColors.greenCarbon=$.extend({},$3Dmol.elementColors.defaultColors),$3Dmol.elementColors.greenCarbon.C=65280,$3Dmol.elementColors.cyanCarbon=$.extend({},$3Dmol.elementColors.defaultColors),$3Dmol.elementColors.cyanCarbon.C=65535,$3Dmol.elementColors.magentaCarbon=$.extend({},$3Dmol.elementColors.defaultColors),$3Dmol.elementColors.magentaCarbon.C=16711935,$3Dmol.elementColors.yellowCarbon=$.extend({},$3Dmol.elementColors.defaultColors),$3Dmol.elementColors.yellowCarbon.C=16776960,$3Dmol.elementColors.whiteCarbon=$.extend({},$3Dmol.elementColors.defaultColors),$3Dmol.elementColors.whiteCarbon.C=16777215,$3Dmol.elementColors.orangeCarbon=$.extend({},$3Dmol.elementColors.defaultColors),$3Dmol.elementColors.orangeCarbon.C=16753920,$3Dmol.elementColors.purpleCarbon=$.extend({},$3Dmol.elementColors.defaultColors),$3Dmol.elementColors.purpleCarbon.C=8388736,$3Dmol.elementColors.blueCarbon=$.extend({},$3Dmol.elementColors.defaultColors),$3Dmol.elementColors.blueCarbon.C=255,$3Dmol.residues={},$3Dmol.residues.amino={ALA:13158600,ARG:1334015,ASN:56540,ASP:15075850,CYS:15132160,GLN:56540,GLU:15075850,GLY:15461355,HIS:8553170,ILE:1016335,LEU:1016335,LYS:1334015,MET:15132160,PHE:3289770,PRO:14456450,SER:16422400,THR:16422400,TRP:11819700,TYR:3289770,VAL:1016335,ASX:16738740,GLX:16738740},$3Dmol.residues.shapely={ALA:9240460,ARG:124,ASN:16743536,ASP:10485826,CYS:16777072,GLN:16731212,GLU:6684672,GLY:16777215,HIS:7368959,ILE:19456,LEU:4546117,LYS:4671416,MET:12099650,PHE:5459026,PRO:5395026,SER:16740418,THR:12078080,TRP:5195264,TYR:9203788,VAL:16747775,ASX:16711935,GLX:16711935},$3Dmol.residues.nucleic={A:10526975,G:16740464,I:8454143,C:16747595,T:10551200,U:16744576},$3Dmol.chains={},$3Dmol.chains.atom={A:12636415,B:11599792,C:16761032,D:16777088,E:16761087,F:11596016,G:16765040,H:15761536,I:16113331,J:49151,K:13458524,L:6737322,M:10145074,N:15631086,O:52945,P:65407,Q:3978097,R:139,S:12433259,T:25600,U:8388608,V:8421376,W:8388736,X:32896,Y:12092939,Z:11674146},$3Dmol.chains.hetatm={A:9478351,B:8441752,C:13602992,D:13619056,E:13603023,F:8437952,G:13607008,H:12603504,I:12955267,J:42959,K:11881548,L:5682578,M:9090346,N:12481214,O:46753,P:53103,Q:3447649,R:187,S:10854235,T:37888,U:11534336,V:11579392,W:11534512,X:45232,Y:15250963,Z:12726834},$3Dmol.builtinColorSchemes={ssPyMol:{prop:"ss",map:$3Dmol.ssColors.pyMol},ssJmol:{prop:"ss",map:$3Dmol.ssColors.Jmol},Jmol:{prop:"elem",map:$3Dmol.elementColors.Jmol},greenCarbon:{prop:"elem",map:$3Dmol.elementColors.greenCarbon},default:{prop:"elem",map:$3Dmol.elementColors.defaultColors},amino:{prop:"resn",map:$3Dmol.residues.amino},shapely:{prop:"resn",map:$3Dmol.residues.shapely},nucleic:{prop:"resn",map:$3Dmol.residues.nucleic},chain:{prop:"chain",map:$3Dmol.chains.atom},chainHetatm:{prop:"chain",map:$3Dmol.chains.hetatm}},$3Dmol.getColorFromStyle=function(e,t){var r=t.colorscheme;if(void 0!==$3Dmol.builtinColorSchemes[r])r=$3Dmol.builtinColorSchemes[r];else if("string"==typeof r&&r.endsWith("Carbon")){var n=r.substring(0,r.lastIndexOf("Carbon")).toLowerCase();if(void 0!==htmlColors[n]){var i=$.extend({},$3Dmol.elementColors.defaultColors);i.C=htmlColors[n],$3Dmol.builtinColorSchemes[r]={prop:"elem",map:i},r=$3Dmol.builtinColorSchemes[r]}}var o,a,s=e.color;if(void 0!==t.color&&"spectrum"!=t.color&&(s=t.color),void 0!==r)if(void 0!==$3Dmol.elementColors[r])void 0!==(r=$3Dmol.elementColors[r])[e[r.prop]]&&(s=r.map[e[r.prop]]);else if(void 0!==r[e[r.prop]])s=r.map[e[r.prop]];else if(void 0!==r.prop&&void 0!==r.gradient){o=r.prop;var l=r.gradient;void 0!==$3Dmol.Gradient.builtinGradients[l]&&(l=new $3Dmol.Gradient.builtinGradients[l](r.min,r.max,r.mid));var c=l.range()||[-1,1];null!=(a=$3Dmol.getAtomProperty(e,o))&&(s=l.valueToHex(a,c))}else void 0!==r.prop&&void 0!==r.map?(o=r.prop,a=$3Dmol.getAtomProperty(e,o),void 0!==r.map[a]&&(s=r.map[a])):void 0!==t.colorscheme[e.elem]?s=t.colorscheme[e.elem]:console.log("Could not interpret colorscheme "+r);else void 0!==t.colorfunc&&(s=t.colorfunc(e));return $3Dmol.CC.color(s)};var $3Dmol=$3Dmol||{};$3Dmol.subdivide_spline=function(e,t){var r,n,i,o,a,s,l,c,u,h=[],f=e;for((f=[]).push(e[0]),r=1,n=e.length-1;r<n;r++)if(a=e[r],s=e[r+1],a.smoothen){var d=new $3Dmol.Vector3((a.x+s.x)/2,(a.y+s.y)/2,(a.z+s.z)/2);d.atom=a.atom,f.push(d)}else f.push(a);for(f.push(e[e.length-1]),r=-1,i=f.length;r<=i-3;r++)if(o=f[-1===r?0:r],a=f[r+1],s=f[r+2],l=f[r===i-3?i-1:r+3],c=(new $3Dmol.Vector3).subVectors(s,o).multiplyScalar(.5),u=(new $3Dmol.Vector3).subVectors(l,a).multiplyScalar(.5),!s.skip)for(var p=0;p<t;p++){var m=1/t*p,v=a.x+m*c.x+m*m*(-3*a.x+3*s.x-2*c.x-u.x)+m*m*m*(2*a.x-2*s.x+c.x+u.x),g=a.y+m*c.y+m*m*(-3*a.y+3*s.y-2*c.y-u.y)+m*m*m*(2*a.y-2*s.y+c.y+u.y),y=a.z+m*c.z+m*m*(-3*a.z+3*s.z-2*c.z-u.z)+m*m*m*(2*a.z-2*s.z+c.z+u.z),b=new $3Dmol.Vector3(v,g,y);b.atom=p<t/2?a.atom:s.atom,h.push(b)}return h.push(f[f.length-1]),h},$3Dmol.drawCartoon=function(){var e=function(e,t,r,n){for(var i,o,a,s,l=0,c=t.length;l<c;l++){s=Math.round(l*(n.length-1)/c),a=$3Dmol.CC.color(n[s]);var u=e.updateGeoGroup(2),h=u.vertexArray,f=u.colorArray,d=u.faceArray;h[o=3*(i=u.vertices)]=t[l].x,h[o+1]=t[l].y,h[o+2]=t[l].z,h[o+3]=r[l].x,h[o+4]=r[l].y,h[o+5]=r[l].z;for(var p=0;p<6;++p)f[o+3*p]=a.r,f[o+1+3*p]=a.g,f[o+2+3*p]=a.b;if(l>0){var m=[i,i+1,i-1,i-2],v=u.faceidx;d[v]=m[0],d[v+1]=m[1],d[v+2]=m[3],d[v+3]=m[1],d[v+4]=m[2],d[v+5]=m[3],u.faceidx+=6}u.vertices+=2}},t=function(e,t,r,n,i){if(0!==t.length){i=void 0===i?5:i;var o=new $3Dmol.Geometry,a=new $3Dmol.LineBasicMaterial({linewidth:r});a.vertexColors=!0;var s=new $3Dmol.Line(o,a);s.type=$3Dmol.LineStrip,e.add(s)}},r=function(t,r,n,i,o,a,s){s&&"default"!==s||(s="rectangle"),"edged"===s?function(t,r,n,i,o,a){if(!(r.length<2)){var s,l;if(s=r[0],l=r[r.length-1],s=$3Dmol.subdivide_spline(s,i),l=$3Dmol.subdivide_spline(l,i),!o)return e(t,s,l,n);var c,u,h,f,d,p,m,v,g,y,b,x,w,D,C,A,$,S,M,_,z,T,L=[],E=[[0,2,-6,-8],[-4,-2,6,4],[7,-1,-5,3],[-3,5,1,-7]];for(w=0,D=s.length;w<D;w++){if(y=Math.round(w*(n.length-1)/D),g=$3Dmol.CC.color(n[y]),L.push(u=s[w]),L.push(u),L.push(h=l[w]),L.push(h),w<D-1){var F=s[w+1].clone().sub(s[w]);c=l[w].clone().sub(s[w]).cross(F).normalize().multiplyScalar(o)}for(L.push(f=s[w].clone().add(c)),L.push(f),L.push(d=l[w].clone().add(c)),L.push(d),void 0!==u.atom&&(b=u.atom),_=(M=t.updateGeoGroup(8)).vertexArray,z=M.colorArray,T=M.faceArray,_[m=3*(p=M.vertices)]=u.x,_[m+1]=u.y,_[m+2]=u.z,_[m+3]=u.x,_[m+4]=u.y,_[m+5]=u.z,_[m+6]=h.x,_[m+7]=h.y,_[m+8]=h.z,_[m+9]=h.x,_[m+10]=h.y,_[m+11]=h.z,_[m+12]=f.x,_[m+13]=f.y,_[m+14]=f.z,_[m+15]=f.x,_[m+16]=f.y,_[m+17]=f.z,_[m+18]=d.x,_[m+19]=d.y,_[m+20]=d.z,_[m+21]=d.x,_[m+22]=d.y,_[m+23]=d.z,C=0;C<8;++C)z[m+3*C]=g.r,z[m+1+3*C]=g.g,z[m+2+3*C]=g.b;if(w>0){var k=void 0!==x&&void 0!==b&&x.serial!==b.serial;for(C=0;C<4;C++){var I=[p+E[C][0],p+E[C][1],p+E[C][2],p+E[C][3]];if(T[v=M.faceidx]=I[0],T[v+1]=I[1],T[v+2]=I[3],T[v+3]=I[1],T[v+4]=I[2],T[v+5]=I[3],M.faceidx+=6,b.clickable||x.clickable||b.hoverable||x.hoverable){var P=L[I[3]].clone(),O=L[I[0]].clone(),R=L[I[2]].clone(),N=L[I[1]].clone();if(P.atom=L[I[3]].atom||null,R.atom=L[I[2]].atom||null,O.atom=L[I[0]].atom||null,N.atom=L[I[1]].atom||null,k){var B=P.clone().add(O).multiplyScalar(.5),V=R.clone().add(N).multiplyScalar(.5),U=P.clone().add(N).multiplyScalar(.5);C%2==0?((x.clickable||x.hoverable)&&(A=new $3Dmol.Triangle(B,U,P),$=new $3Dmol.Triangle(V,R,U),S=new $3Dmol.Triangle(U,R,P),x.intersectionShape.triangle.push(A),x.intersectionShape.triangle.push($),x.intersectionShape.triangle.push(S)),(b.clickable||b.hoverable)&&(A=new $3Dmol.Triangle(O,N,U),$=new $3Dmol.Triangle(N,V,U),S=new $3Dmol.Triangle(O,U,B),b.intersectionShape.triangle.push(A),b.intersectionShape.triangle.push($),b.intersectionShape.triangle.push(S))):((b.clickable||b.hoverable)&&(A=new $3Dmol.Triangle(B,U,P),$=new $3Dmol.Triangle(V,R,U),S=new $3Dmol.Triangle(U,R,P),b.intersectionShape.triangle.push(A),b.intersectionShape.triangle.push($),b.intersectionShape.triangle.push(S)),(x.clickable||x.hoverable)&&(A=new $3Dmol.Triangle(O,N,U),$=new $3Dmol.Triangle(N,V,U),S=new $3Dmol.Triangle(O,U,B),x.intersectionShape.triangle.push(A),x.intersectionShape.triangle.push($),x.intersectionShape.triangle.push(S)))}else(b.clickable||b.hoverable)&&(A=new $3Dmol.Triangle(O,N,P),$=new $3Dmol.Triangle(N,R,P),b.intersectionShape.triangle.push(A),b.intersectionShape.triangle.push($))}}}M.vertices+=8,x=b}var j=L.length-8;for(_=(M=t.updateGeoGroup(8)).vertexArray,z=M.colorArray,T=M.faceArray,m=3*(p=M.vertices),v=M.faceidx,w=0;w<4;w++){L.push(L[2*w]),L.push(L[j+2*w]);var G=L[2*w],q=L[j+2*w];_[m+6*w]=G.x,_[m+1+6*w]=G.y,_[m+2+6*w]=G.z,_[m+3+6*w]=q.x,_[m+4+6*w]=q.y,_[m+5+6*w]=q.z,z[m+6*w]=g.r,z[m+1+6*w]=g.g,z[m+2+6*w]=g.b,z[m+3+6*w]=g.r,z[m+4+6*w]=g.g,z[m+5+6*w]=g.b}j+=8,A=[p,p+2,p+6,p+4],$=[p+1,p+5,p+7,p+3],T[v]=A[0],T[v+1]=A[1],T[v+2]=A[3],T[v+3]=A[1],T[v+4]=A[2],T[v+5]=A[3],T[v+6]=$[0],T[v+7]=$[1],T[v+8]=$[3],T[v+9]=$[1],T[v+10]=$[2],T[v+11]=$[3],M.faceidx+=12,M.vertices+=8}}(t,r,n,i,o):"rectangle"!==s&&"oval"!==s&&"parabola"!==s||function(t,r,n,i,o,a,s){var l,c,u,h;if(!((u=r.length)<2||r[0].length<2)){for(l=0;l<u;l++)r[l]=$3Dmol.subdivide_spline(r[l],i);if(h=r[0].length,!o)return e(t,r[0],r[u-1],n);var f,d,p,m,v,g,y=[],b=[],x=[];for(c=0;c<u;c++)y.push(.25+1.5*Math.sqrt((u-1)*c-Math.pow(c,2))/(u-1)),b.push(.5),x.push(2*(Math.pow(c/u,2)-c/u)+.6);var w,D,C,A,$,S,M=[];for(c=0;c<2*u-1;c++)M[c]=[c,c+1,c+1-2*u,c-2*u];M[2*u-1]=[c,c+1-2*u,c+1-4*u,c-2*u];var _,z,T,L,E=t.updateGeoGroup(2*u*h);for(l=0;l<h;l++){var F,k;for(S=Math.round(l*(n.length-1)/h),$=$3Dmol.CC.color(n[S]),v=p,g=m,p=[],m=[],f=[],void 0!==r[0][l].atom&&(A=r[0][l].atom,"oval"===s?d=y:"rectangle"===s?d=b:"parabola"===s&&(d=x)),d||(d=b),c=0;c<u;c++)F=l<h-1?r[c][l+1].clone().sub(r[c][l]):r[c][l-1].clone().sub(r[c][l]).negate(),k=c<u-1?r[c+1][l].clone().sub(r[c][l]):r[c-1][l].clone().sub(r[c][l]).negate(),f[c]=k.cross(F).normalize().multiplyScalar(o*d[c]);for(c=0;c<u;c++)p[c]=r[c][l].clone().add(f[c].clone().negate());for(c=0;c<u;c++)m[c]=r[c][l].clone().add(f[c]);for(_=E.vertexArray,z=E.colorArray,T=E.faceArray,D=3*(w=E.vertices),c=0;c<u;c++)_[D+3*c+0]=p[c].x,_[D+3*c+1]=p[c].y,_[D+3*c+2]=p[c].z;for(c=0;c<u;c++)_[D+3*c+0+3*u]=m[u-1-c].x,_[D+3*c+1+3*u]=m[u-1-c].y,_[D+3*c+2+3*u]=m[u-1-c].z;for(c=0;c<2*u;++c)z[D+3*c+0]=$.r,z[D+3*c+1]=$.g,z[D+3*c+2]=$.b;if(l>0){for(c=0;c<2*u;c++)L=[w+M[c][0],w+M[c][1],w+M[c][2],w+M[c][3]],T[C=E.faceidx]=L[0],T[C+1]=L[1],T[C+2]=L[3],T[C+3]=L[1],T[C+4]=L[2],T[C+5]=L[3],E.faceidx+=6;if(A.clickable||A.hoverable){var I=[];for(c in I.push(new $3Dmol.Triangle(v[0],p[0],p[u-1])),I.push(new $3Dmol.Triangle(v[0],p[u-1],v[u-1])),I.push(new $3Dmol.Triangle(v[u-1],p[u-1],m[u-1])),I.push(new $3Dmol.Triangle(v[u-1],m[u-1],g[u-1])),I.push(new $3Dmol.Triangle(m[0],g[0],g[u-1])),I.push(new $3Dmol.Triangle(m[u-1],m[0],g[u-1])),I.push(new $3Dmol.Triangle(p[0],v[0],g[0])),I.push(new $3Dmol.Triangle(m[0],p[0],g[0])),I)A.intersectionShape.triangle.push(I[c])}}E.vertices+=2*u}for(_=E.vertexArray,z=E.colorArray,T=E.faceArray,D=3*(w=E.vertices),C=E.faceidx,l=0;l<u-1;l++)L=[l,l+1,2*u-2-l,2*u-1-l],T[C=E.faceidx]=L[0],T[C+1]=L[1],T[C+2]=L[3],T[C+3]=L[1],T[C+4]=L[2],T[C+5]=L[3],E.faceidx+=6;for(l=0;l<u-1;l++)L=[w-1-l,w-2-l,w-2*u+l+1,w-2*u+l],T[C=E.faceidx]=L[0],T[C+1]=L[1],T[C+2]=L[3],T[C+3]=L[1],T[C+4]=L[2],T[C+5]=L[3],E.faceidx+=6}}(t,r,n,i,o,0,s)},n=function(e){return e&&"C"===e.elem&&"CA"===e.atom},i=function(e,t){if(e&&t&&e.chain===t.chain){if(e.reschain===t.reschain&&(e.resi===t.resi||e.resi===t.resi-1))return!0;if(e.resi<t.resi){var r=e.x-t.x,n=e.y-t.y,i=e.z-t.z;if(r*r+n*n+i*i<16)return!0}}return!1},o=function(e,t,r,n,i){if(null!=t&&0!=t.vertices){i&&(t.initTypedArrays(),t.setUpNormals());var o=new $3Dmol.MeshDoubleLambertMaterial;o.vertexColors=$3Dmol.FaceColors,"number"==typeof r&&r>=0&&r<1&&(o.transparent=!0,o.opacity=r),o.outline=n;var a=new $3Dmol.Mesh(t,o);e.add(a)}},a=function(e,t,r,n,i,o,a,s,l){var c,u,h,f,d,p;if(n&&i&&a){var m=i.sub(n);m.normalize();var v=s[l];for(u=l+1;u<s.length&&(v=s[u]).atom!=a.atom;u++);if((v=v?new $3Dmol.Vector3(v.x,v.y,v.z):new $3Dmol.Vector3(0,0,0)).sub(n),"arrow start"===a.ss){var g=v.clone().multiplyScalar(.3).cross(i);n.add(g);var y=v.clone().cross(m).normalize();m.rotateAboutVector(y,.43)}for(a.style.cartoon.ribbon?c=a.style.cartoon.thickness||.4:a.style.cartoon.width?c=a.style.cartoon.width:"c"===a.ss?c="P"===a.atom?.8:.5:"arrow start"===a.ss?(c=1.3,d=!0):c="arrow end"===a.ss?.5:"h"===a.ss&&a.style.cartoon.tubes||"tube start"===a.ss?.5:1.3,null!=o&&m.dot(o)<0&&m.negate(),m.multiplyScalar(c),u=0;u<t;u++)h=2*u/(t-1)-1,(f=new $3Dmol.Vector3(n.x+h*m.x,n.y+h*m.y,n.z+h*m.z)).atom=a,r&&"s"===a.ss&&(f.smoothen=!0),e[u].push(f);if(d)for(m.multiplyScalar(2),u=0;u<t;u++)h=2*u/(t-1)-1,(f=new $3Dmol.Vector3(n.x+h*m.x,n.y+h*m.y,n.z+h*m.z)).atom=a,f.smoothen=!1,f.skip=!0,e[u].push(f);return p=a.style.cartoon.style||"default",e.style?e.style!=p&&(console.log("Warning: a cartoon chain's strand-style is ambiguous"),e.style="default"):e.style=p,"arrow start"!==a.ss&&"arrow end"!==a.ss||(a.ss="s"),d}},s={C:!0,CA:!0,O:!0,P:!0,OP2:!0,O2P:!0,"O5'":!0,"O3'":!0,"C5'":!0,"C2'":!0,"O5*":!0,"O3*":!0,"C5*":!0,"C2*":!0,N1:!0,N3:!0},l={DA:!0,DG:!0,A:!0,G:!0},c={DT:!0,DC:!0,U:!0,C:!0,T:!0},u={DA:!0,DG:!0,A:!0,G:!0,DT:!0,DC:!0,U:!0,C:!0,T:!0};return function(e,h,f,d){!function(e,h,f,d,p,m,v){var g,y,b,x,w,D,C,A,S,M,_,z,T,L,E,F,k,I;m=m||5,v=v||5;var P=new $3Dmol.Geometry(!0),O=new $3Dmol.Geometry(!0),R=[],N=[],B=1,V=!1,U={};for(var j in $3Dmol.Gradient.builtinGradients)$3Dmol.Gradient.builtinGradients.hasOwnProperty(j)&&(U[j]=new $3Dmol.Gradient.builtinGradients[j](f[1],f[0]));var G=function(e,t){return f&&"spectrum"===t.color?t.colorscheme in U?U[t.colorscheme].valueToHex(e.resi):U.sinebow.valueToHex(e.resi):$3Dmol.getColorFromStyle(e,t).getHex()};for(A=0;A<m;A++)N[A]=[];var q=!1,H=!1,W=[];for(A in h){if("C"===(x=h[A]).elem&&"CA"===x.atom){var Y=i(b,x);Y&&"s"===x.ss?q=!0:q&&(b&&y&&b.style.cartoon.arrows&&y.style.cartoon.arrows&&(b.ss="arrow end",y.ss="arrow start"),q=!1),Y&&("h"===b.ss||"tube start"==b.ss)&&b.style.cartoon.tubes?!H&&"tube start"!=b.ss&&x.style.cartoon.tubes&&(x.ss="tube start",H=!0):H&&("tube start"===b.ss?b.ss="tube end":y&&y.style.cartoon.tubes&&(y.ss="tube end"),H=!1),y=b,b=x}x&&x.atom in s&&W.push(x)}H&&b.style.cartoon.tubes&&(b.ss="tube end",H=!1);var Z=function(n){for(var i=0;!C&&i<m;i++)t(e,N[i],1,0,v);d&&N[0].length>0&&r(O,N,R,v,C,0,N.style);var a=[],s=null;if(n){for(i=0;i<m;i++)a[i]=N[i][N[i].length-1];s=R[R.length-1]}for(N=[],i=0;i<m;i++)N[i]=[];if(R=[],n){for(i=0;i<m;i++)N[i].push(a[i]);R.push(s)}o(e,O,B,V,!0),o(e,P,B,V,!1),O=new $3Dmol.Geometry(!0),P=new $3Dmol.Geometry(!0)};b=void 0;for(var X=0;X<W.length;X++){var Q=(x=W[X]).resn.trim(),K=Q in u;if(B=1,g=x.style.cartoon,b&&b.style.cartoon&&(B=b.style.cartoon.opacity),b&&b.style.cartoon&&b.style.cartoon.outline&&(V=b.style.cartoon.outline),!b||!b.style.cartoon||x.style.cartoon&&b.style.cartoon.opacity==x.style.cartoon.opacity||Z(b.chain==x.chain),N.length&&N[0].length>3e4/m/v/2&&Z(!0),"trace"===g.style){if(x.hetflag);else if("C"===x.elem&&"CA"===x.atom||K&&"P"===x.atom){if(D=G(x,g),C=$.isNumeric(g.thickness)?g.thickness:.4,i(b,x))if(D==w){var J=$3Dmol.CC.color(D);$3Dmol.GLDraw.drawCylinder(P,b,x,C,J,2,2)}else{var ee=(new $3Dmol.Vector3).addVectors(b,x).multiplyScalar(.5),te=$3Dmol.CC.color(w),re=$3Dmol.CC.color(D);$3Dmol.GLDraw.drawCylinder(P,b,ee,C,te,2,0),$3Dmol.GLDraw.drawCylinder(P,ee,x,C,re,0,2)}b=x,w=D}}else{if(n(x)||K&&("P"===x.atom||0==x.atom.indexOf("O5"))){if(I)if("tube end"===x.ss)I=!1,k=new $3Dmol.Vector3(x.x,x.y,x.z),$3Dmol.GLDraw.drawCylinder(P,F,k,2,$3Dmol.CC.color(w),1,1),x.ss="h";else{if(b.chain==x.chain&&"tube end"!==b.ss)continue;I=!1,b.ss="h",k=new $3Dmol.Vector3(b.x,b.y,b.z),$3Dmol.GLDraw.drawCylinder(P,F,k,2,$3Dmol.CC.color(w),1,1)}if(b&&(!i(b,x)||"tube start"===b.ss)){for("tube start"===b.ss&&(I=!0,F=new $3Dmol.Vector3(b.x,b.y,b.z),b.ss="h"),E&&(L=z?(new $3Dmol.Vector3).addVectors(b,z).multiplyScalar(.5):new $3Dmol.Vector3(b.x,b.y,b.z),$3Dmol.GLDraw.drawCylinder(P,L,E,.4,$3Dmol.CC.color(E.color),0,2),a(N,m,!p,z,T,_,b,W,X),R.push(D),L=null,E=null),A=0;!C&&A<m;A++)t(e,N[A],1,0,v);for(d&&N[0].length>0&&r(O,N,R,v,C,0,N.style),N=[],A=0;A<m;A++)N[A]=[];R=[]}if(void 0===b||b.rescode!=x.rescode||b.resi!=x.resi){if(E){var ne=(L=(new $3Dmol.Vector3).addVectors(b,x).multiplyScalar(.5)).clone().sub(E).multiplyScalar(.02);L.add(ne),$3Dmol.GLDraw.drawCylinder(P,L,E,.4,$3Dmol.CC.color(E.color),0,2),L=null,E=null}D=G(x,g),R.push(D),C=$.isNumeric(g.thickness)?g.thickness:.4,b=x,(S=new $3Dmol.Vector3(b.x,b.y,b.z)).resi=b.resi,w=D}!0!==x.clickable&&!0!==x.hoverable||void 0!==x.intersectionShape&&void 0!==x.intersectionShape.triangle||(x.intersectionShape={sphere:null,cylinder:[],line:[],triangle:[]})}else n(b)&&"O"===x.atom||K&&"P"===b.atom&&("OP2"===x.atom||"O2P"===x.atom)||K&&0==b.atom.indexOf("O5")&&0==x.atom.indexOf("C5")?((M=new $3Dmol.Vector3(x.x,x.y,x.z)).resi=x.resi,"OP2"!==x.atom&&"O2P"!==x.atom||(T=new $3Dmol.Vector3(x.x,x.y,x.z))):K&&0==x.atom.indexOf("O3")?z=new $3Dmol.Vector3(x.x,x.y,x.z):("N1"===x.atom&&Q in l||"N3"===x.atom&&Q in c)&&((E=new $3Dmol.Vector3(x.x,x.y,x.z)).color=$3Dmol.getColorFromStyle(x,g).getHex());M&&S&&M.resi===S.resi&&(a(N,m,!p,S,M,_,b,W,X),_=M,S=null,M=null,R.push(D))}}E&&(L=z?(new $3Dmol.Vector3).addVectors(b,z).multiplyScalar(.5):new $3Dmol.Vector3(b.x,b.y,b.z),$3Dmol.GLDraw.drawCylinder(P,L,E,.4,$3Dmol.CC.color(E.color),0,2),a(N,m,!p,z,T,_,b,W,X),R.push(D)),Z()}(e,h,f,!0,!1,d=d||5,d)}}();var $3Dmol=$3Dmol||{};$3Dmol.CAP={NONE:0,FLAT:1,ROUND:2},$3Dmol.GLDraw=function(){var e,t={},r=(e=new $3Dmol.Vector3,function(t){e.set(t[0],t[1],t[2]);var r,n,i,o,a,s=e.x,l=e.y,c=e.z,u=Math.sqrt(s*s+l*l);u<1e-4?(n=0,i=1):(n=-s/u,i=l/u),l=-n*s+i*l,(r=Math.sqrt(l*l+c*c))<1e-4?(o=0,a=1):(o=c/r,a=l/r);var h=new Float32Array(9);return h[0]=i,h[1]=n,h[2]=0,h[3]=-n*a,h[4]=i*a,h[5]=o,h[6]=n*o,h[7]=-i*o,h[8]=a,h}),n=function(){var e,t=[],r=Math.pow(2,4),n=2,i=Math.pow(2,n),o=r/i;for(t[0]=new $3Dmol.Vector3(-1,0,0),t[o]=new $3Dmol.Vector3(0,0,1),t[2*o]=new $3Dmol.Vector3(1,0,0),t[3*o]=new $3Dmol.Vector3(0,0,-1),n=3;n<=4;n++){for(o=r/(i=Math.pow(2,n-1)),e=0;e<i-1;e++)t[o/2+e*o]=t[e*o].clone().add(t[(e+1)*o]).normalize();t[o/2+(e=i-1)*o]=t[e*o].clone().add(t[0]).normalize()}return t}(),i={cache:{},getVerticesForRadius:function(e,t,r){if(void 0!==typeof this.chache&&void 0!==this.cache[e]&&void 0!==this.cache[e][t+r])return this.cache[e][t+r];for(var i,o=n.length,a=[],s=[],l=0;l<o;l++)a.push(n[l].clone().multiplyScalar(e)),a.push(n[l].clone().multiplyScalar(e)),i=n[l].clone().normalize(),s.push(i),s.push(i);var c=[],u=o;var h,f,d=2*Math.PI,p=Math.PI,m=!1,v=!1;for(f=0;f<=10;f++){m=0===f||10===f,v=5===f;var g=[],y=[];for(h=0;h<=u;h++)if(v){var b=h<u?2*h:0;y.push(b+1),g.push(b)}else{var x=h/u,w=f/10;if(m&&0!==h)m&&g.push(a.length-1);else if(h<u){var D=new $3Dmol.Vector3;D.x=-e*Math.cos(0+x*d)*Math.sin(0+w*p),D.y=1==t?0:e*Math.cos(0+w*p),D.z=e*Math.sin(0+x*d)*Math.sin(0+w*p),Math.abs(D.x)<1e-5&&(D.x=0),Math.abs(D.y)<1e-5&&(D.y=0),Math.abs(D.z)<1e-5&&(D.z=0),t==$3Dmol.CAP.FLAT?(i=new $3Dmol.Vector3(0,Math.cos(0+w*p),0)).normalize():(i=new $3Dmol.Vector3(D.x,D.y,D.z)).normalize(),a.push(D),s.push(i),g.push(a.length-1)}else g.push(a.length-u)}v&&c.push(y),c.push(g)}var C={vertices:a,normals:s,verticesRows:c,w:u,h:10};return e in this.cache||(this.cache[e]={}),this.cache[e][t+r]=C,C}};t.drawCylinder=function(e,t,n,o,a,s,l){if(t&&n){0;var c=l||s;a=a||{r:0,g:0,b:0};var u=[n.x,n.y,n.z];u[0]-=t.x,u[1]-=t.y,u[2]-=t.z;var h,f,d,p,m,v,g=r(u),y=i.getVerticesForRadius(o,l,"to"),b=y.w,x=y.h,w=c?x*b+2:2*b,D=e.updateGeoGroup(w),C=y.vertices,A=y.normals,$=y.verticesRows,S=$[x/2],M=$[x/2+1],_=D.vertices,z=D.vertexArray,T=D.normalArray,L=D.colorArray,E=D.faceArray;for(d=0;d<b;++d){var F=2*d;p=g[0]*C[F].x+g[3]*C[F].y+g[6]*C[F].z,m=g[1]*C[F].x+g[4]*C[F].y+g[7]*C[F].z,v=g[5]*C[F].y+g[8]*C[F].z,h=3*(_+F),f=D.faceidx,z[h]=p+t.x,z[h+1]=m+t.y,z[h+2]=v+t.z,z[h+3]=p+n.x,z[h+4]=m+n.y,z[h+5]=v+n.z,T[h]=p,T[h+3]=p,T[h+1]=m,T[h+4]=m,T[h+2]=v,T[h+5]=v,L[h]=a.r,L[h+3]=a.r,L[h+1]=a.g,L[h+4]=a.g,L[h+2]=a.b,L[h+5]=a.b,E[f]=M[d]+_,E[f+1]=M[d+1]+_,E[f+2]=S[d]+_,E[f+3]=S[d]+_,E[f+4]=M[d+1]+_,E[f+5]=S[d+1]+_,D.faceidx+=6}if(c){var k,I,P,O,R,N,B,V,U,j,G,q,H,W,Y,Z,X,Q,K,J,ee,te,re,ne,ie,oe,ae,se,le,ce,ue,he,fe=s?x+1:x/2+1;for(m=l?0:x/2;m<fe;m++)if(m!==x/2){var de=m<=x/2?n:t,pe=i.getVerticesForRadius(o,l,"to"),me=i.getVerticesForRadius(o,s,"from");for(de===n?(C=pe.vertices,A=pe.normals,$=pe.verticesRows):de==t&&(C=me.vertices,A=me.normals,$=me.verticesRows),p=0;p<b;p++)f=D.faceidx,le=3*((k=$[m][p+1])+_),ce=3*((I=$[m][p])+_),ue=3*((P=$[m+1][p])+_),he=3*((O=$[m+1][p+1])+_),R=g[0]*C[k].x+g[3]*C[k].y+g[6]*C[k].z,N=g[0]*C[I].x+g[3]*C[I].y+g[6]*C[I].z,B=g[0]*C[P].x+g[3]*C[P].y+g[6]*C[P].z,V=g[0]*C[O].x+g[3]*C[O].y+g[6]*C[O].z,U=g[1]*C[k].x+g[4]*C[k].y+g[7]*C[k].z,j=g[1]*C[I].x+g[4]*C[I].y+g[7]*C[I].z,G=g[1]*C[P].x+g[4]*C[P].y+g[7]*C[P].z,q=g[1]*C[O].x+g[4]*C[O].y+g[7]*C[O].z,H=g[5]*C[k].y+g[8]*C[k].z,W=g[5]*C[I].y+g[8]*C[I].z,Y=g[5]*C[P].y+g[8]*C[P].z,Z=g[5]*C[O].y+g[8]*C[O].z,z[le]=R+de.x,z[ce]=N+de.x,z[ue]=B+de.x,z[he]=V+de.x,z[le+1]=U+de.y,z[ce+1]=j+de.y,z[ue+1]=G+de.y,z[he+1]=q+de.y,z[le+2]=H+de.z,z[ce+2]=W+de.z,z[ue+2]=Y+de.z,z[he+2]=Z+de.z,L[le]=a.r,L[ce]=a.r,L[ue]=a.r,L[he]=a.r,L[le+1]=a.g,L[ce+1]=a.g,L[ue+1]=a.g,L[he+1]=a.g,L[le+2]=a.b,L[ce+2]=a.b,L[ue+2]=a.b,L[he+2]=a.b,X=g[0]*A[k].x+g[3]*A[k].y+g[6]*A[k].z,Q=g[0]*A[I].x+g[3]*A[I].y+g[6]*A[I].z,K=g[0]*A[P].x+g[3]*A[P].y+g[6]*A[P].z,J=g[0]*A[O].x+g[3]*A[O].y+g[6]*A[O].z,ee=g[1]*A[k].x+g[4]*A[k].y+g[7]*A[k].z,te=g[1]*A[I].x+g[4]*A[I].y+g[7]*A[I].z,re=g[1]*A[P].x+g[4]*A[P].y+g[7]*A[P].z,ne=g[1]*A[O].x+g[4]*A[O].y+g[7]*A[O].z,ie=g[5]*A[k].y+g[8]*A[k].z,oe=g[5]*A[I].y+g[8]*A[I].z,ae=g[5]*A[P].y+g[8]*A[P].z,se=g[5]*A[O].y+g[8]*A[O].z,0===m?(T[le]=X,T[ue]=K,T[he]=J,T[le+1]=ee,T[ue+1]=re,T[he+1]=ne,T[le+2]=ie,T[ue+2]=ae,T[he+2]=se,E[f]=k+_,E[f+1]=P+_,E[f+2]=O+_,D.faceidx+=3):m===fe-1?(T[le]=X,T[ce]=Q,T[ue]=K,T[le+1]=ee,T[ce+1]=te,T[ue+1]=re,T[le+2]=ie,T[ce+2]=oe,T[ue+2]=ae,E[f]=k+_,E[f+1]=I+_,E[f+2]=P+_,D.faceidx+=3):(T[le]=X,T[ce]=Q,T[he]=J,T[le+1]=ee,T[ce+1]=te,T[he+1]=ne,T[le+2]=ie,T[ce+2]=oe,T[he+2]=se,T[ce]=Q,T[ue]=K,T[he]=J,T[ce+1]=te,T[ue+1]=re,T[he+1]=ne,T[ce+2]=oe,T[ue+2]=ae,T[he+2]=se,E[f]=k+_,E[f+1]=I+_,E[f+2]=O+_,E[f+3]=I+_,E[f+4]=P+_,E[f+5]=O+_,D.faceidx+=6)}}D.vertices+=w}},t.drawCone=function(e,t,i,o,a){if(t&&i){a=a||{r:0,g:0,b:0};var s=[i.x,i.y,i.z];s.x-=t.x,s.y-=t.y,s.z-=t.z;var l,c,u,h,f,d,p=r(s),m=n.length,v=n,g=m+2,y=e.updateGeoGroup(g),b=y.vertices,x=y.vertexArray,w=y.normalArray,D=y.colorArray,C=y.faceArray;l=3*b;var A=new $3Dmol.Vector3(s[0],s[1],s[2]).normalize();for(x[l]=t.x,x[l+1]=t.y,x[l+2]=t.z,w[l]=-A.x,w[l+1]=-A.y,w[l+2]=-A.z,D[l]=a.r,D[l+1]=a.g,D[l+2]=a.b,x[l+3]=i.x,x[l+4]=i.y,x[l+5]=i.z,w[l+3]=A.x,w[l+4]=A.y,w[l+5]=A.z,D[l+3]=a.r,D[l+4]=a.g,D[l+5]=a.b,l+=6,u=0;u<m;++u){var $=v[u].clone();$.multiplyScalar(o),h=p[0]*$.x+p[3]*$.y+p[6]*$.z,f=p[1]*$.x+p[4]*$.y+p[7]*$.z,d=p[5]*$.y+p[8]*$.z,x[l]=h+t.x,x[l+1]=f+t.y,x[l+2]=d+t.z,w[l]=h,w[l+1]=f,w[l+2]=d,D[l]=a.r,D[l+1]=a.g,D[l+2]=a.b,l+=3}for(y.vertices+=m+2,c=y.faceidx,u=0;u<m;u++){var S=b+2+u,M=b+2+(u+1)%m;C[c]=S,C[c+1]=M,C[c+2]=b,C[c+=3]=S,C[c+1]=M,C[c+2]=b+1,c+=3}y.faceidx+=6*m}};var o={cache:{},getVerticesForRadius:function(e){if(void 0!==this.cache[e])return this.cache[e];var t={vertices:[],verticesRows:[],normals:[]},r=16,n=10;e<1&&(r=10,n=8);var i,o,a=2*Math.PI,s=Math.PI;for(o=0;o<=n;o++){var l=[];for(i=0;i<=r;i++){var c=i/r,u=o/n,h={};h.x=-e*Math.cos(0+c*a)*Math.sin(0+u*s),h.y=e*Math.cos(0+u*s),h.z=e*Math.sin(0+c*a)*Math.sin(0+u*s);var f=new $3Dmol.Vector3(h.x,h.y,h.z);f.normalize(),t.vertices.push(h),t.normals.push(f),l.push(t.vertices.length-1)}t.verticesRows.push(l)}return this.cache[e]=t,t}};return t.drawSphere=function(e,t,r,n){for(var i,a,s=o.getVerticesForRadius(r),l=s.vertices,c=s.normals,u=e.updateGeoGroup(l.length),h=u.vertices,f=u.vertexArray,d=u.colorArray,p=u.faceArray,m=u.lineArray,v=u.normalArray,g=0,y=l.length;g<y;++g){var b=3*(h+g),x=l[g];f[b]=x.x+t.x,f[b+1]=x.y+t.y,f[b+2]=x.z+t.z,d[b]=n.r,d[b+1]=n.g,d[b+2]=n.b}u.vertices+=l.length;var w=s.verticesRows,D=w.length-1;for(a=0;a<D;a++){var C=w[a].length-1;for(i=0;i<C;i++){var A=u.faceidx,$=u.lineidx,S=w[a][i+1]+h,M=3*S,_=w[a][i]+h,z=3*_,T=w[a+1][i]+h,L=3*T,E=w[a+1][i+1]+h,F=3*E,k=c[S-h],I=c[_-h],P=c[T-h],O=c[E-h];Math.abs(l[S-h].y)===r?(v[M]=k.x,v[L]=P.x,v[F]=O.x,v[M+1]=k.y,v[L+1]=P.y,v[F+1]=O.y,v[M+2]=k.z,v[L+2]=P.z,v[F+2]=O.z,p[A]=S,p[A+1]=T,p[A+2]=E,m[$]=S,m[$+1]=T,m[$+2]=S,m[$+3]=E,m[$+4]=T,m[$+5]=E,u.faceidx+=3,u.lineidx+=6):Math.abs(l[T-h].y)===r?(v[M]=k.x,v[z]=I.x,v[L]=P.x,v[M+1]=k.y,v[z+1]=I.y,v[L+1]=P.y,v[M+2]=k.z,v[z+2]=I.z,v[L+2]=P.z,p[A]=S,p[A+1]=_,p[A+2]=T,m[$]=S,m[$+1]=_,m[$+2]=S,m[$+3]=T,m[$+4]=_,m[$+5]=T,u.faceidx+=3,u.lineidx+=6):(v[M]=k.x,v[z]=I.x,v[F]=O.x,v[M+1]=k.y,v[z+1]=I.y,v[F+1]=O.y,v[M+2]=k.z,v[z+2]=I.z,v[F+2]=O.z,v[z]=I.x,v[L]=P.x,v[F]=O.x,v[z+1]=I.y,v[L+1]=P.y,v[F+1]=O.y,v[z+2]=I.z,v[L+2]=P.z,v[F+2]=O.z,p[A]=S,p[A+1]=_,p[A+2]=E,p[A+3]=_,p[A+4]=T,p[A+5]=E,m[$]=S,m[$+1]=_,m[$+2]=S,m[$+3]=E,m[$+4]=_,m[$+5]=T,m[$+6]=T,m[$+7]=E,u.faceidx+=6,u.lineidx+=8)}}},t}();var $3Dmol=$3Dmol||{};$3Dmol.GLModel=function(){var e={line:{}},t=1,r={H:1.2,Li:1.82,LI:1.82,Na:2.27,NA:2.27,K:2.75,C:1.7,N:1.55,O:1.52,F:1.47,P:1.8,S:1.8,CL:1.75,Cl:1.75,BR:1.85,Br:1.85,SE:1.9,Se:1.9,ZN:1.39,Zn:1.39,CU:1.4,Cu:1.4,NI:1.63,Ni:1.63};s.validElements=["H","Li","LI","Na","NA","K","C","N","O","F","P","S","CL","Cl","BR","Br","SE","Se","ZN","Zn","CU","Cu","NI","Ni"],s.validAtomSpecs={resn:{type:"string",valid:!0},x:{type:"number",valid:!1,step:.1},y:{type:"number",valid:!1,step:.1},z:{type:"number",valid:!1,step:.1},color:{type:"color",gui:!0},surfaceColor:{type:"color",gui:!0},elem:{type:"element",gui:!0},hetflag:{type:"boolean",valid:!1},chain:{type:"string",gui:!0},resi:{type:"number",gui:!0},icode:{type:"number",valid:!1,step:.1},rescode:{type:"number",valid:!1,step:.1},serial:{type:"number",valid:!1,step:.1},atom:{type:"string",valid:!1},bonds:{type:"array",valid:!1},ss:{type:"string",valid:!1},singleBonds:{type:"boolean",valid:!1},bondOrder:{type:"array",valid:!1},properties:{type:"properties",valid:!1},b:{type:"number",valid:!1,step:.1},pdbline:{type:"string",valid:!1},clickable:{type:"boolean",valid:!1},callback:{type:"function",valid:!1},invert:{type:"boolean",valid:!1},reflectivity:{type:"number",gui:!0,step:.1},altLoc:{type:"invalid",valid:!1}};s.validAtomSelectionSpecs=function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);return e}(s.validAtomSpecs,{model:{type:"string",valid:!1},bonds:{type:"string",valid:!1},predicate:{type:"string",valid:!1},invert:{type:"string",valid:!1},byres:{type:"string",valid:!1},expand:{type:"string",valid:!1},within:{type:"string",valid:!1},and:{type:"string",valid:!1},or:{type:"string",valid:!1},not:{type:"string",valid:!1}});var n={hidden:{type:"boolean",gui:!0},linewidth:{type:"number",gui:!0,step:.1,default:t},colorscheme:{type:"colorscheme",gui:!0},color:{type:"color",gui:!0}},i={hidden:{type:"boolean",gui:!0},linewidth:{type:"number",gui:!1,step:.1,default:t,min:0},colorscheme:{type:"colorscheme",gui:!0},color:{type:"color",gui:!0},radius:{type:"number",gui:!0,step:.1,default:1,min:.1},scale:{type:"number",gui:!0,step:.1,default:1,min:0}},o={hidden:{type:"boolean",gui:!0},singleBonds:{type:"boolean",gui:!0},colorscheme:{type:"colorscheme",gui:!0},color:{type:"color",gui:!0},radius:{type:"number",gui:!0,step:.1,default:1.5,min:0}};s.validAtomStyleSpecs={line:{validItems:n,gui:!0},cross:{validItems:i,gui:!0},stick:{validItems:{hidden:{type:"boolean",gui:!0},colorscheme:{type:"colorscheme",gui:!0},color:{type:"color",gui:!0},radius:{type:"number",gui:!0,step:.1,default:.25,min:.1},singleBonds:{type:"boolean",gui:!0}},gui:!0},sphere:{validItems:o,gui:!0},cartoon:{validItems:{style:{validItems:["trace","oval","rectangle","parabola","edged"],gui:!0},color:{type:"color",gui:!0},arrows:{type:"boolean",gui:!0},ribbon:{type:"boolean",gui:!0},hidden:{type:"boolean",gui:!0},tubes:{type:"boolean",gui:!0},thickness:{type:"number",gui:!0,step:.1,default:1,min:0},width:{type:"number",gui:!0,step:.1,default:1,min:0},opacity:{type:"number",gui:!0,step:.1,default:1,min:0,max:1}},gui:!0},colorfunc:{validItems:null,valid:!1},clicksphere:{validItems:o}},s.validSurfaceSpecs={opacity:{type:"number",gui:!0,step:.1,default:1,min:0,max:1},colorscheme:{type:"colorscheme",gui:!0},color:{type:"color",gui:!0},voldata:{type:"number",gui:!1},volscheme:{type:"number",gui:!1},map:{type:"number",gui:!1}},s.validLabelResSpecs={font:{type:"string",gui:!0},fontSize:{type:"number",gui:!0,step:1,default:12,min:1},fontColor:{type:"color",gui:!0},fontOpacity:{type:"number",gui:!0,step:.1,default:1,min:0,max:1},borderThickness:{type:"number",gui:!0,step:.1,default:1,min:0},borderColor:{type:"color",gui:!0},borderOpacity:{type:"number",gui:!0,step:.1,default:1,min:0,max:1},backgroundColor:{type:"color",gui:!0},backgroundOpacity:{type:"number",gui:!0,step:.1,default:1,min:0,max:1},position:{type:"array",valid:!1},inFront:{type:"boolean",gui:!0},showBackground:{type:"boolean",gui:!0},fixed:{type:"boolean",gui:!0},alignment:{validItems:["topLeft","topCenter","topRight","centerLeft","center","centerRight","bottomLeft","bottomCenter","bottomRight"],gui:!0},scale:{type:"boolean",gui:!1}};var a=function(e,t){return e&&t?JSON.stringify(e)==JSON.stringify(t):e==t};function s(n,i){var o=[],l=[],c=null,u=null,h=n,f=!1,d=null,p=null,m=null,v={},g=new $3Dmol.Matrix4,y=!0,b=$3Dmol.elementColors.defaultColor,x=(i=i||{}).defaultcolors?i.defaultcolors:$3Dmol.elementColors.defaultColors,w=i.defaultSphereRadius?i.defaultSphereRadius:1.5,D=i.cartoonQuality?i.cartoonQuality:5,C=function(e,t){var n=w;return void 0!==t.radius?n=t.radius:r[e.elem]&&(n=r[e.elem]),void 0!==t.scale&&(n*=t.scale),n},A=function(e,r){if(e.style.cross){var n=e.style.cross;if(!n.hidden){var i=n.linewidth||t;r[i]||(r[i]=new $3Dmol.Geometry);var o=r[i].updateGeoGroup(6),a=C(e,n),s=[[a,0,0],[-a,0,0],[0,a,0],[0,-a,0],[0,0,a],[0,0,-a]],l=e.clickable||e.hoverable;l&&void 0===e.intersectionShape&&(e.intersectionShape={sphere:[],cylinder:[],line:[]});for(var c=$3Dmol.getColorFromStyle(e,n),u=o.vertexArray,h=o.colorArray,f=0;f<6;f++){var d=3*o.vertices;if(o.vertices++,u[d]=e.x+s[f][0],u[d+1]=e.y+s[f][1],u[d+2]=e.z+s[f][2],h[d]=c.r,h[d+1]=c.g,h[d+2]=c.b,l){var p=new $3Dmol.Vector3(s[f][0],s[f][1],s[f][2]);p.multiplyScalar(.1),p.set(p.x+e.x,p.y+e.y,p.z+e.z),e.intersectionShape.line.push(p)}}}}},S=function(e,t,r){var n,i,a,s,l,c=new $3Dmol.Vector3(e.x,e.y,e.z),u=new $3Dmol.Vector3(t.x,t.y,t.z).clone(),h=null;u.sub(c);var f=function(e,t){for(var r=null,n=-1,f=0,d=e.bonds.length;f<d;f++)if(e.bonds[f]!=t.index){i=e.bonds[f],a=o[i],s=new $3Dmol.Vector3(a.x,a.y,a.z),(l=s.clone()).sub(c),(h=l.clone()).cross(u);var p=h.lengthSq();if(p>n&&(r=h,(n=p)>.1))return r}return r};if(1===e.bonds.length)1===t.bonds.length?(h=u.clone(),Math.abs(h.x)>1e-4?h.y+=1:h.x+=1):(n=(r+1)%t.bonds.length,i=t.bonds[n],a=o[i],s=new $3Dmol.Vector3(a.x,a.y,a.z),(l=s.clone()).sub(c),(h=l.clone()).cross(u));else if((h=f(e,t)).lengthSq()<.01){var d=f(t,e);null!=d&&(h=d)}return h.lengthSq()<.01&&(h=u.clone(),Math.abs(h.x)>1e-4?h.y+=1:h.x+=1),h.cross(u),h.normalize(),h},M=function(e,t,r,n,i,o){e[r]=n.x,e[r+1]=n.y,e[r+2]=n.z,t[r]=o.r,t[r+1]=o.g,t[r+2]=o.b,e[r+3]=i.x,e[r+4]=i.y,e[r+5]=i.z,t[r+3]=o.r,t[r+4]=o.g,t[r+5]=o.b},_=function(e,r,n){if(e.style.line){var i=e.style.line;if(!i.hidden){var o,a,s,l,c=i.linewidth||t;n[c]||(n[c]=new $3Dmol.Geometry);for(var u=n[c].updateGeoGroup(6*e.bonds.length),h=u.vertexArray,f=u.colorArray,d=0;d<e.bonds.length;d++){var p=r[e.bonds[d]];if(p.style.line&&!(e.serial>=p.serial)){var m=new $3Dmol.Vector3(e.x,e.y,e.z),v=new $3Dmol.Vector3(p.x,p.y,p.z),g=m.clone().add(v).multiplyScalar(.5),y=!1,b=e.clickable||e.hoverable,x=p.clickable||p.hoverable;(b||x)&&(b&&(void 0===e.intersectionShape&&(e.intersectionShape={sphere:[],cylinder:[],line:[],triangle:[]}),e.intersectionShape.line.push(m),e.intersectionShape.line.push(g)),x&&(void 0===p.intersectionShape&&(p.intersectionShape={sphere:[],cylinder:[],line:[],triangle:[]}),p.intersectionShape.line.push(g),p.intersectionShape.line.push(v)));var w=$3Dmol.getColorFromStyle(e,e.style.line),D=$3Dmol.getColorFromStyle(p,p.style.line);if(e.bondStyles&&e.bondStyles[d]){var C=e.bondStyles[d];if(!C.iswire)continue;C.singleBond&&(y=!0),void 0!==C.color1&&(w=$3Dmol.CC.color(C.color1)),void 0!==C.color2&&(D=$3Dmol.CC.color(C.color2))}var A,$,_=3*u.vertices;if(e.bondOrder[d]>1&&e.bondOrder[d]<4&&!y){var z=S(e,p,d),T=v.clone();T.sub(m),2==e.bondOrder[d]?(z.multiplyScalar(.1),(o=m.clone()).add(z),(a=m.clone()).sub(z),(s=o.clone()).add(T),(l=a.clone()).add(T),w==D?(u.vertices+=4,M(h,f,_,o,s,w),M(h,f,_+6,a,l,w)):(u.vertices+=8,T.multiplyScalar(.5),(A=o.clone()).add(T),($=a.clone()).add(T),M(h,f,_,o,A,w),M(h,f,_+6,A,s,D),M(h,f,_+12,a,$,w),M(h,f,_+18,$,l,D))):3==e.bondOrder[d]&&(z.multiplyScalar(.1),(o=m.clone()).add(z),(a=m.clone()).sub(z),(s=o.clone()).add(T),(l=a.clone()).add(T),w==D?(u.vertices+=6,M(h,f,_,m,v,w),M(h,f,_+6,o,s,w),M(h,f,_+12,a,l,w)):(u.vertices+=12,T.multiplyScalar(.5),(A=o.clone()).add(T),($=a.clone()).add(T),M(h,f,_,m,g,w),M(h,f,_+6,g,v,D),M(h,f,_+12,o,A,w),M(h,f,_+18,A,s,D),M(h,f,_+24,a,$,w),M(h,f,_+30,$,l,D)))}else w==D?(u.vertices+=2,M(h,f,_,m,v,w)):(u.vertices+=4,M(h,f,_,m,g,w),M(h,f,_+6,g,v,D))}}}}},z=function(e,t){if(e.style.sphere){var r=e.style.sphere;if(!r.hidden){var n=$3Dmol.getColorFromStyle(e,r),i=C(e,r);if((!0===e.clickable||e.hoverable)&&void 0!==e.intersectionShape){var o=new $3Dmol.Vector3(e.x,e.y,e.z);e.intersectionShape.sphere.push(new $3Dmol.Sphere(o,i))}$3Dmol.GLDraw.drawSphere(t,e,i,n)}}},T=function(e){if(e.style.clicksphere){var t=e.style.clicksphere;if(!t.hidden){var r=C(e,t);if((!0===e.clickable||e.hoverable)&&void 0!==e.intersectionShape){var n=new $3Dmol.Vector3(e.x,e.y,e.z);e.intersectionShape.sphere.push(new $3Dmol.Sphere(n,r))}}}},L=function(e,t){if(e.style.sphere){var r=e.style.sphere;if(!r.hidden){var n=C(e,r),i=$3Dmol.getColorFromStyle(e,r),o=t.updateGeoGroup(1),a=o.vertices,s=3*a,l=o.vertexArray,c=o.colorArray,u=o.radiusArray;if(l[s]=e.x,l[s+1]=e.y,l[s+2]=e.z,c[s]=i.r,c[s+1]=i.g,c[s+2]=i.b,u[a]=n,(!0===e.clickable||e.hoverable)&&void 0!==e.intersectionShape){var h=new $3Dmol.Vector3(e.x,e.y,e.z);e.intersectionShape.sphere.push(new $3Dmol.Sphere(h,n))}o.vertices+=1}}},E=function(e,t,r,n){var i,o=e.updateGeoGroup(4),a=o.vertices,s=3*a,l=o.vertexArray,c=o.colorArray;for(i=0;i<4;i++)l[s+3*i]=t.x,l[s+3*i+1]=t.y,l[s+3*i+2]=t.z;var u=o.normalArray;for(i=0;i<4;i++)c[s+3*i]=n.r,c[s+3*i+1]=n.g,c[s+3*i+2]=n.b;u[s+0]=-r,u[s+1]=r,u[s+2]=0,u[s+3]=-r,u[s+4]=-r,u[s+5]=0,u[s+6]=r,u[s+7]=-r,u[s+8]=0,u[s+9]=r,u[s+10]=r,u[s+11]=0,o.vertices+=4;var h=o.faceArray,f=o.faceidx;h[f+0]=a,h[f+1]=a+1,h[f+2]=a+2,h[f+3]=a+2,h[f+4]=a+3,h[f+5]=a,o.faceidx+=6},F=function(e,t){if(e.style.sphere){var r=e.style.sphere;if(!r.hidden){var n=C(e,r),i=$3Dmol.getColorFromStyle(e,r);if((!0===e.clickable||e.hoverable)&&void 0!==e.intersectionShape){var o=new $3Dmol.Vector3(e.x,e.y,e.z);e.intersectionShape.sphere.push(new $3Dmol.Sphere(o,n))}E(t,e,n,i)}}},k=function(e,t,r,n,i){for(var o,a=e.updateGeoGroup(4),s=a.vertices,l=3*s,c=a.vertexArray,u=a.colorArray,h=a.radiusArray,f=a.normalArray,d=i.r,p=i.g,m=i.b,v=l,g=0;g<4;g++)c[v]=t.x,f[v]=r.x,u[v]=d,c[++v]=t.y,f[v]=r.y,u[v]=p,c[++v]=t.z,f[v]=r.z,u[v]=g<2?m:(o=void 0,0==(o=-m)&&(o=-1e-4),o),v++;a.vertices+=4,h[s]=-n,h[s+1]=n,h[s+2]=-n,h[s+3]=n;var y=a.faceArray,b=a.faceidx;y[b+0]=s,y[b+1]=s+1,y[b+2]=s+2,y[b+3]=s+2,y[b+4]=s+3,y[b+5]=s,a.faceidx+=6},I=function(e,t,r){if(e.style.stick){var n=e.style.stick;if(!n.hidden){var i,o,a,s,l,c,u,h,f,d,p,m,v,g,y=n.radius||.25,b=y,x=n.singleBonds||!1,w=0,D=0,C=$3Dmol.getColorFromStyle(e,n);!e.capDrawn&&e.bonds.length<4&&(w=2);var A=$3Dmol.GLDraw.drawCylinder;for(r.imposter&&(A=k),a=0;a<e.bonds.length;a++){var $=t[e.bonds[a]];if(e.serial<$.serial){var M=$.style;if(!M.stick||M.stick.hidden)continue;var _=$3Dmol.getColorFromStyle($,M.stick);if(b=y,s=x,e.bondStyles&&e.bondStyles[a]){if((l=e.bondStyles[a]).iswire)continue;l.radius&&(b=l.radius),l.singleBond&&(s=!0),void 0!==l.color1&&(C=$3Dmol.CC.color(l.color1)),void 0!==l.color2&&(_=$3Dmol.CC.color(l.color2))}var z=new $3Dmol.Vector3(e.x,e.y,e.z),T=new $3Dmol.Vector3($.x,$.y,$.z);if(1===e.bondOrder[a]||s){if(!$.capDrawn&&$.bonds.length<4&&(D=2),C!=_?(A(r,z,m=(new $3Dmol.Vector3).addVectors(z,T).multiplyScalar(.5),b,C,w,0),A(r,m,T,b,_,0,D)):A(r,z,T,b,C,w,D),i=e.clickable||e.hoverable,o=$.clickable||$.hoverable,i||o){if(m||(m=(new $3Dmol.Vector3).addVectors(z,T).multiplyScalar(.5)),i){var L=new $3Dmol.Cylinder(z,m,b),F=new $3Dmol.Sphere(z,b);e.intersectionShape.cylinder.push(L),e.intersectionShape.sphere.push(F)}if(o){var I=new $3Dmol.Cylinder(T,m,b),P=new $3Dmol.Sphere(T,b);$.intersectionShape.cylinder.push(I),$.intersectionShape.sphere.push(P)}}}else if(e.bondOrder[a]>1){var O=0,R=0;b!=y&&(O=2,R=2);var N,B,V,U,j,G=T.clone(),q=null;G.sub(z),q=S(e,$,a),2==e.bondOrder[a]?(N=b/2.5,(q=S(e,$,a)).multiplyScalar(1.5*N),(B=z.clone()).add(q),(V=z.clone()).sub(q),(U=B.clone()).add(G),(j=V.clone()).add(G),C!=_?(m=(new $3Dmol.Vector3).addVectors(B,U).multiplyScalar(.5),v=(new $3Dmol.Vector3).addVectors(V,j).multiplyScalar(.5),A(r,B,m,N,C,O,0),A(r,m,U,N,_,0,R),A(r,V,v,N,C,O,0),A(r,v,j,N,_,0,R)):(A(r,B,U,N,C,O,R),A(r,V,j,N,C,O,R)),i=e.clickable||e.hoverable,o=$.clickable||$.hoverable,(i||o)&&(m||(m=(new $3Dmol.Vector3).addVectors(B,U).multiplyScalar(.5)),v||(v=(new $3Dmol.Vector3).addVectors(V,j).multiplyScalar(.5)),i&&(c=new $3Dmol.Cylinder(B,m,N),u=new $3Dmol.Cylinder(V,v,N),e.intersectionShape.cylinder.push(c),e.intersectionShape.cylinder.push(u)),o&&(f=new $3Dmol.Cylinder(U,m,N),d=new $3Dmol.Cylinder(j,v,N),$.intersectionShape.cylinder.push(f),$.intersectionShape.cylinder.push(d)))):3==e.bondOrder[a]&&(N=b/4,q.cross(G),q.normalize(),q.multiplyScalar(3*N),(B=z.clone()).add(q),(V=z.clone()).sub(q),(U=B.clone()).add(G),(j=V.clone()).add(G),C!=_?(m=(new $3Dmol.Vector3).addVectors(B,U).multiplyScalar(.5),v=(new $3Dmol.Vector3).addVectors(V,j).multiplyScalar(.5),g=(new $3Dmol.Vector3).addVectors(z,T).multiplyScalar(.5),A(r,B,m,N,C,O,0),A(r,m,U,N,_,0,R),A(r,z,g,N,C,w,0),A(r,g,T,N,_,0,D),A(r,V,v,N,C,O,0),A(r,v,j,N,_,0,R)):(A(r,B,U,N,C,O,R),A(r,z,T,N,C,w,D),A(r,V,j,N,C,O,R)),i=e.clickable||e.hoverable,o=$.clickable||$.hoverable,(i||o)&&(m||(m=(new $3Dmol.Vector3).addVectors(B,U).multiplyScalar(.5)),v||(v=(new $3Dmol.Vector3).addVectors(V,j).multiplyScalar(.5)),g||(g=(new $3Dmol.Vector3).addVectors(z,T).multiplyScalar(.5)),i&&(c=new $3Dmol.Cylinder(B.clone(),m.clone(),N),u=new $3Dmol.Cylinder(V.clone(),v.clone(),N),h=new $3Dmol.Cylinder(z.clone(),g.clone(),N),e.intersectionShape.cylinder.push(c),e.intersectionShape.cylinder.push(u),e.intersectionShape.cylinder.push(h)),o&&(f=new $3Dmol.Cylinder(U.clone(),m.clone(),N),d=new $3Dmol.Cylinder(j.clone(),v.clone(),N),p=new $3Dmol.Cylinder(T.clone(),g.clone(),N),$.intersectionShape.cylinder.push(f),$.intersectionShape.cylinder.push(d),$.intersectionShape.cylinder.push(p))))}}}var H=!1,W=0,Y=!1;for(a=0;a<e.bonds.length;a++)s=x,e.bondStyles&&e.bondStyles[a]&&((l=e.bondStyles[a]).singleBond&&(s=!0),l.radius&&l.radius!=y&&(Y=!0)),(s||1==e.bondOrder[a])&&W++;Y?W>0&&(H=!0):0==W&&e.bonds.length>0&&(H=!0),H&&(b=y,r.imposter?E(r.sphereGeometry,e,b,C):$3Dmol.GLDraw.drawSphere(r,e,b,C))}}},P=function(e,t){t=t||{};var r,n,i,o,a=new $3Dmol.Object3D,s=[],l={},c={},u=z,h=null,f=null;t.supportsImposters?(u=F,(h=new $3Dmol.Geometry(!0)).imposter=!0,(f=new $3Dmol.Geometry(!0,!0)).imposter=!0,f.sphereGeometry=new $3Dmol.Geometry(!0),f.sphereGeometry.imposter=!0,f.drawnCaps={}):t.supportsAIA?(u=L,(h=new $3Dmol.Geometry(!1,!0,!0)).instanced=!0,f=new $3Dmol.Geometry(!0)):(h=new $3Dmol.Geometry(!0),f=new $3Dmol.Geometry(!0));var d,p={},m=[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY];for(r=0,i=e.length;r<i;r++){var g=e[r];if(g&&g.style){for(n in(g.clickable||g.hoverable)&&void 0===g.intersectionShape&&(g.intersectionShape={sphere:[],cylinder:[],line:[],triangle:[]}),o={line:void 0,cross:void 0,stick:void 0,sphere:void 0})g.style[n]?g.style[n].opacity?o[n]=parseFloat(g.style[n].opacity):o[n]=1:o[n]=void 0,p[n]?null!=o[n]&&p[n]!=o[n]&&(console.log("Warning: "+n+" opacity is ambiguous"),p[n]=1):p[n]=o[n];u(g,h),T(g),A(g,c),_(g,e,l),I(g,e,f),void 0===g.style.cartoon||g.style.cartoon.hidden||("spectrum"!==g.style.cartoon.color||"number"!=typeof g.resi||g.hetflag||(g.resi<m[0]&&(m[0]=g.resi),g.resi>m[1]&&(m[1]=g.resi)),s.push(g))}}if(s.length>0&&$3Dmol.drawCartoon(a,s,m,D),h&&h.vertices>0){h.initTypedArrays();var b=null,x=null;h.imposter?b=new $3Dmol.SphereImposterMaterial({ambient:0,vertexColors:!0,reflectivity:0}):h.instanced?(x=new $3Dmol.Geometry(!0),$3Dmol.GLDraw.drawSphere(x,{x:0,y:0,z:0},1,new $3Dmol.Color(.5,.5,.5)),x.initTypedArrays(),b=new $3Dmol.InstancedMaterial({sphereMaterial:new $3Dmol.MeshLambertMaterial({ambient:0,vertexColors:!0,reflectivity:0}),sphere:x})):b=new $3Dmol.MeshLambertMaterial({ambient:0,vertexColors:!0,reflectivity:0}),p.sphere<1&&p.sphere>=0&&(b.transparent=!0,b.opacity=p.sphere),x=new $3Dmol.Mesh(h,b),a.add(x)}if(f.vertices>0){var w=null,C=null,$=f.sphereGeometry;$&&void 0!==$.vertices&&0!=$.vertices||($=null),f.initTypedArrays(),$&&$.initTypedArrays();var S={ambient:0,vertexColors:!0,reflectivity:0};f.imposter?(w=new $3Dmol.StickImposterMaterial(S),C=new $3Dmol.SphereImposterMaterial(S)):(w=new $3Dmol.MeshLambertMaterial(S),C=new $3Dmol.MeshLambertMaterial(S),w.wireframe&&(f.setUpWireframe(),$&&$.setUpWireframe())),p.stick<1&&p.stick>=0&&(w.transparent=!0,w.opacity=p.stick,C.transparent=!0,C.opacity=p.stick);var M=new $3Dmol.Mesh(f,w);if(a.add(M),$){var E=new $3Dmol.Mesh($,C);a.add(E)}}for(r in l)if(l.hasOwnProperty(r)){d=r;var k=new $3Dmol.LineBasicMaterial({linewidth:d,vertexColors:!0});p.line<1&&p.line>=0&&(k.transparent=!0,k.opacity=p.line),l[r].initTypedArrays();var P=new $3Dmol.Line(l[r],k,$3Dmol.LinePieces);a.add(P)}for(r in c)if(c.hasOwnProperty(r)){d=r;var O=new $3Dmol.LineBasicMaterial({linewidth:d,vertexColors:!0});p.cross<1&&p.cross>=0&&(O.transparent=!0,O.opacity=p.cross),c[r].initTypedArrays();var R=new $3Dmol.Line(c[r],O,$3Dmol.LinePieces);a.add(R)}if(y&&v.symmetries&&v.symmetries.length>0){var N,B=new $3Dmol.Object3D;for(N=0;N<v.symmetries.length;N++){var V=new $3Dmol.Object3D;(V=a.clone()).matrix.copy(v.symmetries[N]),V.matrixAutoUpdate=!1,B.add(V)}return B}return a};this.getCrystData=function(){return v.cryst?v.cryst:null},this.getSymmetries=function(){return void 0===v.symmetries&&(v.symmetries=[g]),v.symmetries},this.setSymmetries=function(e){v.symmetries=void 0===e?[g]:e},this.getID=function(){return h},this.getNumFrames=function(){return null!=l.numFrames?l.numFrames:l.length};var O=function(e,t,r,n){var i=t-e;return i<-r?t+n:i>r?t-n:t};this.setFrame=function(e){var t=this.getNumFrames();return new Promise(function(r,n){if(0==t&&r(),(e<0||e>=t)&&(e=t-1),null!=l.url){var i=l.url;$3Dmol.getbin(i+"/traj/frame/"+e+"/"+l.path,null,"POST").then(function(e){for(var t=new Float32Array(e,44),n=0,i=0;i<o.length;i++)o[i].x=t[n++],o[i].y=t[n++],o[i].z=t[n++];c&&u&&function(){if(c&&u)for(var e=c[0],t=c[1],r=c[2],n=.9*e,i=.9*t,a=.9*r,s=0;s<u.length;s++)for(var l=u[s],h=1;h<l.length;h++){var f=o[l[h][0]],d=o[l[h][1]];f.x=O(d.x,f.x,n,e),f.y=O(d.y,f.y,i,t),f.z=O(d.z,f.z,a,r)}}(),r()}).catch(n)}else o=l[e],r();d=null})},this.addFrame=function(e){l.push(e)},this.vibrate=function(e,t,r,n,i){t=t||1;var a=0,s=e=e||10;r&&(a=-e,s=e),a<s&&(l=[]);for(var c=a;c<s;c++){var u=[],h=l.length;if(0!=c||i){for(var f=0;f<o.length;f++){var d=$3Dmol.getAtomProperty(o[f],"dx"),p=$3Dmol.getAtomProperty(o[f],"dy"),m=$3Dmol.getAtomProperty(o[f],"dz"),v=new $3Dmol.Vector3(d,p,m),g=new $3Dmol.Vector3(o[f].x,o[f].y,o[f].z),y=c*t/e;v.multiplyScalar(y),g.add(v);var b={};for(var x in o[f])b[x]=o[f][x];if(b.x=g.x,b.y=g.y,b.z=g.z,u.push(b),n&&i){var w=$.extend({},i),D=new $3Dmol.Vector3(d,p,m);if(D.multiplyScalar(t),D.add(g),w.start=g,w.end=D,w.frame=h,!w.color){var C=b.style.sphere;C||(C=b.style.stick),C||(C=b.style.line),w.color=$3Dmol.getColorFromStyle(b,C)}n.addArrow(w)}}l.push(u)}else l.push(o)}},this.setAtomDefaults=function(t){for(var r=0;r<t.length;r++){var n=t[r];n&&(n.style=n.style||$.extend(!0,{},e),n.color=n.color||x[n.elem]||b,n.model=h,(n.clickable||n.hoverable)&&(n.intersectionShape={sphere:[],cylinder:[],line:[],triangle:[]}))}},this.addMolData=function(e,t,r){r=r||{};var n=$3Dmol.GLModel.parseMolData(e,t,r);y=!r.duplicateAssemblyAtoms;var i=n.modelData;if(i&&(v=Array.isArray(i)?i[0]:i),c=n.box?n.box:null,0==l.length){for(let e=0;e<n.length;e++)0!=n[e].length&&l.push(n[e]);l[0]&&(o=l[0])}else if(r.frames)for(let e=0;e<n.length;e++)l.push(n[e]);else for(var a=0;a<n.length;a++)this.addAtoms(n[a]);for(let e=0;e<l.length;e++)this.setAtomDefaults(l[e],h);r.vibrate&&r.vibrate.frames&&r.vibrate.amplitude&&this.vibrate(r.vibrate.frames,r.vibrate.amplitude),r.style&&this.setStyle({},r.style)},this.setDontDuplicateAtoms=function(e){y=e},this.setModelData=function(e){v=e};var R=function(e,t){if(e==t)return!0;if("string"==typeof t&&"number"==typeof e){var r=t.match(/(-?\d+)\s*-\s*(-?\d+)/);if(r){var n=parseInt(r[1]),i=parseInt(r[2]);if(r&&e>=n&&e<=i)return!0}}return!1};this.atomIsSelected=function(e,t){if(void 0===t)return!0;var r=!!t.invert,n=!0;for(var i in t)if("and"==i||"or"==i||"not"==i){if("not"==i){if(this.atomIsSelected(e,t[i])){n=!1;break}}else if("and"==i){for(var o=t[i],a=0;a<o.length;a++)if(!this.atomIsSelected(e,o[a])){n=!1;break}}else if("or"==i){var s=t[i],l=!0;for(let t=0;t<s.length;t++){if(this.atomIsSelected(e,s[t])){l=!0;break}l=!1}n=l}}else if("predicate"===i){if(!t.predicate(e)){n=!1;break}}else if("properties"==i&&e[i])for(var c in t.properties){if(void 0===e.properties[c]){n=!1;break}if(e.properties[c]!=t.properties[c]){n=!1;break}}else if(t.hasOwnProperty(i)&&"props"!=i&&"invert"!=i&&"model"!=i&&"byres"!=i&&"expand"!=i&&"within"!=i&&"and"!=i&&"or"!=i&&"not"!=i){if(void 0===e[i]){n=!1;break}var u=!1;if("bonds"===i){if(t[i]!=e.bonds.length){n=!1;break}}else if($.isArray(t[i])){var h=t[i],f=e[i];for(let e=0;e<h.length;e++)if(R(f,h[e])){u=!0;break}if(!u){n=!1;break}}else{let r=t[i];if(!R(e[i],r)){n=!1;break}}}return r?!n:n};var N=function(e,t){var r=t.x-e.x,n=t.y-e.y,i=t.z-e.z;return Math.pow(r,2)+Math.pow(n,2)+Math.pow(i,2)};this.selectedAtoms=function(e,t){var r=[];e=e||{},t||(t=o);for(var n=t.length,i=0;i<n;i++){var a=t[i];a&&this.atomIsSelected(a,e)&&r.push(a)}if(e.hasOwnProperty("expand")){var s=function(e,t){if(t<=0)return e;for(var r=$3Dmol.getExtent(e),n=[[],[],[]],i=0;i<3;i++)n[0][i]=r[0][i]-t,n[1][i]=r[1][i]+t,n[2][i]=r[2][i];var a=[];for(let e=0;e<o.length;e++){var s=o[e].x,l=o[e].y,c=o[e].z;s>=n[0][0]&&s<=n[1][0]&&l>=n[0][1]&&l<=n[1][1]&&c>=n[0][2]&&c<=n[1][2]&&(s>=r[0][0]&&s<=r[1][0]&&l>=r[0][1]&&l<=r[1][1]&&c>=r[0][2]&&c<=r[1][2]||a.push(o[e]))}return a}(r,parseFloat(e.expand)),l=r.length;for(let t=0;t<s.length;t++)for(let n=0;n<l;n++){var c=N(s[t],r[n]);c<Math.pow(e.expand,2)&&c>0&&r.push(s[t])}}if(e.hasOwnProperty("within")&&e.within.hasOwnProperty("sel")&&e.within.hasOwnProperty("distance")){var u=this.selectedAtoms(e.within.sel,o),h={};for(let t=0;t<u.length;t++)for(let n=0;n<r.length;n++){let i=N(u[t],r[n]);i<Math.pow(parseFloat(e.within.distance),2)&&i>0&&(h[n]=1)}var f=[];if(e.within.invert)for(let e=0;e<r.length;e++)h[e]||f.push(r[e]);else for(let e in h)f.push(r[e]);r=f}if(e.hasOwnProperty("byres")){var d={},p=[],m=[];for(let e=0;e<r.length;e++){let t=r[e];var v=t.chain,g=t.resi;if(void 0===d[v]&&(d[v]={}),t.hasOwnProperty("resi")&&void 0===d[v][g])for(d[v][g]=!0,m.push(t);m.length>0;)if(v=(t=m.pop()).chain,g=t.resi,void 0===p[t.index]){p[t.index]=!0;for(var y=0;y<t.bonds.length;y++){var b=o[t.bonds[y]];void 0===p[b.index]&&b.hasOwnProperty("resi")&&b.chain==v&&b.resi==g&&(m.push(b),r.push(b))}}}}return r},this.addAtoms=function(t){d=null;var r,n=o.length,i=[];for(r=0;r<t.length;r++)void 0===t[r].index&&(t[r].index=r),void 0===t[r].serial&&(t[r].serial=r),i[t[r].index]=n+r;for(r=0;r<t.length;r++){var a=t[r],s=i[a.index],l=$.extend(!1,{},a);l.index=s,l.bonds=[],l.bondOrder=[],l.model=h,l.style=l.style||$.extend(!0,{},e),void 0===l.color&&(l.color=x[l.elem]||b);for(var c=a.bonds?a.bonds.length:0,u=0;u<c;u++){var f=i[a.bonds[u]];void 0!==f&&(l.bonds.push(f),l.bondOrder.push(a.bondOrder?a.bondOrder[u]:1))}o.push(l)}},this.removeAtoms=function(e){d=null;var t,r=[];for(t=0;t<e.length;t++)r[e[t].index]=!0;var n=[];for(t=0;t<o.length;t++){var i=o[t];r[i.index]||n.push(i)}o=[],this.addAtoms(n)},this.setStyle=function(e,t,r){var n;for(n in void 0===t&&void 0===r&&(t=e,e={}),e)s.validAtomSelectionSpecs.hasOwnProperty(n)||console.log("Unknown selector "+n);for(n in t)s.validAtomStyleSpecs.hasOwnProperty(n)||console.log("Unknown style "+n);var i=!1,a=this,c=function(n){var o=a.selectedAtoms(e,n);for(let e=0;e<n.length;e++)n[e]&&(n[e].capDrawn=!1);for(let e=0;e<o.length;e++){i=!0,(o[e].clickable||o[e].hoverable)&&(o[e].intersectionShape={sphere:[],cylinder:[],line:[],triangle:[]}),r||(o[e].style={});for(let r in t)t.hasOwnProperty(r)&&(o[e].style[r]=o[e].style[r]||{},Object.assign(o[e].style[r],t[r]))}};c(o);for(var u=0;u<l.length;u++)l[u]!==o&&c(l[u]);i&&(d=null)},this.setClickable=function(e,t,r){var n;for(n in e)s.validAtomSelectionSpecs.hasOwnProperty(n)||console.log("Unknown selector "+n);if(t=!!t,r&&"function"!=typeof r)console.log("Callback is not a function");else{var i,a=this.selectedAtoms(e,o),l=a.length;for(i=0;i<l;i++)a[i].intersectionShape={sphere:[],cylinder:[],line:[],triangle:[]},a[i].clickable=t,r&&(a[i].callback=r);l>0&&(d=null)}},this.setHoverable=function(e,t,r,n){var i;for(i in e)s.validAtomSelectionSpecs.hasOwnProperty(i)||console.log("Unknown selector "+i);if(t=!!t,r&&"function"!=typeof r)console.log("Hover_callback is not a function");else if(n&&"function"!=typeof n)console.log("Unhover_callback is not a function");else{var a,l=this.selectedAtoms(e,o),c=l.length;for(a=0;a<c;a++)l[a].intersectionShape={sphere:[],cylinder:[],line:[],triangle:[]},l[a].hoverable=t,r&&(l[a].hover_callback=r),n&&(l[a].unhover_callback=n);c>0&&(d=null)}},this.setColorByElement=function(e,t){if(null===d||!a(t,m)){m=t;var r=this.selectedAtoms(e,r);r.length>0&&(d=null);for(var n=0;n<r.length;n++){var i=r[n];void 0!==t[i.elem]&&(i.color=t[i.elem])}}},this.setColorByProperty=function(e,t,r,n){var i,o,a=this.selectedAtoms(e,a);for(m=null,a.length>0&&(d=null),void 0!==$3Dmol.Gradient.builtinGradients[r]&&(r=new $3Dmol.Gradient.builtinGradients[r]),n||(n=r.range()),n||(n=$3Dmol.getPropertyRange(a,t)),i=0;i<a.length;i++){o=a[i],null!=$3Dmol.getAtomProperty(o,t)&&(o.color=r.valueToHex(parseFloat(o.properties[t]),n))}},this.setColorByFunction=function(e,t){var r=this.selectedAtoms(e,r);if("function"==typeof t){m=null,r.length>0&&(d=null);for(let e=0;e<r.length;e++){let n=r[e];n.color=t(n)}}},this.toCDObject=function(e){var t={a:[],b:[]};e&&(t.s=[]);for(var r=0;r<o.length;r++){var n={},i=o[r];if(n.x=i.x,n.y=i.y,n.z=i.z,"C"!=i.elem&&(n.l=i.elem),e){for(var a=0;a<t.s.length&&JSON.stringify(i.style)!==JSON.stringify(t.s[a]);)a++;a===t.s.length&&t.s.push(i.style),0!==a&&(n.s=a)}t.a.push(n);for(var s=0;s<i.bonds.length;s++){var l=r,c=i.bonds[s];if(!(l>=c)){var u={b:l,e:c},h=i.bondOrder[s];1!=h&&(u.o=h),t.b.push(u)}}}return t},this.globj=function(e,t){(null===d||t.regen)&&(d=P(o,t),p&&(e.remove(p),p=null),p=d.clone(),f&&(p.setVisible(!1),d.setVisible(!1)),e.add(p))},this.exportVRML=function(){return P(o,{supportsImposters:!1,supportsAIA:!1}).vrml()},this.removegl=function(e){p&&(void 0!==p.geometry&&p.geometry.dispose(),void 0!==p.material&&p.material.dispose(),e.remove(p),p=null),d=null},this.hide=function(){f=!0,p&&p.setVisible(!1),d&&d.setVisible(!1)},this.show=function(){f=!1,p&&p.setVisible(!0),d&&d.setVisible(!0)},this.addPropertyLabels=function(e,t,r,n){for(var i=this.selectedAtoms(t,i),o=$.extend(!0,{},n),a=0;a<i.length;a++){var s=i[a],l=null;void 0!==s[e]?l=String(s[e]):(s.properties[e],l=String(s.properties[e])),null!=l&&(o.position=s,r.addLabel(l,o))}},this.addResLabels=function(e,t,r,n){var i=[],a=function(n,o){for(var a=n.selectedAtoms(e,a),s={},l=0;l<a.length;l++){var c=a[l],u=c.chain,h=c.resn+""+c.resi;s[u]||(s[u]={}),s[u][h]||(s[u][h]=[]),s[u][h].push(c)}var f=$.extend(!0,{},r);for(let e in s)if(s.hasOwnProperty(e)){var d=s[e];for(let e in d)if(d.hasOwnProperty(e)){let r=d[e],n=new $3Dmol.Vector3(0,0,0);for(let e=0;e<r.length;e++){let t=r[e];n.x+=t.x,n.y+=t.y,n.z+=t.z}n.divideScalar(r.length),f.position=n,f.frame=o;let a=t.addLabel(e,f,void 0,!0);i.push(a)}}};if(n){var s=this.getNumFrames();let e=o;for(let e=0;e<s;e++)l[e]&&(o=l[e],a(this,e));o=e}else a(this);return i};this.setCoordinatesFromURL=function(e,t){l=[];var r=this;return c&&function(){u=[];var e=new Int8Array(o.length);e.fill(0);for(var t=function(r,n,i){i.push([r,n]);var a=o[r];e[r]=1;for(var s=0;s<a.bonds.length;s++){var l=a.bonds[s];o[l]&&!e[l]&&t(l,r,i)}},r=0;r<o.length;r++)if(o[r]&&!e[r]){var n=[];t(r,-1,n),u.push(n)}}(),new Promise(function(n,i){e.startsWith("http://")||(e="http://"+e),$.get(e+"/traj/numframes/"+t,function(a){isNaN(parseInt(a))||(l.push(o),l.numFrames=a,l.url=e,l.path=t,r.setFrame(0).then(function(){n()}).catch(i))})})},this.setCoordinates=function(e,t){if(!e)return[];if(/\.gz$/.test(t=t||"")){t=t.replace(/\.gz$/,"");try{e=pako.inflate(e,{to:"string"})}catch(e){console.log(e)}}if({mdcrd:"",inpcrd:"",pdb:"",netcdf:""}.hasOwnProperty(t)){l=[];for(var r=o.length,n=s.parseCrd(e,t),i=0;i<n.length;){for(var a=[],c=0;c<r;c++){var u={};for(var h in o[c])u[h]=o[c][h];a[c]=u,a[c].x=n[i++],a[c].y=n[i++],a[c].z=n[i++]}l.push(a)}return o=l[0],l}return[]},this.addAtomSpecs=function(e){for(var t=0;t<e.length;t++)s.validAtomSelectionSpecs.hasOwnProperty(e[t])&&s.validAtomSelectionSpecs.push(e[t])}}return s.parseCrd=function(e,t){var r=[],n=0;if("pdb"==t)for(var i=e.indexOf("\nATOM");-1!=i;){for(;"\nATOM"==e.slice(i,i+5)||"\nHETATM"==e.slice(i,i+7);)r[n++]=parseFloat(e.slice(i+31,i+39)),r[n++]=parseFloat(e.slice(i+39,i+47)),r[n++]=parseFloat(e.slice(i+47,i+55)),i=e.indexOf("\n",i+54),"\nTER"==e.slice(i,i+4)&&(i=e.indexOf("\n",i+5));i=e.indexOf("\nATOM",i)}else if("netcdf"==t){var o=new netcdfjs(e);r=[].concat.apply([],o.getDataVariable("coordinates"))}else{let n=e.indexOf("\n");"inpcrd"==t&&(n=e.indexOf("\n",n+1)),r=(e=e.slice(n+1)).match(/\S+/g).map(parseFloat)}return r},s.parseMolData=function(e,t,r){if(!e)return[];if(/\.gz$/.test(t=t||"")){t=t.replace(/\.gz$/,"");try{e=pako.inflate(e,{to:"string"})}catch(e){console.log(e)}}return void 0===$3Dmol.Parsers[t]&&(t=t.split(".").pop(),void 0===$3Dmol.Parsers[t]&&(console.log("Unknown format: "+t),t=e instanceof Uint8Array?"mmtf":e.match(/^@<TRIPOS>MOLECULE/gm)?"mol2":e.match(/^HETATM/gm)||e.match(/^ATOM/gm)?"pdb":e.match(/ITEM: TIMESTEP/gm)?"lammpstrj":e.match(/^.*\n.*\n.\s*(\d+)\s+(\d+)/gm)?"sdf":e.match(/^%VERSION\s+\VERSION_STAMP/gm)?"prmtop":"xyz",console.log("Best guess: "+t))),(0,$3Dmol.Parsers[t])(e,r)},s}(),$3Dmol.GLShape=function(){var e=2,t=function(e){var t=e.updateGeoGroup(0);t.vertices>0&&t.truncateArrayBuffers(!0,!0)},r=function(e,t){var r,n,i;for(var o in t=t||$3Dmol.CC.color(t),e.colorsNeedUpdate=!0,t.constructor!==Array&&(r=t.r,n=t.g,i=t.b),e.geometryGroups)for(var a=e.geometryGroups[o],s=a.colorArray,l=0,c=a.vertices;l<c;++l){if(t.constructor===Array){var u=t[l];r=u.r,n=u.g,i=u.b}s[3*l]=r,s[3*l+1]=n,s[3*l+2]=i}},n=function(e,t,r){var n=r.start,i=r.end,o=r.radius,a=r.radiusRatio,s=r.mid;if(n&&i){var l=t.updateGeoGroup(51),c=i.clone();c.sub(n).multiplyScalar(s);var u=n.clone().add(c),h=c.clone().negate();e.intersectionShape.cylinder.push(new $3Dmol.Cylinder(n.clone(),u.clone(),o)),e.intersectionShape.sphere.push(new $3Dmol.Sphere(n.clone(),o));var f=[];f[0]=c.clone(),Math.abs(f[0].x)>1e-4?f[0].y+=1:f[0].x+=1,f[0].cross(c),f[0].normalize(),f[0]=f[0],f[4]=f[0].clone(),f[4].crossVectors(f[0],c),f[4].normalize(),f[8]=f[0].clone().negate(),f[12]=f[4].clone().negate(),f[2]=f[0].clone().add(f[4]).normalize(),f[6]=f[4].clone().add(f[8]).normalize(),f[10]=f[8].clone().add(f[12]).normalize(),f[14]=f[12].clone().add(f[0]).normalize(),f[1]=f[0].clone().add(f[2]).normalize(),f[3]=f[2].clone().add(f[4]).normalize(),f[5]=f[4].clone().add(f[6]).normalize(),f[7]=f[6].clone().add(f[8]).normalize(),f[9]=f[8].clone().add(f[10]).normalize(),f[11]=f[10].clone().add(f[12]).normalize(),f[13]=f[12].clone().add(f[14]).normalize(),f[15]=f[14].clone().add(f[0]).normalize();var d,p,m,v,g,y,b,x,w,D,C,A,$,S,M,_,z,T,L,E,F,k,I=l.vertices,P=l.vertexArray,O=l.faceArray,R=l.normalArray,N=l.lineArray;for(p=0,m=f.length;p<m;++p){d=3*(I+3*p);var B=f[p].clone().multiplyScalar(o).add(n),V=f[p].clone().multiplyScalar(o).add(u),U=f[p].clone().multiplyScalar(o*a).add(u);if(P[d]=B.x,P[d+1]=B.y,P[d+2]=B.z,P[d+3]=V.x,P[d+4]=V.y,P[d+5]=V.z,P[d+6]=U.x,P[d+7]=U.y,P[d+8]=U.z,p>0){var j=P[d-3],G=P[d-2],q=P[d-1],H=new $3Dmol.Vector3(j,G,q),W=i.clone(),Y=u.clone(),Z=new $3Dmol.Vector3(U.x,U.y,U.z);e.intersectionShape.triangle.push(new $3Dmol.Triangle(Z,W,H)),e.intersectionShape.triangle.push(new $3Dmol.Triangle(H.clone(),Y,Z.clone()))}}l.vertices+=48,P[d=3*l.vertices]=n.x,P[d+1]=n.y,P[d+2]=n.z,P[d+3]=u.x,P[d+4]=u.y,P[d+5]=u.z,P[d+6]=i.x,P[d+7]=i.y,P[d+8]=i.z,l.vertices+=3;var X=l.vertices-3,Q=l.vertices-2,K=l.vertices-1,J=3*X,ee=3*Q,te=3*K;for(p=0,m=f.length-1;p<m;++p){var re=I+3*p;d=3*re,g=l.faceidx,y=l.lineidx,$=3*(b=re),S=3*(x=re+1),M=3*(w=re+2),_=3*(D=re+4),z=3*(C=re+5),T=3*(A=re+3),[f[p],f[p],f[p+1],f[p+1]],L=E=f[p],F=k=f[p+1],R[$]=L.x,R[S]=E.x,R[T]=k.x,R[$+1]=L.y,R[S+1]=E.y,R[T+1]=k.y,R[$+2]=L.z,R[S+2]=E.z,R[T+2]=k.z,R[S]=E.x,R[_]=F.x,R[T]=k.x,R[S+1]=E.y,R[_+1]=F.y,R[T+1]=k.y,R[S+2]=E.z,R[_+2]=F.z,R[T+2]=k.z,R[M]=E.x,R[z]=F.x,R[M+1]=E.y,R[z+1]=F.y,R[M+2]=E.z,R[z+2]=F.z,O[g]=b,O[g+1]=x,O[g+2]=A,O[g+3]=x,O[g+4]=D,O[g+5]=A,O[g+6]=b,O[g+7]=A,O[g+8]=X,O[g+9]=w,O[g+10]=Q,O[g+11]=C,O[g+12]=w,O[g+13]=K,O[g+14]=C,N[y]=b,N[y+1]=x,N[y+2]=b,N[y+3]=A,N[y+4]=D,N[y+5]=A,N[y+6]=b,N[y+7]=A,N[y+8]=w,N[y+9]=x,N[y+10]=w,N[y+11]=C,N[y+12]=D,N[y+13]=C,N[y+14]=w,N[y+15]=K,N[y+16]=w,N[y+17]=C,N[y+18]=K,N[y+19]=C,l.faceidx+=15,l.lineidx+=20}v=[I+45,I+46,I+1,I,I+47,I+2],[f[15],f[15],f[0],f[0]],g=l.faceidx,y=l.lineidx,$=3*(b=v[0]),S=3*(x=v[1]),M=3*(w=v[4]),_=3*(D=v[2]),z=3*(C=v[5]),T=3*(A=v[3]),L=E=f[15],F=k=f[0],R[$]=L.x,R[S]=E.x,R[T]=k.x,R[$+1]=L.y,R[S+1]=E.y,R[T+1]=k.y,R[$+2]=L.z,R[S+2]=E.z,R[T+2]=k.z,R[S]=E.x,R[_]=F.x,R[T]=k.x,R[S+1]=E.y,R[_+1]=F.y,R[T+1]=k.y,R[S+2]=E.z,R[_+2]=F.z,R[T+2]=k.z,R[M]=E.x,R[z]=F.x,R[M+1]=E.y,R[z+1]=F.y,R[M+2]=E.z,R[z+2]=F.z,c.normalize(),h.normalize(),R[J]=h.x,R[ee]=R[te]=c.x,R[J+1]=h.y,R[ee+1]=R[te+1]=c.y,R[J+2]=h.z,R[ee+2]=R[te+2]=c.z,O[g]=b,O[g+1]=x,O[g+2]=A,O[g+3]=x,O[g+4]=D,O[g+5]=A,O[g+6]=b,O[g+7]=A,O[g+8]=X,O[g+9]=w,O[g+10]=Q,O[g+11]=C,O[g+12]=w,O[g+13]=K,O[g+14]=C,N[y]=b,N[y+1]=x,N[y+2]=b,N[y+3]=A,N[y+4]=D,N[y+5]=A,N[y+6]=b,N[y+7]=A,N[y+8]=w,N[y+9]=x,N[y+10]=w,N[y+11]=C,N[y+12]=D,N[y+13]=C,N[y+14]=w,N[y+15]=K,N[y+16]=w,N[y+17]=C,N[y+18]=K,N[y+19]=C,l.faceidx+=15,l.lineidx+=20}},i=function(e,t,r,n){var i,o;if(e.center.set(0,0,0),t.length>0){for(i=0,o=t.length;i<o;++i){var a=t[i].centroid;e.center.add(a)}e.center.divideScalar(t.length)}var s=e.radius*e.radius;for(r.length/3<n&&(n=r.length/3),i=0,o=n;i<o;i++){var l=r[3*i],c=r[3*i+1],u=r[3*i+2],h=e.center.distanceToSquared({x:l,y:c,z:u});s=Math.max(s,h)}e.radius=Math.sqrt(s)},o=function(e,t,r,n,o){var a,s,l,c,u,h,f,d,p,m=t.addGeoGroup(),v=r.vertexArr,g=r.normalArr,y=r.faceArr;m.vertices=v.length,m.faceidx=y.length;var b=m.vertexArray,x=m.colorArray;for(n.constructor!==Array&&(d=n.r,p=n.g,c=n.b),h=0,f=m.vertices;h<f;++h)a=3*h,s=v[h],b[a]=s.x,b[a+1]=s.y,b[a+2]=s.z,n.constructor===Array&&(d=(u=n[h]).r,p=u.g,c=u.b),x[a]=d,x[a+1]=p,x[a+2]=c;if(o)for(h=0,f=m.faceidx/3;h<f;++h){l=y[a=3*h],c=y[a+1],u=y[a+2];var w=new $3Dmol.Vector3,D=new $3Dmol.Vector3,C=new $3Dmol.Vector3;e.intersectionShape.triangle.push(new $3Dmol.Triangle(w.copy(v[l]),D.copy(v[c]),C.copy(v[u])))}if(o){var A=new $3Dmol.Vector3(0,0,0),$=0;for(let e=0;e<t.geometryGroups.length;e++)A.add(t.geometryGroups[e].getCentroid()),$++;A.divideScalar($),i(e.boundingSphere,{centroid:A},b,m.vertices)}if(m.faceArray=new Uint16Array(y),m.truncateArrayBuffers(!0,!0),g.length<m.vertices)m.setNormals();else{var S,M=m.normalArray=new Float32Array(3*m.vertices);for(h=0,f=m.vertices;h<f;++h)a=3*h,S=g[h],M[a]=S.x,M[a+1]=S.y,M[a+2]=S.z}m.setLineIndices(),m.lineidx=m.lineArray.length},a=function(e,t,r){var n=r,i=n.vertexArr,a=n.faceArr;0!==i.length&&0!==a.length||console.warn("Error adding custom shape component: No vertices and/or face indices supplied!");var s=r.color;void 0===s&&(s=e.color),s=$3Dmol.CC.color(s);for(var l=$3Dmol.splitMesh(n),c=0,u=l.length;c<u;c++)o(e,t,l[c],l[c].colorArr?l[c].colorArr:s,r.clickable)},s=function(e,t){void 0!==t.color?(e.color=t.color||new $3Dmol.Color,t.color instanceof $3Dmol.Color||(e.color=$3Dmol.CC.color(t.color))):e.color=$3Dmol.CC.color(0),e.wireframe=!!t.wireframe,e.opacity=t.alpha?$3Dmol.Math.clamp(t.alpha,0,1):1,void 0!==t.opacity&&(e.opacity=$3Dmol.Math.clamp(t.opacity,0,1)),e.side=void 0!==t.side?t.side:$3Dmol.DoubleSide,e.linewidth=void 0===t.linewidth?1:t.linewidth,e.clickable=!!t.clickable,e.callback="function"==typeof t.callback?t.callback:null,e.hoverable=!!t.hoverable,e.hover_callback="function"==typeof t.hover_callback?t.hover_callback:null,e.unhover_callback="function"==typeof t.unhover_callback?t.unhover_callback:null,e.hidden=t.hidden,e.frame=t.frame};function l(o){o=o||{},$3Dmol.ShapeIDCount++,this.boundingSphere=new $3Dmol.Sphere,this.intersectionShape={sphere:[],cylinder:[],line:[],triangle:[]},s(this,o);var l=[],c=null,u=null,h=new $3Dmol.Geometry(!0),f=new $3Dmol.Geometry(!0);this.updateStyle=function(e){for(var t in e)o[t]=e[t];s(this,o)},this.addCustom=function(e){e.vertexArr=e.vertexArr||[],e.faceArr=e.faceArr||[],e.normalArr=e.normalArr||[],a(this,h,e)},this.addSphere=function(e){e.center=e.center||{x:0,y:0,z:0},e.radius=e.radius?$3Dmol.Math.clamp(e.radius,0,1/0):1.5,e.color=$3Dmol.CC.color(e.color),this.intersectionShape.sphere.push(new $3Dmol.Sphere(e.center,e.radius)),$3Dmol.GLDraw.drawSphere(h,e.center,e.radius,e.color),l.push({centroid:new $3Dmol.Vector3(e.center.x,e.center.y,e.center.z)});var t=h.updateGeoGroup(0);i(this.boundingSphere,l,t.vertexArray,t.vertices)},this.addBox=function(e){var t=e.dimensions||{w:1,h:1,d:1},r=t.w;"number"==typeof t.w&&(r={x:t.w,y:0,z:0});var n=t.h;"number"==typeof t.h&&(n={x:0,y:t.h,z:0});var o=t.d;"number"==typeof t.d&&(o={x:0,y:0,z:t.d});var s=e.corner;null==s&&(s=void 0!==e.center?{x:e.center.x-.5*(r.x+n.x+o.x),y:e.center.y-.5*(r.y+n.y+o.y),z:e.center.z-.5*(r.z+n.z+o.z)}:{x:0,y:0,z:0});var c=[{x:s.x,y:s.y,z:s.z},{x:s.x+r.x,y:s.y+r.y,z:s.z+r.z},{x:s.x+n.x,y:s.y+n.y,z:s.z+n.z},{x:s.x+r.x+n.x,y:s.y+r.y+n.y,z:s.z+r.z+n.z},{x:s.x+o.x,y:s.y+o.y,z:s.z+o.z},{x:s.x+r.x+o.x,y:s.y+r.y+o.y,z:s.z+r.z+o.z},{x:s.x+n.x+o.x,y:s.y+n.y+o.y,z:s.z+n.z+o.z},{x:s.x+r.x+n.x+o.x,y:s.y+r.y+n.y+o.y,z:s.z+r.z+n.z+o.z}],u=[],f=[];u.splice(u.length,0,c[0],c[1],c[2],c[3]),f.splice(f.length,0,0,2,1,1,2,3);var d=4;u.splice(u.length,0,c[2],c[3],c[6],c[7]),f.splice(f.length,0,d+0,d+2,d+1,d+1,d+2,d+3),d+=4,u.splice(u.length,0,c[4],c[5],c[0],c[1]),f.splice(f.length,0,d+0,d+2,d+1,d+1,d+2,d+3),d+=4,u.splice(u.length,0,c[6],c[7],c[4],c[5]),f.splice(f.length,0,d+0,d+2,d+1,d+1,d+2,d+3),d+=4,u.splice(u.length,0,c[3],c[1],c[7],c[5]),f.splice(f.length,0,d+0,d+2,d+1,d+1,d+2,d+3),d+=4,u.splice(u.length,0,c[2],c[0],c[6],c[4]),f.splice(f.length,0,d+0,d+2,d+1,d+1,d+2,d+3),d+=4;var p=$.extend({},e);p.vertexArr=u,p.faceArr=f,p.normalArr=[],a(this,h,p);var m=new $3Dmol.Vector3;l.push({centroid:m.addVectors(c[0],c[7]).multiplyScalar(.5)});var v=h.updateGeoGroup(0);i(this.boundingSphere,l,v.vertexArray,v.vertices)},this.addCylinder=function(e){e.start=e.start||{},e.end=e.end||{};var t=new $3Dmol.Vector3(e.start.x||0,e.start.y||0,e.start.z||0),r=new $3Dmol.Vector3(e.end.x,e.end.y||0,e.end.z||0);void 0===r.x&&(r.x=3);var n=e.radius||.1,o=$3Dmol.CC.color(e.color);this.intersectionShape.cylinder.push(new $3Dmol.Cylinder(t,r,n)),$3Dmol.GLDraw.drawCylinder(h,t,r,n,o,e.fromCap,e.toCap);var a=new $3Dmol.Vector3;l.push({centroid:a.addVectors(t,r).multiplyScalar(.5)});var s=h.updateGeoGroup(0);i(this.boundingSphere,l,s.vertexArray,s.vertices)},this.addDashedCylinder=function(e){e.start=e.start||{},e.end=e.end||{},e.dashLength=e.dashLength||.25,e.gapLength=e.gapLength||.25;var t=new $3Dmol.Vector3(e.start.x||0,e.start.y||0,e.start.z||0),r=new $3Dmol.Vector3(e.end.x,e.end.y||0,e.end.z||0);void 0===r.x&&(r.x=3);for(var n=e.radius||.1,o=$3Dmol.CC.color(e.color),a=Math.sqrt(Math.pow(t.x-r.x,2)+Math.pow(t.y-r.y,2)+Math.pow(t.z-r.z,2)),s=a/(e.gapLength+e.dashLength),c=new $3Dmol.Vector3(e.start.x||0,e.start.y||0,e.start.z||0),u=new $3Dmol.Vector3(e.end.x,e.end.y||0,e.end.z||0),f=new $3Dmol.Vector3((r.x-t.x)/(a/e.gapLength),(r.y-t.y)/(a/e.gapLength),(r.z-t.z)/(a/e.gapLength)),d=new $3Dmol.Vector3((r.x-t.x)/(a/e.dashLength),(r.y-t.y)/(a/e.dashLength),(r.z-t.z)/(a/e.dashLength)),p=0;p<s;p++)u=new $3Dmol.Vector3(c.x+d.x,c.y+d.y,c.z+d.z),this.intersectionShape.cylinder.push(new $3Dmol.Cylinder(c,u,n)),$3Dmol.GLDraw.drawCylinder(h,c,u,n,o,e.fromCap,e.toCap),c=new $3Dmol.Vector3(u.x+f.x,u.y+f.y,u.z+f.z);var m=new $3Dmol.Vector3;l.push({centroid:m.addVectors(t,r).multiplyScalar(.5)});var v=h.updateGeoGroup(0);i(this.boundingSphere,l,v.vertexArray,v.vertices)},this.addCurve=function(e){e.points=e.points||[],e.smooth=e.smooth||10,void 0===e.fromCap&&(e.fromCap=2),void 0===e.toCap&&(e.toCap=2);var t=$3Dmol.subdivide_spline(e.points,e.smooth);if(t.length<3)console.log("Too few points in addCurve");else{var r=e.radius||.1,n=$3Dmol.CC.color(e.color),i=0,o=t.length-1,a=t[0].distanceTo(t[1]),s=Math.ceil(2*r/a);if(e.toArrow){let e={start:t[o-=s],end:t[t.length-1],radius:r,color:n,mid:1e-4};this.addArrow(e)}if(e.fromArrow){let e={start:t[i+=s],end:t[0],radius:r,color:n,mid:1e-4};this.addArrow(e)}for(var l=Math.ceil(t.length/2),c={radius:r,color:n,fromCap:2,toCap:2},u=i;u<o;u++)c.start=t[u],c.end=t[u+1],c.fromCap=2,c.toCap=2,u<l?(c.fromCap=2,c.toCap=0):u>l?(c.fromCap=0,c.toCap=2):(c.fromCap=2,c.toCap=2),this.addCylinder(c)}},this.addLine=function(e){e.start=e.start||{},e.end=e.end||{};var t=new $3Dmol.Vector3(e.start.x||0,e.start.y||0,e.start.z||0),r=new $3Dmol.Vector3(e.end.x,e.end.y||0,e.end.z||0);void 0===r.x&&(r.x=3);var n=h.updateGeoGroup(2),o=n.vertices,a=3*o,s=n.vertexArray;s[a]=t.x,s[a+1]=t.y,s[a+2]=t.z,s[a+3]=r.x,s[a+4]=r.y,s[a+5]=r.z,n.vertices+=2;var c=n.lineArray,u=n.lineidx;c[u]=o,c[u+1]=o+1,n.lineidx+=2;var f=new $3Dmol.Vector3;l.push({centroid:f.addVectors(t,r).multiplyScalar(.5)}),n=h.updateGeoGroup(0),i(this.boundingSphere,l,n.vertexArray,n.vertices)},this.addArrow=function(e){if(e.start=e.start||{},e.end=e.end||{},e.start=new $3Dmol.Vector3(e.start.x||0,e.start.y||0,e.start.z||0),e.dir instanceof $3Dmol.Vector3&&"number"==typeof e.length){var t=e.dir.clone().multiplyScalar(e.length).add(e.start);e.end=t}else e.end=new $3Dmol.Vector3(e.end.x,e.end.y||0,e.end.z||0),void 0===e.end.x&&(e.end.x=3);e.radius=e.radius||.1,e.radiusRatio=e.radiusRatio||1.618034,e.mid=0<e.mid&&e.mid<1?e.mid:.618034,n(this,h,e);var r=new $3Dmol.Vector3;l.push({centroid:r.addVectors(e.start,e.end).multiplyScalar(.5)});var o=h.updateGeoGroup(0);i(this.boundingSphere,l,o.vertexArray,o.vertices)};var d=function(e,t,r){for(var n=0;n<t.length;n++)if(i=t[n],o=e,Math.sqrt(Math.pow(i.x-o.x,2)+Math.pow(i.y-o.y,2)+Math.pow(i.z-o.z,2))<=r)return!0;var i,o;return!1};this.addIsosurface=function(t,r,n){var i,o,s=void 0!==r.isoval&&"number"==typeof r.isoval?r.isoval:0,l=!!r.voxel,c=void 0===r.smoothness?1:r.smoothness,u=t.size.x,f=t.size.y,p=t.size.z,m=new Int16Array(u*f*p),v=t.data;for(i=0,o=m.length;i<o;++i)m[i]=-1;var g=new Uint8Array(u*f*p);for(i=0,o=v.length;i<o;++i){(s>=0?v[i]-s:s-v[i])>0&&(g[i]|=e)}var y=[],b=[];$3Dmol.MarchingCube.march(g,y,b,{fulltable:!0,voxel:l,unitCube:t.unit,origin:t.origin,matrix:t.matrix,nX:u,nY:f,nZ:p}),!l&&c>0&&$3Dmol.MarchingCube.laplacianSmooth(c,y,b);var x=[],w=[],D=[];if(r.selectedRegion&&void 0===r.coords&&(r.coords=r.selectedRegion),void 0!==r.coords){var C=r.coords[0].x,A=r.coords[0].y,$=r.coords[0].z,S=r.coords[0].x,M=r.coords[0].y,_=r.coords[0].z;for(let e=0;e<r.coords.length;e++)r.coords[e].x>C?C=r.coords[e].x:r.coords[e].x<S&&(S=r.coords[e].x),r.coords[e].y>A?A=r.coords[e].y:r.coords[e].y<M&&(M=r.coords[e].y),r.coords[e].z>$?$=r.coords[e].z:r.coords[e].z<_&&(_=r.coords[e].z);var z=2;void 0!==r.radius&&(z=r.radius),void 0!==r.selectedOffset&&(z=r.selectedOffset),void 0!==r.seldist&&(z=r.seldist),S-=z,C+=z,M-=z,A+=z,_-=z,$+=z;for(let e=0;e<y.length;e++)y[e].x>S&&y[e].x<C&&y[e].y>M&&y[e].y<A&&y[e].z>_&&y[e].z<$&&d(y[e],r.coords,z)?(x.push(w.length),w.push(y[e])):x.push(-1);for(let e=0;e+2<b.length;e+=3)-1!==x[b[e]]&&-1!==x[b[e+1]]&&-1!==x[b[e+2]]&&(D.push(b[e]-(b[e]-x[b[e]])),D.push(b[e+1]-(b[e+1]-x[b[e+1]])),D.push(b[e+2]-(b[e+2]-x[b[e+2]])));y=w,b=D}a(this,h,{vertexArr:y,faceArr:b,normalArr:[],clickable:r.clickable,hoverable:r.hoverable}),this.updateStyle(r);var T=new $3Dmol.Vector3(t.origin.x,t.origin.y,t.origin.z),L=new $3Dmol.Vector3(t.size.x*t.unit.x,t.size.y*t.unit.y,t.size.z*t.unit.z),E=new $3Dmol.Vector3(0,0,0),F=T.clone(),k=T.clone().add(L);for(let e=0;e<y.length;e++)E.add(y[e]),F.max(y[e]),k.min(y[e]);E.divideScalar(y.length);var I=E.distanceTo(k),P=E.distanceTo(F);this.boundingSphere.center=E,this.boundingSphere.radius=Math.max(I,P),"function"==typeof n&&n()},this.addVolumetricData=function(e,t,r){e=new $3Dmol.VolumeData(e,t),this.addIsosurface(e,r)},this.finalize=function(){t(h),h.initTypedArrays()},this.globj=function(e){if(u&&(e.remove(u),u=null),!this.hidden){t(h),h.initTypedArrays(),this.wireframe&&h.setUpWireframe(),void 0!==this.color&&r(h,this.color),c=new $3Dmol.Object3D;var n=null;n=this.side==$3Dmol.DoubleSide?new $3Dmol.MeshDoubleLambertMaterial({wireframe:this.wireframe,side:this.side,transparent:this.opacity<1,opacity:this.opacity,wireframeLinewidth:this.linewidth}):new $3Dmol.MeshLambertMaterial({wireframe:this.wireframe,side:this.side,transparent:this.opacity<1,opacity:this.opacity,wireframeLinewidth:this.linewidth});var i=new $3Dmol.Mesh(h,n);c.add(i);var o=new $3Dmol.LineBasicMaterial({linewidth:this.linewidth,color:this.color}),a=new $3Dmol.Line(f,o,$3Dmol.LinePieces);c.add(a),u=c.clone(),e.add(u)}},this.removegl=function(e){u&&(void 0!==u.geometry&&u.geometry.dispose(),void 0!==u.material&&u.material.dispose(),e.remove(u),u=null),c=null}}return Object.defineProperty(l.prototype,"position",{get:function(){return this.boundingSphere.center}}),Object.defineProperty(l.prototype,"x",{get:function(){return this.boundingSphere.center.x}}),Object.defineProperty(l.prototype,"y",{get:function(){return this.boundingSphere.center.y}}),Object.defineProperty(l.prototype,"z",{get:function(){return this.boundingSphere.center.z}}),l}(),$3Dmol.ShapeIDCount=0,$3Dmol.splitMesh=function(e){if(e.vertexArr.length<64e3)return[e];var t=[{vertexArr:[],normalArr:[],faceArr:[]}];e.colorArr&&(t.colorArr=[]);var r=[],n=[],i=0,o=e.faceArr;for(let s=0,l=o.length;s<l;s+=3){let l=t[i];for(let t=0;t<3;t++){var a=o[s+t];r[a]!==i&&(r[a]=i,n[a]=l.vertexArr.length,l.vertexArr.push(e.vertexArr[a]),e.normalArr&&e.normalArr[a]&&l.normalArr.push(e.normalArr[a]),e.colorArr&&e.colorArr[a]&&l.colorArr.push(e.colorArr[a])),l.faceArr.push(n[a])}l.vertexArr.length>=64e3&&(t.push({vertexArr:[],normalArr:[],faceArr:[]}),e.colorArr&&(t.colorArr=[]),i++)}return t},$3Dmol.GLViewer=function(){var e=4,t=64e3;return function(r,n){var i=(n=n||{}).callback,o=n.defaultcolors;o||(o=$3Dmol.elementColors.defaultColors);var a=n.nomouse,s=0;n.backgroundColor=n.backgroundColor||"#ffffff",null!=typeof n.backgroundColor&&(s=$3Dmol.CC.color(n.backgroundColor).getHex());var l=0;null!=typeof n.camerax&&(l=parseFloat(n.camerax));var c=this,u=r,h=null,f=[],d={},p=[],m=[],v=[],g=[],y=[],b=null,x=500,w=0;null!=typeof n.hoverDuration&&(x=n.hoverDuration);var D=u.width(),C=u.height(),A=[],S=new $3Dmol.Renderer({antialias:!0,preserveDrawingBuffer:!0,premultipliedAlpha:!1,id:n.id,row:n.row,col:n.col,rows:n.rows,cols:n.cols,canvas:n.canvas});S.domElement.style.width="100%",S.domElement.style.height="100%",S.domElement.style.padding="0",S.domElement.style.position="absolute",S.domElement.style.top="0px",S.domElement.style.left="0px",S.domElement.style.zIndex="0";var M=n.row,_=n.col,z=n.cols,T=n.rows,L=n.viewers,E=n.control_all,F=S.getAspect(D,C),k=new $3Dmol.Camera(20,F,1,800,n.orthographic);k.position=new $3Dmol.Vector3(l,0,150);var I=new $3Dmol.Vector3;k.lookAt(I);var P=new $3Dmol.Raycaster(new $3Dmol.Vector3(0,0,0),new $3Dmol.Vector3(0,0,0)),O=new $3Dmol.Projector,R=null,N=null,B=null,V=-50,U=50,j=new $3Dmol.Quaternion(0,0,0,1),G=new $3Dmol.Quaternion(0,0,0,1),q=0,H=!1,W=0,Y=0,Z=0,X=0,Q=0,K=0,J=0,ee=function(){--q<0&&(q=0)},te=function(){q++},re=function(){var e=0;for(var t in d)if(d.hasOwnProperty(t)){var r=parseInt(t);isNaN(r)||(t=r),t>e&&(e=t)}return e+1},ne=function(){var e=k.position.z-N.position.z;e<1&&(e=1),k.near=e+V,k.near<1&&(k.near=1),k.far=e+U,k.near+1>k.far&&(k.far=k.near+1),k.fov=20,k.right=e*Math.tan(Math.PI/180*20),k.left=-k.right,k.top=k.right/F,k.bottom=-k.top,k.updateProjectionMatrix(),R.fog.near=k.near+.4*(k.far-k.near),R.fog.far=k.far,n.disableFog&&(R.fog.near=R.fog.far)},ie=function(e){if(S.setViewport(),R&&(ne(),S.render(R,k),!e&&A.length>0))for(var t=c.getView(),r=0;r<A.length;r++)A[r].setView(t,!0)};!function(){(R=new $3Dmol.Scene).fog=new $3Dmol.Fog(s,100,200),B=new $3Dmol.Object3D,(N=new $3Dmol.Object3D).useQuaternion=!0,N.quaternion=new $3Dmol.Quaternion(0,0,0,1),N.add(B),R.add(N);var e=new $3Dmol.Light(16777215);e.position=new $3Dmol.Vector3(.2,.2,1).normalize(),e.intensity=1,R.add(e)}(),S.setClearColorHex(s,1),R.fog.color=$3Dmol.CC.color(s);var oe=function(e,t){b!=e&&(b&&b.unhover_callback(b,c,t,u),b=e,e&&void 0!==e.hover_callback&&"function"==typeof e.hover_callback&&e.hover_callback(e,c,t,u))},ae=function(e){var t=e.originalEvent.targetTouches[0].pageX-e.originalEvent.targetTouches[1].pageX,r=e.originalEvent.targetTouches[0].pageY-e.originalEvent.targetTouches[1].pageY;return Math.sqrt(t*t+r*r)},se=function(e){var t=e.pageX,r=e.pageY;return null==t&&(t=e.originalEvent.pageX),null==r&&(r=e.originalEvent.pageY),e.originalEvent.targetTouches&&e.originalEvent.targetTouches[0]?(t=e.originalEvent.targetTouches[0].pageX,r=e.originalEvent.targetTouches[0].pageY):e.originalEvent.changedTouches&&e.originalEvent.changedTouches[0]&&(t=e.originalEvent.changedTouches[0].pageX,r=e.originalEvent.changedTouches[0].pageY),[t,r]},le=function(e,t){var r=u.width(),n=u.height();if(null!=L&&!E){var i=r/z,o=n/T,a=$("canvas",u).offset(),s=e-a.left,l=t-a.top,c=T-Math.floor(l/o)-1,h=Math.floor(s/i);if(c!=M||h!=_)return!1}return!0};$("body").bind("mouseup touchend",function(e){if(H&&R){var t=se(e),r=t[0],n=t[1];if(r==W&&n==Y){var i=$("canvas",u).offset();!function(e,t,r){if(0!=g.length){var n,i={x:e,y:t,z:-1};if(P.setFromCamera(i,k),(n=P.intersectObjects(B,g)).length){var o=n[0].clickable;void 0!==o.callback&&"function"==typeof o.callback&&o.callback(o,c,r,u)}}}((r-i.left)/D*2-1,-(n-i.top)/C*2+1,e)}}H=!1});var ce,ue=function(e){if(n.lowerZoomLimit&&n.lowerZoomLimit>0){var t=150-n.lowerZoomLimit;e>t&&(e=t)}if(n.upperZoomLimit&&n.upperZoomLimit>0){var r=150-n.upperZoomLimit;e<r&&(e=r)}return e>150&&(e=149.85),e};this.setZoomLimits=function(e,t){void 0!==e&&(n.lowerZoomLimit=e),t&&(n.upperZoomLimit=t),N.position.z=ue(N.position.z),ie()};var he,fe=this._handleMouseDown=function(e){if(e.preventDefault(),R){var t=se(e),r=t[0],n=t[1];void 0!==r&&(H=!0,ce=e.which,W=r,Y=n,Z=0,e.originalEvent.targetTouches&&2==e.originalEvent.targetTouches.length&&(Z=ae(e)),j=N.quaternion,Q=N.position.z,X=B.position.clone(),K=V,J=U)}},de=this._handleMouseScroll=function(e){if(e.preventDefault(),R){var t=se(e),r=t[0],n=t[1];if(void 0!==r&&le(r,n)){var i=.85*(150-N.position.z),o=1;e.originalEvent.ctrlKey&&(o=-1),e.originalEvent.detail?N.position.z+=o*i*e.originalEvent.detail/10:e.originalEvent.wheelDelta&&(N.position.z-=o*i*e.originalEvent.wheelDelta/400),N.position.z=ue(N.position.z),ie()}}};this.pngURI=function(){return this.getCanvas().toDataURL("image/png")},this.getCanvas=function(){return h.get(0)},this.setHoverDuration=function(e){x=e};var pe=this._handleMouseMove=function(e){D=u.width(),C=u.height(),clearTimeout(he);var t=$("canvas",u).offset(),r=(se(e)[0]-t.left)/D*2-1,n=-(se(e)[1]-t.top)/C*2+1;if(null!==b&&function(e,t){var r,n={x:e,y:t,z:-1};P.setFromCamera(n,k),0!=(r=P.intersectObjects(B,y)).length&&void 0!==r[0]||oe(null),void 0!==r[0]&&r[0].clickable!==b&&oe(null)}(r,n),he=setTimeout(function(){!function(e,t){if(0!=y.length){var r,n={x:e,y:t,z:-1};if(P.setFromCamera(n,k),(r=P.intersectObjects(B,y)).length){var i=r[0].clickable;oe(i),b=i}else oe(null)}}(r,n)},x),e.preventDefault(),R&&H){var i=0,o=se(e),a=o[0],s=o[1];if(void 0!==a&&le(a,s)){var l=(a-W)/D,c=(s-Y)/C;0!=Z&&e.originalEvent.targetTouches&&2==e.originalEvent.targetTouches.length?(i=2,c=2*(ae(e)-Z)/(D+C)):e.originalEvent.targetTouches&&3==e.originalEvent.targetTouches.length&&(i=1);var h=S.getXYRatio(),f=h[0],d=h[1];l*=f,c*=d;var p,m=Math.sqrt(l*l+c*c);if(3==i||3==ce&&e.ctrlKey)V=K+100*l,U=J-100*c;else if(2==i||3==ce||e.shiftKey)(p=.85*(150-N.position.z))<80&&(p=80),N.position.z=Q+c*p,N.position.z=ue(N.position.z);else if(1==i||2==ce||e.ctrlKey){var v=function(e,t){var r=e/D,n=t/C,i=N.position.z,o=N.quaternion,a=new $3Dmol.Vector3(0,0,i);return O.projectVector(a,k),a.x+=2*r,a.y-=2*n,O.unprojectVector(a,k),a.z=0,a.applyQuaternion(o),a}(f*(a-W),d*(s-Y));B.position.addVectors(X,v)}else if((0===i||1==ce)&&0!==m){var g=Math.sin(m*Math.PI)/m;G.x=Math.cos(m*Math.PI),G.y=0,G.z=g*l,G.w=-g*c,N.quaternion=new $3Dmol.Quaternion(1,0,0,0),N.quaternion.multiply(G),N.quaternion.multiply(j)}ie()}}},me=function(e){D=(u=e).width(),C=u.height(),F=S.getAspect(D,C),S.setSize(D,C),u.append(S.domElement),h=$(S.domElement),a||(h.bind("mousedown touchstart",fe),h.bind("DOMMouseScroll mousewheel",de),h.bind("mousemove touchmove",pe),h.bind("contextmenu",function(e){e.preventDefault()}))};me(u),this.setContainer=function(e){return"string"===$.type(e)&&(e=$("#"+e)),e||(e=u),me(e),this},this.setBackgroundColor=function(e,t){void 0===t?t=1:(t<0||t>1)&&(t=1);var r=$3Dmol.CC.color(e);return R.fog.color=r,s=r.getHex(),S.setClearColorHex(r.getHex(),t),ie(),this},this.setProjection=function(e){k.ortho="orthographic"===e,ne()},this.setViewStyle=function(e){if("outline"===e.style){var t={};e.color&&(t.color=$3Dmol.CC.color(e.color)),e.width&&(t.width=e.width),S.enableOutline(t)}else S.disableOutline();return this},n.style&&this.setViewStyle(n),this.setWidth=function(e){return D=e||D,S.setSize(D,C),this},this.setHeight=function(e){return C=e||C,S.setSize(D,C),this},this.resize=function(){return D=u.width(),C=u.height(),F=S.getAspect(D,C),S.setSize(D,C),k.aspect=F,k.updateProjectionMatrix(),ie(),this},$(window).resize(this.resize),this.getModel=function(e){return e in f?f[e]:0==f.length?null:f[f.length-1]};var ve,ge=function(e,t,r){if(1==r)return t;if(0==r)return e;var n=e.x*t.x+e.y*t.y+e.z*t.z+e.w*t.w;if(n>.9995){var i=new $3Dmol.Quaternion(e.x+r*(t.x-e.x),e.y+r*(t.y-e.y),e.z+r*(t.z-e.z),e.w+r*(t.w-e.w));return i.normalize(),i}n<0&&(t=t.clone().multiplyScalar(-1),n=-n),n>1?n=1:n<-1&&(n=-1);var o=Math.acos(n)*r,a=t.clone();a.sub(e.clone().multiplyScalar(n)),a.normalize();var s=Math.cos(o),l=Math.sin(o),c=new $3Dmol.Quaternion(e.x*s+a.x*l,e.y*s+a.y*l,e.z*s+a.z*l,e.w*s+a.w*l);return c.normalize(),c};this.spin=function(e){if(clearInterval(ve),void 0===e&&(e="y"),"boolean"==typeof e){if(!e)return;e="y"}Array.isArray(e)&&(e={x:e[0],y:e[1],z:e[2]});var t=this;ve=setInterval(function(){t.rotate(1,e)},25)};var ye=function(e,t,r,n,i,o){var a=Math.ceil(e/20);a<1&&(a=1),te();var s={mpos:B.position.clone(),rz:N.position.z,rot:N.quaternion.clone(),cam:I.clone()};if(t){for(var l=(a=new Array(a)).length,c=0;c<l;c++){let e=(c+1)/l,t={mpos:s.mpos,rz:s.rz,rot:s.rot};r&&(t.mpos=r.clone().sub(s.mpos).multiplyScalar(e).add(s.mpos)),void 0!==n&&null!=n&&(t.rz=s.rz+e*(n-s.rz)),i&&(t.rot=ge(s.rot,i,e)),o&&(t.cam=o.clone().sub(s.cam).multiplyScalar(e).add(s.cam)),a[c]=t}let e=0,t=function(){var r=a[e];e+=1,r.mpos&&(B.position=r.mpos),r.rz&&(N.position.z=r.rz),r.rot&&(N.quaternion=r.rot),r.cam&&k.lookAt(r.cam),e<a.length?setTimeout(t,20):ee(),ie()};setTimeout(t,20)}else{var u={};let e=1/a;if(r&&(u.mpos=r.clone().sub(s.mpos).multiplyScalar(e)),void 0!==n&&null!=n&&(u.rz=e*(n-s.rz)),i){var h=ge(s.rot,i,e);u.rot=s.rot.clone().inverse().multiply(h)}o&&(u.cam=o.clone().sub(s.cam).multiplyScalar(e));let t=0,l=function(){t+=1,u.mpos&&B.position.add(u.mpos),u.rz&&(N.position.z+=u.rz),u.rot&&N.quaternion.multiply(u.rot),u.cam&&(I.add(u.cam),k.lookAt(I)),t<a?setTimeout(l,20):ee(),ie()};setTimeout(l,20)}};function be(e){var t=[];if(void 0===e||void 0===e.model)for(let e=0;e<f.length;e++)f[e]&&t.push(f[e]);else{t=e.model,$.isArray(t)||(t=[t]);for(let e=0;e<t.length;e++)if("number"==typeof t[e]){var r=t[e];r<0&&(r+=f.length),t[e]=f[r]}}return t}function xe(e){var t=[];void 0===e&&(e={});for(var r=be(e),n=0;n<r.length;n++)t=t.concat(r[n].selectedAtoms(e));return t}function we(e,t){void 0===t&&(t={});for(var r=be(t),n=0;n<r.length;n++)if(r[n].atomIsSelected(e,t))return!0;return!1}this.rotate=function(e,t,r,n){r=void 0!==r?r:0,void 0===t&&(t="y"),"x"==t?t={x:1,y:0,z:0}:"y"==t?t={x:0,y:1,z:0}:"z"==t&&(t={x:0,y:0,z:1});var i=function(e){var r,n,i,o=Math.sin(e/2),a=Math.cos(e/2);return r=t.x*o,n=t.y*o,i=t.z*o,new $3Dmol.Quaternion(r,n,i,a).normalize()}(Math.PI*e/180);if(r){var o=(new $3Dmol.Quaternion).copy(N.quaternion).multiply(i);ye(r,n,B.position,N.position.z,o,I)}else N.quaternion.multiply(i),ie();return this},this.surfacesFinished=function(){for(var e in d)if(!d[e][0].done)return!1;return!0},this.getView=function(){if(!B)return[0,0,0,0,0,0,0,1];var e=B.position,t=N.quaternion;return[e.x,e.y,e.z,N.position.z,t.x,t.y,t.z,t.w]},this.setView=function(e,t){return void 0!==e&&(e instanceof Array||8!==e.length)&&B&&N?(B.position.x=e[0],B.position.y=e[1],B.position.z=e[2],N.position.z=e[3],N.quaternion.x=e[4],N.quaternion.y=e[5],N.quaternion.z=e[6],N.quaternion.w=e[7],void 0!==e[8]&&(N.position.x=e[8],N.position.y=e[9]),ie(t),this):this},this.render=function(e,t){S.setViewport(),function(){g.splice(0,g.length),y.splice(0,y.length);for(let t=0,r=f.length;t<r;t++){var e=f[t];if(e){let t=e.selectedAtoms({clickable:!0}),r=e.selectedAtoms({hoverable:!0});Array.prototype.push.apply(y,r),Array.prototype.push.apply(g,t)}}for(let e=0,t=p.length;e<t;e++){let t=p[e];t&&t.clickable&&g.push(t),t&&t.hoverable&&y.push(t)}}();var r,n,i=this.getView();for(t||(t=S.supportedExtensions()),r=0;r<f.length;r++)f[r]&&f[r].globj(B,t);for(r=0;r<p.length;r++)p[r]&&(void 0===p[r].frame||w<0||p[r].frame<0||p[r].frame==w?p[r].globj(B,t):p[r].removegl(B));for(r=0;r<m.length;r++)m[r]&&void 0!==m[r].frame&&m[r].frame>=0&&(B.remove(m[r].sprite),(w<0||m[r].frame==w)&&B.add(m[r].sprite));for(r in d)if(d.hasOwnProperty(r)){var o=d[r];for(n=0;n<o.length;n++)if(o.hasOwnProperty(n)){var a=o[n].geo;if(!o[n].finished||t.regen){a.verticesNeedUpdate=!0,a.elementsNeedUpdate=!0,a.normalsNeedUpdate=!0,a.colorsNeedUpdate=!0,a.buffersNeedUpdate=!0,a.boundingSphere=null,o[n].done&&(o[n].finished=!0),o[n].lastGL&&B.remove(o[n].lastGL);var s=null;if(s=o[n].mat instanceof $3Dmol.LineBasicMaterial?new $3Dmol.Line(a,o[n].mat):new $3Dmol.Mesh(a,o[n].mat),o[n].mat.transparent&&0==o[n].mat.opacity?s.visible=!1:s.visible=!0,o[n].symmetries.length>1||1==o[n].symmetries.length&&!o[n].symmetries[n].isIdentity()){var l,c=new $3Dmol.Object3D;for(l=0;l<o[n].symmetries.length;l++){var u=s.clone();u.matrix=o[n].symmetries[l],u.matrixAutoUpdate=!1,c.add(u)}o[n].lastGL=c,B.add(c)}else o[n].lastGL=s,B.add(s)}}}return this.setView(i),"function"==typeof e&&e(this),this},this.selectedAtoms=function(e){return xe(e)},this.getUniqueValues=function(e,t){void 0===t&&(t={});var r=xe(t),n={};for(var i in r)r[i].hasOwnProperty(e)&&(n[r[i][e]]=!0);return Object.keys(n)},this.pdbData=function(e){for(var t=xe(e),r="",n=0,i=t.length;n<i;++n)r+=t[n].pdbline+"\n";return r},this.zoom=function(e,t,r){e=e||2,t=void 0!==t?t:0;var n=150-(150-N.position.z)/e;return t>0?ye(t,r,B.position,ue(n),N.quaternion,I):(N.position.z=ue(n),ie()),this},this.translate=function(e,t,r,n){r=void 0!==r?r:0;var i=e/D,o=t/C,a=new $3Dmol.Vector3(0,0,-150);O.projectVector(a,k),a.x-=i,a.y-=o,O.unprojectVector(a,k),a.z=0;var s=I.clone().add(a);return r>0?ye(r,n,B.position,N.position.z,N.quaternion,s):(I=s,k.lookAt(I),ie()),this},this.fitSlab=function(e){var t=xe(e=e||{}),r=$3Dmol.getExtent(t),n=r[1][0]-r[0][0],i=r[1][1]-r[0][1],o=r[1][2]-r[0][2],a=Math.sqrt(n*n+i*i+o*o);return a<5&&(a=5),V=-a/1.9,U=a/2,this},this.center=function(e,t,r){var n,i;t=void 0!==t?t:0;var o=xe(e=e||{}),a=$3Dmol.getExtent(o);$.isEmptyObject(e)?($.each(p,function(e,t){if(t&&t.boundingSphere&&t.boundingSphere.center){var r=t.boundingSphere.center,n=t.boundingSphere.radius;n>0?(o.push(new $3Dmol.Vector3(r.x+n,r.y,r.z)),o.push(new $3Dmol.Vector3(r.x-n,r.y,r.z)),o.push(new $3Dmol.Vector3(r.x,r.y+n,r.z)),o.push(new $3Dmol.Vector3(r.x,r.y-n,r.z)),o.push(new $3Dmol.Vector3(r.x,r.y,r.z+n)),o.push(new $3Dmol.Vector3(r.x,r.y,r.z-n))):o.push(r)}}),a=$3Dmol.getExtent(o),n=o,i=a):(n=xe({}),i=$3Dmol.getExtent(n));var s=new $3Dmol.Vector3(a[2][0],a[2][1],a[2][2]),l=i[1][0]-i[0][0],c=i[1][1]-i[0][1],u=i[1][2]-i[0][2],h=Math.sqrt(l*l+c*c+u*u);h<5&&(h=5),V=-h/1.9,U=h/2,l=a[1][0]-a[0][0],c=a[1][1]-a[0][1],u=a[1][2]-a[0][2],(h=Math.sqrt(l*l+c*c+u*u))<5&&(h=5);for(var f=25,d=0;d<o.length;d++)if(o[d]){var m=s.distanceToSquared(o[d]);m>f&&(f=m)}h=2*Math.sqrt(f);var v=s.clone().multiplyScalar(-1);return t>0?ye(t,r,v,N.position.z,N.quaternion,I):(B.position=v,ie()),this},this.zoomTo=function(e,t,r){var n,i;t=void 0!==t?t:0;var o=xe(e=e||{}),a=$3Dmol.getExtent(o);$.isEmptyObject(e)?($.each(p,function(e,t){if(t&&t.boundingSphere&&t.boundingSphere.center){var r=t.boundingSphere.center,n=t.boundingSphere.radius;n>0?(o.push(new $3Dmol.Vector3(r.x+n,r.y,r.z)),o.push(new $3Dmol.Vector3(r.x-n,r.y,r.z)),o.push(new $3Dmol.Vector3(r.x,r.y+n,r.z)),o.push(new $3Dmol.Vector3(r.x,r.y-n,r.z)),o.push(new $3Dmol.Vector3(r.x,r.y,r.z+n)),o.push(new $3Dmol.Vector3(r.x,r.y,r.z-n))):o.push(r)}}),a=$3Dmol.getExtent(o),n=o,i=a):(n=xe({}),i=$3Dmol.getExtent(n));var s=new $3Dmol.Vector3(a[2][0],a[2][1],a[2][2]),l=i[1][0]-i[0][0],c=i[1][1]-i[0][1],u=i[1][2]-i[0][2],h=Math.sqrt(l*l+c*c+u*u);h<5&&(h=5),V=-h/1.9,U=h/2,0===Object.keys(e).length&&(V=-999999,U=999999),l=a[1][0]-a[0][0],c=a[1][1]-a[0][1],u=a[1][2]-a[0][2],(h=Math.sqrt(l*l+c*c+u*u))<5&&(h=5);for(var f=25,d=0;d<o.length;d++)if(o[d]){var m=s.distanceToSquared(o[d]);m>f&&(f=m)}h=2*Math.sqrt(f);var v=s.clone().multiplyScalar(-1),g=-(.5*h/Math.tan(Math.PI/180*k.fov/2)-150);return g=ue(g),t>0?ye(t,r,v,g,N.quaternion,I):(B.position=v,N.position.z=g,ie()),this},this.setSlab=function(e,t){V=e,U=t},this.getSlab=function(){return{near:V,far:U}},this.addLabel=function(e,t,r,n){if(t=t||{},r){var i=$3Dmol.getExtent(xe(r));t.position={x:i[2][0],y:i[2][1],z:i[2][2]}}var o=new $3Dmol.Label(e,t);return o.setContext(),B.add(o.sprite),t.fixed&&v.push(m.length),m.push(o),n||ie(),o},this.addResLabels=function(e,t,r){let n=m.length;return Ce("addResLabels",e,this,t,r),ie(),m.slice(n)},this.addPropertyLabels=function(e,t,r){return Ce("addPropertyLabels",e,t,this,r),ie(),this},this.removeLabel=function(e){for(var t=0;t<m.length;t++)if(m[t]==e){m.splice(t,1),e.dispose(),B.remove(e.sprite);break}return ie(),this},this.removeAllLabels=function(){for(var e=0;e<m.length;e++)m[e]&&m[e].sprite&&B.remove(m[e].sprite);return m.splice(0,m.length),ie(),this},this.setLabelStyle=function(e,t){return B.remove(e.sprite),e.dispose(),e.stylespec=t,e.setContext(),B.add(e.sprite),ie(),e},this.setLabelText=function(e,t){return B.remove(e.sprite),e.dispose(),e.text=t,e.setContext(),B.add(e.sprite),ie(),e},this.addShape=function(e){e=e||{};var t=new $3Dmol.GLShape(e);return t.shapePosition=p.length,p.push(t),t},this.removeShape=function(e){if(!e)return this;for(e.removegl(B),delete p[e.shapePosition];p.length>0&&void 0===p[p.length-1];)p.pop();return this},this.removeAllShapes=function(){for(var e=0;e<p.length;e++){var t=p[e];t&&t.removegl(B)}return p.splice(0,p.length),this};var De=function(e){if(e.hasOwnProperty("x")&&e.hasOwnProperty("y")&&e.hasOwnProperty("z"))return e;var t=xe(e);if(0==t.length)return{x:0,y:0,z:0};var r=$3Dmol.getExtent(t);return{x:r[0][0]+(r[1][0]-r[0][0])/2,y:r[0][1]+(r[1][1]-r[0][1])/2,z:r[0][2]+(r[1][2]-r[0][2])/2}};function Ce(e,t,r,n,i,o,a){for(var s=be(t),l=0;l<s.length;l++)s[l][e](t,r,n,i,o,a)}this.addSphere=function(e){(e=e||{}).center=De(e.center);var t=new $3Dmol.GLShape(e);return t.shapePosition=p.length,t.addSphere(e),p.push(t),t.finalize(),t},this.addBox=function(e){null!=(e=e||{}).corner&&(e.corner=De(e.corner)),null!=e.center&&(e.center=De(e.center));var t=new $3Dmol.GLShape(e);return t.shapePosition=p.length,t.addBox(e),p.push(t),t.finalize(),t},this.addArrow=function(e){(e=e||{}).start=De(e.start),e.end=De(e.end);var t=new $3Dmol.GLShape(e);return t.shapePosition=p.length,t.addArrow(e),p.push(t),t.finalize(),t},this.addCylinder=function(e){(e=e||{}).start=De(e.start),e.end=De(e.end);var t=new $3Dmol.GLShape(e);return t.shapePosition=p.length,e.dashed?t.addDashedCylinder(e):t.addCylinder(e),p.push(t),t.finalize(),t},this.addCurve=function(e){e=e||{};var t=new $3Dmol.GLShape(e);return t.shapePosition=p.length,t.addCurve(e),p.push(t),t.finalize(),t},this.addLine=function(e){(e=e||{}).start=De(e.start),e.end=De(e.end),e.wireframe=!0;var t=new $3Dmol.GLShape(e);return t.shapePosition=p.length,e.dashed?t=function(e,t){e.dashLength=e.dashLength||.5,e.gapLength=e.gapLength||.5,e.start=e.start||{},e.end=e.end||{};var r,n,i,o=new $3Dmol.Vector3(e.start.x||0,e.start.y||0,e.start.z||0),a=new $3Dmol.Vector3(e.end.x,e.end.y||0,e.end.z||0),s=new $3Dmol.Vector3,l=new $3Dmol.Vector3,c=new $3Dmol.Vector3,u=o.clone(),h=0;for(s.subVectors(a,o),r=s.length(),s.normalize(),l=s.clone(),c=s.clone(),l.multiplyScalar(e.dashLength),c.multiplyScalar(e.gapLength),n=l.length(),i=c.length();h<r;){if(h+n>r){e.start=o,e.end=a,t.addLine(e);break}u.addVectors(o,l),e.start=o,e.end=u,t.addLine(e),o=u.clone(),h+=n,u.addVectors(o,c),o=u.clone(),h+=i}return t.finalize(),t}(e,t):t.addLine(e),p.push(t),t.finalize(),t},this.addUnitCell=function(e){e||(e=this.getModel());var t=new $3Dmol.GLShape({wireframe:!0});t.shapePosition=p.length;var r=e.getCrystData(),n=null;if(r){if(r.matrix)n=r.matrix;else{var i,o,a,s=r.a,l=r.b,c=r.c,u=r.alpha,h=r.beta,f=r.gamma;u=u*Math.PI/180,h=h*Math.PI/180,f=f*Math.PI/180,i=Math.cos(h),o=(Math.cos(u)-Math.cos(h)*Math.cos(f))/Math.sin(f),a=Math.sqrt(Math.max(0,1-i*i-o*o)),n=new $3Dmol.Matrix4(s,l*Math.cos(f),c*i,0,0,l*Math.sin(f),c*o,0,0,0,c*a,0,0,0,0,1)}for(var d=[new $3Dmol.Vector3(0,0,0),new $3Dmol.Vector3(1,0,0),new $3Dmol.Vector3(0,1,0),new $3Dmol.Vector3(0,0,1),new $3Dmol.Vector3(1,1,0),new $3Dmol.Vector3(0,1,1),new $3Dmol.Vector3(1,0,1),new $3Dmol.Vector3(1,1,1)],m=0;m<d.length;m++)d[m]=d[m].applyMatrix4(n);t.addLine({start:d[0],end:d[1]}),t.addLine({start:d[0],end:d[2]}),t.addLine({start:d[1],end:d[4]}),t.addLine({start:d[2],end:d[4]}),t.addLine({start:d[0],end:d[3]}),t.addLine({start:d[3],end:d[5]}),t.addLine({start:d[2],end:d[5]}),t.addLine({start:d[1],end:d[6]}),t.addLine({start:d[4],end:d[7]}),t.addLine({start:d[6],end:d[7]}),t.addLine({start:d[3],end:d[6]}),t.addLine({start:d[5],end:d[7]})}return p.push(t),t.finalize(),t},this.addCustom=function(e){e=e||{};var t=new $3Dmol.GLShape(e);return t.shapePosition=p.length,t.addCustom(e),p.push(t),t.finalize(),t},this.addVolumetricData=function(e,t,r){r=r||{};var n=new $3Dmol.GLShape(r);return n.shapePosition=p.length,n.addVolumetricData(e,t,r),p.push(n),n},this.addIsosurface=function(e,t,r){t=t||{};var n=new $3Dmol.GLShape(t);return n.shapePosition=p.length,n.addIsosurface(e,t,r),p.push(n),n},this.enableFog=function(e){e?R.fog=new $3Dmol.Fog(s,100,200):(n.disableFog=!0,ie())},this.setFrame=function(e){return w=e,new Promise(function(t){var r=f.map(function(t){return t.setFrame(e)});Promise.all(r).then(function(){t()})})},this.getFrame=function(){return w},this.getNumFrames=function(){var e=0;for(let t=0;t<f.length;t++)f[t].getNumFrames()>e&&(e=f[t].getNumFrames());for(let t=0;t<p.length;t++)p[t].frame&&p[t].frame>=e&&(e=p[t].frame+1);for(let t=0;t<m.length;t++)m[t].frame&&m[t].frame>=e&&(e=m[t].frame+1);return e},this.animate=function(e){te();var t=100,r="forward",n=0;(e=e||{}).interval&&(t=e.interval),e.loop&&(r=e.loop),e.reps&&(n=e.reps);var i=this.getNumFrames(),o=this,a=0,s=1;e.step&&(n/=s=e.step);var l,c,u=0,h=i*n,f=new Date,d=function(e){f=new Date,"forward"==e?o.setFrame(a).then(function(){a=(a+s)%i,l()}):"backward"==e?o.setFrame(i-1-a).then(function(){a=(a+s)%i,l()}):o.setFrame(a).then(function(){s*=(a+=s)%(i-1)==0?-1:1,l()})};return l=function(){if(o.render(),++u!=h&&o.isAnimated()){var e=t-(new Date-f);e=e>0?e:0,setTimeout(d,e,r)}else clearTimeout(c),ee()},c=setTimeout(d,0,r),this},this.stopAnimate=function(){return q=0,this},this.isAnimated=function(){return q>0},this.addModel=function(e,t,r){r&&!r.defaultcolors&&(r.defaultcolors=o);var n=new $3Dmol.GLModel(f.length,r);return n.addMolData(e,t,r),f.push(n),n},this.addModels=function(e,t,r){(r=r||{}).multimodel=!0,r.frames=!0;for(var n=$3Dmol.GLModel.parseMolData(e,t,r),i=0;i<n.length;i++){var a=new $3Dmol.GLModel(f.length,o);a.setAtomDefaults(n[i]),a.addFrame(n[i]),a.setFrame(0),n.modelData&&a.setModelData(n.modelData[i]),a.setDontDuplicateAtoms(!r.duplicateAssemblyAtoms),f.push(a)}return f},this.addModelsAsFrames=function(e,t,r){(r=r||{}).multimodel=!0,r.frames=!0;var n=new $3Dmol.GLModel(f.length,o);return n.addMolData(e,t,r),f.push(n),n},this.addAsOneMolecule=function(e,t,r){(r=r||{}).multimodel=!0,r.onemol=!0;var n=new $3Dmol.GLModel(f.length,o);return n.addMolData(e,t,r),f.push(n),n},this.removeModel=function(e){if(e){for(e.removegl(B),delete f[e.getID()];f.length>0&&void 0===f[f.length-1];)f.pop();return this}},this.removeAllModels=function(){for(var e=0;e<f.length;e++){var t=f[e];t&&t.removegl(B)}return f.splice(0,f.length),this},this.exportJSON=function(e,t){var r={};return r.m=void 0===t?f.map(function(t){return t.toCDObject(e)}):[f[t].toCDObject()],JSON.stringify(r)},this.exportVRML=function(){var e=B;Ce("removegl",B),B=new $3Dmol.Object3D,this.render(null,{supportsImposters:!1,supportsAIA:!1,regen:!0});var t="#VRML V2.0 utf8\n"+B.vrml()+"\n";return Ce("removegl",B),B=e,t},this.createModelFrom=function(e,t){for(var r=new $3Dmol.GLModel(f.length,o),n=0;n<f.length;n++)if(f[n]){var i=f[n].selectedAtoms(e);r.addAtoms(i),t&&f[n].removeAtoms(i)}return f.push(r),r},this.setStyle=function(e,t){return void 0===t&&(t=e,e={}),Ce("setStyle",e,t,!1),this},this.addStyle=function(e,t){return void 0===t&&(t=e,e={}),Ce("setStyle",e,t,!0),this},this.setClickable=function(e,t,r){return Ce("setClickable",e,t,r),this},this.setHoverable=function(e,t,r,n){return Ce("setHoverable",e,t,r,n),this},this.vibrate=function(e,t,r,n){return Ce("vibrate",e,t,r,this,n),this},this.setColorByProperty=function(e,t,r,n){return Ce("setColorByProperty",e,t,r,n),this},this.setColorByElement=function(e,t){return Ce("setColorByElement",e,t),this};var Ae=function(e,t){for(var r=[],n=0;n<e.length;n++){var i=e[n];void 0!==i&&(i.x<t[0][0]||i.x>t[1][0]||i.y<t[0][1]||i.y>t[1][1]||i.z<t[0][2]||i.z>t[1][2]||r.push(i))}return r},$e=function(e){return(e[1][0]-e[0][0])*(e[1][1]-e[0][1])*(e[1][2]-e[0][2])},Se=function(e,t,r){var n=new $3Dmol.Geometry(!0),i=n.updateGeoGroup(0),o=[];for(let t=0,r=e.length;t<r;t++){var a=e[t];a&&(void 0!==a.surfaceColor?o[t]=a.surfaceColor:a.color&&(o[t]=$3Dmol.CC.color(a.color)))}var s=i.vertexArray,l=t.vertices;for(let e=0,t=l.length;e<t;e++){let t=3*i.vertices;s[t]=l[e].x,s[t+1]=l[e].y,s[t+2]=l[e].z,i.vertices++}var c=i.colorArray;if(r.voldata&&r.volscheme){var u=r.volscheme,h=r.voldata,f=u.range()||[-1,1];for(let e=0,t=l.length;e<t;e++){let t=h.getVal(l[e].x,l[e].y,l[e].z),r=$3Dmol.CC.color(u.valueToHex(t,f)),n=3*e;c[n]=r.r,c[n+1]=r.g,c[n+2]=r.b}}else if(o.length>0)for(let e=0,t=l.length;e<t;e++){let t=l[e].atomid,r=3*e;c[r]=o[t].r,c[r+1]=o[t].g,c[r+2]=o[t].b}var d=t.faces;i.faceidx=d.length,n.initTypedArrays();var p,m,v,g,y=i.vertexArray,b=i.normalArray;for(let e=0,t=d.length;e<t;e+=3){var x=3*d[e],w=3*d[e+1],D=3*d[e+2];p=new $3Dmol.Vector3(y[x],y[x+1],y[x+2]),m=new $3Dmol.Vector3(y[w],y[w+1],y[w+2]),(v=new $3Dmol.Vector3(y[D],y[D+1],y[D+2])).subVectors(v,m),p.subVectors(p,m),v.cross(p),(g=v).normalize(),b[x]+=g.x,b[w]+=g.x,b[D]+=g.x,b[x+1]+=g.y,b[w+1]+=g.y,b[D+1]+=g.y,b[x+2]+=g.z,b[w+2]+=g.z,b[D+2]+=g.z}i.faceArray=new Uint16Array(d);var C=new $3Dmol.Mesh(n,r);return C.doubleSided=!0,C};function Me(e){var t=new $3Dmol.MeshLambertMaterial;for(var r in t.vertexColors=$3Dmol.VertexColors,e)"color"===r||"map"===r||e.hasOwnProperty(r)&&(t[r]=e[r]);return void 0!==e.opacity&&(1===e.opacity?t.transparent=!1:t.transparent=!0),t}this.addMesh=function(e){var t={geo:e.geometry,mat:e.material,done:!0,finished:!1},r=re();return d[r]=t,r};var _e=function(e){var t=[];return $.each(e,function(e,r){t[e]=$.extend({},r)}),t},ze={VDW:$3Dmol.SurfaceType.VDW,MS:$3Dmol.SurfaceType.MS,SAS:$3Dmol.SurfaceType.SAS,SES:$3Dmol.SurfaceType.SES};this.addSurface=function(r,n,i,o,a,s){var l=re(),u=null;"string"==typeof r?void 0!==ze[r]?r=ze[r]:console.log("Surface type : "+r+" is not recognized"):void 0===r&&(r=$3Dmol.SurfaceType.VDW);var h=null,p=null,m=_e(xe(i));h=o?_e(xe(o)):m;var v,g=!1;for(v=0;v<f.length;v++)if(f[v]){var y=f[v].getSymmetries();if(y.length>1||1==y.length&&!y[0].isIdentity()){g=!0;break}}var b=function(i,o,s){var h;p=a?_e(xe(a)):s;var f=$3Dmol.getExtent(s,!0);if(n.map&&n.map.prop){var d=n.map.prop,m=n.map.scheme||n.map.gradient||new $3Dmol.Gradient.RWB,v=m.range();v||(v=$3Dmol.getPropertyRange(s,d)),n.colorscheme={prop:d,gradient:m}}for(let e=0,t=o.length;e<t;e++)(h=o[e]).surfaceColor=$3Dmol.getColorFromStyle(h,n);var g=$e(f),y=function(e,r,n){for(var i=[],o={},a=0,s=r.length;a<s;a++)o[r[a].index]=a;var l=function(e){for(var t=[],r=0,n=e.length;r<n;r++)e[r].index in o&&t.push(o[e[r].index]);return t},c=function(e){var t=[];return t[0]=[e[0][0],e[0][1],e[0][2]],t[1]=[e[1][0],e[1][1],e[1][2]],t},u=function(e){if($e(e)<t)return[e];var r,n=e[1][0]-e[0][0],i=e[1][1]-e[0][1],o=e[1][2]-e[0][2];r=n>i&&n>o?0:i>n&&i>o?1:2;var a=c(e),s=c(e),l=(e[1][r]-e[0][r])/2+e[0][r];a[1][r]=l,s[0][r]=l;var h=u(a),f=u(s);return h.concat(f)},h=u(e);for(let e=0,t=h.length;e<t;e++){let t=c(h[e]);t[0][0]-=6,t[0][1]-=6,t[0][2]-=6,t[1][0]+=6,t[1][1]+=6,t[1][2]+=6;var f=Ae(r,t),d=Ae(n,h[e]);i.push({extent:h[e],atoms:l(f),toshow:l(d)})}return i}(f,o,s);if(p&&p.length&&p.length>0){var b=$3Dmol.getExtent(p,!0);y.sort(function(e,t){var r=function(e,t){var r=e.extent,n=r[1][0]-r[0][0],i=r[1][1]-r[0][1],o=r[1][2]-r[0][2],a=n-t[2][0];a*=a;var s=i-t[2][1];s*=s;var l=o-t[2][2];return a+s+(l*=l)};return r(e,b)-r(t,b)})}var x=[];for(let e=0,t=o.length;e<t;e++)h=o[e],x[e]={x:h.x,y:h.y,z:h.z,serial:e,elem:h.elem};if($3Dmol.syncSurface){var w=function(e){return new Promise(function(t){for(var n=function(e,t,r,n,i,o){var a=new $3Dmol.ProteinSurface;return a.initparm(t,1!==e,o),a.fillvoxels(i,r),a.buildboundary(),e!=$3Dmol.SurfaceType.SES&&e!=$3Dmol.SurfaceType.MS||(a.fastdistancemap(),a.boundingatom(!1),a.fillvoxelswaals(i,r)),a.marchingcube(e),a.getFacesAndVertices(n)}(r,y[e].extent,y[e].atoms,y[e].toshow,x,g),a=$3Dmol.splitMesh({vertexArr:n.vertices,faceArr:n.faces}),s=0,l=a.length;s<l;s++){n={vertices:a[s].vertexArr,faces:a[s].faceArr};var h=Se(o,n,u);$3Dmol.mergeGeos(i.geo,h)}c.render(),t()})},D=[];for(let e=0;e<y.length;e++)D.push(w(e));return Promise.all(D).then(function(){return i.done=!0,Promise.resolve(l)})}var C=[];r<0&&(r=0);for(let t=0,r=e;t<r;t++){var A=new Worker($3Dmol.SurfaceWorker);C.push(A),A.postMessage({type:-1,atoms:x,volume:g})}return new Promise(function(e,t){var n=0,a=function(t){for(var r=$3Dmol.splitMesh({vertexArr:t.data.vertices,faceArr:t.data.faces}),a=0,s=r.length;a<s;a++){var h={vertices:r[a].vertexArr,faces:r[a].faceArr},f=Se(o,h,u);$3Dmol.mergeGeos(i.geo,f)}c.render(),++n==y.length&&(i.done=!0,e(l))},s=function(e){console.log(e.message+" ("+e.filename+":"+e.lineno+")"),t(e)};for(let e=0;e<y.length;e++){var h=C[e%C.length];h.onmessage=a,h.onerror=s,h.postMessage({type:r,expandedExtent:y[e].extent,extendedAtoms:y[e].atoms,atomsToShow:y[e].toshow})}})};u=Me(n=n||{});var x=[],w=null;if(g){var D={},C={};for(v=0;v<f.length;v++)D[v]=[],C[v]=[];for(v=0;v<h.length;v++)D[h[v].model].push(h[v]);for(v=0;v<m.length;v++)C[m[v].model].push(m[v]);var A=[];for(v=0;v<f.length;v++)C[v].length>0&&(x.push({geo:new $3Dmol.Geometry(!0),mat:u,done:!1,finished:!1,symmetries:f[v].getSymmetries()}),A.append(b(x[v],D[v],C[v])));w=Promise.all(A)}else x.push({geo:new $3Dmol.Geometry(!0),mat:u,done:!1,finished:!1,symmetries:[new $3Dmol.Matrix4]}),w=b(x[x.length-1],h,m);return d[l]=x,w.surfid=l,s&&"function"==typeof s?(w.then(function(e){s(e)}),l):w},this.setSurfaceMaterialStyle=function(e,t){if(d[e])for(var r=d[e],n=0;n<r.length;n++){var i=r[n].mat=Me(t);if(r[n].mat.side=$3Dmol.FrontSide,t.color){r[n].mat.color=t.color,r[n].geo.colorsNeedUpdate=!0;const e=$3Dmol.CC.color(t.color);r[n].geo.setColors(function(){return e})}else if(i.voldata&&i.volscheme){const e=i.volscheme,t=i.voldata,o=$3Dmol.CC,a=e.range()||[-1,1];r[n].geo.setColors(function(r,n,i){let s=t.getVal(r,n,i);return o.color(e.valueToHex(s,a))})}r[n].finished=!1}return this},this.removeSurface=function(e){for(var t=d[e],r=0;r<t.length;r++)t[r]&&t[r].lastGL&&(void 0!==t[r].geo&&t[r].geo.dispose(),void 0!==t[r].mat&&t[r].mat.dispose(),B.remove(t[r].lastGL));return delete d[e],ie(),this},this.removeAllSurfaces=function(){for(var e in d)if(d.hasOwnProperty(e)){for(var t=d[e],r=0;r<t.length;r++)t[r]&&t[r].lastGL&&(void 0!==t[r].geo&&t[r].geo.dispose(),void 0!==t[r].mat&&t[r].mat.dispose(),B.remove(t[r].lastGL));delete d[e]}return ie(),this},this.jmolMoveTo=function(){var e=B.position,t="center { "+-e.x+" "+-e.y+" "+-e.z+" }; ",r=N.quaternion;return t+="moveto .5 quaternion { "+r.x+" "+r.y+" "+r.z+" "+r.w+" };"},this.clear=function(){return this.removeAllSurfaces(),this.removeAllModels(),this.removeAllLabels(),this.removeAllShapes(),ie(),this},this.mapAtomProperties=function(e,t){var r=xe(t=t||{});if("function"==typeof e)for(let t=0,n=r.length;t<n;t++)e(r[t]);else for(let t=0,o=r.length;t<o;t++){var n=r[t];for(let t=0,r=e.length;t<r;t++){let r=e[t];if(r.props)for(var i in r.props)r.props.hasOwnProperty(i)&&we(n,r)&&(n.properties||(n.properties={}),n.properties[i]=r.props[i])}}return this},this.linkViewer=function(e){return A.push(e),this};try{"function"==typeof i&&i(this)}catch(e){console.log("error with glviewer callback: "+e)}this.getPerceivedDistance=function(){return 150-N.position.z},this.setPerceivedDistance=function(e){N.position.z=150-e},this.setAutoEyeSeparation=function(e){var t=this.getPerceivedDistance();return e||k.position.x>0?k.position.x=t*Math.tan(Math.PI/180*5):k.position.x=-t*Math.tan(Math.PI/180*5),k.lookAt(new $3Dmol.Vector3(0,0,N.position.z)),k.position.x}}}(),$3Dmol.glmolViewer=$3Dmol.GLViewer;var $3Dmol=$3Dmol||{};$3Dmol.Gradient=function(){},$3Dmol.Gradient.valueToHex=function(){},$3Dmol.Gradient.range=function(){},$3Dmol.Gradient.normalizeValue=function(e,t,r){return t>=e?(r<e&&(r=e),r>t&&(r=t),{lo:e,hi:t,val:r}):(r>e&&(r=e),r<t&&(r=t),{lo:t,hi:e,val:r=e-r+t})},$3Dmol.Gradient.RWB=function(e,t,r){void 0===t&&$.isArray(e)&&e.length>=2&&(t=e[1],e=e[0]),this.valueToHex=function(n,i){var o,a;if(n*=1,i?(o=i[0],a=i[1]):(o=e,a=t),void 0===n)return 16777215;var s=$3Dmol.Gradient.normalizeValue(o,a,n);o=s.lo;var l,c=((a=s.hi)+o)/2;return(n=s.val)<=(c=i&&void 0!==i[2]?i[2]:void 0!==r?r:(o+a)/2)?16711680+256*(l=Math.floor(255*Math.sqrt((n-o)/(c-o))))+l:65536*(l=Math.floor(255*Math.sqrt(1-(n-c)/(a-c))))+256*l+255},this.range=function(){return void 0!==e&&void 0!==t?[e,t]:null}},$3Dmol.Gradient.ROYGB=function(e,t){void 0===t&&$.isArray(e)&&e.length>=2&&(t=e[1],e=e[0]),this.valueToHex=function(r,n){var i,o;if(r*=1,n?(i=n[0],o=n[1]):(i=e,o=t),void 0===r)return 16777215;var a=$3Dmol.Gradient.normalizeValue(i,o,r),s=((i=a.lo)+(o=a.hi))/2,l=(i+s)/2,c=(s+o)/2;return(r=a.val)<l?16711680+256*Math.floor(255*Math.sqrt((r-i)/(l-i)))+0:r<s?65536*Math.floor(255*Math.sqrt(1-(r-l)/(s-l)))+65280+0:r<c?65280+1*Math.floor(255*Math.sqrt((r-s)/(c-s))):0+256*Math.floor(255*Math.sqrt(1-(r-c)/(o-c)))+255},this.range=function(){return void 0!==e&&void 0!==t?[e,t]:null}},$3Dmol.Gradient.Sinebow=function(e,t){var r=1;void 0===t&&$.isArray(e)&&e.length>=2&&(t=e[1],e=e[0]),t<e&&(r=-1,e*=-1,t*=-1),this.valueToHex=function(n,i){var o,a;if(n*=r,i?(o=i[0],a=i[1]):(o=e,a=t),void 0===n)return 16777215;var s=$3Dmol.Gradient.normalizeValue(o,a,n);o=s.lo,a=s.hi;var l=5*(((n=s.val)-o)/(a-o))/6+.5,c=Math.sin(Math.PI*l);c*=255*c;var u=Math.sin(Math.PI*(l+1/3));u*=255*u;var h=Math.sin(Math.PI*(l+2/3));return h*=255*h,65536*Math.floor(c)+256*Math.floor(h)+1*Math.floor(u)},this.range=function(){return void 0!==e&&void 0!==t?[e,t]:null}},$3Dmol.Gradient.builtinGradients={rwb:$3Dmol.Gradient.RWB,roygb:$3Dmol.Gradient.ROYGB,sinebow:$3Dmol.Gradient.Sinebow},$3Dmol.LabelCount=0,$3Dmol.Label=function(e,t){this.id=$3Dmol.LabelCount++,this.stylespec=t||{},this.canvas=document.createElement("canvas"),this.canvas.width=134,this.canvas.height=35,this.context=this.canvas.getContext("2d"),this.sprite=new $3Dmol.Sprite,this.text=e,this.frame=this.stylespec.frame},$3Dmol.Label.prototype={constructor:$3Dmol.Label,getStyle:function(){return this.stylespec},setContext:function(){var e=function(e,t,r){var n=r;return void 0!==e&&(n=e instanceof $3Dmol.Color?e.scaled():$3Dmol.CC.color(e).scaled()),void 0!==t&&(n.a=parseFloat(t)),n};return function(){var t=this.stylespec,r=void 0!==t.useScreen&&t.useScreen,n=t.showBackground;"0"!==n&&"false"!==n||(n=!1),void 0===n&&(n=!0);var i=t.font?t.font:"sans-serif",o=parseInt(t.fontSize)?parseInt(t.fontSize):18,a=e(t.fontColor,t.fontOpacity,{r:255,g:255,b:255,a:1}),s=t.padding?t.padding:4,l=t.borderThickness?t.borderThickness:0,c=e(t.backgroundColor,t.backgroundOpacity,{r:0,g:0,b:0,a:1}),u=e(t.borderColor,t.borderOpacity,c),h=t.position?t.position:{x:-10,y:1,z:1},f=void 0===t.inFront||t.inFront;"false"!==f&&"0"!==f||(f=!1);var d=t.alignment||$3Dmol.SpriteAlignment.topLeft;"string"==typeof d&&d in $3Dmol.SpriteAlignment&&(d=$3Dmol.SpriteAlignment[d]);var p="";t.bold&&(p="bold "),this.context.font=p+o+"px  "+i;var m=this.context.measureText(this.text).width;n||(l=0);var v=m+2.5*l+2*s,g=1.25*o+2*l+2*s;if(t.backgroundImage){var y=t.backgroundImage,b=t.backgroundWidth?t.backgroundWidth:y.width,x=t.backgroundHeight?t.backgroundHeight:y.height;b>v&&(v=b),x>g&&(g=x)}if(this.canvas.width=v,this.canvas.height=g,this.context.clearRect(0,0,this.canvas.width,this.canvas.height),p="",t.bold&&(p="bold "),this.context.font=p+o+"px  "+i,this.context.fillStyle="rgba("+c.r+","+c.g+","+c.b+","+c.a+")",this.context.strokeStyle="rgba("+u.r+","+u.g+","+u.b+","+u.a+")",this.context.lineWidth=l,n&&function(e,t,r,n,i,o,a){e.beginPath(),e.moveTo(t+o,r),e.lineTo(t+n-o,r),e.quadraticCurveTo(t+n,r,t+n,r+o),e.lineTo(t+n,r+i-o),e.quadraticCurveTo(t+n,r+i,t+n-o,r+i),e.lineTo(t+o,r+i),e.quadraticCurveTo(t,r+i,t,r+i-o),e.lineTo(t,r+o),e.quadraticCurveTo(t,r,t+o,r),e.closePath(),e.fill(),a&&e.stroke()}(this.context,l,l,v-2*l,g-2*l,6,l>0),t.backgroundImage){let e=t.backgroundImage,r=t.backgroundWidth?t.backgroundWidth:e.width,n=t.backgroundHeight?t.backgroundHeight:e.height;this.context.drawImage(e,0,0,r,n)}this.context.fillStyle="rgba("+a.r+","+a.g+","+a.b+","+a.a+")",this.context.fillText(this.text,l+s,o+l+s,m);var w=new $3Dmol.Texture(this.canvas);w.needsUpdate=!0,this.sprite.material=new $3Dmol.SpriteMaterial({map:w,useScreenCoordinates:r,alignment:d,depthTest:!f}),this.sprite.scale.set(1,1,1),this.sprite.position.set(h.x,h.y,h.z)}}(),dispose:function(){void 0!==this.sprite.material.map&&this.sprite.material.map.dispose(),void 0!==this.sprite.material&&this.sprite.material.dispose()}},$3Dmol=$3Dmol||{},$3Dmol.MarchingCubeInitializer=function(){var e,t,r,n,i={};return i.march=function(i,o,a,s){var l=!!s.fulltable,c=s.hasOwnProperty("origin")&&s.origin.hasOwnProperty("x")?s.origin:{x:0,y:0,z:0},u=!!s.voxel,h=s.matrix,f=s.nX||0,d=s.nY||0,p=s.nZ||0,m=s.scale||1,v=null;v=s.unitCube?s.unitCube:{x:m,y:m,z:m};var g,y,b=new Int32Array(f*d*p);for(g=0,y=b.length;g<y;++g)b[g]=-1;var x=function(e,t,r,n,i,a){var s={x:0,y:0,z:0},l=i;!!!(n&1<<i)&&!!(n&1<<a)&&(l=a),1&l&&r++,2&l&&t++,4&l&&e++,h?s={x:(s=(s=new $3Dmol.Vector3(e,t,r)).applyMatrix4(h)).x,y:s.y,z:s.z}:(s.x=c.x+v.x*e,s.y=c.y+v.y*t,s.z=c.z+v.z*r);var f=(d*e+t)*p+r;return u?(o.push(s),o.length-1):(b[f]<0&&(b[f]=o.length,o.push(s)),b[f])},w=new Int32Array(12),D=l?t:e,C=l?n:r;for(g=0;g<f-1;++g)for(var A=0;A<d-1;++A)for(var $=0;$<p-1;++$){for(var S=0,M=0;M<8;++M){S|=!!(2&i[(d*(g+((4&M)>>2))+A+((2&M)>>1))*p+$+(1&M)])<<M}if(0!==S&&255!==S){var _=D[S];if(0!==_){var z=C[S];1&_&&(w[0]=x(g,A,$,S,0,1)),2&_&&(w[1]=x(g,A,$,S,1,3)),4&_&&(w[2]=x(g,A,$,S,3,2)),8&_&&(w[3]=x(g,A,$,S,2,0)),16&_&&(w[4]=x(g,A,$,S,4,5)),32&_&&(w[5]=x(g,A,$,S,5,7)),64&_&&(w[6]=x(g,A,$,S,7,6)),128&_&&(w[7]=x(g,A,$,S,6,4)),256&_&&(w[8]=x(g,A,$,S,0,4)),512&_&&(w[9]=x(g,A,$,S,1,5)),1024&_&&(w[10]=x(g,A,$,S,3,7)),2048&_&&(w[11]=x(g,A,$,S,2,6));for(var T=0;T<z.length;T+=3){var L=w[z[T]],E=w[z[T+1]],F=w[z[T+2]];u&&T>=3&&(o.push(o[L]),L=o.length-1,o.push(o[E]),E=o.length-1,o.push(o[F]),F=o.length-1),a.push(L),a.push(E),a.push(F)}}}}},i.laplacianSmooth=function(e,t,r){var n,i,o,a,s,l=new Array(t.length);for(n=0,i=t.length;n<i;n++)l[n]={x:0,y:0,z:0};var c,u=new Array(20);for(n=0;n<20;n++)u[n]=new Array(t.length);for(n=0,i=t.length;n<i;n++)u[0][n]=0;for(n=0,i=r.length/3;n<i;n++){var h=3*n,f=3*n+1,d=3*n+2;for(c=!0,o=0,a=u[0][r[h]];o<a;o++)if(r[f]==u[o+1][r[h]]){c=!1;break}for(c&&(u[0][r[h]]++,u[u[0][r[h]]][r[h]]=r[f]),c=!0,o=0,a=u[0][r[h]];o<a;o++)if(r[d]==u[o+1][r[h]]){c=!1;break}for(c&&(u[0][r[h]]++,u[u[0][r[h]]][r[h]]=r[d]),c=!0,o=0,a=u[0][r[f]];o<a;o++)if(r[h]==u[o+1][r[f]]){c=!1;break}for(c&&(u[0][r[f]]++,u[u[0][r[f]]][r[f]]=r[h]),c=!0,o=0,a=u[0][r[f]];o<a;o++)if(r[d]==u[o+1][r[f]]){c=!1;break}for(c&&(u[0][r[f]]++,u[u[0][r[f]]][r[f]]=r[d]),c=!0,o=0;o<u[0][r[d]];o++)if(r[h]==u[o+1][r[d]]){c=!1;break}for(c&&(u[0][r[d]]++,u[u[0][r[d]]][r[d]]=r[h]),c=!0,o=0,a=u[0][r[d]];o<a;o++)if(r[f]==u[o+1][r[d]]){c=!1;break}c&&(u[0][r[d]]++,u[u[0][r[d]]][r[d]]=r[f])}for(s=0;s<e;s++){for(n=0,i=t.length;n<i;n++)if(u[0][n]<3)l[n].x=t[n].x,l[n].y=t[n].y,l[n].z=t[n].z;else if(3==u[0][n]||4==u[0][n]){for(l[n].x=0,l[n].y=0,l[n].z=0,o=0,a=u[0][n];o<a;o++)l[n].x+=t[u[o+1][n]].x,l[n].y+=t[u[o+1][n]].y,l[n].z+=t[u[o+1][n]].z;l[n].x+=.5*t[n].x,l[n].y+=.5*t[n].y,l[n].z+=.5*t[n].z,l[n].x/=.5+u[0][n],l[n].y/=.5+u[0][n],l[n].z/=.5+u[0][n]}else{for(l[n].x=0,l[n].y=0,l[n].z=0,o=0,a=u[0][n];o<a;o++)l[n].x+=t[u[o+1][n]].x,l[n].y+=t[u[o+1][n]].y,l[n].z+=t[u[o+1][n]].z;l[n].x+=1*t[n].x,l[n].y+=1*t[n].y,l[n].z+=1*t[n].z,l[n].x/=1+u[0][n],l[n].y/=1+u[0][n],l[n].z/=1+u[0][n]}for(n=0,i=t.length;n<i;n++)t[n].x=l[n].x,t[n].y=l[n].y,t[n].z=l[n].z}},i.edgeTable=[0,0,0,0,0,0,0,2816,0,0,0,1792,0,3328,3584,3840,0,0,0,138,0,21,0,134,0,0,0,652,0,2067,3865,3600,0,0,0,42,0,0,0,294,0,0,21,28,0,3875,1049,3360,0,168,162,170,0,645,2475,2210,0,687,293,172,4010,3747,3497,3232,0,0,0,0,0,69,0,900,0,0,0,1792,138,131,1608,1920,0,81,0,2074,84,85,84,86,0,81,0,3676,330,1105,1881,1616,0,0,0,42,0,69,0,502,0,0,21,3580,138,2035,1273,1520,2816,104,2337,106,840,581,367,102,2816,3695,3429,3180,1898,1635,1385,1120,0,0,0,0,0,0,0,3910,0,0,69,588,42,2083,41,2880,0,0,0,1722,0,2293,4095,3830,0,255,757,764,2538,2291,3065,2800,0,0,81,338,0,3925,1119,3414,84,855,85,340,2130,2899,89,2384,1792,712,194,1162,4036,3781,3535,3270,708,719,197,204,3018,2755,2505,2240,0,0,0,0,168,420,168,1958,162,162,676,2988,170,163,680,928,3328,3096,3328,3642,52,53,1855,1590,2340,2111,2869,2620,298,51,825,560,3584,3584,3090,3482,1668,1941,1183,1430,146,2975,2069,2460,154,915,153,400,3840,3592,3329,3082,1796,1541,1295,1030,2818,2575,2309,2060,778,515,265,0],e=new Uint32Array(i.edgeTable),r=i.triTable=[[],[],[],[],[],[],[],[11,9,8],[],[],[],[8,10,9],[],[10,8,11],[9,11,10],[8,10,9,8,11,10],[],[],[],[1,7,3],[],[4,2,0],[],[2,1,7],[],[],[],[2,7,3,2,9,7],[],[1,4,11,1,0,4],[3,8,0,11,9,4,11,10,9],[4,11,9,11,10,9],[],[],[],[5,3,1],[],[],[],[2,5,8,2,1,5],[],[],[2,4,0],[3,2,4],[],[0,9,1,8,10,5,8,11,10],[3,4,0,3,10,4],[5,8,10,8,11,10],[],[3,5,7],[7,1,5],[1,7,3,1,5,7],[],[9,2,0,9,7,2],[0,3,8,1,7,11,1,5,7],[11,1,7,1,5,7],[],[9,1,0,5,3,2,5,7,3],[8,2,5,8,0,2],[2,5,3,5,7,3],[3,9,1,3,8,9,7,11,10,7,10,5],[9,1,0,10,7,11,10,5,7],[3,8,0,7,10,5,7,11,10],[11,5,7,11,10,5],[],[],[],[],[],[0,6,2],[],[7,2,9,7,9,8],[],[],[],[8,10,9],[7,1,3],[7,1,0],[6,9,3,6,10,9],[7,10,8,10,9,8],[],[6,0,4],[],[11,1,4,11,3,1],[2,4,6],[2,0,4,2,4,6],[2,4,6],[1,4,2,4,6,2],[],[6,0,4],[],[2,11,3,6,9,4,6,10,9],[8,6,1,8,1,3],[10,0,6,0,4,6],[8,0,3,9,6,10,9,4,6],[10,4,6,10,9,4],[],[],[],[5,3,1],[],[0,6,2],[],[7,4,8,5,2,1,5,6,2],[],[],[2,4,0],[7,4,8,2,11,3,10,5,6],[7,1,3],[5,6,10,0,9,1,8,7,4],[5,6,10,7,0,3,7,4,0],[10,5,6,4,8,7],[9,11,8],[3,5,6],[0,5,11,0,11,8],[6,3,5,3,1,5],[3,9,6,3,8,9],[9,6,0,6,2,0],[0,3,8,2,5,6,2,1,5],[1,6,2,1,5,6],[9,11,8],[1,0,9,6,10,5,11,3,2],[6,10,5,2,8,0,2,11,8],[3,2,11,10,5,6],[10,5,6,9,3,8,9,1,3],[0,9,1,5,6,10],[8,0,3,10,5,6],[10,5,6],[],[],[],[],[],[],[],[1,10,2,9,11,6,9,8,11],[],[],[6,0,2],[3,6,9,3,2,6],[3,5,1],[0,5,1,0,11,5],[0,3,5],[6,9,11,9,8,11],[],[],[],[4,5,9,7,1,10,7,3,1],[],[11,6,7,2,4,5,2,0,4],[11,6,7,8,0,3,1,10,2,9,4,5],[6,7,11,1,10,2,9,4,5],[],[4,1,0,4,5,1,6,7,3,6,3,2],[9,4,5,0,6,7,0,2,6],[4,5,9,6,3,2,6,7,3],[6,7,11,5,3,8,5,1,3],[6,7,11,4,1,0,4,5,1],[4,5,9,3,8,0,11,6,7],[9,4,5,7,11,6],[],[],[0,6,4],[8,6,4,8,1,6],[],[0,10,2,0,9,10,4,8,11,4,11,6],[10,2,1,6,0,3,6,4,0],[10,2,1,11,4,8,11,6,4],[4,2,6],[1,0,9,2,4,8,2,6,4],[2,4,0,2,6,4],[8,2,4,2,6,4],[11,4,1,11,6,4],[0,9,1,4,11,6,4,8,11],[3,6,0,6,4,0],[8,6,4,8,11,6],[10,8,9],[6,3,9,6,7,3],[6,7,1],[10,7,1,7,3,1],[7,11,6,8,10,2,8,9,10],[11,6,7,10,0,9,10,2,0],[2,1,10,7,11,6,8,0,3],[1,10,2,6,7,11],[7,2,6,7,9,2],[1,0,9,3,6,7,3,2,6],[7,0,6,0,2,6],[2,7,3,2,6,7],[7,11,6,3,9,1,3,8,9],[9,1,0,11,6,7],[0,3,8,11,6,7],[11,6,7],[],[],[],[],[5,3,7],[8,5,2,8,7,5],[5,3,7],[1,10,2,5,8,7,5,9,8],[1,7,5],[1,7,5],[9,2,7,9,7,5],[11,3,2,8,5,9,8,7,5],[1,3,7,1,7,5],[0,7,1,7,5,1],[9,3,5,3,7,5],[9,7,5,9,8,7],[8,10,11],[3,4,10,3,10,11],[8,10,11],[5,9,4,1,11,3,1,10,11],[2,4,5],[5,2,4,2,0,4],[0,3,8,5,9,4,10,2,1],[2,1,10,9,4,5],[2,8,5,2,11,8],[3,2,11,1,4,5,1,0,4],[9,4,5,8,2,11,8,0,2],[11,3,2,9,4,5],[8,5,3,5,1,3],[5,0,4,5,1,0],[3,8,0,4,5,9],[9,4,5],[11,9,10],[11,9,10],[1,11,4,1,10,11],[8,7,4,11,1,10,11,3,1],[2,7,9,2,9,10],[4,8,7,0,10,2,0,9,10],[2,1,10,0,7,4,0,3,7],[10,2,1,8,7,4],[1,7,4],[3,2,11,4,8,7,9,1,0],[11,4,2,4,0,2],[2,11,3,7,4,8],[4,1,7,1,3,7],[1,0,9,8,7,4],[3,4,0,3,7,4],[8,7,4],[8,9,10,8,10,11],[3,9,11,9,10,11],[0,10,8,10,11,8],[10,3,1,10,11,3],[2,8,10,8,9,10],[9,2,0,9,10,2],[8,0,3,1,10,2],[10,2,1],[1,11,9,11,8,9],[11,3,2,0,9,1],[11,0,2,11,8,0],[11,3,2],[8,1,3,8,9,1],[9,1,0],[8,0,3],[]],t=[0,265,515,778,2060,2309,2575,2822,1030,1295,1541,1804,3082,3331,3593,3840,400,153,915,666,2460,2197,2975,2710,1430,1183,1941,1692,3482,3219,3993,3728,560,825,51,314,2620,2869,2111,2358,1590,1855,1077,1340,3642,3891,3129,3376,928,681,419,170,2988,2725,2479,2214,1958,1711,1445,1196,4010,3747,3497,3232,2240,2505,2755,3018,204,453,719,966,3270,3535,3781,4044,1226,1475,1737,1984,2384,2137,2899,2650,348,85,863,598,3414,3167,3925,3676,1370,1107,1881,1616,2800,3065,2291,2554,764,1013,255,502,3830,4095,3317,3580,1786,2035,1273,1520,2912,2665,2403,2154,876,613,367,102,3942,3695,3429,3180,1898,1635,1385,1120,1120,1385,1635,1898,3180,3429,3695,3942,102,367,613,876,2154,2403,2665,2912,1520,1273,2035,1786,3580,3317,4095,3830,502,255,1013,764,2554,2291,3065,2800,1616,1881,1107,1370,3676,3925,3167,3414,598,863,85,348,2650,2899,2137,2384,1984,1737,1475,1226,4044,3781,3535,3270,966,719,453,204,3018,2755,2505,2240,3232,3497,3747,4010,1196,1445,1711,1958,2214,2479,2725,2988,170,419,681,928,3376,3129,3891,3642,1340,1077,1855,1590,2358,2111,2869,2620,314,51,825,560,3728,3993,3219,3482,1692,1941,1183,1430,2710,2975,2197,2460,666,915,153,400,3840,3593,3331,3082,1804,1541,1295,1030,2822,2575,2309,2060,778,515,265,0],n=[[],[8,3,0],[9,0,1],[8,3,1,8,1,9],[11,2,3],[11,2,0,11,0,8],[11,2,3,0,1,9],[2,1,11,1,9,11,11,9,8],[10,1,2],[8,3,0,1,2,10],[9,0,2,9,2,10],[3,2,8,2,10,8,8,10,9],[10,1,3,10,3,11],[1,0,10,0,8,10,10,8,11],[0,3,9,3,11,9,9,11,10],[8,10,9,8,11,10],[8,4,7],[3,0,4,3,4,7],[1,9,0,8,4,7],[9,4,1,4,7,1,1,7,3],[2,3,11,7,8,4],[7,11,4,11,2,4,4,2,0],[3,11,2,4,7,8,9,0,1],[2,7,11,2,1,7,1,4,7,1,9,4],[10,1,2,8,4,7],[2,10,1,0,4,7,0,7,3],[4,7,8,0,2,10,0,10,9],[2,7,3,2,9,7,7,9,4,2,10,9],[8,4,7,11,10,1,11,1,3],[11,4,7,1,4,11,1,11,10,1,0,4],[3,8,0,7,11,4,11,9,4,11,10,9],[7,11,4,4,11,9,11,10,9],[9,5,4],[3,0,8,4,9,5],[5,4,0,5,0,1],[4,8,5,8,3,5,5,3,1],[11,2,3,9,5,4],[9,5,4,8,11,2,8,2,0],[3,11,2,1,5,4,1,4,0],[8,5,4,2,5,8,2,8,11,2,1,5],[2,10,1,9,5,4],[0,8,3,5,4,9,10,1,2],[10,5,2,5,4,2,2,4,0],[3,4,8,3,2,4,2,5,4,2,10,5],[5,4,9,1,3,11,1,11,10],[0,9,1,4,8,5,8,10,5,8,11,10],[3,4,0,3,10,4,4,10,5,3,11,10],[4,8,5,5,8,10,8,11,10],[9,5,7,9,7,8],[0,9,3,9,5,3,3,5,7],[8,0,7,0,1,7,7,1,5],[1,7,3,1,5,7],[11,2,3,8,9,5,8,5,7],[9,2,0,9,7,2,2,7,11,9,5,7],[0,3,8,2,1,11,1,7,11,1,5,7],[2,1,11,11,1,7,1,5,7],[1,2,10,5,7,8,5,8,9],[9,1,0,10,5,2,5,3,2,5,7,3],[5,2,10,8,2,5,8,5,7,8,0,2],[10,5,2,2,5,3,5,7,3],[3,9,1,3,8,9,7,11,10,7,10,5],[9,1,0,10,7,11,10,5,7],[3,8,0,7,10,5,7,11,10],[11,5,7,11,10,5],[11,7,6],[0,8,3,11,7,6],[9,0,1,11,7,6],[7,6,11,3,1,9,3,9,8],[2,3,7,2,7,6],[8,7,0,7,6,0,0,6,2],[1,9,0,3,7,6,3,6,2],[7,6,2,7,2,9,2,1,9,7,9,8],[1,2,10,6,11,7],[2,10,1,7,6,11,8,3,0],[11,7,6,10,9,0,10,0,2],[7,6,11,3,2,8,8,2,10,8,10,9],[6,10,7,10,1,7,7,1,3],[6,10,1,6,1,7,7,1,0,7,0,8],[9,0,3,6,9,3,6,10,9,6,3,7],[6,10,7,7,10,8,10,9,8],[8,4,6,8,6,11],[11,3,6,3,0,6,6,0,4],[0,1,9,4,6,11,4,11,8],[1,9,4,11,1,4,11,3,1,11,4,6],[3,8,2,8,4,2,2,4,6],[2,0,4,2,4,6],[1,9,0,3,8,2,2,8,4,2,4,6],[9,4,1,1,4,2,4,6,2],[10,1,2,11,8,4,11,4,6],[10,1,2,11,3,6,6,3,0,6,0,4],[0,2,10,0,10,9,4,11,8,4,6,11],[2,11,3,6,9,4,6,10,9],[8,4,6,8,6,1,6,10,1,8,1,3],[1,0,10,10,0,6,0,4,6],[8,0,3,9,6,10,9,4,6],[10,4,6,10,9,4],[9,5,4,7,6,11],[4,9,5,3,0,8,11,7,6],[6,11,7,4,0,1,4,1,5],[6,11,7,4,8,5,5,8,3,5,3,1],[4,9,5,6,2,3,6,3,7],[9,5,4,8,7,0,0,7,6,0,6,2],[4,0,1,4,1,5,6,3,7,6,2,3],[7,4,8,5,2,1,5,6,2],[6,11,7,1,2,10,9,5,4],[11,7,6,8,3,0,1,2,10,9,5,4],[11,7,6,10,5,2,2,5,4,2,4,0],[7,4,8,2,11,3,10,5,6],[4,9,5,6,10,7,7,10,1,7,1,3],[5,6,10,0,9,1,8,7,4],[5,6,10,7,0,3,7,4,0],[10,5,6,4,8,7],[5,6,9,6,11,9,9,11,8],[0,9,5,0,5,3,3,5,6,3,6,11],[0,1,5,0,5,11,5,6,11,0,11,8],[11,3,6,6,3,5,3,1,5],[9,5,6,3,9,6,3,8,9,3,6,2],[5,6,9,9,6,0,6,2,0],[0,3,8,2,5,6,2,1,5],[1,6,2,1,5,6],[1,2,10,5,6,9,9,6,11,9,11,8],[1,0,9,6,10,5,11,3,2],[6,10,5,2,8,0,2,11,8],[3,2,11,10,5,6],[10,5,6,9,3,8,9,1,3],[0,9,1,5,6,10],[8,0,3,10,5,6],[10,5,6],[10,6,5],[8,3,0,10,6,5],[0,1,9,5,10,6],[10,6,5,9,8,3,9,3,1],[3,11,2,10,6,5],[6,5,10,2,0,8,2,8,11],[1,9,0,6,5,10,11,2,3],[1,10,2,5,9,6,9,11,6,9,8,11],[1,2,6,1,6,5],[0,8,3,2,6,5,2,5,1],[5,9,6,9,0,6,6,0,2],[9,6,5,3,6,9,3,9,8,3,2,6],[11,6,3,6,5,3,3,5,1],[0,5,1,0,11,5,5,11,6,0,8,11],[0,5,9,0,3,5,3,6,5,3,11,6],[5,9,6,6,9,11,9,8,11],[10,6,5,4,7,8],[5,10,6,7,3,0,7,0,4],[5,10,6,0,1,9,8,4,7],[4,5,9,6,7,10,7,1,10,7,3,1],[7,8,4,2,3,11,10,6,5],[11,6,7,10,2,5,2,4,5,2,0,4],[11,6,7,8,0,3,1,10,2,9,4,5],[6,7,11,1,10,2,9,4,5],[7,8,4,5,1,2,5,2,6],[4,1,0,4,5,1,6,7,3,6,3,2],[9,4,5,8,0,7,0,6,7,0,2,6],[4,5,9,6,3,2,6,7,3],[6,7,11,4,5,8,5,3,8,5,1,3],[6,7,11,4,1,0,4,5,1],[4,5,9,3,8,0,11,6,7],[9,4,5,7,11,6],[10,6,4,10,4,9],[8,3,0,9,10,6,9,6,4],[1,10,0,10,6,0,0,6,4],[8,6,4,8,1,6,6,1,10,8,3,1],[2,3,11,6,4,9,6,9,10],[0,10,2,0,9,10,4,8,11,4,11,6],[10,2,1,11,6,3,6,0,3,6,4,0],[10,2,1,11,4,8,11,6,4],[9,1,4,1,2,4,4,2,6],[1,0,9,3,2,8,2,4,8,2,6,4],[2,4,0,2,6,4],[3,2,8,8,2,4,2,6,4],[1,4,9,11,4,1,11,1,3,11,6,4],[0,9,1,4,11,6,4,8,11],[11,6,3,3,6,0,6,4,0],[8,6,4,8,11,6],[6,7,10,7,8,10,10,8,9],[9,3,0,6,3,9,6,9,10,6,7,3],[6,1,10,6,7,1,7,0,1,7,8,0],[6,7,10,10,7,1,7,3,1],[7,11,6,3,8,2,8,10,2,8,9,10],[11,6,7,10,0,9,10,2,0],[2,1,10,7,11,6,8,0,3],[1,10,2,6,7,11],[7,2,6,7,9,2,2,9,1,7,8,9],[1,0,9,3,6,7,3,2,6],[8,0,7,7,0,6,0,2,6],[2,7,3,2,6,7],[7,11,6,3,9,1,3,8,9],[9,1,0,11,6,7],[0,3,8,11,6,7],[11,6,7],[11,7,5,11,5,10],[3,0,8,7,5,10,7,10,11],[9,0,1,10,11,7,10,7,5],[3,1,9,3,9,8,7,10,11,7,5,10],[10,2,5,2,3,5,5,3,7],[5,10,2,8,5,2,8,7,5,8,2,0],[9,0,1,10,2,5,5,2,3,5,3,7],[1,10,2,5,8,7,5,9,8],[2,11,1,11,7,1,1,7,5],[0,8,3,2,11,1,1,11,7,1,7,5],[9,0,2,9,2,7,2,11,7,9,7,5],[11,3,2,8,5,9,8,7,5],[1,3,7,1,7,5],[8,7,0,0,7,1,7,5,1],[0,3,9,9,3,5,3,7,5],[9,7,5,9,8,7],[4,5,8,5,10,8,8,10,11],[3,0,4,3,4,10,4,5,10,3,10,11],[0,1,9,4,5,8,8,5,10,8,10,11],[5,9,4,1,11,3,1,10,11],[3,8,4,3,4,2,2,4,5,2,5,10],[10,2,5,5,2,4,2,0,4],[0,3,8,5,9,4,10,2,1],[2,1,10,9,4,5],[8,4,5,2,8,5,2,11,8,2,5,1],[3,2,11,1,4,5,1,0,4],[9,4,5,8,2,11,8,0,2],[11,3,2,9,4,5],[4,5,8,8,5,3,5,1,3],[5,0,4,5,1,0],[3,8,0,4,5,9],[9,4,5],[7,4,11,4,9,11,11,9,10],[3,0,8,7,4,11,11,4,9,11,9,10],[11,7,4,1,11,4,1,10,11,1,4,0],[8,7,4,11,1,10,11,3,1],[2,3,7,2,7,9,7,4,9,2,9,10],[4,8,7,0,10,2,0,9,10],[2,1,10,0,7,4,0,3,7],[10,2,1,8,7,4],[2,11,7,2,7,1,1,7,4,1,4,9],[3,2,11,4,8,7,9,1,0],[7,4,11,11,4,2,4,0,2],[2,11,3,7,4,8],[9,1,4,4,1,7,1,3,7],[1,0,9,8,7,4],[3,4,0,3,7,4],[8,7,4],[8,9,10,8,10,11],[0,9,3,3,9,11,9,10,11],[1,10,0,0,10,8,10,11,8],[10,3,1,10,11,3],[3,8,2,2,8,10,8,9,10],[9,2,0,9,10,2],[8,0,3,1,10,2],[10,2,1],[2,11,1,1,11,9,11,8,9],[11,3,2,0,9,1],[11,0,2,11,8,0],[11,3,2],[8,1,3,8,9,1],[9,1,0],[8,0,3],[]],i},$3Dmol.MarchingCube=$3Dmol.MarchingCubeInitializer(),$3Dmol.Parsers=function(){var e={},t={H:.37,He:.32,Li:1.34,Be:.9,B:.82,C:.77,N:.75,O:.73,F:.71,Ne:.69,Na:1.54,Mg:1.3,Al:1.18,Si:1.11,P:1.06,S:1.02,Cl:.99,Ar:.97,K:1.96,Ca:1.74,Sc:1.44,Ti:1.56,V:1.25,Mn:1.39,Fe:1.25,Co:1.26,Ni:1.21,Cu:1.38,Zn:1.31,Ga:1.26,Ge:1.22,Se:1.16,Br:1.14,Kr:1.1,Rb:2.11,Sr:1.92,Y:1.62,Zr:1.48,Nb:1.37,Mo:1.45,Tc:1.56,Ru:1.26,Rh:1.35,Pd:1.31,Ag:1.53,Cd:1.48,In:1.44,Sn:1.41,Sb:1.38,Te:1.35,I:1.33,Xe:1.3,Cs:2.25,Ba:1.98,Lu:1.6,Hf:1.5,Ta:1.38,W:1.46,Re:1.59,Os:1.44,Ir:1.37,Pt:1.28,Au:1.44,Hg:1.49,Tl:1.48,Pb:1.47,Bi:1.46,Rn:1.45},r=function(e){return t[e]||1.6},n=function(e,t){var n=r(e.elem)+r(t.elem);n+=.25,n*=n;var i=e.x-t.x;if((i*=i)>n)return!1;var o=e.y-t.y;if((o*=o)>n)return!1;var a=e.z-t.z;if((a*=a)>n)return!1;var s=i+o+a;return!isNaN(s)&&(!(s<.5)&&(!(s>n)&&(e.altLoc==t.altLoc||" "==e.altLoc||" "==t.altLoc)))},i=function(e){for(var t=0,r=e.length;t<r;t++)e[t].index||(e[t].index=t);for(var i={},o=0;o<e.length;o++){var a=e[o],s=Math.floor(a.x/4.95),l=Math.floor(a.y/4.95),c=Math.floor(a.z/4.95);i[s]||(i[s]={}),i[s][l]||(i[s][l]={}),i[s][l][c]||(i[s][l][c]=[]),i[s][l][c].push(a)}var u=function(e,t){for(var r=0;r<e.length;r++)for(var i=e[r],o=0;o<t.length;o++){var a=t[o];if(n(i,a)){var s=i.bonds.indexOf(a.index),l=a.bonds.indexOf(i.index);-1==s&&-1==l?(i.bonds.push(a.index),i.bondOrder.push(1),a.bonds.push(i.index),a.bondOrder.push(1)):-1==s?(i.bonds.push(a.index),i.bondOrder.push(a.bondOrder[l])):-1==l&&(a.bonds.push(i.index),a.bondOrder.push(i.bondOrder[s]))}}},h=[{x:0,y:0,z:1},{x:0,y:1,z:-1},{x:0,y:1,z:0},{x:0,y:1,z:1},{x:1,y:-1,z:-1},{x:1,y:-1,z:0},{x:1,y:-1,z:1},{x:1,y:0,z:-1},{x:1,y:0,z:0},{x:1,y:0,z:1},{x:1,y:1,z:-1},{x:1,y:1,z:0},{x:1,y:1,z:1}];for(let e in i){e=parseInt(e);for(let t in i[e]){t=parseInt(t);for(let r in i[e][t]){r=parseInt(r);let o=i[e][t][r];for(let e=0;e<o.length;e++){let t=o[e];for(let r=e+1;r<o.length;r++){let e=o[r];n(t,e)&&-1==t.bonds.indexOf(e.index)&&(t.bonds.push(e.index),t.bondOrder.push(1),e.bonds.push(t.index),e.bondOrder.push(1))}}for(let n=0;n<h.length;n++){let a=h[n];i[e+a.x]&&i[e+a.x][t+a.y]&&i[e+a.x][t+a.y][r+a.z]&&u(o,i[e+a.x][t+a.y][r+a.z])}}}}},o=function(e){var t,r,o=[],a=[];for(t=0,r=e.length;t<r;t++){var s=e[t];s.index=t,s.hetflag?a.push(s):o.push(s)}i(a),o.sort(function(e,t){return e.chain!=t.chain?e.chain<t.chain?-1:1:e.resi-t.resi});var l,c=-1,u=-1;for(t=0,r=o.length;t<r;t++){var h=o[t];h.resi!==c&&(c=h.resi,l||u++,l=!1),h.reschain=u;for(var f=t+1;f<o.length;f++){var d=o[f];if(d.chain!=h.chain)break;if(d.resi-h.resi>1)break;n(h,d)&&(-1===h.bonds.indexOf(d.index)&&(h.bonds.push(d.index),h.bondOrder.push(1),d.bonds.push(h.index),d.bondOrder.push(1)),h.resi!==d.resi&&(l=!0))}}},a=function(e){!function(e){var t,r,n,i=[];for(t=0,n=e.length;t<n;t++){e[t].index=t;var o=e[t];o.hetflag||"N"!==o.atom&&"O"!==o.atom||(i.push(o),o.hbondOther=null,o.hbondDistanceSq=Number.POSITIVE_INFINITY)}for(i.sort(function(e,t){return e.z-t.z}),t=0,n=i.length;t<n;t++){var a=i[t];for(r=t+1;r<n;r++){var s=i[r],l=s.z-a.z;if(l>3.2)break;if(s.atom!=a.atom){var c=Math.abs(s.y-a.y);if(!(c>3.2)){var u=Math.abs(s.x-a.x);if(!(u>3.2)){var h=u*u+c*c+l*l;h>10.24||s.chain==a.chain&&Math.abs(s.resi-a.resi)<4||(h<a.hbondDistanceSq&&(a.hbondOther=s,a.hbondDistanceSq=h),h<s.hbondDistanceSq&&(s.hbondOther=a,s.hbondDistanceSq=h))}}}}}}(e);var t,r,n,i,o,a,s={};for(t=0,r=e.length;t<r;t++)if(void 0===s[(o=e[t]).chain]&&(s[o.chain]=[]),isFinite(o.hbondDistanceSq)){var l=o.hbondOther;void 0===s[l.chain]&&(s[l.chain]=[]),4===Math.abs(l.resi-o.resi)&&(s[o.chain][o.resi]="h")}for(n in s)for(i=1;i<s[n].length-1;i++){var c=s[n][i-1],u=s[n][i+1];a=s[n][i],"h"==c&&c==u&&a!=c&&(s[n][i]=c)}for(t=0,r=e.length;t<r;t++)o=e[t],isFinite(o.hbondDistanceSq)&&"h"!=s[o.chain][o.resi]&&"h"!=o.ss&&(s[o.chain][o.resi]="maybesheet");for(let t=0,r=e.length;t<r;t++)if(o=e[t],isFinite(o.hbondDistanceSq)&&"maybesheet"==s[o.chain][o.resi]){let e=o.hbondOther,t=s[e.chain][e.resi];"maybesheet"!=t&&"s"!=t||(s[o.chain][o.resi]="s",s[e.chain][e.resi]="s")}for(let e in s){for(let t=1;t<s[e].length-1;t++){let r=s[e][t-1],n=s[e][t+1];a=s[e][t],"s"==r&&r==n&&a!=r&&(s[e][t]=r)}for(let t=0;t<s[e].length;t++){let r=s[e][t];"h"!=r&&"s"!=r||s[e][t-1]!=r&&s[e][t+1]!=r&&delete s[e][t]}}for(t=0,r=e.length;t<r;t++)void 0!==(a=s[(o=e[t]).chain][o.resi])&&"maybesheet"!=a&&(o.ss=a,s[o.chain][o.resi-1]!=a&&(o.ssbegin=!0),s[o.chain][o.resi+1]!=a&&(o.ssend=!0))},s=function(e,t,r){var n,i,o,a=r.length,s=a;if(t){if(e.length>1)for(n=0;n<r.length;n++){var l=[];for(i=0;i<e.length;i++)if(!e[i].isIdentity()){var c=new $3Dmol.Vector3;c.set(r[n].x,r[n].y,r[n].z),c.applyMatrix4(e[i]),l.push(c)}r[n].symmetries=l}}else for(n=0;n<e.length;n++)if(!e[n].isIdentity()){var u=new $3Dmol.Vector3;for(o=0;o<a;o++){var h=[];for(i=0;i<r[o].bonds.length;i++)h.push(r[o].bonds[i]+s);u.set(r[o].x,r[o].y,r[o].z),u.applyMatrix4(e[n]);var f={};for(var d in r[o])f[d]=r[o][d];f.x=u.x,f.y=u.y,f.z=u.z,f.bonds=h,r.push(f)}s=r.length}};e.vasp=e.VASP=function(e){var t=[[]],r={},n=e.replace(/^\s+/,"").split(/[\n\r]/);if(n.length<3)return t;if(!n[1].match(/\d+/))return console.log("Warning: second line of the vasp structure file must be a number"),t;if(r.length=parseFloat(n[1]),r.length<0)return console.log("Warning: Vasp implementation for negative lattice lengths is not yet available"),t;r.xVec=new Float32Array(n[2].replace(/^\s+/,"").split(/\s+/)),r.yVec=new Float32Array(n[3].replace(/^\s+/,"").split(/\s+/)),r.zVec=new Float32Array(n[4].replace(/^\s+/,"").split(/\s+/));var i=new $3Dmol.Matrix4(r.xVec[0],r.xVec[1],r.xVec[2],0,r.yVec[0],r.yVec[1],r.yVec[2],0,r.zVec[0],r.zVec[1],r.zVec[2],0,0,0,0,1);i.multiplyScalar(r.length),t.modelData=[{symmetries:[],cryst:{matrix:i}}];var o=n[5].replace(/\s+/,"").replace(/\s+$/,"").split(/\s+/),a=new Int16Array(n[6].replace(/^\s+/,"").split(/\s+/)),s=n[7].replace(/\s+/,"");if(s.match(/C/))s="cartesian";else{if(!s.match(/D/))return console.log("Warning: Unknown vasp mode in POSCAR file: mode must be either C(artesian) or D(irect)"),t;s="direct"}if(o.length!=a.length)return console.log("Warning: declaration of atomary species wrong:"),console.log(o),console.log(a),t;n.splice(0,8);for(var l=0,c=0,u=o.length;c<u;c++){for(var h=o[c],f=0,d=a[c];f<d;f++){var p=new Float32Array(n[l+f].replace(/^\s+/,"").split(/\s+/)),m={};m.elem=h,"cartesian"==s?(m.x=r.length*p[0],m.y=r.length*p[1],m.z=r.length*p[2]):(m.x=r.length*(p[0]*r.xVec[0]+p[1]*r.yVec[0]+p[2]*r.zVec[0]),m.y=r.length*(p[0]*r.xVec[1]+p[1]*r.yVec[1]+p[2]*r.zVec[1]),m.z=r.length*(p[0]*r.xVec[2]+p[1]*r.yVec[2]+p[2]*r.zVec[2])),m.bonds=[],t[0].push(m)}l+=a[c]}return t},e.cube=e.CUBE=function(e){var t=[[]],r=e.replace(/^\s+/,"").split(/\n\r|\r+/);if(r.length<6)return t;var n=r[2].replace(/^\s+/,"").replace(/\s+/g," ").split(" "),o=Math.abs(parseFloat(n[0]));n=r[3].replace(/^\s+/,"").replace(/\s+/g," ").split(" ");var a=parseFloat(n[0])>0?.529177:1;r=r.splice(6,o);for(var s=t[t.length-1].length,l=s+r.length,c=s;c<l;++c){var u={};u.serial=c;var h=r[c-s].replace(/^\s+/,"").replace(/\s+/g," ").split(" ");6==h[0]?u.elem="C":1==h[0]?u.elem="H":8==h[0]?u.elem="O":17==h[0]&&(u.elem="Cl"),u.x=parseFloat(h[2])*a,u.y=parseFloat(h[3])*a,u.z=parseFloat(h[4])*a,u.hetflag=!0,u.bonds=[],u.bondOrder=[],u.properties={},t[t.length-1].push(u)}for(let e=0;e<t.length;e++)i(t[e]);return t},e.xyz=e.XYZ=function(e,t){for(var r=[[]],n=e.split(/\r?\n|\r/);n.length>0&&!(n.length<3);){var o=parseInt(n[0]);if(isNaN(o)||o<=0)break;if(n.length<o+2)break;for(var a=2,s=r[r.length-1].length,l=s+o,c=s;c<l;c++){var u=n[a++].replace(/^\s+/,"").replace(/\s+/g," ").split(" "),h={};h.serial=c;var f=u[0];h.atom=h.elem=f[0].toUpperCase()+f.substr(1).toLowerCase(),h.x=parseFloat(u[1]),h.y=parseFloat(u[2]),h.z=parseFloat(u[3]),h.hetflag=!0,h.bonds=[],h.bondOrder=[],h.properties={},r[r.length-1][c]=h,u.length>=7&&(h.dx=parseFloat(u[4]),h.dy=parseFloat(u[5]),h.dz=parseFloat(u[6]))}if(!t.multimodel)break;r.push([]),n.splice(0,a)}for(let e=0;e<r.length;e++)i(r[e]);if(t.onemol){var d=r;(r=[]).push(d[0]);for(let e=1;e<d.length;e++){let t=r[0].length;for(let n=0;n<d[e].length;n++){let i=d[e][n];for(let e=0;e<i.bonds.length;e++)i.bonds[e]=i.bonds[e]+t;i.index=r[0].length,i.serial=r[0].length,r[0].push(i)}}}return r};e.sdf=e.SDF=function(e,t){var r="V2000",n=e.split(/\r?\n|\r/);return n.length>3&&n[3].length>38&&(r=n[3].substr(34,5)),"V2000"===r?function(e,t){var r=[[]],n=!1;for(void 0!==t.keepH&&(n=!t.keepH);e.length>0&&!(e.length<4);){var i=parseInt(e[3].substr(0,3));if(isNaN(i)||i<=0)break;var o=parseInt(e[3].substr(3,3)),a=4;if(e.length<4+i+o)break;var s,l,c=[],u=r[r.length-1].length,h=u+i;for(s=u;s<h;s++,a++){var f={},d=(l=e[a]).substr(31,3).replace(/ /g,"");f.atom=f.elem=d[0].toUpperCase()+d.substr(1).toLowerCase(),"H"===f.elem&&n||(f.serial=s,c[s]=r[r.length-1].length,f.x=parseFloat(l.substr(0,10)),f.y=parseFloat(l.substr(10,10)),f.z=parseFloat(l.substr(20,10)),f.hetflag=!0,f.bonds=[],f.bondOrder=[],f.properties={},f.index=r[r.length-1].length,r[r.length-1].push(f))}for(s=0;s<o;s++,a++){l=e[a];var p=c[parseInt(l.substr(0,3))-1+u],m=c[parseInt(l.substr(3,3))-1+u],v=parseInt(l.substr(6,3));void 0!==p&&void 0!==m&&(r[r.length-1][p].bonds.push(m),r[r.length-1][p].bondOrder.push(v),r[r.length-1][m].bonds.push(p),r[r.length-1][m].bondOrder.push(v))}if(!t.multimodel)break;for(t.onemol||r.push([]);"$$$$"!==e[a];)a++;e.splice(0,++a)}return r}(n,t):"V3000"===r?function(e,t){var r=[[]],n=!1;for(void 0!==t.keepH&&(n=!t.keepH);e.length>0&&!(e.length<8)&&e[4].startsWith("M  V30 BEGIN CTAB")&&e[5].startsWith("M  V30 COUNTS")&&!(e[5].length<14);){var i=e[5].substr(13).match(/\S+/g);if(i.length<2)break;var o=parseInt(i[0]);if(isNaN(o)||o<=0)break;var a=parseInt(i[1]),s=7;if(e.length<8+o+a)break;var l,c=[],u=r[r.length-1].length,h=u+o;for(l=u;l<h;l++,s++){var f=e[s].substr(6).match(/\S+/g);if(f.length>4){var d={},p=f[1].replace(/ /g,"");d.atom=d.elem=p[0].toUpperCase()+p.substr(1).toLowerCase(),"H"===d.elem&&n||(d.serial=l,c[l]=r[r.length-1].length,d.x=parseFloat(f[2]),d.y=parseFloat(f[3]),d.z=parseFloat(f[4]),d.hetflag=!0,d.bonds=[],d.bondOrder=[],d.properties={},d.index=r[r.length-1].length,r[r.length-1].push(d))}}if("M  V30 END ATOM"!==e[s])break;if(s++,0===a||"M  V30 BEGIN BOND"!==e[s])break;for(s++,l=0;l<a;l++,s++){var m=e[s].substr(6).match(/\S+/g);if(m.length>3){var v=c[parseInt(m[2])-1+u],g=c[parseInt(m[3])-1+u],y=parseInt(m[1]);void 0!==v&&void 0!==g&&(r[r.length-1][v].bonds.push(g),r[r.length-1][v].bondOrder.push(y),r[r.length-1][g].bonds.push(v),r[r.length-1][g].bondOrder.push(y))}}if(!t.multimodel)break;for(t.onemol||r.push([]);"$$$$"!==e[s];)s++;e.splice(0,++s)}return r}(n,t):[[]]},e.cdjson=e.json=function(e,t){var r=[[]];"string"==typeof e&&(e=JSON.parse(e));for(var n=e.m,i=n[0].a,o=n[0].b,a=n[0].s,s=void 0!==t&&void 0!==t.parseStyle?t.parseStyle:void 0!==a,l=r[r.length-1].length,c=0;c<i.length;c++){var u=i[c],h={};h.id=u.i,h.x=u.x,h.y=u.y,h.z=u.z||0,h.bonds=[],h.bondOrder=[];var f=u.l||"C";h.elem=f[0].toUpperCase()+f.substr(1).toLowerCase(),h.serial=r[r.length-1].length,s&&(h.style=a[u.s||0]),r[r.length-1].push(h)}for(let e=0;e<o.length;e++){let t=o[e],n=t.b+l,i=t.e+l,a=t.o||1,s=r[r.length-1][n],c=r[r.length-1][i];s.bonds.push(i),s.bondOrder.push(a),c.bonds.push(n),c.bondOrder.push(a)}return r},e.mcif=e.cif=function(e,t){var r=[],n=!t.doAssembly,o=!t.duplicateAssemblyAtoms,l=r.modelData=[];function c(e,t){for(var r=[],n=0,i=0;i<e.length;){for(;e.substr(i,t.length)!==t&&i<e.length;){if("'"===e[i])for(i++;i<e.length&&"'"!==e[i];)i++;else if('"'===e[i])for(i++;i<e.length&&'"'!==e[i];)i++;i++}r.push(e.substr(n,i-n)),n=i+=t.length}return r}var u=e.split(/\r?\n|\r/),h=[],f=!1;for(let e=0;e<u.length;e++){var d=u[e].split("#")[0];if(f?";"===d[0]&&(f=!1):";"===d[0]&&(f=!0),f||""!==d){if(!f&&"_"===(d=d.trim())[0]){var p=d.split(/\s/)[0].indexOf(".");p>-1&&(d[p]="_",d=d.substr(0,p)+"_"+d.substr(p+1))}h.push(d)}}for(var m=0;m<h.length;){for(;!h[m].startsWith("data_")||"data_global"===h[m];)m++;m++;for(var v={};m<h.length&&!h[m].startsWith("data_");)if(void 0===h[m][0])m++;else if("_"===h[m][0]){var g=h[m].split(/\s/)[0].toLowerCase(),y=v[g]=v[g]||[],b=h[m].substr(h[m].indexOf(g)+g.length);if(""===b)if(";"===h[++m][0]){var x=h[m].substr(1);for(m++;";"!==h[m];)x=x+"\n"+h[m],m++;y.push(x)}else y.push(h[m]);else y.push(b.trim());m++}else if("loop_"===h[m].substr(0,5)){m++;for(var w=[];""===h[m]||"_"===h[m][0];){if(""!==h[m]){let e=h[m].split(/\s/)[0].toLowerCase(),t=v[e]=v[e]||[];w.push(t)}m++}for(var D=0;m<h.length&&"_"!==h[m][0]&&!h[m].startsWith("loop_")&&!h[m].startsWith("data_");){let e=c(h[m]," ");for(var C=0;C<e.length;C++)""!==e[C]&&(w[D].push(e[C]),D=(D+1)%w.length);m++}}else m++;l.push({symmetries:[]}),r.push([]);var A,$=void 0!==v._atom_site_id?v._atom_site_id.length:v._atom_site_label.length,S=function(e){return e*e};if(void 0!==v._cell_length_a){var M=parseFloat(v._cell_length_a),_=parseFloat(v._cell_length_b),z=parseFloat(v._cell_length_c),T=parseFloat(v._cell_angle_alpha)||90,L=parseFloat(v._cell_angle_beta)||90,E=parseFloat(v._cell_angle_gamma)||90,F=T*Math.PI/180,k=L*Math.PI/180,I=E*Math.PI/180,P=Math.cos(F),O=Math.cos(k),R=Math.cos(I),N=Math.sin(I);A=[[M,_*R,z*O],[0,_*N,z*(P-O*R)/N],[0,0,z*Math.sqrt(1-S(P)-S(O)-S(R)+2*P*O*R)/N]],l[l.length-1].cryst={a:M,b:_,c:z,alpha:T,beta:L,gamma:E}}for(var B=function(e,t,r,n){return{x:e[0][0]*t+e[0][1]*r+e[0][2]*n,y:e[1][0]*t+e[1][1]*r+e[1][2]*n,z:e[2][0]*t+e[2][1]*r+e[2][2]*n}},V=0;V<$;V++)if(void 0===v._atom_site_group_pdb||"TER"!==v._atom_site_group_pdb[V]){var U={};if(void 0!==v._atom_site_cartn_x)U.x=parseFloat(v._atom_site_cartn_x[V]),U.y=parseFloat(v._atom_site_cartn_y[V]),U.z=parseFloat(v._atom_site_cartn_z[V]);else{var j=B(A,parseFloat(v._atom_site_fract_x[V]),parseFloat(v._atom_site_fract_y[V]),parseFloat(v._atom_site_fract_z[V]));U.x=j.x,U.y=j.y,U.z=j.z}U.chain=v._atom_site_auth_asym_id?v._atom_site_auth_asym_id[V]:void 0,U.resi=v._atom_site_auth_seq_id?parseInt(v._atom_site_auth_seq_id[V]):void 0,U.resn=v._atom_site_auth_comp_id?v._atom_site_auth_comp_id[V].trim():void 0,U.atom=v._atom_site_auth_atom_id?v._atom_site_auth_atom_id[V].replace(/"/gm,""):void 0,U.hetflag=!v._atom_site_group_pdb||"HETA"===v._atom_site_group_pdb[V]||"HETATM"===v._atom_site_group_pdb[V];var G=v._atom_site_type_symbol[V];U.elem=G[0].toUpperCase()+G.substr(1).toLowerCase(),U.bonds=[],U.ss="c",U.serial=V,U.bondOrder=[],U.properties={},r[r.length-1].push(U)}if(void 0!==v._pdbx_struct_oper_list_id&&!n){for(let e=0;e<v._pdbx_struct_oper_list_id.length;e++){var q=parseFloat(v["_pdbx_struct_oper_list_matrix[1][1]"][e]),H=parseFloat(v["_pdbx_struct_oper_list_matrix[1][2]"][e]),W=parseFloat(v["_pdbx_struct_oper_list_matrix[1][3]"][e]),Y=parseFloat(v["_pdbx_struct_oper_list_vector[1]"][e]),Z=parseFloat(v["_pdbx_struct_oper_list_matrix[2][1]"][e]),X=parseFloat(v["_pdbx_struct_oper_list_matrix[2][2]"][e]),Q=parseFloat(v["_pdbx_struct_oper_list_matrix[2][3]"][e]),K=parseFloat(v["_pdbx_struct_oper_list_vector[2]"][e]),J=parseFloat(v["_pdbx_struct_oper_list_matrix[3][1]"][e]),ee=parseFloat(v["_pdbx_struct_oper_list_matrix[3][2]"][e]),te=parseFloat(v["_pdbx_struct_oper_list_matrix[3][3]"][e]),re=parseFloat(v["_pdbx_struct_oper_list_vector[3]"][e]),ne=new $3Dmol.Matrix4(q,H,W,Y,Z,X,Q,K,J,ee,te,re);l[l.length-1].symmetries.push(ne)}for(let e=0;e<r.length;e++)s(l[l.length-1].symmetries,o,r[e])}var ie=function(e){var t,r=e.match("-"),n=(e=e.replace(/[-xyz]/g,"")).split("/");return t=void 0===n[1]?1:parseInt(n[1]),(""===n[0]?1:parseInt(n[0]))/t*(r?-1:1)};if(void 0!==v._symmetry_equiv_pos_as_xyz)for(var oe=0;oe<v._symmetry_equiv_pos_as_xyz.length;oe++){var ae=v._symmetry_equiv_pos_as_xyz[oe].replace(/["' ]/g,"").split(",").map(function(e){return e.replace(/-/g,"+-")});let e=new $3Dmol.Matrix4(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1);for(let t=0;t<3;t++){var se=ae[t].split("+");for(let r=0;r<se.length;r++){var le=se[r];if(""!==le){var ce=ie(le);le.match("x")?e.elements[t+0]=ce:le.match("y")?e.elements[t+4]=ce:le.match("z")?e.elements[t+8]=ce:e.elements[t+12]=ce}}}var ue=new $3Dmol.Matrix4(A[0][0],A[0][1],A[0][2],0,A[1][0],A[1][1],A[1][2],0,A[2][0],A[2][1],A[2][2],0),he=(new $3Dmol.Matrix4).getInverse(ue,!0);e=(new $3Dmol.Matrix4).multiplyMatrices(e,he),e=(new $3Dmol.Matrix4).multiplyMatrices(ue,e),l[l.length-1].symmetries.push(e)}}for(let e=0;e<r.length;e++)i(r[e]),a(r[e]),s(l[e].symmetries,o,r[e]);return r},e.mol2=e.MOL2=function(e,t){var r=[[]],n=!1;void 0!==t.keepH&&(n=!t.keepH);var i=e.search(/@<TRIPOS>MOLECULE/),o=e.search(/@<TRIPOS>ATOM/);if(-1==i||-1==o)return r;for(var a=e.substr(i,e.length).split(/\r?\n|\r/);a.length>0;){var s=[],l=a[2].replace(/^\s+/,"").replace(/\s+/g," ").split(" "),c=parseInt(l[0]),u=0;l.length>1&&(u=parseInt(l[1]));var h,f=4;for(h=3;h<a.length;h++)if("@<TRIPOS>ATOM"==a[h]){f=h+1;break}var d=r[r.length-1].length,p=d+c;for(h=d;h<p;h++){var m={},v=(l=a[f++].replace(/^\s+/,"").replace(/\s+/g," ").split(" "))[5].split(".")[0];if(m.atom=m.elem=v[0].toUpperCase()+v.substr(1).toLowerCase(),"H"==m.elem&&n);else{var g=r[r.length-1].length,y=parseInt(l[0]);m.serial=y,m.x=parseFloat(l[2]),m.y=parseFloat(l[3]),m.z=parseFloat(l[4]),m.atom=l[5];var b=parseFloat(l[8]);m.index=g,m.bonds=[],m.bondOrder=[],m.properties={charge:b,partialCharge:b},s[y]=g,r[r.length-1].push(m)}}for(var x=!1;f<a.length;)if("@<TRIPOS>BOND"==a[f++]){x=!0;break}if(x&&u)for(h=0;h<u;h++){l=a[f++].replace(/^\s+/,"").replace(/\s+/g," ").split(" ");var w=parseInt(l[1]),D=r[r.length-1][s[w]],C=parseInt(l[2]),A=r[r.length-1][s[C]],$=parseInt(l[3]);isNaN($)&&($=1),void 0!==D&&void 0!==A&&(D.bonds.push(s[C]),D.bondOrder.push($),A.bonds.push(s[w]),A.bondOrder.push($))}if(!t.multimodel)break;t.onemol||r.push([]),a.splice(0,f),e=a.join("\n")}return r};var l=function(e,r){var n=e.replace(/ /g,"");return n.length>0&&"H"==n[0]&&"Hg"!=n&&(n="H"),n.length>1&&(n=n[0].toUpperCase()+n.substr(1).toLowerCase(),void 0===t[n]?n=n[0]:r&&("Ca"==n?n="C":"Cd"==n&&(n="C"))),n},c=function(e,r,n){var i,c,u=[],h=!r.keepH,f=!!r.noSecondaryStructure,d=!r.noComputeSecondaryStructure,p=!r.doAssembly,m=!r.duplicateAssemblyAtoms,v=r.altLoc?r.altLoc:"A",g={symmetries:[]},y=[],b=[],x={};for(let r=0;r<e.length;r++){var w,D,C,A=(c=e[r].replace(/^\s*/,"")).substr(0,6);if(0==A.indexOf("END")){if(y=e.slice(r+1),"END"==A)for(var $ in n)n.hasOwnProperty($)&&delete n[$];break}if("ATOM  "==A||"HETATM"==A){var S,M,_,z,T,L,E,F,k,I,P,O;if(" "!=(P=c.substr(16,1))&&P!=v&&"*"!=v)continue;if(I=parseInt(c.substr(6,5)),i=c.substr(12,4).replace(/ /g,""),S=c.substr(17,3).replace(/ /g,""),M=c.substr(21,1),_=parseInt(c.substr(22,4)),z=c.substr(26,1),T=parseFloat(c.substr(30,8)),L=parseFloat(c.substr(38,8)),E=parseFloat(c.substr(46,8)),O=parseFloat(c.substr(60,8)),"H"==(k=""===(k=c.substr(76,2).replace(/ /g,""))||void 0===t[k]?l(c.substr(12,2),"A"==c[0]):k[0].toUpperCase()+k.substr(1).toLowerCase())&&h)continue;F="H"==A[0],b[I]=u.length,u.push({resn:S,x:T,y:L,z:E,elem:k,hetflag:F,altLoc:P,chain:M,resi:_,icode:z,rescode:_+(" "!=z?"^"+z:""),serial:I,atom:i,bonds:[],ss:"c",bondOrder:[],properties:{},b:O,pdbline:c})}else if("SHEET "==A){!0,w=c.substr(21,1),D=parseInt(c.substr(22,4)),c.substr(32,1),C=parseInt(c.substr(33,4)),w in n||(n[w]={}),n[w][D]="s1";for(var R=D+1;R<C;R++)n[w][R]="s";n[w][C]="s2"}else if("CONECT"==A){var N=b[parseInt(c.substr(6,5))],B=u[N],V=[11,16,21,26];for(let e=0;e<4;e++){var U=b[parseInt(c.substr(V[e],5))],j=u[U];if(void 0!==B&&void 0!==j)if(x[[N,U]]){x[[N,U]]+=1;for(let e=0;e<B.bonds.length;e++)if(B.bonds[e]==U){var G=x[[N,U]];B.bondOrder[e]=G>=4?1:G}}else x[[N,U]]=1,0!=B.bonds.length&&B.bonds[B.bonds.length-1]==U||(B.bonds.push(U),B.bondOrder.push(1))}}else if("HELIX "==A){!0,w=c.substr(19,1),D=parseInt(c.substr(21,4)),c.substr(31,1),C=parseInt(c.substr(33,4)),w in n||(n[w]={}),n[w][D]="h1";for(let e=D+1;e<C;e++)n[w][e]="h";n[w][C]="h2"}else if(p||"REMARK"!=A||"BIOMT"!=c.substr(13,5)){if("CRYST1"==A){let e,t,r,n,i,o;e=parseFloat(c.substr(7,8)),t=parseFloat(c.substr(16,8)),r=parseFloat(c.substr(25,8)),n=parseFloat(c.substr(34,6)),i=parseFloat(c.substr(41,6)),o=parseFloat(c.substr(48,6)),g.cryst={a:e,b:t,c:r,alpha:n,beta:i,gamma:o}}else if("ANISOU"==A){var q=u[b[parseInt(c.substr(6,5))]];if(q){var H=c.substr(30).trim().split(/\s+/),W={u11:parseInt(H[0]),u22:parseInt(H[1]),u33:parseInt(H[2]),u12:parseInt(H[3]),u13:parseInt(H[4]),u23:parseInt(H[5])};q.uMat=W}}}else{var Y,Z=new $3Dmol.Matrix4;for(Y=1;Y<=3;Y++)if(c=e[r].replace(/^\s*/,""),parseInt(c.substr(18,1))==Y)Z.elements[Y-1]=parseFloat(c.substr(23,10)),Z.elements[Y-1+4]=parseFloat(c.substr(33,10)),Z.elements[Y-1+8]=parseFloat(c.substr(43,10)),Z.elements[Y-1+12]=parseFloat(c.substr(53)),r++;else for(;"BIOMT"==c.substr(13,5);)c=e[++r].replace(/^\s*/,"");Z.elements[3]=0,Z.elements[7]=0,Z.elements[11]=0,Z.elements[15]=1,g.symmetries.push(Z),r--}}(new Date).getTime();if(function(e,t){for(var r=0,n=e.length;r<n;r++)for(var i=e[r],o=0;o<i.bonds.length;o++){var a=e[i.bonds[o]],s=t[i.serial];a&&s&&a.bonds.indexOf(s)<0&&(a.bonds.push(s),a.bondOrder.push(i.bondOrder[o]))}}(u,b),o(u),p||s(g.symmetries,m,u),d&&!f&&((new Date).getTime(),a(u)),(new Date).getTime(),!function(e){var t;for(t in e)return!1;return!0}(n))for(let e=0;e<u.length;e++)if(void 0!==(i=u[e])&&i.chain in n&&i.resi in n[i.chain]){var X=n[i.chain][i.resi];i.ss=X[0],X.length>1&&("1"==X[1]?i.ssbegin=!0:"2"==X[1]&&(i.ssend=!0))}return[u,g,y]};e.pdb=e.PDB=e.pdbqt=e.PDBQT=function(e,t){var r=[],n={};r.modelData=[];for(var i=e.split(/\r?\n|\r/);i.length>0;){var o=c(i,t,n),a=o[0],s=o[1];if(i=o[2],0!=a.length){if(t.multimodel&&t.onemol&&r.length>0)for(var l=r[0].length,u=0;u<a.length;u++){var h=a[u];h.index=u;for(var f=0;f<h.bonds.length;f++)h.bonds[f]+=l;r[0].push(h)}else r.modelData.push(s),r.push(a);if(!t.multimodel)break}}return r},e.pqr=e.PQR=function(e,t){var r=[[]],n=!t.noSecondaryStructure;r.modelData=[{symmetries:[]}];var i,s=[],l=e.split(/\r?\n|\r/);for(let e=0;e<l.length;e++){var c=(i=l[e].replace(/^\s*/,"")).substr(0,6);if(0==c.indexOf("END")){if(t.multimodel){t.onemol||r.push([]);continue}break}if("ATOM  "==c||"HETATM"==c){var u;let e=parseInt(i.substr(6,5)),t=i.substr(12,4).replace(/ /g,""),n=i.substr(17,3),o=i.substr(21,1),a=parseInt(i.substr(22,4));var h=i.substr(30).trim().split(/\s+/),f=parseFloat(h[0]),d=parseFloat(h[1]),p=parseFloat(h[2]),m=parseFloat(h[3]),v=parseFloat(h[4]),g=t[0];t.length>1&&t[1].toUpperCase()!=t[1]&&(g=t.substr(0,2)),u="H"==i[0],s[e]=r[r.length-1].length,r[r.length-1].push({resn:n,x:f,y:d,z:p,elem:g,hetflag:u,chain:o,resi:a,serial:e,atom:t,bonds:[],ss:"c",bondOrder:[],properties:{charge:m,partialCharge:m,radius:v},pdbline:i})}else if("CONECT"==c){var y=parseInt(i.substr(6,5)),b=r[r.length-1][s[y]];for(let e=0;e<4;e++){var x=parseInt(i.substr([11,16,21,26][e],5)),w=r[r.length-1][s[x]];void 0!==b&&void 0!==w&&(b.bonds.push(s[x]),b.bondOrder.push(1))}}}for(let e=0;e<r.length;e++)o(r[e]),n&&a(r[e]);return r};var u=function(e){return String.fromCharCode.apply(null,e).replace(/\0/g,"")},h=function(e){return 0==e||2==e||4==e?"h":3==e?"s":"c"};return e.mmtf=e.MMTF=function(e,t){var r=!t.keepH,n=t.altLoc?t.altLoc:"A",i=!!t.noSecondaryStructure,o=!t.noComputeSecondaryStructure,l=!t.doAssembly,c=!t.duplicateAssemblyAtoms,f=t.assemblyIndex?t.assemblyIndex:0;"string"==typeof e&&(e=$3Dmol.base64ToArray(e));var d,p,m,v,g,y,b=MMTF.decode(e),x=[[]],w=x.modelData=[],D=0,C=0,A=0,$=0,S=b.secStructList,M=b.insCodeList,_=b.sequenceIndexList,z=b.bFactorList,T=b.altLocList,L=b.occupancyList,E=b.bondAtomList,F=b.bondOrderList,k=b.numModels;if(0==k)return x;t.multimodel||(k=1);var I=[];if(!l&&b.bioAssemblyList&&b.bioAssemblyList.length>0){var P=b.bioAssemblyList[f].transformList;for(d=0,y=P.length;d<y;d++){var O=new $3Dmol.Matrix4(P[d].matrix);O.transpose(),I.push(O)}}var R=null;if(b.unitCell){var N=b.unitCell;R={a:N[0],b:N[1],c:N[2],alpha:N[3],beta:N[4],gamma:N[5]}}var B=0;for(g=0;g<k;g++){var V=b.chainsPerModel[g],U=x[x.length-1],j=[];for(w.push({symmetries:I,cryst:R}),d=0;d<V;++d){var G=b.groupsPerChain[C],q=u(b.chainIdList.subarray(4*C,4*C+4));b.chainNameList&&(q=u(b.chainNameList.subarray(4*C,4*C+4)));var H=A,W="";for(p=0;p<G;++p){var Y=b.groupList[b.groupTypeList[A]],Z=Y.atomNameList.length,X=0,Q=!1,K=!1;if(S){X=S[A];var J=h(X);0!=A&&J==W||(Q=!0),W=J;var ee=A+1;(ee>=S.length||h(S[ee]!=J))&&(K=!0)}b.insCodeList&&String.fromCharCode(M[A]);_&&_[A];var te=b.groupIdList[A],re=Y.groupName,ne=$;for(m=0;m<Z;++m){var ie=Y.elementList[m];if(r&&"H"==ie)$+=1;else{var oe="";z&&(oe=z[$]);var ae="";T&&T[$]&&(ae=String.fromCharCode(T[$]));var se="";if(L&&(se=L[$]),""==ae||ae==n||"*"==n){var le=b.atomIdList[$],ce=Y.atomNameList[m],ue=0;Y.atomChargeList&&(ue=Y.atomChargeList[m]);var he=b.xCoordList[$],fe=b.yCoordList[$],de=b.zCoordList[$];j[$]=U.length,U.push({resn:re,x:he,y:fe,z:de,elem:ie,hetflag:X<0,chain:q,resi:te,icode:ae,rescode:te+(" "!=ae?"^"+ae:""),serial:le,altLoc:ae,index:$,atom:ce,bonds:[],ss:h(X),ssbegin:Q,ssend:K,bondOrder:[],properties:{charge:ue,occupancy:se},b:oe}),$+=1}else $+=1}}var pe=Y.bondAtomList;for(m=0,v=Y.bondOrderList.length;m<v;++m){var me=ne+pe[2*m],ve=ne+pe[2*m+1],ge=Y.bondOrderList[m],ye=j[me],be=j[ve],xe=U[ye],we=U[be];xe&&we&&(xe.bonds.push(be),xe.bondOrder.push(ge),we.bonds.push(ye),we.bondOrder.push(ge))}A+=1}for(A=H,p=0;p<G;++p)A+=1;C+=1}if(E)for(let e=B,t=E.length;e<t;e+=2){let t=E[e],r=E[e+1],n=F?F[e/2]:1;if(t>=$){B=e;break}let i=j[t],o=j[r],a=U[i],s=U[o];a&&s&&(a.bonds.push(o),a.bondOrder.push(n),s.bonds.push(i),s.bondOrder.push(n))}if(t.multimodel&&(t.onemol||x.push([])),!l)for(let e=0;e<x.length;e++)s(w[D].symmetries,c,x[e]);D+=1}return o&&!i&&a(x),x},e.prmtop=e.PRMTOP=function(e){var t,r=[],n=0,i=e.split(/\r?\n|\r/);if(!(i.length>0&&i[0].includes("VERSION")))return[];var o=i.filter(function(e){return e.includes("POINTERS")||e.includes("ATOM_NAME")||e.includes("CHARGE")||e.includes("RADII")||e.includes("BONDS_INC_HYDROGEN")||e.includes("BONDS_WITHOUT_HYDROGEN")}),a=u("POINTERS");if(-1==a)return[];var s=h(a),l=parseInt(i[a+1].slice(0,s[1]));if(isNaN(l)||l<=0)return[];if(-1==(a=u("ATOM_NAME")))return[];var c=(s=h(a))[0];for(let e=0;e<l/s[0];e++){e==parseInt(l/s[0])&&(c=l%s[0]);for(let e=0;e<c;e++){let t={},o={charge:"",radii:""};t.serial=n,t.x=0,t.y=0,t.z=0,t.atom=i[a+1].slice(s[1]*e,s[1]*(e+1)),t.elem=i[a+1].slice(s[1]*e,s[1]*e+1),t.properties=o,t.bonds=[],t.bondOrder=[],r.push(t),n++}a++}if(-1!=(a=u("CHARGE"))){n=0,c=(s=h(a))[0];for(let e=0;e<l/s[0];e++){e==parseInt(l/s[0])&&(c=l%s[0]);for(let e=0;e<c;e++)r[n].properties.charge=parseFloat(i[a+1].slice(s[1]*e,s[1]*(e+1))),n++;a++}}if(-1!=(a=u("RADII"))){n=0,c=(s=h(a))[0];for(let e=0;e<l/s[0];e++){e==parseInt(l/s[0])&&(c=l%s[0]);for(let e=0;e<c;e++)r[n].properties.radii=parseFloat(i[a+1].slice(s[1]*e,s[1]*(e+1))),n++;a++}}if(-1!=(a=u("BONDS_WITHOUT_HYDROGEN")))for(n=0,c=(s=h(a))[0],a+=1;!i[a].match(/^%FLAG/);){i[a+1].match(/^%FLAG/)&&(c=l%s[0]);for(let e=0;e<c;e++)n%3==0?t=parseInt(i[a].slice(s[1]*e,s[1]*(e+1))/3):n%3==1&&r[t].bonds.push(parseInt(i[a].slice(s[1]*e,s[1]*(e+1))/3)),n++;a++}if(-1!=(a=u("BONDS_INC_HYDROGEN")))for(n=0,c=(s=h(a))[0],a+=1;!i[a].match(/^%FLAG/);){i[a+1].match(/^%FLAG/)&&(c=l%s[0]);for(let e=0;e<c;e++)n%3==0?t=parseInt(i[a].slice(s[1]*e,s[1]*(e+1))/3):n%3==1&&r[t].bonds.push(parseInt(i[a].slice(s[1]*e,s[1]*(e+1))/3)),n++;a++}function u(e){var t=i.indexOf(o.filter(function(t){return t.includes(e)})[0]);if(Number.isInteger(t)&&t>0){for(;!i[t].includes("FORMAT");)t++;return t}return-1}function h(e){var t=i[e].match(/\((\d*)\S*/),r=i[e].match(/[a-zA-Z](\d*)\)\s*/);return null==r&&(r=i[e].match(/[a-zA-Z](\d*)\.\d*\)\s*/)),[t[1],r[1]]}return[r]},e.gro=e.GRO=function(e){for(var t=[],r=e.split(/\r?\n|\r/);r.length>0&&!(r.length<3);){var n=parseInt(r[1]);if(isNaN(n)||n<=0)break;if(r.length<n+3)break;var i=[];t.push(i);for(var a=2,s=i.length,c=s+n,u=s;u<c;u++){var h=r[a++],f={};f.serial=u,f.atom=h.slice(10,15).trim(),f.elem=l(f.atom,!0),f.x=10*parseFloat(h.slice(20,28)),f.y=10*parseFloat(h.slice(28,36)),f.z=10*parseFloat(h.slice(36,44)),f.resi=parseInt(h.slice(0,5)),f.resn=h.slice(5,10).trim(),f.bonds=[],f.bondOrder=[],f.properties={},h.length>44&&(f.dx=10*parseFloat(h.slice(44,52)),f.dy=10*parseFloat(h.slice(52,60)),f.dz=10*parseFloat(h.slice(60,68))),i[u]=f}if(r.length<=a+3){var d=r[a++].trim().split(/\s+/);if(3==d.length){for(var p=0;p<3;p++)d[p]=10*parseFloat(d[p]);t.box=d}}r.splice(0,++a)}for(let e=0;e<t.length;e++)o(t[e]);return t},e.lammpstrj=e.LAMMPSTRJ=function(e,t){for(var r=[],n={id:"serial",type:"atom",element:"elem",q:"charge",radius:"radius",x:"x",xu:"x",xs:"x",xsu:"x",y:"y",yu:"y",ys:"y",ysu:"y",z:"z",zu:"z",zs:"z",zsu:"z"},o=e.split(/\r?\n|\r/),a=0,s=0,l=0;l<o.length-9;){for(var c=l;c<o.length;c++)if(o[c].match(/ITEM: NUMBER OF ATOMS/)&&(s=parseInt(o[c+1])),o[c].match(/ITEM: ATOMS/)){a=c+1;break}var u=o[a-1].replace("ITEM: ATOMS ","").split(" ");r.push([]);for(let e=a;e<a+s;e++){for(var h={},f={},d=o[e].split(" "),p=0;p<d.length;p++){var m=n[u[p]];null!=m&&("serial"==m?h[m]=parseInt(d[p]):"x"==m||"y"==m||"z"===m?h[m]=parseFloat(d[p]):"charge"==m||"radius"==m?f[m]=parseFloat(d[p]):h[m]=d[p]),h.properties=f,h.bonds=[],h.bondOrder=[]}r[r.length-1][e-a]=h}l=a+s-1}if(t.assignbonds)for(var v=0;v<r.length;v++)i(r[v]);return r},e}();var $3Dmol=$3Dmol||{};$3Dmol.partialCharges={"ALA:N":-.15,"ALA:CA":.1,"ALA:CB":0,"ALA:C":.6,"ALA:O":-.55,"ARG:N":-.15,"ARG:CA":.1,"ARG:CB":0,"ARG:CG":0,"ARG:CD":.1,"ARG:NE":-.1,"ARG:CZ":.5,"ARG:NH1":.25,"ARG:NH2":.25,"ARG:C":.6,"ARG:O":-.55,"ASN:N":-.15,"ASN:CA":.1,"ASN:CB":0,"ASN:CG":.55,"ASN:OD1":-.55,"ASN:ND2":0,"ASN:C":.6,"ASN:O":-.55,"ASP:N":-.15,"ASP:CA":.1,"ASP:CB":0,"ASP:CG":.14,"ASP:OD1":-.57,"ASP:OD2":-.57,"ASP:C":.6,"ASP:O":-.55,"CYS:N":-.15,"CYS:CA":.1,"CYS:CB":.19,"CYS:SG":-.19,"CYS:C":.6,"CYS:O":-.55,"GLN:N":-.15,"GLN:CA":.1,"GLN:CB":0,"GLN:CG":0,"GLN:CD":.55,"GLN:OE1":-.55,"GLN:NE2":0,"GLN:C":.6,"GLN:O":-.55,"GLU:N":-.15,"GLU:CA":.1,"GLU:CB":0,"GLU:CG":0,"GLU:CD":.14,"GLU:OE1":-.57,"GLU:OE2":-.57,"GLU:C":.6,"GLU:O":-.55,"GLY:N":-.15,"GLY:CA":.1,"GLY:C":.6,"GLY:O":-.55,"HIS:N":-.15,"HIS:CA":.1,"HIS:CB":0,"HIS:CG":.1,"HIS:ND1":-.1,"HIS:CD2":.1,"HIS:NE2":-.4,"HIS:CE1":.3,"HIS:C":.6,"HIS:O":-.55,"ILE:N":-.15,"ILE:CA":.1,"ILE:CB":0,"ILE:CG2":0,"ILE:CG1":0,"ILE:CD":0,"ILE:C":.6,"ILE:O":-.55,"LEU:N":-.15,"LEU:CA":.1,"LEU:CB":0,"LEU:CG":0,"LEU:CD1":0,"LEU:CD2":0,"LEU:C":.6,"LEU:O":-.55,"LYS:N":-.15,"LYS:CA":.1,"LYS:CB":0,"LYS:CG":0,"LYS:CD":0,"LYS:CE":.25,"LYS:NZ":.75,"LYS:C":.6,"LYS:O":-.55,"MET:N":-.15,"MET:CA":.1,"MET:CB":0,"MET:CG":.06,"MET:SD":-.12,"MET:CE":.06,"MET:C":.6,"MET:O":-.55,"PHE:N":-.15,"PHE:CA":.1,"PHE:CB":0,"PHE:CG":0,"PHE:CD1":0,"PHE:CD2":0,"PHE:CE1":0,"PHE:CE2":0,"PHE:CZ":0,"PHE:C":.6,"PHE:O":-.55,"PRO:N":-.25,"PRO:CD":.1,"PRO:CA":.1,"PRO:CB":0,"PRO:CG":0,"PRO:C":.6,"PRO:O":-.55,"SER:N":-.15,"SER:CA":.1,"SER:CB":.25,"SER:OG":-.25,"SER:C":.6,"SER:O":-.55,"THR:N":-.15,"THR:CA":.1,"THR:CB":.25,"THR:OG1":-.25,"THR:CG2":0,"THR:C":.6,"THR:O":-.55,"TRP:N":-.15,"TRP:CA":.1,"TRP:CB":0,"TRP:CG":-.03,"TRP:CD2":.1,"TRP:CE2":-.04,"TRP:CE3":-.03,"TRP:CD1":.06,"TRP:NE1":-.06,"TRP:CZ2":0,"TRP:CZ3":0,"TRP:CH2":0,"TRP:C":.6,"TRP:O":-.55,"TYR:N":-.15,"TYR:CA":.1,"TYR:CB":0,"TYR:CG":0,"TYR:CD1":0,"TYR:CE1":0,"TYR:CD2":0,"TYR:CE2":0,"TYR:CZ":.25,"TYR:OH":-.25,"TYR:C":.6,"TYR:O":-.55,"VAL:N":-.15,"VAL:CA":.1,"VAL:CB":0,"VAL:CG1":0,"VAL:CG2":0,"VAL:C":.6,"VAL:O":-.55},$3Dmol.applyPartialCharges=function(e,t){if((!t||void 0===e.partialCharge)&&e.resn&&e.atom){var r=e.resn+":"+e.atom;e.properties.partialCharge=$3Dmol.partialCharges[r]}},$3Dmol.VolumeData=function(e,t,r){if(this.unit={x:1,y:1,z:1},this.origin={x:0,y:0,z:0},this.size={x:0,y:0,z:0},this.data=new Float32Array([]),this.matrix=null,t=t.toLowerCase(),/\.gz$/.test(t)){t=t.replace(/\.gz$/,"");try{e=this[t]&&this[t].isbinary?pako.inflate(e):new TextDecoder("utf-8").decode(pako.inflate(e))}catch(e){console.log(e)}}if(this[t]&&this[t](e),r){if(r.negate)for(let e=0,t=this.data.length;e<t;e++)this.data[e]=-this.data[e];if(r.normalize){var n=0;for(let e=0,t=this.data.length;e<t;e++)n+=this.data[e];var i=n/this.data.length;console.log("computed mean: "+i),n=0;for(let e=0,t=this.data.length;e<t;e++){var o=this.data[e]-i;n+=o*o}var a=n/this.data.length;for(let e=0,t=this.data.length;e<t;e++)this.data[e]=(this.data[e]-i)/a}}},$3Dmol.VolumeData.prototype.getVal=function(e,t,r){if(this.matrix){this.inversematrix||(this.inversematrix=(new $3Dmol.Matrix4).getInverse(this.matrix));var n=new $3Dmol.Vector3(e,t,r);e=(n=n.applyMatrix4(this.inversematrix)).x,t=n.y,r=n.z}else e-=this.origin.x,t-=this.origin.y,r-=this.origin.z,e/=this.unit.x,t/=this.unit.y,r/=this.unit.z;return e=Math.round(e),t=Math.round(t),r=Math.round(r),e<0||e>=this.size.x?0:t<0||t>=this.size.y?0:r<0||r>=this.size.z?0:this.data[e*this.size.y*this.size.z+t*this.size.z+r]},$3Dmol.VolumeData.prototype.getCoordinates=function(e){var t=e/(this.size.y*this.size.z),r=e%(this.size.y*this.size.z),n=e%this.size.z;return t*=this.unit.x,r*=this.unit.y,n*=this.unit.z,{x:t+=this.origin.x,y:r+=this.origin.y,z:n+=this.origin.z}},$3Dmol.VolumeData.prototype.vasp=function(e){var t=e.replace(/^\s+/,"").split(/[\n\r]/),r=$3Dmol.Parsers.vasp(e)[0].length;if(0==r)return console.log("No good formating of CHG or CHGCAR file, not atomic information provided in the file."),void(this.data=[]);var n,i=1.889725992,o=parseFloat(t[1]);n=t[2].replace(/^\s+/,"").split(/\s+/);var a=new $3Dmol.Vector3(parseFloat(n[0]),parseFloat(n[1]),parseFloat(n[2])).multiplyScalar(o*i);n=t[3].replace(/^\s+/,"").split(/\s+/);var s=new $3Dmol.Vector3(parseFloat(n[0]),parseFloat(n[1]),parseFloat(n[2])).multiplyScalar(o*i);n=t[4].replace(/^\s+/,"").split(/\s+/);var l=new $3Dmol.Vector3(parseFloat(n[0]),parseFloat(n[1]),parseFloat(n[2])).multiplyScalar(o*i),c=a.x*(s.y*l.z-l.y*s.z)-s.x*(a.y*l.z-l.y*a.z)+l.x*(a.y*s.z-s.y*a.z),u=1/(c=Math.abs(c)/Math.pow(i,3));t.splice(0,8+r+1);var h=t[0].replace(/^\s+/,"").replace(/\s+/g," ").split(" "),f=Math.abs(h[0]),d=Math.abs(h[1]),p=Math.abs(h[2]),m=this.origin=new $3Dmol.Vector3(0,0,0);this.size={x:f,y:d,z:p},this.unit=new $3Dmol.Vector3(a.x,s.y,l.z),a=a.multiplyScalar(1/(i*f)),s=s.multiplyScalar(1/(i*d)),l=l.multiplyScalar(1/(i*p)),0==a.y&&0==a.z&&0==s.x&&0==s.z&&0==l.x&&0==l.y||(this.matrix=new $3Dmol.Matrix4(a.x,s.x,l.x,0,a.y,s.y,l.y,0,a.z,s.z,l.z,0,0,0,0,1),this.matrix=this.matrix.multiplyMatrices(this.matrix,(new $3Dmol.Matrix4).makeTranslation(m.x,m.y,m.z)),this.origin=new $3Dmol.Vector3(0,0,0),this.unit=new $3Dmol.Vector3(1,1,1)),t.splice(0,1);var v=t.join(" ");(v=(v=v.replace(/^\s+/,"")).split(/[\s\r]+/)).splice(f*d*p+1);for(var g=new Float32Array(v),y=0;y<g.length;y++)g[y]=g[y]*u*.036749309;this.data=g},$3Dmol.VolumeData.prototype.dx=function(e){var t,r,n=e.split(/[\n\r]+/),i=/gridpositions\s+counts\s+(\d+)\s+(\d+)\s+(\d+)/,o=/^origin\s+(\S+)\s+(\S+)\s+(\S+)/,a=/^delta\s+(\S+)\s+(\S+)\s+(\S+)/,s=/data follows/;for(t=0;t<n.length;t++){var l=n[t];if(r=i.exec(l)){var c=parseInt(r[1]),u=parseInt(r[2]),h=parseInt(r[3]);this.size={x:c,y:u,z:h}}else if(r=a.exec(l)){var f=parseFloat(r[1]);if(0==parseFloat(r[2])&&0==parseFloat(r[3])||console.log("Non-orthogonal delta matrix not currently supported in dx format"),l=n[t+=1],null==(r=a.exec(l)))return void console.log("Parse error in dx delta matrix");var d=parseFloat(r[2]);if(0==parseFloat(r[1])&&0==parseFloat(r[3])||console.log("Non-orthogonal delta matrix not currently supported in dx format"),l=n[t+=1],null==(r=a.exec(l)))return void console.log("Parse error in dx delta matrix");var p=parseFloat(r[3]);0==parseFloat(r[1])&&0==parseFloat(r[2])||console.log("Non-orthogonal delta matrix not currently supported in dx format"),this.unit=new $3Dmol.Vector3(f,d,p)}else if(r=o.exec(l)){var m=parseFloat(r[1]),v=parseFloat(r[2]),g=parseFloat(r[3]);this.origin=new $3Dmol.Vector3(m,v,g)}else if(r=s.exec(l))break}if(t+=1,this.size&&this.origin&&this.unit&&this.size){var y=n.splice(t).join(" ");y=y.split(/[\s\r]+/),this.data=new Float32Array(y)}else console.log("Error parsing dx format")},$3Dmol.VolumeData.prototype.cube=function(e){var t=e.replace(/^\s+/,"").split(/[\n\r]+/);if(!(t.length<6)){var r=t[2].replace(/^\s+/,"").replace(/\s+/g," ").split(" "),n=parseFloat(r[0]),i=Math.abs(n),o=this.origin=new $3Dmol.Vector3(parseFloat(r[1]),parseFloat(r[2]),parseFloat(r[3])),a=(r=t[3].replace(/^\s+/,"").replace(/\s+/g," ").split(" "))[0]>0?.529177:1;o.multiplyScalar(a);var s=Math.abs(r[0]),l=new $3Dmol.Vector3(parseFloat(r[1]),parseFloat(r[2]),parseFloat(r[3])).multiplyScalar(a);r=t[4].replace(/^\s+/,"").replace(/\s+/g," ").split(" ");var c=Math.abs(r[0]),u=new $3Dmol.Vector3(parseFloat(r[1]),parseFloat(r[2]),parseFloat(r[3])).multiplyScalar(a);r=t[5].replace(/^\s+/,"").replace(/\s+/g," ").split(" ");var h=Math.abs(r[0]),f=new $3Dmol.Vector3(parseFloat(r[1]),parseFloat(r[2]),parseFloat(r[3])).multiplyScalar(a);this.size={x:s,y:c,z:h},this.unit=new $3Dmol.Vector3(l.x,u.y,f.z),0==l.y&&0==l.z&&0==u.x&&0==u.z&&0==f.x&&0==f.y||(this.matrix=new $3Dmol.Matrix4(l.x,u.x,f.x,0,l.y,u.y,f.y,0,l.z,u.z,f.z,0,0,0,0,1),this.matrix=this.matrix.multiplyMatrices(this.matrix,(new $3Dmol.Matrix4).makeTranslation(o.x,o.y,o.z)),this.origin=new $3Dmol.Vector3(0,0,0),this.unit=new $3Dmol.Vector3(1,1,1));var d=6;n<0&&d++;var p=t.splice(i+d).join(" ");p=(p=p.replace(/^\s+/,"")).split(/[\s\r]+/),this.data=new Float32Array(p)}},$3Dmol.VolumeData.prototype.ccp4=function(e){var t={};e=new Int8Array(e);var r=new Int32Array(e.buffer,0,56),n=new Float32Array(e.buffer,0,56),i=new DataView(e.buffer);if(t.MAP=String.fromCharCode(i.getUint8(208),i.getUint8(209),i.getUint8(210),i.getUint8(211)),t.MACHST=[i.getUint8(212),i.getUint8(213)],17===t.MACHST[0]&&17===t.MACHST[1])for(var o=e.byteLength,a=0;a<o;a+=4)i.setFloat32(a,i.getFloat32(a),!0);t.NX=r[0],t.NY=r[1],t.NZ=r[2],t.MODE=r[3],t.NXSTART=r[4],t.NYSTART=r[5],t.NZSTART=r[6],t.MX=r[7],t.MY=r[8],t.MZ=r[9],t.xlen=n[10],t.ylen=n[11],t.zlen=n[12],t.alpha=n[13],t.beta=n[14],t.gamma=n[15],t.MAPC=r[16],t.MAPR=r[17],t.MAPS=r[18],t.DMIN=n[19],t.DMAX=n[20],t.DMEAN=n[21],t.ISPG=r[22],t.NSYMBT=r[23],t.LSKFLG=r[24],t.originX=n[49],t.originY=n[50],t.originZ=n[51],t.ARMS=n[54];var s=t,l=[s.xlen,0,0],c=[s.ylen*Math.cos(Math.PI/180*s.gamma),s.ylen*Math.sin(Math.PI/180*s.gamma),0],u=[s.zlen*Math.cos(Math.PI/180*s.beta),s.zlen*(Math.cos(Math.PI/180*s.alpha)-Math.cos(Math.PI/180*s.gamma)*Math.cos(Math.PI/180*s.beta))/Math.sin(Math.PI/180*s.gamma),0];u[2]=Math.sqrt(s.zlen*s.zlen*Math.sin(Math.PI/180*s.beta)*Math.sin(Math.PI/180*s.beta)-u[1]*u[1]);var h=[0,l,c,u],f=[0,s.MX,s.MY,s.MZ],d=[0,s.MAPC,s.MAPR,s.MAPS];this.matrix=new $3Dmol.Matrix4,this.matrix.set(h[d[1]][0]/f[d[1]],h[d[2]][0]/f[d[2]],h[d[3]][0]/f[d[3]],0,h[d[1]][1]/f[d[1]],h[d[2]][1]/f[d[2]],h[d[3]][1]/f[d[3]],0,h[d[1]][2]/f[d[1]],h[d[2]][2]/f[d[2]],h[d[3]][2]/f[d[3]],0,0,0,0,1),this.matrix=this.matrix.multiplyMatrices(this.matrix,(new $3Dmol.Matrix4).makeTranslation(s.NXSTART+s.originX,s.NYSTART+s.originY,s.NZSTART+s.originZ)),this.origin=new $3Dmol.Vector3(0,0,0),this.unit=new $3Dmol.Vector3(1,1,1),this.size={x:t.NX,y:t.NY,z:t.NZ};var p=new Float32Array(e.buffer,1024+t.NSYMBT),m=t.NX,v=t.NY,g=t.NZ;this.data=new Float32Array(m*v*g);for(let e=0;e<m;e++)for(let t=0;t<v;t++)for(let r=0;r<g;r++)this.data[(e*v+t)*g+r]=p[(r*v+t)*m+e]},$3Dmol.VolumeData.prototype.ccp4.isbinary=!0,$3Dmol.workerString=function(){self.onmessage=function(e){var t=e.data,r=t.type;if(r<0)self.atomData=t.atoms,self.volume=t.volume,self.ps=new ProteinSurface;else{var n=self.ps;n.initparm(t.expandedExtent,1!=r,self.volume),n.fillvoxels(self.atomData,t.extendedAtoms),n.buildboundary(),4!==r&&2!==r||(n.fastdistancemap(),n.boundingatom(!1),n.fillvoxelswaals(self.atomData,t.extendedAtoms)),n.marchingcube(r);var i=n.getFacesAndVertices(t.atomsToShow);self.postMessage(i)}}}.toString().replace(/(^.*?\{|\}$)/g,""),$3Dmol.workerString+="; var ProteinSurface="+$3Dmol.ProteinSurface.toString().replace(/[a-zA-Z_$]{1}[0-9a-zA-Z_$]*.MarchingCube./g,"MarchingCube."),$3Dmol.workerString+=",MarchingCube=("+$3Dmol.MarchingCubeInitializer.toString()+")();",$3Dmol.SurfaceWorker=window.URL?window.URL.createObjectURL(new Blob([$3Dmol.workerString],{type:"text/javascript"})):{postMessage:function(){}},$3Dmol.workerString=$3Dmol.workerString,$3Dmol.SurfaceWorker=$3Dmol.SurfaceWorker;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("VS3o"), __webpack_require__("EVdn")))

/***/ }),

/***/ "yLpj":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

}]);