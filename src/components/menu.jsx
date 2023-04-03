import React from "react";
import {categories} from '../data/categories';
import { SubMenu } from "./subMenu.jsx";

export function Menu () {
    return (
        <ul>
      {
          categories.map((category) => (
            <li kew={category.id}>
            <span>{category.name}</span>
            <SubMenu></SubMenu>
            </li>
          ))
        }
      
    </ul>
    ) 
}