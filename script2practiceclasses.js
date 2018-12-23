//variables 
  var classroomId = -1;
  var studentId = -1;

class School {
  constructor(name, classes) {
    this.name = name;
    this.classes = classes; //array <- yep
  }
}

class Classroom {

  constructor(classSubject) {
    this.id =  this.classId();// autoincrement function
    this.subject = classSubject;
  }

  talk(){
    return "say something";
  }

  classId(){  //auto increment function
    classroomId++;
    return classroomId;
  }

  rollCall(students){  
    let rollCallString = `The students in ${this.subject} are`;

    students.filter(student => student.classrooms.includes(this.id)).map(student => rollCallString += ` ${student.name}, `);
    
    return rollCallString;
  }
}

class Student {

  constructor(name, id, isPrincipal, classrooms) {
    this.id = this.studentId(); 
    this.name = name; 
    this.isPrincipal = false; //only 1 principle
    this.classrooms = this.setClassrooms(); //array
  }
  
  studentId(){  //auto increment function
    studentId ++
    return studentId;
  }

  setClassrooms(){
    //set 3 random classrooms
    let newClasses = [];
    for(let i = 0; i <= 2; i++){ //chooses 2 random classrooms
      newClasses.push(Math.floor(Math.random() * allClassrooms.length));
    }
    //if classrooms are already set, set new ones, if not, return new ones
    if(this.classrooms){
      this.classrooms = newClasses;
    } else {
      return newClasses;
    }
  }

  report(){
    //function that gets people.classrooms array, then prints list of classroom subjects
  }
}

//create classrooms
    const allClassrooms = [
      'english', 'math', 'typing', 'physicaled', 'health', 'compsci', 'biology'
    ];

    for(let i = 0; i <= allClassrooms.length; i++){
      window[allClassrooms[i]] = new Classroom(allClassrooms[i]);
    }

//create students
    const allStudents = [
      'brad', 'jimmy', 'sam', 'joey', 'amy', 'peter', 'max', 'pete', 'ron', 'bill', 'josh', 'corry', 'nate', 'sarah', 'grace', 'morty', 'miller', 'bobby', 'peterson', 'johnson', 'jonathan'
    ];

    const students = [];

    for(let i = 0; i < allStudents.length; i++){
      window[allStudents[i]] = new Student(allStudents[i]);
      students.push(window[allStudents[i]]);
    }

// console.log(brad);
// brad.setClassrooms();
// console.log(brad);
// compsci.rollCall(students);
// console.log(students);
// console.log(students);
console.log(math.rollCall(students));
console.log(compsci.rollCall(students));
console.log(typing.rollCall(students));
console.log(english.rollCall(students));
console.log(physicaled.rollCall(students));
console.log(health.rollCall(students));

const Greendale = new School("Greendale");
// since JS is topdown we can't add classes until they're instantiated, so we can't add them when we make school. hey what if we create a classroom array, and then map it to create new classrooms// but will it work lol