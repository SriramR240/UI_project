let add = () => {
let name = document.querySelector('.container #name'); 
let comment = document.querySelector('.container #Message'); 

if (name.value !== "" && comment.value != "") { 
let list = document.querySelector('.list'); 
let time = new Date();
let now = time.toLocaleString();
now=now.fixed();
let list_item = document.createElement ("l1"); 

list_item.innerHTML = `
<span>
<p>${name.value.fontsize(6).fontcolor("red")} <br> ${now}</p> 
</span>
<p>${comment.value.fontsize(6)}</p>
`;
list.append(list_item); 
}
 
if (name.value == "" || comment.value == "") {
let list = document.querySelector('.list'); 
let list_item = document.createElement ("l2"); 
var warn = 'Please enter name & comment!';  
alert(warn); 
 }
name.value=comment.value = "";
}