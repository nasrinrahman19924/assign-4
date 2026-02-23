let interviewList = [];
let rejectedList = [];
let currentStatus = 'all'

let total = document.getElementById("total");
let interviewCount= document.getElementById("interviewCount");
let rejectedCount = document.getElementById("rejectedCount");

const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');


const allCardSection = document.getElementById("allcards");
const mainContainer = document.querySelector('main');
const filterSection = document.getElementById('filtered-section');


function calculateCount(){
    total.innerText = allCardSection.children.length
    interviewCount.innerText = interviewList.length
    rejectedCount.innerText = rejectedList.length
}

calculateCount();

function toggleStyle(id){

    allFilterBtn.classList.add('bg-gray-300', 'text-black')
    interviewFilterBtn.classList.add('bg-gray-300', 'text-black')
    rejectedFilterBtn.classList.add('bg-gray-300', 'text-black')
   
   
    allFilterBtn.classList.remove('bg-blue-500', 'text-white')
    interviewFilterBtn.classList.remove('bg-blue-500', 'text-white')
    rejectedFilterBtn.classList.remove('bg-blue-500', 'text-white')
    
    

  const selected = document.getElementById(id)
  currentStatus = id  

  selected.classList.remove('bg-gray-300', 'text-black')
  selected.classList.add('bg-blue-500', 'text-white')


  if(id == 'interview-filter-btn'){
    allCardSection.classList.add('hidden')
    filterSection.classList.remove('hidden')
    renderInterview();
  } else if(id == 'all-filter-btn'){
    allCardSection.classList.remove('hidden')
    filterSection.classList.add('hidden')
  }else if( id == 'rejected-filter-btn'){
    allCardSection.classList.add('hidden')
    filterSection.classList.remove('hidden')
    renderRejected();
  }



} 

mainContainer.addEventListener('click', function(event){

    

 if(event.target.classList.contains('interview-btn')){
        const parentNode = event.target.parentNode.parentNode;
    const comName = parentNode.querySelector('.comName').innerText
    const jobName  = parentNode.querySelector('.jobName ').innerText
    const jobType= parentNode.querySelector('.jobType').innerText
    const status = parentNode.querySelector('.status').innerText
    const notes = parentNode.querySelector('.notes').innerText

    parentNode.querySelector('.status').innerText = 'interview'

    const cardInfo ={
            comName,
            jobName,
            jobType,
            status:'interview',
            notes
            }

const comExist = interviewList.find(item=> item.comName == cardInfo.comName)

            

if(!comExist){
    interviewList.push(cardInfo)
}

rejectedList = rejectedList.filter(item=> item.comName != cardInfo.comName)

calculateCount();

if(currentStatus == 'rejected-filter-btn'){
    renderRejected();
}


}else if(event.target.classList.contains('rejected-btn')){
        const parentNode = event.target.parentNode.parentNode;
    const comName = parentNode.querySelector('.comName').innerText
    const jobName  = parentNode.querySelector('.jobName ').innerText
    const jobType= parentNode.querySelector('.jobType').innerText
    const status = parentNode.querySelector('.status').innerText
    const notes = parentNode.querySelector('.notes').innerText

    parentNode.querySelector('.status').innerText = 'rejected'

    const cardInfo ={
            comName,
            jobName,
            jobType,
            status:'rejected',
            notes
            }

const comExist = rejectedList.find(item=> item.comName == cardInfo.comName)

            

if(!comExist){
    rejectedList.push(cardInfo)
}

interviewList = interviewList.filter(item=> item.comName != cardInfo.comName)

if(currentStatus == "interview-filter-btn"){
    renderInterview();
}
calculateCount();
}
})


function renderInterview(){
    filterSection.innerHTML = ''

    for(let interview of interviewList){
        console.log(interview);
        let div = document.createElement('div');
        div.className = 'card flex justify-between border-2 p-8'
        div.innerHTML = `
        
         <div class="space-y-6">
                <!-- part 1 -->
                <div> 
                    <p class="comName text-4xl font-bold">${interview.comName}</p>
                    <p class="jobName text-2xl">${interview.jobName}</p>
                </div>
                <!-- part 2 -->
                 <div>
                    <p class="jobType">${interview.jobType}</p>
                    
                 </div>
                 <!-- part 3 -->
                 <p class="status">${interview.status}</p>
                 <p class="notes">${interview.notes}</p>
                 <div class="flex gap-8">
                    <button class="interview-btn text-emerald-500 font-semibold border-2 px-4 py-2">INTERVIEW</button>
                    <button class="rejected-btn text-red-500 font-semibold border-2 px-4 py-2">REJECTED</button>
                 </div>
            </div>
            <!-- main part 2 -->
            <div>
                <button class="btn-delete bg-red-300 text-red-600 px-4 py-2">Delete</button>
            </div>
        
        `
        filterSection.appendChild(div)
    }

}


function renderRejected(){
    filterSection.innerHTML = ''

    for(let rejected of rejectedList){
        
        let div = document.createElement('div');
        div.className = 'card flex justify-between border-2 p-8'
        div.innerHTML = `
        
         <div class="space-y-6">
                <!-- part 1 -->
                <div> 
                    <p class="comName text-4xl font-bold">${rejected.comName}</p>
                    <p class="jobName text-2xl">${rejected.jobName}</p>
                </div>
                <!-- part 2 -->
                 <div>
                    <p class="jobType">${rejected.jobType}</p>
                    
                 </div>
                 <!-- part 3 -->
                 <p class="status">${rejected.status}</p>
                 <p class="notes">${rejected.notes}</p>
                 <div class="flex gap-8">
                    <button class="interview-btn text-emerald-500 font-semibold border-2 px-4 py-2">INTERVIEW</button>
                    <button class="rejected-btn text-red-500 font-semibold border-2 px-4 py-2">REJECTED</button>
                 </div>
            </div>
            <!-- main part 2 -->
            <div>
                <button class="btn-delete bg-red-300 text-red-600 px-4 py-2">Delete</button>
            </div>
        
        `
        filterSection.appendChild(div)
    }

}