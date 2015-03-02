var $form = $("form");
var $toDoList = $("#to-do-list");
var $list = $(".list");
var $theLis = $(".list");
 console.log ($theLis);
$form.on("submit", function (e) {
    var $li = $("<li>");
    var $x = $("<p>").html($list.val())

    e.preventDefault();
    $li.append($toDoList.val()+ " x")
    $list.append($li);
    
    $li.on("click", function (e) {
        $li.remove(); 
    });
});















