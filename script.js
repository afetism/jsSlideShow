let currentImageIndex=0;
let mainimg=document.getElementById("mainimg")
const images=
[
    'images/image1.jpg',
    'images/image2.jpg',
    'images/image3.jpg',
    'images/image4.jpg',
];

const prev=document.getElementsByClassName('prev')[0];
const next=document.getElementsByClassName('next')[0];
const thumbnails=document.getElementsByClassName('thumbnails')[0];
prev.addEventListener("click",function(){

    if(currentImageIndex!=0)
    {
      currentImageIndex-=1;
      mainimg.src=images[currentImageIndex];
    }
    else
    {
        currentImageIndex=images.length-1;
        mainimg.src=images[currentImageIndex]
    }
});

next.addEventListener("click",nextFunc);


function createImgCard(imgSource)
{
   const card=document.createElement('div');
 
   card.classList.add(
    'card',
    'bg-white',            // Beyaz arka plan
    'shadow-lg',           // Hafif gölge efekti
    'rounded-lg',          // Yuvarlatılmış köşeler
    'overflow-hidden',     // Taşan içerikleri gizle
    'p-4',                 // İç dolgu
    'transition',          // Geçiş efektleri
    'transform',           // Geçiş efektleri için
    'hover:scale-105',     // Üzerine gelindiğinde büyüme efekti
    'hover:shadow-xl'      // Üzerine gelindiğinde daha büyük gölge
 );
 
 const cardImg = document.createElement('img');
 cardImg.src = imgSource;
 cardImg.classList.add(
    'w-96',             // Tam genişlik
    'h-48',             // Orantılı yükseklik
    'object-cover'        // Resmi alanına sığdır
 );

 card.appendChild(cardImg);
 return card;
}
for(let i=0;i<images.length;i++)
{
    const newCard=createImgCard(images[i]);
    newCard.classList.add('card');
    thumbnails.appendChild(newCard);
}
let cards=document.getElementsByClassName('card');
for(let card of cards)
{
    
    card.addEventListener("click",()=>{
        let img = card.querySelector('img'); 
        if (img) {
            mainimg.src = img.src; 
        }
    })
    
}

function nextFunc()
{
    if(currentImageIndex!=images.length-1)
        {
          currentImageIndex+=1;
          mainimg.src=images[currentImageIndex];
        }
        else
        {
            currentImageIndex=0;
            mainimg.src=images[currentImageIndex]
        }
}
