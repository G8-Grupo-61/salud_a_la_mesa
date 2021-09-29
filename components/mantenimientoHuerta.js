Vue.component('mantenimiento-huerta',{
    props: ['titulo'],
    template:
    `
    <section class="mantenimiento_cuidado">
        <h2 class="container titulo-noticias">
            {{titulo}}
        </h2>        
        <div class="container seccion-noticias">
        <div class="row">
            <div class="row">
            
            <div v-for="contenido in mantenimiento" class="col-12 col-md-6 align-items-center justify-content-center">
                <div class="icono-cuidado">
                <img class="" :src="contenido.img">
                </div>

                <div class="info-cuidado">
                <p class="titulo-cuidado">{{contenido.titulo}}</p>
                <p>{{contenido.texto}}</p>
                </div>
            </div>
            </div>
        </div>
        </div>

    </section>
    `,
    data(){
        return{
            mantenimiento:[
                {
                    titulo:"Controle los Insectos",
                    img:"img/1.png",
                    texto: "Vigile de cerca el control de plagas de insectos. Si existen algunos, puede sacarlos con la mano y así eliminarlos (píselas o vierta a un tarro de agua jabonosa). Gusanos picudos del tomate, escarabajos del pepino y saltamontes, son algunos de ellos. Si el problema persiste, vea la posibilidad de aplicar una solución que pueda usarse en hortalizas.",
                },
                {
                    titulo:"Utilice Protectores para Extender la Estación",
                    img:"img/2.png",
                    texto: "En zonas de estaciones cortas donde las heladas pueden producirse en cualquier momento, es bueno proteger las plantas con cubiertas flotantes. Éstas, disponibles en viveros y centros de jardinería, están confeccionadas con un género ligero que transmite la luz y el agua, pero que atrapa el calor para acelerar la maduración y proteger del frío.",
                },
                {
                    titulo:"Fertilización de la Huerta",
                    img:"img/7.png",
                    texto: "Mantenga el crecimiento vigoroso de los vegetales de maduración tardía, aplicando fertilizante con nitrógeno en forma esporádica. No fertilice en exceso las plantas que ya están produciendo, debido a que provoca que algunas hortalizas, en especial los tomates, dejen de producir. En lo posible utilice fertilizantes naturales, abono orgánico proveniente del compost o de la vermicomposta",
                },
                {
                    titulo:"Continúe Plantando",
                    img:"img/4.png",
                    texto: "Una vez que coseche continúe plantando. En las zonas con inviernos más crudos, la cosecha se puede prolongar hasta el invierno. en zonas tropícales dependerá más de la temperatura a la que se encuentre. Opte por plantas de maduración rápida y en lo posible evite usar siempre la misma planta en la misma tierra. Cada planta tiene necesidades diferentes y absorbe diferentes nutrientes, si usa siempre las mismas plantas la tierra se degradará, por esta razón es importante la rotación de cultivos puede utilzar un orden como el siguiente: frutas, raices, hojas, flores.",
                },
                {
                    titulo:"Coseche con Frecuencia",
                    img:"img/3.png",
                    texto: "Visite el jardín como mínimo día por medio para cosechar las hortalizas maduras. La mayoría de las plantas de hortalizas dejan de producir si no se cultivan con frecuencia.",
                },
                {
                    titulo:"Riegue con Regularidad",
                    img:"img/6.png",
                    texto: "Si deja que las plantas de hortalizas se sequen, muchas dejarán de producir, y de lo contrario, sufrirá la calidad de la cosecha. En el caso de tomates, pimientos y lechugas, sufrirán podredumbre apical, y los pepinos tendrán un sabor amargo.</p> <p>Por lo tanto, mantenga el suelo húmedo especialmente durante los períodos cálidos y riegue profundamente (por lo menos hasta 10 cm de profundidad), permitiendo que el suelo se seque parcialmente y vuelva a regar.",
                },
                {
                    titulo:"Arranque las Malezas",
                    img:"img/5.png",
                    texto: "Retire las hierbas indeseadas, que se encuentren en el suelo, puede realizarlo manualmente o con algún tipo de producto natural que elimine todas clases de hierbas de hoja ancha y angosta. Se puede aplicar rociándolo directamente en las malezas, esperando 10 días hasta que se sequen. Posteriormente, limpie con un rastrillo.</p> <p>Ojo que las malezas compiten con las plantas de hortalizas por la luz, el agua, espacio y nutrientes, y por lo general ganan la competencia.",
                },            
            ]
        }//cierre del return

    }//cierre del data
});//Cierre del component