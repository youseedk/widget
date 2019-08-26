// content.js

chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.message === "clicked_browser_action") {

      /******************* BEGIN ******************/

      //Create templates
      const templateHead = `<title>&#x1F527; ${document.title}</title>`
      const templateBody = `
          <aside id="widget">
             <button type="button" id="featureHtmlValidator" class="widget-button">
               <figure class="icon-wrapper">
                 <svg width="100%" height="100%" viewbox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fill-rule="nonzero"><path d="M56.62 23.66L33.85 46.42l-10.67-9.76a4 4 0 10-5.4 5.9l13.5 12.35a4 4 0 005.53-.12l25.46-25.47a4.002 4.002 0 00-5.66-5.66h.01z"/><path d="M40 .11C17.97.11.11 17.97.11 40S17.97 79.89 40 79.89 79.89 62.03 79.89 40C79.868 17.979 62.021.132 40 .11zm0 71.78C22.388 71.89 8.11 57.612 8.11 40 8.11 22.388 22.388 8.11 40 8.11c17.612 0 31.89 14.278 31.89 31.89C71.873 57.606 57.606 71.873 40 71.89z"/></g></svg>
               </figure>
               <span>HTML Validator</span>
            </button>

            <button type="button" id="featureBemValidator" class="widget-button">
              <figure class="icon-wrapper">
                <svg width="100%" height="100%" viewbox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fill-rule="nonzero"><path d="M56.62 23.66L33.85 46.42l-10.67-9.76a4 4 0 10-5.4 5.9l13.5 12.35a4 4 0 005.53-.12l25.46-25.47a4.002 4.002 0 00-5.66-5.66h.01z"/><path d="M40 .11C17.97.11.11 17.97.11 40S17.97 79.89 40 79.89 79.89 62.03 79.89 40C79.868 17.979 62.021.132 40 .11zm0 71.78C22.388 71.89 8.11 57.612 8.11 40 8.11 22.388 22.388 8.11 40 8.11c17.612 0 31.89 14.278 31.89 31.89C71.873 57.606 57.606 71.873 40 71.89z"/></g></svg>
              </figure>
              <span>BEM Validator</span>
            </button>
             
             <div class="ys-toggle-switch">
               <figure class="icon-wrapper">
                 <svg width="100%" height="100%" viewbox="0 0 66 66" xmlns="http://www.w3.org/2000/svg"><path d="M21.334 66h2V44.666h19.332V66h2V44.666H66v-2H44.666V23.334H66v-2H44.666V0h-2v21.334H23.334V0h-2v21.334H0v2h21.334v19.332H0v2h21.334V66zm2-42.666h19.332v19.332H23.334V23.334z" fill="#FFF" fill-rule="nonzero"/></svg>
               </figure>   
               <input type="checkbox" id="featureEditText" class="ys-toggle-switch__control" />
              <label for="featureEditText" class="ys-toggle-switch__label">Grid</label>
            </div>
          </aside>
          <iframe id="content" src="#" loading="eager" />
        `
      //Append templates to dom
      document.head.innerHTML = templateHead;
      document.body.classList.add('widget-body');
      document.body.innerHTML = templateBody;

      //Set iframe source
      const iframe = document.querySelector("#content");
      iframe.setAttribute('src', location.href);

      //when iframe is loaded
      iframe.onload = function () {

        //Html validator button
        document.querySelector('#featureHtmlValidator').addEventListener('click', () => {
          htmlValidator();
        });

        //Edit mode button
        document.querySelector('#featureEditText').addEventListener('click', () => {
          iframe.contentDocument.designMode = (iframe.contentDocument.designMode == "on") ? 'off' : 'on';
        });

     



      //Inspired from from http://stackoverflow.com/questions/10377840/making-finding-html5-validator-bookmarklet
      function htmlValidator() {
        function domToString(document_root) {
          let html = '',
            node = document_root.firstChild;
          while (node) {
            switch (node.nodeType) {
              case Node.ELEMENT_NODE:
                html += node.outerHTML;
                break;
              case Node.TEXT_NODE:
                html += node.nodeValue;
                break;
              case Node.CDATA_SECTION_NODE:
                html += '<![CDATA[' + node.nodeValue + ']]>';
                break;
              case Node.COMMENT_NODE:
                html += '<!--' + node.nodeValue + '-->';
                break;
              case Node.DOCUMENT_TYPE_NODE:
                // (X)HTML documents are identified by public identifiers
                html += "<!DOCTYPE " + node.name + (node.publicId ? ' PUBLIC "' + node.publicId + '"' : '') + (!node.publicId && node.systemId ? ' SYSTEM' : '') + (node.systemId ? ' "' + node.systemId + '"' : '') + '>\n';
                break;
            }
            node = node.nextSibling;
          }
          return html;
        }

        (function () {
          const html_to_validate = domToString(iframe.contentDocument);
          function append(key, value) {
            const input = document.createElement('textarea');
            input.name = key;
            input.value = value;
            form.appendChild(input);
          }
          var form = document.createElement('form');
          form.method = 'POST';
          form.action = '//validator.w3.org/check';
          form.enctype = 'multipart/form-data';         // Required for this validator
          form.target = '_blank';                       // Open in new tab
          append('fragment', html_to_validate);         // <-- Code to validate
          append('doctype', 'HTML5');                   // Validate as HTML 5
          append('group', '0');
          document.body.appendChild(form);
          form.submit();
          form.parentNode.removeChild(form);
        })();
      }
    };

      /******************* END ******************/
      
    }
  }
); 
