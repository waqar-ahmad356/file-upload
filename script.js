let uploadedFiles = [];


document.getElementById('fileInput').addEventListener('change', uploadFiles);


function uploadFiles(event) {
   
  const files = Array.from(event.target.files);


  uploadedFiles.push(...files)

  
  renderFileList();
  document.getElementById('fileInput').value = '';
  console.log(uploadedFiles)
}


function removeFile(index) {
  
  uploadedFiles.splice(index, 1);


  renderFileList();
  console.log(uploadedFiles)
}


function renderFileList() {
  const fileList = document.getElementById('fileList');
  fileList.innerHTML = ''; 

  uploadedFiles.forEach((file, index) => {
    
    const fileItem = document.createElement('div');
    fileItem.classList.add('file-item');

    
    const filePreview = document.createElement('div');
    if (file.type.startsWith('image/')) {
      const img = document.createElement('img');
      img.src = URL.createObjectURL(file); 
      img.alt = file.name;
      filePreview.classList.add('file-preview');
      filePreview.appendChild(img);
    }

   
    const fileName = document.createElement('span');
    fileName.textContent = file.name;

  
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.onclick = () => removeFile(index);

   
    fileItem.appendChild(filePreview);
    fileItem.appendChild(fileName);
    fileItem.appendChild(removeButton);

   
    fileList.appendChild(fileItem);
  });
}
