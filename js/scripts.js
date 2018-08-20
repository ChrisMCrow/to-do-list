//back-end
function ItemObject(item) {
  this.item = item;
};


//front-end
$(document).ready(function() {
  $("form#new-entry").submit(function(event) {
    event.preventDefault();

    var input = $("input#new-item").val();
    var newItem = new ItemObject(input)

    $("div#to-do-list").append("<p><input type='checkbox' name='checkbox'>  " + newItem.item + "</p>")
    $("input[name=checkbox]").bind("click", function() {
      $(this).parent().appendTo($("#completed"));
    });
    $("input#new-item").val("");
  });
});
