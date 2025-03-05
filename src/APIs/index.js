import * as postsAPI from './postsAPI'; 
import * as userAPI from './usersAPI';
import * as partnersAPI from './partnersAPI'
const serverHost = 'http://localhost:4000';

const getMenu = async () => {
    var data = [];
    data = await fetch(`${serverHost}/menus`)
        .then((responce) => responce.json())
        .then((values) => (values?.length > 0 ? values : []))
        .catch((error) => console.log('lỗi khi get menu:', error));

    let parentData = await data.filter((item) => !item.parentID);
    parentData = await parentData.map((item) => {
        item.childs = data.filter((child) => child.parentID == item._id);
        return item;
    });
    return parentData.length > 0 ? parentData : [];
};

const getMenuItem = async (path) => {
    const pathArr = path.split('/');
    const pathName = pathArr[pathArr.length - 1];

    let menuItem = await fetch(`${serverHost}/menus/${pathName}`)
        .then((responce) => responce.json())
        .then((data) => data)
        .catch((error) => alert(error));
    return menuItem?.name ?? '';
};



const getComments = async (postID) => {
    const commentsData = await fetch(`${serverHost}/comments/${postID}`)
        .then((responce) => responce.json())
        .then((data) => data)
        .catch((error) => alert(error));
    return commentsData.length > 0 ? commentsData : [];
};

const postComment = (postID) => {
    return `${serverHost}/comments/${postID}?_method=POST`;
};

const search = async (query) => {
    const searchResult = await fetch(`${serverHost}/search${query}`)
        .then((responce) => responce.json())
        .then((data) => data)
        .catch((error) => alert(error));
    return searchResult.length > 0 ? searchResult : [];
};

export default  {
        getMenu,
        getMenuItem,
    
        getComments,
        postComment,
        search,
        ...postsAPI,
        ...userAPI,
        ...partnersAPI,
} ;
