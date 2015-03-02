var $form = $("form");
var $toDoList = $("#to-do-list");
var $list = $(".list");
var $li = $("<li>");

$form.on("submit", function (e) {
    var $li = $("<li>");
    var $x = $("<p>").html($list.val())

    e.preventDefault();
    $li.append($toDoList.val()+ " x")
    $list.append($li);
});    
    
    
$li.on("click","li", function (e) {
    console.log("Clicked on the LI");
 });















