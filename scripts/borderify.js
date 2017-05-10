//document.body.style.border = "5px solid red";

{

$('div.ablock').click(function() {
//получаем вопрос
	var content = $(this).siblings('.qtext');
	var quest = content.text();
    //alert(quest);
//ищем ответ
    var answerText = bd[quest]
    var answer = $(this).children('.answer').children("div:contains(" + answerText + " )");
    //alert(answer.html());
//ставим чекбокс
    $(answer).children("input").prop("checked", true);


})

}