
    
document.addEventListener('DOMContentLoaded', () => {
const steps = [
{
  title: 'Step 1',
  text: 'Description for Step 1',
  dynamic: 'Dynamic content for Step 1',
  image: 'https://21917313.fs1.hubspotusercontent-na1.net/hubfs/21917313/Website%20Photos/Conditions%20weight%20loss_mockup.jpg',
},
{
  title: 'Step 2',
  text: 'Description for Step 2',
  dynamic: 'Dynamic content for Step 2',
  image: 'https://21917313.fs1.hubspotusercontent-na1.net/hubfs/21917313/Website%20Photos/Conditions%20weight%20loss_mockup.jpg',
},
// Add more steps as needed
];

const textItemsContainer = document.getElementById('text-items');
const imagesContainer = document.getElementById('images');
const dynamicContentContainer = document.getElementById('dynamic-content');

steps.forEach((step, index) => {
const stepTitle = document.createElement('div');
stepTitle.className = 'stepTitle';
stepTitle.textContent = step.title;

const stepText = document.createElement('p');
stepText.className = 'details';
stepText.textContent = step.text;

const image = document.createElement('img');
image.src = step.image;

const dynamicContent = document.createElement('div');
dynamicContent.className = 'dynamo';
dynamicContent.textContent = step.dynamic;

textItemsContainer.appendChild(stepTitle);
textItemsContainer.appendChild(stepText);
imagesContainer.appendChild(image);
dynamicContentContainer.appendChild(dynamicContent);

// Initialize first step as active
if (index === 0) {
  stepTitle.classList.add('active');
  stepText.classList.add('active');
  image.classList.add('active');
  dynamicContent.classList.add('active');
}
});

function handleScroll() {
const stepsContainer = document.querySelector('.steps');
const ani = document.querySelector('.ani');
const windowHeight = window.innerHeight;

if (!stepsContainer || !ani) return;

const stepsContainerRect = stepsContainer.getBoundingClientRect();
const stepsContainerHeight = stepsContainer.offsetHeight;
const scrollRatio = Math.min(Math.max((windowHeight - stepsContainerRect.top) / (stepsContainerHeight - windowHeight), 0), 1);
const isBottom = stepsContainerRect.bottom <= windowHeight;

ani.style.position = scrollRatio >= 1 || scrollRatio <= 0 ? 'absolute' : 'fixed';
ani.style.top = isBottom ? 'auto' : '0';
ani.style.bottom = isBottom ? '0' : 'auto';

const stepIndex = Math.floor(scrollRatio * steps.length);

document.querySelectorAll('.stepTitle, .details, .dynamo, .images img').forEach(el => el.classList.remove('active'));

if (steps[stepIndex]) {
  const stepTitle = textItemsContainer.children[stepIndex * 2];
  const stepText = textItemsContainer.children[stepIndex * 2 + 1];
  const image = imagesContainer.children[stepIndex];
  const dynamicContent = dynamicContentContainer.children[stepIndex];

  stepTitle.classList.add('active');
  stepText.classList.add('active');
  image.classList.add('active');
  dynamicContent.classList.add('active');
}
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('resize', handleScroll);
handleScroll();
});








// document.addEventListener('DOMContentLoaded', () => {
//     const faqItems = document.querySelectorAll('.faq-item');
//     const middleImages = document.querySelectorAll('.middle-image img');
//     const rightImages = document.querySelectorAll('.right-image img');
    
//     let currentIndex = 0;
  
//     const setActiveItems = (index) => {
//       faqItems.forEach((item, i) => {
//         item.style.display = i === index ? 'block' : 'none';
//       });
//       middleImages.forEach((img, i) => {
//         img.classList.toggle('active', i === index);
//       });
//       rightImages.forEach((img, i) => {
//         img.classList.toggle('active', i === index);
//       });
//     };
  
//     setActiveItems(currentIndex);
  
//     window.addEventListener('scroll', () => {
//       const scrollPosition = window.scrollY;
//       const windowHeight = window.innerHeight;
//       const faqHeight = document.querySelector('.faq').scrollHeight;
//       const numberOfItems = faqItems.length;
  
//       const newIndex = Math.min(
//         numberOfItems - 1,
//         Math.floor((scrollPosition / (faqHeight - windowHeight)) * numberOfItems)
//       );
  
//       if (newIndex !== currentIndex) {
//         currentIndex = newIndex;
//         setActiveItems(currentIndex);
//       }
//     });
//   });
  