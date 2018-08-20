//back-end
function ItemObject(item) {
  this.item = item;
};

ItemObject.prototype.move = function() {
  $("input[name=checkbox]").bind("click", function() {
    if ($(this).is(":checked")) {
      $(this).parent().appendTo($("#completed"));
    } else if ($(this).not(":checked")) {
      $(this).parent().appendTo($("#to-do-list"));
    }
  });
}

//front-end
$(document).ready(function() {
  $("form#new-entry").submit(function(event) {
    event.preventDefault();

    var input = $("input#new-item").val();
    var newItem = new ItemObject(input);

    $("div#to-do-list").append("<p><input type='checkbox' name='checkbox'>  " + newItem.item + "</p>")

    newItem.move();

    $("input#new-item").val("");
  });
});
