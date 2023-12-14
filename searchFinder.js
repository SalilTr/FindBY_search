
// console.log(search);
// console.log(store);
// console.log(product);
// console.log(productNmae);
const search=()=>{
    const searchbox=document.querySelector('.container form input[type="search"]').value.toUpperCase()
    console.log(searchbox);
    
    // const store=document.querySelector('#product-list')
    const product=document.querySelectorAll('.product')
    // const productNmae=document.querySelectorAll('.product h2') 
    for(let i=0;i<=product.length;i++){
        let  h2=product[i].getElementsByTagName('h2')[0];
        if(h2){
           let textvalue= h2.textContent || h2.innerHTML
           if(textvalue.toUpperCase().indexOf(searchbox)>-1){
            product[i].style.display="";
           }
            else{ 
                product[i].style.display="none";  
            }
           
        }
    }

}
search()