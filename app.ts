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
let age = 12;
let isValid = true
const name = "Naveen";

// Arrays
let subjects = ["DWDM", "Data Analytics", "DAA","DBMS", "Web Technology", "COI", 5]


// Tuples

let person: [string, number] = ["Naveen", 25];
let employee: [string, number] = ["John", 30];


// Enums: Enumrations

enum userRole {
    ADMIN = "admin",
    USER = "user",
    GUEST = "guest",
    SUPER_ADMIN = "superadmin",
}


// Any , Unknown, undefined, null, void, never

// Any
let a: any = 5;

// Unknown
let unknownValue: unknown = 10;
unknownValue = "Hello";
unknownValue = true;

// Type assertion with unknown
if (typeof unknownValue === "string") {
  console.log((unknownValue as string).toUpperCase());
}

// Void
function logMessage(): void {
  console.log("This is a message");
}

// Null and Undefined
let u: undefined = undefined;
let n: null = null;

// Never
function throwError(message: string): never {
  throw new Error(message);
}


// Type Inference --- automatic type deduction by the compiler

// type annotations:- define the type of a variable explicitly using colon

let k: number = 10;  

function abcd(a: number, b: number): number{
    return a + b;
}



// Interfaces and Type Aliases
// *Intersection Types


// *Defining interfaces
interface User {
    name: string;
    email: string;
    password: string;
    gender?: string;
}

// *Extending interfaces
interface Admin extends User {
    role: string;
}

// *Using interfaces to define object shapes
// Functions :
function getDataOfUser(obj:Admin) {
    console.log(obj.name);
    console.log(obj.email);
    console.log(obj.password);
    if (obj.gender) {
        console.log(obj.gender);
    }
    console.log(obj.role);
}


// *Type aliases
type chor = number;

let hariom: chor;


type value = string | number | null;

let abc: value;

type fnArgu = string | number | null;
function acb(obj: fnArgu) {
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
class Movie {
  title = "Avengers";
  director = "Joss Whedon";
  releaseYear = 2012;
}

let m1 = new Movie(); 
console.log(m1.title);



// constructor
class Music{
  constructor(public name: string, public artist: string, public releaseYear: number) {

  }
}

// Another way to define constructor
class Musics{
  public name: string;
  public artist: string;
  public releaseYear: number;
  constructor(name: string, artist: string, releaseYear: number) {
    this.name = name;
    this.artist = artist;
    this.releaseYear = releaseYear;
  }
}

let music1 = new Music("Shape of You", "Ed Sheeran", 2017);


music1.name = "Perfect"; // allowed but it's create a big problem