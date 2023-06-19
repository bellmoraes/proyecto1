
$(function(){
  $(".clpBtn").prop('disabled', true)
  var strnt = $("#cardPrice").text()
  var strnt2 = $("#cardPrice2").text()
  var strnt3 = $("#cardPrice3").text()
  var strnt4 = $("#cardPrice4").text()
  var strnt5 = $("#cardPrice5").text()
  var strnt6 = $("#cardPrice6").text()
  
  $(".dolarBtn").click( function(){
    $(".dolarBtn").prop('disabled', true)
    $.getJSON('https://mindicador.cl/api', function(data) {
      var dolarInd = data;
      var precio1 = parseInt(strnt)
      var precio2 = parseFloat(dolarInd.dolar.valor)
      var res = precio1 / precio2
      let fl = res.toFixed(2)
      var dolar = parseFloat(fl)
      $("#cardPrice").text(dolar)

      var precio11 = parseInt(strnt2)
      var res = precio11 / precio2
      let f2 = res.toFixed(2)
      var dolar = parseFloat(f2)
      $("#cardPrice2").text(dolar)

      var precio11 = parseInt(strnt3)
      var res = precio11 / precio2
      let f3 = res.toFixed(2)
      var dolar = parseFloat(f3)
      $("#cardPrice3").text(dolar)

      var precio11 = parseInt(strnt4)
      var res = precio11 / precio2
      let f4 = res.toFixed(2)
      var dolar = parseFloat(f4)
      $("#cardPrice4").text(dolar)
      
      var precio11 = parseInt(strnt5)
      var res = precio11 / precio2
      let f5 = res.toFixed(2)
      var dolar = parseFloat(f5)
      $("#cardPrice5").text(dolar)

      var precio11 = parseInt(strnt6)
      var res = precio11 / precio2
      let f6 = res.toFixed(2)
      var dolar = parseFloat(f6)
      $("#cardPrice6").text(dolar)

      $(".clpBtn").prop('disabled', false)
      
    }).fail(function() {
      console.log('Error al consumir la API!');
    });
  })

  $('.clpBtn').click(function(){
    $(".clpBtn").prop('disabled', true)
    console.log(strnt + '' + typeof(strnt))
    $('#cardPrice').text(strnt)
    $('#cardPrice2').text(strnt2)
    $('#cardPrice3').text(strnt3)
    $('#cardPrice4').text(strnt4)
    $('#cardPrice5').text(strnt5)
    $('#cardPrice6').text(strnt6)

    $(".dolarBtn").prop('disabled', false)
  })

})