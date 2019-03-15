$(document).ready(function () {
    "use strict";

    var select, states;

    function updateSelects() {
    	var self = this.value;
    	var state;
    	var selected_state;
    	for(state in select){
    		if(select[state].name == self){
    			selected_state = state;
    			break;
    		}
    	}
        var cities = $.map(select[selected_state].Cities, function (city) {
            return $("<option />").val(city.name).text(city.name);
        });
        $("#city").empty().append(cities);
    }
    
    // if($('#country').val() == 'ایران'){
        $.getJSON("/assets/vendors/province/province.json", function (data) {
            var state;
            select = data;
            states = $("#state").on("change", updateSelects);
            for (state in select) {
                $("<option />").val(select[state].name).text(select[state].name).appendTo(states);
            }
            states.change();
        });
    // }
});