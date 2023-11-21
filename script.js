
const box1 = document.querySelector('.box1')
const box2 = document.querySelector('.box2')
const box3 = document.querySelector('.box3')
const box4 = document.querySelector('.box4')
const box5 = document.querySelector('.box5')

const boxArr = [box1, box2, box3, box4, box5]

// console.log(boxArr);

boxArr.forEach((box)=>{
  box.addEventListener('click', ()=>{
    removeActiveClasses()
    box.classList.add('active')
  })
})

const removeActiveClasses = () =>{
  boxArr.forEach((box)=>{
    box.classList.remove("active")
  })
}