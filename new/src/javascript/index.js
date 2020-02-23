import '../sass/styles.scss';
import elements from "./modules/elements";
import getDate from "./modules/get-date";

(function (window, document, store) {
    const DOM = elements(document);
    let tempStore= (store.length > 0) ? JSON.parse(store.getItem('items')) : []; // itemArr
    let currentItem = {
        id: '',
        parentList: '',
        DOMIndex: '',
        arrayIndex: '',
        arrayData: {}
    };

    console.log("TEST: ", DOM);
})(window, document, window.localStorage);