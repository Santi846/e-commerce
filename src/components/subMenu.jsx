import React from "react";
import {categories} from '../data/categories';

export function SubMenu () {
    return (
        <ul>
      {
          categories.map((category) => (
            <li kew={category.sublevels.id}>
            <span>{category.sublevels.name}</span>
            </li>
          ))
        }
      
    </ul>
    ) 
}