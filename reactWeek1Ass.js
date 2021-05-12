
class Student {
    constructor(name, email, community){
        this.name = name;
        this.email = email;
        this.community = community;
    }
}

class Bootcamp {
    constructor(name, level, students = []){
        this.name = name;
        this.level = level;
        this.students = students;
    }
    registerStudent(student){
        if(this.students.includes(student)){
            console.log(`Student is already registered`);
        } else {
            this.students.push(student)
            console.log(`Student has registered`);
        }
    }
}

