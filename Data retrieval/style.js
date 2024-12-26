function saveText(){
    const textInput = document.getElementById('textInput').value ;
    localStorage.setItem('savedText',textInput)
    document.getElementById('textInput').value = ''
}
function retrieveText(){
    const savedText = localStorage.getItem('savedText');
    if(savedText){
        document.getElementById('output').textContent = savedText
    }
    else{
        document.getElementById('output').textContent = 'No Saved Text Found';
    }
}