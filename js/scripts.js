function newItem(){

  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);


   if (inputValue === '') {
     alert("You must write something!");
   } else {
     let list = $('#list')
     list.append(li);
   }


  function crossOut() {
    li.toggleClass("strike");
  }

  li.on("dblclick", function crossOut() {
    li.toggleClass("strike");
  });

  let crossOutButton = $("<crossOutButton></crossOutButton>");
  crossOutButton.append(document.createTextNode("X"));
  li.append(crossOutButton);


  crossOutButton.on("click", deleteListItem);
    function deleteListItem() {
      li.addClass("delete");
    }

 // 4. Reordering the items:
   $('#list').sortable();

}
