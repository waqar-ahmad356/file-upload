

let uploadedFiles=[];

const fileUpload=()=>{
    const fileInput=document.getElementById('fileinput');
    const files= Array.from(fileInput.files)
  // Reset file input
  fileInput.value = '';
    //add file to the array
    uploadedFiles=[...uploadedFiles,...files]
    console.log(uploadedFiles)
    renderFileList();

}

const removeFile=(index)=>{
    uploadedFiles.splice(index,1)
    renderFileList();
    console.log(uploadedFiles)
}

// Function to render file list with image preview
function renderFileList() {
    const fileList = document.getElementById('fileList');
    fileList.innerHTML = ''; // Clear existing list
  
    uploadedFiles.forEach((file, index) => {
      const fileItem = document.createElement('div');
      fileItem.className = 'file-item';
  
      const fileName = document.createElement('span');
      fileName.textContent = file.name;
  
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.onclick = () => removeFile(index);
  
      const filePreview = document.createElement('div');
      if (file.type.startsWith('image/')) {
        const img = document.createElement('img');
        img.src = URL.createObjectURL(file); // Create a preview URL for the image
        img.alt = file.name;
        img.style.maxWidth = '100px';
        img.style.maxHeight = '100px';
        img.style.marginRight = '10px';
        filePreview.appendChild(img);
      }
  
      fileItem.appendChild(filePreview);
      fileItem.appendChild(fileName);
      fileItem.appendChild(removeButton);
      fileList.appendChild(fileItem);
    });
  }