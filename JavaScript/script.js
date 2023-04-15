const entities = [
    {
        leftBlockP: 'Only a small part of the work performed by our company is presented\non the site. For 14 years on in the construction\nmarket we have made happy more than 1000 families',
        cityBlock: 'Rostov-on-Don\nLCD admiral',
        repairTime: '3.5 month',
        size: '81 m2',
        repairCost: 'Upon request',
        slide: '../image/image-room1.png',
       },
    {
        leftBlockP: 'Only a small part of the work performed by our company is presented\non the site. For 14 years on in the construction\nmarket we have made happy more than 1000 families',
        cityBlock: 'Sochi\nThieves',
        repairTime: '4 months',
        size: '105 m2',
        repairCost: 'Upon request',
        slide: '../image/image-room2.png',
        },
    {
        leftBlockP: 'Only a small part of the work performed by our company is presented\non the site. For 14 years on in the construction\nmarket we have made happy more than 1000 families',
        cityBlock: 'Rostov-on-Don\nPatriotic',
        repairTime: '3 month',
        size: '93 m2',
        repairCost: 'Upon request',
        slide: '../image/image-room3.png',
      }
  ]


const leftBlockP = document.querySelector('.left-block-p')
const cityBlock = document.querySelector('.city-block')
const repairTime = document.querySelector('.repair-time')
const size = document.querySelector('.size')
const repairCost = document.querySelector('.repair-cost')
const slide = document.querySelector('.slide')
const dots = document.querySelectorAll('.dots')


    const setEntity = (index) => {
    leftBlockP.innerText = entities[index].leftBlockP
    cityBlock.innerText = entities[index].cityBlock
    repairTime.innerText = entities[index].repairTime
    size.innerText = entities[index].size
    repairCost.innerText = entities[index].repairCost
    slide.style.backgroundImage = `url(${entities[index].slide})`  
    
    document.querySelector('.dots.active')?.classList.remove('active')
    dots[index].classList.add('active')
  }
  
  
  const prev = document.getElementById('prev')
  const next = document.getElementById('next')
  let sliderDots = document.querySelector(".slider__dots");

  let currentIndex = 0
  setEntity(currentIndex)
  
  prev.addEventListener('click', () => {
    currentIndex = currentIndex === 0 ? entities.length - 1 : currentIndex - 1;
    setEntity(currentIndex);
  })
  
  next.addEventListener('click', () => {
    currentIndex = currentIndex === entities.length - 1 ? 0 : currentIndex + 1;
    setEntity(currentIndex);
  })

  dots.forEach((dot, index) => {
    dot.addEventListener("click", function () {
        currentIndex = index
        setEntity(currentIndex);        
    });
});

