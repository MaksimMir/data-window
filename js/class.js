class Persons {
    constructor(obj) {
        this.modal = $(obj.modal);
        this.title = $(obj.title);
        this.list = $(obj.list);
        this.box = $(obj.box);
        this.name = obj.name;
        this.dataArray = obj.dataArray;
    }


    showModal() {
        this.modal.addClass('show');
        this.title.text(this.name);
    };

    createString(param, arr) {
        let arrElems = []
        switch (param) {
            case 'Сотрудник':
                for(let i = 0; i < arr.length; i++) {
                    arrElems.push(arr[i].lastname + ' ' + arr[i].middlename + ' ' + arr[i].firstname + ' <br>' + arr[i].birthday);
                }
                break;

            case 'Должность':
                for(let i = 0; i < arr.length; i++) {
                    arrElems.push(arr[i].name + ' (' + arr[i].min_age + ' - ' + arr[i].max_age + ')');
                }
                break;
                
            case 'Организация':
                for(let i = 0; i < arr.length; i++) {
                    arrElems.push(arr[i].name + ' / ' + arr[i].country);
                }
                break;

            case 'Подразделение':
                for(let i = 0; i < arr.length; i++) {
                    arrElems.push(arr[i].name);
                }
            default:
                break;
        }   

        return arrElems.sort();
    };

    initStr() {
        let value;
        this.list.children('li').each(function(i, el) {
			if($(el).hasClass('showed')) {
				value = $(this).text();
			};
        });
        return value;
    }

    insertVal(val) {
        if(val) {
            this.box.html(val).append(this.createBtn());
            this.closeModal(); 
        } 
              
    };

    createList(arr) {
        for (const val of arr) {
			let li = document.createElement('li');
			li.innerHTML = val;
			this.list.append(li);
        }
    };

    createBtn() {
        let btn = document.createElement('button');
        btn.classList.add('str-delite');
        btn.textContent = 'X';
        return btn;
    };

    classRemove() {
		this.list.children().each(function(i, val) {
			$(val).removeClass('showed');
		});
	};

    closeModal() {
        this.modal.removeClass('show');
        this.list.children().remove();
    };
};
