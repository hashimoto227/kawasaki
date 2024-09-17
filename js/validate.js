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
    },
    電話番号: {
      required: true,
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