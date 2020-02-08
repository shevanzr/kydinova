function open_menu() {

	$('.menu').toggleClass('menu_active');
	$('.menu_button').toggleClass('mbutton_active');

}

function sel_sect_1() {

	$('.poems_list').html('<span onclick="to_start()">Назад</span><br><span onclick="show_cat1num1()">cat1_num1</span><br><span onclick="show_cat1num2()">cat1-num2</span><br><span onclick="show_cat1num3()">cat1-num3</span><br><span onclick="show_cat1num4()">cat1-num4</span>');

}

function sel_sect_2() {

	$('.poems_list').html('<span onclick="to_start()">Назад</span><br><span onclick="show_cat2num1()">cat2_num1</span><br><span onclick="show_cat2num2()">cat2-num2</span><br><span onclick="show_cat2num3()">cat2-num3</span><br><span onclick="show_cat2num4()">cat2-num4</span>');

}

function sel_sect_3() {

	$('.poems_list').html('<span onclick="to_start()">Назад</span><br><span onclick="show_cat3num1()">cat3_num1</span><br><span onclick="show_cat3num2()">cat3-num2</span><br><span onclick="show_cat3num3()">cat3-num3</span><br><span onclick="show_cat3num4()">cat3-num4</span>');

}

function sel_sect_4() {

	$('.poems_list').html('<span onclick="to_start()">Назад</span><br><span onclick="show_cat4num1()">cat4_num1</span><br><span onclick="show_cat4num2()">cat4-num2</span><br><span onclick="show_cat4num3()">cat4-num3</span><br><span onclick="show_cat4num4()">cat4-num4</span>');

}

function to_start() {

	$('.poems_list').html('<span onclick="sel_sect_1()">Про Україну та малу Батьківщину</span> <br><span onclick="sel_sect_2()">Пейзажна лірика</span> <br><span onclick="sel_sect_3()">Категорія 3</span> <br><span onclick="sel_sect_4()">Твори для дітей</span>');

}

function show_cat1num1() {

	$('.poem').html('Ви обрали вірш! 1');

}

function show_cat1num2() {

	$('.poem').html('Ви обрали вірш! 2');

}

function show_cat1num3() {

	$('.poem').html('Ви обрали вірш! 3');

}

function show_cat1num4() {

	$('.poem').html('Ви обрали вірш! 4');

}

function show_cat2num1() {

	$('.poem').html('Ви обрали вірш! 5');

}

function show_cat2num2() {

	$('.poem').html('Ви обрали вірш! 6');

}

function show_cat2num3() {

	$('.poem').html('Ви обрали вірш! 7');

}

function show_cat2num4() {

	$('.poem').html('Ви обрали вірш! 8');

}

function show_cat3num1() {

	$('.poem').html('Ви обрали вірш! 9');

}

function show_cat3num2() {

	$('.poem').html('Ви обрали вірш! 10');

}

function show_cat3num3() {

	$('.poem').html('Ви обрали вірш! 11');

}

function show_cat3num4() {

	$('.poem').html('Ви обрали вірш! 12');

}

function show_cat4num1() {

	$('.poem').html('Ви обрали вірш! 13');

}

function show_cat4num2() {

	$('.poem').html('Ви обрали вірш! 14');

}

function show_cat4num3() {

	$('.poem').html('Ви обрали вірш! 15');

}

function show_cat4num4() {

	$('.poem').html('Ви обрали вірш! 16');

}
