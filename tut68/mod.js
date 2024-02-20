console.log("This is module");

function average(arr){
    let sum =0;
        arr.forEach(element => {
            sum += element;
        });
        return sum/arr.lenth;
    }

    // module.exports = average;

    module.exports = {
     avg: average,
     name:"MSP",
     repo: "Github"
    }