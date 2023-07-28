//  Prototype functions in Javascript 
/*
    1- anchor()
    The anchor method returns a string embedded in an <a> tag
    String anchor() is deprecated in JavaScript.
    -----------------------------------------------------------------------
    2- at() method returns an indexed character from a string.
    -----------------------------------------------------------------------
    3- big() method returns a string embedded in a <big> tag
    String big() is deprecated in JavaScript.
    -----------------------------------------------------------------------
    4-  blink() method a string embedded in a <blink> tag
    String blink() is deprecated in JavaScript.
    ------------------------------------------------------------------------
    5- bold()  method returns a string embedded in a <b> tag
    String bold() is deprecated in JavaScript.
    ------------------------------------------------------------------------
    6- charAt() method returns the character at a specified index (position) in a string.
    The index of the first character is 0, the second 1, ...
    ------------------------------------------------------------------------
    7- charCodeAt() method returns the Unicode of the character at a specified index (position) in a string.
    The index of the first character is 0, the second is 1, ....
    The index of the last character is string length - 1 
    ------------------------------------------------------------------------
    8- codePointAt() method returns the Unicode value at an index (position) in a string.
    The index of the first position is 0, the second is 1, ....
    -------------------------------------------------------------------------
    9- concat()  method joins two or more strings.
    concat() method does not change the existing strings.
    concat() method returns a new string.
    -------------------------------------------------------------------------
    10- endsWith() method returns true if a string ends with a specified string.
    Otherwise it returns false.
    The endsWith() method is case sensitive.
    --------------------------------------------------------------------------
    11- fixed() method returns a string embedded in a <tt> tag
    String fixed() is deprecated in JavaScript.
    ---------------------------------------------------------------------------
    12- fontcolor() method returns a string embedded in a <font> tag
    String fontcolor() is deprecated in JavaScript.
    ---------------------------------------------------------------------------
    13- fontsize()  method returns a string embedded in a <font> tag
    String fontsize() is deprecated in JavaScript.
    ---------------------------------------------------------------------------
    14- includes() method returns true if a string contains a specified string.
    Otherwise it returns false.
    The includes() method is case sensitive.
    ----------------------------------------------------------------------------
    15- indexOf() method returns the position of the first occurrence of a value in a string.
    indexOf() method returns -1 if the value is not found.
    indexOf() method is case sensitive.
    -----------------------------------------------------------------------------
    16- isWellFormed() allows you to test whether a string is well-formed (i.e. does not contain any lone surrogates). Compared to a custom implementation, isWellFormed() is more efficient, as engines can directly access the internal representation of strings. If you need to convert a string to a well-formed string, use the toWellFormed() method. isWellFormed() allows you to handle ill-formed strings differently from well-formed strings, such as throwing an error or marking it as invalid.
    ------------------------------------------------------------------------------
    17- italics() method returns a string embedded in an <i> tag
    String italics() is deprecated in JavaScript.
    ------------------------------------------------------------------------------
    18- lastIndexOf() method returns the index (position) of the last occurrence of a specified value in a string.
    lastIndexOf() method searches the string from the end to the beginning.
    lastIndexOf() method returns the index from the beginning (position 0).
    lastIndexOf() method returns -1 if the value is not found.
    lastIndexOf() method is case sensitive.
    -------------------------------------------------------------------------------
    19- link() method returns a string embedded in an <a> tag
    String link() is deprecated in JavaScript.
    -------------------------------------------------------------------------------
    20- localeCompare() method compares two strings in the current locale.
    localeCompare() method returns sort order -1, 1, or 0 (for before, after, or equal).
    current locale is based on the language settings of the browser.
    --------------------------------------------------------------------------------
    21- match() method matches a string against a regular expression **
    match() method returns an array with the matches.
    match() method returns null if no match is found.
    --------------------------------------------------------------------------------
    22- matchAll() method is used to return all the iterators matching the reference string against a regex (regular expression). An important use of the matchAll() method is that it can be used to capture groups with the /g flag giving it an advantage over the match() method which ignores capturing groups with the /g flag.
    -----------------------------------------------------------------------------------
    23- normalize() is a builtin method in javascript which is used to return a Unicode normalization form of a given input string. If the given input is not a string, then at first it will be converted into a string then this method will work.
    ------------------------------------------------------------------------------------
    24- padEnd()  method pads a string at the end.
    padEnd() method pads a string with another string (multiple times) until it reaches a given length.
    -------------------------------------------------------------------------------------
    25- padStart()  method pads a string from the start.
        padStart() method pads a string with another string (multiple times) until it reaches a given length.
    --------------------------------------------------------------------------------------
    26- repeat() method returns a string with a number of copies of a string.
    repeat() method returns a new string.
    repeat() method does not change the original string.
    ---------------------------------------------------------------------------------------
    27- replace() method searches a string for a value or a regular expression.
    replace() method returns a new string with the value(s) replaced.
    replace() method does not change the original string.
    ----------------------------------------------------------------------------------------
    28- replaceAll() method searches a string for a value or a regular expression.
    replaceAll() method returns a new string with all values replaced.
    replaceAll() method does not change the original string.
    replaceAll() method was introduced in JavaScript 2021.
    replaceAll() method does not work in Internet Explorer.
    ----------------------------------------------------------------------------------------
    29- search() method matches a string against a regular expression **
    search() method returns the index (position) of the first match.
    search() method returns -1 if no match is found.
    search() method is case sensitive.
    -----------------------------------------------------------------------------------------
    30- slice() method extracts a part of a string.
    slice() method returns the extracted part in a new string.
    slice() method does not change the original string.
    start and end parameters specifies the part of the string to extract.
    The first position is 0, the second is 1, ...
    A negative number selects from the end of the string.
    ----------------------------------------------------------------------------------------
    31- small() method returns a string embedded in a <small> tag
    String small() is deprecated in JavaScript.
    -----------------------------------------------------------------------------------------
    32- split() method splits a string into an array of substrings.
    split() method returns the new array.
    split() method does not change the original string.
    If (" ") is used as separator, the string is split between words.
    ------------------------------------------------------------------------------------------
    33- startsWith() method returns true if a string starts with a specified string.
    Otherwise it returns false.
    -------------------------------------------------------------------------------------------
    34- strike() method returns a string embedded in a <strike> tag 
    String strike() is deprecated in JavaScript.
    --------------------------------------------------------------------------------------------
    35- substr() method extracts a part of a string.
    substr() method begins at a specified position, and returns a specified number of characters.
    substr() method does not change the original string.
    To extract characters from the end of the string, use a negative start position.
    ---------------------------------------------------------------------------------------------
    36- substring() method extracts characters, between two indices (positions), from a string, and returns the substring.
    substring() method extracts characters from start to end (exclusive).
    substring() method does not change the original string.
    If start is greater than end, arguments are swapped: (4, 1) = (1, 4).
    Start or end values less than 0, are treated as 0.
    -----------------------------------------------------------------------------------------------
    37- toLocaleLowerCase() method converts a string to lowercase letters, using current locale.
    locale is based on the language settings of the browser.
    toLocaleLowerCase() method does not change the original string.
    toLocaleLowerCase() returns the same result as toLowerCase(), except for locales that conflict with the regular Unicode case mappings (such as Turkish).
    -----------------------------------------------------------------------------------------------
    38- toLocaleUpperCase()  method converts a string to uppercase letters, using current locale.
    locale is based on the language settings of the browser.
    toLocaleUpperCase() method does not change the original string.
    toLocaleUpperCase() returns the same result as toUpperCase(), except for locales that conflict with the regular Unicode case mappings (such as Turkish).
    ---------------------------------------------------------------------------------------------------
    39- toLowerCase() method converts a string to lowercase letters.
    toLowerCase() method does not change the original string.
    ----------------------------------------------------------------------------------------------------
    40- toString()  method returns a string as a string.
    toString() method does not change the original string.
    toString() method can be used to convert a string object into a string
    ----------------------------------------------------------------------------------------------------
    41-toUpperCase() method converts a string to uppercase letters.
    toUpperCase() method does not change the original string.
    -----------------------------------------------------------------------------------------------------
    42- trim() method removes whitespace from both sides of a string.
    trim() method does not change the original string.  
    -----------------------------------------------------------------------------------------------------
    43- trimEnd() method removes whitespace from the end of a string.
    The trimEnd() method does not change the original string.
    The trimEnd() method works like trim(), but removes whitespace only from the end of a string.
    -----------------------------------------------------------------------------------------------------
    44- trimStart() method removes whitespace from the beginning of a string.
    trimStart() method does not change the original string.
    trimStart() method works like trim(), but removes whitespace only from the start of a string.
    -----------------------------------------------------------------------------------------------------
    45- valueOf() method returns the primitive value of a string.
    valueOf() method does not change the original string.
    valueOf() method can be used to convert a string object into a string.
    -----------------------------------------------------------------------------------------------------
    */
// =============== Examples of prototype functions ===========================================
/*   anchor() function  */
let tes = "Hello World!";
let link = tes.anchor("Chapter 10");
console.log(link);
// ------------------------------------------------------------------------------
/*   at() function  */
let text = "W3Schools";
let character = text.at(0);
console.log(character);
// ------------------------------------------------------------------------------
/*   big() function  */
let test1 = "Hello World!";
let result = test1.big();
console.log(result);
// ------------------------------------------------------------------------------
/*   blink() function  */
let test2 = "Hello World!";
let total = test2.blink();
console.log(total);
// -------------------------------------------------------------------------------
/*   bold() function  */
let test3 = "Hello World!";
let test_bold = test3.bold();
console.log(test_bold);
// -------------------------------------------------------------------------------
/*   charAt() function  */
let test4 = "HELLO WORLD";
let letter = test4.charAt(test4.length-1);
console.log(letter);
// --------------------------------------------------------------------------------
/*   charCodeAt() function   */
let unicode = "HELLO WORLD";
let code = unicode.charCodeAt(0);
console.log(code);
// ---------------------------------------------------------------------------------
/*  codePointAt() function  */
let point = "HELLO WORLD";
let point_code = point.codePointAt(0);
console.log(point_code);
// ---------------------------------------------------------------------------------
/*   concat() function    */
let fname = "Amir";
let lname = " Gamil";
let fullName = fname.concat(lname);
console.log(fullName);
// ---------------------------------------------------------------------------------
/*  endsWith() function    */
let end = "Hello world";
let Ends = end.endsWith("WoRld");
console.log(Ends);
// ---------------------------------------------------------------------------------
/*  fixed() function    */
let fix = "Hello World!";
let Fixed = fix.fixed();
console.log(Fixed);
// ----------------------------------------------------------------------------------
/*  fontcolor() function   */
let font = "Hello World!";
let fontColor = font.fontcolor("green");
console.log(fontColor);
// -----------------------------------------------------------------------------------
/*  fontsize() function   */
let size = "Hello World!";
let fontSize = size.fontsize(6);
console.log(fontSize);
// ------------------------------------------------------------------------------------
/*  includes() function  */
let include = "Hello world, welcome to the universe.";
let Includes = include.includes("world");
console.log(Includes);
// ------------------------------------------------------------------------------------
/*  indexOf() function   */
let index = "Hello world, welcome to the universe.";
let indexOf = index.indexOf("welcome");
console.log(indexOf);
// ------------------------------------------------------------------------------------
/*  isWellFormed() function  */
const strings = [
    // Lone high surrogate
    "ab\uD800",
    "ab\uD800c",
    // Lone low surrogate
    "\uDFFFab",
    "c\uDFFFab",
    // Well-formed
    "abc",
    "ab\uD83D\uDE04c",
  ];
  
  for (const str of strings) {
    console.log(str.isWellFormed());
  }
// --------------------------------------------------------------------------------------
/*   italics() function   */
let italic = "Hello World!";
let ita = italic.italics();
console.log(ita);
// -------------------------------------------------------------------------------------
/*   lastIndexOf() function   */
let last = "Hello planet earth, you are a great planet.";
let lastIndex = last.lastIndexOf("planet");
console.log(lastIndex);
// -------------------------------------------------------------------------------------
/*  link() function */
let links = "Free Web Building Tutorials!";
let lK = links.link("https://www.w3schools.com");
console.log(lK);
// -------------------------------------------------------------------------------------
/*  localeCompare() function */
let str1 = "cd";
let str2 = "ab";
let compare = str1.localeCompare(str2);
console.log(compare);
// ------------------------------------------------------------------------------------
/* match() function  */
let mtch = "The rain in SPAIN stays mainly in the plain";
let rslt= mtch.match(/ain/);
console.log(rslt);
// -----------------------------------------------------------------------------------
/*  matchAll() function */
function myFunction() {
	
	//Regular expression with the /g flag
	const regex = /e(xam)(ple(\d?))/g;
	//Reference string
	const str = 'example1example2example3';
	
	//Using matchAll() method
	const array = [...str.matchAll(regex)];
	
	console.log(array[0]);
	console.log(array[1]);
	console.log(array[2]);
}
myFunction();
// ----------------------------------------------------------------------------------
/*  normalize() function  */
let a = "Geeks For Geeks";
b = a.normalize('NFC')
c = a.normalize('NFD')
d = a.normalize('NFKC')
e = a.normalize('NFKD')
console.log(b, c, d, e);
// ------------------------------------------------------------------------------------
/*  padEnd() function  */
let testpad = "5";
let padded = testpad.padEnd(4,"x");
console.log(padded);
// ------------------------------------------------------------------------------------
/*   padStart() function  */
let startpad = "5";
let pad = startpad.padStart(4,"x");
console.log(pad);
// -------------------------------------------------------------------------------------
/*   repeat() function   */
let repat = "Hello world!";
let repeaat = repat.repeat(2);
console.log(repeaat);
// ---------------------------------------------------------------------------------------
/*  replace() function   */
let blue = "Mr Blue has a blue house and a blue car";
let replacce = blue.replace(/blue/g, "red");
console.log(replacce);
// ---------------------------------------------------------------------------------------
/*  replaceAll() function  */
let replcAll = "I love cats. Cats are very easy to love. Cats are very popular";
replcAll = replcAll.replaceAll(/Cats/g,"Dogs");
replcAll = replcAll.replaceAll(/cats/g,"dogs");
console.log(replcAll);
// ----------------------------------------------------------------------------------------
/*   search() function  */
let search = "Mr. Blue has a blue house";
let position = text.search(/blue/);
console.log(position); 
// -----------------------------------------------------------------------------------------
/*  slice() function   */
let slic = "Hello world!";
let reslice = slic.slice(0, 4);
console.log(reslice);
// -------------------------------------------------------------------------------------------
/*   small() function  */
let tsmal = "Hello World!";
let rsmal = tsmal.small();
console.log(rsmal);
// ------------------------------------------------------------------------------------------
/*  split() function  */
let tsplit = "How are you doing today?";
const myArray = tsplit.split(" ");
let word = myArray[1];
console.log(word);
// ---------------------------------------------------------------------------------------------
/*   startsWith() function  */
let tstart = "Hello world, welcome to the universe.";
tstart.startsWith("Hello");
console.log(tstart);
// ------------------------------------------------------------------------------------------------
/*  strike() function  */
let tstrike = "Hello World!";
let rstrike = tstrike.strike();
console.log(rstrike);
// -------------------------------------------------------------------------------------------------
/*  substr() function  */
let tsub = "Hello world!";
let rsub = tsub.substr(1, 4);
console.log(rsub)
// --------------------------------------------------------------------------------------------------
/*  substring() function  */
let tsubstring = "Hello world!";
let rsubstring = tsubstring.substring(1, 4);
console.log(rsubstring);
// --------------------------------------------------------------------------------------------------
/*  toLocaleLowerCase() function    */
let tlow = "Hello World!";
let rlow = tlow.toLocaleLowerCase();
console.log(rlow);
// ---------------------------------------------------------------------------------------------------
/*  toLocaleUpperCase() function  */
let tupper = "Hello World!";
let rupper = tupper.toLocaleUpperCase();
console.log(rupper);
// ---------------------------------------------------------------------------------------------------
/*  toLowerCase() function  */
let tlower = "Hello World!";
let rlower = tlower.toLowerCase();
console.log(rlower);
// ----------------------------------------------------------------------------------------------------
/*   toString() function  */
let tstring = "Hello World!";
let rstring = tstring.toString();
console.log(rstring); 
// ----------------------------------------------------------------------------------------------------
/*   toUpperCase() function  */
let tuper = "Hello World!";
let ruper = tuper.toUpperCase();
console.log(ruper);
// ----------------------------------------------------------------------------------------------------
/*  trim() function    */
let trim = "       Hello World!        ";
let rtrim = trim.trim();
console.log(rtrim);
// ------------------------------------------------------------------------------------------------------
/*  trimEnd() function  */
let text1 = "     Hello World!     ";
let text2 = text1.trimEnd();
console.log(text2);
// -------------------------------------------------------------------------------------------------------
/*  trimStart() function  */
let texstart1 = "     Hello World!     ";
let texstart2 = texstart1.trimStart();
console.log(texstart2);
// -------------------------------------------------------------------------------------------------------
/*  valueOf function  */
let val = "Hello World!";
let rval = val.valueOf();
console.log(rval);
// -------------------------------------------------------------------------------------------------------