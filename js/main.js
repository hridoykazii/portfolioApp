// const wrapper = document.querySelector(".wrapper"),
// selectBtn = wrapper.querySelector(".select-btn"),
// options = wrapper.querySelector(".options"),
// searchInput=wrapper.querySelector("input");


// let interests = ["1% interest", "2% interest", "3% interest", "4% interest", "5% interest"];

// function addInterest() {
   
//     options.innerHTML="";
//     interests.forEach(interest => {
//        let li = `<li onclick="updateName(this)">${interest}</li>`;
//        options.insertAdjacentHTML("beforeend", li);

//     });
    
// }

// addInterest();
// function updateName(selectedLi){
//     searchInput.value="";
//     addInterest();
//     wrapper.classList.remove("active");
//     selectBtn.firstElementChild.innerText = selectedLi.innerText;
// }

// searchInput.addEventListener("keyup",()=>{
//     let arr = [];
//     let searchedValue = searchInput.value.toLowerCase();
//     arr = interests.filter(data =>{
//         return data.toLowerCase().startsWith(searchedValue);
//     }).map(data => `<li onclick="updateName(this)">${data}</li>`).join("");
//     options.innerHTML = arr ? arr: `<p style="color: #5e6278">No results found</p>`; 
// });


// selectBtn.addEventListener("click", () =>{
//     wrapper.classList.toggle("active");
// });

// Edit-Section-District
// const wrapperEdit = document.getElementById("wrapperDisEdit"),
// selectBtnEdit = wrapperEdit.getElementById("selectBtnEdit"),
// optionsDisEdit = wrapperEdit.getElementById("optionsDisEdit"),
// searchEditDisInput=wrapperEdit.getElementById("editDisInput");


// let districts = ["(Dhk)-Dhaka", "(CTG)-Chitagong", "(Kh)-Khulna", "(Raj)-Rajshahi", "(Sy)-Sylhet","(RNG)-Rangpur"];

// function addDistrict() {
   
//     optionsDisEdit.innerHTML="";
//     districts.forEach(district => {
//        let liDis = `<li onclick="updateName(this)">${district}</li>`;
//        optionsDisEdit.insertAdjacentHTML("beforeend", liDis);

//     }); 
// }

// addDistrict();
// function updateName(selectedLiDis){
//     searchEditDisInput.value="";
//     addDistrict();
//     wrapperEdit.classList.remove("active");
//     selectBtnEdit.firstElementChild.innerText = selectedLiDis.innerText;
    
// }

// searchEditDisInput.addEventListener("keyup",()=>{
//     let arr = [];
//     let searchedValueEditDis = searchEditDisInput.value.toLowerCase();
//     arr = districts.filter(data =>{
//         return data.toLowerCase().startsWith(searchedValueEditDis);
//     }).map(data => `<li onclick="updateName(this)">${data}</li>`).join("");
//     optionsDisEdit.innerHTML = arr ? arr: `<p style="color: #5e6278">No results found</p>`; 
// });


// selectBtnEdit.addEventListener("click", () =>{
//     wrapperEdit.classList.toggle("active");
// });

////
const wrapper2 = document.querySelector("#wrapperDisEdit"),
selectBtn2 = wrapper2.querySelector("#selectBtnEdit"),
options2 = wrapper2.querySelector("#optionsDisEdit"),
searchInput2=wrapper2.querySelector("#editDisInput");


let districts = ["1% interest", "2% interest", "3% interest", "4% interest", "5% interest"];

function addDistrict() {
   
    options2.innerHTML="";
    districts.forEach(district => {
       let li = `<li onclick="updateDis(this)">${district}</li>`;
       options2.insertAdjacentHTML("beforeend", li);

    });
    
}

addDistrict();
function updateDis(selectedLi){
    searchInput2.value="";
    addDistrict();
    wrapper2.classList.remove("active");
    selectBtn2.firstElementChild.innerText = selectedLi.innerText;
}

searchInput2.addEventListener("keyup",()=>{
    let arr = [];
    let searchedValue = searchInput2.value.toLowerCase();
    arr = districts.filter(data =>{
        return data.toLowerCase().startsWith(searchedValue);
    }).map(data => `<li onclick="updateDis(this)">${data}</li>`).join("");
    options2.innerHTML = arr ? arr: `<p style="color: #5e6278">No results found</p>`; 
});


selectBtn2.addEventListener("click", () =>{
    wrapper2.classList.toggle("active");
});


