function adjustIframeHeight() {
    const iframe = document.getElementById("myIframe"); // Replace "myIframe" with the ID of your iframe
    if (iframe) {
        iframe.style.height = iframe.contentWindow.document.body.scrollHeight + "px";
    }
}

// Call the function when the iframe is loaded and when the window is resized
window.onload = adjustIframeHeight;
window.onresize = adjustIframeHeight;
