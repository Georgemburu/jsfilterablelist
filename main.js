const search = document.querySelector('#search');
const nameList = document.querySelectorAll('ul #name');
const a = document.querySelectorAll('a');
console.log(a[1].innerHTML.toUpperCase())
console.log(search);
console.log(nameList[1])

search.addEventListener('keyup', function(){
    let input = this.value.toUpperCase();
    console.log(input)
    for(i=0; i<nameList.length;i++ ){
        console.log(i)
        console.log(a[i].innerHTML.toUpperCase().indexOf(input)!= -1)
        if(a[i].innerHTML.toUpperCase().indexOf(input)!= -1){
            a[i].style.display = '';
        }else{
            a[i].style.display = 'none';
        }
    }
})
