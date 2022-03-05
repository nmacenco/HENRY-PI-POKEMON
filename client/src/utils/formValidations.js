// export function validate (input) {
//     let errors = {} ;
  
//     if (!input.name) {
//       errors.name = 'Name is required' ;
//     } else if (input.name.length < 4 ) {
//       errors.name = 'El nombre debe superar los 4 caracteres'
//     };

//     if (!input.hp) {
//       errors.hp = 'Hp is required' ;
//     } ;
//     if (!input.attack) {
//       errors.attack = 'attack is required' ;
//     } ;
//     if (!input.defense) {
//       errors.defense = 'defense is required' ;
//     } ;
//     if (!input.speed) {
//       errors.speed = 'speed is required' ;
//     } ;
//     if (!input.height) {
//       errors.height = 'height is required' ;
//     } ;
//     if (!input.weight) {
//       errors.weight = 'weight is required' ;
//     } ;
//     if (!input.img) {
//       errors.img = 'img is required' ;
//     } ;

//     return errors ;
//   };

export function validate (input) {
  let errors = {} ;

  if (input.name.length < 1) {
    errors.name = 'Name is required' ;
  } else if (input.name.length < 4 ) {
    errors.name = 'El nombre debe superar los 4 caracteres'
  };

  if (!input.hp) {
    errors.hp = 'Hp is required' ;
  } ;
  if (!input.attack) {
    errors.attack = 'attack is required' ;
  } ;
  if (!input.defense) {
    errors.defense = 'defense is required' ;
  } ;
  if (!input.speed) {
    errors.speed = 'speed is required' ;
  } ;
  if (!input.height) {
    errors.height = 'height is required' ;
  } ;
  if (!input.weight) {
    errors.weight = 'weight is required' ;
  } ;
  if (!input.img) {
    errors.img = 'img is required' ;
  } ;

  return errors ;
};
