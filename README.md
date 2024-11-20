## 1. MENGINSTALL GIT
[https://git-scm.com/downloads/win](https://git-scm.com/downloads/win)\
Git merupakan software berbasis Version Control System (VCS) yang bertugas untuk mencatat perubahan seluruh file atau repository suatu project. Developer software biasa menggunakan Git untuk distributed revision (VCS terdistribusi), hal ini bertujuan untuk menyimpan database tidak hanya ke satu tempat. Namun semua orang yang terlibat dalam penyusunan kode dapat menyimpan database ini.
## 2. MEMBUAT AKUN GITHUB
GitHub merupakan layanan cloud yang berguna untuk menyimpan dan mengelola sebuah project yang dinamakan repository (repo git). Cara kerja pada GitHub harus terkoneksi pada internet sehingga tidak perlu meng-install sebuah software ke dalam perangkat keras. Hal ini memberikan keringanan penyimpanan komputer yang kita gunakan karena file project tersimpan oleh cloud GitHub.

Konsep kerja GitHub pada dasarnya sama dengan Git yaitu dapat menulis source code secara individu atau tim. User interface yang tersedia pada GitHub lebih menarik dan mudah dipahami oleh pengguna awal. Pekerjaan secara tim, pengguna juga bisa melihat siapa penulis kode dan tanggal berapa kode tersebut dibuat.
## 3. UPLOAD KE GITHUB
Tutorial untuk anak SMKN 2
```
git init
```
```
git remote add origin [repository_url]
```
```
git add .
```
```
git commit -m "first commit"
```
```
git push --set-upstream origin master
```

## 4. MEMBUAT AKUN VERCEL
Vercel adalah platform cloud yang menyediakan alat, alur kerja, dan infrastruktur untuk membangun dan menyebarkan aplikasi web. Vercel menawarkan berbagai fitur, seperti: CDN global, Domain kustom, HTTPS otomatis, Fitur rendering untuk membuat halaman dinamis, API Vercel untuk membuat halaman dinamis yang disesuaikan.

Buat akun Vercel melalui situs resminya\
[www.vercel.com](https://vercel.com)

## 5. DEPLOY KE VERCEL
1. Kirim kode Anda ke repositori git Anda (GitHub, GitLab, BitBucket).\
2. Impor proyek Anda ke Vercel.
3. Vercel akan mendeteksi bahwa Anda menggunakan React dan akan mengaktifkan pengaturan yang benar untuk penerapan Anda.
4. Aplikasi Anda sudah di-deploy! 
