let sample1 = "hallo"; // Type Inference ( Implicit )

let sample2: string = "hallo"; // Type Annotation ":" ( Explicit )

let sample3: string | number; // Type Onion ( Multiple Data Types )
sample3 = "holaa";
sample3 = 12;

type Customtype = string; // Custom Type

let sample4: Customtype = "Holaa";
