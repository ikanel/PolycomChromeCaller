
  window.onload = (event) => {
    getSettings();
    document.getElementById("btnCall").addEventListener('click', (event) => {
      call(strip(document.getElementById("phone").value))
    });

    

  };
