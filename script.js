function downloadHTML() {
    var htmlContent = "<html><head><title>Minha Página HTML</title></head><body><h1>Minha Página</h1><p>Conteúdo da minha página.</p></body></html>";
    var blob = new Blob([htmlContent], { type: 'text/html' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = 'pag1.html';
    a.click();
    URL.revokeObjectURL(url);
}
