// ===============================
//
// ====  Array Number ========
//
// ===============================

let arr1 = [1, 2, 3, 4]; // Type Inference

let arr2: number[] = [1, 2, 3, 4]; // Type datatypes[]

let arr3: Array<number> = [1, 2, 3, 4]; // Type Array<dataTypes>

// ===============================
//
// ===== Array String ===========
//
//
// ===============================

let arr4 = ["mangos", "apple", "banana"]; // Type Inference

let arr5: string[] = ["mangos", "apple", "banana"]; // Type datatypes[]

let arr6: Array<string> = ["mangos", "apple", "banana"]; // Type Array<dataTypes>

// ===============================
//
//
// ======= Array Union ===========
//
//
// ===============================

let arr7 = ["hallo", 1, 2, 3]; // Type inference

let arr8: (string | number)[] = ["halo", 1, 2, 3]; // Type datatypes[]

let arr9: Array<string | number> = ["halo", 1, 2, 3]; // type generic

// ===============================
//
//
// ======= Tuples ===========
//
//
// ===============================

// An array with fixed value and known data type

// Cant use tpe inference

let arr10: [string, number, number] = ["halo", 1, 2]; // square bracket inline data type

// ===============================
//
//
// ======= Array of Object =======
//
//
// ===============================

let arr_1: { color: string; index: number }[]; // use inline inference

arr_1 = [
  {
    color: "blue",
    index: 0,
  },
  {
    color: "red",
    index: 1,
  },
];

let arr_2: Array<{ color: string; index: number }>; // use generic array

arr_2 = [
  {
    color: "red",
    index: 0,
  },
  {
    color: "blue",
    index: 1,
  },
];

// ======================================
//
//
// ======= Multidimentional Array =======
//
//
// ======================================

let arr_3: number[][]; // use square bracket

arr_3 = [
  [1, 2],
  [1, 3],
];

let arr_4: Array<Array<number>>; // use generic

arr_4 = [
  [1, 2],
  [3, 4],
];

// ======================================
//
//
// ======= Destructuring =======
//
//
// ======================================

let [a, b, c, d]: [number, number, number, string] = [1, 2, 3, "four"]; // use type inference
