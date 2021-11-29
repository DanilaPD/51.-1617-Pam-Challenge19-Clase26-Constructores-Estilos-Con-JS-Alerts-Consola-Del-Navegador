//* Creando constructores:

//Comidas

function Comidas(milanesas, asado, pizzas, papas, ensalada) {
  this.milanesas = milanesas;
  this.asado = asado;
  this.pizzas = pizzas;
  this.papas = papas;
  this.ensalada = ensalada;
}

const almuerzos = new Comidas("milanesas", "asado", "pizzas");
console.log(almuerzos);

//!

//Menú:

function Menu(desayuno, almuerzo, postre, merienda, cena) {
  this.desayuno = desayuno;
  this.almuerzo = almuerzo;
  this.postre = postre;
  this.merienda = merienda;
  this.cena = cena;
}

const menu1 = new Menu(
  "Cortado con 2 medialunas",
  "Milanesas con papas fritas",
  "Brownie con una bocha de helado",
  "Jugo de naranja con un tostado de jamón y queso",
  "Pizza con gaseosa"
);
console.log(menu1);
