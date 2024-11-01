onload = () => {
  setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = 'I LOVE U'.split('');
    const titleElement = document.getElementById('title');
    let index = 0;

    // Function to append each letter with delay
    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 300); // Delay of 300ms
      } else {
        // Menambahkan gambar love setelah teks selesai
        const loveImage = document.createElement('img');
        loveImage.src = 'images/img.jpg'; // Ganti dengan URL gambar hati Anda
        loveImage.alt = 'Love';
        loveImage.style.width = '200px'; // Sesuaikan ukuran
        loveImage.style.height = '200px';
        loveImage.style.marginLeft = '5px'; // Jarak antara teks dan gambar

        titleElement.appendChild(loveImage);
      }
    }

    appendTitle();
  }, 1000); // Initial delay of 1 second
};
