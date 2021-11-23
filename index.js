$(document).ready(function () {
    //hiding details of all items when page is loaded.
    $('#notebookDetails').hide();
    $('#pensDetails').hide();
    $('#bagsDetails').hide();


    //on clicking "...More Info" for Notebooks, following operations will take place.
    $('#moreInfo_notebook').click(function () {
        $('#pensDetails').hide();                  //hide pen details
        $('#bagsDetails').hide();                  //hide bags details
        $('#notebookDetails').toggle(500);         //show notebook details

        //change text of "...More Info" to "...Hide Info" accordingly.
        $('#moreInfo_notebook').text(function (i, text) {
            return text === "...More Info" ? "...Hide Info" : "...More Info";
        });
        $('#moreInfo_pens').text("...More Info");
        $('#moreInfo_bags').text("...More Info")
    });

    //on clicking "...More Info" for Pens, following operations will take place.
    $('#moreInfo_pens').click(function () {
        $('#notebookDetails').hide();              //hide notebook details
        $('#bagsDetails').hide();                  //hide bags details
        $('#pensDetails').toggle(500);             //show pens details

        //change text of "...More Info" to "...Hide Info" accordingly.
        $('#moreInfo_pens').text(function (i, text) {
            return text === "...More Info" ? "...Hide Info" : "...More Info";
        });
        $('#moreInfo_notebook').text("...More Info");
        $('#moreInfo_bags').text("...More Info");
    });

    //on clicking "...More Info" for Pens, following operations will take place.
    $('#moreInfo_bags').click(function () {
        $('#notebookDetails').hide();           //hide notebooks details
        $('#pensDetails').hide();               //hide pen details
        $('#bagsDetails').toggle(500);          //show bags details

        //change text of "...More Info" to "...Hide Info" accordingly.
        $('#moreInfo_bags').text(function (i, text) {
            return text === "...More Info" ? "...Hide Info" : "...More Info";
        });
        $('#moreInfo_notebook').text("...More Info");
        $('#moreInfo_pens').text("...More Info");
    });
});