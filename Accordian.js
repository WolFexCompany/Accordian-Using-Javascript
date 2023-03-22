const accordian_item_header = document.querySelectorAll('.accordian_item_header')
const accordian_item_content = document.querySelectorAll('.accordian_item_content')
const accordian_item_header_div = document.querySelectorAll('.accordian_item_header div:nth-of-type(1)')
console.log(accordian_item_header_div)
accordian_item_header.forEach((Element, index) => {
    Element.addEventListener('click', () => {

        let displayvalue = getComputedStyle(accordian_item_content[index]).display
        displayvalue != 'block' ? (accordian_item_content.forEach(content => {
            content.classList.add('dnone')
        })) : false;
        displayvalue === 'none' ? (accordian_item_content[index].classList.remove('dnone'), accordian_item_header_div[index].innerHTML = '<i class="fa-solid fa-minus"></i>') : (accordian_item_content[index].classList.add('dnone'), accordian_item_header_div[index].innerHTML = '  <i class="fa-solid fa-plus"></i>')


    })
})