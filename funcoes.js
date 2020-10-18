// NOTE: Because of JSFiddle issues, the actual code below would need to be
// placed inside of the following:
// window.addEventListener("DOMContentLoaded", function(){

// });

   var list = document.getElementById("notes");

   // Loop through localStorage
   for (var i = 0; i < localStorage.length; i++){
   
    // Make sure that we only read the notes from local storage
    if(localStorage.key(i).indexOf("note") !== -1){
      // For each item, create a new <li> element
      var item = document.createElement("li");
      // Populate the <li> with the contents of the current 
      // localStorage item's value
      item.textContent = localStorage.getItem(localStorage.key(i));
      // Append the <li> to the page's <ul>
      list.appendChild(item);
    }
   }

   var btn = document.getElementById("btnSave");
   var note = document.getElementById("txtNote");

   var noteCount = 1;
   btn.addEventListener("click", function(){
     var noteVal = note.value;
     if(noteVal.trim() !== ""){
       localStorage.setItem("note" + noteCount, noteVal);
       var lstItem = document.createElement("li");
       lstItem.textContent = noteVal;
       list.appendChild(lstItem);
       noteCount++;
     }
   });