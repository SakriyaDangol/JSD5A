var fail = 'looser';

function getGrade(score) {
    let pass = 'winner';
    if (score > 0 && score <= 5){
        return fail;
    } else if (score > 25 && score <= 30){
        return pass;
    }
  }
  
  console.log(getGrade(26));