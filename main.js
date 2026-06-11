
const grades = [
    { name: "Макар", score: 85 },
    { name: "Денис", score: 92 },
    { name: "Анна", score: 78 },
    { name: "Даша", score: 88 },
    { name: "Студент_X", score: 45 }
];

function calculateAverage(data) {
    const total = data.reduce((sum, student) => sum + student.score, 0);
    return total / data.length;
}

function findTopStudent(data) {
    let topStudent = data[0];
    for (const student of data) {
        if (student.score > topStudent.score) {
            topStudent = student;
        }
    }
    return topStudent.name;
}

function filterFailed(data, passScore = 60) {
    return data.filter(student => student.score < passScore).map(student => student.name);
}

function addLetterGrade(data) {

    return data.map(student => {
        let letter;
        if (student.score >= 90) {
            letter = 'A';
        } else if (student.score >= 75) {
            letter = 'B';
        } else {
            letter = 'C';
        }
        return { ...student, letter };
    });
}

const averageScore = calculateAverage(grades);
const topStudentName = findTopStudent(grades);
const failedStudents = filterFailed(grades);
const gradesWithLetters = addLetterGrade(grades);

console.log("Средний балл группы:", averageScore);
console.log("Лучший студент:", topStudentName);
console.log("Должники:", failedStudents);
console.log("Массив с буквенными оценками:", gradesWithLetters);