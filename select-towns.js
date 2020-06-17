function attachEvents(){


jQuery('#items li:eq(0)').click(function(){
    $(this).toggleClass('data-selected');
});
jQuery('#items li:eq(1)').click(function(){
    $(this).toggleClass('data-selected');
});
jQuery('#items li:eq(2)').click(function(){
    $(this).toggleClass('data-selected');
});
jQuery('#items li:eq(3)').click(function(){
    $(this).toggleClass('data-selected');
});
jQuery('#items li:eq(4)').click(function(){
    $(this).toggleClass('data-selected');
});

$('#showTownsButton').click(function(){
    $('#selectedTowns').empty();
    $('#selectedTowns').html('<p>Selected Cities: </p>');

    for(let item of $("#items li").toArray()){
        if(item.className == "data-selected"){
            $('#selectedTowns').append(item.innerText + ', ');
        }
        console.log(item);
    }
});    
}
