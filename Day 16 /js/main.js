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
  
        const imgElement = document.getElementById("user-image");
        imgElement.src = user.picture.large;
  
        document.getElementById("user-name").innerHTML = "<strong style='color: gray;'>Hi, My name is : <br></strong>" + name;
        document.getElementById("user-email").innerHTML = "<strong style='color: gray;'>My email address is: <br></strong>" + email;
        document.getElementById("user-dob").innerHTML = "<strong style='color: gray;'>My birthday is : <br></strong>" + dob;
        document.getElementById("user-address").innerHTML = "<strong style='color: gray;'>My address is: <br></strong>" + streetNumber + " " + streetName;
        document.getElementById("user-phone").innerHTML = "<strong style='color: gray;'>My phone number is: <br></strong>" + phone;
        document.getElementById("user-password").innerHTML = "<strong style='color: gray;'>My password is: <br></strong>" + password;

        // Eventos mouseover y mouseout
        const icons = document.querySelectorAll('.card-img-top:not(.user-profile-img)');
        const texts = document.querySelectorAll('.card-text');

        icons.forEach((icon, index) => {
            icon.addEventListener('mouseover', () => {
                icon.classList.add('green-icon');
                texts[index].classList.remove('hidden');
                texts[index].classList.add('visible');
            });

            icon.addEventListener('mouseout', () => {
                 icon.classList.remove('green-icon');
                texts[index].classList.remove('visible');
                texts[index].classList.add('hidden');
            });
        });
      })
      .catch(error => {
        console.error('Error al obtener los datos:', error);
      });
  });
