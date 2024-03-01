

class Productos {
    constructor(nombre, descripcion, precio, stock, imagen, tipo) {
        this.id = Productos.obtenerSiguienteId()
        this.nombre = nombre
        this.descripcion = descripcion
        this.precio = precio
        this.stock = stock
        this.imagen = imagen
        this.tipo = tipo

    }

    static obtenerSiguienteId() {
        if (!this.contador) {
            this.contador = 1
        }
        return this.contador++;
    }
}



const arrayOfProductos = [
    new Productos("Pelota de goma para perros", "Pelota resistente y segura para jugar con tu perro.", 5.99, 50, "", "jueguete"),
    new Productos("Juguete masticable en forma de hueso", "Juguete duradero que ayuda a mantener los dientes limpios y saludables.", 8.49, 30, "", "jueguete"),
    new Productos("Juguete interactivo para gatos", "Juguete con plumas y sonido para entretener a tu gato durante horas.", 7.99, 40, "", "jueguete"),
    new Productos("Peluche con forma de ratón para gatos", "Peluche suave y divertido que estimula el instinto de caza de tu gato.", 6.49, 20, "", "jueguete"),
    new Productos("Cuerda trenzada para masticar", "Cuerda resistente para perros que les ayuda a limpiar sus dientes y fortalecer su mandíbula.", 9.99, 25, "", "jueguete"),
    new Productos("Peluche con chirriador para cachorros", "Peluche diseñado especialmente para cachorros con chirriador para estimular su curiosidad.", 4.99, 35, "", "jueguete"),
    new Productos("Juguete dispensador de comida para perros", "Juguete interactivo que dispensa golosinas mientras tu perro juega.", 12.99, 15, "", "jueguete"),
    new Productos("Túnel de juego para gatos", "Túnel plegable y resistente con aberturas para que tu gato pueda esconderse y jugar.", 14.99, 10, "", "jueguete"),
    new Productos("Pelota de tenis con cuerda para tirar", "Pelota de tenis con asa para tirar, ideal para juegos de buscar y traer.", 3.49, 45, "", "jueguete"),
    new Productos("Juguete de cuerda para gatitos", "Juguete de cuerda con plumas y campana para gatitos que estimula su instinto de caza.", 5.49, 2, "", "jueguete")
];

const pushProductosParaImprimir = (productos) => {
    localStorage.setItem("productos", JSON.stringify(productos));
}

pushProductosParaImprimir(arrayOfProductos)

const obtenerProductosParaImprimir = () => {
    return JSON.parse(localStorage.getItem("productos")) || []
}