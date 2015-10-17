//real simple tab change

changeTab =  function(target){
	$("#tabcontainer").children().hide();
	$(target).show();
}
$("a.internal").click(function(){
	var target = $(this).attr("href");
	changeTab(target);
})

changeTab("#home");