var AllMembers = ["Rachel Green", "Ross", "Ross", "Phoebe", "Joey Tribianni", "Chandler Bing", "Monica Gellar"];
var PastMembers = [ "Ross", "Phoebe"];

AllMembers.forEach(element => {
    $(".AllList").append("<div class=\"alert alert-secondary\" role=\"alert\"><strong>"+ element +"</strong></div>"); 
});

PastMembers.forEach(element => {
    $(".PastList").append("<div class=\"alert alert-secondary\" role=\"alert\"><strong>" + element +
                            "  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button></strong></div>");
});


$('.modal-body').text(NextPicker());

function NextPicker(){
    var membersToChoose = $(AllMembers).not(PastMembers).get();
    var randomNumber = Math.floor(Math.random()*membersToChoose.length);
    return membersToChoose[randomNumber];
}

