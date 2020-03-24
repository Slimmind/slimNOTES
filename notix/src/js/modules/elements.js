export default function elements(document) {
    const DOM = {
        html: document.querySelector('html'),
        windows: document.querySelector('.window'),
        itemForm: document.querySelector('#item-form'),
        itemsList: document.querySelectorAll('.items-list'),
        todoList: document.querySelector('.todo-list'),
        noteList: document.querySelector('.note-list'),
        item: document.querySelectorAll('.item'),
        expandFormToggler: document.querySelectorAll('[name="item-type"]'),
        todoBlock: document.querySelector('.todo-block'),
        noteBlock: document.querySelector('.note-block'),
        toggleType: document.querySelector('.toggle-type'),
        navPanel: document.querySelector('.nav-panel'),
        cancelBtn: document.querySelector('.cancel-btn'),
        addItemBtn: document.querySelector('.add-item-btn'),
        menuBtn: document.querySelector('.menu-btn'),
        createItemBtn: document.querySelector('.create-btn'),
        deleteItemBtn: document.querySelector('.delete-btn'),
        changeItemBTn: document.querySelector('.change-btn'),
        checkBtn: document.querySelectorAll('.check-btn'),
        showStorageBtn: document.getElementById('show-local-storage'),
        cleanStorageBtn: document.getElementById('clean-local-storage'),
        callServiceBtn: document.getElementById('call-service-message'),
        serviceMessages: document.querySelector('.service-messages'),
        listTypeInput: document.querySelectorAll('input[name="list-type"]'),
        todoFilterNormal: document.querySelector('.todo-filter.normal'),
        todoFilterWarning: document.querySelector('.todo-filter.warning'),
        todoFilterUrgent: document.querySelector('.todo-filter.urgent')
    };
    return DOM;
} 