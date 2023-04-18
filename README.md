![My Image](logo.png)

# Typescript Documentation

Typescript documentation for personal use

## Typescript Type ( Variable Declaration )

How to declare typescript type :

- Type Inference ( Implicit ) :

  ```
  // Type Inference ( based on value )

  let sample = "hello" // data type will be string
  ```

- Type Annotation ( Explicit ) :

  ```
  // Type Annotation

  let sample : string = "holaa"
  ```

- Union ( multiple data type )

  ```
  // Union Type

  let sample : string | number = "Holaa" || 12 // value can be string or number
  ```

- Custom type

  ```
  // Custom type

  type CustomType = string
  let sample: CustomType = "holaa"

  type CustomType = number
  let sample: CustomType = 12
  ```

## Array and Tuples

Tuples is an array with fixed size and known data types

How to declare an array :

- Using Type Inference

  ```
  let arr = [1,2,3,4,5]
  ```

- Using square bracket, `elementType[]`

  ```
  let arr : string[] = ['apple', 'mango', 'banana']
  ```

- Using a generic array type. `Array<elemenType>`

  ```
  let arr : Array<string> = ['apple', 'banana', 'mango']
  ```

## Object

1. Object Literal
2. Nested Object
3. Nested, Object of Array
4. Nested, Object of Object
5. Object Destructing

Sample how to make object

- Type inference

  ```
  let obj = {
    id: 15,
    name: "ibnu"
  }
  ```

- Inline interface

  ```
  let obj = {
    id: number,
    name: string
  }


  obj = {
    id: 15,
    name: "ibnu"
  }
  ```

- Interface

  ```

  //define interface

  interface User {
    id: number,
    name: string
  }


  // use interface at object

  let obj : User

  obj = {
    id: 15,
    name: "ibnu"
  }
  ```

- Nested Object

  ```

  //define interface

  interface User {
    id: number,
    name: string,
    detail: UserDetail // call interface
  }


  // nested interface

  interface UserDetail {
    age: number,
    nickname: string
  }


  // use interface at object

  let obj : User

  obj = {
    id: 15,
    name: "ibnu",
    detail: {
      age: 21,
      nickname: "nuu"
    }
  }
  ```

## Function

- Function Declaration

  ```
  function sum(x: number, y: number, z?: number) : number {
    return x+y
  }
  ```

  note :

  parameter? : datatype => optional "?"

- Function Expression

  ```
  const addData = function (a: number, b: number) : number {
    return a+b
  }
  ```

- Function Arrow

  ```
  const addData = (x: number, y: number): number => {
    return x+y
  }
  ```
