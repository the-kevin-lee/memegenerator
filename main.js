    
    
let onlyForm = document.querySelector('form');


let containDiv = document.createElement('div');
containDiv.classList.add('containDiv');
document.body.appendChild(containDiv);


onlyForm.addEventListener('submit', function(e){
e.preventDefault();

let link = document.querySelector('#url').value;
let textOnTop = document.querySelector('#topText').value;
let textOnBottom = document.querySelector('#bottomText').value;


    console.log(link);
    console.log(textOnTop);
    console.log(textOnBottom);





let newDiv = document.createElement('div');
newDiv.classList.add('memeBox');
containDiv.appendChild(newDiv);


    
let newImg = document.createElement('img');
newDiv.appendChild(newImg);
//adding CSS styles
newImg.classList.add('styledImg');
newImg.src = link;

let renderedTop = document.createElement('h3');
renderedTop.innerText = textOnTop;
renderedTop.classList.add('styledTop');
newDiv.appendChild(renderedTop);

let renderedBottom = document.createElement('h3');
renderedBottom.innerText = textOnBottom;
renderedBottom.classList.add('styledBottom');
newDiv.appendChild(renderedBottom);


document.querySelector('#url').value = "";
document.querySelector('#topText').value = "";
document.querySelector('#bottomText').value = "";


removeBtn = document.createElement('button');
removeBtn.classList.add('removeBtn');
removeBtn.innerText = "Remove Me";
containDiv.appendChild(removeBtn);

removeBtn.addEventListener('click', function(){
    
    newDiv.remove();
    removeBtn.remove();
    
})


}
)






