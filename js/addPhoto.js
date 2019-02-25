function addPhoto() {
  debugger
    let addPhotoInputElem = document.querySelector('.p-mentor-photo')
    addPhotoInputElem.addEventListener('change', handleFileSelect, false);
    addPhotoInputElem.click();
}

function handleFileSelect(evt) {
    var file = evt.target.files[0]; // FileList object

      // Only process image files.
      if (!file.type.match('image.*')) {
          alert('можно только фото')
      }

      var reader = new FileReader();

      // Closure to capture the file information.
      reader.onload = (function(theFile) {
        return function(e) {
          // Render thumbnail.
          var div = document.createElement('div');
          div.innerHTML = ['<img class="thumb" src="', e.target.result,
                            '" title="', theFile.name, '"/>'].join('');
          document.getElementById('list').insertBefore(div, null);
        };
      })(file);

      // Read in the image file as a data URL.
      reader.readAsDataURL(file);

      document.querySelector('.p-clear-photo').classList.toggle('p-none')
      document.querySelector('.p-add-photo').classList.toggle('p-none')
      document.querySelector('.p-photo-info').classList.toggle('p-none')
      document.querySelector('.p-photo-loaded-info-text').classList.toggle('p-none')
      document.querySelector('.p-photo-container').style.border = 'none';
      document.querySelector('.p-photo-info').innerHTML = document.getElementById('photo').value;
    }
    
    function clearPhoto () {
      debugger
        //clear file input value
        document.getElementById('photo').value = "";
        //clear photo preview
        document.querySelector('.thumb').remove();
        
        document.querySelector('.p-clear-photo').classList.toggle('p-none')
        document.querySelector('.p-add-photo').classList.toggle('p-none')
        document.querySelector('.p-photo-loaded-info-text').classList.toggle('p-none')
        document.querySelector('.p-photo-container').style.border = 'dotted 1px #51ae5a';
        document.querySelector('.p-photo-info').classList.toggle('p-none')
        document.querySelector('.p-photo-info').innerHTML = ""
    }