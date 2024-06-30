function showAttendanceForm() {
    var selectedClass = document.getElementById("classSelector").value; //dropdown class1/2/3/4
    var attendanceForm = document.getElementById("attendanceForm");
    if (selectedClass) {
        var studentNames = getStudentNames(selectedClass); //goes to func getStudentNames
        // htmlContent is string
        var htmlContent = "<h2>Mark Attendance for " + selectedClass + "</h2>"; //opens names page
        htmlContent += "<ul class='student-list'>";
        studentNames.forEach(function(name) {
            htmlContent += "<li><label class='checkbox-label'><input type='checkbox'> " + name + "</label></li>";
        });
        htmlContent += "</ul>"
        htmlContent += "<button class='submit-btn'>Submit Attendance</button>"; // html done
        // .innerhtml actual html code of attendanceForm in attendance.html file
        attendanceForm.innerHTML = htmlContent;
        attendanceForm.style.display = "block" ;
        // querySelector returns first element which matches selector submit-btn
        document.querySelector(".submit-btn").addEventListener("click",submitAttendance);
    } 
    else{
        attendanceForm.style.display = "none";
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

function submitAttendance() {
    alert("Attendance Submitted for the class! ");
}


