function cheque()
{
	window.location.href="chequebook.html"
}
function card()
{
	window.location.href="lostcard.html"
}
function query()
{
	window.location.href="query.html"
}
function success()
{
window.alert("Request added Successfully");
}
function back()
{
window.history.back();
}
function request()
{
var e = document.getElementById("elementId");
var value = e.options[e.selectedIndex].value;
	if(value=="All")
	{
		data = [
    ['Mazda', 2001, 2000, '2006-01-01'],
    ['Pegeout', 2010, 5000, '2005-01-01'],
    ['Honda Fit', 2009, 3000, '2004-01-01'],
    ['Honda CRV', 2010, 6000, '2003-01-01'],];
	}
	else if(value=="ChequeBook")
	{
		data = [
    ['Pegeout', 2010, 5000, '2005-01-01'],
    ['Honda Fit', 2009, 3000, '2004-01-01'],
    ['Honda CRV', 2010, 6000, '2003-01-01'],
];
	}
	else if(value=="Card")
	{
		data = [
    ['Honda Fit', 2009, 3000, '2004-01-01'],
    ['Honda CRV', 2010, 6000, '2003-01-01'],
];
	}
	else
	{
		data = [
    ['Honda CRV', 2010, 6000, '2003-01-01'],
];
	}
	$('#mytable').jexcel({
    data:data,
    colHeaders: ['Description','Year','Price', 'Buy'],
    colWidths: [ 200, 300, 100, 100 ],
    columns: [
        { type: 'text', readOnly:true },
        { type: 'text', },
        { type: 'text', },
        { type: 'checkbox' },
    ]
});

}

$(function() {
            $( "#datepicker-1" ).datepicker({maxDate: new Date(),dateFormat: 'dd-mm-yy'});
});
    

