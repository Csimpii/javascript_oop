function Student(nev){
    this.name = nev;
    this.askedQuestionNum = 0;
}

Student.prototype.askedQuestion = function(){
    console.log('???')
    this.askedQuestionNum++;
}

const stu1 = new Student('Csimpi');
const stu2 = new Student('Harold');

function StudentWithWork(nev){
    Student.call(this,nev);
    this.workDone = 0;
};

StudentWithWork.prototype.DoWork = function(){
    console.log("Inrementálja a work done tulajdonsagot");
    this.workDone++;
}
const stu4 = new StudentWithWork("Joe");
stu4.DoWork();

console.log(stu1);
console.log(stu2);

stu1.askedQuestion();
console.log(stu1);

Object.setPrototypeOf(StudentWithWork.prototype, Student.prototype)

const stu3 = new StudentWithWork("Vendex");
stu3.askedQuestion()
console.log(stu3)
console.log(stu4)

