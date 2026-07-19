export type GameMode='standard'|'casual'|'challenge';export type Action='gotoRoom'|'openPuzzle'|'openCloseup'|'collect'|'useItem'|'message';
export interface Hotspot{id:string;x:number;y:number;width:number;height:number;label:string;ariaLabel:string;action:Action;roomId?:string;puzzleId?:string;closeupId?:string;itemId?:string;requiredItem?:string;requiredSolved?:string;lockedMessage?:string;sound?:string;animation?:string;shape?:'rect'|'circle'}
export interface Room{id:string;label:string;image:string;solvedImage?:string;statePuzzle?:string;hotspots:Hotspot[]}
export interface Item{id:string;name:string;image:string;description:string;combineWith?:string;creates?:string;usedBy?:string[]}
export type PuzzleType='numeric'|'bookOrder'|'assembly'|'symbol'|'cipher'|'clock'|'machine'|'lens'|'mirror'|'letter'|'dial'|'color'|'light'|'tiles'|'audio';
export interface Puzzle{id:string;title:string;type:PuzzleType;answer:string|string[];description:string;clue:string;requires?:string[];grantsItems?:string[];grantsNotes?:string[];videoId?:string;updatesRoom?:string;hints:string[]}
export interface VideoDef{id:string;src:string;poster:string;captions:string;returnRoom?:string;description:string}
