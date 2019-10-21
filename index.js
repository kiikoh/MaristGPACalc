//Returns the GPA corresponding to the letter grade
function getGPA(g) {
    if (g == "F") return 0;
    if (g == "D-") return .7;
    if (g == "D") return 1;
    if (g == "D+") return 1.3;
    if (g == "C-") return 1.7;
    if (g == "C") return 2;
    if (g == "C+") return 2.3;
    if (g == "B-") return 2.7;
    if (g == "B") return 3;
    if (g == "B+") return 3.3;
    if (g == "A-") return 3.7;
    if (g == "A") return 4;
    return false;
}

//Select the elements from the table
let data = document.querySelectorAll("body > div.pagebodydiv > table:nth-child(4) > tbody > tr:not(:first-child)");
let classes = [];

for (let i of data) {
    values = i.textContent.split("\n");
    if (getGPA(values[7])) {
        classes.push({
            "title": values[5],
            "grade": values[7],
            "credits": parseFloat(values[8])
        });
    }
}

let credits = 0;
let gradePoints = 0;
for (let cls of classes) {
    credits += cls.credits;
    gradePoints += cls.credits * getGPA(cls.grade)
}

alert("Your GPA is: " + Math.round(100 * gradePoints / credits) / 100);