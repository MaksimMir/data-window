$(function() {
   	$('.personal-block .box .btn').on('click', function() {
		let pos = $(this).attr('data-value');

		/*======= create object =========*/ 

		switch (pos) {
			case 'persons':
				p.dataArray = persons;
				p.name = 'Сотрудник';
				p.box = $('.persons');
				break;
			
			case 'position':
				p.dataArray = position;
				p.name = 'Должность';
				p.box = $('.position');
				break;

			case 'orgs':
				p.dataArray = orgs;
				p.name = 'Организация';
				p.box = $('.orgs');
				break;

			case 'subs':
				p.dataArray = subs;
				p.name = 'Подразделение';
				p.box = $('.subs');
				break;
		}

		/*========= create data, open modal =========*/ 

		let arr = p.createString(p.name, p.dataArray);
		p.createList(arr);
		p.showModal();

	});

	/*========== close modal ==========*/ 

	$('.modal .close').on('click', () => p.closeModal());

	/*========== select data =========*/ 

	$('.modal-body ol').on('click', 'li', function() {
		p.classRemove();
		$(this).addClass('showed');
	});

	/*======== clear selected ========*/ 

	$('.modal .clear').on('click', () => p.classRemove());

	/*======== add string =========*/ 

	$('.modal .save').on('click', function() {
		p.insertVal(p.initStr());
	});

	/*========= delite string ===========*/ 

	$('.box').on('click', '.str-delite', function() {	
		$(this).parent().text('');
		$(this).remove();
	});


	/*========= new object =========*/ 

	let p = new Persons({
		modal: '.modal',
		title: '.modal-title',
		list: '.modal-body ol',
		box: '.personal-block .box',
		name: '',
		dataArray: []
	});

	/*========== data ==========*/ 

	let persons = [
		{
			"id": "6614058867372730524",
			"lastname": "Алексеев",
			"middlename": "Леонид",
			"firstname": "Витальевич",
			"birthday": "12.12.1976"
		},
		{
			"id": "6614058866860645149",
			"lastname": "Алексеев",
			"middlename": "Сергей",
			"firstname": "Владимирович",
			"birthday": "21.02.1984"
		},
		{
			"id": "6614054409580537115",
			"lastname": "Краско",
			"middlename": "Алексей",
			"firstname": "Владимирович",
			"birthday": "03.05.1962"
		},
		{
			"id": "6614058866657596448",
			"lastname": "Петров",
			"middlename": "Иван",
			"firstname": "Измайлович",
			"birthday": "19.04.1967"
		},
		{
			"id": "6614054409953169195",
			"lastname": "Петров",
			"middlename": "Алексей",
			"firstname": "Владимирович",
			"birthday": "14.09.2000"
		},	{
			"id": "6614058867110536359",
			"lastname": "Петров",
			"middlename": "Илья",
			"firstname": "Сергеевич",
			"birthday": "20.02.1997"
		},	{
			"id": "6614054409447102260",
			"lastname": "Яркая",
			"middlename": "Елена",
			"firstname": "Николаевна",
			"birthday": "07.06.1994"
		},	{
			"id": "6614058866287855297",
			"lastname": "Иванов",
			"middlename": "Иван",
			"firstname": "Иванович",
			"birthday": "30.12.1994"
		},	{
			"id": "6614054408212071216",
			"lastname": "Медведева",
			"middlename": "Полина",
			"firstname": "Дмитриевна",
			"birthday": "05.11.1985"
		},	{
			"id": "6614058867275204695",
			"lastname": "Морозова",
			"middlename": "Кристина",
			"firstname": "Николаевна",
			"birthday": "08.03.1964"
		},	{
			"id": "6614054408727694990",
			"lastname": "Пронько",
			"middlename": "Ксения",
			"firstname": "Витальевна",
			"birthday": "01.09.1974"
		},
		{
			"id": "6614058867878077723",
			"lastname": "Витаев",
			"middlename": "Николай",
			"firstname": "Ильич",
			"birthday": "23.04.1999"
		},
		{
			"id": "6614054409672549116",
			"lastname": "Феоктистов",
			"middlename": "Александр",
			"firstname": "Александрович",
			"birthday": "17.08.1978"
		},
		{
			"id": "6614058866941053173",
			"lastname": "Хороев",
			"middlename": "Виталий",
			"firstname": "Владимирович",
			"birthday": "13.10.1989"
		},
		{
			"id": "6614054408140832895",
			"lastname": "Васильева",
			"middlename": "Лия",
			"firstname": "Андреевна",
			"birthday": "12.01.1998"
		},
		{
			"id": "6614058867355027158",
			"lastname": "Утесов",
			"middlename": "Андрей",
			"firstname": "Ильич",
			"birthday": "27.08.1988"
		},
		{
			"id": "6614053894708396843",
			"lastname": "Васильева",
			"middlename": "Елена",
			"firstname": "Алексевна",
			"birthday": "24.12.1976"
		},
		{
			"id": "6614058352583255135",
			"lastname": "Городищева",
			"middlename": "Юлия",
			"firstname": "Александровна",
			"birthday": "03.04.2000"
		},
		{
			"id": "6614054410015151930",
			"lastname": "Цветков",
			"middlename": "Владимир",
			"firstname": "Витальевич",
			"birthday": "17.08.1970"
		},
		{
			"id": "6614058867099135765",
			"lastname": "Цветков",
			"middlename": "Дмитрий",
			"firstname": "Владимирович",
			"birthday": "14.03.1999"
		},
		{
			"id": "6614054409180965020",
			"lastname": "Цветкова",
			"middlename": "Светлана",
			"firstname": "Георгиевна",
			"birthday": "16.01.1969"
		},
		{
			"id": "6614058866746083778",
			"lastname": "Чижов",
			"middlename": "Илья",
			"firstname": "Николаевич",
			"birthday": "05.09.1984"
		},
		{
			"id": "6614058866904603801",
			"lastname": "Шишкова",
			"middlename": "Наталья",
			"firstname": "Сергеевна",
			"birthday": "02.07.1994"
		},
		{
			"id": "6614054410193105611",
			"lastname": "Яснева",
			"middlename": "Светлана",
			"firstname": "Алексеевна",
			"birthday": "23.10.2000"
		},
		{
			"id": "6614054408885190783",
			"lastname": "Анисимов",
			"middlename": "Кирилл",
			"firstname": "Владимирович",
			"birthday": "26.11.1997"
		},
		{
			"id": "6614058867022635382",
			"lastname": "Епатьев",
			"middlename": "Казимир",
			"firstname": "Евгеньевич",
			"birthday": "29.07.1966"
		},
		{
			"id": "6614054408524794033",
			"lastname": "Розов",
			"middlename": "Евгений",
			"firstname": "Александрович",
			"birthday": "26.12.1976"
		},
		{
			"id": "6614058866379143543",
			"lastname": "Говоров",
			"middlename": "Александр",
			"firstname": "Витальевич",
			"birthday": "04.04.1994"
		},
		{
			"id": "6614058866379143544",
			"lastname": "Александова",
			"middlename": "Александра",
			"firstname": "Александровна",
			"birthday": "08.03.2000"
		},
		{
			"id": "6614054408664016072",
			"lastname": "Чёрный",
			"middlename": "Николая",
			"firstname": "Евгеньевич",
			"birthday": "23.09.1981"
		}
	];

	let position = [
		{
			"id": "6614058867372730524",
			"name": "Грузчик",
			"min_age": "20",
			"max_age": "35"
		},
		{
			"id": "6614054409584327816",
			"name": "Технолог",
			"min_age": "25",
			"max_age": "65"
		},
		{
			"id": "6614058868204794297",
			"name": "Старший технолог",
			"min_age": "30",
			"max_age": "65"
		},
		{
			"id": "6614054409135081282",
			"name": "Junior Sorfware Developer",
			"min_age": "18",
			"max_age": "65"
		},
		{
			"id": "6614058866293604814",
			"name": "Junior Sorfware Developer",
			"min_age": "18",
			"max_age": "65"
		},
		{
			"id": "6614054408158512282",
			"name": "Sorfware Developer",
			"min_age": "20",
			"max_age": "65"
		},
		{
			"id": "6614058867314339751",
			"name": "Senior Sorfware Developer",
			"min_age": "20",
			"max_age": "65"
		},
		{
			"id": "6614054409667217044",
			"name": "Frontend Developer",
			"min_age": "20",
			"max_age": "65"
		},
		{
			"id": "6614058866349601965",
			"name": "Младший аудитор",
			"min_age": "25",
			"max_age": "50"
		},
		{
			"id": "6614054409565440978",
			"name": "Помошник аудитора",
			"min_age": "25",
			"max_age": "50"
		},
		{
			"id": "6614058867650069499",
			"name": "Аудитор",
			"min_age": "30",
			"max_age": "50"
		},
		{
			"id": "6614054408479271093",
			"name": "Старший аудитор",
			"min_age": "45",
			"max_age": "50"
		},
		{
			"id": "6614058867677670148",
			"name": "Project Manager",
			"min_age": "35",
			"max_age": "65"
		},
		{
			"id": "6614053894249979554",
			"name": "Project Manager",
			"min_age": "35",
			"max_age": "65"
		},
		{
			"id": "6614058352225164390",
			"name": "Токарь 3 разряда",
			"min_age": "18",
			"max_age": "35"
		},
		{
			"id": "6614054408521210456",
			"name": "Токарь 3 разряда",
			"min_age": "18",
			"max_age": "35"
		},
		{
			"id": "6614058866992173176",
			"name": "Токарь 5 разряда",
			"min_age": "20",
			"max_age": "65"
		},
		{
			"id": "6614054408282315431",
			"name": "Токарь 5 разряда",
			"min_age": "30",
			"max_age": "65"
		},
		{
			"id": "6614058866457267023",
			"name": "Наладчик станков с чпу",
			"min_age": "20",
			"max_age": "55"
		},
		{
			"id": "6614054409380300250",
			"name": "Наладчик станков с чпу",
			"min_age": "20",
			"max_age": "55"
		}
	];

	let orgs = [
		{
			"id": "6614053829009218060",
			"name": "ПАО \"УралМаш\"",
			"country": "Россия"
		},
		{
			"id": "6614053829773576543",
			"name": "ОАО \"НефтьСинтез\"",
			"country": "Россия"
		},
		{
			"id": "6614053838929545207",
			"name": "&Pro-IT",
			"country": "Украина"
		},
		{
			"id": "6614053893213803484",
			"name": "BDO",
			"country": "Бельгия"
		},
		{
			"id": "6614054409070527426",
			"name": "IDEANAV",
			"country": "ЮАР"
		}
	];

	let subs = [
		{
			"id": "6614054409117575518",
			"name": "SalesDev",
			"org_id": "6614053829009218060"
		},
		{
			"id": "6614054408294399715",
			"name": "MarketingDev",
			"org_id": "6614053829009218060"
		},
		{
			"id": "6614054409663236177",
			"name": "SupportDev",
			"org_id": "6614053829009218060"
		},
		{
			"id": "6614054408778172822",
			"name": "Буровая 37",
			"org_id": "6614053829773576543"
		},
		{
			"id": "6614054409957424909",
			"name": "Транспортный отдел",
			"org_id": "6614053829773576543"
		},
		{
			"id": "6614054409197979921",
			"name": "Лаборатория КК",
			"org_id": "6614053829773576543"
		},
		{
			"id": "6614054408265495823",
			"name": "Продажи",
			"org_id": "6614053838929545207"
		},
		{
			"id": "6614053894796753480",
			"name": "Производство",
			"org_id": "6614053838929545207"
		},
		{
			"id": "6614054408809157055",
			"name": "Бугалтерия-Москва",
			"org_id": "6614053893213803484"
		},
		{
			"id": "6614058867635536082",
			"name": "Аудит-Москва",
			"org_id": "6614053893213803484"
		},
		{
			"id": "6614054409236345756",
			"name": "Техническое сопроворждения-Москва",
			"org_id": "6614053893213803484"
		},
		{
			"id": "6614054409518406296",
			"name": "Company board",
			"org_id": "6614054409070527426"
		}
	];

});