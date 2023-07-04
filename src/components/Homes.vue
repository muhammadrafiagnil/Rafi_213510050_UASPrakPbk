<template>
  <div class="home">
    <div class="home-content">
      <h1 class="heading">HALAMAN UTAMA APLIKASI SAYA</h1>
      <p>Ini adalah halaman utama dari aplikasi saya. Temukan berbagai fitur menarik menggunakan widget-widget yang tersedia di navigasi.</p>
      <p>Coba jelajahi dan manfaatkan aplikasi ini untuk meningkatkan pengalaman Anda dalam memantau cuaca, melihat foto-foto menarik, mengatur waktu dengan stopwatch, dan masih banyak lagi.</p>
    </div>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}

.home {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #A0BFE0;
  border-radius: 8px;
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;
}

.home-content {
  text-align: center;
  padding: 40px;
  border-radius: 8px;
}

.heading {
  font-size: 28px;
  color: #000;
  margin-bottom: 20px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.home p {
  font-size: 16px;
  color: #000;
  line-height: 1.5;
  font-family: 'Arial', sans-serif; /* Ganti dengan font yang diinginkan, misalnya Arial */
}
</style>
