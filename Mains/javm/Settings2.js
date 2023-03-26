function changeText1() {
    document.getElementById("t1").innerHTML = "200";
    document.getElementById("t3").innerHTML = "50";
    document.getElementById("t4").innerHTML = "";
    document.getElementById("t5").innerHTML = "";
    document.getElementById("t6").innerHTML = "";
    document.getElementById("t7").innerHTML = "Ak Gövdesi x1/Metal Yay x4";
  };

  function changeText2() {
    document.getElementById("t1").innerHTML = "";
    document.getElementById("t2").innerHTML = "";
    document.getElementById("t3").innerHTML = "15";
    document.getElementById("t4").innerHTML = "";
    document.getElementById("t5").innerHTML = "";
    document.getElementById("t6").innerHTML = "";
    document.getElementById("t7").innerHTML = "Hafif Gövdesi x1/Metal Yay x2";
  };

  function changeText3() {
    document.getElementById("t1").innerHTML = "";
    document.getElementById("t2").innerHTML = "";
    document.getElementById("t3").innerHTML = "8";
    document.getElementById("t4").innerHTML = "";
    document.getElementById("t5").innerHTML = "";
    document.getElementById("t6").innerHTML = "";
    document.getElementById("t7").innerHTML = "Hafif Gövdesi x1";
  };

  function changeText4() {
    document.getElementById("t1").innerHTML = "100";
    document.getElementById("t2").innerHTML = "";
    document.getElementById("t3").innerHTML = "10";
    document.getElementById("t4").innerHTML = "";
    document.getElementById("t5").innerHTML = "";
    document.getElementById("t6").innerHTML = "";
    document.getElementById("t7").innerHTML = "Hafif Gövdesi x1/Metal Yay x1";

  };
  
  function changeText5() {
    document.getElementById("t1").innerHTML = "";
    document.getElementById("t2").innerHTML = "";
    document.getElementById("t3").innerHTML = "10";
    document.getElementById("t4").innerHTML = "";
    document.getElementById("t5").innerHTML = "";
    document.getElementById("t6").innerHTML = "";
    document.getElementById("t7").innerHTML = "Metal Boru x3/Metal Yay x1";

  };
  
  function changeText6() {
    document.getElementById("t1").innerHTML = "";
    document.getElementById("t2").innerHTML = "";
    document.getElementById("t3").innerHTML = "60";
    document.getElementById("t4").innerHTML = "";
    document.getElementById("t5").innerHTML = "";
    document.getElementById("t6").innerHTML = "";
    document.getElementById("t7").innerHTML = "Ak Gövde x1 /Metal Yay x3/Çark x3";

  };
  
  function changeText7() {
      document.getElementById("t3").innerHTML = "20";
      document.getElementById("t1").innerHTML = "";
      document.getElementById("t2").innerHTML = "450";  
      document.getElementById("t4").innerHTML = "";
      document.getElementById("t5").innerHTML = "";
      document.getElementById("t6").innerHTML = "";
    document.getElementById("t7").innerHTML = "Ak Gövde x1/Metal Yay x1/Boru x3";
    };
    function changeText8() {
      document.getElementById("t1").innerHTML = "";
      document.getElementById("t2").innerHTML = "450";  
      document.getElementById("t3").innerHTML = "4";
      document.getElementById("t4").innerHTML = "";
      document.getElementById("t5").innerHTML = "";
      document.getElementById("t6").innerHTML = "";
      document.getElementById("t7").innerHTML = "Yarı oto Gövdesi x1 Metal Yay x1";
    };


    function changeText01() {
    document.getElementById("t1").innerHTML = "";
    document.getElementById("t2").innerHTML = "";
    document.getElementById("t3").innerHTML = "";
    document.getElementById("t4").innerHTML = "";
    document.getElementById("t5").innerHTML = "";
    document.getElementById("t6").innerHTML = "";
    document.getElementById("t7").innerHTML = "";
    document.getElementById("t8").innerHTML = "";
  };

  function changeTextxz1() {
    document.getElementById("t1").innerHTML = "";
    document.getElementById("t2").innerHTML = "100";
    document.getElementById("t4").innerHTML = "2200";
    document.getElementById("t5").innerHTML = "1000";
    document.getElementById("t6").innerHTML = "20";
    document.getElementById("t7").innerHTML = "Tekno Çöp 2x";
  };
  function changeTextxz2() {
    document.getElementById("t1").innerHTML = "";
    document.getElementById("t2").innerHTML = "";
    document.getElementById("t3").innerHTML = "";
    document.getElementById("t4").innerHTML = "1400";
    document.getElementById("t5").innerHTML = "650";
    document.getElementById("t6").innerHTML = "10";
    document.getElementById("t7").innerHTML = "Boru 2x";
  };
  function changeTextxz3() {
    document.getElementById("t1").innerHTML = "";
    document.getElementById("t3").innerHTML = "";
    document.getElementById("t2").innerHTML = "10";
    document.getElementById("t4").innerHTML = "25";
    document.getElementById("t5").innerHTML = "10";
    document.getElementById("t6").innerHTML = "";
    document.getElementById("t7").innerHTML = "";
  };
  function changeTextxz4() {
    document.getElementById("t1").innerHTML = "";
    document.getElementById("t2").innerHTML = "80";
    document.getElementById("t4").innerHTML = "480";
    document.getElementById("t3").innerHTML = "";
    document.getElementById("t5").innerHTML = "240";
    document.getElementById("t7").innerHTML = "Halat 1x";
  };
  function changeTextxz5() {
    document.getElementById("t1").innerHTML = "";
    document.getElementById("t2").innerHTML = "10";
    document.getElementById("t3").innerHTML = "";
    document.getElementById("t4").innerHTML = "10";
    document.getElementById("t5").innerHTML = "50";
    document.getElementById("t6").innerHTML = "";
    document.getElementById("t7").innerHTML = "";
  };
  function addToResult(value) {
    document.getElementById('result').value += value;
  }
  
  function clearResult() {
    document.getElementById('result').value = '';
  }
  
  function calculateResult() {
    try {
      var result = eval(document.getElementById('result').value);
      document.getElementById('result').value = result;
    } catch (error) {
      document.getElementById('result').value = 'Error';
    }
  }
  