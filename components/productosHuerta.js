Vue.component('productos-huerta', {
    props: ['titulo'],
    template: 
    `
    <section>
      <h2 class="container titulo-team text-center mt-3">
        {{titulo}}
      </h2>
      <div class="container mb-3">

        <div class="row">
          <div v-for="(imagen,index) in productos" id="carouselExampleIndicators" class="carousel slide col-12 col-sm-4 offset-sm-4"
            data-bs-ride="carousel">
            <div class="carousel-inner align-items-center justify-content-center">
              <div class="carousel-item active">
                <img :src="imagen.img" class="d-block w-100" alt="...">
              </div>              
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </section>
    `,
    data(){
        return{
            productos:[
                {
                    img:"img/cosecha.jpg",
                    img:"img/cosecha.jpg",
                    img:"img/cosecha.jpg"
                }
            ]
        }//cierre return
    }//cierre data

})



