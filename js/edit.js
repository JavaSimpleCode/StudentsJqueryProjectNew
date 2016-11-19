

var studentsList = JSON.parse(localStorage.getItem("students"))
var editObject
var index

$(document).ready(function (){
$("#edit-student").live("submit",function (e){
	e.preventDefault()
	updateStudent(editObject, index)
})


function updateStudent(editObject, index){
			
	
	
		studentsList.splice(index, 1)
		var newObject = {fname:$("#firstName").val(),
						 lname:$("#lastName").val(),
						 tel:$("#telephone").val(),
						 street:$("#address").val(),
						 city:editObject.city ,
						 state:editObject.state ,
						 zip:editObject.zip}
		
		studentsList[index] = newObject
		localStorage.setItem("students", JSON.stringify(studentsList))
		
		window.location = "index.html"
	}
})


window.onload = function(){
	

	var filename= window.location.search
	index = filename.substr(filename.indexOf("=")+1)
	editObject = studentsList[index]

	$("#firstName").val(editObject.fname)
	$("#lastName").val(editObject.lname)
	$("#telephone").val(editObject.tel)
	$("#street").val(editObject.address)
	
}
	
//	$(document).ready(function (){
//		
//		$("#add").live("submit", function (e){
//			
//			e.preventDefault()
//			updateStudent(editObject, index)
//		})
//		
//		function updateStudent(editObject, index){
//			
//			console.log(studentsList)
//			
//		}
//	})
//	console.log(filename.substr("="))
//	console.log(filename.substr(filename.indexOf("=")+1))
	
//}


//	document.getElementById("firstName").value = "Sai"
//	document.getElementById("lastName").value = "Sai"
//	document.getElementById("telephone").value = "Sai"
//	document.getElementById("Street").value = "Sai"

/*document.getElementById("add").onclick=function (e){
	updateTask(e)*/


/*function updateTask(e){
	e.preventDefault()
	
	var updateObject = {
		name:document.getElementById("task").value,
		priority:document.getElementById("task-priority").value,
		time:document.getElementById("task-time").value,
		date:document.getElementById("task-date").value
	}
	
	taskList[index] = updateObject
	localStorage.setItem("tasks", JSON.stringify(taskList))
	window.location="index.html"
	
//var newDate= new Date()
//var id=newDate.getTime()
	
}*/