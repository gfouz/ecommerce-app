export function fetchPdf() {
  fetch('pdf/curriculum.pdf').then((response) => {
    response.blob().then((blob) => {
      const fileURL = window.URL.createObjectURL(blob);
      let alink = document.createElement('a');
      alink.href = fileURL;
      alink.download = 'curriculum.pdf';
      alink.click();
    });
  });
}
