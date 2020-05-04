//select inputs
const inputs = document.querySelectorAll('.controls input'); 

//function to handle updates from inputs
function handleUpdate() { 
    const suffix = this.dataset.sizing || ''; //returns suffix from data-sizing attribut or nothing where there is none,such as the case of a hex code 
    
    
    //get name (will be the name attribute of input element onwhich function is called)
    let name = this.name; 

    //adjust style with value of input
    document.documentElement.style.setProperty(`--${name}`, this.value + suffix); 
}

//listen for input, and call handleUpdate when there is new input
//looping over list nodes returned from querySelectorAll() above
//adding eventListener to element in each node
//listening for 'change' and calling handleUpdate
inputs.forEach(input => input.addEventListener('input', handleUpdate)); 