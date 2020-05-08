import React from 'react'
import { MenuItem } from "./menu-item"

export const Menu = () => {

    return (
        <div className=" p-4 sm:flex sm:flex-wrap items-center justify-center container mx-auto">
           <MenuItem />
           <MenuItem />
           <MenuItem />
           <MenuItem />
           <MenuItem />
        </div>
    );
}