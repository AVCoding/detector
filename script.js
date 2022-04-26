
$(document).ready(async function(){
// const barcodeDetector = new BarcodeDetector();

	// берём любое изображение
	var img = document.getElementById('myImg');

	// //создаём <canvas> того же размера
	// var canvas = document.getElementById('myCanvas');
	// // canvas.width = img.clientWidth;
	// // canvas.height = img.clientHeight; 
	// var context = canvas.getContext('2d');
	// // копируем изображение в  canvas (метод позволяет вырезать часть изображения)
	// context.drawImage(img, 0, 0);

	const barcodeDetector = new BarcodeDetector();
	// const barcodes = await barcodeDetector.detect(img);
	var barcodes;
	for (var i = 0; i < 10; i++) {
		try {
			barcodes = await barcodeDetector.detect(img);
			console.log(barcodes);
		} catch (e) {
		  console.log('Barcode detection failed:', e);
		}
	}
	
	// try {
	// 	let blob = new Blob([img], {type: 'data:image/png'});

	// 	console.log(blob);

	//   	let barcodes =  await barcodeDetector.detect(blob);

	// 	console.log(barcodes);


	// } catch (e) {
	//  // if the imageElement is invalid, the DOMException will be thrown
	//   console.error('Barcode detection failed:', e);
	// }


	// canvas.toBlob(function(blob) {
	// 	console.log(blob);
	// }, 'image/png');


});















// window.onload = () => {
// 			  detect();
// 			};

// 			async function detect() {
// 			  const barcodeDetector = new BarcodeDetector();
// 			  const list = document.getElementById("barcode-list");
// 			  let itemsFound = [];
// 			  const mediaStream = await navigator.mediaDevices.getUserMedia({
// 			    video: { facingMode: "environment" }
// 			  });

// 			  const video = document.createElement("video");
// 			  video.srcObject = mediaStream;
// 			  video.autoplay = true;

// 			  list.before(video);

// 			  function render() {
// 			    barcodeDetector
// 			      .detect((video) => {
// 			      	console.log(video);
// 			      })
// 			      .then((barcodes) => {
// 			        barcodes.forEach((barcode) => {
// 			          if (!itemsFound.includes(barcode.rawValue)) {
// 			            itemsFound.push(barcode.rawValue);
// 			            const li = document.createElement("li");
// 			            li.innerHTML = barcode.rawValue;
// 			            list.appendChild(li);
// 			          }
// 			        });
// 			      })
// 			      .catch(console.error);
// 			  }

// 			  (function renderLoop() {
// 			    requestAnimationFrame(renderLoop);
// 			    render();
// 			  })();
// 			}

