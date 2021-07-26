$('button').click(function() 
{
  var conteudo = $('#content').val();
  var GoogleCharts = 'https://chart.googleapis.com/chart?chs=500x500&cht=qr&chl=';
  var imagemQRCode = GoogleCharts + conteudo;
  $('#imageQRCode').attr('src', imagemQRCode);
});	

let btnDownload = document.querySelector('#download');
let img = document.querySelector('#imageQRCode');

btnDownload.addEventListener('click', () => {
  let imgPath = img.getAttribute('src');
  let fileName = 'your_qr.png';

  saveAs(imgPath, fileName);
});

/* (caso der problema no download do QR apagar a variável local title
  e em filename substituir para 'your_qr.png') */