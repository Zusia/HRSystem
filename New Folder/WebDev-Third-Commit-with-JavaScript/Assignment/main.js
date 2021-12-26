// document.addEventListener("DOMContentLoaded",function(event){
//     document.querySelector("button").addEventListener("click",function(){
//         var self = this;
//         var name = "";
//         //call server to get the name
//         $ajaxUtils.sendGetRequest("name.txt", function(request){
//             self.name = request.responseText;
//         });
//         document.querySelector("#content").innerHTML ="<h2>Hello "+self.name+"!";
//     });
// }

// )
var employeeListHolder = document.querySelector(".employee-list");
var interviewListHolder = document.querySelector(".interviews");
var addEmployeeModal = document.querySelector("#employeeModal");
var addInterviewModal = document.querySelector("#interviewModal");

addInterviewModal.style.display="none";
addEmployeeModal.style.display="none";

function addEmployee(){
    var name=document.querySelector("#name").value;
    var surname=document.querySelector("#surname").value;
    var position=document.querySelector("#position").value;
    var department=document.querySelector("#department").value;
    var email=document.querySelector("#email").value;
    var salary=document.querySelector("#salary").value;

    var newItem=`
    <div class="employee-card" id="employee1">
        <img class="user-img" src="images/1.jpg" alt="" height="100px" width="100px">
        <span>
            <div class="employment-details" id="employee1-details">
                <span class="name-format">`+name+`</span>
                <span class="name=format">`+surname+`</span><br>                
                <span>`+department+`</span><br>
                <span>`+position+`</span><br>
                <span>`+email+`</span><br>
                <span>`+salary+`</span><br>
            </div>
        </span>
    </div>  `;
    employeeListHolder.insertAdjacentHTML('beforeend',newItem);
    addEmployeeModal.style.display="none";
}

function showAddEmpModal(){
    addEmployeeModal.style.display="block";
}

function addInterview(){
    var departmentInterview = document.querySelector("#int-department").value;
    var positionInterview = document.querySelector("#int-position").value;
    var newInterview=`
    <li>
    <div class="list-item">
    <h3>`+departmentInterview+`</h3>
    <p>`+positionInterview+`</p>
    <button class="accept-btn" type="button" name="button">Accept</button>
    <button class="reject-btn" type="button" name="button">Reject</button>
    
    </div>
    </li>
    `;
    interviewListHolder.insertAdjacentHTML('beforeend',newInterview);
    addInterviewModal.style.display="none";
}
function showInterviewModal(){
    addInterviewModal.style.display="block";
}