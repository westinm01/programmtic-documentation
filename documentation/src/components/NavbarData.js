import React from 'react'

export const NavbarData= [
    {
        title: 'Home',
        path: 'home',
        cName: 'leaf-section section',
        children: []
    },
    {
        title: 'Emphasis',
        path: 'emphasis',
        cName: 'parent-section section',
        children:
        [
            {
                title: 'Line Emphasis',
                path: 'line-emphasis',
                cName: 'leaf-section section',
            },
            {
                title: 'Box Emphasis',
                path: 'box-emphasis',
                cName: 'leaf-section section',
            },
            {
                title: 'Blink Then Change',
                path: 'blink-then-change',
                cName: 'leaf-section section',
            }
        ]
    },

    {
        title: 'Zooming',
        path: 'zooming',
        cName: 'parent-section section',
        children:
        [
            {
                title: 'Zoom1',
                path: 'zoom1',
                cName: 'leaf-section section',
            },
            {
                title: 'Zoom2',
                path: 'zoom2',
                cName: 'leaf-section section',
            }

        ]
    }
];

export default NavbarData