// search.js - For NE20 LAB 2. Search in a list. Use with list.html

function search(){
    let text =  $('#searchText').val();
    let matches = 0;

    for(let town of $("#towns li").toArray()){
        if(town.textContent.indexOf(text) != -1){  // Check text for match in towns
            matches++;                             // Keep track of matches found
            $(town).css('font-weight', 'bold');    // And make bold in list
        }else{
            $(town).css('font-weight', '');        // set or remove bolding for non-matches
        }
    }
    $('#result').text(matches+' matches found');  // Report number of matches found to user
}
