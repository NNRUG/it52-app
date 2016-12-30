/**
 * @providesModule utilsMarkdown
 */

import Remarkable from 'remarkable'
import fontFaceWeb from './fontFaceWeb'

/* markdown parser & renderer */
var markdown = new Remarkable({
  typographer:  true
})

export const getContent = (description) => `
  <style>
    ${fontFaceWeb}
    
    * {
      color: rgba(0,0,0, 0.7);
      font-family: Roboto;
      font-size: 14px
    }
  </style>

  <div class="main">${markdown.render(description)}</div>
`