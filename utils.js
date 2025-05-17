function calculadora() {
    const figura = prompt(`
        a) triangulo
        b) cuadrado
        c) rectangulo 
        
        Que área deseas calcular:
    `);
    
    switch(figura) {
        case "a":
            const base = prompt("Base:");
            const altura = prompt("Altura:");
            const areaTriangulo = function(base, altura) {
                return (base * altura)/2;
            }
            const resultado1 = areaTriangulo(base, altura);
            alert("El area del triangulo es : " + resultado1)
            break;
        case "b":
            const lado = prompt("Lado:");
            const areaCuadrado = function(lado) {
                return lado*lado
            }
            const resultado2 = areaCuadrado(lado);
            alert("El area del triangulo es : " + resultado2)
            break;
        case "c":
            const b = prompt("Base:");
            const a = prompt("Altura:");
            const areaRectangulo = function(b, a) {
                return b * a;
            }
            const resultado3 = areaRectangulo(b, a);
            alert("El area del triangulo es : " + resultado3)
            break;
        default:
            alert("Figura no reconocida")
    }
    
    siguiente = prompt("Otro calculo: (s) (n)")
}
