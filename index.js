var AllMembers = ["Rachel", "Ross", "Phoebe", "Joey", "Chandler", "Monica"];
var MembersRoundOne = [ "Ross", "Phoebe"];

$('.modal-body').text(NextPicker());

function NextPicker(){
    var membersToChoose = $(AllMembers).not(MembersRoundOne).get();
    var randomNumber = Math.floor(Math.random()*membersToChoose.length);
    return membersToChoose[randomNumber];
}