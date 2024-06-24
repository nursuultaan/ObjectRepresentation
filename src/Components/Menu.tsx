import React from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import {Attributes} from "../types.ts";

type MenuItem = Required<MenuProps>['items'][number];




const NodeMenu: React.FC<Attributes> = ({attributes}) => {



    const menu_items:MenuItem[] = attributes.map((el,index)=>{
        return {
            key:index,
            icon: <AppstoreOutlined />,
            label:el
        }
    })


    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click', e);
    };

    return <Menu onClick={onClick} style={{width: 256}} mode="vertical" items={menu_items}/>
};

export default NodeMenu;