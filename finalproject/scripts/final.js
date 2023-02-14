
function add() {
    function addUpper(n1,n2,n3,n4,n5,n6) {
        return n1+n2+n3+n4+n5+n6;
    }

    function addUpperSix() {
        var n1 = parseInt(document.querySelector('#aceg1').value);
        var n2 = parseInt(document.querySelector('#twog1').value);
        var n3 = parseInt(document.querySelector('#threeg1').value);
        var n4 = parseInt(document.querySelector('#fourg1').value);
        var n5 = parseInt(document.querySelector('#fiveg1').value);
        var n6 = parseInt(document.querySelector('#sixg1').value);
        let result = addUpper(n1,n2,n3,n4,n5,n6);
        document.querySelector('#totalscoreg1').innerHTML = result;

        if (result >= 35)
        {
            var upperBonus = 35;
            document.querySelector('#bonusupper').innerHTML = upperBonus;
        }
        else
        {
            upperBonus = 0;
            document.querySelector('#bonusupper').innerHTML = upperBonus;
        };
        document.querySelector('#totalscoreofupperg1').innerHTML = upperBonus + result;
        document.querySelector('#tug1').innerHTML = upperBonus + result;
    }
    
    function yahtzeeBonus() {
        var bonus = 0;
        var checkBox1 = document.querySelector('#yb1g1');
        var checkBox2 = document.querySelector('#yb2g1');
        var checkBox3 = document.querySelector('#yb3g1');

        if (checkBox1.checked == true){
            bonus += 100;
        }

        if (checkBox2.checked == true){
            bonus += 100;
        }

        if (checkBox3.checked == true){
            bonus += 100;
        }

        document.querySelector('#scoreper').innerHTML = bonus;
    }
    
    
    function addLower(n1,n2,n3,n4,n5,n6,n7) {
        return n1+n2+n3+n4+n5+n6+n7;
    }

    function addTotalLower() {
        var n1 = parseInt(document.querySelector('#threeofkindg1').value);
        var n2 = parseInt(document.querySelector('#fourofkindg1').value);
        var n3 = parseInt(document.querySelector('#fhg1').value);
        var n4 = parseInt(document.querySelector('#ssg1').value);
        var n5 = parseInt(document.querySelector('#lsg1').value);
        var n6 = parseInt(document.querySelector('#yg1').value);
        var n7 = parseInt(document.querySelector('#cg1').value);
        let result = addLower(n1,n2,n3,n4,n5,n6,n7);
        let bonus = parseInt(document.querySelector('#scoreper').innerHTML);
        let total = result + bonus;
        document.querySelector('#tlg1').innerHTML = total;
    }
    
    function addAll(){
        var upper = parseInt(document.querySelector('#tug1').innerHTML);
        var lower = parseInt(document.querySelector('#tlg1').innerHTML);
        var grandTotal = upper + lower;
        document.querySelector('#gtg1').innerHTML = grandTotal;
    }

    addUpperSix();
    yahtzeeBonus();
    addTotalLower();
    addAll();

}

document.querySelector('#add').addEventListener('click', add);


