
document.addEventListener("DOMContentLoaded", function() {
    const apiUrl = 'https://randomuser.me/api/';
  
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('La solicitud no fue exitosa');
        }
        return response.json();
      })
      .then(data => {
        const user = data.results[0];
          const name = user.name.first + " " + user.name.last;
          const email = user.email;
          const dob = new Date(user.dob.date).toLocaleDateString();
          const streetNumber = user.location.street.number;
          const streetName = user.location.street.name;
          const phone = user.phone;
          const password = user.login.password;
          const img = user.picture.large;

          const imgElement = document.getElementById("user-image");
          imgElement.src = img;
          imgElement.style.width = "150px";
  
          document.getElementById("user-image").src = img;
          document.getElementById("user-name").textContent += " " + name;
          document.getElementById("user-email").textContent += " " + email;
          document.getElementById("user-dob").textContent += " " + dob;
          document.getElementById("user-address").textContent += " " + streetNumber + " " + streetName;
          document.getElementById("user-phone").textContent += " " + phone;
          document.getElementById("user-password").textContent += " " + password;
        })
      .catch(error => {
        console.error('Error al obtener los datos:', error);
      });
  });