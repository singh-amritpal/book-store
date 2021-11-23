/* 
  Author: Amritpal Singh
*/

$(document).ready(function () {
    $('#receipt').hide();     //hiding the receipt section when page is loaded.
})

//function to calculate receipt amount and contents when form is submitted.
function checkout() {

    //Declaring and initializing the price of each item available and constant tax.
    let notebooksPrice = 12.00;
    let pensPrice = 2.50;
    let bagsPrice = 32.50;
    const TAX = 13.00;

    //Declaring and initializing the initial quantity of items.
    let notebooksTotalPrice = 0;
    let pensTotalPrice = 0;
    let bagsTotalPrice = 0;

    //taking user information from form.
    let customerName = document.getElementById('customerName').value;
    let customerNumber = document.getElementById('customerNumber').value;

    //taking quantity input of each item and parsing it into integers.
    let notebooksQuantity = parseInt(document.getElementById('notebooks').value);
    let pensQuantity = parseInt(document.getElementById('pens').value);
    let bagsQuantity = parseInt(document.getElementById('bags').value);

    //validating if the input quantity for each item is empty, set it to 0.
    if (isNaN(notebooksQuantity)) {
        document.getElementById('notebooks').placeholder = "0";
        notebooksQuantity = 0;
    }
    if (isNaN(pensQuantity)) {
        document.getElementById('pens').placeholder = "0";
        pensQuantity = 0;
    }
    if (isNaN(bagsQuantity)) {
        document.getElementById('bags').placeholder = "0";
        bagsQuantity = 0;
    }

    //calculating total quantity of all items.
    let totalQuantity = notebooksQuantity + bagsQuantity + pensQuantity;

    //regular expressions for credit card information.
    let customerNumberRegex = /^[A-Z]{2}\-[0-9]{3}\-[0-9]{2}$/;

    let errors = '';

    //validating user Name and email address
    if (customerName == null || customerName == '') {
        errors += "Please enter your Name.<br>";
    }

    //validating credit card input based on the regex.
    if (!customerNumberRegex.test(customerNumber)) {
        errors += "Enter a valid Customer Number.<br>";
    }

    //validating items quantity input is not more than 99.
    if (notebooksQuantity > 10) {
        errors += "Maximum allowed limit for Notebooks is 10.<br>";
    }
    if (pensQuantity > 10) {
        errors += "Maximum allowed limit for Pens is 10.<br>";
    }
    if (bagsQuantity > 10) {
        errors += "Maximum allowed limit for Bags is 10.<br>";
    }

    //validating items quantity is > 0.
    if (totalQuantity === 0 || isNaN(totalQuantity)) {
        errors += "Please buy at-least one of the available items.<br>";
    }

    //showing error (if any) on page as per validations above.
    if (errors) {
        document.getElementById('errors').innerHTML = errors;
        $('#receipt').hide();
    }
    else {  //if there are no errors, calculate receipt contents.
        $('#salesForm').hide();     //hide the sales form.

        $('#receipt').show();       //show the receipt

        //set errors in HTML to blank and show customer info collected from the form.
        document.getElementById('errors').innerHTML = '';
        document.getElementById('receiptCustomerName').innerHTML = `${customerName}`;
        document.getElementById('receiptCustomerNumber').innerHTML = `${customerNumber}`;

        if (notebooksQuantity > 0) { //validating if notebooksQuantity > 0, only then show the row in receipt by setting display property to "table-row".
            document.getElementById('receiptNotebooks').style.display = 'table-row';

            //calculate notebooksTotalPrice by multiplying quantity with price and adding in receipt with upto two decimal digits.
            notebooksTotalPrice = notebooksQuantity * notebooksPrice;
            document.getElementById('notebooksQuantity').innerHTML = `${notebooksQuantity}`;
            document.getElementById('notebooksUnitPrice').innerHTML = `$${notebooksPrice.toFixed(2)}`;
            document.getElementById('notebooksTotalPrice').innerHTML = `$${notebooksTotalPrice.toFixed(2)}`;
        }
        if (pensQuantity > 0) { //validating if pensQuantity > 0, only then show the row in receipt by setting display property to "table-row".
            document.getElementById('receiptPens').style.display = 'table-row';

            //calculate pensTotalPrice by multiplying quantity with price and adding in receipt with upto two decimal digits.
            pensTotalPrice = pensQuantity * pensPrice;
            document.getElementById('pensQuantity').innerHTML = `${pensQuantity}`;
            document.getElementById('pensUnitPrice').innerHTML = `$${pensPrice.toFixed(2)}`;
            document.getElementById('pensTotalPrice').innerHTML = `$${pensTotalPrice.toFixed(2)}`;
        }
        if (bagsQuantity > 0) { //validating if bagsQuantity > 0, only then show the row in receipt by setting display property to "table-row".
            document.getElementById('receiptBags').style.display = 'table-row';

            //calculate bagsTotalPrice by multiplying quantity with price and adding in receipt with upto two decimal digits.
            bagsTotalPrice = bagsQuantity * bagsPrice;
            document.getElementById('bagsQuantity').innerHTML = `${bagsQuantity}`;
            document.getElementById('bagsUnitPrice').innerHTML = `$${bagsPrice.toFixed(2)}`;
            document.getElementById('bagsTotalPrice').innerHTML = `$${bagsTotalPrice.toFixed(2)}`;
        }

        //calculating the price before adding tax amount.
        let priceBeforeTax = notebooksTotalPrice + bagsTotalPrice + pensTotalPrice;
        document.getElementById('totalPriceBeforeTax').innerHTML = `$${priceBeforeTax.toFixed(2)}`;

        //calculating tax amount, i.e. 13% of priceBeforeTax.
        let taxAmount = (priceBeforeTax * TAX) / 100;
        document.getElementById('taxPercentage').innerHTML = `Tax @ ${TAX}%`
        document.getElementById('taxAmount').innerHTML = `$${taxAmount.toFixed(2)}`;

        //calculating total amount including Tax amount.
        let totalPriceAfterTax = priceBeforeTax + taxAmount;
        document.getElementById('totalPriceAfterTax').innerHTML = `$${totalPriceAfterTax.toFixed(2)}`;
    }

    return false;
}