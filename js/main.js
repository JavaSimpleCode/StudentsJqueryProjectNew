var getStudents;
var studentGrp0 = JSON.parse(localStorage.getItem("studentGrp0"))
var studentGrp1 = JSON.parse(localStorage.getItem("studentGrp1"))
var studentGrp2 = JSON.parse(localStorage.getItem("studentGrp2"))
var studentGrp3 = JSON.parse(localStorage.getItem("studentGrp3"))
var studentGrp4 = JSON.parse(localStorage.getItem("studentGrp4"))

window.onload = function (){
	
	//HTTP call 
	var stdentsList = JSON.parse(localStorage.getItem("students"));
	console.log(stdentsList)
	
	if (stdentsList == null)
	{
		$.ajax( {
			url:"http://www.filltext.com/?rows=100&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}&pretty=true",
			success: function(data){
				 console.log(data)
				 var studentsList= localStorage.setItem("students", JSON.stringify(data))
			}
		})
		
	}

	showStudentDetails()
}


function showStudentDetails()
{
	
	
	var studentsList=JSON.parse(localStorage.getItem("students"))
	
	if(studentsList == null){
		studentsList=[]
	}
	
	else{
		$.each(studentsList, function (index,object){
			var str = "<tr" +
			" class = 'success'" +
			"><td>"+
			object.fname+"</td><td>"
			+object.lname+"</td><td>"
			+object.tel+"</td><td>"
			+object.address+"</td><td>"
			+object.city+"</td><td>"
			+object.state+"</td><td>"
			+object.zip+
			"</td>" +
			"<td><a href='edit.html?="+index+"'class='btn btn-info' >Edit</a>" + "</td>" +
			"<td><button class='btn btn-danger' id='delete-task' onclick='deleteMovie("+index+")'>Delete</button>" +
	"</td></tr>"
			$("#students-table").append(str)
		})
	}
	
}


function deleteStudent(index){
	
	var studentsList=JSON.parse(localStorage.getItem("students"))	
	studentsList.splice(index, 1)
	
	localStorage.setItem("students", JSON.stringify(studentsList))
	window.location = "index.html"
	
	console.log(index)
}
