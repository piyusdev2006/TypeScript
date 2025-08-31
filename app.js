// Basic Types
// Primitive Types (number, string, boolean)
// reference Types
// Arrays
// Tuples
// Enums
// Any (avoid using any whenever possible)
// Void (used for functions that don't return a value)
// Null and Undefined
// Never (used for functions that never return)
// Object
// Type Assertions
// let someValue: any = "This is a string";
// let strLength: number = (someValue as string).length;
// TypeScript allows you to explicitly specify types for variables.
// let age: number = 30;
// let userName: string = "Alice";
// let isStudent: boolean = true;
// Reference Types :- [], {}, ()
// Primitives
var age = 12;
var isValid = true;
var name = "Naveen";
// Arrays
var subjects = ["DWDM", "Data Analytics", "DAA", "DBMS", "Web Technology", "COI", 5];
// Tuples
var person = ["Naveen", 25];
var employee = ["John", 30];
// Enums: Enumrations
var userRole;
(function (userRole) {
    userRole["ADMIN"] = "admin";
    userRole["USER"] = "user";
    userRole["GUEST"] = "guest";
    userRole["SUPER_ADMIN"] = "superadmin";
})(userRole || (userRole = {}));
// Any , Unknown, undefined, null, void, never
// Any
var a = 5;
// Unknown
var unknownValue = 10;
unknownValue = "Hello";
unknownValue = true;
// Type assertion with unknown
if (typeof unknownValue === "string") {
    console.log(unknownValue.toUpperCase());
}
// Void
function logMessage() {
    console.log("This is a message");
}
// Null and Undefined
var u = undefined;
var n = null;
// Never
function throwError(message) {
    throw new Error(message);
}
// Type Inference --- automatic type deduction by the compiler
// type annotations:- define the type of a variable explicitly using colon
var k = 10;
function abcd(a, b) {
    return a + b;
}
// *Using interfaces to define object shapes
// Functions :
function getDataOfUser(obj) {
    console.log(obj.name);
    console.log(obj.email);
    console.log(obj.password);
    if (obj.gender) {
        console.log(obj.gender);
    }
    console.log(obj.role);
}
var hariom;
var abc;
function acb(obj) {
    return obj;
}
// *Intersection Types
/*
classes and Object

* class definition
* constructor
* Access Modifiers(Public, private, protected)
* Readonly properties
* optional properties
* parameter properties
* static members
* getters and setters
* Abstract classes and Methods
*/
// class
var Movie = /** @class */ (function () {
    function Movie() {
        this.title = "Avengers";
        this.director = "Joss Whedon";
        this.releaseYear = 2012;
    }
    return Movie;
}());
var m1 = new Movie();
console.log(m1.title);
// constructor
var Music = /** @class */ (function () {
    function Music(name, artist, releaseYear) {
        this.name = name;
        this.artist = artist;
        this.releaseYear = releaseYear;
    }
    return Music;
}());
// Another way to define constructor
var Musics = /** @class */ (function () {
    function Musics(name, artist, releaseYear) {
        this.name = name;
        this.artist = artist;
        this.releaseYear = releaseYear;
    }
    return Musics;
}());
var music1 = new Music("Shape of You", "Ed Sheeran", 2017);
music1.name = "Perfect"; // allowed but it's create a big problem
