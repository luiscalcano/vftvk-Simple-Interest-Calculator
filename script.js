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

    document.getElementById("result").innerHTML = "if you deposit <mark>"+principal+"</mark>,<br> at an interest of <mark>"+rate+"%</mark>, <br> you will receive an amount of <mark>"+interest+"</mark>, <br> in the year <mark>"+year+"</mark>";
}

function updateRate() {
    var rateVal = document.getElementById("rate").value;

    document.getElementById("rate_val").innerText = rateVal+"%";
}
