// content.js

chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.message === "clicked_browser_action") {

      /******************* BEGIN ******************/

      //Create templates
      const templateHead = `<title>&#x1F527; ${document.title}</title>`
      const templateBody = `
      <div id="youseeWidget">
      <button type="button" id="featureHtmlValidator" class="widget-button">
          <figure class="icon-wrapper">
              <svg width="100%" height="100%" viewbox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
                  <g fill="#FFF" fill-rule="nonzero">
                      <path
                          d="M56.62 23.66L33.85 46.42l-10.67-9.76a4 4 0 10-5.4 5.9l13.5 12.35a4 4 0 005.53-.12l25.46-25.47a4.002 4.002 0 00-5.66-5.66h.01z" />
                      <path
                          d="M40 .11C17.97.11.11 17.97.11 40S17.97 79.89 40 79.89 79.89 62.03 79.89 40C79.868 17.979 62.021.132 40 .11zm0 71.78C22.388 71.89 8.11 57.612 8.11 40 8.11 22.388 22.388 8.11 40 8.11c17.612 0 31.89 14.278 31.89 31.89C71.873 57.606 57.606 71.873 40 71.89z" />
                  </g>
              </svg>
          </figure>
          <span>HTML Validator</span>
      </button>
  
  
      <button type="button" id="featureBemValidator" class="widget-button">
          <figure class="icon-wrapper">
              <svg width="100%" height="100%" viewbox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
                  <g fill="#FFF" fill-rule="nonzero">
                      <path
                          d="M56.62 23.66L33.85 46.42l-10.67-9.76a4 4 0 10-5.4 5.9l13.5 12.35a4 4 0 005.53-.12l25.46-25.47a4.002 4.002 0 00-5.66-5.66h.01z" />
                      <path
                          d="M40 .11C17.97.11.11 17.97.11 40S17.97 79.89 40 79.89 79.89 62.03 79.89 40C79.868 17.979 62.021.132 40 .11zm0 71.78C22.388 71.89 8.11 57.612 8.11 40 8.11 22.388 22.388 8.11 40 8.11c17.612 0 31.89 14.278 31.89 31.89C71.873 57.606 57.606 71.873 40 71.89z" />
                  </g>
              </svg>
          </figure>
          <span>BEM Validator</span>
      </button>
  
      <div class="ys-toggle-switch">
      <!--<figure class="icon-wrapper">
              <svg width="100%" height="100%" viewbox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
                  <g fill="#FFF" fill-rule="nonzero">
                      <path
                          d="M56.62 23.66L33.85 46.42l-10.67-9.76a4 4 0 10-5.4 5.9l13.5 12.35a4 4 0 005.53-.12l25.46-25.47a4.002 4.002 0 00-5.66-5.66h.01z" />
                      <path
                          d="M40 .11C17.97.11.11 17.97.11 40S17.97 79.89 40 79.89 79.89 62.03 79.89 40C79.868 17.979 62.021.132 40 .11zm0 71.78C22.388 71.89 8.11 57.612 8.11 40 8.11 22.388 22.388 8.11 40 8.11c17.612 0 31.89 14.278 31.89 31.89C71.873 57.606 57.606 71.873 40 71.89z" />
                  </g>
              </svg>
          </figure>-->
          <input type="checkbox" id="featureEditText" class="ys-toggle-switch__control" />
          <label for="featureEditText" class="ys-toggle-switch__label">Edit Text</label>
      </div>
  
      <div class="ys-toggle-switch">
      <!--<figure class="icon-wrapper">
              <svg width="100%" height="100%" viewbox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
                  <g fill="#FFF" fill-rule="nonzero">
                      <path
                          d="M56.62 23.66L33.85 46.42l-10.67-9.76a4 4 0 10-5.4 5.9l13.5 12.35a4 4 0 005.53-.12l25.46-25.47a4.002 4.002 0 00-5.66-5.66h.01z" />
                      <path
                          d="M40 .11C17.97.11.11 17.97.11 40S17.97 79.89 40 79.89 79.89 62.03 79.89 40C79.868 17.979 62.021.132 40 .11zm0 71.78C22.388 71.89 8.11 57.612 8.11 40 8.11 22.388 22.388 8.11 40 8.11c17.612 0 31.89 14.278 31.89 31.89C71.873 57.606 57.606 71.873 40 71.89z" />
                  </g>
              </svg>
          </figure>-->
          <input type="checkbox" id="featureShowGrid" class="ys-toggle-switch__control" />
          <label for="featureShowGrid" class="ys-toggle-switch__label">DNA Grid</label>
      </div>
  
  
  
      <button type="button" id="featureIphoneSize" class="clean-button mgb">
          <figure class="icon-iphone">
              <svg width="100%" height="100%" viewBox="0 0 289 443" version="1.1" xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g id="noun_iphone-X_2615608" fill="#ffffff" fill-rule="nonzero">
                          <path
                              d="M224.7,0.8 L64.6,0.8 C29.3,0.8 0.6,29.5 0.6,64.8 L0.6,378.5 C0.6,413.8 29.3,442.5 64.6,442.5 L224.7,442.5 C260,442.5 288.7,413.8 288.7,378.5 L288.7,64.8 C288.7,29.5 260,0.8 224.7,0.8 Z M256.7,378.5 C256.7,396.1 242.3,410.5 224.7,410.5 L64.6,410.5 C47,410.5 32.6,396.1 32.6,378.5 L32.6,64.8 C32.6,47.2 47,32.8 64.6,32.8 L93.2,32.8 L93.2,37.2 C93.2,48 102,56.8 112.8,56.8 L176.5,56.8 C187.3,56.8 196.1,48 196.1,37.2 L196.1,32.8 L224.7,32.8 C242.3,32.8 256.7,47.2 256.7,64.8 L256.7,378.5 L256.7,378.5 Z"
                              id="Shape"></path>
                      </g>
                  </g>
              </svg>
          </figure>
      </button>
  
      <button type="button" id="featureIpadSize" class="clean-button mgb">
          <figure class="icon-ipad">
              <svg width="100%" height="100%" viewBox="0 0 289 443" version="1.1" xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g id="noun_iphone-X_2615608" fill="#ffffff" fill-rule="nonzero">
                          <path
                              d="M224.7,0.8 L64.6,0.8 C29.3,0.8 0.6,29.5 0.6,64.8 L0.6,378.5 C0.6,413.8 29.3,442.5 64.6,442.5 L224.7,442.5 C260,442.5 288.7,413.8 288.7,378.5 L288.7,64.8 C288.7,29.5 260,0.8 224.7,0.8 Z M256.7,378.5 C256.7,396.1 242.3,410.5 224.7,410.5 L64.6,410.5 C47,410.5 32.6,396.1 32.6,378.5 L32.6,64.8 C32.6,47.2 47,32.8 64.6,32.8 L93.2,32.8 L93.2,37.2 C93.2,48 102,56.8 112.8,56.8 L176.5,56.8 C187.3,56.8 196.1,48 196.1,37.2 L196.1,32.8 L224.7,32.8 C242.3,32.8 256.7,47.2 256.7,64.8 L256.7,378.5 L256.7,378.5 Z"
                              id="Shape"></path>
                      </g>
                  </g>
              </svg>
          </figure>
      </button>
  
      <button type="button" id="featureDesktopSize" class="clean-button mgb">
          <figure class="icon-desktop">
  

          <svg width="100%" height="100%" viewBox="0 0 90 52" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="noun_macbook_354906" fill="#FFFFFF" fill-rule="nonzero">
                  <path d="M87,45.8 L79.9,45.8 C79.9,45.7 79.9,45.5 79.9,45.4 L79.9,6.7 C79.9,3.2 77,0.3 73.5,0.3 L15.4,0.3 C11.9,0.3 9,3.2 9,6.7 L9,45.4 C9,45.5 9,45.7 9,45.8 L3,45.8 C1.4,45.8 0,47.1 0,48.8 C0,50.4 1.3,51.8 3,51.8 L87,51.8 C88.6,51.8 90,50.5 90,48.8 C90,47.1 88.7,45.8 87,45.8 Z M44.6,1.6 C45.5,1.6 46.2,2.3 46.2,3.2 C46.2,4.1 45.5,4.8 44.6,4.8 C43.7,4.8 43,4.1 43,3.2 C43,2.3 43.7,1.6 44.6,1.6 Z M50,48 L39.1,48 C38.5,48 38,47.5 38,46.9 C38,46.3 38.5,45.8 39.1,45.8 L50,45.8 C50.6,45.8 51.1,46.3 51.1,46.9 C51.1,47.5 50.6,48 50,48 Z M73.5,42.3 L15.7,42.3 L15.7,5.8 L73.5,5.8 L73.5,42.3 Z M85.7,49 L83.2,49 C83,49 82.9,48.9 82.9,48.7 C82.9,48.5 83,48.4 83.2,48.4 L85.7,48.4 C85.9,48.4 86,48.5 86,48.7 C86,48.9 85.8,49 85.7,49 Z" id="Shape"></path>
              </g>
          </g>
      </svg>
          </figure>
      </button>
  
      <button type="button" id="featureFullSize" class="clean-button mgb">
          <figure class="icon-fullsize">
  
              <svg width="100%" height="100%" viewBox="0 0 62 62" version="1.1" xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g id="noun_Full-Screen_684346" fill="#fff" fill-rule="nonzero">
                          <path
                              d="M14.2,7.3 L18.4,3.1 C18.8,2.7 19,2 18.7,1.5 C18.5,0.9 17.9,0.6 17.3,0.6 L2,0.6 C1.2,0.6 0.5,1.3 0.5,2.1 L0.5,17.5 C0.5,18.1 0.9,18.7 1.4,18.9 C1.6,19 1.8,19 2,19 C2.4,19 2.8,18.8 3.1,18.6 L7.3,14.4 L18,25 C18.3,25.3 18.7,25.4 19.1,25.4 C19.5,25.4 19.9,25.3 20.2,25 L25,20.2 C25.6,19.6 25.6,18.7 25,18.1 L14.2,7.3 Z"
                              id="Path"></path>
                          <path
                              d="M60.6,43.2 C60,43 59.4,43.1 59,43.5 L54.8,47.7 L44,37 C43.4,36.4 42.5,36.4 41.9,37 L37,41.8 C36.4,42.4 36.4,43.3 37,43.9 L47.8,54.7 L43.6,58.9 C43.2,59.3 43,60 43.3,60.5 C43.6,61 44.1,61.4 44.7,61.4 L60,61.4 C60.8,61.4 61.5,60.7 61.5,59.9 L61.5,44.6 C61.5,44 61.1,43.5 60.6,43.2 Z"
                              id="Path"></path>
                          <path
                              d="M20.2,37 C19.6,36.4 18.7,36.4 18.1,37 L7.3,47.8 L3.1,43.6 C2.7,43.2 2,43 1.5,43.3 C0.9,43.5 0.6,44.1 0.6,44.7 L0.6,60 C0.6,60.8 1.3,61.5 2.1,61.5 L17.5,61.5 C18.1,61.5 18.7,61.1 18.9,60.6 C19.1,60 19,59.4 18.6,59 L14.4,54.8 L25,44 C25.6,43.4 25.6,42.5 25,41.9 L20.2,37 Z"
                              id="Path"></path>
                          <path
                              d="M60,0.5 L44.6,0.5 C44,0.5 43.4,0.9 43.2,1.4 C43,1.9 43.1,2.6 43.5,3 L47.7,7.2 L37,18 C36.4,18.6 36.4,19.5 37,20.1 L41.8,24.9 C42.1,25.2 42.5,25.3 42.9,25.3 C43.3,25.3 43.7,25.2 44,24.9 L54.8,14.1 L59,18.3 C59.3,18.6 59.7,18.7 60.1,18.7 C60.3,18.7 60.5,18.7 60.7,18.6 C61.3,18.4 61.6,17.8 61.6,17.2 L61.6,2 C61.5,1.2 60.8,0.5 60,0.5 Z"
                              id="Path"></path>
                      </g>
                  </g>
              </svg>
          </figure>
      </button>
  </div>
  <main id="youseeWrapper">
      <img id="youseeWrapperIphone" src="https://s.c.dk/images/yousee/toolbar/iphonex.png">
      <img id="youseeWrapperIpad" src="https://s.c.dk/images/yousee/toolbar/ipadair5.png">
      <img id="youseeWrapperMacBook" src="https://s.c.dk/images/yousee/toolbar/macbook2.png">
      <iframe id="content" src="#" loading="eager" />
  </main>
        `
      //Append templates to dom
      document.querySelector('html').classList.add('widget-html');
      document.head.innerHTML = templateHead;
      document.body.classList.add('widget-body');
      document.body.innerHTML = templateBody;

      const screenSizeButtons = [...document.querySelectorAll('.mgb')];

      //Set iframe source
      const iframe = document.querySelector("#content");
      iframe.setAttribute('src', location.href);

      //when iframe is loaded
      iframe.onload = function () {

        //Html validator button
        document.querySelector('#featureHtmlValidator').addEventListener('click', () => {
          htmlValidator();
        });

        const iphoneImage = document.querySelector('#youseeWrapperIphone');
        const ipadImage = document.querySelector('#youseeWrapperIpad');
        const macBookImage = document.querySelector('#youseeWrapperMacBook');


        //iphone fun
        document.querySelector('#featureIphoneSize').addEventListener('click', function () {
          screenSizeButtons.forEach(function (el) {
            el.removeAttribute('disabled');
          });
          this.setAttribute('disabled', 'disabled');

          iframe.setAttribute('style', 'position: absolute; width: 375px; height: 636px;');
          iphoneImage.setAttribute('style', 'opacity: 1; transform: scale(1) translateY(18px)');
          ipadImage.setAttribute('style', 'opacity: 0;');
          macBookImage.setAttribute('style', 'opacity: 0;');
        });

        //ipad fun
        document.querySelector('#featureIpadSize').addEventListener('click', function () {
          screenSizeButtons.forEach(function (el) {
            el.removeAttribute('disabled');
          });
          this.setAttribute('disabled', 'disabled');


          iframe.setAttribute('style', 'position: absolute; width: 768px; height: 942px; top: 310px; bottom: 0;');
          ipadImage.setAttribute('style', 'opacity: 1; transform: scale(1)');
          iphoneImage.setAttribute('style', 'opacity: 0;');
          macBookImage.setAttribute('style', 'opacity: 0;');
        });

        //macbook fun
        document.querySelector('#featureDesktopSize').addEventListener('click', function () {
          screenSizeButtons.forEach(function (el) {
            el.removeAttribute('disabled');
          });
          this.setAttribute('disabled', 'disabled');

          iframe.setAttribute('style', 'position: absolute; width: 1280px; height: 736px; top: -98px; bottom: 0;');
          macBookImage.setAttribute('style', 'opacity: 1; transform: scale(1)');
          iphoneImage.setAttribute('style', 'opacity: 0;');
          ipadImage.setAttribute('style', 'opacity: 0;');
        });


        //full screen
        document.querySelector('#featureFullSize').addEventListener('click', function () {
          screenSizeButtons.forEach(function (el) {
            el.removeAttribute('disabled');
          });
          this.setAttribute('disabled', 'disabled');

          //document.querySelector('#youseeWrapperIphone').setAttribute('style', 'opacity: 0; transform: scale(0) translateY(18px)');

          iframe.removeAttribute('style');
          iframe.setAttribute('style', 'position: absolute;');
          ipadImage.setAttribute('style', 'opacity: 0;');
          iphoneImage.setAttribute('style', 'opacity: 0;');
          macBookImage.setAttribute('style', 'opacity: 0;');

          setTimeout(function () {
            iframe.setAttribute('style', 'position: relative;');
          }, 500);
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
        document.querySelector('#featureShowGrid').addEventListener('click', (e) => {
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
          <style>
          .widget-grid-overlay {
            /*background: rgba(255, 255, 255, .3)*/
          }
          
          .widget-grid,
          .widget-grid-overlay {
            position: fixed;
            top: 0;
            bottom: 0;
            height: 100%;
            width: 100%;
            z-index: 999999999999999;
            pointer-events: none
          }
          
          .widget-grid .ys-row::after {
            content: none
          }

          .widget-grid .ys-row{
            background: none
          }
          /*
          .ys-row {
            position: relative;
            background: #e7d5f7
          }
          
          .ys-col-12:only-child::after {
            top: 25px!important
          }
          
          .ys-row::after {
            content: 'ys-row';
            position: absolute;
            background: #9e3bf7;
            padding: 3px;
            top: 0;
            left: 0;
            color: #fff
          }
          */
          
          .widget-grid .ys-container [class*=col],
          .widget-grid .ys-container-fluid [class*=col] {
            background: 0 0;
            display: block;
            height: 100vh;
            text-align: center;
            text-shadow: 0px 0px 17px #600bdc;
          }
          /*
          .ys-container [class*=col],
          .ys-container-fluid [class*=col] {
            background: #efa8de
          }
          
          .widget-grid .ys-container [class*=col]::after,
          .widget-grid .ys-container-fluid [class*=col]::after {
            content: none;
          }
*/
          .mgb {
            background: rgba(238, 3, 230, .5);
            width: 100%;
            height: 100%;
            padding-top: 10px;
          }
        
          /*
          .ys-container [class*=col]::after,
          .ys-container-fluid [class*=col]::after {
            content: 'ys-col';
            position: absolute;
            padding: 3px;
            top: 0;
            left: 0;
            background: #e26ec6
          }
          */
          </style>
          </div>
          <div class="widget-grid-overlay"></div>
          <aside class="widget-grid">
            <div class="ys-container-fluid widget">
              <div class="ys-row">
                <div class="ys-col-1"><div class="mgb">Col 1</div></div>
                <div class="ys-col-1"><div class="mgb">Col 2</div></div>
                <div class="ys-col-1"><div class="mgb">Col 3</div></div>
                <div class="ys-col-1"><div class="mgb">Col 4</div></div>
                <div class="ys-col-1"><div class="mgb">Col 5</div></div>
                <div class="ys-col-1"><div class="mgb">Col 6</div></div>
                <div class="ys-col-1"><div class="mgb">Col 7</div></div>
                <div class="ys-col-1"><div class="mgb">Col 8</div></div>
                <div class="ys-col-1"><div class="mgb">Col 9</div></div>
                <div class="ys-col-1"><div class="mgb">Col 10</div></div>
                <div class="ys-col-1"><div class="mgb">Col 11</div></div>
                <div class="ys-col-1"><div class="mgb">Col 12</div></div>
              </div>
            </div>
          </aside>
          `;
              iframe.contentDocument.body.insertAdjacentHTML('beforeend', gridHTML);
            }
          } else if (!dnaGridRowElement) {
            e.preventDefault();
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
          for (i = 0; i < allElements.length; i++) {
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
          document.getElementById('bemCloseButton').addEventListener('click', function () {
            msgPane.classList.add('slideOutDown');
            setTimeout(function () {
              document.querySelector('.bem-resultpane').parentNode.removeChild(document.querySelector('.bem-resultpane'));
            }, 1000);
          });
        }
      };

      /******************* END ******************/

    }
  }
); 
