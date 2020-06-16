// link-buttons.js for NE20 LAB 4. Buttons Link

function attachEvents(){

    var buttons = $('.button').toArray();        // No id attributes on buttons,
    var btn1 = buttons[0];                       // so will use array elements to select buttons.
    var btn2 = buttons[1];                       // btn1, btn2 etc, is easier to read than buttons[0] etc.
    var btn3 = buttons[2];

    btn1.addEventListener('click', function(){     // "Hint: Use the attachEventListener functio" - OK.
        btn2.className = "button";                 // Remove the "class selected"
        btn3.className = "button";
        this.className = "button selected";        // Add it to the attributes
                                                   // I'm really just setting the className.
    })                                             // This is not quite what I want, but it works.
                                                   // I want to call the .click and then use removeClass. Oh well.
    btn2.addEventListener('click', function(){    
        btn1.className = "button";
        btn3.className = "button";
        this.className = "button selected";

    })

    btn3.addEventListener('click', function(){
        btn1.className = "button";
        btn2.className = "button";
        this.className = "button selected";

    })
}
