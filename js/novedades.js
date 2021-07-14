// $.ajax({
//     url: 'https://fakestoreapi.com/products?limit=12',
//     dataType: "JSON",
//     success: function(data) {
//         renderizarProductosHTML(data);
//     },
// })

// const productsNovedades = document.querySelector('section.products-novedades');

// let list = '';

// function renderizarProductosHTML() {

// productsNovedades.forEach(list => {
//     list += `
//     <div class="col-sm-6 col-md-4 col-lg-3">
//         <article class='card products'>
//             <img src="${image}" class="card-img-top card-image">
//             <div class="card-body">
//                 <h4 class="card-title">${title}</h4>
//                 <h5 class="card-text">${price}</h5>
//                 <button class="btn btn-warning">Buy</button>
//             </div>
//         </article>
//     </div>
//     `;
// });

// } 

// const container = $('div.');

// $('button.cta-more').click(function() {
//     $.ajax({
//         url: '../novedades.json',
//         method: 'GET',
//         dataType: 'json',
//         success: function(data) {
//             $.each(data)
//         },
//     })
// })

const url = "../novedades.json";

$("section.products-novedades").append('<button class="cta cta-more">Ver más</button>');

$(".cta-more").click( () => {
    $.get(url, function (response, status) {
        let myData = response;
        for (const dato of myData) {
            $("section.products-novedades").append(`<article class="products">
                                    <div class="img-products">
                                        <a href="#"><img class= "pic-products" src="${dato.img}" alt="${dato.title}"></a>
                                    </div>
                                    <div class="txt-products">
                                        <h2 class="title-products">${dato.title}</h2>
                                        <h3 class="price-products">${dato.price}</h3>
                                        <a href="#" class="cta">Comprar</a>
                                    </div>
                                </article>`)
        }
    })
})

// const productsContainer = document.querySelector('section.products-novedades');

// let list = '';

// products.forEach(products => {
//     list += `
//     <div class="col-sm-6 col-md-4 col-lg-3">
//         <article class='card products products-${products.id}'>
//             <img src="${products.img}" class="card-img-top card-image" alt="${products.title}"">
//             <div class="card-body">
//                 <h4 class="card-title">${products.title}</h4>
//                 <h5 class="card-text">${products.price}</h5>
//                 <button class="btn btn-warning">Buy</button>
//             </div>
//         </article>
//     </div>
//     `;
// });

// productsContainer.innerHTML = list;
