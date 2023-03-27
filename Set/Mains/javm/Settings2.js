function changeText1() {
    document.getElementById("t1").innerHTML = "200";
    document.getElementById("t2").innerHTML = "-";
    document.getElementById("t3").innerHTML = "50";
    document.getElementById("t4").innerHTML = "-";
    document.getElementById("t5").innerHTML = "-";
    document.getElementById("t6").innerHTML = "-";
    document.getElementById("t7").innerHTML = "Ak Gövde/Yay x4";
  };

  function changeText2() {
    document.getElementById("t1").innerHTML = "-";
    document.getElementById("t2").innerHTML = "-";
    document.getElementById("t3").innerHTML = "15";
    document.getElementById("t4").innerHTML = "-";
    document.getElementById("t5").innerHTML = "-";
    document.getElementById("t6").innerHTML = "-";
    document.getElementById("t7").innerHTML = "Hafif Gövde/Yay x2";
  };

  function changeText3() {
    document.getElementById("t1").innerHTML = "-";
    document.getElementById("t2").innerHTML = "-";
    document.getElementById("t3").innerHTML = "8";
    document.getElementById("t4").innerHTML = "-";
    document.getElementById("t5").innerHTML = "-";
    document.getElementById("t6").innerHTML = "-";
    document.getElementById("t7").innerHTML = "Hafif Gövde";
  };

  function changeText4() {
    document.getElementById("t1").innerHTML = "100";
    document.getElementById("t2").innerHTML = "-";
    document.getElementById("t3").innerHTML = "10";
    document.getElementById("t4").innerHTML = "-";
    document.getElementById("t5").innerHTML = "-";
    document.getElementById("t6").innerHTML = "-";
    document.getElementById("t7").innerHTML = "Hafif Gövde/Yay";

  };
  
  function changeText5() {
    document.getElementById("t1").innerHTML = "-";
    document.getElementById("t2").innerHTML = "-";
    document.getElementById("t3").innerHTML = "10";
    document.getElementById("t4").innerHTML = "-";
    document.getElementById("t5").innerHTML = "-";
    document.getElementById("t6").innerHTML = "-";
    document.getElementById("t7").innerHTML = "Boru x3/Yay";

  };
  
  function changeText6() {
    document.getElementById("t1").innerHTML = "-";
    document.getElementById("t2").innerHTML = "-";
    document.getElementById("t3").innerHTML = "60";
    document.getElementById("t4").innerHTML = "-";
    document.getElementById("t5").innerHTML = "-";
    document.getElementById("t6").innerHTML = "-";
    document.getElementById("t7").innerHTML = "Ak Gövde/Yay x3/Çark x3";

  };
  
  function changeText7() {
      document.getElementById("t3").innerHTML = "20";
      document.getElementById("t1").innerHTML = "-";
      document.getElementById("t2").innerHTML = "450";  
      document.getElementById("t4").innerHTML = "-";
      document.getElementById("t5").innerHTML = "-";
      document.getElementById("t6").innerHTML = "-";
    document.getElementById("t7").innerHTML = "Ak Gövde/Yay/Boru x3";
    };
    function changeText8() {
      document.getElementById("t1").innerHTML = "-";
      document.getElementById("t2").innerHTML = "450";  
      document.getElementById("t3").innerHTML = "4";
      document.getElementById("t4").innerHTML = "-";
      document.getElementById("t5").innerHTML = "-";
      document.getElementById("t6").innerHTML = "-";
      document.getElementById("t7").innerHTML = "Yarı oto Gövde/Yay";
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
    document.getElementById("t1").innerHTML = "-";
    document.getElementById("t2").innerHTML = "100";
    document.getElementById("t4").innerHTML = "2200";
    document.getElementById("t5").innerHTML = "1000";
    document.getElementById("t6").innerHTML = "20";
    document.getElementById("t7").innerHTML = "Tekno Çöp 2x";
  };
  function changeTextxz2() {
    document.getElementById("t1").innerHTML = "-";
    document.getElementById("t2").innerHTML = "-";
    document.getElementById("t3").innerHTML = "-";
    document.getElementById("t4").innerHTML = "1400";
    document.getElementById("t5").innerHTML = "650";
    document.getElementById("t6").innerHTML = "10";
    document.getElementById("t7").innerHTML = "Boru 2x";
  };
  function changeTextxz3() {
    document.getElementById("t1").innerHTML = "-";
    document.getElementById("t3").innerHTML = "-";
    document.getElementById("t2").innerHTML = "10";
    document.getElementById("t4").innerHTML = "25";
    document.getElementById("t5").innerHTML = "10";
    document.getElementById("t6").innerHTML = "-";
    document.getElementById("t7").innerHTML = "-";
  };
  function changeTextxz4() {
    document.getElementById("t1").innerHTML = "-";
    document.getElementById("t2").innerHTML = "80";
    document.getElementById("t4").innerHTML = "480";
    document.getElementById("t3").innerHTML = "-";
    document.getElementById("t5").innerHTML = "240";
    document.getElementById("t7").innerHTML = "Halat";
  };
  function changeTextxz5() {
    document.getElementById("t1").innerHTML = "-";
    document.getElementById("t2").innerHTML = "10";
    document.getElementById("t3").innerHTML = "-";
    document.getElementById("t4").innerHTML = "10";
    document.getElementById("t5").innerHTML = "50";
    document.getElementById("t6").innerHTML = "-";
    document.getElementById("t7").innerHTML = "-";
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



  function degistirMargin1() {
    var metin = document.querySelector(".txt");
    metin.style.marginLeft = "45px";
    var metin = document.querySelector(".txt2");
    metin.style.marginLeft = "92px";
    var metin = document.querySelector(".txt3");
    metin.style.marginLeft = "110px";
    var metin = document.querySelector(".txt4");
    metin.style.marginLeft = "100px";
    var metin = document.querySelector(".txt5");
    metin.style.marginLeft = "105px";
    var metin = document.querySelector(".txt6");
    metin.style.marginLeft = "105px";
    var metin = document.querySelector(".txtx");
    metin.style.marginLeft = "35px";

    }

    function degistirMargin2() {
      var metin = document.querySelector(".txt");
      metin.style.marginLeft = "60px";
      var metin = document.querySelector(".txt2");
      metin.style.marginLeft = "100px";
      var metin = document.querySelector(".txt3");
      metin.style.marginLeft = "110px";
      var metin = document.querySelector(".txt4");
      metin.style.marginLeft = "100px";
      var metin = document.querySelector(".txt5");
      metin.style.marginLeft = "105px";
      var metin = document.querySelector(".txt6");
      metin.style.marginLeft = "105px";
      var metin = document.querySelector(".txtx");
      metin.style.marginLeft = "15px";
      }

      function degistirMargin3() {
        var metin = document.querySelector(".txt");
        metin.style.marginLeft = "60px";
        var metin = document.querySelector(".txt2");
        metin.style.marginLeft = "100px";
        var metin = document.querySelector(".txt3");
        metin.style.marginLeft = "110px";
        var metin = document.querySelector(".txt4");
        metin.style.marginLeft = "105px";
        var metin = document.querySelector(".txt5");
        metin.style.marginLeft = "105px";
        var metin = document.querySelector(".txt6");
        metin.style.marginLeft = "105px";
        var metin = document.querySelector(".txtx");
        metin.style.marginLeft = "55px";
        }

        function degistirMargin4() {
          var metin = document.querySelector(".txt");
          metin.style.marginLeft = "40px";
          var metin = document.querySelector(".txt2");
          metin.style.marginLeft = "100px";
          var metin = document.querySelector(".txt3");
          metin.style.marginLeft = "110px";
          var metin = document.querySelector(".txt4");
          metin.style.marginLeft = "100px";
          var metin = document.querySelector(".txt5");
          metin.style.marginLeft = "105px";
          var metin = document.querySelector(".txt6");
          metin.style.marginLeft = "105px";
          var metin = document.querySelector(".txtx");
          metin.style.marginLeft = "20px";
          }

          function degistirMargin5() {
            var metin = document.querySelector(".txt");
            metin.style.marginLeft = "60px";
            var metin = document.querySelector(".txt2");
            metin.style.marginLeft = "100px";
            var metin = document.querySelector(".txt3");
            metin.style.marginLeft = "110px";
            var metin = document.querySelector(".txt4");
            metin.style.marginLeft = "100px";
            var metin = document.querySelector(".txt5");
            metin.style.marginLeft = "105px";
            var metin = document.querySelector(".txt6");
            metin.style.marginLeft = "105px";
            var metin = document.querySelector(".txtx");
            metin.style.marginLeft = "55px";
            }
            function degistirMargin6() {
              var metin = document.querySelector(".txt");
              metin.style.marginLeft = "60px";
              var metin = document.querySelector(".txt2");
              metin.style.marginLeft = "100px";
              var metin = document.querySelector(".txt3");
              metin.style.marginLeft = "110px";
              var metin = document.querySelector(".txt4");
              metin.style.marginLeft = "100px";
              var metin = document.querySelector(".txt5");
              metin.style.marginLeft = "105px";
              var metin = document.querySelector(".txt6");
              metin.style.marginLeft = "105px";
              var metin = document.querySelector(".txtx");
              metin.style.marginLeft = "-35px";
              }
              function degistirMargin7() {
                var metin = document.querySelector(".txt");
                metin.style.marginLeft = "60px";
                var metin = document.querySelector(".txt2");
                metin.style.marginLeft = "90px";
                var metin = document.querySelector(".txt3");
                metin.style.marginLeft = "90px";
                var metin = document.querySelector(".txt4");
                metin.style.marginLeft = "100px";
                var metin = document.querySelector(".txt5");
                metin.style.marginLeft = "105px";
                var metin = document.querySelector(".txt6");
                metin.style.marginLeft = "105px";
                var metin = document.querySelector(".txtx");
                metin.style.marginLeft = "0px";
                }
                function degistirMargin8() {
                  var metin = document.querySelector(".txt");
                  metin.style.marginLeft = "60px";
                  var metin = document.querySelector(".txt2");
                  metin.style.marginLeft = "100px";
                  var metin = document.querySelector(".txt3");
                  metin.style.marginLeft = "100px";
                  var metin = document.querySelector(".txt4");
                  metin.style.marginLeft = "100px";
                  var metin = document.querySelector(".txt5");
                  metin.style.marginLeft = "105px";
                  var metin = document.querySelector(".txt6");
                  metin.style.marginLeft = "105px";
                  var metin = document.querySelector(".txtx");
                  metin.style.marginLeft = "5px";
                  }
                  function degistirMargin9() {
                    var metin = document.querySelector(".txt");
                    metin.style.marginLeft = "60px";
                    var metin = document.querySelector(".txt2");
                    metin.style.marginLeft = "100px";
                    var metin = document.querySelector(".txt3");
                    metin.style.marginLeft = "90px";
                    var metin = document.querySelector(".txt4");
                    metin.style.marginLeft = "90px";
                    var metin = document.querySelector(".txt5");
                    metin.style.marginLeft = "80px";
                    var metin = document.querySelector(".txt6");
                    metin.style.marginLeft = "80px";
                    var metin = document.querySelector(".txtx");
                    metin.style.marginLeft = "45px";  
                    }
                    function degistirMargin10() {
                      var metin = document.querySelector(".txt");
                      metin.style.marginLeft = "60px";
                      var metin = document.querySelector(".txt2");
                      metin.style.marginLeft = "105px";
                      var metin = document.querySelector(".txt3");
                      metin.style.marginLeft = "105px";
                      var metin = document.querySelector(".txt4");
                      metin.style.marginLeft = "100px";
                      var metin = document.querySelector(".txt5");
                      metin.style.marginLeft = "75px";
                      var metin = document.querySelector(".txt6");
                      metin.style.marginLeft = "90px";
                      var metin = document.querySelector(".txtx");
                      metin.style.marginLeft = "75px";
                      }
                      function degistirMargin11() {
                        var metin = document.querySelector(".txt");
                        metin.style.marginLeft = "60px";
                        var metin = document.querySelector(".txt2");
                        metin.style.marginLeft = "100px";
                        var metin = document.querySelector(".txt3");
                        metin.style.marginLeft = "110px";
                        var metin = document.querySelector(".txt4");
                        metin.style.marginLeft = "100px";
                        var metin = document.querySelector(".txt5");
                        metin.style.marginLeft = "95px";
                        var metin = document.querySelector(".txt6");
                        metin.style.marginLeft = "95px";
                        var metin = document.querySelector(".txtx");
                        metin.style.marginLeft = "105px";
                        }
                        function degistirMargin12() {
                          var metin = document.querySelector(".txt");
                          metin.style.marginLeft = "60px";
                          var metin = document.querySelector(".txt2");
                          metin.style.marginLeft = "100px";
                          var metin = document.querySelector(".txt3");
                          metin.style.marginLeft = "110px";
                          var metin = document.querySelector(".txt4");
                          metin.style.marginLeft = "90px";
                          var metin = document.querySelector(".txt5");
                          metin.style.marginLeft = "85px";
                          var metin = document.querySelector(".txt6");
                          metin.style.marginLeft = "90px";
                          var metin = document.querySelector(".txtx");
                          metin.style.marginLeft = "85px";
                          }
                          function degistirMargin13() {
                            var metin = document.querySelector(".txt");
                            metin.style.marginLeft = "60px";
                            var metin = document.querySelector(".txt2");
                            metin.style.marginLeft = "100px";
                            var metin = document.querySelector(".txt3");
                            metin.style.marginLeft = "110px";
                            var metin = document.querySelector(".txt4");
                            metin.style.marginLeft = "100px";
                            var metin = document.querySelector(".txt5");
                            metin.style.marginLeft = "90px";
                            var metin = document.querySelector(".txt6");
                            metin.style.marginLeft = "93px";
                            var metin = document.querySelector(".txtx");
                            metin.style.marginLeft = "105px";
                            }




  