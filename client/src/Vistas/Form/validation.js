export const validation = (datos) => {
  let errors = [];
  const nameRegex = /^[a-zA-Z]+$/;
  const statsRegex = /^\d{1,3}$/;

  if (!datos.name) errors.name = "Debe ingresar un nombre";
  if (!datos.image) errors.image = "Debe ingresar una imagen";
  if (!datos.hp) errors.ps = "Debe ingresar los puntos de vida";
  if (!datos.atk) errors.atk = "Debe ingresar los puntos de ataque";
  if (!datos.def) errors.def = "Debe ingresar los puntos de defensa";
  if (datos.types.length == 0)
    errors.types = "Debe seleccionar un tipo de pokemon";

  if (!nameRegex.test(datos.name))
    errors.name = `El ${errors.name}Debe contener letras`;

  if (datos.name.length > 15)
    errors.name = "Debe tener maximo 15 caracteres";

  if (!statsRegex.test(datos.hp))
    errors.hp = "Debe ser numeros, hasta 3 digitos";
  if (!statsRegex.test(datos.atk))
    errors.atk = "Debe ser numeros, hasta 3 digitos";
  if (!statsRegex.test(datos.def))
    errors.def = "Debe ser numeros, hasta 3 digitos";
  if (!statsRegex.test(datos.vel))
    errors.vel = "Debe ser numeros, hasta 3 digitos";
  if (!statsRegex.test(datos.height))
    errors.height = "Debe ser numeros, hasta 3 digitos";
  if (!statsRegex.test(datos.weight))
    errors.weight = "Debe ser numeros, hasta 3 digitos";

  if (!/\.(jpeg|jpg|gif|png)$/.test(datos.image))
    errors.image =
      "Debe ser una URL de imagen valida (jpeg, jpg, gif, png)";

  if (!/^(ftp|http|https):\/\/[^ "]+$/.test(datos.image))
    errors.image = "Debe ser una URL de imagen valida";

  return errors;
};
