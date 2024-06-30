function showGrades() {
    var selectedClass = document.getElementById("classSelector").value;
    var gradeTable = document.getElementById("gradeTable");
    var students = getStudentNames(selectedClass);
    
    if (selectedClass && students.length > 0) {
        var htmlContent = "<h2>Grades for " + selectedClass + "</h2>";
        htmlContent += "<table>";
        htmlContent += "<tr><th>Student Name</th><th>RDBMS</th><th>COA</th><th>DSA</th><th>OOPs</th><th>OS</th></tr>";
        
        students.forEach(function(student) {
            htmlContent += "<tr>";
            htmlContent += "<td>" + student + "</td>";
            // Add random grades for demonstration purposes
            htmlContent += "<td>" + getRandomGrade() + "</td>";
            htmlContent += "<td>" + getRandomGrade() + "</td>";
            htmlContent += "<td>" + getRandomGrade() + "</td>";
            htmlContent += "<td>" + getRandomGrade() + "</td>";
            htmlContent += "<td>" + getRandomGrade() + "</td>";
            htmlContent += "</tr>";
        });
        
        htmlContent += "</table>";
        
        gradeTable.innerHTML = htmlContent;
    } else {
        gradeTable.innerHTML = ""; // Clear the table if no class selected or no students
    }
}

function getStudentNames(className) {
    switch(className) {
        case "class1":
            return ["Aanshi", "Astha", "Aayush", "Aditya", "Akshat", "Ananya", "Arun", "Ansh", "Anushka", "Arjun"];
        case "class2":
            return ["Arnav", "Arya", "Aryan", "Aryansh", "Asmi", "Aviral", "Charu", "Dakshyashree", "Deptanshu", "Devansh"];
        case "class3":
            return ["Dhruv", "Eesh", "Garv", "Gauri", "Harnoor", "Harshit", "Jahan", "Kamal", "Kartik", "Khushi"];
        case "class4":
            return ["Kritika", "Kunal", "Lipika", "Manan", "Mayank", "Mohit", "Monisha", "Nishtha", "Parth", "Pranjali"];
        default:
            return [];
    }
}

function getRandomGrade() {
    // Generate a random grade between 50 and 100 for demonstration purposes
    return Math.floor(Math.random() * (100 - 50 + 1)) + 50;
}
