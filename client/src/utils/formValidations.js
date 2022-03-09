
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
    errors.attack = 'Attack is required' ;
  } ;
  if (!input.defense) {
    errors.defense = 'Defense is required' ;
  } ;
  if (!input.speed) {
    errors.speed = 'Speed is required' ;
  } ;
  if (!input.height) {
    errors.height = 'Height is required' ;
  } ;
  if (!input.weight) {
    errors.weight = 'Weight is required' ;
  } ;
  if (!input.img) {
    errors.img = 'Img is required' ;
  } else if (!/^(ftp|http|https):[^ "]+$/.test(input.img.trim())){
    errors.img = 'Img should be a url '
  }

  return errors ;
};
