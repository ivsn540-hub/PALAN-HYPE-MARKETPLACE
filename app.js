function showSection(name) {
  document.querySelectorAll('main section').forEach(s => s.style.display = 'none');
  document.getElementById(name).style.display = 'block';
  document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
}

function switchTab(e, tabId) {
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');
  e.target.classList.add('active');
}

function previewFile(input) {
  const file = input.files[0];
  if (!file) return;
  
  const fileName = file.name;
  const fileSize = (file.size / 1024 / 1024).toFixed(2) + ' MB';
  const previewId = input.id.replace('-upload', '-preview');
  const previewDiv = document.getElementById(previewId);
  
  previewDiv.textContent = `✓ ${fileName} (${fileSize})`;
  previewDiv.style.color = '#92edff';
}

function registerArtist() {
  const name = document.getElementById('artist-name').value;
  const email = document.getElementById('artist-email').value;
  const category = document.getElementById('artist-category').value;
  const photoFile = document.getElementById('photo-upload').files[0];
  const videoFile = document.getElementById('video-upload').files[0];
  const audioFile = document.getElementById('audio-upload').files[0];
  
  if (!name || !email || !category) {
    alert('Заполни все обязательные поля!');
    return;
  }
  
  let fileInfo = '';
  if (photoFile) fileInfo += `📷 Фото: ${photoFile.name}\n`;
  if (videoFile) fileInfo += `🎥 Видео: ${videoFile.name}\n`;
  if (audioFile) fileInfo += `🎵 Аудио: ${audioFile.name}\n`;
  
  alert(`✓ Исполнитель зарегистрирован!\n\n${name} (${category})\n\nЗагруженные материалы:\n${fileInfo}\n\nТвой профиль появится после проверки модератором.`);
  closeAuth();
}

function openAuth() { document.getElementById('modal-auth').classList.add('show'); }
function closeAuth() { document.getElementById('modal-auth').classList.remove('show'); }
function openZayavka() { document.getElementById('modal-zayavka').classList.add('show'); }
function closeZayavka() { document.getElementById('modal-zayavka').classList.remove('show'); }
function openPay() { closeZayavka(); document.getElementById('modal-pay').classList.add('show'); }
function closePay() { document.getElementById('modal-pay').classList.remove('show'); }
