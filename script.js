//HTMLタグをJSの方で保存
const animeInput = document.getElementById("animeInput");
const addbtn =document.getElementById("addBtn");
const animeList = document.getElementById("animeList");

//ボタンの送信を押すと現在書いてるアニメの名前が送られる
addbtn.addEventListener("click",function() {
  const animeName = animeInput.value;

  if(animeName ==""){
    alert("アニメ名を入力してください");
    return;
  }

  const li =document.createElement("li");
  li.textContent =animeName;
  //視聴しているとかのステータス付けをしている
  li.textContent =animeName +" ";
  const select =document.createElement("select");
  select.innerHTML=`
  <option value="見たい">見たい</option>
   <option value="視聴中">視聴中</option>
    <option value="視聴済み">視聴済み</option>
  `;
  li.appendChild(select);
select.addEventListener("change", function() {
 
  //ステータスによって色が変化する
  if (select.value === "見たい") {
    li.style.backgroundColor = "lightblue";
 
  } else if (select.value === "視聴中") {
    li.style.backgroundColor = "lightyellow";
 
  } else if (select.value === "視聴済み") {
    li.style.backgroundColor = "lightgreen";
  }
}); 

  //削除ボタン追加  
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent ="削除";
  deleteBtn.addEventListener("click",function(){
    animeList.removeChild(li);
  });
  li.appendChild(deleteBtn);
  animeList.appendChild(li);

  animeInput.value ="";

})
//Enterキーで送信できるようにしている
animeInput.addEventListener("keydown",function(e){
if(e.key ==="Enter"){
  addbtn.click();
}
})
