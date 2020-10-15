export default {
    actions: {
        getById({commit}, id) {
            commit('contactById', id);
        }
    },
    mutations: {
        updateContact(state, contacts) {
            state.contacts = contacts;
        },
        contactById(state, id) {
            if (state.contacts[id] != undefined) {
                state.currentContact = state.contacts[id];
            }
        },
        saveContact(state, contact) {
            const id = state.contacts.find(item => item.id === contact.id);
            if (id == undefined) {
                state.contacts.push(contact);
            } else {
                state.contacts[id] = contact;
            }
            
        },
        deleteContact(state, id) {
            state.contacts = state.contacts.filter(el => el.id != id);
        }
    },
    state: {
        contacts: [],
        currentContact: {
            id: Date.now(),
            name: {
                firstname: "",
                secondname: ""
            },
            contactNumber: [''],
            emailAddres: [''],
            addres: ['']
    }
    },
    getters: {
        getCurrent(state) {
            return state.currentContact;
        },
        allContact(state) {
            return state.contacts;
        }
    }
};