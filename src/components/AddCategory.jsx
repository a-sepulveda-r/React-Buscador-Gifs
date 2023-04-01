import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("One Punch");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim().length <= 1) return;

    onNewCategory(inputValue.trim());
    setInputValue("");
  };

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};

// // Importa la función useState
// import { useState } from "react";

// // Define el componente AddCategory
// export const AddCategory = ({ onNewCategory }) => {
//   // Define el estado inicial del valor del input
//   const [inputValue, setInputValue] = useState("One Punch");

//   // Define la función onInputChange para actualizar el valor del input
//   const onInputChange = ({ target }) => {
//     setInputValue(target.value);
//   };

//   // Define la función onSubmit para manejar el envío del formulario
//   const onSubmit = (event) => {
//     event.preventDefault();

//     // Verifica que el valor del input tenga una longitud mayor a 1
//     if (inputValue.trim().length <= 1) return;

//     // Llama a la función onNewCategory pasada como propiedad y le pasa el valor del input como argumento
//     onNewCategory(inputValue.trim());

//     // Resetea el valor del input a una cadena vacía
//     setInputValue("");
//   };

//   // Renderiza el formulario en la pantalla
//   return (
//     <form onSubmit={(event) => onSubmit(event)}>
//       {/* Input controlado que utiliza el estado del valor del input como valor y la función onInputChange para actualizar el estado */}
//       <input
//         type="text"
//         placeholder="Buscar Gifs"
//         value={inputValue}
//         onChange={onInputChange}
//       />
//     </form>
//   );
// };
