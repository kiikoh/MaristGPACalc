# MaristGPACalc
Bookmarklet to calculate GPA at Marist College

Click and drag the link below into your bookmark bar to install.
[GPA Calculator](javascript:(function()%7Bfunction%20getGPA(g)%20%7B%0A%20%20%20%20if%20(g%20%3D%3D%20%22F%22)%20return%200%3B%0A%20%20%20%20if%20(g%20%3D%3D%20%22D-%22)%20return%20.7%3B%0A%20%20%20%20if%20(g%20%3D%3D%20%22D%22)%20return%201%3B%0A%20%20%20%20if%20(g%20%3D%3D%20%22D%2B%22)%20return%201.3%3B%0A%20%20%20%20if%20(g%20%3D%3D%20%22C-%22)%20return%201.7%3B%0A%20%20%20%20if%20(g%20%3D%3D%20%22C%22)%20return%202%3B%0A%20%20%20%20if%20(g%20%3D%3D%20%22C%2B%22)%20return%202.3%3B%0A%20%20%20%20if%20(g%20%3D%3D%20%22B-%22)%20return%202.7%3B%0A%20%20%20%20if%20(g%20%3D%3D%20%22B%22)%20return%203%3B%0A%20%20%20%20if%20(g%20%3D%3D%20%22B%2B%22)%20return%203.3%3B%0A%20%20%20%20if%20(g%20%3D%3D%20%22A-%22)%20return%203.7%3B%0A%20%20%20%20if%20(g%20%3D%3D%20%22A%22)%20return%204%3B%0A%20%20%20%20return%20false%3B%0A%7D%0A%0Alet%20data%20%3D%20document.querySelectorAll(%22body%20%3E%20div.pagebodydiv%20%3E%20table%3Anth-child(4)%20%3E%20tbody%20%3E%20tr%3Anot(%3Afirst-child)%22)%3B%0Alet%20classes%20%3D%20%5B%5D%3B%0A%0Afor%20(let%20i%20of%20data)%20%7B%0A%20%20%20%20values%20%3D%20i.textContent.split(%22%5Cn%22)%3B%0A%20%20%20%20if%20(getGPA(values%5B7%5D))%20%7B%0A%20%20%20%20%20%20%20%20classes.push(%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20values%5B5%5D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22grade%22%3A%20values%5B7%5D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22credits%22%3A%20parseFloat(values%5B8%5D)%0A%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%7D%0A%7D%0A%0Alet%20credits%20%3D%200%3B%0Alet%20gradePoints%20%3D%200%3B%0Afor%20(let%20cls%20of%20classes)%20%7B%0A%20%20%20%20credits%20%2B%3D%20cls.credits%3B%0A%20%20%20%20gradePoints%20%2B%3D%20cls.credits%20*%20getGPA(cls.grade)%0A%7D%0A%0Aalert(%22Your%20GPA%20is%3A%20%22%20%2B%20Math.round(100%20*%20gradePoints%20%2F%20credits)%20%2F%20100)%3B%7D)()%3B)
