const totalJobElement = document.querySelectorAll(".total-jobs");
const interviewJobElement = document.getElementById("interview-job");
const rejectedJobElement = document.getElementById("rejected-job");
const jobField = document.getElementById("job-field");
const mainContent = document.getElementById('main-content') ;

let interviewJob = [];
let rejectedJob = [];
let toggleButton = ' all'

// all section
const interviewSection = document.getElementById("interview-section");
const rejectedSection = document.getElementById("rejected-section");
const allJobSection = document.getElementById("all-job-section");
// console.log(allJobSection)

// all toggle button
const allBtn = document.getElementById("all-btn");
const interviewBtn = document.getElementById("interview-btn");
const rejectedBtn = document.getElementById("rejected-btn");

// calculate job quantity
function calculate() {
  let totalJob = jobField.children.length;
  totalJobElement[0].innerText = totalJob;
  totalJobElement[1].innerText = totalJob;
  interviewJobElement.innerText = interviewJob.length;
  rejectedJobElement.innerText = rejectedJob.length;
  // console.log(typeof totalJob)
}
calculate();





// section hiding function
function toggleBtn(id, section) {

  toggleButton = id ;

  // first removing all active- btn
  allBtn.classList.remove("btn-active");
  interviewBtn.classList.remove("btn-active");
  rejectedBtn.classList.remove("btn-active");

  //second hiding every section
  allJobSection.classList.add("hidden");
  interviewSection.classList.add("hidden");
  rejectedSection.classList.add("hidden");

  // third declare the selective button
  const selectedBtn = document.getElementById(id);
  selectedBtn.classList.add("btn-active");
  console.log(section);

  // finally removing 'hidden' from selective section
  const selectedSection = document.getElementById(section);
  selectedSection.classList.remove("hidden");
}






// interview button activities
mainContent.addEventListener("click", function (event) {
  if (event.target.classList.contains("interview-btn")) {

    // keeping every element from job-card in a variable
    const parent = event.target.parentElement.parentElement;
    const companyName = parent.querySelector(".company-name").innerText;
    const jobPosition = parent.querySelector(".job-position").innerText;
    const badge = parent.querySelector(".badge").innerText;
    const salary = parent.querySelector(".salary").innerText;
    const description = parent.querySelector(".description").innerText;
    parent.querySelector(".badge").innerText = "INTERVIEW";

    // making a object with the element
    let jobCardInfo = {
      companyName,
      jobPosition,
      badge: "INTERVIEW",
      salary,
      description,
    };

    // matching that same card is available or not in the interview section
    const exists = interviewJob.find((item) => item.companyName === jobCardInfo.companyName);

    // checking matched card
    if (!exists) {
      interviewJob.unshift(jobCardInfo);   
      
    }
    
      rejectedJob = rejectedJob.filter(item => item.companyName != jobCardInfo.companyName) ;
    
    createInterviewCard() ; 
    createRejectedCard()
    calculate();

  
  }






  else if (event.target.classList.contains("rejected-btn")) {

    // keeping every element from job-card in a variable
    const parent = event.target.parentElement.parentElement;
    const companyName = parent.querySelector(".company-name").innerText;
    const jobPosition = parent.querySelector(".job-position").innerText;
    const badge = parent.querySelector(".badge").innerText;
    const salary = parent.querySelector(".salary").innerText;
    const description = parent.querySelector(".description").innerText;
    parent.querySelector(".badge").innerText = "REJECTED";

    // making a object with the element
    let jobCardInfo = {
      companyName,
      jobPosition,
      badge: "REJECTED",
      salary,
      description,
    };

    // matching that same card is available or not in the interview section
    const exists = rejectedJob.find((item) => item.companyName === jobCardInfo.companyName);

  
    if (!exists) {
      rejectedJob.unshift(jobCardInfo); 
 
   
    }
          
    interviewJob = interviewJob.filter(item => item.companyName != jobCardInfo.companyName) ;
    
      createRejectedCard() ;
      createInterviewCard() ;
      calculate() ;

  

  }

// deleting job 
 mainContent.addEventListener("click", function (event) {
 if (event.target.classList.contains("delete-btn")){

    const parent = event.target.parentElement.parentElement.parentElement;
    parent.remove();
    
   }
   calculate();


  }) ;


}





);

function createInterviewCard() {
  interviewSection.innerHTML = "";

  for (const everyInterviewCard of interviewJob) {
    // console.log(everyInterviewCard);
    let div = document.createElement("div");
    div.innerHTML = `
            <div class="mobile-first-corp card-body mb-4 shadow-sm">
            <h2 class="company-name card-title text-[16px]"> ${everyInterviewCard.companyName} </h2>
            <p class="job-position text-neutral-500 text-[14px]"> ${everyInterviewCard.jobPosition} </p>

            <div class="badge badge-soft badge-md font-semibold badge-primary"> ${everyInterviewCard.badge} </div>
                <p  class="salary text-neutral-500"> ${everyInterviewCard.salary} </p>
                <p  class="description mb-2"> ${everyInterviewCard.description} </p>
            <div>

                <button class=" interview-btn btn btn-outline btn-success">INTERVIEW</button>
                <button class=" rejected-btn btn btn-outline btn-secondary ml-4">REJECTED</button>
            </div>
        </div
        
        `;
    
    interviewSection.appendChild(div);
  }
}


function createRejectedCard() {
  rejectedSection.innerHTML = "";

  for (const everyRejectedCard of rejectedJob) {
    // console.log(everyInterviewCard);
    let div = document.createElement("div");
    div.innerHTML = `
            <div class="mobile-first-corp card-body mb-4 shadow-sm">
            <h2 class="company-name card-title text-[16px]"> ${everyRejectedCard.companyName} </h2>
            <p class="job-position text-neutral-500 text-[14px]"> ${everyRejectedCard.jobPosition} </p>

            <div class="badge badge-soft badge-md font-semibold badge-primary"> ${everyRejectedCard.badge} </div>
                <p  class="salary text-neutral-500"> ${everyRejectedCard.salary} </p>
                <p  class="description mb-2"> ${everyRejectedCard.description} </p>
            <div>

                <button class=" interview-btn btn btn-outline btn-success">INTERVIEW</button>
                <button class=" rejected-btn btn btn-outline btn-secondary ml-4">REJECTED</button>
            </div>
        </div
        
        `;
    
    rejectedSection.appendChild(div);
  }
}
