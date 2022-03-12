
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
  } else if (Number(input.attack) < 0){
    errors.attack = `Attack can't be lower than 0`
  } ;
  if (!input.defense) {
    errors.defense = 'Defense is required' ;
  } else if (Number(input.defense)< 0){
    errors.defense = `Defense can't be lower than 0`
  } ;
  if (!input.speed) {
    errors.speed = 'Speed is required' ;
  } else if (Number(input.speed)< 0){
    errors.speed = `Speed can't be lower than 0`
  } ;
  if (!input.height) {
    errors.height = 'Height is required' ;
  } else if (Number(input.height)< 0){
    errors.height = `Height can't be lower than 0`
  } ;
  if (!input.weight) {
    errors.weight = 'Weight is required' ;
  } else if (Number(input.weight)< 0){
    errors.weight = `Weight can't be lower than 0`
  } ;
  if (!input.img) {
    errors.img = 'Img is required' ;
  } else if (!/^(ftp|http|https):[^ "]+$/.test(input.img.trim())){
    errors.img = 'Img should be a url '
  }

  return errors ;
};
