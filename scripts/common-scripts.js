
;(function($){
	$(function(){

		// Begin input common focus and blur for value.
		$('.main-wrap input:text,.main-wrap input:password,input[type="email"],.main-wrap textarea').focus(function(){if(this.value==this.defaultValue){this.value=''}})
		$('.main-wrap input:text,.main-wrap input:password,input[type="email"],.main-wrap textarea').blur(function(){if(!this.value){this.value=this.defaultValue;}})
		// Ends input common focus and blur for value.
        
	})// End ready function.


})(jQuery)
