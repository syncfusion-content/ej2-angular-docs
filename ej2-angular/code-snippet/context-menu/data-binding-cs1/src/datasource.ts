export let data: Record[] = [
    { id: 1, parentId: null, text: 'View' },
    { id: 2, parentId: null, text: 'Sort by' },
    { id: 3, parentId: null, text: 'New' },
    { id: 4, parentId: null, text: 'Display Settings' },
    { id: 5, parentId: null, text: 'Personalize' },
    //first level child
    { id: 6, parentId: 1, text: 'Large Icons' },
    { id: 7, parentId: 1, text: 'Medium Icons' },
    { id: 8, parentId: 1, text: 'Small Icons' },
    { id: 9, parentId: 2, text: 'Name' },
    { id: 10, parentId: 2, text: 'Size' },
    { id: 11, parentId: 4, text: 'Folder' },
    { id: 12, parentId: 4, text: 'Shortcut' },
    { id: 13, parentId: 4, text: 'Contact' }
];

export interface Record {
    id: number,
    parentId: number,
    text: string
}