$('#twitter-users').on('click','a', function() {
	var $this = $(this);
	var searchName = $this.attr('id');

	$('#tweets').html('<img src="ajax-loader.gif">');

	$.ajax({
        url: 'twitter-JSON.php',
        data: {
        	searchName: searchName
        },
        type: 'GET',
        success: function(response) {
        	$('#tweets').html(response)
        },
    });

  	
});

$('#tweets').on('click','li', function(){
	$(this).addClass('read');
});