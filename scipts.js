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

function change_index() {

	$('.main_wrapper').html('<h1 class="tc wow fadeInUp">Літературна візитка краю</h1><h1 class="tc wow fadeInUp">Луганщина</h1><div class="video_wrapper"><iframe class="video" src="https://www.youtube.com/embed/R-EQKsFa6q8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="desc wow fadeInRight">Ольга&nbsp;Стрижаченко (літературний псевдонім – Ольга&nbsp;Кудінова). <br>Письменниця, член Національної спілки письменників України, з 2018 року входить до складу правління Луганської обласної організації НСПУ. <br>З-під пера молодої літераторки вийшли у світ дві збірки «А в мого солов’я незрадлива душа» (Луганськ, 2005), «Останній дар» (Луганськ, 2008). <br>Лауреат Міжнародної україно-німецької літературної премії ім. Олеся&nbsp;Гончара (Київ, 2006) та багатьох літературних конкурсів регіонального, державного і навіть міжнародного рівнів.</div><img src="photo.png" alt="Фото" class="main_photo wow fadeInRight"><audio controls class="wow fadeInDown"><source src="necroTown.mp3">У вас не підтримується програвання MP-3 файлів.</audio>');
	$('header').html('<a class="link-active" onclick="change_index()">Головна</a><a onclick="change_bio()">Біографія</a><a onclick="change_poetry()">Поезія</a><a onclick="change_prose()">Проза</a><a onclick="change_reviews()">Відгуки критиків</a><a onclick="change_photos()">Фотогалерея</a>');
	$('.menu').html('<a class="link-active" onclick="change_index()">Головна</a><a onclick="change_bio()">Біографія</a><a onclick="change_poetry()">Поезія</a><a onclick="change_prose()">Проза</a><a onclick="change_reviews()">Відгуки критиків</a><a onclick="change_photos()">Фотогалерея</a><div class="menu_button wow fadeInUp" onclick="open_menu()"><span></span></div>');
	$('.menu_active').toggleClass('menu_active');

}

function change_bio() {

	$('.main_wrapper').html('<span class="bio_text wow fadeInUp">Ольга Стрижаченко (літературний псевдонім – Ольга Кудінова). <br>Письменниця, член Національної спілки письменників України, з 2018 року входить до складу правління Луганської обласної організації НСПУ. З-під пера молодої літераторки вийшли у світ дві збірки «А в мого солов’я незрадлива душа» (Луганськ, 2005), «Останній дар» (Луганськ, 2008). Лауреат Міжнародної україно-німецької літературної премії ім. Олеся Гончара (Київ, 2006) та багатьох літературних конкурсів регіонального, державного і навіть міжнародного рівнів. <br>Стрижаченко (Кудінова) Ольга Вікторівна, народилась 19 червня 1988 року на сході України, Луганщині, в невеличкому селі Лісна Поляна Марківського району. <br>В 1994 році переступила поріг Ліснополянської одинадцятирічки, яку закінчила із золотою медаллю у 2005 р. Паралельно зі шкільним навчанням було здобуття додаткової освіти в Малій академії наук при Луганському національному університеті імені Тараса Шевченка (2004, 2005 рр., секція «Літературна творчість»). Вищу освіту також отримала в Луганському національному університеті імені Тараса Шевченка. З 2005 по 2009 рік навчалася на спеціальності «Літературна творчість» (бакалавр); 2009 - 2010рр. - навчання в магістратурі Магістр філології. <br>Період написання магістерської роботи співпадає з початком трудової діяльності. 2009 - 2011 роки - працювала вчителем української мови та літератури в Караван-Солодківській гімназії Марківського району.<br><br>У 2011 році зайняла посаду головного редактора радіоінформаційної організації «Марківська районна редакція радіомовлення»; за сумісництвом працювала вчителем-філологом в селищній гімназії.<br>Творчий шлях розпочала ще будучи школяркою. Брала активну участь в регіональних та всеукраїнських літературних конкурсах. У багатьох із них отримала звання лауреата: «Помните, какой ценой завоевано счастье», «История одной фотографи», «Золотой диктофон» (Луганськ, 2004-2005 рр.), фестиваль патріотичної пісні (номінація – кращий поетичний твір, Білокуракине, 2012), «Паперовий літак» (Сєверодонецьк, 20016) та інші.<br>З 1 грудня 2019 року набрав чинності Указ Президента України №661/2019 від 05.09.2019 р. «Про призначення стипендій Президента України для молодих письменників і митців у сфері музичного, театрального, образотворчого, хореографічного, естрадно-циркового мистецтва та кіномистецтва», відповідно до якого луганська письменниця Ольга Стрижаченко у 2019-2020 роках є президентським стипендіатом.<br>Наприкінці 2018 року Національна спілка письменників України видала збірку «Схід сонця» (твори учасників Східної регіональної наради творчої молоді; Харків: Майдан, 2018), до якої увійшла проза О. Стрижаченко.<br>Влітку 2019 року письменниця організувала значущий для рідної Марківщини культурний захід: відбулася презентація книги «Бути людиною» (видавництво «Легенда», 2019). До збірки, виданої за підтримки німецького фонду «Пам&#39;ять, відповідальність, майбутнє» спільно з партнерами, увійшло оповідання марківчанки «Сусідська баба». За нього на Міжнародному конкурсі документального оповідання (Київ, 2018) Ольга Стрижаченко посіла ІІІ місце серед професійних письменників.<br>Із значних досягнень – і перемога (ІІ місце) у ХІ обласномуконкурсі «Воронцева слобода» (номінація «Поетичний жанр»; Білокуракине, 2019). Нещодавно відзначена грамотою Марківської районної державної адміністрації та районної ради (серпень 2019) «За вагомий особистий внесок у розвиток культури України, збереження та розвиток культурної спадщини регіону».<br><br>Пані Ольга – мама трьох чарівних діток, вона всіляко залучає і їх досвіту мистецтва. Навесні минулого року творча родина презентувала яскравий оригінальний майстер-клас із виготовлення українських оберегів. А казки у поетичній формі Ольги Стрижаченко використовують вихователі дошкільних навчальних закладів не тільки району, а й області під час театралізованої діяльності («Треба жити у любові», «Переддень Святого Миколая, або Як Марійка з друзями Диво рятували» та інші). Нині письменниця готує до друку власну книгу для дітей дошкільного та молодшого шкільного віку.<br>З огляду на всі вище зазначені здобутки у творчості (в літературі – мистецтві слова), громадській та культурній діяльності, вагомий внесок у розвиток духовності дітей та молоді регіону, активну життєву позицію, відділ культури Марківської районної державної адміністрації рекомендував Ольгу Стрижаченко до участі у ХІІ обласному конкурсі «Молода людина Луганщини-2019», номінація «Відкриття року в галузі культури та мистецтва».</span>');
	$('header').html('<a onclick="change_index()">Головна</a><a onclick="change_bio()" class="link-active">Біографія</a><a onclick="change_poetry()">Поезія</a><a onclick="change_prose()">Проза</a><a onclick="change_reviews()">Відгуки критиків</a><a onclick="change_photos()">Фотогалерея</a>');
	$('.menu').html('<a onclick="change_index()">Головна</a><a onclick="change_bio()" class="link-active">Біографія</a><a onclick="change_poetry()">Поезія</a><a onclick="change_prose()">Проза</a><a onclick="change_reviews()">Відгуки критиків</a><a onclick="change_photos()">Фотогалерея</a><div class="menu_button wow fadeInUp" onclick="open_menu()"><span></span></div>');
	$('.menu_active').toggleClass('menu_active');

}

function change_poetry() {

	$('.main_wrapper').html('<h1 style="text-align: center">Вірші Ольги Кудінової</h1><div class="poetry-part"><div class="poems_list wow fadeInLeft"><span onclick="sel_sect_1()">Про Україну та малу Батьківщину</span> <br><span onclick="sel_sect_2()">Пейзажна лірика</span> <br><span onclick="sel_sect_3()">Категорія 3</span> <br><span onclick="sel_sect_4()">Твори для дітей</span></div><div class="poem wow fadeInRight">Оберіть вірш!</div></div>');
	$('header').html('<a onclick="change_index()">Головна</a><a onclick="change_bio()">Біографія</a><a onclick="change_poetry()" class="link-active">Поезія</a><a onclick="change_prose()">Проза</a><a onclick="change_reviews()">Відгуки критиків</a><a onclick="change_photos()">Фотогалерея</a>');
	$('.menu').html('<a onclick="change_index()">Головна</a><a onclick="change_bio()">Біографія</a><a onclick="change_poetry()" class="link-active">Поезія</a><a onclick="change_prose()">Проза</a><a onclick="change_reviews()">Відгуки критиків</a><a onclick="change_photos()">Фотогалерея</a><div class="menu_button wow fadeInUp" onclick="open_menu()"><span></span></div>');
	$('.menu_active').toggleClass('menu_active');

}

function change_prose() {

	$('.main_wrapper').html('');
	$('header').html('<a onclick="change_index()">Головна</a><a onclick="change_bio()">Біографія</a><a onclick="change_poetry()">Поезія</a><a onclick="change_prose()" class="link-active">Проза</a><a onclick="change_reviews()">Відгуки критиків</a><a onclick="change_photos()">Фотогалерея</a>');
	$('.menu').html('<a onclick="change_index()">Головна</a><a onclick="change_bio()">Біографія</a><a onclick="change_poetry()">Поезія</a><a onclick="change_prose()" class="link-active">Проза</a><a onclick="change_reviews()">Відгуки критиків</a><a onclick="change_photos()">Фотогалерея</a><div class="menu_button wow fadeInUp" onclick="open_menu()"><span></span></div>');
	$('.menu_active').toggleClass('menu_active');

}

function change_reviews() {

	$('.main_wrapper').html('');
	$('header').html('<a onclick="change_index()">Головна</a><a onclick="change_bio()">Біографія</a><a onclick="change_poetry()">Поезія</a><a onclick="change_prose()">Проза</a><a onclick="change_reviews()" class="link-active">Відгуки критиків</a><a onclick="change_photos()">Фотогалерея</a>');
	$('.menu').html('<a onclick="change_index()">Головна</a><a onclick="change_bio()">Біографія</a><a onclick="change_poetry()">Поезія</a><a onclick="change_prose()">Проза</a><a onclick="change_reviews()" class="link-active">Відгуки критиків</a><a onclick="change_photos()">Фотогалерея</a><div class="menu_button wow fadeInUp" onclick="open_menu()"><span></span></div>');
	$('.menu_active').toggleClass('menu_active');

}

function change_photos() {

	$('.main_wrapper').html('');
	$('header').html('<a onclick="change_index()">Головна</a><a onclick="change_bio()">Біографія</a><a onclick="change_poetry()">Поезія</a><a onclick="change_prose()">Проза</a><a onclick="change_reviews()">Відгуки критиків</a><a onclick="change_photos()" class="link-active">Фотогалерея</a>');
	$('.menu').html('<a onclick="change_index()">Головна</a><a onclick="change_bio()">Біографія</a><a onclick="change_poetry()">Поезія</a><a onclick="change_prose()">Проза</a><a onclick="change_reviews()">Відгуки критиків</a><a onclick="change_photos()" class="link-active">Фотогалерея</a><div class="menu_button wow fadeInUp" onclick="open_menu()"><span></span></div>');
	$('.menu_active').toggleClass('menu_active');

}
