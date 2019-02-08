export class FieldConfigHelper {
    static removeFromFieldConfigValue(doc, documents): any {

        documents.forEach( (item, index) => {

            let toRemove = false;

            Object.keys(item).forEach(key => {
                const inputValue = item[key];
                if (key === 'name' && inputValue === doc) {
                    toRemove = true;
                }
            });

          if (toRemove) {
             documents.splice(index, 1);
          }
        });

        return documents;
     }

     static addToFieldConfigValue(values, documents): any {
        values.forEach(element => {
            // iterate nameForm
            documents.forEach((item, index) => {

                // iterate nameForm.item
                Object.keys(item).forEach(key => {
                    const name = item[key];
                    if (key === 'name' && element.field === name) {
                        item['value'] = element.value;
                    }
                });
            });

           // ArrayHelper.elementExists(element, documents);
        });
        return documents;
     }

    private static elementExists(field, array) {

    }
}
