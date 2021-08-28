document.addEventListener('DOMContentLoaded', function(event) {
  // autorization();
  console.log('hello')
});

// import {registration} from './js/registration';

const userRoleLabel = document.querySelector('.header-inner__user-role');

const readCookie = (name) => {
  const matches = document.cookie.match(new RegExp(
    // eslint-disable-next-line max-len
    '(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)',
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
};

// const autorization = () => {
//   document.querySelector('.logBtn').addEventListener('click', (event) => {
//     event.preventDefault();
//     document.querySelector('.login-modal').classList.add('display-block');
//     loginIn();
//     registration();
//   });
// };

const registration = () => {
  document.querySelector('.registation-btn').addEventListener('click',
    async (event) => {
      event.preventDefault();
      try {
        await fetch('http://localhost:8080/api/auth/register', {
          method: 'POST',
          body: JSON.stringify({
            'email': document.querySelector('.email-input').value,
            'password': document.querySelector('.password-input').value,
            'role': document.querySelector('input[name="role"]:checked')
              .value,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
          .then((response) => console.log(response));
        document.querySelector('.login-modal')
          .classList.remove('display-block');
        document.querySelector('.login-modal')
          .classList.add('display-none');
      } catch (err) {
        console.log(err.message);
      }
    });
};

const loginIn = () => {
  document.querySelector('.login-btn').addEventListener('click',
    async (event) => {
      event.preventDefault();

      try {
        await fetch('http://localhost:8080/api/auth/login', {
          method: 'POST',
          body: JSON.stringify({
            'email': document.querySelector('.email-input').value,
            'password': document.querySelector('.password-input').value,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
          .then((response) => console.log(response));
        document.querySelector('.login-modal')
          .classList.remove('display-block');
        document.querySelector('.login-modal')
          .classList.add('display-none');

        const userRole = readCookie('role');

        document.querySelector('.header-inner__user-role')
          .textContent = userRole;

        if (userRole === 'DRIVER') {
          document.querySelector('.driver-wrapper')
            .classList.add('display-block');
          document.querySelector('.shipper-wrapper')
            .classList.remove('display-block');
        } else {
          document.querySelector('.shipper-wrapper')
            .classList.add('display-block');
          document.querySelector('.driver-wrapper')
            .classList.remove('display-block');
        }
      } catch (err) {
        console.log(err.message);
      }
    },
  );
};

// document.querySelector('.add-load').addEventListener('click', (event) => {
//   event.preventDefault();
//   createLoad();
// });

const createLoad = () => {
  fetch('http://localhost:8080/api/loads', {
    method: 'POST',
    body: JSON.stringify({
      'name': 'Moving sofa',
      'payload': 100,
      'pickup_address': 'Flat 25, 12/F, Acacia Building 150 Kennedy Road',
      'delivery_address': 'Sr. Rodrigo Domínguez Av. Bellavista N° 185',
      'dimensions': {
        'width': 44,
        'length': 32,
        'height': 66,
      },
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      'Authorization': 'Bearer '+ readCookie('jwt_token'),
    },
  })
    .then((response) => response.json())
    .then((json) => alert(JSON.stringify(json)));
  //   .then((json) => console.log(json));
};

// console.log('hello from js');
// const socket = io();

// const messages = document.querySelector('.messages');
// const form = document.querySelector('.form');
// const input = document.querySelector('.input');
// const nameBlock = document.querySelector('.name');

// const userName = prompt('Your name:');

// nameBlock.innerHTML = userName;

// form.addEventListener('submit', (event) => {
//   event.preventDefault();


//   if (input.value) {
//     socket.emit('chat message', {
//       message: input.value,
//       name: userName,
//     });
//     input.value = '';
//   }
// });

// socket.on('chat message', (data) => {
//   const item = document.createElement('li');
//   item.innerHTML = `<span>${data.name} </span> : ${data.message}`;
//   messages.appendChild(item);
//   window.scrollTo(0, document.body.scrollHeight);
// });
