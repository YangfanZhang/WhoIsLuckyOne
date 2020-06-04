var AllMembers = ["Adam", "Chris", "Eric", "Francois", "George", "Harry", "Hening", "James J", "James M", "Jayne", "Jia", "Johan", "Karthik", "Leighton", "Mark G", "Mark L", "Marty", "Matt", "Mike", "Pat", "Phillip", "Reesy", "Romey", "Shane", "Tyson", "Wesley", "Yangfan", "Yoong"];
AllMembers.sort();
var RoundOne = [ "Marty", "Yoong", "Reesy", "James J", "Matt", "James M", "Leighton", "Yangfan"];
RoundOne.sort();
AppendItemsInAllMembers(AllMembers);
AppendItemsInRoundOne(RoundOne);

$('.modal-body').text(NextPicker());

function AppendItemsInAllMembers(array) {
    for (let i = 0; i < array.length; i++) {
        var col = selectCol(i);
        $(".AllList" + col).append("<div class=\"alert alert-secondary \" role=\"alert\"><strong>"+ array[i] +"</strong></div>");
    }
}

function AppendItemsInRoundOne(array){
    for (let i = 0; i < array.length; i++) {
        var col = selectCol(i);
        $(".PastList" + col).append("<div class=\"alert alert-secondary \" role=\"alert\"><strong>" + array[i] +
        "  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button></strong></div>");
    }
}

function selectCol(i) {
    var col = 0;
    if(i < 10){
        col = 1;
    }
    else if(i < 20){
        col = 2;
    }
    else{
        col = 3;
    }
    return col;
}

function NextPicker(){
    var membersToChoose = $(AllMembers).not(RoundOne).get();
    var randomNumber = Math.floor(Math.random()*membersToChoose.length);
    return membersToChoose[randomNumber];
}

