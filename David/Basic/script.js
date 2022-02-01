// Exercise 1 

function createTask(){
    let fnameTask = document.getElementById("fname").value;
    let lnameTask = document.getElementById("lname").value;
    let ageTask = document.getElementById("age").value;
    let profTask = document.getElementsByName("profession");
    var profTaskValue;
    // get value of checked radio button START
    for(var i = 0; i < profTask.length; i++){
        if(profTask[i].checked){
            profTaskValue = profTask[i].value;
            // console.log(profTaskValue)
            break
        }
    }
        // get value of checked radio button END
        // style background based on radio button's value START
    if (profTaskValue == "IT"){
        document.getElementById("outputdiv").style.backgroundColor = "purple";
    } else if (profTaskValue == "hospitality"){
        document.getElementById("outputdiv").style.backgroundColor = "yellow";
    }
    else if (profTaskValue == "economics"){
        document.getElementById("outputdiv").style.backgroundColor = "pink";
    }
        // style background based on radio button's value END
    // print inputs START
    document.getElementById("outputFname").innerHTML = `${fnameTask}`;
    document.getElementById("outputLname").innerHTML = `${lnameTask}`;
    document.getElementById("outputAge").innerHTML = `${ageTask}`;
        // print inputs END
        // style text based on length START
    if(fnameTask.length <= 5){
        document.getElementById("outputFname").style.color = "red"
    }
    else{
        document.getElementById("outputFname").style.color = "green"
    }
}
        // style text based on length END
document.getElementById("create").addEventListener("click",createTask);