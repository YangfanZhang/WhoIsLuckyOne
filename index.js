let allMembers = ["Adam", "Chris", "Eric", "Francois", "George", "Harry", "Hening", "James J", "James M", "Jayne", "Jia", "Johan", "Karthik", "Leighton", "Mark G", "Mark L", "Marty", "Matt", "Mike", "Pat", "Phillip", "Reesy", "Romey", "Shane", "Tyson", "Wesley", "Yangfan", "Yoong"];
allMembers.sort();
AppendItemsInAllMembers(allMembers);

if(localStorage.getItem('roundOneLocal') == null){
    roundOne = [ "Marty", "Yoong", "Reesy", "James J", "Matt", "James M", "Leighton", "Yangfan", "Tyson"];
    localStorage.setItem("roundOneLocal", JSON.stringify(roundOne));
}
else
{
    roundOne =  JSON.parse(localStorage.getItem('roundOneLocal'));
}
roundOne.sort();
AppendItemsInroundOne(roundOne);


$("#generateBtn").on('click', function(e){
    rollAgain(e);
});

$('.rollAgain').on('click', function(e){
    rollAgain(e);
});

$('.saveBtn').on('click', function(e){
    var textValue = $('.modal-body').text();
    roundOne =  JSON.parse(localStorage.getItem('roundOneLocal'));
    roundOne.push(textValue);
    localStorage.setItem("roundOneLocal", JSON.stringify(roundOne));
    $(".PastList").append("<div class=\"alert alert-secondary \" role=\"alert\"><strong>" + textValue +
    "<button type=\"button\" class=\"close closeAlertBtn\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button></strong></div>");
})

$('.closeAlertBtn').on('click', function(e){
    var alert = e.currentTarget.parentNode;
    var text = alert.textContent.replace('×', '');
    roundOne =  JSON.parse(localStorage.getItem('roundOneLocal'));
    roundOne.splice(roundOne.indexOf(text), 1);
    localStorage.setItem("roundOneLocal", JSON.stringify(roundOne));
})

function rollAgain(event){
    event.preventDefault();
    $('.modal-body').text(NextPicker());
}

function AppendItemsInAllMembers(array) {
    for (let i = 0; i < array.length; i++) {
        $(".AllList").append("<div class=\"alert alert-secondary \" role=\"alert\"><strong>"+ array[i] +"</strong></div>");
        }
}

function AppendItemsInroundOne(array){
    for (let i = 0; i < array.length; i++) {
        $(".PastList").append("<div class=\"alert alert-secondary \" role=\"alert\"><strong>" + array[i] +
        "<button type=\"button\" class=\"close closeAlertBtn\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button></strong></div>");
    }
}

function NextPicker(){
    var membersToChoose = $(allMembers).not(roundOne).get();
    var randomNumber = Math.floor(Math.random()*membersToChoose.length);
    return membersToChoose[randomNumber];
}

