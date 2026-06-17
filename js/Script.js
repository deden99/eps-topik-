// ================================
// DATA KOSAKATA PER BAB
// ================================
const dataBab1 = [
{ id: 1, ko: '한국', idn: 'Korea' },
  { id: 2, ko: '네팔', idn: 'Nepal' },
  { id: 3, ko: '동티모르', idn: 'Timor Leste' },
  { id: 4, ko: '라오스', idn: 'Laos' },
  { id: 5, ko: '몽골', idn: 'Mongolia' },
  { id: 6, ko: '미얀마', idn: 'Myanmar' },
  { id: 7, ko: '방글라데시', idn: 'Bangladesh' },
  { id: 8, ko: '베트남', idn: 'Vietnam' },
  { id: 9, ko: '스리랑카', idn: 'Sri Lanka' },
  { id: 10, ko: '우즈베키스탄', idn: 'Uzbekistan' },
  { id: 11, ko: '인도네시아', idn: 'Indonesia' },
  { id: 12, ko: '중국', idn: 'China' },
  { id: 13, ko: '캄보디아', idn: 'Kamboja' },
  { id: 14, ko: '키르기스스탄', idn: 'Kyrgyzstan' },
  { id: 15, ko: '타지키스탄', idn: 'Tajikistan' },
  { id: 16, ko: '태국', idn: 'Thailand' },
  { id: 17, ko: '파키스탄', idn: 'Pakistan' },
  { id: 18, ko: '필리핀', idn: 'Filipina' },
  { id: 19, ko: '어느', idn: 'yang mana' },
  { id: 20, ko: '사람', idn: 'orang' },
  { id: 21, ko: '이름', idn: 'nama' },
  { id: 22, ko: '국적', idn: 'kewarganegaraan' },
  { id: 23, ko: '누구', idn: 'siapa' },
  { id: 24, ko: '학생', idn: 'Pelajar / Mahasiswa' },
  { id: 25, ko: '선생님', idn: 'Guru' },
  { id: 26, ko: '회사원', idn: 'Karyawan swasta' },
  { id: 27, ko: '근로자', idn: 'Pekerja / Buruh' },
  { id: 28, ko: '경찰관', idn: 'Polisi' },
  { id: 29, ko: '소방관', idn: 'Pemadam kebakaran' },
  { id: 30, ko: '공무원', idn: 'PNS / Pegawai negeri' },
  { id: 31, ko: '점원', idn: 'Penjaga toko' },
  { id: 32, ko: '의사', idn: 'Dokter' },
  { id: 33, ko: '간호사', idn: 'Perawat' },
  { id: 34, ko: '요리사', idn: 'Koki / Chef' },
  { id: 35, ko: '운전기사', idn: 'Supir / Pengemudi' },
  { id: 36, ko: '기술자', idn: 'Teknisi' },
  { id: 37, ko: '목수', idn: 'Tukang kayu' },
  { id: 38, ko: '농부', idn: 'Petani' },
  { id: 39, ko: '어부', idn: 'Nelayan' },
  { id: 40, ko: '씨', idn: 'Sebutan hormat (Tn./Ny./Sdr.)' },
  { id: 41, ko: '저', idn: 'Saya (bentuk sopan)' },
  { id: 42, ko: '네', idn: 'Ya' },
  { id: 43, ko: '아니요', idn: 'Tidak / Bukan' },
  { id: 44, ko: '안녕하세요?', idn: 'Halo / Selamat (segala waktu)' },
  { id: 45, ko: '저는', idn: 'Saya (sebagai topik)' },
  { id: 46, ko: '~사람입니다', idn: 'Saya orang ~' },
  { id: 47, ko: '~사람입니까?', idn: 'Apakah orang ~?' },
  { id: 48, ko: '잘 부탁드립니다', idn: 'Mohon bimbingannya' },
  { id: 49, ko: '처음 뵙겠습니다', idn: 'Senang bertemu pertama kali' },
  { id: 50, ko: '인사', idn: 'Salam / Ucapan sapa' },
  { id: 51, ko: '예절', idn: 'Sopan santun / Etiket' },
  { id: 52, ko: '상대', idn: 'Lawan bicara / Orang lain' },
  { id: 53, ko: '나이', idn: 'Usia / Umur' },
  { id: 54, ko: '지위', idn: 'Jabatan / Status sosial' },
  { id: 55, ko: '방식', idn: 'Cara / Metode' },
  { id: 56, ko: '존경', idn: 'Rasa hormat' },
  { id: 57, ko: '고개를 숙이다', idn: 'Menundukkan kepala' },
  { id: 58, ko: '허리를 굽히다', idn: 'Membungkukkan badan' },
  { id: 59, ko: '손을 흔들다', idn: 'Melambaikan tangan' },
  { id: 60, ko: '반가움', idn: 'Kegembiraan saat bertemu' },
  { id: 61, ko: '악수', idn: 'Jabat tangan' },
  { id: 62, ko: '공적인 상황', idn: 'Situasi resmi / Formal' },
  { id: 63, ko: '왼손', idn: 'Tangan kiri' },
  { id: 64, ko: '오른손', idn: 'Tangan kanan' },
  { id: 65, ko: '오른팔', idn: 'Lengan kanan' },
  { id: 66, ko: '아침', idn: 'Pagi' },
  { id: 67, ko: '점심', idn: 'Siang' },
  { id: 68, ko: '저녁', idn: 'Malam / Sore' },
  { id: 69, ko: '나라', idn: 'Negara' },
  { id: 70, ko: '직업', idn: 'Pekerjaan' },
  { id: 71, ko: '남자', idn: 'Laki-laki' },
  { id: 72, ko: '여자', idn: 'Perempuan' },
  { id: 73, ko: '생일', idn: 'Ulang tahun' },
  { id: 74, ko: '외국인 등록증', idn: 'Kartu registrasi orang asing' },
  { id: 75, ko: '등록번호', idn: 'Nomor registrasi' },
  { id: 76, ko: '성명', idn: 'Nama lengkap' },
  { id: 77, ko: '체류자격', idn: 'Status tinggal / Jenis visa' },
  { id: 78, ko: '비전문취업 (E-9)', idn: 'Visa kerja non-profesional (E-9)' },
  { id: 79, ko: '발급일자', idn: 'Tanggal penerbitan' },
  { id: 80, ko: '출입국·외국인청', idn: 'Kantor imigrasi dan orang asing' },
  { id: 81, ko: '서울', idn: 'Seoul' },
  { id: 82, ko: '친한 친구', idn: 'Teman dekat / Akrab' },
  { id: 83, ko: '고향', idn: 'Kampung halaman / Kota asal' },
  { id: 84, ko: '성별', idn: 'Jenis kelamin' },
  { id: 85, ko: '살', idn: 'Tahun (satuan usia)' },
  { id: 86, ko: '서른 살', idn: 'Tiga puluh tahun' },
];

// ===== 문화와 정보 — Budaya Korea (한국의 인사 예절) =====
const budaya = [
  { id: 1, ko: '인사', idn: 'Salam / Ucapan sapa' },
  { id: 2, ko: '예절', idn: 'Sopan santun / Etiket' },
  { id: 3, ko: '상대', idn: 'Lawan bicara / Orang lain' },
  { id: 4, ko: '나이', idn: 'Usia / Umur' },
  { id: 5, ko: '지위', idn: 'Jabatan / Status sosial' },
  { id: 6, ko: '방식', idn: 'Cara / Metode' },
  { id: 7, ko: '존경', idn: 'Rasa hormat' },
  { id: 8, ko: '고개를 숙이다', idn: 'Menundukkan kepala' },
  { id: 9, ko: '허리를 굽히다', idn: 'Membungkukkan badan' },
  { id: 10, ko: '손을 흔들다', idn: 'Melambaikan tangan' },
  { id: 11, ko: '반가움', idn: 'Kegembiraan saat bertemu' },
  { id: 12, ko: '악수', idn: 'Jabat tangan' },
  { id: 13, ko: '공적인 상황', idn: 'Situasi resmi / Formal' },
  { id: 14, ko: '왼손', idn: 'Tangan kiri' },
  { id: 15, ko: '오른손', idn: 'Tangan kanan' },
  { id: 16, ko: '오른팔', idn: 'Lengan kanan' },
  { id: 17, ko: '아침', idn: 'Pagi' },
  { id: 18, ko: '점심', idn: 'Siang' },
  { id: 19, ko: '저녁', idn: 'Malam / Sore' },
];

// ===== 읽기 — Soal Reading (EPS-TOPIK) =====
const membaca = [
  { id: 1, ko: '나라', idn: 'Negara' },
  { id: 2, ko: '직업', idn: 'Pekerjaan' },
  { id: 3, ko: '남자', idn: 'Laki-laki' },
  { id: 4, ko: '여자', idn: 'Perempuan' },
  { id: 5, ko: '생일', idn: 'Ulang tahun' },
  { id: 6, ko: '외국인 등록증', idn: 'Kartu registrasi orang asing' },
  { id: 7, ko: '등록번호', idn: 'Nomor registrasi' },
  { id: 8, ko: '성명', idn: 'Nama lengkap' },
  { id: 9, ko: '체류자격', idn: 'Status tinggal / Jenis visa' },
  { id: 10, ko: '비전문취업 (E-9)', idn: 'Visa kerja non-profesional (E-9)' },
  { id: 11, ko: '발급일자', idn: 'Tanggal penerbitan' },
  { id: 12, ko: '출입국·외국인청', idn: 'Kantor imigrasi dan orang asing' },
  { id: 13, ko: '서울', idn: 'Seoul' },
  { id: 14, ko: '친한 친구', idn: 'Teman dekat / Akrab' },
];

// ===== 듣기 — Soal Listening (Track 32) =====
const mendengar = [
  { id: 1, ko: '고향', idn: 'Kampung halaman / Kota asal' },
  { id: 2, ko: '성별', idn: 'Jenis kelamin' },
  { id: 3, ko: '살', idn: 'Tahun (satuan usia)' },
  { id: 4, ko: '서른 살', idn: 'Tiga puluh tahun' },
]

const dataBab2 = [
{ id: 1, ko: '이것 / 이건', idn: 'ini (dekat pembicara)' },
  { id: 2, ko: '그것 / 그건', idn: 'itu (dekat lawan bicara)' },
  { id: 3, ko: '저것 / 저건', idn: 'itu (jauh dari keduanya)' },
  { id: 4, ko: '무엇 / 뭐', idn: 'apa' },
  { id: 5, ko: '연필', idn: 'pensil' },
  { id: 6, ko: '볼펜', idn: 'bolpoin / pulpen' },
  { id: 7, ko: '가위', idn: 'gunting' },
  { id: 8, ko: '칼', idn: 'pisau / cutter' },
  { id: 9, ko: '시계', idn: 'jam / arloji' },
  { id: 10, ko: '달력', idn: 'kalender' },
  { id: 11, ko: '컴퓨터', idn: 'komputer' },
  { id: 12, ko: '안경', idn: 'kacamata' },
  { id: 13, ko: '휴대폰 / 휴대전화', idn: 'ponsel / handphone' },
  { id: 14, ko: '계산기', idn: 'kalkulator' },
  { id: 15, ko: '컵', idn: 'cangkir / gelas' },
  { id: 16, ko: '휴지', idn: 'tisu / kertas toilet' },
  { id: 17, ko: '가족사진', idn: 'foto keluarga' },
  { id: 18, ko: '여권', idn: 'paspor' },
  { id: 19, ko: '지갑', idn: 'dompet' },
  { id: 20, ko: '열쇠', idn: 'kunci' },
  { id: 21, ko: '가방', idn: 'tas' },
  { id: 22, ko: '우산', idn: 'payung' },
  { id: 23, ko: '화장품', idn: 'kosmetik / produk kecantikan' },
  { id: 24, ko: '거울', idn: 'cermin' },
  { id: 25, ko: '빗', idn: 'sisir' },
  { id: 26, ko: '베개', idn: 'bantal' },
  { id: 27, ko: '이불', idn: 'selimut / duvet' },
  { id: 28, ko: '이에요 / 예요', idn: 'adalah (informal/sopan, akhir vokal → 예요, akhir konsonan → 이에요)' },
  { id: 29, ko: '이/가 아니에요', idn: 'bukan / tidak (penyangkalan)' },
  { id: 30, ko: '이/가 아닙니다', idn: 'bukan / tidak (formal)' },
  { id: 31, ko: '받침', idn: 'konsonan penutup (batchim)' },
  { id: 32, ko: '이게 / 그게 / 저게', idn: 'ini/itu (sebagai subjek, bentuk singkat)' },
  { id: 33, ko: '의', idn: 'punya / milik (partikel kepemilikan)' },
  { id: 34, ko: '제', idn: 'milik saya (dari 저의)' },
  { id: 35, ko: '내', idn: 'milik aku (dari 나의)' },
  { id: 36, ko: '네', idn: 'milik kamu (dari 너의)' },
  { id: 37, ko: '누구의', idn: 'milik siapa / punya siapa' },
  { id: 38, ko: '한국어로', idn: 'dalam bahasa Korea' },
  { id: 39, ko: '뭐예요?', idn: 'apa ini? / apa itu?' },
  { id: 40, ko: '이건 뭐예요?', idn: 'Ini apa?' },
  { id: 41, ko: '저건 뭐예요?', idn: 'Itu apa? (jauh)' },
  { id: 42, ko: '~이에요 / 예요', idn: 'Ini/Itu ~' },
  { id: 43, ko: '~이/가 아니에요', idn: 'Bukan ~' },
  { id: 44, ko: '~씨의 가방이에요?', idn: 'Apakah ini tas milik ~?' },
  { id: 45, ko: '제 가방이에요', idn: 'Ini tas saya' },
  { id: 46, ko: '퇴근하세요?', idn: 'Apakah sudah pulang kerja?' },
  { id: 47, ko: '조심해서 가요', idn: 'Hati-hati di jalan' },
  { id: 48, ko: '내일 뵙겠습니다', idn: 'Sampai jumpa besok' },
  { id: 49, ko: '반장님', idn: 'Bapak/Ibu mandor / ketua kelompok' },
  { id: 50, ko: '지금', idn: 'sekarang' },
  { id: 51, ko: '내일', idn: 'besok' },
  { id: 52, ko: '우 (ㅜ)', idn: 'bunyi "u" — bibir membulat' },
  { id: 53, ko: '으 (ㅡ)', idn: 'bunyi "eu" — bibir mendatar' },
  { id: 54, ko: '구름', idn: 'awan' },
  { id: 55, ko: '그네', idn: 'ayunan' },
  { id: 56, ko: '구두', idn: 'sepatu (formal)' },
  { id: 57, ko: '그림', idn: 'gambar / lukisan' },
  { id: 58, ko: '생필품', idn: 'barang kebutuhan pokok' },
  { id: 59, ko: '생활용품', idn: 'barang keperluan sehari-hari' },
  { id: 60, ko: '대형 마트', idn: 'supermarket besar / hypermarket' },
  { id: 61, ko: '할인 행사', idn: 'acara/promo diskon' },
  { id: 62, ko: '주말 특가', idn: 'harga spesial akhir pekan' },
  { id: 63, ko: '전단지', idn: 'brosur / selebaran' },
  { id: 64, ko: '할인 쿠폰', idn: 'kupon diskon' },
  { id: 65, ko: '온라인 쇼핑몰', idn: 'toko belanja online' },
  { id: 66, ko: '중고 거래', idn: 'jual beli barang bekas' },
  { id: 67, ko: '플랫폼', idn: 'platform (aplikasi/situs)' },
  { id: 68, ko: '직거래', idn: 'transaksi langsung (COD)' },
  { id: 69, ko: '가전제품', idn: 'peralatan elektronik rumah tangga' },
  { id: 70, ko: '가구', idn: 'furnitur / perabot rumah' },
  { id: 71, ko: '싸게', idn: 'dengan harga murah' },
  { id: 72, ko: '알뜰하게', idn: 'dengan hemat / cermat' },
  { id: 73, ko: '구입하다 / 구매하다', idn: 'membeli / mengadakan' },
  { id: 74, ko: '당근', idn: 'Danggeun (nama aplikasi jual-beli bekas Korea)' },
  { id: 75, ko: '물건', idn: 'barang / benda' },
  { id: 76, ko: '장소', idn: 'tempat / lokasi' },
  { id: 77, ko: '음식', idn: 'makanan' },
  { id: 78, ko: '밑줄', idn: 'garis bawah' },
  { id: 79, ko: '맞는 문장', idn: 'kalimat yang benar' },
  { id: 80, ko: '없어요', idn: 'tidak ada / tidak punya' },
  { id: 81, ko: '책상 위에 있어요', idn: 'ada di atas meja' },
  { id: 82, ko: '새 물건', idn: 'barang baru' },
  { id: 83, ko: '사고팔다', idn: 'jual beli' },
  { id: 84, ko: '택배', idn: 'jasa pengiriman paket' },
  { id: 85, ko: '침대', idn: 'tempat tidur' },
  { id: 86, ko: '지폐', idn: 'uang kertas' },
  { id: 87, ko: '한국어로', idn: 'dalam bahasa Korea' },
  { id: 88, ko: '가방에 뭐가 있어요?', idn: 'Apa yang ada di dalam tas?' },
  { id: 89, ko: '~하고 ~이/가 있어요', idn: 'Ada ~ dan ~' },
  { id: 90, ko: '~도 있어요', idn: 'Ada ~ juga' },
  { id: 91, ko: '한국에서 왔어요', idn: 'Datang dari Korea' },
  { id: 92, ko: '제 것이 아니에요', idn: 'Bukan milik saya' },
]

const dataBab3 = [
  { id: 1, ko: '에어컨', idn: 'AC / pendingin ruangan' },
  { id: 2, ko: '침대', idn: 'tempat tidur' },
  { id: 3, ko: '의자', idn: 'kursi' },
  { id: 4, ko: '책상', idn: 'meja belajar / meja kerja' },
  { id: 5, ko: '옷장', idn: 'lemari pakaian' },
  { id: 6, ko: '소파', idn: 'sofa' },
  { id: 7, ko: '텔레비전', idn: 'televisi / TV' },
  { id: 8, ko: '전자레인지', idn: 'microwave' },
  { id: 9, ko: '세탁기', idn: 'mesin cuci' },
  { id: 10, ko: '냉장고', idn: 'kulkas / lemari es' },
  { id: 11, ko: '청소기', idn: 'penyedot debu / vacuum cleaner' },
  { id: 12, ko: '식탁', idn: 'meja makan' },
  { id: 13, ko: '선풍기', idn: 'kipas angin' },
  { id: 14, ko: '회사', idn: 'kantor / perusahaan' },
  { id: 15, ko: '식당', idn: 'restoran / warung makan' },
  { id: 16, ko: '은행', idn: 'bank' },
  { id: 17, ko: '커피숍', idn: 'kedai kopi / cafe' },
  { id: 18, ko: '편의점', idn: 'minimarket / convenience store' },
  { id: 19, ko: '시장', idn: 'pasar' },
  { id: 20, ko: '미용실', idn: 'salon kecantikan' },
  { id: 21, ko: '슈퍼마켓', idn: 'supermarket' },
  { id: 22, ko: '약국', idn: 'apotek' },
  { id: 23, ko: '병원', idn: 'rumah sakit / klinik' },
  { id: 24, ko: '우체국', idn: 'kantor pos' },
  { id: 25, ko: '집', idn: 'rumah' },
  { id: 26, ko: '방', idn: 'kamar / ruangan' },
  { id: 27, ko: '화장실', idn: 'kamar mandi / toilet' },
  { id: 28, ko: '거실', idn: 'ruang tamu / ruang keluarga' },
  { id: 29, ko: '부엌', idn: 'dapur' },
  { id: 30, ko: '기숙사', idn: 'asrama' },
  { id: 31, ko: '사무실', idn: 'kantor / ruang kerja' },
  { id: 32, ko: '여기', idn: 'di sini' },
  { id: 33, ko: '거기', idn: 'di situ (dekat lawan bicara)' },
  { id: 34, ko: '저기', idn: 'di sana (jauh)' },
  { id: 35, ko: '어디', idn: 'di mana' },
  { id: 36, ko: '근처', idn: 'sekitar / dekat sini' },
  { id: 37, ko: '이/가 있어요', idn: 'ada / punya' },
  { id: 38, ko: '이/가 없어요', idn: 'tidak ada / tidak punya' },
  { id: 39, ko: '에 (장소)', idn: 'partikel tempat keberadaan (di ~)' },
  { id: 40, ko: '어디에 있어요?', idn: 'Ada di mana?' },
  { id: 41, ko: '도', idn: 'juga / pun (partikel penambahan)' },
  { id: 42, ko: '존재', idn: 'keberadaan / eksistensi' },
  { id: 43, ko: '소유', idn: 'kepemilikan' },
  { id: 44, ko: '여기는 어디예요?', idn: 'Di sini itu mana? / Ini tempat apa?' },
  { id: 45, ko: '~도 있어요?', idn: 'Apakah ada ~ juga?' },
  { id: 46, ko: '뭐가 있어요?', idn: 'Ada apa?' },
  { id: 47, ko: '~씨는 어디에 있어요?', idn: '~ ada di mana?' },
  { id: 48, ko: '이따', idn: 'nanti / sebentar lagi' },
  { id: 49, ko: '두 시에', idn: 'pada pukul dua' },
  { id: 50, ko: '전화하세요', idn: 'tolong telepon' },
  { id: 51, ko: '알겠습니다', idn: 'Baik / Saya mengerti / Siap' },
  { id: 52, ko: 'ㅚ (외)', idn: 'bunyi "oe/we"' },
  { id: 53, ko: 'ㅟ (위)', idn: 'bunyi "wi"' },
  { id: 54, ko: '외국', idn: 'luar negeri / asing' },
  { id: 55, ko: '외모', idn: 'penampilan fisik' },
  { id: 56, ko: '해외', idn: 'luar negeri / mancanegara' },
  { id: 57, ko: '바위', idn: 'batu besar' },
  { id: 58, ko: '특별시', idn: 'kota istimewa' },
  { id: 59, ko: '특별자치시', idn: 'kota otonomi istimewa' },
  { id: 60, ko: '광역시', idn: 'kota metropolitan' },
  { id: 61, ko: '수도권', idn: 'wilayah ibu kota' },
  { id: 62, ko: '중심지', idn: 'pusat / sentra' },
  { id: 63, ko: '정치', idn: 'politik' },
  { id: 64, ko: '경제', idn: 'ekonomi' },
  { id: 65, ko: '문화', idn: 'budaya' },
  { id: 66, ko: '관문', idn: 'pintu gerbang' },
  { id: 67, ko: '국제공항', idn: 'bandara internasional' },
  { id: 68, ko: '항구 / 항', idn: 'pelabuhan' },
  { id: 69, ko: '해변', idn: 'pantai' },
  { id: 70, ko: '관광객', idn: 'wisatawan / turis' },
  { id: 71, ko: '공업 도시', idn: 'kota industri' },
  { id: 72, ko: '자동차', idn: 'mobil / otomotif' },
  { id: 73, ko: '조선', idn: 'industri perkapalan' },
  { id: 74, ko: '섬유 산업', idn: 'industri tekstil' },
  { id: 75, ko: '거주하다', idn: 'tinggal / bermukim' },
  { id: 76, ko: '행정', idn: 'administrasi pemerintahan' },
  { id: 77, ko: '서울', idn: 'Seoul (ibu kota Korea)' },
  { id: 78, ko: '부산', idn: 'Busan' },
  { id: 79, ko: '인천', idn: 'Incheon' },
  { id: 80, ko: '대전', idn: 'Daejeon' },
  { id: 81, ko: '울산', idn: 'Ulsan' },
  { id: 82, ko: '대구', idn: 'Daegu' },
  { id: 83, ko: '광주', idn: 'Gwangju' },
  { id: 84, ko: '세종', idn: 'Sejong' },
  { id: 85, ko: '경기도', idn: 'Provinsi Gyeonggi' },
  { id: 86, ko: '계절', idn: 'musim' },
  { id: 87, ko: '날씨', idn: 'cuaca' },
  { id: 88, ko: '취미', idn: 'hobi' },
  { id: 89, ko: '머리를 자르다', idn: 'memotong rambut' },
  { id: 90, ko: '머리가 길다', idn: 'rambut panjang' },
  { id: 91, ko: '밥을 먹다', idn: 'makan nasi / makan' },
  { id: 92, ko: '집안일', idn: 'pekerjaan rumah tangga' },
  { id: 93, ko: '조리법', idn: 'cara memasak / resep' },
  { id: 94, ko: '대중교통', idn: 'transportasi umum' },
  { id: 95, ko: '전자제품', idn: 'produk elektronik' },
  { id: 96, ko: '지하철', idn: 'kereta bawah tanah / MRT' },
  { id: 97, ko: '어떻게', idn: 'bagaimana / dengan cara apa' },
  { id: 98, ko: '과일', idn: 'buah-buahan' },
  { id: 99, ko: '채소', idn: 'sayuran' },
  { id: 100, ko: '자주', idn: 'sering' },
  ]
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