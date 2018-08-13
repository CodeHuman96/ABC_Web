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
    ['2006-01-01','Cheque Book','Dispatched','Processed'],
    ['2005-01-01','Cheque Book',' ','Pending'],
    ['2004-01-01','Lost/Stolen Card','Dispatched','Processed'],
    ['2003-01-01','Query','Contact Branch','Processed'],
];
	}
	else if(value=="ChequeBook")
	{
		data = [
      ['2006-01-01','Cheque Book','Dispatched','Processed'],
    	['2005-01-01','Cheque Book',' ','Pending'],
];
	}
	else if(value=="Card")
	{
		data = [
     ['2004-01-01','Lost/Stolen Card','Dispatched','Processed'],
];
	}
	else
	{
		data = [
    ['2003-01-01','Query','Contact Branch','Processed'],
];
	}
	$('#mytable').jexcel({
    data:data,
    colHeaders: ['Request Date','Request Type','Response','Status'],
    colWidths: [ 200, 300, 260, 100 ],
    columns: [
        { type: 'text'},
        { type: 'text', },
        { type: 'text', },
        { type: 'text' },
    ]
});


}

$(function() {
            $( "#datepicker-1" ).datepicker({maxDate: new Date(),dateFormat: 'dd-mm-yy'});
});
    

