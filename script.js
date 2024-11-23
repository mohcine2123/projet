// تحديد عناصر الصفحة
const chatBox = document.getElementById('chat-box');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

// وظيفة لإضافة الرسالة إلى صندوق الدردشة
function addMessageToChat(message) {
  const messageElement = document.createElement('p'); // إنشاء عنصر جديد للرسالة
  messageElement.textContent = message; // وضع النص داخل عنصر الرسالة
  chatBox.appendChild(messageElement); // إضافة العنصر إلى صندوق الدردشة
  chatBox.scrollTop = chatBox.scrollHeight; // التمرير تلقائيًا لآخر الرسائل
}

// عند الضغط على زر "Send"
sendButton.addEventListener('click', () => {
  const message = messageInput.value.trim(); // الحصول على النص مع إزالة المسافات الزائدة

  if (message) { // التحقق من أن النص ليس فارغًا
    addMessageToChat(message); // إضافة الرسالة إلى الدردشة
    messageInput.value = ''; // تفريغ حقل الإدخال
  }
});

// تشغيل الوظيفة عند الضغط على مفتاح Enter
messageInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') { // التحقق إذا تم الضغط على مفتاح Enter
    const message = messageInput.value.trim();

    if (message) {
      addMessageToChat(message); // إضافة الرسالة
      messageInput.value = ''; // تفريغ حقل الإدخال
    }
  }
});