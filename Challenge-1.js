function studentGrades(marks){
    //Function studentGrades has one parameter (marks). 
    //We'll use relational comparison operators to assign grades according to the marks entered.
    //Grades to be assigned are "A","B","C","D","E".

    if (isNaN (marks) || "" ||marks===null||marks>100||marks<0){
    return "Invalid input";
    }//if the value input by the user isn't a number, an empty string or null,an error prompt will pop.

    marks = Number(marks);
    //This is converts the user input stored in the marks variable from a string to a numeric value.
    let grade;
    if(marks >79){
        grade='A';
    }else if(marks>=60 && marks<=79){
        grade='B';
    }else if(marks>=50 && marks<=59){
        grade='C';
    }else if(marks>=40 && marks<=49){
        grade='D';
    }else if(marks<40){
        grade='E';
    }return grade;
    }
    console.log(studentGrades(55));

 