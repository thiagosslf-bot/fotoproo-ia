const upload = document.getElementById("upload");
const original = document.getElementById("original");
const enhanced = document.getElementById("enhanced");

upload.addEventListener("change", () => {
  const file = upload.files[0];
  const reader = new FileReader();

  reader.onload = () => {
    original.src = reader.result;
    enhanced.src = "";
  };

  reader.readAsDataURL(file);
});

function melhorarImagem() {
  // Simulação de IA
  enhanced.src = original.src;
}
