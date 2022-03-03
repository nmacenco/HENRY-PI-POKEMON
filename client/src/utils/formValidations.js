export function validate (input) {
    let errors = {} ;
  
    if (!input.name) {
      errors.name = 'Name is required' ;
    }
    // else if (!/\S+@\S+\.\S+/.test(input.username)) {
    //   errors.username = 'Username is invalid'
    // }
    if (!input.hp) {
      errors.hp = 'Hp is required' ;
    } 
    // else if (!/(?=.*[0-9])/.test(input.password)) {
    //   errors.password = 'Password is invalid'
    // }
    return errors ;
  };