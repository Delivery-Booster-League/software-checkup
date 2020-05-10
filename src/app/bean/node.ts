import {  HierarchyCircularNode, HierarchyCircularLink } from 'd3';
import { MindMapData } from './mindMapData';

export class Node implements HierarchyCircularNode<MindMapData> {
    data: any;
    depth: number;
    height: number;
    parent: this;
    children?: this[];
    value?: number;
    id?: string;
    x: number;
    y: number;
    r: number;

    ancestors(): this[] {
        throw new Error('Method not implemented.');
    }
    descendants(): this[] {
        throw new Error('Method not implemented.');
    }
    leaves(): this[] {
        throw new Error('Method not implemented.');
    }
    path(target: this): this[] {
        throw new Error('Method not implemented.');
    }
    sum(value: (d: any) => number): this {
        throw new Error('Method not implemented.');
    }
    count(): this {
        throw new Error('Method not implemented.');
    }
    sort(compare: (a: this, b: this) => number): this {
        throw new Error('Method not implemented.');
    }
    each(func: (node: this) => void): this {
        throw new Error('Method not implemented.');
    }
    eachAfter(func: (node: this) => void): this {
        throw new Error('Method not implemented.');
    }
    eachBefore(func: (node: this) => void): this {
        throw new Error('Method not implemented.');
    }
    copy(): this {
        throw new Error('Method not implemented.');
    }
    links(): HierarchyCircularLink<any>[] {
        throw new Error('Method not implemented.');
    }
}
