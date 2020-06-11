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
    // var col = selectCol(roundOne.length-1);
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
        // var col = selectCol(i);
        $(".AllList").append("<div class=\"alert alert-secondary \" role=\"alert\"><strong>"+ array[i] +"</strong></div>");
        }
}

function AppendItemsInroundOne(array){
    for (let i = 0; i < array.length; i++) {
        // var col = selectCol(i);
        $(".PastList").append("<div class=\"alert alert-secondary \" role=\"alert\"><strong>" + array[i] +
        "<button type=\"button\" class=\"close closeAlertBtn\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button></strong></div>");
    }
}

// function selectCol(i) {
//     var col = 0;
//     if(i < 10){
//         col = 1;
//     }
//     else if(i < 20){
//         col = 2;
//     }
//     else{
//         col = 3;
//     }
//     return col;
// }

function NextPicker(){
    var membersToChoose = $(allMembers).not(roundOne).get();
    var randomNumber = Math.floor(Math.random()*membersToChoose.length);
    return membersToChoose[randomNumber];
}

