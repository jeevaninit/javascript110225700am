import React from 'react'

const ConditionCheck01 = () => {

    const student1={
        name:'Bhanu',
        grade:90
    };

    const student2={
        name:'Sai',
        grade:95
    };

    const higherGradeStudent=student1.grade<student2.grade?student1:student2;


  return (
    <div>
        <h1>Higher Grade Student</h1>

        <p>
            Name of the Student: {higherGradeStudent.name}, 
            Student Grade : {higherGradeStudent.grade}
        </p>
        
        {higherGradeStudent===student1 && (
            <p>
                {higherGradeStudent.name} is doing Great!...
            </p>
        )}

        {higherGradeStudent===student2 && (
            <p>
                {higherGradeStudent.name} is Excelling!...
            </p>
        )}
    </div>
  )
}

export default ConditionCheck01