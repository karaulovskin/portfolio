var myModule = (function () {

	var init = function () {
		 _setUpListners();
	   };
	var _setUpListners = function () {
			$('#add-new-item').on('click', _showModal); // открыть модальное окно
			$('#add-new-project').on('submit', _addProject); // добавление проекта
		};

	var _showModal = function (e) {
			console.log('Вызов модального окна');
			e.preventDefault();
			$('#new-progect-popup').bPopup({
				speed: 650,
				transition: 'slideDown'
			});
		};	
	
	var _addProject = function (e) {
			console.log('добавление проекта');
			e.preventDefault();

			// объявляем переменные	
			var form = $(this);
				url = 'add_project.php'
				data = form.serialize();	

			console.log(data);	

			// запрос на сервер		
			$.ajax({
				url: url,
				type: 'POST',
				dataType: 'json',
				data: data,
			})
			.done(function(ans) {
				console.log("success");
				console.log(ans);
			})
			.fail(function() {
				console.log("error");
			})
			.always(function() {
				console.log("complete");
			});
			

		};

	return {
		init: init
	};	   
	})();

	myModule.init();
