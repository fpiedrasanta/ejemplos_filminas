class Producto {
    constructor(descripcion, precio, porcentajeIVA) {
        this.descripcion = descripcion;
        this.precio = precio;
        this.porcentajeIVA = porcentajeIVA;
    }

    obtenerPrecioConIVA = () => {
        return this.precio * (1 + this.porcentajeIVA/100);
    }

    obtenerIVA = () => {
        return this.precio * this.porcentajeIVA/100;
    }
}