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
                <svg width="100%" height="100%" viewbox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fill-rule="nonzero"><path d="M56.62 23.66L33.85 46.42l-10.67-9.76a4 4 0 10-5.4 5.9l13.5 12.35a4 4 0 005.53-.12l25.46-25.47a4.002 4.002 0 00-5.66-5.66h.01z"/><path d="M40 .11C17.97.11.11 17.97.11 40S17.97 79.89 40 79.89 79.89 62.03 79.89 40C79.868 17.979 62.021.132 40 .11zm0 71.78C22.388 71.89 8.11 57.612 8.11 40 8.11 22.388 22.388 8.11 40 8.11c17.612 0 31.89 14.278 31.89 31.89C71.873 57.606 57.606 71.873 40 71.89z"/></g></svg>
              </figure>  
               <input type="checkbox" id="featureEditText" class="ys-toggle-switch__control" />
               <label for="featureEditText" class="ys-toggle-switch__label">Edit Text</label>
            </div>

            <div class="ys-toggle-switch">
              <figure class="icon-wrapper">
                <svg width="100%" height="100%" viewbox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fill-rule="nonzero"><path d="M56.62 23.66L33.85 46.42l-10.67-9.76a4 4 0 10-5.4 5.9l13.5 12.35a4 4 0 005.53-.12l25.46-25.47a4.002 4.002 0 00-5.66-5.66h.01z"/><path d="M40 .11C17.97.11.11 17.97.11 40S17.97 79.89 40 79.89 79.89 62.03 79.89 40C79.868 17.979 62.021.132 40 .11zm0 71.78C22.388 71.89 8.11 57.612 8.11 40 8.11 22.388 22.388 8.11 40 8.11c17.612 0 31.89 14.278 31.89 31.89C71.873 57.606 57.606 71.873 40 71.89z"/></g></svg>
              </figure>
               <input type="checkbox" id="featureShowGrid" class="ys-toggle-switch__control" />
               <label for="featureShowGrid" class="ys-toggle-switch__label">DNA Grid</label>
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

        //BEM validator
        document.querySelector('#featureBemValidator').addEventListener('click', () => {
          BemValidator();
        });


        //Edit mode button
        document.querySelector('#featureEditText').addEventListener('click', () => {
          iframe.contentDocument.designMode = (iframe.contentDocument.designMode == "on") ? 'off' : 'on';
        });

        //Show grid
        document.querySelector('#featureShowGrid').addEventListener('click', () => {
          const dnaGridRowElement = iframe.contentDocument.querySelector('.ys-row');
          if (dnaGridRowElement) {

          if (iframe.contentDocument.body.classList.contains('grid-is-active')) {
            iframe.contentDocument.body.classList.remove('grid-is-active');
            iframe.contentDocument.querySelector('.widget-grid-styles').remove();
            iframe.contentDocument.querySelector('.widget-grid-overlay').remove();
            iframe.contentDocument.querySelector('.widget-grid').remove();
          } else {
            iframe.contentDocument.body.classList.add('grid-is-active');

          const gridHTML = `
          <div class="widget-grid-styles">
            <style>.widget-grid-overlay{background:rgba(255,255,255,.3)}.widget-grid,.widget-grid-overlay{position:fixed;top:0;bottom:0;height:100%;width:100%;z-index:999999999999999;pointer-events:none}.widget-grid .ys-row{border:none;background:0 0}.widget-grid .ys-row::after{content:none}.ys-row{position:relative;background:#e7d5f7}.ys-col-12:only-child::after{top:25px!important}.ys-row::after{content:'ys-row';position:absolute;background:#9e3bf7;padding:3px;top:0;left:0;color:#fff}.widget-grid .ys-container [class*=col],.widget-grid .ys-container-fluid [class*=col]{background:0 0;display:block;height:100vh;padding:.5rem;border:1px solid #00000026;border-right:0;text-align:center}.ys-container [class*=col],.ys-container-fluid [class*=col]{background:#efa8de}.widget-grid .ys-container [class*=col]::after,.widget-grid .ys-container-fluid [class*=col]::after{content:none}.widget-grid .ys-container [class*=col]:last-of-type,.widget-grid .ys-container-fluid [class*=col]:last-of-type{border-right:1px solid #00000026}.ys-container [class*=col]::after,.ys-container-fluid [class*=col]::after{content:'ys-col';position:absolute;padding:3px;top:0;left:0;background:#e26ec6}</style>
          </div>
          <div class="widget-grid-overlay"></div>
          <aside class="widget-grid">
            <div class="ys-container-fluid widget">
              <div class="ys-row">
                <div class="ys-col-1">1</div>
                <div class="ys-col-1">2</div>
                <div class="ys-col-1">3</div>
                <div class="ys-col-1">4</div>
                <div class="ys-col-1">5</div>
                <div class="ys-col-1">6</div>
                <div class="ys-col-1">7</div>
                <div class="ys-col-1">8</div>
                <div class="ys-col-1">9</div>
                <div class="ys-col-1">19</div>
                <div class="ys-col-1">11</div>
                <div class="ys-col-1">12</div>
              </div>
            </div>
          </aside>
          `;
            iframe.contentDocument.body.insertAdjacentHTML('beforeend', gridHTML);
          }
        } else if (!dnaGridRowElement) {
          alert('No Grid');
        }
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

        //BEM validator
        function BemValidator() {
            // define variables, strings etc.
            var msgPane = document.createElement('div');
            msgPane.classList.add('bem-resultpane');
            msgPane.classList.add('animated');
            var logMsg = '';
            var logMsgTitle = ''; // defined at the end
            var logMsgContent = '<ol class=\'bem-resultpane__list\'>';
            var logMsgFoot = '</ol>';
            var errorsAmount = 0;
          
            // get all elements in a page
            var allElements = iframe.contentDocument.querySelectorAll('*');
          
            // traverse through all elements and see if the follow the rules
            for (i = 0; i < allElements.length ; i++) {
              var currentElement = allElements[i];
          
              // first check if it's a classless div or span
              if ((currentElement.tagName == 'DIV' || currentElement.tagName == 'SPAN') && (currentElement.classList.length === 0)) {
                logMsgContent += '<li class=\'bem-resultpane__item\'>Contains <code>' + currentElement.tagName + '</code> elements with no class. These are un-necessary.</li>';
                currentElement.classList.add('bem-error-item');
                errorsAmount++;
                // no need to move on with this element
                continue;
              }
          
              // get classlist and make into array
              var elClassSet = Array.from(currentElement.classList);
              // traverse through classes
              for (j = 0; j < elClassSet.length; j++) {
                var currentClass = elClassSet[j];
                // Is the class an Element (__)?
                var element = currentClass.indexOf('__') > -1;
                // yes
                if (element) {
                  // if it's prefixed with "icon__" (icons) skip it
                  if (!currentClass.indexOf('icon__') == 0) {
                    // check if it's inside the right block
                    var elementClass = currentClass.split('__')[0];
                    var parentEl = currentElement.parentNode;
                    var isInBlock = false;
                    while (parentEl.tagName != 'HTML') {
                      var parentElClassSet = Array.from(parentEl.classList);
                      if (parentElClassSet.includes(elementClass)) { // TODO: includes fungerer ikke i IE. indexOf!
                        isInBlock = true;
                        break;
                      }
                      parentEl = parentEl.parentNode;
                    }
                    if (!isInBlock) {
                      logMsgContent += '<li class=\'bem-resultpane__item\'><code>' + currentClass + '</code> is positioned outside the <strong>Block</strong> (' + currentClass.split('__')[0] + ').</li>';
                      currentElement.classList.add('bem-error-item');
                      errorsAmount++;
                    }
                    // check if it's double elemented ("x__y__z")
                    var doubleElement = currentClass.match(/[\w-]+__[\w-]+__[\w-]+/g);
                    if (doubleElement != null) {
                      logMsgContent += '<li class=\'bem-resultpane__item\'><code>' + currentClass + '</code> is not a valid BEM class. Two <strong>Elements</strong> on the same class is not allowed.</li>';
                      currentElement.classList.add('bem-error-item');
                      errorsAmount++;
                    }
                  }
                }
                // does it contain a modifier?
                var modifier = currentClass.indexOf('--') > -1;
                // yes
                if (modifier) {
                  // if it's prefixed with "u-" (utility), "w--" (width delimiter), "icon__" (icons) skip it
                  if (!((currentClass.indexOf('u-') == 0) || (currentClass.indexOf('w--') == 0) || (currentClass.indexOf('icon') == 0))) {
                    // double modifier
                    var doubleModifier = currentClass.match(/[\w-]+--[\w-]+--[\w-]+/g);
                    if (doubleModifier != null) {
                      logMsgContent += '<li class=\'bem-resultpane__item\'><code>' + currentClass + '</code> is not a valid BEM class. Two <strong>Modifiers</strong> on the same class is not allowed.</li>';
                      currentElement.classList.add('bem-error-item');
                      errorsAmount++;
                    }
                    // check if the default class is present ("element element--modifier")
                    var elementClass = currentClass.split('--')[0];
                    if (!elClassSet.includes(elementClass)) {
                      logMsgContent += '<li class=\'bem-resultpane__item\'><code>' + currentClass + '</code> is included without it\'s default <strong>Element</strong> (' + elementClass + ').</li>';
                      currentElement.classList.add('bem-error-item');
                      errorsAmount++;
                    }
                  }
                }
              }
            }
            //output logmsg
            if (errorsAmount == 0) {
              errorsAmount = '0';
              logMsgContent = '<p class="bem-resultpane__item bem-resultpane__item--success"><strong>Congratulations! No errors were found.</p>';
            }
            logMsgTitle = '<h1 class="bem-resultpane__header">BEM Inspect Results: <strong>' + errorsAmount + ' errors</strong><button class="bem-resultpane__close" id="bemCloseButton">Close</h1>';
          
            logMsg += logMsgTitle + logMsgContent + logMsgFoot;
            msgPane.innerHTML = logMsg;
            document.body.classList.add('is-bemvalidator');
            document.body.appendChild(msgPane);
          
            //hide the validator
            document.getElementById('bemCloseButton').addEventListener('click', function() {
              msgPane.classList.add('slideOutDown');
              setTimeout(function() {
                document.querySelector('.bem-resultpane').parentNode.removeChild(document.querySelector('.bem-resultpane'));
              }, 1000);
            });
        }
      };

      /******************* END ******************/

    }
  }
); 
