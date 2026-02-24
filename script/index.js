

const totalJobElement = document.querySelectorAll('.total-jobs') ;
const interviewJobElement = document.getElementById('interview-job');
const rejectedJobElement = document.getElementById('rejected-job');
const jobField = document.getElementById('job-field') ;

const interviewJob = [] ;
const rejectedJob = [] ;

// all section
const interviewSection = document.getElementById('interview-section') ;
const rejectedSection = document.getElementById('rejected-section') ;
const availableJobSection = document.getElementById('available-job-section') ;

// all toggle button 
const allBtn  =document.getElementById('all-btn') ;
const interviewBtn =document.getElementById('interview-btn') ;
const rejectedBtn =document.getElementById('rejected-btn');


// calculate job quantity  
function calculate(){
let totalJob = jobField.children.length ;
totalJobElement[0].innerText = totalJob ;
totalJobElement[1].innerText = totalJob ;
interviewJobElement.innerText = interviewJob.length ;
rejectedJobElement.innerText = rejectedJob.length ;
}
calculate() ;


// section hiding function 
function toggleBtn(id, section){

    // first removing all active- btn 
    allBtn.classList.remove('btn-active');
    interviewBtn.classList.remove('btn-active');
    rejectedBtn.classList.remove('btn-active');

    //second hiding every section
    availableJobSection.classList.add('hidden') ;
    interviewSection.classList.add('hidden') ;
    rejectedSection.classList.add('hidden') ;
    
    // third declare the selective button 
    const selectedBtn = document.getElementById(id);
    selectedBtn.classList.add('btn-active');
    console.log(section) ;

    // finally removing 'hidden' from selective section 
    const selectedSection = document.getElementById(section) ;
    selectedSection.classList.remove('hidden')

} 




  
// interview button activities
jobField.addEventListener('click', function(event){
      
    
    if(event.target.classList.contains('interview-btn')){
        
        // keeping every element from job-card in a variable
        const parent = event.target.parentElement.parentElement ;
        const companyName = parent.querySelector('.company-name').innerText ;  
        const jobPosition = parent.querySelector('.job-position').innerText ;
        const badge = parent.querySelector('.badge').innerText ;
        const salary = parent.querySelector('.salary').innerText ;
        const description = parent.querySelector('.description').innerText ;

        // making a object with the element
        let interviewCard = {
            companyName,
            jobPosition,
            badge: 'INTERVIEW',
            salary,
            description

        }


        // matching that same card is available or not in the interview section
        const exists = interviewJob.find(
        item => item.companyName === interviewCard.companyName
        );

        // checking matched card
        if (!exists) {
            interviewJob.unshift(interviewCard);
            calculate();
    
            // hiding No jobs available card
            const noAvailableJobCardForInterview = document.getElementById('no-available-job-card-for-interview') ;
            if (interviewJob.length > 0 ){
                noAvailableJobCardForInterview.classList.add('hidden') ;
            }
 

            // create interview job card
            let div = document.createElement('div') ;
                div.className = ('card-body my-3');
                div.innerHTML = `
                    <h2 class="company-name card-title text-[16px]">${companyName} Corp</h2>
                    <p class="job-position text-neutral-500 text-[14px]"> ${jobPosition} </p>

                    <div class="badge badge-soft badge-md font-semibold badge-primary"> ${badge} </div>

                    <p class="salary text-neutral-500"> ${salary} </p>
                    <p id="description" class="description mb-2"> ${description}  </p>

                    <div>            
                        <button class=" interview-btn btn btn-outline btn-success">INTERVIEW</button>
                        <button class="rejected-btn btn btn-outline btn-secondary ml-4">REJECTED</button>
                    </div>
                    ` ;
            // set the div in the interview section
            interviewSection.appendChild(div);
        }
    }
}) ;



















  
// rejected button activities
jobField.addEventListener('click', function(event){
    
     
    if(event.target.classList.contains('rejected-btn')){
        
        // keeping every element from job-card in a variable
        const parent = event.target.parentElement.parentElement ;
        const companyName = parent.querySelector('.company-name').innerText ;
        const jobPosition = parent.querySelector('.job-position').innerText ;
        const badge = parent.querySelector('.badge').innerText ;
        const salary = parent.querySelector('.salary').innerText ;
        const description = parent.querySelector('.description').innerText ;
        console.log(companyName);

        // making a object with the element
        let rejectedCard = {
            companyName,
            jobPosition,
            badge: 'REJECTED',
            salary,
            description

        }

        // matching that same card is available or not in the interview section
        const exists = rejectedJob.find(
            item => item.companyName === rejectedCard.companyName
        );

        if (!exists) {
            rejectedJob.unshift(rejectedCard);
            calculate();
                
            // hiding No jobs available card
            const noAvailableJobCardForRejected = document.getElementById('no-available-job card-for-rejected') ;
            if (rejectedJob.length > 0 ){
                noAvailableJobCardForRejected.classList.add('hidden') ;
            }
        
            // create interview job card
            let div = document.createElement('div') ;
                div.className = ('card-body my-3');
                div.innerHTML = `
                <h2 class="company-name card-title text-[16px]">${companyName} Corp</h2>
                    <p class="job-position text-neutral-500 text-[14px]"> ${jobPosition} </p>

                    <div class="badge badge-soft badge-md font-semibold badge-primary"> ${badge} </div>

                    <p class="salary text-neutral-500"> ${salary} </p>
                    <p class="description mb-2"> ${description}  </p>

                    <div>            
                        <button class=" interview-btn btn btn-outline btn-success">INTERVIEW</button>
                        <button class="rejected-btn btn btn-outline btn-secondary ml-4">REJECTED</button>
                    </div>
                    ` ;

            rejectedSection.appendChild(div);


        }


    }


})



// -----peyaraful-----



 



