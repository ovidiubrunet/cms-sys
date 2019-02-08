import { ApiConstant } from 'src/app/dashboard/services/api.constant';


export class CkeditorConfig {
    public static editorConfig = {
        image: {
        // You need to configure the image toolbar too, so it uses the new style buttons.
        toolbar: [ 'imageTextAlternative', '|', 'imageStyle:alignLeft', 'imageStyle:full', 'imageStyle:alignRight' ],

                  styles: [
            // This option is equal to a situation where no style is applied.
            'full',

            // This represents an image aligned to the left.
            'alignLeft',

            // This represents an image aligned to the right.
            'alignRight'
                  ]
        },

        mediaEmbed: {

          previewsInData : true,
        },
        highlight: {
          options: [
              {
                  model: 'greenMarker',
                  class: 'marker-green',
                  title: 'Green marker',
                  color: 'rgb(25, 156, 25)',
                  type: 'marker'
              },
              {
                  model: 'yellowMarker',
                  class: 'marker-yellow',
                  title: 'Yellow marker',
                  color: '#cac407',
                  type: 'marker'
              },
              {
                  model: 'redPen',
                  class: 'pen-red',
                  title: 'Red pen',
                  color: 'hsl(343, 82%, 58%)',
                  type: 'pen'
              }
          ]
      },
        fontFamily: {
          options: [
              'default',
              'Ubuntu, Arial, sans-serif',
              'Ubuntu Mono, Courier New, Courier, monospace',
              'Arial, Helvetica, sans-serif',
              'Courier New, Courier, monospace',
              'Georgia, serif',
              'Lucida Sans Unicode, Lucida Grande, sans-serif',
              'Tahoma, Geneva, sans-serif',
              'Times New Roman, Times, serif',
              'Trebuchet MS, Helvetica, sans-serif',
              'Verdana, Geneva, sans-serif'
          ]
        },
        fontSize: {
          options: [
              9,
              11,
              13,
              'default',
              17,
              19,
              21
          ]
      },
         heading: {
          options: [
            { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
            { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
            { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
            {
                model: 'headingFancy',
                view: {
                    name: 'h2',
                    classes: 'fancy'
                },
                title: 'Heading 2 (fancy)',
                class: 'ck-heading_heading2_fancy',

                // It needs to be converted before the standard 'heading2'.
                converterPriority: 'high'
            }
        ]
          },
          toolbar: {
            items: [
              'heading',
              '|',
              'bold',
              'italic',
              'underline', 'strikethrough', 'code',
              'alignment:left', 'alignment:right', 'alignment:center', 'alignment:justify',
              'fontFamily',
              'fontSize',
              'highlight',
              'link',
              'bulletedList',
              'numberedList',
              'imageUpload',
              'blockQuote',
              'insertTable',
              'mediaEmbed',
              'undo',
              'redo'
            ]
          },
        cloudServices: {
           // PROVIDE CORRECT VALUES HERE:
           // tokenUrl: 'https://example.com/cs-token-endpoint',
           uploadUrl: ApiConstant.API_BASE_URL + '/reactive-upload/',
           webSocketUrl: 'your-organization-id.cke-cs.com/ws/',
           documentId: 'collabEditing'
        }
     };
}
