// extract-text.js - for NE20 jQuery LAB 1: Text from a list

// $(document).ready(function (){    

function extractText(){
    $("button").click(function (){                      // .Click will call on('click')
        var myArr = $('ul#items li').toArray();         // copy the list to an array
        $.each(myArr, function(i, val){                 
            $('#result').append(val.innerText +' ');   //Write the text to the result div
            console.log(val);
        });
    });
}
