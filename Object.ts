/**
  
1. Object Literal
2. Nested Object
3. Nested, Object of Array
4. Nested, Object of Object
5. Object Destructuring

 */

// ========================
//
// ===== OBJECT LITERAL ===
//
// ========================

// Type inference

let obj1 = {
  id: 15,
  name: "IBNU",
};

// Inline interface

let obj2: {
  id: number;
  name: string;
};

obj2 = {
  id: 15,
  name: "Ibnu",
};

// Interface

interface User {
  id: number;
  name: string;
}

let obj3: User;
let obj4: User;

obj3 = {
  id: 15,
  name: "ibnu",
};

// ========================
//
// ===== OBJECT NESTED ====
//
// ========================

// Type Interface

interface Profile {
  id: number;
  name: string;
  detail: UserDetail;
}

interface UserDetail {
  age: number;
  nick: string;
}

let obj5: Profile = {
  id: 156,
  name: "Ibnu",
  detail: {
    age: 10,
    nick: "ibnu",
  },
};

// ==============================
//
// ===== OBJECT NESTED ARRAY ====
//
// ==============================

interface Family {
  id: number;
  name: string;
  childs: Child[];
}

interface Child {
  name: string;
  age: number;
}

let obj6: Family = {
  id: 16,
  name: "Ibnu",
  childs: [
    {
      name: "tegar",
      age: 10,
    },
  ],
};

// ===============================
//
// ===== OBJECT NESTED OBJECT ====
//
// ===============================

interface Payment {
  id: number;
  product: string;
  detail: {
    [key: string]: PaymentDetail;
  };
}

interface PaymentDetail {
  price: number;
  year: string;
}

let ob7: Payment = {
  id: 10,
  product: "Tas",
  detail: {
    p1: {
      price: 1000,
      year: "2020",
    },
    p2: {
      price: 1000,
      year: "2021",
    },
  },
};

// ===============================
//
// ===== OBJECT DESTRUCTURING ====
//
// ===============================

// type inference

let fullname = {
  firstname: "Ibnu",
  lastname: "Putra",
};

let { firstname, lastname } = fullname;

// inline interface

let child = {
  childname: "ibnu",
  age: 10,
};

let { childname, age }: { childname: string; age: number } = child;
