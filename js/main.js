const wrapper = document.querySelector(".wrapper"),
selectBtn = wrapper.querySelector(".select-btn"),
options = wrapper.querySelector(".options"),
searchInput=wrapper.querySelector("input");


let interests = ["1% interest", "2% interest", "3% interest", "4% interest", "5% interest"];

function addInterest() {
   
    options.innerHTML="";
    interests.forEach(interest => {
       let li = `<li onclick="updateName(this)">${interest}</li>`;
       options.insertAdjacentHTML("beforeend", li);

    });
    
}

addInterest();
function updateName(selectedLi){
    searchInput.value="";
    addInterest();
    wrapper.classList.remove("active");
    selectBtn.firstElementChild.innerText = selectedLi.innerText;
}

searchInput.addEventListener("keyup",()=>{
    let arr = [];
    let searchedValue = searchInput.value.toLowerCase();
    arr = interests.filter(data =>{
        return data.toLowerCase().startsWith(searchedValue);
    }).map(data => `<li onclick="updateName(this)">${data}</li>`).join("");
    options.innerHTML = arr ? arr: `<p style="color: #5e6278">No results found</p>`; 
});


selectBtn.addEventListener("click", () =>{
    wrapper.classList.toggle("active");
});


