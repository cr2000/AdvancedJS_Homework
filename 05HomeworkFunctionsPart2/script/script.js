fetch('https://raw.githubusercontent.com/sedc-codecademy/sedc7-04-ajs/master/g2/Class4/students.json')
    .then(res => res.json())
    .then(students => {
        // console.table(allStudentsAvgGradeMoreThan3(students));
        // console.log(fStudentsAvgGrade5(students));
        // console.log(mStudentsSkopjeOver18(students));
        // console.log(fAverageGrades(students))
        // console.log(mStudentsB(students))
        sentence(students)
        console.log(allMaleNotFromSkp(students))
        console.log(femaleOver18(students))
        console.log(femaleEndingWithA(students))
        console.log(averageAge(students))
       

    })
    .catch(err => console.error(err))




// Task 01 - For every student log the following sentence:
// "FULL_NAME is comming from CITY, he is AGE years old and he is FAILING/PASSING the class" (FILING if his average greade is 1, PASSING if it's 2 or more).
let sentence = students => students.forEach(student =>
    console.log(`${student.firstName} ${student.lastName} is comming from ${student.city}, he is ${student.age} years old and he is ${student.averageGrade > 1 ? 'Passing' : 'Failing'} the class.`));



// All male students that are not from Skopje
let allMaleNotFromSkp =
    students => students.filter(s => s.gender === 'Male'
        && s.city != 'Skopje'
    )
        .map(s => `${s.firstName} ${s.lastName}`)



// All female students that are not under 18 years old.

let femaleOver18 =
    students => students.filter(s => s.gender === 'Female'

        && s.age > 18)
        .map(s => `${s.firstName} ${s.lastName}`)



// The average age of the students.

let averageAge = students => students.map(student => student.age)
    .reduce((sum, age) => sum += age, 0) / students.length



//All female students with a last name ending with A.

let femaleEndingWithA =
    students => students.filter(s => s.gender === 'Female'

        && s.lastName.endsWith(`a`))
        
        
        
        
