let like_btn=document.querySelector('.like_');
let like=document.querySelector('.like_ i');
let inc=0;
function liked(i){
    if(inc==0){
        i.classList.remove("fa-regular");
        i.classList.add("fa-solid");
        inc=1;
    }
    else{
        i.classList.remove("fa-solid");
        i.classList.add("fa-regular");
        inc=0;
    }
}

let img1=document.getElementById('img1');
let img2=document.getElementById('img2');
let img3=document.getElementById('img3');
let img4=document.getElementById('img4');
let img5=document.getElementById('img5');
let img6=document.getElementById('img6');
let img7=document.getElementById('img7');
let img8=document.getElementById('img8');
let img9=document.getElementById('img9');
let img10=document.getElementById('img10');
let img11=document.getElementById('img11');
let img12=document.getElementById('img12');
let img13=document.getElementById('img13');
let img14=document.getElementById('img14');
let img15=document.getElementById('img15');
let img16=document.getElementById('img16');

function addItemToCart(imageSrc, itemName, itemPrice) {
    var cartBox = document.getElementById('cartBox');

    var cartItem = document.createElement('div');
    cartItem.classList.add('cart_item');

    var itemImage = document.createElement('img');
    itemImage.src = imageSrc;
    itemImage.alt = itemName;

    var itemDetails = document.createElement('div');
    itemDetails.classList.add('item_details');

    var itemNameElement = document.createElement('h2');
    itemNameElement.textContent = itemName;

    var itemPriceElement = document.createElement('p');
    itemPriceElement.textContent = 'Price: ' + itemPrice;

    itemDetails.appendChild(itemNameElement);
    itemDetails.appendChild(itemPriceElement);

    var removeButton = document.createElement('button');
    removeButton.classList.add('remove_item');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', function () {
        cartItem.remove();
    });

    cartItem.appendChild(itemImage);
    cartItem.appendChild(itemDetails);
    cartItem.appendChild(removeButton);

    cartBox.querySelector('.items').appendChild(cartItem);
}
let a=0
document.querySelector('.nav_bar button').addEventListener('click',function(){
    if(a==0){
    document.querySelector('.cart_box').style.visibility="visible";
    a=1;
    }
    else{
    document.querySelector('.cart_box').style.visibility="hidden";
    a=0;
    }
})
