const gitInitBtn = document.querySelector('.git-init-button');
const gitAddBtn = document.querySelector('.git-add-button');
const gitCommitBtn = document.querySelector('.git-commit-button');


gitInitBtn.addEventListener('click', function(){
    gitAction("commande-description-init");
});

gitAddBtn.addEventListener('click', function(){
    gitAction("commande-description-add");
});

gitCommitBtn.addEventListener('click', function(){
    gitAction("commande-description-commit");
});

function gitAction (className){
    const changeVisibility = document.querySelector(`.${className}`);

    if (changeVisibility.classList.contains('active')){
        changeVisibility.classList.remove('active');
        removeEventListener;
    } else {
        changeVisibility.classList.add('active');
        removeEventListener;
    }
}