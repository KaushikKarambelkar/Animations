$(document).ready(function(){
	runtext();
});

function runtext() {
	$("#text1").fadeIn(500, function(){
		$("#text1").fadeOut(500, function(){
			$("#text2").fadeIn(500, function(){
				$("#text2").fadeOut(500, function(){
					$("#text3").fadeIn(500, function(){
						$("#text3").fadeOut(500, function(){
							$("#text4").fadeIn(500, function(){
								$("#text4").fadeOut(500, function(){
									$("#text5").fadeIn(500, function(){
										$("#text5").fadeOut(500, function(){
											$("#text6").fadeIn(500, function(){
												$("#text6").fadeOut(500, function(){
													$("#text7").fadeIn(500, function(){
														$("#text7").fadeOut(500, function(){
															runtext();
														});
													});
												});
											});
										});
									});
								});
							});
						});
					});
				});
			});
		});
	});
}

function temp() {
	$("#text1").fadeIn();
}