class Student{
    constructor(name){
        this.name = name;
        this.askedQuestionNum = 0;
    }
    askQuestion(){
        console.log("???")
    }
}
const student1 = new Student("Type")
student1.askQuestion()
console.log(student1)

class StudentWithWork extends Student{
    constructor(name){
        super(name);
        this.workDone = 0;
    }
    Dowork(){
        console.log("Munka kesz")
        this.workDone++;
    }
}

const student2 = new Student("Kyle")
stu2.DoWork()
console.log(student2)