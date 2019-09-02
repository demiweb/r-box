import Select from 'select-custom';

class CustomSelect {
  constructor(select, params) {
    this.select = select;
    this.name = select.dataset.type;
    this.params = params[this.name];
  }

  init() {
    this.Select = new Select(this.select, this.params);
    this.Select.init();
  }
}

export default function setSelects() {
  const selects = [].slice.call(document.querySelectorAll('.js-select'));
  if (!selects.length) return;

  const params = {
    default: {},
  };

  selects.forEach((select) => {
    const customSelect = new CustomSelect(select, params);
    customSelect.init();
  });
}
