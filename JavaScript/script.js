const slide = document.querySelector('.slide')
const leftBlockP = document.querySelector('.left-block-p')
const cityBlock = document.querySelector('.city-block')
const repairTime = document.querySelector('.repair-time')
const size = document.querySelector('.size')
const repairCost = document.querySelector('.repair-cost')


const entities = [
    {
        leftBlockP: 'Only a small part of the work performed by our company is presented\non the site. For 14 years on in the construction\nmarket we have made happy more than 1000 families',
        cityBlock: 'Rostov-on-Don\nLCD admiral',
        repairTime: '3.5 month',
        size: '81 m2',
        repairCost: 'Upon request',
        slide: '/image/image-room1'
    },
    {
        leftBlockP: 'Only a small part of the work performed by our company is presented\non the site. For 14 years on in the construction\nmarket we have made happy more than 1000 families',
        cityBlock: 'Rostov-on-Don\nPatriotic',
        repairTime: '3 months',
        size: '93 m2',
        repairCost: 'Upon request',
        slide: '/image/image-room2'
        },
    {
        leftBlockP: 'Only a small part of the work performed by our company is presented\non the site. For 14 years on in the construction\nmarket we have made happy more than 1000 families',
        cityBlock: 'Rostov-on-Don\nLCD admiral',
        repairTime: '3.5 month',
        size: '81 m2',
        repairCost: 'Upon request',
        slide: '/image/image-room3'
    }
  ]

const setEntity = (index) => {
    leftBlockP.innerText = entities[index].leftBlockP
    cityBlock.innerText = entities[index].cityBlock
    repairTime.innerText = entities[index].repairTime
    size.innerText = entities[index].size
    repairCost.innerText = entities[index].repairCost
    slide.style.backgroundImage = `url(${entities[index].slide})`
  }
  
  const prev = document.getElementById('prev')
  const next = document.getElementById('.next')
  let currentIndex = 0
  
  prev.addEventListener('click', () => {
    setEntity(currentIndex - 1);
    currentIndex -= 1;
  })
  next.addEventListener('click', () => {
    setEntity(currentIndex + 1);
    currentIndex += 1;
  })