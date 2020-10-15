function changeNav(prop) {
  // Content blocks
  const welcome = document.getElementById("welcome");
  const name = document.getElementById("name");

  // Nav
  const navName = document.getElementById("navName");
  const navDesign = document.getElementById("navDesign");
  const navAmount = document.getElementById("navAmount");
  const navDetails = document.getElementById("navDetails");


  function terminatorrr() {
    // CONTENT BLOCKS - remove display blocks
    welcome.classList.remove("block");
    name.classList.remove("block");

    // NAV - remove class active
    navName.classList.remove('active');
    navDesign.classList.remove('active');
    navAmount.classList.remove('active');
    navDetails.classList.remove('active');

    // CONTENT BLOCKS - Make display hidden
    welcome.classList.add("hidden");
    name.classList.add("hidden");
  }

  if (prop === 'name') {
    terminatorrr();
    name.classList.remove("hidden");
    name.classList.add("block");

    navName.classList.add('active');

  } else if (prop === 'welcome') {
    terminatorrr();
    welcome.classList.remove("hidden");
    welcome.classList.add("block");

  }
}
