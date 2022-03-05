
export function validate (input) {
  let errors = {} ;

  if (!input.name.trim()) {
    errors.name = 'Name is required' ;
  } else if (input.name.length < 4 ) {
    errors.name = 'Name should have length of at least 4 characters'
  } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(input.name.trim())) {
    errors.name = 'Name should contain leters and spaces only'
  }

  if (!input.hp) {
    errors.hp = 'Hp is required' ;
  } else if ( Number(input.hp)<= 0 || Number(input.hp) > 60     ) {
    errors.hp = 'HP should be a number between 1 and 60'
  }
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
  } else if (!/^(ftp|http|https):[^ "]+$/.test(input.img.trim())){
    errors.img = 'img should be a url '
  }

  return errors ;
};
