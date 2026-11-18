
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  // Data mahasiswa menggunakan useState
  const [mahasiswa] = useState([
    {
      nim: '24051204001',
      nama: 'Andi Saputra',
      noHp: '081234567890',
      email: 'andi@gmail.com',
      alamat: 'Surabaya',
      prodi: 'Manajemen Informatika',
      tahunMasuk: '2024'
    },
    {
      nim: '24051204002',
      nama: 'Siti Amelia',
      noHp: '081234567891',
      email: 'siti@gmail.com',
      alamat: 'Sidoarjo',
      prodi: 'Manajemen Informatika',
      tahunMasuk: '2024'
    },
    {
      nim: '24051204003',
      nama: 'Budi Santoso',
      noHp: '081234567892',
      email: 'budi@gmail.com',
      alamat: 'Gresik',
      prodi: 'Sistem Informasi',
      tahunMasuk: '2024'
    },
    {
      nim: '24051204004',
      nama: 'Rina Putri',
      noHp: '081234567893',
      email: 'rina@gmail.com',
      alamat: 'Mojokerto',
      prodi: 'Manajemen Informatika',
      tahunMasuk: '2024'
    },
    {
      nim: '24051204005',
      nama: 'Dika Pratama',
      noHp: '081234567894',
      email: 'dika@gmail.com',
      alamat: 'Lamongan',
      prodi: 'Teknik Informatika',
      tahunMasuk: '2024'
    },
    {
      nim: '24051204006',
      nama: 'Nadia Safitri',
      noHp: '081234567895',
      email: 'nadia@gmail.com',
      alamat: 'Malang',
      prodi: 'Sistem Informasi',
      tahunMasuk: '2024'
    },
    {
      nim: '24051204007',
      nama: 'Fajar Ramadhan',
      noHp: '081234567896',
      email: 'fajar@gmail.com',
      alamat: 'Pasuruan',
      prodi: 'Manajemen Informatika',
      tahunMasuk: '2024'
    },
    {
      nim: '24051204008',
      nama: 'Dewi Anggraini',
      noHp: '081234567897',
      email: 'dewi@gmail.com',
      alamat: 'Jombang',
      prodi: 'Teknik Informatika',
      tahunMasuk: '2024'
    },
    {
      nim: '24051204009',
      nama: 'Rizky Maulana',
      noHp: '081234567898',
      email: 'rizky@gmail.com',
      alamat: 'Kediri',
      prodi: 'Sistem Informasi',
      tahunMasuk: '2024'
    },
    {
      nim: '24051204010',
      nama: 'Putri Maharani',
      noHp: '081234567899',
      email: 'putri@gmail.com',
      alamat: 'Bangkalan',
      prodi: 'Manajemen Informatika',
      tahunMasuk: '2024'
    }
  ])

  // State untuk menyimpan waktu saat ini
  const [waktu, setWaktu] = useState(new Date())

  // useEffect untuk menjalankan live clock
  useEffect(() => {
    const interval = setInterval(() => {
      setWaktu(new Date())
    }, 1000)

    // Cleanup interval ketika komponen di-unmount
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="app-container">

      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="brand">
            <div className="brand-icon">SM</div>
            <div>
              <h1>Student Management</h1>
              <p>Daftar Data Mahasiswa</p>
            </div>
          </div>

          <div className="header-label">
            STUDENT DATA SYSTEM
          </div>
        </div>
      </header>

      <main className="main-content">

        {/* Informasi mahasiswa dan jam digital */}
        <section className="info-section">

          <div className="info-card">
            <div className="card-icon student-icon">♙</div>
            <div className="card-information">
              <span>Total Mahasiswa</span>
              <h2>{mahasiswa.length}</h2>
              <p>Data mahasiswa terdaftar</p>
            </div>
          </div>

          <div className="info-card clock-card">
            <div className="card-icon clock-icon">◷</div>
            <div className="card-information">
              <span>Jam Digital</span>
              <h2>{waktu.toLocaleTimeString('id-ID')}</h2>
              <p>
                {waktu.toLocaleDateString('id-ID', {
                  weekday: 'long',
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                })}
              </p>
            </div>
          </div>

        </section>

        {/* Tabel mahasiswa */}
        <section className="table-section">

          <div className="table-heading">
            <div>
              <h2>Data Mahasiswa</h2>
              <p>Daftar lengkap informasi mahasiswa</p>
            </div>

            <div className="total-badge">
              {mahasiswa.length} Mahasiswa
            </div>
          </div>

          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>NIM</th>
                  <th>Nama Mahasiswa</th>
                  <th>No. HP</th>
                  <th>Email</th>
                  <th>Alamat</th>
                  <th>Program Studi</th>
                  <th>Tahun Masuk</th>
                </tr>
              </thead>

              <tbody>
                {mahasiswa.map((mhs, index) => (
                  <tr key={mhs.nim}>
                    <td className="number-cell">
                      {String(index + 1).padStart(2, '0')}
                    </td>
                    <td className="nim-cell">{mhs.nim}</td>
                    <td className="name-cell">{mhs.nama}</td>
                    <td>{mhs.noHp}</td>
                    <td>{mhs.email}</td>
                    <td>{mhs.alamat}</td>
                    <td>{mhs.prodi}</td>
                    <td>
                      <span className="year-badge">
                        {mhs.tahunMasuk}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="table-footer">
            <p>
              Menampilkan <strong>{mahasiswa.length}</strong> data mahasiswa
            </p>
            <span>Student Management System</span>
          </div>

        </section>

        {/* Footer */}
        <footer className="footer">
          <p>Student Management © 2026</p>
          <p>ReactJS - Frontend Development</p>
        </footer>

      </main>
    </div>
  )
}

export default App
