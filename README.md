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
    
    


