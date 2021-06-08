var fail = 'looser';

function getGrade(score) {
    let pass = 'winner';
    if (score > 0 && score <= 25){
        return fail;
    } else if (score > 25 && score <= 50){
        return pass;
    }
  }
  
document.write(getGrade(26));