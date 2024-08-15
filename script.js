function aveSpd(upTime, upSpd, downSpd) {
  // your code here
	 const upDistance = (upTime / 60) * upSpd;

    // Calculate the time spent downhill, which is the same distance as uphill
    const downTime = (upDistance / downSpd) * 60;

    // Calculate the total distance traveled
    const totalDistance = upDistance * 2;

    // Calculate the total time spent
    const totalTime = upTime + downTime;

    // Calculate the average speed
    const averageSpeed = totalDistance / (totalTime / 60);

    return averageSpeed;
}

// Do not change the code below
const upTime = prompt("Enter upTime: ");
const downTime = prompt("Enter downTime: ");
const downSpd = prompt("Enter downSpd: ");

alert(aveSpd(upTime, downTime, downSpd));
