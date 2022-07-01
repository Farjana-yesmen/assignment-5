function areaCal(type,val1,val2){
    let shape='';
    let area='';
    switch(type){
        case 'r':
            shape='rectangle';
            area=(val1*val2);
            break;
        case 's':
            shape='square';
            area=(val1*val1);
            break; 
        case 't':
            shape='trigle';
            area=(.5*val1*val2);
            break;  
        case 'c':
            shape='circle';
            area=(3.1416*val1*val1);
            break;  
     
    }
    console.log(`the area of ${shape} is ${area}`);
}