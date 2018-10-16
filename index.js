
const contactsList = document.querySelector('.contacts-list'); 
const data = JSON.parse(loadContacts()); 
contactsList.innerHTML = ''; 

for (let item of data) {
  contactsList.innerHTML += `<li data-email="${item.email}" data-phone="${item.phone}">
                       <strong>${item.name}</strong>
                        </li>`;
}