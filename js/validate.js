$(function(){
  //独自ルール
  $.validator.addMethod(
    'phone',function(value,element){
      //検討対象の要素にこのルールが設定されているか
      if(this.optional(element)){
        return true
      }
      return this.optional(element) || /^(0{1}\d{9,10})$/.test(value)
    },
    'ハイフンなしの電話番号の形式で入力してください。'
  )
  $("#contact-form").validate({
    rules: {
      法人名・団体名: {
        required: true,
      },
      お名前: {
        required: true,
      },
      email: {
        required: true,
        email:true,
      },
      confirm_email:{
        required: true,
        equalTo:'#email'
      },
      電話番号: {
        required: true,
        phone:true,
      },
      お問合せ内容: {
        required: true,
      },
    },
    messages: {
      法人名・団体名: {
        required: '入力してください。',
      },
      お名前: {
        required: '入力してください。',
      },
      email: {
        required: '入力してください。',
        email:'メールアドレスの形式で入力してください',
      },
      confirm_email:{
        required: '入力してください。',
        equalTo:'メールアドレスが一致しません'
      },
      電話番号: {
        required: '入力してください。',
      },
      お問合せ内容: {
        required: '入力してください。',
      },
    },
    errorClass: "validation-error",
    errorElement: "span",
    errorPlacement: function (error, element) {
      error.insertAfter(element);
    },
  });

  // 「同意する」のチェックボックス
  const agreeCheckbox = document.getElementById("agree");
  // 送信ボタン
  const submitBtn = document.getElementById("submit-btn");

  agreeCheckbox.addEventListener("click", () => {
    // チェックされている場合
    if (agreeCheckbox.checked === true) {
      submitBtn.disabled = false; // disabledを外す
    }
    // チェックされていない場合
    else {
      submitBtn.disabled = true; // disabledを付与
    }
  });
});