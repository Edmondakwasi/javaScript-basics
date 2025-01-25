const removeParagraph = document.body.children[2].children[4];

function clickedButton() {
    removeThirdParagraph.remove('p')
}
removeParagraph.addEventListener('click', clickedButton);

const addBlueBackGroundColor = document.getElementById('Blue-background');

function secondButtonClicked() {
    backgroundColorForFirstParagraph.className = 'Back-ground-color'
    
}

addBlueBackGroundColor.addEventListener('click', secondButtonClicked);



const backgroundColorForFirstParagraph = document.body.children[2].children[1];

const removeThirdParagraph = document.body.children[2].children[3];

console.dir(document)




