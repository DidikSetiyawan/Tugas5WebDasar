
function hitungVolumeKubus() {
      const sisi = document.getElementById('sisiKubus').value;
      const volume = sisi * sisi * sisi;
      document.getElementById('resultKubus').textContent = `Volume Kubus: ${volume} cm³`;
      hasilpenjumlahan.innerHTML = "hasil penjumlahan dari:" +sisi *"x" + sisi * "x" + sisi + "=" +volume
  }
  
  
  function hitungVolumeBalok() {
      const panjang = document.getElementById('panjangBalok').value;
      const lebar = document.getElementById('lebarBalok').value;
      const tinggi = document.getElementById('tinggiBalok').value;
      const volume = panjang * lebar * tinggi;
      document.getElementById('resultBalok').textContent = `Volume Balok: ${volume} cm³`;
      hasilpenjumlahan.innerHTML = "HAsil penjumlahan dari:" +panjang * "x" + lebar * "x" + tinggi +"=" + volume
  }
  
  
  function hitungVolumePrisma() {
      const alas = document.getElementById('alasPrisma').value;
      const tinggiSegitiga = document.getElementById('tinggiSegitigaPrisma').value;
      const tinggiPrisma = document.getElementById('tinggiPrisma').value;
      const volume = (0.5 * alas * tinggiSegitiga) * tinggiPrisma;
      document.getElementById('resultPrisma').textContent = `Volume Prisma Segitiga: ${volume} cm³`;
      hasilpenjumlahan.innerHTML = "hasil penjumlahan dari:"+ alas * "x" + tinggiSegitiga * "x" + tinggiPrisma +"=" + volume;
  }
  