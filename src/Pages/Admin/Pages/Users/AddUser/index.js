import React, { useEffect, useState } from 'react';
import './AddUsers.scss';
import APIs from '../../../../../APIs';

const AddUsers = () => {

    const [userRole, setUserRole] = useState('admin_1')
   
    return (
        <div className="add_users">
            <form className="container" action={APIs.addUser()} method="POST">
                <div className="item_container">
                    <span className="item_title">Quyền</span>
                    <select
                        onChange={(e) => setUserRole(e.target.options[e.target.selectedIndex].id)}
                        name="description"
                        className="item_select"
                    >
                        <option
                            style={{ marginTop: 10, marginBottom: 10 }}
                            id="admin_1"
                            value={'Tạo mới, chỉnh sửa tin tức, đối tác'}
                        >
                            Tạo mới, chỉnh sửa tin tức, đối tác
                        </option>
                        <option
                            style={{ marginTop: 10, marginBottom: 10 }}
                            id='admin_2'
                            value={'Duyệt bài đã tạo, thay đổi nội dung tin tức, đối tác'}
                        >
                            Duyệt bài đã tạo, thay đổi nội dung tin tức, đối tác
                        </option>
                        <option 
                            id='admin_3'
                            value={'Đăng bài, cập nhật thông tin thay đổi/tạo mới lên website'}>
                                Đăng bài, cập nhật thông tin thay đổi/tạo mới lên website
                        </option>
                    </select>
                </div>
                <div className="item_container">
                    <span className="item_title">Tên đăng nhập</span>
                    <input
                        className="item_input item_input__title"
                        type="text"
                        style={{ width: '100%' }}
                        name="fullName"
                    />
                </div>
                <div className="item_container">
                    <span className="item_title">Email</span>
                    <input
                        className="item_input item_input__title"
                        type="email"
                        style={{ width: '100%' }}
                        name="email"
                    />
                </div>
                <div className="item_container">
                    <span className="item_title">Mật khẩu</span>
                    <input
                        className="item_input item_input__files"
                        id="file"
                        type="password"
                        style={{ width: '100%' }}
                        name="password"
                    />
                </div>
                <input name='role' value={userRole} hidden />
                <div className="btn_container">
                    <div className="btn_item">
                        <button type="button" className="btn_cancel">
                            Hủy
                        </button>
                    </div>
                    <div className="btn_item">
                        <button className=" btn_submit" type="submit">
                            Tạo tài khoản
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddUsers;
