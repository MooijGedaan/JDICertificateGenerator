
// ---------- CHANGE TEXT --------- //

// Navigation
const navTitles = ['Name', 'Design', 'Amount', 'Details'];

// Welcome screen
const contentWelcomeTitle = 'Give some green!';
const contentWelcomeCopy = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pulvinar quam non efficitur posuere. Phasellus ac massa et lectus tempus semper. Maecenas sed eros nulla. Pellentesque eleifend faucibus erat ut pretium. Aenean ac consectetur libero, vel rutrum leo. Mauris tellus lacus, accumsan sed pharetra a, rutrum a mi. Aliquam eget consequat tellus. Vestibulum ut vehicula libero.";
const contentWelcomeButtonText = "Let's start";

// Name screen
const contentNameTitle = "Who will recieve this certificate?";
const contentNameNextButtonText = "Next step";
const contentNamePrevButtonText = "Previous step";

// Design screen
const contentDesignTitle = "Choose the design that fits the occasion best!";
const contentDesignNextButtonText = "Next step";
const contentDesignPrevButtonText = "Previous step";
const designOptions = ['Party', 'Christmas', 'Baby'];


// ------------ STATE ------------- //

let isThereContent = false;

if (Cookies.get('pageIndex') === undefined) {
  Cookies.set('pageIndex', 0, {expires: 1});
}
if (Cookies.get('userInput') === undefined) {
  Cookies.set('userInput', "", {expires: 1});
}

// ------- EVENT LISTENERS -------- //

document.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    let currentIndex = Cookies.get('pageIndex');
    currentIndex++;
    Cookies.set('pageIndex', currentIndex, {expires: 1});
    newPage();
  }
});

// -------------------------------- //

// Everything gets put on top of this element
const innerDiv = document.createElement('div');

// Create the essential div's, the largest wrappers
function createBase() {
  // Create body's and div
  const body = document.querySelector('#body');
  const outerDiv = document.createElement('div');

  // Add classes
  outerDiv.classList.add('flex', 'h-screen', 'px-8');
  innerDiv.classList.add('m-auto', 'w-full', 'bg-white', 'shadow-md', 'max-w-2xl', 'rounded-lg', 'px-8')

  // Append
  outerDiv.append(innerDiv);
  body.append(outerDiv);
}

// Create the navBar
function createNavBar() {
  // Create wrapper
  const wrapperNavBar = document.createElement('div');
  wrapperNavBar.classList.add('flex', 'justify-items-stretch', 'grid', 'grid-cols-4', 'text-center');
  wrapperNavBar.id = 'navBar';

  // Loop trough titles (defined at the top)
  const titles = navTitles.map((obj, indexObj) => {
    const title = document.createElement('p');
    title.classList.add('font-jdi', 'h-8', 'mt-4', 'border-b-2', 'hover:text-black', 'hover:border-green-600', 'text-gray-500', 'cursor-pointer');
    title.innerHTML = obj;
    title.onclick = () => {
      Cookies.set('pageIndex', (indexObj + 1), {expires: 1});
      newPage();
    }
    wrapperNavBar.append(title);
  });

  // Append
  innerDiv.append(wrapperNavBar);
}

function createWelcome() {
  // Create wrappers
  const outerWrapper = document.createElement('div');
  outerWrapper.classList.add('py-5', 'mainBlock', 'flex');
  outerWrapper.id = 'contentBlock';
  const innerWrapper = document.createElement('div');
  innerWrapper.classList.add('my-auto');

  // Create heading
  const welcomeTitle = document.createElement('h1');
  welcomeTitle.classList.add('text-2xl', 'font-jdi', 'font-bold');
  welcomeTitle.innerHTML = contentWelcomeTitle;

  // Create text
  const welcomeCopy = document.createElement('p');
  welcomeCopy.classList.add('text-base', 'font-jdi');
  welcomeCopy.innerHTML = contentWelcomeCopy;

  // Append
  innerWrapper.append(welcomeTitle);
  innerWrapper.append(welcomeCopy);
  outerWrapper.append(innerWrapper);
  innerDiv.append(outerWrapper);
  createBottomBar(false, null, true, contentWelcomeButtonText);
}

function createName() {
  // Create wrappers
  const outerWrapper = document.createElement('div');
  outerWrapper.classList.add('py-5', 'mainBlock', 'flex');
  outerWrapper.id = 'contentBlock';
  const innerWrapper = document.createElement('div');
  innerWrapper.classList.add('my-auto');

  // Create heading
  const nameTitle = document.createElement('h1');
  nameTitle.classList.add('text-2xl', 'font-jdi', 'font-bold', 'mb-4');
  nameTitle.innerHTML = contentNameTitle;

  // Create input
  const nameInput = document.createElement('input');
  nameInput.classList.add('border-2', 'rounded', 'family-jdi', 'text-xs', 'px-2', 'py-1', 'w-64');
  nameInput.placeholder = "Insert name here...";
  nameInput.value = Cookies.get('userInput');
  nameInput.addEventListener('input', updateName);

  function updateName(e) {
    Cookies.set('userInput', e.target.value, {expires: 1});
  }

  // Append
  innerWrapper.append(nameTitle);
  innerWrapper.append(nameInput);
  outerWrapper.append(innerWrapper);
  innerDiv.append(outerWrapper);
  createBottomBar(true, contentNamePrevButtonText, true, contentNameNextButtonText);
}

function createDesign() {
  // Create wrappers
  const outerWrapper = document.createElement('div');
  outerWrapper.classList.add('py-5', 'mainBlock', 'flex');
  outerWrapper.id = 'contentBlock';
  const innerWrapper = document.createElement('div');
  innerWrapper.classList.add('my-auto', 'w-full');

  // Create heading
  const designTitle = document.createElement('h1');
  designTitle.classList.add('text-2xl', 'font-jdi', 'font-bold', 'mb-4');
  designTitle.innerHTML = contentDesignTitle;

  // Create wrapper design options
  const optionsWrapper = document.createElement('div');
  optionsWrapper.classList.add('w-full', 'flex', 'justify-between');

  // Create design option
  designOptions.map((val, index) => {
    const optionWrapper = document.createElement('div');
    optionWrapper.classList.add('border-gray-400', 'border-2', 'rounded', 'h-56', 'w-full', 'mx-1', 'text-center', 'text-white', 'text-2xl');
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
    optionWrapper.style.backgroundColor = bgColor;
    optionWrapper.innerHTML = Cookies.get('userInput');
    optionsWrapper.append(optionWrapper);
  });

  // Append (before design options)
  innerWrapper.append(designTitle);
  innerWrapper.append(optionsWrapper);
  outerWrapper.append(innerWrapper);
  innerDiv.append(outerWrapper);
  createBottomBar(true, contentDesignPrevButtonText, true, contentDesignNextButtonText);
}

function createBottomBar(Prev, buttonTitlePrev, Next, buttonTitleNext) {
  // Create wrappers
  const outerWrapper = document.createElement('div');
  outerWrapper.classList.add('w-full', 'border-t-2', 'flex', 'justify-between');
  outerWrapper.id = 'bottomBar';

  // If prev button is needed
  if (Prev) {
    // Create previous button
    const prevButton = document.createElement('button');
    prevButton.classList.add('font-jdi', 'block', 'text-base', 'px-4', 'text-gray-400', 'rounded', 'my-4', 'border-gray-300', 'border-2', 'hover:border-gray-400', 'focus:border-gray-400', 'py-2', 'flex', 'items-center');
    prevButton.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 512' class='h-4 inline mr-3'><path fill='currentColor' d='M231.293 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L70.393 256 251.092 74.87c4.686-4.686 4.686-12.284 0-16.971L231.293 38.1c-4.686-4.686-12.284-4.686-16.971 0L4.908 247.515c-4.686 4.686-4.686 12.284 0 16.971L214.322 473.9c4.687 4.686 12.285 4.686 16.971-.001z'></path></svg>";
    prevButton.innerHTML += buttonTitlePrev;
    prevButton.onclick = () => {
      let currentIndex = Cookies.get('pageIndex');
      currentIndex--;
      Cookies.set('pageIndex', currentIndex, {expires: 1});
      newPage();
    }

    // Append
    outerWrapper.append(prevButton);
  }

  if (Next) {
    // Create next button
    const nextButton = document.createElement('button');
    nextButton.classList.add('font-jdi', 'block', 'text-base', 'px-4', 'text-white', 'rounded', 'my-4', 'bg-green-600', 'hover:bg-green-700', 'focus:bg-green-700', 'py-2');
    nextButton.innerHTML = buttonTitleNext;
    nextButton.innerHTML += '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" class="h-4 inline ml-3"><path fill="currentColor" d="M187.8 264.5L41 412.5c-4.7 4.7-12.3 4.7-17 0L4.2 392.7c-4.7-4.7-4.7-12.3 0-17L122.7 256 4.2 136.3c-4.7-4.7-4.7-12.3 0-17L24 99.5c4.7-4.7 12.3-4.7 17 0l146.8 148c4.7 4.7 4.7 12.3 0 17z" class=""></path></svg>';
    nextButton.onclick = () => {
      let currentIndex = Cookies.get('pageIndex');
      currentIndex++;
      console.log(currentIndex);
      Cookies.set('pageIndex', currentIndex, {expires: 1});
      newPage();
    }

    if (!Prev) {
      outerWrapper.classList.remove('justify-between');
      outerWrapper.classList.add('justify-end');
    }

    // Append
    outerWrapper.append(nextButton);
  }

  // Append
  innerDiv.append(outerWrapper);
}

function newPage() {
  if (isThereContent) {
    clearPages();
  }
  const navOptions = document.querySelector('#navBar').children;

  for (i = 0; i < navOptions.length; i++) {
    navOptions[i].classList.remove('active');
  }

  const page = Cookies.get('pageIndex');

  switch (parseInt(page)) {
    case 0:
      createWelcome();
      isThereContent = true;
      break;
    case 1:
      createName();
      navOptions[0].classList.add('active');
      isThereContent = true;
      break;
    case 2:
      createDesign();
      navOptions[1].classList.add('active');
      isThereContent = true;
      break;
    case 3:
      // createAmount();
      navOptions[2].classList.add('active');
      isThereContent = false;
      break;
    case 4:
      // createDetails();
      navOptions[3].classList.add('active');
      isThereContent = false;
      break;
  }
}

function clearPages() {
  const toBeDeleted = document.querySelector('#contentBlock');
  const toBeDeletedBottomBar = document.querySelector('#bottomBar');

  if (toBeDeleted !== null) {
    toBeDeleted.remove();
  }

  if (toBeDeletedBottomBar !== null) {
    toBeDeletedBottomBar.remove();
  }
}

createBase();
createNavBar();
newPage();
