import axios from '../../src/http/axios.js';
let actions = {
    updata_resident_list ({commit}, pageSize) {
        axios.post('/admin/userList', {
            pageSize: pageSize,
            num: 10
        }).then(res => {
            commit('updata_resident_list', res.data);
        });
    },
    updata_person_list ({commit}) {
        axios.post('/admin/person/user').then((res) => {
            commit('updata_person_list', res.data.list);
        });
    }
};
export default actions;