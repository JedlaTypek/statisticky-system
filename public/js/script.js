function findChecked(){
    let checkboxes = document.querySelectorAll('[id$="Check"]');
    let checked = []
    checkboxes.forEach((checkbox) => {
        if(checkbox.checked) checked.push(checkbox);
    })
    return checked;
}

function updateProfileCards(){
    checked = findChecked();
    checked.forEach((checkbox) => {
        let id = parseInt(checkbox.id);
        document.getElementById(id+'Money').value = allMoney.value;
        document.getElementById(id+'Power'). value = allPower.value;
        document.getElementById(id+'Experience').value = allExperience.value;
    })
}

function validate(){

}

allMoney.addEventListener('input', () => {
    updateProfileCards();
})

allPower.addEventListener('input', () => {
    updateProfileCards();
})

allExperience.addEventListener('input', () => {
    updateProfileCards();
})

oznacVse.addEventListener('change', () => {
    let checkboxes = document.querySelectorAll('[id$="Check"]');
    checkboxes.forEach(checkbox => checkbox.checked = oznacVse.value === 'true');
    oznacVse.value = oznacVse.value === 'true' ? 'false' : 'true';
});