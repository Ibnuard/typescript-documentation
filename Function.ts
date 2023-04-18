// ================= BASIC =======================

// Declaration Func

function sum(a: number, b: number, c?: number): number {
  return a + b;
}

// Expression

const addData = function (a: number, b: number): number {
  return a + b;
};

// Arrow

const multiple = (a: number, b: number): number => {
  return a * b;
};

// ================= VARIATION ====================

// callback func

type Greeter = (message: string) => void;

const getCallback = (url: string, callback: Greeter) => {
  callback(url);
};

const fn = (url: string) => {
  return url;
};

getCallback("https://www.googgle.com", fn);

// optional and default parameter

type Contact = {
  firstname: string;
  lastname: string;
  gender?: string;
  language: string;
};

const addContact = (
  firstname: string,
  lastname: string,
  gender?: string,
  language: string = "english"
): Contact => {
  return {
    firstname,
    lastname,
    language,
    ...(gender && { gender }),
  };
};

// Rest Parameter

function catList(item: string, ...rest: string[]): string {
  return item + " " + rest.join(" ");
}

// conditional type with union

// solution 1 => union
function CT(params: string | number): string | number {
  return params;
}

// solution 2 => generic

function CT_generic<T>(param: T) {
  return param;
}

CT_generic<string>("hallo");
CT_generic<number>(120);

// soklution 3 => overloading

function CT_overloading(param: string): string;
function CT_overloading(param: number): number;
function CT_overloading(param: any): any {
  return param;
}
