let personas = [
  { nombre: "Ana", edad: 22 },
  { nombre: "Luis", edad: 35 },
  { nombre: "Maria", edad: 28 },
];

let PL = personas.find(p => p.nombre === "Luis");

personas.forEach(p => console.log("mi nombre es " +p.nombre+ " y tengo " +p.edad+ " años"));
