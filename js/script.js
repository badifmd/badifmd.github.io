$('button').click(function() 
{
  var conteudo = $('#content').val();
  var GoogleCharts = 'https://chart.googleapis.com/chart?chs=500x500&cht=qr&chl=';
  var imagemQRCode = GoogleCharts + conteudo;
  $('#imageQRCode').attr('src', imagemQRCode);
});	

let title = document.getElementById('#title');
let btnDownload = document.querySelector('#download');
let img = document.querySelector('#imageQRCode');

btnDownload.addEventListener('click', () => {
  let imgPath = img.getAttribute('src');
  let fileName = title+'.png';

  saveAs(imgPath, fileName);
});

function getFileName(str){
  return str.substring(str.lastIndexOf('/')+1);
}

/* (caso der problema no download do QR apagar a variável local title
  e em filename substituir para 'your_qr.png') */