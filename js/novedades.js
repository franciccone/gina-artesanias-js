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