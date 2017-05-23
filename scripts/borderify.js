

{

$('div.info').click(function() {

//получаем вопрос
	var qtext = $(this).siblings('.content').children('.formulation').children('.qtext');
    var ablock = qtext.siblings(".ablock");
    console.log(qtext.html());
    var quest = qtext.text();
    console.log(quest);
    
   
    
//ищем ответ
var answerText = db[quest];
console.log(answerText);
var answer = ablock.children('.answer').children("div:contains(" + answerText + " )");
    //alert(answer.html());

//ставим чекбокс
$(answer).children("input").prop("checked", true);


})

}
