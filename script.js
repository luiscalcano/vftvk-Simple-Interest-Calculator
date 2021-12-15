function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    if (principal <= 0) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return false
    }

    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);

    document.getElementById("result").innerHTML = "if you deposit <u><b>"+principal+"</b></u>,<br> at an interest of <u><b>"+rate+"%</b></u>, <br> you will receive an amount of <u><b>"+interest+"</b></u>, <br> in the year <u><b>"+year+"</b></u>";
}

function updateRate() {
    var rateVal = document.getElementById("rate").value;

    document.getElementById("rate_val").innerText = rateVal+"%";
}
