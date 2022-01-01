function isSubmit() {
  const myName = document.getElementById("name").value;
  const myPhone = document.getElementById("phone").value;
  const myPassword = document.getElementById("password").value;
  const myConPassword = document.getElementById("conPassword").value;
  const Select = document.getElementById("select").selectedIndex;
  const mySelect = document.getElementsByTagName("option")[Select].value;

  if (myPassword === myConPassword) {
    password();
  } else {
    document.getElementById("welcome").innerHTML = `Invalid Password`;
  }

  function password() {
    console.log(myName);
    console.log(myPhone);
    console.log(myPassword);
    console.log(myConPassword);
    console.log(Select);
    console.log(mySelect);

    const myCard = document.getElementById("card");
    myCard.style.display = "block";
    const myCardName = document.getElementById("welcome");
    myCardName.innerHTML = `Welcome To  ${mySelect} ,`;
    const myText = document.getElementById("text");
    console.log(myText);
    myText.innerHTML = `${myName}`;
  }
}
