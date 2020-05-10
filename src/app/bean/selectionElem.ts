import { Selection, BaseType, ValueFn, EnterElement, CustomEventParameters, Transition, Local} from 'd3';

export class SelectionElem implements Selection<any, any, any, any> {
    // TODO Prob d'auto génération de la classe, a voir plus tard..
    select<DescElement extends BaseType>(selector: string): Selection<DescElement, any, any, any>;    select<DescElement extends BaseType>(selector: null): Selection<null, undefined, any, any>;
    select<DescElement extends BaseType>(selector: ValueFn<any, any, DescElement>): Selection<DescElement, any, any, any>;
    select(selector: any) {
        throw new Error("Method not implemented.");
    }
    selectAll(): Selection<null, undefined, any, any>;
    selectAll(selector: null): Selection<null, undefined, any, any>;
    selectAll(selector: undefined): Selection<null, undefined, any, any>;
    selectAll<DescElement extends BaseType, OldDatum>(selector: string): Selection<DescElement, OldDatum, any, any>;
    selectAll<DescElement extends BaseType, OldDatum>(selector: ValueFn<any, any, DescElement[] | import("d3-selection").ArrayLike<DescElement>>): Selection<DescElement, OldDatum, any, any>;
    selectAll(selector?: any) {
        throw new Error("Method not implemented.");
    }
    attr(name: string): string;
    attr(name: string, value: null): this;
    attr(name: string, value: string | number | boolean): this;
    attr(name: string, value: ValueFn<any, any, string | number | boolean>): this;
    attr(name: any, value?: any) {
        throw new Error("Method not implemented.");
    }
    classed(names: string): boolean;
    classed(names: string, value: boolean): this;
    classed(names: string, value: ValueFn<any, any, boolean>): this;
    classed(names: any, value?: any) {
        throw new Error("Method not implemented.");
    }
    style(name: string): string;
    style(name: string, value: null): this;
    style(name: string, value: string | number | boolean, priority?: "important"): this;
    style(name: string, value: ValueFn<any, any, string | number | boolean>, priority?: "important"): this;
    style(name: any, value?: any, priority?: any) {
        throw new Error("Method not implemented.");
    }
    property(name: string);
    property<T>(name: Local<T>): T;
    property(name: string, value: ValueFn<any, any, any>): this;
    property(name: string, value: null): this;
    property(name: string, value: any): this;
    property<T>(name: Local<T>, value: ValueFn<any, any, T>): this;
    property<T>(name: Local<T>, value: T): this;
    property(name: any, value?: any) {
        throw new Error("Method not implemented.");
    }
    text(): string;
    text(value: null): this;
    text(value: string | number | boolean): this;
    text(value: ValueFn<any, any, string | number | boolean>): this;
    text(value?: any) {
        throw new Error("Method not implemented.");
    }
    html(): string;
    html(value: null): this;
    html(value: string): this;
    html(value: ValueFn<any, any, string>): this;
    html(value?: any) {
        throw new Error("Method not implemented.");
    }
    append<K extends "symbol" | "object" | "a" | "circle" | "clipPath" | "defs" | "desc" | "ellipse" | "feBlend" | "feColorMatrix" | "feComponentTransfer" | "feComposite" | "feConvolveMatrix" | "feDiffuseLighting" | "feDisplacementMap" | "feDistantLight" | "feFlood" | "feFuncA" | "feFuncB" | "feFuncG" | "feFuncR" | "feGaussianBlur" | "feImage" | "feMerge" | "feMergeNode" | "feMorphology" | "feOffset" | "fePointLight" | "feSpecularLighting" | "feSpotLight" | "feTile" | "feTurbulence" | "filter" | "foreignObject" | "g" | "image" | "line" | "linearGradient" | "marker" | "mask" | "metadata" | "path" | "pattern" | "polygon" | "polyline" | "radialGradient" | "rect" | "script" | "stop" | "style" | "svg" | "switch" | "text" | "textPath" | "title" | "tspan" | "use" | "view" | "abbr" | "address" | "applet" | "area" | "article" | "aside" | "audio" | "b" | "base" | "basefont" | "bdi" | "bdo" | "blockquote" | "body" | "br" | "button" | "canvas" | "caption" | "cite" | "code" | "col" | "colgroup" | "data" | "datalist" | "dd" | "del" | "details" | "dfn" | "dialog" | "dir" | "div" | "dl" | "dt" | "em" | "embed" | "fieldset" | "figcaption" | "figure" | "font" | "footer" | "form" | "frame" | "frameset" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "head" | "header" | "hgroup" | "hr" | "html" | "i" | "iframe" | "img" | "input" | "ins" | "kbd" | "label" | "legend" | "li" | "link" | "main" | "map" | "mark" | "marquee" | "menu" | "meta" | "meter" | "nav" | "noscript" | "ol" | "optgroup" | "option" | "output" | "p" | "param" | "picture" | "pre" | "progress" | "q" | "rp" | "rt" | "ruby" | "s" | "samp" | "section" | "select" | "slot" | "small" | "source" | "span" | "strong" | "sub" | "summary" | "sup" | "table" | "tbody" | "td" | "template" | "textarea" | "tfoot" | "th" | "thead" | "time" | "tr" | "track" | "u" | "ul" | "var" | "video" | "wbr">(type: K): Selection<ElementTagNameMap[K], any, any, any>;
    append<ChildElement extends BaseType>(type: string): Selection<ChildElement, any, any, any>;
    append<ChildElement extends BaseType>(type: ValueFn<any, any, ChildElement>): Selection<ChildElement, any, any, any>;
    append(type: any) {
        throw new Error("Method not implemented.");
    }
    insert<K extends "symbol" | "object" | "a" | "circle" | "clipPath" | "defs" | "desc" | "ellipse" | "feBlend" | "feColorMatrix" | "feComponentTransfer" | "feComposite" | "feConvolveMatrix" | "feDiffuseLighting" | "feDisplacementMap" | "feDistantLight" | "feFlood" | "feFuncA" | "feFuncB" | "feFuncG" | "feFuncR" | "feGaussianBlur" | "feImage" | "feMerge" | "feMergeNode" | "feMorphology" | "feOffset" | "fePointLight" | "feSpecularLighting" | "feSpotLight" | "feTile" | "feTurbulence" | "filter" | "foreignObject" | "g" | "image" | "line" | "linearGradient" | "marker" | "mask" | "metadata" | "path" | "pattern" | "polygon" | "polyline" | "radialGradient" | "rect" | "script" | "stop" | "style" | "svg" | "switch" | "text" | "textPath" | "title" | "tspan" | "use" | "view" | "abbr" | "address" | "applet" | "area" | "article" | "aside" | "audio" | "b" | "base" | "basefont" | "bdi" | "bdo" | "blockquote" | "body" | "br" | "button" | "canvas" | "caption" | "cite" | "code" | "col" | "colgroup" | "data" | "datalist" | "dd" | "del" | "details" | "dfn" | "dialog" | "dir" | "div" | "dl" | "dt" | "em" | "embed" | "fieldset" | "figcaption" | "figure" | "font" | "footer" | "form" | "frame" | "frameset" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "head" | "header" | "hgroup" | "hr" | "html" | "i" | "iframe" | "img" | "input" | "ins" | "kbd" | "label" | "legend" | "li" | "link" | "main" | "map" | "mark" | "marquee" | "menu" | "meta" | "meter" | "nav" | "noscript" | "ol" | "optgroup" | "option" | "output" | "p" | "param" | "picture" | "pre" | "progress" | "q" | "rp" | "rt" | "ruby" | "s" | "samp" | "section" | "select" | "slot" | "small" | "source" | "span" | "strong" | "sub" | "summary" | "sup" | "table" | "tbody" | "td" | "template" | "textarea" | "tfoot" | "th" | "thead" | "time" | "tr" | "track" | "u" | "ul" | "var" | "video" | "wbr">(type: K, before?: string | ValueFn<any, any, BaseType>): Selection<ElementTagNameMap[K], any, any, any>;
    insert<ChildElement extends BaseType>(type: string | ValueFn<any, any, ChildElement>, before?: string | ValueFn<any, any, BaseType>): Selection<ChildElement, any, any, any>;
    insert(type: any, before?: any) {
        throw new Error("Method not implemented.");
    }
    remove(): this {
        throw new Error("Method not implemented.");
    }
    clone(deep?: boolean): Selection<any, any, any, any> {
        throw new Error("Method not implemented.");
    }
    merge(other: Selection<any, any, any, any>): Selection<any, any, any, any> {
        throw new Error("Method not implemented.");
    }
    filter(selector: string): Selection<any, any, any, any>;
    filter<FilteredElement extends BaseType>(selector: string): Selection<FilteredElement, any, any, any>;
    filter(selector: ValueFn<any, any, boolean>): Selection<any, any, any, any>;
    filter<FilteredElement extends BaseType>(selector: ValueFn<any, any, boolean>): Selection<FilteredElement, any, any, any>;
    filter(selector: any) {
        throw new Error("Method not implemented.");
    }
    sort(comparator?: (a: any, b: any) => number): this {
        throw new Error("Method not implemented.");
    }
    order(): this {
        throw new Error("Method not implemented.");
    }
    raise(): this {
        throw new Error("Method not implemented.");
    }
    lower(): this {
        throw new Error("Method not implemented.");
    }
    datum();
    datum(value: null): Selection<any, undefined, any, any>;
    datum<NewDatum>(value: ValueFn<any, any, NewDatum>): Selection<any, NewDatum, any, any>;
    datum<NewDatum>(value: NewDatum): Selection<any, NewDatum, any, any>;
    datum(value?: any) {
        throw new Error("Method not implemented.");
    }
    data(): any[];
    data<NewDatum>(data: NewDatum[], key?: ValueFn<any, any, string>): Selection<any, NewDatum, any, any>;
    data<NewDatum>(data: ValueFn<any, any, NewDatum[]>, key?: ValueFn<any, any, string>): Selection<any, NewDatum, any, any>;
    data(data?: any, key?: any) {
        throw new Error("Method not implemented.");
    }
    join<K extends "symbol" | "object" | "a" | "circle" | "clipPath" | "defs" | "desc" | "ellipse" | "feBlend" | "feColorMatrix" | "feComponentTransfer" | "feComposite" | "feConvolveMatrix" | "feDiffuseLighting" | "feDisplacementMap" | "feDistantLight" | "feFlood" | "feFuncA" | "feFuncB" | "feFuncG" | "feFuncR" | "feGaussianBlur" | "feImage" | "feMerge" | "feMergeNode" | "feMorphology" | "feOffset" | "fePointLight" | "feSpecularLighting" | "feSpotLight" | "feTile" | "feTurbulence" | "filter" | "foreignObject" | "g" | "image" | "line" | "linearGradient" | "marker" | "mask" | "metadata" | "path" | "pattern" | "polygon" | "polyline" | "radialGradient" | "rect" | "script" | "stop" | "style" | "svg" | "switch" | "text" | "textPath" | "title" | "tspan" | "use" | "view" | "abbr" | "address" | "applet" | "area" | "article" | "aside" | "audio" | "b" | "base" | "basefont" | "bdi" | "bdo" | "blockquote" | "body" | "br" | "button" | "canvas" | "caption" | "cite" | "code" | "col" | "colgroup" | "data" | "datalist" | "dd" | "del" | "details" | "dfn" | "dialog" | "dir" | "div" | "dl" | "dt" | "em" | "embed" | "fieldset" | "figcaption" | "figure" | "font" | "footer" | "form" | "frame" | "frameset" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "head" | "header" | "hgroup" | "hr" | "html" | "i" | "iframe" | "img" | "input" | "ins" | "kbd" | "label" | "legend" | "li" | "link" | "main" | "map" | "mark" | "marquee" | "menu" | "meta" | "meter" | "nav" | "noscript" | "ol" | "optgroup" | "option" | "output" | "p" | "param" | "picture" | "pre" | "progress" | "q" | "rp" | "rt" | "ruby" | "s" | "samp" | "section" | "select" | "slot" | "small" | "source" | "span" | "strong" | "sub" | "summary" | "sup" | "table" | "tbody" | "td" | "template" | "textarea" | "tfoot" | "th" | "thead" | "time" | "tr" | "track" | "u" | "ul" | "var" | "video" | "wbr", OldDatum = any>(enter: K, update?: (elem: Selection<any, any, any, any>) => Selection<any, any, any, any>, exit?: (elem: Selection<any, OldDatum, any, any>) => void): Selection<any, any, any, any>;
    join<ChildElement extends BaseType, OldDatum = any>(enter: string, update?: (elem: Selection<any, any, any, any>) => Selection<any, any, any, any>, exit?: (elem: Selection<any, OldDatum, any, any>) => void): Selection<any, any, any, any>;
    join<ChildElement extends BaseType, OldDatum = any>(enter: (elem: Selection<EnterElement, any, any, any>) => Selection<ChildElement, any, any, any>, update?: (elem: Selection<any, any, any, any>) => Selection<any, any, any, any>, exit?: (elem: Selection<any, OldDatum, any, any>) => void): Selection<any, any, any, any>;
    join(enter: any, update?: any, exit?: any) {
        throw new Error("Method not implemented.");
    }
    enter(): Selection<EnterElement, any, any, any> {
        throw new Error("Method not implemented.");
    }
    exit<OldDatum>(): Selection<any, OldDatum, any, any> {
        throw new Error("Method not implemented.");
    }
    on(typenames: string): ValueFn<any, any, void>;
    on(typenames: string, listener: null): this;
    on(typenames: string, listener: ValueFn<any, any, void>, capture?: boolean): this;
    on(typenames: any, listener?: any, capture?: any) {
        throw new Error("Method not implemented.");
    }
    dispatch(type: string, parameters?: CustomEventParameters): this;
    dispatch(type: string, parameters?: ValueFn<any, any, CustomEventParameters>): this;
    dispatch(type: any, parameters?: any) {
        throw new Error("Method not implemented.");
    }
    each(func: ValueFn<any, any, void>): this {
        throw new Error("Method not implemented.");
    }
    call(func: (selection: Selection<any, any, any, any>, ...args: any[]) => void, ...args: any[]): this {
        throw new Error("Method not implemented.");
    }
    empty(): boolean {
        throw new Error("Method not implemented.");
    }
    node() {
        throw new Error("Method not implemented.");
    }
    nodes(): any[] {
        throw new Error("Method not implemented.");
    }
    size(): number {
        throw new Error("Method not implemented.");
    }
    interrupt(name?: string): this {
        throw new Error("Method not implemented.");
    }
    transition(name?: string): Transition<any, any, any, any>;
    transition(transition: Transition<BaseType, any, any, any>): Transition<any, any, any, any>;
    transition(transition?: any) {
        throw new Error("Method not implemented.");
    }


 
}
