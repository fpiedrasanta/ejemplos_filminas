const productos = [
    new Producto('Yerba', 1500, 21),
    new Producto('Compu', 1500000, 10.5),
    new Producto('Arroz', 800, 0)
];

const option = IO.requestIntegerInRange(
    "Seleccione una opción:\n1 - Responsable inscripto\n2 - Consumidor final",
    1,
    2
);

for(producto of productos) {
    if(option === 1) {
        alert(`El producto ${producto.descripcion} cuesta ` +
              `$${producto.precio} + ${producto.porcentajeIVA}% ` +
              `de IVA ($${producto.obtenerIVA()})`);
    } else {
        alert(`El producto ${producto.descripcion} cuesta $${producto.obtenerPrecioConIVA()}` +
              ` IVA Incluido`);
    }
}