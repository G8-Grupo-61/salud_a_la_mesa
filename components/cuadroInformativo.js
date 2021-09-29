Vue.component('tarjeta-general', {
    props: ['titulo', 'imagen', 'texto'],
    template: 
    `
    <div class="container seccion-servicios">
        <div class="row">
            <div class="col-12 col-lg-6">
                <img class="img-fluid w-100" :src="imagen" alt="imagen">
            </div>
            <div class="col-12 col-lg-6">
                <p class="">
                {{titulo}}
                <ul class="">
                <li v-for="elemento in item.lista">{{texto}}</li>
                </ul>
                </p>
            </div>
            </div>          
        </div>
    </div>
    `    
    });