const form = document.getElementById('apiForm');
const messageInput = document.getElementById('message');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const nameInputs = document.querySelectorAll('input[name="names"]');
  const names = Array.from(nameInputs)
    .map((input) => input.value.trim())
    .filter(Boolean);

  const payload = {
    names,
    message: messageInput.value.trim(),
  };

  try {
    const res = await fetch('https://fsdt-contact.onrender.com/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      throw new Error('Erro ao enviar');
    }

    alert('✅ Enviado com sucesso!');
    form.reset(); // limpa os campos
  } catch (error) {
    alert('❌ Ocorreu um erro ao enviar o formulário.');
    console.error('Error: ', error);
  }
});
