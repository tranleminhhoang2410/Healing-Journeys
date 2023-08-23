const dropdownButtons = document.querySelectorAll('.dropdown') as NodeListOf<HTMLDivElement>;
const dropdownIcons = document.querySelectorAll('.dropdown-icon') as NodeListOf<SVGSVGElement>;
const infoColumnList = document.querySelectorAll('.info-column-list') as NodeListOf<HTMLUListElement>;

const dropdownState: boolean[] = new Array(dropdownButtons.length).fill(false);

dropdownButtons.forEach((button: HTMLDivElement, index: number) => {
    button.addEventListener('click', () => {
        infoColumnList[index].classList.toggle('toggle');

        if (!dropdownState[index]) {
            dropdownIcons[index].setAttribute('style', `transform: rotate(180deg); transition: all linear 0.3s;`);
            dropdownState[index] = true; // Mark dropdown as opened
        } else {
            dropdownIcons[index].setAttribute('style', `transform: rotate(0deg); transition: all linear 0.3s;`);
            dropdownState[index] = false; // Mark dropdown as closed
        }
    });
});
