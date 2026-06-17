// ================================
// DATA KOSAKATA PER BAB
// ================================
const dataBab1 = [
  { id: 1, ko: '한국', idn: 'Korea' },
  { id: 2, ko: '학생', idn: 'Pelajar' },
  { id: 3, ko: '선생님', idn: 'Guru' },
  { id: 4, ko: '안녕하세요', idn: 'Halo' },
  { id: 5, ko: '감사합니다', idn: 'Terima kasih' },
  { id: 6, ko: 'my nara', idn: 'my nara' },
]

const dataBab2 = [
  { id: 201, ko: '여기', idn: 'Di sini' },
  { id: 202, ko: '저기', idn: 'Di sana' },
  { id: 203, ko: '회사', idn: 'Perusahaan' },
  { id: 204, ko: '화장실', idn: 'Toilet' },
  { id: 205, ko: '식당', idn: 'Restoran' },
  { id: 206, ko: 'deden', idn: 'lpk' },
]

const dataBab3 = [
  { id: 301, ko: 'kaptop', idn: 'komputer' },]
// Kata yang sedang aktif ditampilkan
let dataKata = []

// Kunci localStorage untuk bab yang sedang aktif
let kunciSimpan = 'progressBab1'

// Nyimpen kata yang sudah dibuka artinya
let kataTerbuka = new Set()

// ================================
// GANTI BAB
// ================================
function gantiBab() {
  const babDipilih = document.getElementById('babSelect').value

  if (babDipilih === 'bab1') {
    dataKata = dataBab1
    kunciSimpan = 'progressBab1'
  } else if (babDipilih === 'bab2') {
    dataKata = dataBab2
    kunciSimpan = 'progressBab2'
  } else {
    dataKata = dataBab3
    kunciSimpan = 'progressBab3'
  }

  kataTerbuka.clear()
  ambilProgress()
  tampilkanKata()
}

// ================================
// SIMPAN & AMBIL PROGRESS
// ================================
function simpanProgress() {
  const progress = {}
  dataKata.forEach(item => {
    if (item.status !== 'belum') {
      progress[item.id] = item.status
    }
  })
  localStorage.setItem(kunciSimpan, JSON.stringify(progress))
}

function ambilProgress() {
  const tersimpan = localStorage.getItem(kunciSimpan)
  if (tersimpan) {
    const progress = JSON.parse(tersimpan)
    dataKata.forEach(item => {
      item.status = progress[item.id] || 'belum'
    })
  } else {
    dataKata.forEach(item => {
      item.status = 'belum'
    })
  }
}

// ================================
// AUDIO UCAPKAN KATA KOREA
// ================================
function ucapkanKata(teks) {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel()
    const suara = new SpeechSynthesisUtterance(teks)
    suara.lang = 'ko-KR'
    suara.rate = 0.85
    suara.pitch = 1
    window.speechSynthesis.speak(suara)
  } else {
    alert('Browser kamu tidak support audio!')
  }
}

// ================================
// TAMPILKAN KATA KE LAYAR
// ================================
function tampilkanKata() {
  const list = document.getElementById('vocabList')
  const search = document.getElementById('searchInput').value.toLowerCase()
  const filterStatus = document.getElementById('filterSelect').value

  list.innerHTML = ''

  const filtered = dataKata.filter(item => {
    const cocokSearch = item.ko.includes(search) ||
      item.idn.toLowerCase().includes(search)

    const cocokFilter = filterStatus === 'all' ||
      item.status === filterStatus

    return cocokSearch && cocokFilter
  })

  filtered.forEach(item => {
    const sudahBuka = kataTerbuka.has(item.id)

    const styleHafal = item.status === 'hafal'
      ? 'background-color: #10b981; color: white;'
      : ''
    const styleSusah = item.status === 'susah'
      ? 'background-color: #f59e0b; color: white;'
      : ''

    list.innerHTML += `
      <li class="list-item status-${item.status}">
        <div 
          class="item-klik" 
          onclick="bukaArti(${item.id})">
          <div class="ko-text">${item.ko}</div>
          <div class="id-text ${sudahBuka ? '' : 'tersembunyi'}">
            ${sudahBuka ? item.idn : '****'}
          </div>
        </div>
        <div class="item-actions">
          <button 
            class="btn-audio"
            onclick="ucapkanKata('${item.ko}')">
            🔊
          </button>
          <button 
            class="btn-susah" 
            style="${styleSusah}"
            onclick="tandaiStatus(${item.id}, 'susah')">
            ⚠️
          </button>
          <button 
            class="btn-hafal" 
            style="${styleHafal}"
            onclick="tandaiStatus(${item.id}, 'hafal')">
            ✔
          </button>
        </div>
      </li>
    `
  })

  updateStatistik()
}

// ================================
// BUKA / TUTUP ARTI
// ================================
function bukaArti(id) {
  if (kataTerbuka.has(id)) {
    kataTerbuka.delete(id)
  } else {
    kataTerbuka.add(id)
  }
  tampilkanKata()
}

// ================================
// TANDAI STATUS (hafal / susah)
// ================================
function tandaiStatus(id, statusBaru) {
  const kata = dataKata.find(i => i.id === id)

  if (kata.status === statusBaru) {
    kata.status = 'belum'
  } else {
    kata.status = statusBaru
  }

  simpanProgress()
  tampilkanKata()
}

// ================================
// UPDATE STATISTIK
// ================================
function updateStatistik() {
  document.getElementById('stat-total').textContent = dataKata.length
  document.getElementById('stat-hafal').textContent =
    dataKata.filter(i => i.status === 'hafal').length
  document.getElementById('stat-susah').textContent =
    dataKata.filter(i => i.status === 'susah').length
  document.getElementById('stat-belum').textContent =
    dataKata.filter(i => i.status === 'belum').length
}

// ================================
// VARIABEL KUIS
// ================================
let skorKuis = 0
let jawabanBenar = {}

// ================================
// TOGGLE KUIS
// ================================
function toggleQuiz() {
  const list = document.getElementById('vocabList')
  const kuis = document.getElementById('kuisContainer')
  const controls = document.getElementById('searchInput')

  const kuisAktif = kuis.style.display === 'block'

  if (kuisAktif) {
    kuis.style.display = 'none'
    list.style.display = 'block'
    controls.style.display = 'block'
  } else {
    kuis.style.display = 'block'
    list.style.display = 'none'
    controls.style.display = 'none'
    skorKuis = 0
    updateSkor()
    soalBerikutnya()
  }
}

// ================================
// MUAT SOAL BARU
// ================================
function soalBerikutnya() {
  document.getElementById('btnLanjut').style.display = 'none'

  const acak = Math.floor(Math.random() * dataKata.length)
  jawabanBenar = dataKata[acak]

  document.getElementById('kuisSoal').textContent = jawabanBenar.ko

  let pilihan = [jawabanBenar]
  while (pilihan.length < 4) {
    const kataSalah = dataKata[Math.floor(Math.random() * dataKata.length)]
    if (!pilihan.find(p => p.id === kataSalah.id)) {
      pilihan.push(kataSalah)
    }
  }

  pilihan.sort(() => Math.random() - 0.5)

  const container = document.getElementById('kuisPilihan')
  container.innerHTML = ''

  pilihan.forEach(opt => {
    const btn = document.createElement('button')
    btn.className = 'btn-pilihan'
    btn.textContent = opt.idn
    btn.onclick = () => cekJawaban(btn, opt.id)
    container.appendChild(btn)
  })
}

// ================================
// CEK JAWABAN
// ================================
function cekJawaban(btnDiklik, idDipilih) {
  const semuaTombol = document.querySelectorAll('.btn-pilihan')
  semuaTombol.forEach(b => b.disabled = true)

  if (idDipilih === jawabanBenar.id) {
    btnDiklik.classList.add('benar')
    skorKuis += 10
  } else {
    btnDiklik.classList.add('salah')
    skorKuis -= 5
    semuaTombol.forEach(b => {
      if (b.textContent === jawabanBenar.idn) {
        b.classList.add('benar')
      }
    })
  }

  updateSkor()
  document.getElementById('btnLanjut').style.display = 'block'
}

// ================================
// UPDATE SKOR
// ================================
function updateSkor() {
  document.getElementById('kuisSkor').textContent = `Skor: ${skorKuis}`
}

// ================================
// JALANKAN SAAT HALAMAN DIBUKA
// ================================
document.getElementById('searchInput')
  .addEventListener('input', tampilkanKata)

document.getElementById('filterSelect')
  .addEventListener('change', tampilkanKata)

document.getElementById('babSelect')
  .addEventListener('change', gantiBab)

// Mulai dengan Bab 1
gantiBab()