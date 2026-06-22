const animeInput = document.getElementById("animeInput");
const addbtn =document.getElementById("addBtn");
const animeList = document.getElementById("animeList");

addbtn.addEventListener("click",function() {
  const animeName = animeInput.value;

  if(animeName ==""){
    alert("アニメ名を入力してください");
    return;
  }

  const li =document.createElement("li");
  li.textContent =animeName;
  animeList.appendChild(li);

  animeInput.value ="";

})

animeInput.addEventListener("keydown",function(e){
if(e.key ==="Enter"){
  addbtn.click();
}
})