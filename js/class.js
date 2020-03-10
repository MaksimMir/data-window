class Modalgroup {
    constructor(obj) {
        this.modal = $(obj.modal);
        this.closeBtn = $(obj.closeBtn);
        this.clearBtn = $(obj.clearBtn);
        this.saveBtn = $(obj.saveBtn);
        this.list = $(obj.list);
        this.data = $(obj.data);
    }

    showModal() {
        this.modal.addClass('show');
    }

    closeModal() {
        this.modal.removeClass('show');
    }
}
