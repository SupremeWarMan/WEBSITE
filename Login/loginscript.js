(function() {

    var pl = "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";
    
    var submitPass = document.getElementById('submitPass');
    var passEl = document.getElementById('pass');
    var invalidPassEl = document.getElementById('invalidPass');
    var trycatcherror = document.getElementById('trycatcherror');
    var successEl = document.getElementById('success');
    var contentFrame = document.getElementById('contentFrame');
    
    // Sanity checks

    if (pl === "") {
        submitPass.disabled = true;
        passEl.disabled = true;
        alert("This page is meant to be used with the encryption tool. It doesn't work standalone.");
        return;
    }

    if (!isSecureContext) {
        document.querySelector("#passArea").style.display = "none";
        document.querySelector("#securecontext").style.display = "block";
        return;
    }

    if (!crypto.subtle) {
        document.querySelector("#passArea").style.display = "none";
        document.querySelector("#nocrypto").style.display = "block";
        return;
    }
    
    function str2ab(str) {
        var ustr = atob(str);
        var buf = new ArrayBuffer(ustr.length);
        var bufView = new Uint8Array(buf);
        for (var i=0, strLen=ustr.length; i < strLen; i++) {
            bufView[i] = ustr.charCodeAt(i);
        }
        return bufView;
    }

    async function deriveKey(salt, password) {
        const encoder = new TextEncoder()
        const baseKey = await crypto.subtle.importKey(
            'raw',
            encoder.encode(password),
            'PBKDF2',
            false,
            ['deriveKey'],
        )
        return await crypto.subtle.deriveKey(
            { name: 'PBKDF2', salt, iterations: 100000, hash: 'SHA-256' },
            baseKey,
            { name: 'AES-GCM', length: 256 },
            true,
            ['decrypt'],
        )
    }
    
    async function doSubmit(evt) {
        submitPass.disabled = true;
        passEl.disabled = true;

        let iv, ciphertext, key;
        
        try {
            var unencodedPl = str2ab(pl);

            const salt = unencodedPl.slice(0, 32)
            iv = unencodedPl.slice(32, 32 + 16)
            ciphertext = unencodedPl.slice(32 + 16)

            key = await deriveKey(salt, passEl.value);
        } catch (e) {
            trycatcherror.style.display = "inline";
            console.error(e);
            return;
        }

        try {
            const decryptedArray = new Uint8Array(
                await crypto.subtle.decrypt({ name: 'AES-GCM', iv }, key, ciphertext)
            );

            let decrypted = new TextDecoder().decode(decryptedArray);

            if (decrypted === "") throw "No data returned";

            const basestr = '<base href="." target="_top">';
            const anchorfixstr = 
                    Array.from(document.links).forEach((anchor) => {
                        const href = anchor.getAttribute("href");
                        if (href.startsWith("#")) {
                            anchor.addEventListener("click", function(e) {
                                e.preventDefault();
                                const targetId = this.getAttribute("href").substring(1);
                                const targetEl = document.getElementById(targetId);
                                targetEl.scrollIntoView();
                            });
                        }
                    });
        
            
            // Set default iframe link targets to _top so all links break out of the iframe
            if (decrypted.includes("<head>")) decrypted = decrypted.replace("<head>", "<head>" + basestr);
            else if (decrypted.includes("<!DOCTYPE html>")) decrypted = decrypted.replace("<!DOCTYPE html>", "<!DOCTYPE html>" + basestr);
            else decrypted = basestr + decrypted;

            // Fix fragment links
            if (decrypted.includes("</body>")) decrypted = decrypted.replace("</body>", anchorfixstr + '</body>');
            else if (decrypted.includes("</html>")) decrypted = decrypted.replace("</html>", anchorfixstr + '</html>');
            else decrypted = decrypted + anchorfixstr;
            
            contentFrame.srcdoc = decrypted;
            
            successEl.style.display = "inline";
            setTimeout(function() {
                dialogWrap.style.display = "none";
            }, 1000);
        } catch (e) {
            invalidPassEl.style.display = "inline";
            passEl.value = "";
            submitPass.disabled = false;
            passEl.disabled = false;
            console.error(e);
            return;
        }
    }
    
    submitPass.onclick = doSubmit;
    passEl.onkeypress = function(e){
        if (!e) e = window.event;
        var keyCode = e.keyCode || e.which;
        invalidPassEl.style.display = "none";
        if (keyCode == '13'){
          // Enter pressed
          doSubmit();
          return false;
        }
    }
})();