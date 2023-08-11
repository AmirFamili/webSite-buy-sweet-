$(document).ready(function () {
   $.ajax({
      url: "../js/json/data.json",
      success: function (res) {

         res.map((product) => {

            $('#products').append(`<div class="product">
            <img src="${product.img}" alt="${product.name}" class="productImg">
            <h3>${product.name} </h3>
            <div class="star">
               <i class="fa-solid fa-star"></i>
               <i class="fa-solid fa-star"></i>
               <i class="fa-solid fa-star"></i>
               <i class="fa-solid fa-star"></i>
               <i class="fa-solid fa-star"></i>
              
            </div>
            
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <a href="${product.link}">Show Product</a>

        </div>`);

         });
      }

   });

}); 
