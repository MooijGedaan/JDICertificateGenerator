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


// ------------ STATE ------------- //

let pageIndex = 1;
let isThereContent = false;

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
      pageIndex = (indexObj + 1);
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

  // Create button
  const welcomeButton = document.createElement('button');
  welcomeButton.classList.add('font-jdi', 'text-base', 'px-4', 'text-white', 'rounded', 'my-4', 'bg-green-600', 'hover:bg-green-700', 'focus:bg-green-700', 'py-2');
  welcomeButton.onclick = () => {
    pageIndex++;
    newPage();
  };
  welcomeButton.innerHTML = contentWelcomeButtonText;

  // Append
  innerWrapper.append(welcomeTitle);
  innerWrapper.append(welcomeCopy);
  innerWrapper.append(welcomeButton);
  outerWrapper.append(innerWrapper);
  innerDiv.append(outerWrapper);
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
  nameInput.classList.add('border-2', 'rounded-lg', 'family-jdi', 'text-xs', 'px-2', 'py-1', 'w-64');
  nameInput.placeholder = "Insert name here...";

  // Append
  innerWrapper.append(nameTitle);
  innerWrapper.append(nameInput);
  outerWrapper.append(innerWrapper);
  innerDiv.append(outerWrapper);
  createBottomBar(true, true);
}

function createBottomBar(Prev, Next) {
  // Create wrappers
  const outerWrapper = document.createElement('div');
  outerWrapper.classList.add('w-full', 'border-t-2', 'flex', 'justify-between');
  outerWrapper.id = 'bottomBar';

  // If prev button is needed
  if (Prev) {
    // Create previous button
    const namePrevButton = document.createElement('button');
    namePrevButton.classList.add('font-jdi', 'block', 'text-base', 'px-4', 'text-gray-400', 'rounded', 'my-4', 'border-gray-300', 'border-2', 'hover:border-gray-400', 'focus:border-gray-400', 'py-2');
    namePrevButton.innerHTML = contentNamePrevButtonText;
    namePrevButton.onclick = () => {
      pageIndex--;
      newPage();
    }

    // Append
    outerWrapper.append(namePrevButton);
  }

  if (Next) {
    // Create next button
    const nameNextButton = document.createElement('button');
    nameNextButton.classList.add('font-jdi', 'block', 'text-base', 'px-4', 'text-white', 'rounded', 'my-4', 'bg-green-600', 'hover:bg-green-700', 'focus:bg-green-700', 'py-2');
    nameNextButton.innerHTML = contentNameNextButtonText;
    nameNextButton.onclick = () => {
      pageIndex++;
      newPage();
    }

    // Append
    outerWrapper.append(nameNextButton);
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

  switch (pageIndex) {
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
      // createDesign();
      navOptions[1].classList.add('active');
      isThereContent = false;
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
