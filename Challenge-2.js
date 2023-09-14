function speedGovernor(speed){
    const speedLimit=70;
    //Maximum speed is 70 km/h;
    const points=5;
    //for every 5 km/s above the speed limit,the driver earns one demerit point.
    const maxPoints=12;
    //This is the limit a driver can get (12 points) before his license is suspended.
    let demerit=Math.floor((speed-speedLimit)/points);
    //If the driver exceeds 70 km/h, we calculate the demerit points using the expression above.
    
    if (speed<=speedLimit){
        return 'Ok';
    }else if(demerit>=maxPoints){
        return 'License suspended';
    }else{
        return "Points:"+ demerit;
    }
    }console.log(speedGovernor(120));