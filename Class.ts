// ==================================================
//
// ====== DEFINE CLASS
//
// ================================================

// Abstract Class / Blueprint class
abstract class Root {
  done: boolean;
}

// Normal Class
class UserClass extends Root {
  // properties
  id: number;
  name: string;
  protected pass: boolean;
  private nik: number; // cant be accesed on all instances
  static MAX_FAILURE = 5; // can accessed wihtout declaration
  private loginAttemps;
  done: boolean;

  // method
  login(username: string, password: string) {
    if (username == "admin" && password == "admin") {
      this.loginAttemps += 1;
      return true;
    }

    if (this.loginAttemps > UserClass.MAX_FAILURE) {
      return "max login attempts reached";
    }

    return false;
  }
  register() {}

  // first executed
  constructor(id: number, name: string) {
    super();
    (this.id = id),
      (this.name = name),
      (this.pass = false),
      (this.nik = 123),
      (this.done = true);
  }
}

// create instance
let myUser = new UserClass(6, "Ibnu"); // pass properties cant be accessed

// =======================================
//
//
// ============= SubClass & Modifier
//
//
// ========================================

class UserDetailClass extends UserClass {
  age: number;

  constructor(age: number, id: number, name: string) {
    super(id, name);
    this.age = age;
    this.pass; // can call protected properties
  }
}

let myNewUser = new UserDetailClass(16, 0, "Ibnu"); // pass properties can be accessed

// ====================================================
//
//
// =============== STATIC
//
//
// ===================================================

UserClass.MAX_FAILURE; // access from static member
