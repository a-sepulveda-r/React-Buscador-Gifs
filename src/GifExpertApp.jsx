import React, { useState } from "react";
import { AddCategory, GifGrid } from "./components"; // barril

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Vegeta"]);

  const onAddCategory = (newCategory) => {
    console.log(newCategory);
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      {/* Titulo */}
      <h1>GifExpertApp</h1>
      {/* Input */}
      <AddCategory onNewCategory={(value) => onAddCategory(value)} />
      {/* Listado de gif */}
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
      {/* Gif item */}
    </>
  );
};

// // Importa la librería React y la función useState
// import React, { useState } from "react";

// // Importa el componente AddCategory desde el archivo "./components/AddCategory"
// import { AddCategory } from "./components/AddCategory";

// // Define el componente principal llamado GifExpertApp
// export const GifExpertApp = () => {
//   // Define el estado inicial del listado de categorías utilizando la función useState
//   const [categories, setCategories] = useState([
//     "One Punch Man",
//     "Dragon Ball",
//   ]);

//   // Define la función onAddCategory para agregar nuevas categorías al listado
//   const onAddCategory = (newCategory) => {
//     console.log(newCategory);
//     if (categories.includes(newCategory)) return;
//     setCategories([newCategory, ...categories]);
//   };

//   // Renderiza el contenido del componente principal en la pantalla
//   return (
//     <>
//       {/* Título */}
//       <h1>GifExpertApp</h1>

//       {/* Componente AddCategory */}
//       {/* Se pasa la función onAddCategory como propiedad al componente AddCategory */}
//       <AddCategory onNewCategory={(value) => onAddCategory(value)} />

//       {/* Listado de categorías */}
//       <ol>
//         {/* Se utiliza el método map para generar un elemento li por cada categoría */}
//         {/* Se utiliza la propiedad key para dar a cada elemento una clave única */}
//         {categories.map((category) => {
//           return <li key={category}>{category}</li>;
//         })}
//       </ol>
//       {/* Componente GifItem */}
//     </>
//   );
// };
