const data = [
    {
        "id": 1,
        "meta": {
            "noKeepAlive": false,
            "icon": "home-2-line",
            "title": "首页",
            "affix": false,
            "badge": "",
            "tabHidden": true
        },
        "path": "/",
        "type": 1,
        "name": "Root",
        "alwaysShow": false,
        "component": "Layout",
        "parent_id": 0,
        "sort": 0,
        "create_time": "2021-01-09T13:04:56.000Z",
        "update_time": "2021-01-09T13:04:59.000Z",
        "redict": "/dashboard",
        "children": [
            {
                "id": 2,
                "meta": {
                    "noKeepAlive": true,
                    "icon": "home-2-line",
                    "title": "控制台",
                    "affix": true,
                    "badge": "",
                    "tabHidden": false
                },
                "path": "dashboard",
                "type": 1,
                "name": "Dashboard",
                "alwaysShow": true,
                "component": "pages/dashboard/index",
                "parent_id": 1,
                "sort": 0,
                "create_time": "2021-01-09T13:05:05.000Z",
                "update_time": "2021-01-09T13:05:08.000Z",
                "children": []
            }
        ]
    },
    {
        "id": 3,
        "meta": {
            "noKeepAlive": false,
            "icon": "user-settings-line",
            "title": "系统管理",
            "affix": false,
            "badge": "",
            "tabHidden": false
        },
        "path": "/setting",
        "type": 1,
        "name": "Setting",
        "alwaysShow": false,
        "component": "Layout",
        "parent_id": 0,
        "sort": 0,
        "create_time": "2021-02-11T03:58:36.000Z",
        "update_time": "2021-02-11T03:58:39.000Z",
        "redict": "/setting/personal/index",
        "children": [
            {
                "id": 4,
                "meta": {
                    "noKeepAlive": false,
                    "icon": "map-pin-user-line",
                    "title": "个人中心",
                    "affix": false,
                    "badge": "New",
                    "tabHidden": false
                },
                "path": "personal",
                "type": 1,
                "name": "PersonalIndex",
                "alwaysShow": false,
                "component": "pages/setting/personal/index",
                "parent_id": 3,
                "sort": 0,
                "create_time": "2021-02-11T04:00:04.000Z",
                "update_time": "2021-02-11T04:00:07.000Z",
                "children": []
            },
            {
                "id": 5,
                "meta": {
                    "noKeepAlive": false,
                    "icon": "user-3-line",
                    "title": "用户管理",
                    "affix": false,
                    "badge": "",
                    "tabHidden": false
                },
                "path": "user",
                "type": 1,
                "name": "UserIndex",
                "alwaysShow": false,
                "component": "pages/setting/user/index",
                "parent_id": 3,
                "sort": 1,
                "create_time": "2021-02-11T04:01:21.000Z",
                "update_time": "2021-02-11T04:01:23.000Z",
                "children": []
            },
            {
                "id": 6,
                "meta": {
                    "noKeepAlive": false,
                    "icon": "admin-line",
                    "title": "角色管理",
                    "affix": false,
                    "badge": "",
                    "tabHidden": false
                },
                "path": "role",
                "type": 1,
                "name": "RoleIndex",
                "alwaysShow": false,
                "component": "pages/setting/role/index",
                "parent_id": 3,
                "sort": 2,
                "create_time": "2021-02-11T04:02:14.000Z",
                "update_time": "2021-02-11T04:02:15.000Z",
                "children": []
            },
            {
                "id": 7,
                "meta": {
                    "noKeepAlive": false,
                    "icon": "group-line",
                    "title": "部门管理",
                    "affix": false,
                    "badge": "",
                    "tabHidden": false
                },
                "path": "department",
                "type": 1,
                "name": "DepartmentIndex",
                "alwaysShow": false,
                "component": "pages/setting/department/index",
                "parent_id": 3,
                "sort": 3,
                "create_time": "2021-02-11T04:03:28.000Z",
                "update_time": "2021-02-11T04:03:30.000Z",
                "children": []
            },
            {
                "id": 8,
                "meta": {
                    "noKeepAlive": false,
                    "icon": "menu-2-fill",
                    "title": "菜单管理",
                    "affix": false,
                    "badge": "New",
                    "tabHidden": false
                },
                "path": "menu",
                "type": 1,
                "name": "MenuIndex",
                "alwaysShow": false,
                "component": "pages/setting/menu/index",
                "parent_id": 3,
                "sort": 4,
                "create_time": "2021-02-11T04:04:19.000Z",
                "update_time": "2021-02-11T04:04:21.000Z",
                "children": []
            },
            {
                "id": 9,
                "meta": {
                    "noKeepAlive": false,
                    "icon": "file-shield-2-line",
                    "title": "系统日志",
                    "affix": false,
                    "badge": "New",
                    "tabHidden": false
                },
                "path": "systemLog",
                "type": 1,
                "name": "SystemLog",
                "alwaysShow": false,
                "component": "pages/setting/systemLog",
                "parent_id": 3,
                "sort": 5,
                "create_time": "2021-02-11T04:05:16.000Z",
                "update_time": "2021-02-11T04:05:18.000Z",
                "children": []
            }
        ]
    }
]

const getMenuList = [
    {
        url: '/api/router/getList',
        type: 'get',
        response() {
            return {
                code: 200,
                msg: 'success',
                data,
            }
        },
    }
]

export default getMenuList