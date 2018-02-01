let mutations = {
    update_user_name (state, data){
        state.user_name = data
    },
    updata_loading (state, data) {
        state.loading = data;
    },
    updata_menu (state, data) {
        state.menu = data;
    },
    updata_menu_name (state, data) {
        state.menu_name = data;
    },
    //添加栏目
    updata_pic_upload_list (state, data) {
        state.pic_upload_list.push(data);
    },
    //删除栏目
    del_pic_upload_list (state, data) {
        state.pic_upload_list.splice(data.i, 1);
    },
    upload_imgUrl (state, data) {
        state.imgUrls.push(data);
    },
    updata_resident_list (state, data) {
        state.residentList = data;
    },
    updata_person_list (state, data) {
        state.personList = data;
    }
};
export default mutations; 