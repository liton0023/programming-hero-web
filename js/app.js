
const milestonesData =data.data;

// load course milestons dats

function loadMilestones(){
const milestones=document.querySelector('.milestones');


milestones.innerHTML=`${milestonesData.map(function(milestone){
    // console.log(milestone)
return `<div class="milestone border-b id="${milestone._id}">
<div class="flex">
  <div class="checkbox"><input type="checkbox" onclick="markMileStone(this,${milestone._id})" /></div>
  <div onclick="openMailestone(this,${milestone._id})">
    <p>
     ${milestone.name}
      <span><i class="fas fa-chevron-down"></i></span>
    </p>
  </div>
</div>
<div class="hidden_panel">
 ${milestone.modules.map(function(module){
    // console.log(module.name)
    return `
    <div class="module border-b">
      <p>${module.name}</p>
    </div>`;
 }).join('')}
</div>
</div>`
}).join("")} `;

}

function openMailestone(milestoneElement,id){
const currentPanel=milestoneElement.parentNode.nextElementSibling;
const shownPanel=document.querySelector(".show");

const active=document.querySelector('.active');

// first remove previous active class if any [other than the clicked one]

if(active && !milestoneElement.classList.contains('active')){
   active.classList.remove("active");
}

if(!currentPanel.classList.contains("show") && shownPanel){
    shownPanel.classList.remove("show");
}

  // toggle current clicked one

milestoneElement.classList.toggle("active");
 currentPanel.classList.toggle('show');
// console.log(currentPanel);

showMilestone(id);
}

function showMilestone(id){
    const milestoneImage=document.querySelector(".milestoneImage");
    const milestoneName=document.querySelector(".title");
    const milestoneDetails=document.querySelector(".details");


    milestoneImage.style.opacity="0";


milestoneImage.src =milestonesData[id].image;
milestoneName.innerText =milestonesData[id].name;
milestoneDetails.innerText =milestonesData[id].description;

}

// leation for img

const milestoneImage=document.querySelector('.milestoneImage')
milestoneImage.onload=function(){
    this.style.opacity="1";
}

// function markMileStone(checkbox,id){
// const doneList=document.querySelector(".doneList")
// const milestonesList=document.querySelector(".milestones");
// const item=document.getElementById(id);


// if(checkbox.checked){

//     milestonesList.removeChild(item)
//     doneList.appendChild(item);


// }else{

//   milestonesList.appendChild(item);
//  doneList.removeChild(item);

// }

// }


function markMileStone(checkbox, id) {
    const item = document.getElementById(id);
    const doneList = document.querySelector(".doneList");
    const milestonesList = document.querySelector(".milestones");
   
  
    if (checkbox.checked) {
      // mark as done
      milestonesList.removeChild(item);
      doneList.replaceChild(item);
    } else {
      // back to main list
      milestonesList.replaceChild(item);
      doneList.removeChild(item);
  
      // task - do the sorting
      // reload list
    }
  }

loadMilestones();