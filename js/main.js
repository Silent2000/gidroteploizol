$(document).ready(function(){   
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('#scroller').fadeIn();
        } else {
            $('#scroller').fadeOut();
        }
    });
    $('#scroller').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});

$(function() {
	burger();
	// showAllDoctors();
	addScrollTo();
	// addWaypoints();
	//dropdownMenuFixResize();
	toTopButton();
	// activateSlickCarousel(); 
	// carouselControls();
	tabsHandler();
	// addMaskedInput();
	// addPopupBehavior();
});

function burger(){
	// Бургер с анимацией
	$('.burger').on('click', function(){
		$(this).toggleClass('active');
		$('.header__menu').slideToggle();
	})
}
function dropdownMenuFixResize(){
	$(window).on('resize', function(){
		if($(window).width() > 767){
			$('.nav-cont ul').css('display', 'table-cell');
		} else {
			if(!$('.burger').hasClass('active')){
				$('.nav-cont ul').css('display', 'none');
			} 
		}
	});	
}
function toTopButton(){
	$(".up").click(function() {
	   $('html, body').animate({
	       scrollTop: 0
	   }, 1000);
	});
}
function tabsHandler(){
	$(".tabs__controls-item").click(function() {
		const index = $(this).index();
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
		var tabsContent = $(this).closest('.tabs').find('.tabs__content-item');
		tabsContent.removeClass('active');
		tabsContent.eq(index).addClass('active');
	});
}

function addScrollTo(){
	$('a[data-scroll-to]').on('click',function(){
		var idToScroll = $(this).attr('data-scroll-to');
    $('html, body').animate({
    	scrollTop: $("#" + idToScroll).offset().top
    }, 1000);
	});
}

function fixRequiredSafari(){
	$("form").on('submit', function(e) {

    var ref = $(this).find("[required]");

    $(ref).each(function(){
        if ( $(this).val() == '' )
        {
            alert("Введите номер телефона");

            $(this).focus();

            e.preventDefault();
            return false;
        }
    });  return true;
	});
}

function removePlaceholdersOnClick(){
	$('textarea, input[type="text"], input[type="tel"]').on('focus', function(){
		$(this).addClass('hid-placeholder');
	});
	$('textarea, input[type="text"], input[type="tel"]').on('blur', function(){
		$(this).removeClass('hid-placeholder');
	});
}

/*$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "send.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Спасибо, Ваше сообщение успешно отправлено!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 200);
		});
		return false;
	});

});*/

    $(document).ready(function () {
        $('form').submit(function () {
            var formID = $(this).attr('id'); // Получение ID формы
            var formNm = $('#' + formID);
            $.ajax({
                type: 'POST',
                url: 'mail.php', // Обработчик формы отправки
                data: formNm.serialize(),
                success: function (data) {
                    // Вывод текста результата отправки в текущей форме
                    $(formNm).html(data);
                    // Перезагрузка формы через 3 секунды
                }
            });
            return false;
        });
    });

//Эффект перехода
$(document).ready( function() {
  
  var calcPage = $('.calc-page'),
      currentPage = 0,
      nextButton = $('.next-calc'),
      prevButton = $('.prev-calc'),
      calcPageCount = $('.calc-page').length;

      calcPage.not(':first-child').css('display','none');
      
      //Предыдущий слайд
      nextButton.click( function() {
        currentPage++;
        slideSwape();
      });
      
      //Следующий слайд
      prevButton.click( function() {
        currentPage--;
        slideSwape();
      });
      
      //Функция закрытия(открытия) слайдов
      function slideSwape() {
        calcPage.hide(300);
        calcPage.eq(currentPage).show(300);
        slideRepeat();
      }

      //Зацикливание слайдов
      function slideRepeat() {
 		//Переход с последнего на первый
 		if (currentPage == calcPageCount) {
 			calcPage.eq(0).show(300);
 			calcPage.not(':first-child').css('display','none');
 			currentPage = 0;
 		}
      }

});