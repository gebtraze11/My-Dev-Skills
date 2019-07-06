
// ADD SKILL
$('#addSkill').on('click', function(e){
    let userInput = $('input').val();
    let skillTemplate = `<li class="skill">${userInput}<button class="removeSkill">🗑</button></li>`;
    $('.skill-container').append(skillTemplate)
    $('input').val('');
});

//REMOVE SKILL

$('.skill-container').on('click', '.removeSkill', function(){
$(this).parent().remove();
});
// SAVE SKILL IN LOCAL STORAGE

