var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999) 999 99 99");
im.mask(selector);



const validation = new JustValidate(
  '#form',
  {
    errorFieldCssClass: 'is-invalid',
    errorLabelCssClass: 'is-label-invalid',
    focusInvalidField: true,
    lockForm: true,
    errorContainer: '.errors-container',
  },
);

validation
  .addField('#name', [
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'Имя должно содержать более 2-х символов',
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Имя должно привышеть более 30 символов',
    },
    {
      rule: 'required',
      errorMessage: 'Как Вас зовут?',
    },
  ])
  .addField('#tel', [
    {
      rule: 'required',
      errorMessage: 'Укажите Ваш телефон',
    },
    {
      validator: (name,value) =>{
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10
      },
      errorMessage: 'Телефон указан не полностью',
    },
  ]);
