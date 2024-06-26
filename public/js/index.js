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
        document.querySelector(`[name="${id}money"]`).value = allMoney.value;
        document.querySelector(`[name="${id}power"]`). value = allPower.value;
        document.querySelector(`[name="${id}experience"]`).value = allExperience.value;
    })
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

document.addEventListener("DOMContentLoaded", function() {
    let checkboxes = document.querySelectorAll('[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
    })
});