const dropdownButtons = document.querySelectorAll('.dropdown')
const dropdownIcons = document.querySelectorAll('.dropdown-icon')
const infoColumnList = document.querySelectorAll('.info-column-list')

const dropdownState = new Array(dropdownButtons.length).fill(false)

dropdownButtons.forEach((button, index) => {
    button.addEventListener('click', () => {

        if (!dropdownState[index]) {
            infoColumnList[index].style.display = 'flex'
            dropdownIcons[index].style = `transform: rotate(180deg); transition: all linear 0.3s;`
            dropdownState[index] = true; // Mark dropdown as opened
        } else {
            infoColumnList[index].style.display = 'none'
            dropdownIcons[index].style = `transform: rotate(0deg); transition: all linear 0.3s;`
            dropdownState[index] = false; // Mark dropdown as closed
        }
    })
})