module.exports = {

"[project]/node_modules/.pnpm/graphql@16.9.0/node_modules/graphql/jsutils/devAssert.mjs [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "devAssert": ()=>devAssert
});
function devAssert(condition, message) {
    const booleanCondition = Boolean(condition);
    if (!booleanCondition) {
        throw new Error(message);
    }
}

})()),
"[project]/node_modules/.pnpm/graphql@16.9.0/node_modules/graphql/jsutils/inspect.mjs [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "inspect": ()=>inspect
});
const MAX_ARRAY_LENGTH = 10;
const MAX_RECURSIVE_DEPTH = 2;
function inspect(value) {
    return formatValue(value, []);
}
function formatValue(value, seenValues) {
    switch(typeof value){
        case 'string':
            return JSON.stringify(value);
        case 'function':
            return value.name ? `[function ${value.name}]` : '[function]';
        case 'object':
            return formatObjectValue(value, seenValues);
        default:
            return String(value);
    }
}
function formatObjectValue(value, previouslySeenValues) {
    if (value === null) {
        return 'null';
    }
    if (previouslySeenValues.includes(value)) {
        return '[Circular]';
    }
    const seenValues = [
        ...previouslySeenValues,
        value
    ];
    if (isJSONable(value)) {
        const jsonValue = value.toJSON(); // check for infinite recursion
        if (jsonValue !== value) {
            return typeof jsonValue === 'string' ? jsonValue : formatValue(jsonValue, seenValues);
        }
    } else if (Array.isArray(value)) {
        return formatArray(value, seenValues);
    }
    return formatObject(value, seenValues);
}
function isJSONable(value) {
    return typeof value.toJSON === 'function';
}
function formatObject(object, seenValues) {
    const entries = Object.entries(object);
    if (entries.length === 0) {
        return '{}';
    }
    if (seenValues.length > MAX_RECURSIVE_DEPTH) {
        return '[' + getObjectTag(object) + ']';
    }
    const properties = entries.map(([key, value])=>key + ': ' + formatValue(value, seenValues));
    return '{ ' + properties.join(', ') + ' }';
}
function formatArray(array, seenValues) {
    if (array.length === 0) {
        return '[]';
    }
    if (seenValues.length > MAX_RECURSIVE_DEPTH) {
        return '[Array]';
    }
    const len = Math.min(MAX_ARRAY_LENGTH, array.length);
    const remaining = array.length - len;
    const items = [];
    for(let i = 0; i < len; ++i){
        items.push(formatValue(array[i], seenValues));
    }
    if (remaining === 1) {
        items.push('... 1 more item');
    } else if (remaining > 1) {
        items.push(`... ${remaining} more items`);
    }
    return '[' + items.join(', ') + ']';
}
function getObjectTag(object) {
    const tag = Object.prototype.toString.call(object).replace(/^\[object /, '').replace(/]$/, '');
    if (tag === 'Object' && typeof object.constructor === 'function') {
        const name = object.constructor.name;
        if (typeof name === 'string' && name !== '') {
            return name;
        }
    }
    return tag;
}

})()),
"[project]/node_modules/.pnpm/graphql@16.9.0/node_modules/graphql/language/ast.mjs [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

/**
 * Contains a range of UTF-8 character offsets and token references that
 * identify the region of the source from which the AST derived.
 */ __turbopack_esm__({
    "Location": ()=>Location,
    "OperationTypeNode": ()=>OperationTypeNode,
    "QueryDocumentKeys": ()=>QueryDocumentKeys,
    "Token": ()=>Token,
    "isNode": ()=>isNode
});
class Location {
    /**
   * The character offset at which this Node begins.
   */ /**
   * The character offset at which this Node ends.
   */ /**
   * The Token at which this Node begins.
   */ /**
   * The Token at which this Node ends.
   */ /**
   * The Source document the AST represents.
   */ constructor(startToken, endToken, source){
        this.start = startToken.start;
        this.end = endToken.end;
        this.startToken = startToken;
        this.endToken = endToken;
        this.source = source;
    }
    get [Symbol.toStringTag]() {
        return 'Location';
    }
    toJSON() {
        return {
            start: this.start,
            end: this.end
        };
    }
}
class Token {
    /**
   * The kind of Token.
   */ /**
   * The character offset at which this Node begins.
   */ /**
   * The character offset at which this Node ends.
   */ /**
   * The 1-indexed line number on which this Token appears.
   */ /**
   * The 1-indexed column number at which this Token begins.
   */ /**
   * For non-punctuation tokens, represents the interpreted value of the token.
   *
   * Note: is undefined for punctuation tokens, but typed as string for
   * convenience in the parser.
   */ /**
   * Tokens exist as nodes in a double-linked-list amongst all tokens
   * including ignored tokens. <SOF> is always the first node and <EOF>
   * the last.
   */ constructor(kind, start, end, line, column, value){
        this.kind = kind;
        this.start = start;
        this.end = end;
        this.line = line;
        this.column = column; // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        this.value = value;
        this.prev = null;
        this.next = null;
    }
    get [Symbol.toStringTag]() {
        return 'Token';
    }
    toJSON() {
        return {
            kind: this.kind,
            value: this.value,
            line: this.line,
            column: this.column
        };
    }
}
const QueryDocumentKeys = {
    Name: [],
    Document: [
        'definitions'
    ],
    OperationDefinition: [
        'name',
        'variableDefinitions',
        'directives',
        'selectionSet'
    ],
    VariableDefinition: [
        'variable',
        'type',
        'defaultValue',
        'directives'
    ],
    Variable: [
        'name'
    ],
    SelectionSet: [
        'selections'
    ],
    Field: [
        'alias',
        'name',
        'arguments',
        'directives',
        'selectionSet'
    ],
    Argument: [
        'name',
        'value'
    ],
    FragmentSpread: [
        'name',
        'directives'
    ],
    InlineFragment: [
        'typeCondition',
        'directives',
        'selectionSet'
    ],
    FragmentDefinition: [
        'name',
        'variableDefinitions',
        'typeCondition',
        'directives',
        'selectionSet'
    ],
    IntValue: [],
    FloatValue: [],
    StringValue: [],
    BooleanValue: [],
    NullValue: [],
    EnumValue: [],
    ListValue: [
        'values'
    ],
    ObjectValue: [
        'fields'
    ],
    ObjectField: [
        'name',
        'value'
    ],
    Directive: [
        'name',
        'arguments'
    ],
    NamedType: [
        'name'
    ],
    ListType: [
        'type'
    ],
    NonNullType: [
        'type'
    ],
    SchemaDefinition: [
        'description',
        'directives',
        'operationTypes'
    ],
    OperationTypeDefinition: [
        'type'
    ],
    ScalarTypeDefinition: [
        'description',
        'name',
        'directives'
    ],
    ObjectTypeDefinition: [
        'description',
        'name',
        'interfaces',
        'directives',
        'fields'
    ],
    FieldDefinition: [
        'description',
        'name',
        'arguments',
        'type',
        'directives'
    ],
    InputValueDefinition: [
        'description',
        'name',
        'type',
        'defaultValue',
        'directives'
    ],
    InterfaceTypeDefinition: [
        'description',
        'name',
        'interfaces',
        'directives',
        'fields'
    ],
    UnionTypeDefinition: [
        'description',
        'name',
        'directives',
        'types'
    ],
    EnumTypeDefinition: [
        'description',
        'name',
        'directives',
        'values'
    ],
    EnumValueDefinition: [
        'description',
        'name',
        'directives'
    ],
    InputObjectTypeDefinition: [
        'description',
        'name',
        'directives',
        'fields'
    ],
    DirectiveDefinition: [
        'description',
        'name',
        'arguments',
        'locations'
    ],
    SchemaExtension: [
        'directives',
        'operationTypes'
    ],
    ScalarTypeExtension: [
        'name',
        'directives'
    ],
    ObjectTypeExtension: [
        'name',
        'interfaces',
        'directives',
        'fields'
    ],
    InterfaceTypeExtension: [
        'name',
        'interfaces',
        'directives',
        'fields'
    ],
    UnionTypeExtension: [
        'name',
        'directives',
        'types'
    ],
    EnumTypeExtension: [
        'name',
        'directives',
        'values'
    ],
    InputObjectTypeExtension: [
        'name',
        'directives',
        'fields'
    ]
};
const kindValues = new Set(Object.keys(QueryDocumentKeys));
function isNode(maybeNode) {
    const maybeKind = maybeNode === null || maybeNode === void 0 ? void 0 : maybeNode.kind;
    return typeof maybeKind === 'string' && kindValues.has(maybeKind);
}
/** Name */ var OperationTypeNode;
(function(OperationTypeNode) {
    OperationTypeNode['QUERY'] = 'query';
    OperationTypeNode['MUTATION'] = 'mutation';
    OperationTypeNode['SUBSCRIPTION'] = 'subscription';
})(OperationTypeNode || (OperationTypeNode = {}));
;

})()),
"[project]/node_modules/.pnpm/graphql@16.9.0/node_modules/graphql/language/kinds.mjs [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

/**
 * The set of allowed kind values for AST nodes.
 */ __turbopack_esm__({
    "Kind": ()=>Kind
});
var Kind;
(function(Kind) {
    Kind['NAME'] = 'Name';
    Kind['DOCUMENT'] = 'Document';
    Kind['OPERATION_DEFINITION'] = 'OperationDefinition';
    Kind['VARIABLE_DEFINITION'] = 'VariableDefinition';
    Kind['SELECTION_SET'] = 'SelectionSet';
    Kind['FIELD'] = 'Field';
    Kind['ARGUMENT'] = 'Argument';
    Kind['FRAGMENT_SPREAD'] = 'FragmentSpread';
    Kind['INLINE_FRAGMENT'] = 'InlineFragment';
    Kind['FRAGMENT_DEFINITION'] = 'FragmentDefinition';
    Kind['VARIABLE'] = 'Variable';
    Kind['INT'] = 'IntValue';
    Kind['FLOAT'] = 'FloatValue';
    Kind['STRING'] = 'StringValue';
    Kind['BOOLEAN'] = 'BooleanValue';
    Kind['NULL'] = 'NullValue';
    Kind['ENUM'] = 'EnumValue';
    Kind['LIST'] = 'ListValue';
    Kind['OBJECT'] = 'ObjectValue';
    Kind['OBJECT_FIELD'] = 'ObjectField';
    Kind['DIRECTIVE'] = 'Directive';
    Kind['NAMED_TYPE'] = 'NamedType';
    Kind['LIST_TYPE'] = 'ListType';
    Kind['NON_NULL_TYPE'] = 'NonNullType';
    Kind['SCHEMA_DEFINITION'] = 'SchemaDefinition';
    Kind['OPERATION_TYPE_DEFINITION'] = 'OperationTypeDefinition';
    Kind['SCALAR_TYPE_DEFINITION'] = 'ScalarTypeDefinition';
    Kind['OBJECT_TYPE_DEFINITION'] = 'ObjectTypeDefinition';
    Kind['FIELD_DEFINITION'] = 'FieldDefinition';
    Kind['INPUT_VALUE_DEFINITION'] = 'InputValueDefinition';
    Kind['INTERFACE_TYPE_DEFINITION'] = 'InterfaceTypeDefinition';
    Kind['UNION_TYPE_DEFINITION'] = 'UnionTypeDefinition';
    Kind['ENUM_TYPE_DEFINITION'] = 'EnumTypeDefinition';
    Kind['ENUM_VALUE_DEFINITION'] = 'EnumValueDefinition';
    Kind['INPUT_OBJECT_TYPE_DEFINITION'] = 'InputObjectTypeDefinition';
    Kind['DIRECTIVE_DEFINITION'] = 'DirectiveDefinition';
    Kind['SCHEMA_EXTENSION'] = 'SchemaExtension';
    Kind['SCALAR_TYPE_EXTENSION'] = 'ScalarTypeExtension';
    Kind['OBJECT_TYPE_EXTENSION'] = 'ObjectTypeExtension';
    Kind['INTERFACE_TYPE_EXTENSION'] = 'InterfaceTypeExtension';
    Kind['UNION_TYPE_EXTENSION'] = 'UnionTypeExtension';
    Kind['ENUM_TYPE_EXTENSION'] = 'EnumTypeExtension';
    Kind['INPUT_OBJECT_TYPE_EXTENSION'] = 'InputObjectTypeExtension';
})(Kind || (Kind = {}));
;
 /**
 * The enum type representing the possible kind values of AST nodes.
 *
 * @deprecated Please use `Kind`. Will be remove in v17.
 */ 
})()),
"[project]/node_modules/.pnpm/graphql@16.9.0/node_modules/graphql/language/visitor.mjs [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "BREAK": ()=>BREAK,
    "getEnterLeaveForKind": ()=>getEnterLeaveForKind,
    "getVisitFn": ()=>getVisitFn,
    "visit": ()=>visit,
    "visitInParallel": ()=>visitInParallel
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$jsutils$2f$devAssert$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/graphql@16.9.0/node_modules/graphql/jsutils/devAssert.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$jsutils$2f$inspect$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/graphql@16.9.0/node_modules/graphql/jsutils/inspect.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$ast$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/graphql@16.9.0/node_modules/graphql/language/ast.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/graphql@16.9.0/node_modules/graphql/language/kinds.mjs [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
const BREAK = Object.freeze({});
function visit(root, visitor, visitorKeys = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$ast$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueryDocumentKeys"]) {
    const enterLeaveMap = new Map();
    for (const kind of Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"])){
        enterLeaveMap.set(kind, getEnterLeaveForKind(visitor, kind));
    }
    /* eslint-disable no-undef-init */ let stack = undefined;
    let inArray = Array.isArray(root);
    let keys = [
        root
    ];
    let index = -1;
    let edits = [];
    let node = root;
    let key = undefined;
    let parent = undefined;
    const path = [];
    const ancestors = [];
    /* eslint-enable no-undef-init */ do {
        index++;
        const isLeaving = index === keys.length;
        const isEdited = isLeaving && edits.length !== 0;
        if (isLeaving) {
            key = ancestors.length === 0 ? undefined : path[path.length - 1];
            node = parent;
            parent = ancestors.pop();
            if (isEdited) {
                if (inArray) {
                    node = node.slice();
                    let editOffset = 0;
                    for (const [editKey, editValue] of edits){
                        const arrayKey = editKey - editOffset;
                        if (editValue === null) {
                            node.splice(arrayKey, 1);
                            editOffset++;
                        } else {
                            node[arrayKey] = editValue;
                        }
                    }
                } else {
                    node = Object.defineProperties({}, Object.getOwnPropertyDescriptors(node));
                    for (const [editKey, editValue] of edits){
                        node[editKey] = editValue;
                    }
                }
            }
            index = stack.index;
            keys = stack.keys;
            edits = stack.edits;
            inArray = stack.inArray;
            stack = stack.prev;
        } else if (parent) {
            key = inArray ? index : keys[index];
            node = parent[key];
            if (node === null || node === undefined) {
                continue;
            }
            path.push(key);
        }
        let result;
        if (!Array.isArray(node)) {
            var _enterLeaveMap$get, _enterLeaveMap$get2;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$ast$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNode"])(node) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$jsutils$2f$devAssert$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["devAssert"])(false, `Invalid AST Node: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$jsutils$2f$inspect$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["inspect"])(node)}.`);
            const visitFn = isLeaving ? (_enterLeaveMap$get = enterLeaveMap.get(node.kind)) === null || _enterLeaveMap$get === void 0 ? void 0 : _enterLeaveMap$get.leave : (_enterLeaveMap$get2 = enterLeaveMap.get(node.kind)) === null || _enterLeaveMap$get2 === void 0 ? void 0 : _enterLeaveMap$get2.enter;
            result = visitFn === null || visitFn === void 0 ? void 0 : visitFn.call(visitor, node, key, parent, path, ancestors);
            if (result === BREAK) {
                break;
            }
            if (result === false) {
                if (!isLeaving) {
                    path.pop();
                    continue;
                }
            } else if (result !== undefined) {
                edits.push([
                    key,
                    result
                ]);
                if (!isLeaving) {
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$ast$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNode"])(result)) {
                        node = result;
                    } else {
                        path.pop();
                        continue;
                    }
                }
            }
        }
        if (result === undefined && isEdited) {
            edits.push([
                key,
                node
            ]);
        }
        if (isLeaving) {
            path.pop();
        } else {
            var _node$kind;
            stack = {
                inArray,
                index,
                keys,
                edits,
                prev: stack
            };
            inArray = Array.isArray(node);
            keys = inArray ? node : (_node$kind = visitorKeys[node.kind]) !== null && _node$kind !== void 0 ? _node$kind : [];
            index = -1;
            edits = [];
            if (parent) {
                ancestors.push(parent);
            }
            parent = node;
        }
    }while (stack !== undefined)
    if (edits.length !== 0) {
        // New root
        return edits[edits.length - 1][1];
    }
    return root;
}
function visitInParallel(visitors) {
    const skipping = new Array(visitors.length).fill(null);
    const mergedVisitor = Object.create(null);
    for (const kind of Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"])){
        let hasVisitor = false;
        const enterList = new Array(visitors.length).fill(undefined);
        const leaveList = new Array(visitors.length).fill(undefined);
        for(let i = 0; i < visitors.length; ++i){
            const { enter, leave } = getEnterLeaveForKind(visitors[i], kind);
            hasVisitor || (hasVisitor = enter != null || leave != null);
            enterList[i] = enter;
            leaveList[i] = leave;
        }
        if (!hasVisitor) {
            continue;
        }
        const mergedEnterLeave = {
            enter (...args) {
                const node = args[0];
                for(let i = 0; i < visitors.length; i++){
                    if (skipping[i] === null) {
                        var _enterList$i;
                        const result = (_enterList$i = enterList[i]) === null || _enterList$i === void 0 ? void 0 : _enterList$i.apply(visitors[i], args);
                        if (result === false) {
                            skipping[i] = node;
                        } else if (result === BREAK) {
                            skipping[i] = BREAK;
                        } else if (result !== undefined) {
                            return result;
                        }
                    }
                }
            },
            leave (...args) {
                const node = args[0];
                for(let i = 0; i < visitors.length; i++){
                    if (skipping[i] === null) {
                        var _leaveList$i;
                        const result = (_leaveList$i = leaveList[i]) === null || _leaveList$i === void 0 ? void 0 : _leaveList$i.apply(visitors[i], args);
                        if (result === BREAK) {
                            skipping[i] = BREAK;
                        } else if (result !== undefined && result !== false) {
                            return result;
                        }
                    } else if (skipping[i] === node) {
                        skipping[i] = null;
                    }
                }
            }
        };
        mergedVisitor[kind] = mergedEnterLeave;
    }
    return mergedVisitor;
}
function getEnterLeaveForKind(visitor, kind) {
    const kindVisitor = visitor[kind];
    if (typeof kindVisitor === 'object') {
        // { Kind: { enter() {}, leave() {} } }
        return kindVisitor;
    } else if (typeof kindVisitor === 'function') {
        // { Kind() {} }
        return {
            enter: kindVisitor,
            leave: undefined
        };
    } // { enter() {}, leave() {} }
    return {
        enter: visitor.enter,
        leave: visitor.leave
    };
}
function getVisitFn(visitor, kind, isLeaving) {
    const { enter, leave } = getEnterLeaveForKind(visitor, kind);
    return isLeaving ? leave : enter;
}

})()),
"[project]/node_modules/.pnpm/graphql@16.9.0/node_modules/graphql/language/characterClasses.mjs [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

/**
 * ```
 * WhiteSpace ::
 *   - "Horizontal Tab (U+0009)"
 *   - "Space (U+0020)"
 * ```
 * @internal
 */ __turbopack_esm__({
    "isDigit": ()=>isDigit,
    "isLetter": ()=>isLetter,
    "isNameContinue": ()=>isNameContinue,
    "isNameStart": ()=>isNameStart,
    "isWhiteSpace": ()=>isWhiteSpace
});
function isWhiteSpace(code) {
    return code === 0x0009 || code === 0x0020;
}
function isDigit(code) {
    return code >= 0x0030 && code <= 0x0039;
}
function isLetter(code) {
    return code >= 0x0061 && code <= 0x007a || code >= 0x0041 && code <= 0x005a // a-z
    ;
}
function isNameStart(code) {
    return isLetter(code) || code === 0x005f;
}
function isNameContinue(code) {
    return isLetter(code) || isDigit(code) || code === 0x005f;
}

})()),
"[project]/node_modules/.pnpm/graphql@16.9.0/node_modules/graphql/language/blockString.mjs [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "dedentBlockStringLines": ()=>dedentBlockStringLines,
    "isPrintableAsBlockString": ()=>isPrintableAsBlockString,
    "printBlockString": ()=>printBlockString
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$characterClasses$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/graphql@16.9.0/node_modules/graphql/language/characterClasses.mjs [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
function dedentBlockStringLines(lines) {
    var _firstNonEmptyLine2;
    let commonIndent = Number.MAX_SAFE_INTEGER;
    let firstNonEmptyLine = null;
    let lastNonEmptyLine = -1;
    for(let i = 0; i < lines.length; ++i){
        var _firstNonEmptyLine;
        const line = lines[i];
        const indent = leadingWhitespace(line);
        if (indent === line.length) {
            continue; // skip empty lines
        }
        firstNonEmptyLine = (_firstNonEmptyLine = firstNonEmptyLine) !== null && _firstNonEmptyLine !== void 0 ? _firstNonEmptyLine : i;
        lastNonEmptyLine = i;
        if (i !== 0 && indent < commonIndent) {
            commonIndent = indent;
        }
    }
    return lines // Remove common indentation from all lines but first.
    .map((line, i)=>i === 0 ? line : line.slice(commonIndent)) // Remove leading and trailing blank lines.
    .slice((_firstNonEmptyLine2 = firstNonEmptyLine) !== null && _firstNonEmptyLine2 !== void 0 ? _firstNonEmptyLine2 : 0, lastNonEmptyLine + 1);
}
function leadingWhitespace(str) {
    let i = 0;
    while(i < str.length && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$characterClasses$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isWhiteSpace"])(str.charCodeAt(i))){
        ++i;
    }
    return i;
}
function isPrintableAsBlockString(value) {
    if (value === '') {
        return true; // empty string is printable
    }
    let isEmptyLine = true;
    let hasIndent = false;
    let hasCommonIndent = true;
    let seenNonEmptyLine = false;
    for(let i = 0; i < value.length; ++i){
        switch(value.codePointAt(i)){
            case 0x0000:
            case 0x0001:
            case 0x0002:
            case 0x0003:
            case 0x0004:
            case 0x0005:
            case 0x0006:
            case 0x0007:
            case 0x0008:
            case 0x000b:
            case 0x000c:
            case 0x000e:
            case 0x000f:
                return false;
            // Has non-printable characters
            case 0x000d:
                //  \r
                return false;
            // Has \r or \r\n which will be replaced as \n
            case 10:
                //  \n
                if (isEmptyLine && !seenNonEmptyLine) {
                    return false; // Has leading new line
                }
                seenNonEmptyLine = true;
                isEmptyLine = true;
                hasIndent = false;
                break;
            case 9:
            case 32:
                //  <space>
                hasIndent || (hasIndent = isEmptyLine);
                break;
            default:
                hasCommonIndent && (hasCommonIndent = hasIndent);
                isEmptyLine = false;
        }
    }
    if (isEmptyLine) {
        return false; // Has trailing empty lines
    }
    if (hasCommonIndent && seenNonEmptyLine) {
        return false; // Has internal indent
    }
    return true;
}
function printBlockString(value, options) {
    const escapedValue = value.replace(/"""/g, '\\"""'); // Expand a block string's raw value into independent lines.
    const lines = escapedValue.split(/\r\n|[\n\r]/g);
    const isSingleLine = lines.length === 1; // If common indentation is found we can fix some of those cases by adding leading new line
    const forceLeadingNewLine = lines.length > 1 && lines.slice(1).every((line)=>line.length === 0 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$characterClasses$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isWhiteSpace"])(line.charCodeAt(0))); // Trailing triple quotes just looks confusing but doesn't force trailing new line
    const hasTrailingTripleQuotes = escapedValue.endsWith('\\"""'); // Trailing quote (single or double) or slash forces trailing new line
    const hasTrailingQuote = value.endsWith('"') && !hasTrailingTripleQuotes;
    const hasTrailingSlash = value.endsWith('\\');
    const forceTrailingNewline = hasTrailingQuote || hasTrailingSlash;
    const printAsMultipleLines = !(options !== null && options !== void 0 && options.minimize) && // add leading and trailing new lines only if it improves readability
    (!isSingleLine || value.length > 70 || forceTrailingNewline || forceLeadingNewLine || hasTrailingTripleQuotes);
    let result = ''; // Format a multi-line block quote to account for leading space.
    const skipLeadingNewLine = isSingleLine && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$characterClasses$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isWhiteSpace"])(value.charCodeAt(0));
    if (printAsMultipleLines && !skipLeadingNewLine || forceLeadingNewLine) {
        result += '\n';
    }
    result += escapedValue;
    if (printAsMultipleLines || forceTrailingNewline) {
        result += '\n';
    }
    return '"""' + result + '"""';
}

})()),
"[project]/node_modules/.pnpm/graphql@16.9.0/node_modules/graphql/language/printString.mjs [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

/**
 * Prints a string as a GraphQL StringValue literal. Replaces control characters
 * and excluded characters (" U+0022 and \\ U+005C) with escape sequences.
 */ __turbopack_esm__({
    "printString": ()=>printString
});
function printString(str) {
    return `"${str.replace(escapedRegExp, escapedReplacer)}"`;
} // eslint-disable-next-line no-control-regex
const escapedRegExp = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
function escapedReplacer(str) {
    return escapeSequences[str.charCodeAt(0)];
} // prettier-ignore
const escapeSequences = [
    '\\u0000',
    '\\u0001',
    '\\u0002',
    '\\u0003',
    '\\u0004',
    '\\u0005',
    '\\u0006',
    '\\u0007',
    '\\b',
    '\\t',
    '\\n',
    '\\u000B',
    '\\f',
    '\\r',
    '\\u000E',
    '\\u000F',
    '\\u0010',
    '\\u0011',
    '\\u0012',
    '\\u0013',
    '\\u0014',
    '\\u0015',
    '\\u0016',
    '\\u0017',
    '\\u0018',
    '\\u0019',
    '\\u001A',
    '\\u001B',
    '\\u001C',
    '\\u001D',
    '\\u001E',
    '\\u001F',
    '',
    '',
    '\\"',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '\\\\',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '\\u007F',
    '\\u0080',
    '\\u0081',
    '\\u0082',
    '\\u0083',
    '\\u0084',
    '\\u0085',
    '\\u0086',
    '\\u0087',
    '\\u0088',
    '\\u0089',
    '\\u008A',
    '\\u008B',
    '\\u008C',
    '\\u008D',
    '\\u008E',
    '\\u008F',
    '\\u0090',
    '\\u0091',
    '\\u0092',
    '\\u0093',
    '\\u0094',
    '\\u0095',
    '\\u0096',
    '\\u0097',
    '\\u0098',
    '\\u0099',
    '\\u009A',
    '\\u009B',
    '\\u009C',
    '\\u009D',
    '\\u009E',
    '\\u009F'
];

})()),
"[project]/node_modules/.pnpm/graphql@16.9.0/node_modules/graphql/language/printer.mjs [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "print": ()=>print
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$blockString$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/graphql@16.9.0/node_modules/graphql/language/blockString.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$printString$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/graphql@16.9.0/node_modules/graphql/language/printString.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$visitor$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/graphql@16.9.0/node_modules/graphql/language/visitor.mjs [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
function print(ast) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$visitor$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["visit"])(ast, printDocASTReducer);
}
const MAX_LINE_LENGTH = 80;
const printDocASTReducer = {
    Name: {
        leave: (node)=>node.value
    },
    Variable: {
        leave: (node)=>'$' + node.name
    },
    // Document
    Document: {
        leave: (node)=>join(node.definitions, '\n\n')
    },
    OperationDefinition: {
        leave (node) {
            const varDefs = wrap('(', join(node.variableDefinitions, ', '), ')');
            const prefix = join([
                node.operation,
                join([
                    node.name,
                    varDefs
                ]),
                join(node.directives, ' ')
            ], ' '); // Anonymous queries with no directives or variable definitions can use
            // the query short form.
            return (prefix === 'query' ? '' : prefix + ' ') + node.selectionSet;
        }
    },
    VariableDefinition: {
        leave: ({ variable, type, defaultValue, directives })=>variable + ': ' + type + wrap(' = ', defaultValue) + wrap(' ', join(directives, ' '))
    },
    SelectionSet: {
        leave: ({ selections })=>block(selections)
    },
    Field: {
        leave ({ alias, name, arguments: args, directives, selectionSet }) {
            const prefix = wrap('', alias, ': ') + name;
            let argsLine = prefix + wrap('(', join(args, ', '), ')');
            if (argsLine.length > MAX_LINE_LENGTH) {
                argsLine = prefix + wrap('(\n', indent(join(args, '\n')), '\n)');
            }
            return join([
                argsLine,
                join(directives, ' '),
                selectionSet
            ], ' ');
        }
    },
    Argument: {
        leave: ({ name, value })=>name + ': ' + value
    },
    // Fragments
    FragmentSpread: {
        leave: ({ name, directives })=>'...' + name + wrap(' ', join(directives, ' '))
    },
    InlineFragment: {
        leave: ({ typeCondition, directives, selectionSet })=>join([
                '...',
                wrap('on ', typeCondition),
                join(directives, ' '),
                selectionSet
            ], ' ')
    },
    FragmentDefinition: {
        leave: ({ name, typeCondition, variableDefinitions, directives, selectionSet })=>// or removed in the future.
            `fragment ${name}${wrap('(', join(variableDefinitions, ', '), ')')} ` + `on ${typeCondition} ${wrap('', join(directives, ' '), ' ')}` + selectionSet
    },
    // Value
    IntValue: {
        leave: ({ value })=>value
    },
    FloatValue: {
        leave: ({ value })=>value
    },
    StringValue: {
        leave: ({ value, block: isBlockString })=>isBlockString ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$blockString$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["printBlockString"])(value) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$printString$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["printString"])(value)
    },
    BooleanValue: {
        leave: ({ value })=>value ? 'true' : 'false'
    },
    NullValue: {
        leave: ()=>'null'
    },
    EnumValue: {
        leave: ({ value })=>value
    },
    ListValue: {
        leave: ({ values })=>'[' + join(values, ', ') + ']'
    },
    ObjectValue: {
        leave: ({ fields })=>'{' + join(fields, ', ') + '}'
    },
    ObjectField: {
        leave: ({ name, value })=>name + ': ' + value
    },
    // Directive
    Directive: {
        leave: ({ name, arguments: args })=>'@' + name + wrap('(', join(args, ', '), ')')
    },
    // Type
    NamedType: {
        leave: ({ name })=>name
    },
    ListType: {
        leave: ({ type })=>'[' + type + ']'
    },
    NonNullType: {
        leave: ({ type })=>type + '!'
    },
    // Type System Definitions
    SchemaDefinition: {
        leave: ({ description, directives, operationTypes })=>wrap('', description, '\n') + join([
                'schema',
                join(directives, ' '),
                block(operationTypes)
            ], ' ')
    },
    OperationTypeDefinition: {
        leave: ({ operation, type })=>operation + ': ' + type
    },
    ScalarTypeDefinition: {
        leave: ({ description, name, directives })=>wrap('', description, '\n') + join([
                'scalar',
                name,
                join(directives, ' ')
            ], ' ')
    },
    ObjectTypeDefinition: {
        leave: ({ description, name, interfaces, directives, fields })=>wrap('', description, '\n') + join([
                'type',
                name,
                wrap('implements ', join(interfaces, ' & ')),
                join(directives, ' '),
                block(fields)
            ], ' ')
    },
    FieldDefinition: {
        leave: ({ description, name, arguments: args, type, directives })=>wrap('', description, '\n') + name + (hasMultilineItems(args) ? wrap('(\n', indent(join(args, '\n')), '\n)') : wrap('(', join(args, ', '), ')')) + ': ' + type + wrap(' ', join(directives, ' '))
    },
    InputValueDefinition: {
        leave: ({ description, name, type, defaultValue, directives })=>wrap('', description, '\n') + join([
                name + ': ' + type,
                wrap('= ', defaultValue),
                join(directives, ' ')
            ], ' ')
    },
    InterfaceTypeDefinition: {
        leave: ({ description, name, interfaces, directives, fields })=>wrap('', description, '\n') + join([
                'interface',
                name,
                wrap('implements ', join(interfaces, ' & ')),
                join(directives, ' '),
                block(fields)
            ], ' ')
    },
    UnionTypeDefinition: {
        leave: ({ description, name, directives, types })=>wrap('', description, '\n') + join([
                'union',
                name,
                join(directives, ' '),
                wrap('= ', join(types, ' | '))
            ], ' ')
    },
    EnumTypeDefinition: {
        leave: ({ description, name, directives, values })=>wrap('', description, '\n') + join([
                'enum',
                name,
                join(directives, ' '),
                block(values)
            ], ' ')
    },
    EnumValueDefinition: {
        leave: ({ description, name, directives })=>wrap('', description, '\n') + join([
                name,
                join(directives, ' ')
            ], ' ')
    },
    InputObjectTypeDefinition: {
        leave: ({ description, name, directives, fields })=>wrap('', description, '\n') + join([
                'input',
                name,
                join(directives, ' '),
                block(fields)
            ], ' ')
    },
    DirectiveDefinition: {
        leave: ({ description, name, arguments: args, repeatable, locations })=>wrap('', description, '\n') + 'directive @' + name + (hasMultilineItems(args) ? wrap('(\n', indent(join(args, '\n')), '\n)') : wrap('(', join(args, ', '), ')')) + (repeatable ? ' repeatable' : '') + ' on ' + join(locations, ' | ')
    },
    SchemaExtension: {
        leave: ({ directives, operationTypes })=>join([
                'extend schema',
                join(directives, ' '),
                block(operationTypes)
            ], ' ')
    },
    ScalarTypeExtension: {
        leave: ({ name, directives })=>join([
                'extend scalar',
                name,
                join(directives, ' ')
            ], ' ')
    },
    ObjectTypeExtension: {
        leave: ({ name, interfaces, directives, fields })=>join([
                'extend type',
                name,
                wrap('implements ', join(interfaces, ' & ')),
                join(directives, ' '),
                block(fields)
            ], ' ')
    },
    InterfaceTypeExtension: {
        leave: ({ name, interfaces, directives, fields })=>join([
                'extend interface',
                name,
                wrap('implements ', join(interfaces, ' & ')),
                join(directives, ' '),
                block(fields)
            ], ' ')
    },
    UnionTypeExtension: {
        leave: ({ name, directives, types })=>join([
                'extend union',
                name,
                join(directives, ' '),
                wrap('= ', join(types, ' | '))
            ], ' ')
    },
    EnumTypeExtension: {
        leave: ({ name, directives, values })=>join([
                'extend enum',
                name,
                join(directives, ' '),
                block(values)
            ], ' ')
    },
    InputObjectTypeExtension: {
        leave: ({ name, directives, fields })=>join([
                'extend input',
                name,
                join(directives, ' '),
                block(fields)
            ], ' ')
    }
};
/**
 * Given maybeArray, print an empty string if it is null or empty, otherwise
 * print all items together separated by separator if provided
 */ function join(maybeArray, separator = '') {
    var _maybeArray$filter$jo;
    return (_maybeArray$filter$jo = maybeArray === null || maybeArray === void 0 ? void 0 : maybeArray.filter((x)=>x).join(separator)) !== null && _maybeArray$filter$jo !== void 0 ? _maybeArray$filter$jo : '';
}
/**
 * Given array, print each item on its own line, wrapped in an indented `{ }` block.
 */ function block(array) {
    return wrap('{\n', indent(join(array, '\n')), '\n}');
}
/**
 * If maybeString is not null or empty, then wrap with start and end, otherwise print an empty string.
 */ function wrap(start, maybeString, end = '') {
    return maybeString != null && maybeString !== '' ? start + maybeString + end : '';
}
function indent(str) {
    return wrap('  ', str.replace(/\n/g, '\n  '));
}
function hasMultilineItems(maybeArray) {
    var _maybeArray$some;
    // FIXME: https://github.com/graphql/graphql-js/issues/2203
    /* c8 ignore next */ return (_maybeArray$some = maybeArray === null || maybeArray === void 0 ? void 0 : maybeArray.some((str)=>str.includes('\n'))) !== null && _maybeArray$some !== void 0 ? _maybeArray$some : false;
}

})()),
"[project]/node_modules/.pnpm/graphql@16.9.0/node_modules/graphql/jsutils/isObjectLike.mjs [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

/**
 * Return true if `value` is object-like. A value is object-like if it's not
 * `null` and has a `typeof` result of "object".
 */ __turbopack_esm__({
    "isObjectLike": ()=>isObjectLike
});
function isObjectLike(value) {
    return typeof value == 'object' && value !== null;
}

})()),
"[project]/node_modules/.pnpm/graphql@16.9.0/node_modules/graphql/jsutils/invariant.mjs [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "invariant": ()=>invariant
});
function invariant(condition, message) {
    const booleanCondition = Boolean(condition);
    if (!booleanCondition) {
        throw new Error(message != null ? message : 'Unexpected invariant triggered.');
    }
}

})()),
"[project]/node_modules/.pnpm/graphql@16.9.0/node_modules/graphql/language/location.mjs [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "getLocation": ()=>getLocation
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$jsutils$2f$invariant$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/graphql@16.9.0/node_modules/graphql/jsutils/invariant.mjs [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const LineRegExp = /\r\n|[\n\r]/g;
function getLocation(source, position) {
    let lastLineStart = 0;
    let line = 1;
    for (const match of source.body.matchAll(LineRegExp)){
        typeof match.index === 'number' || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$jsutils$2f$invariant$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invariant"])(false);
        if (match.index >= position) {
            break;
        }
        lastLineStart = match.index + match[0].length;
        line += 1;
    }
    return {
        line,
        column: position + 1 - lastLineStart
    };
}

})()),
"[project]/node_modules/.pnpm/graphql@16.9.0/node_modules/graphql/language/printLocation.mjs [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "printLocation": ()=>printLocation,
    "printSourceLocation": ()=>printSourceLocation
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$location$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/graphql@16.9.0/node_modules/graphql/language/location.mjs [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
function printLocation(location) {
    return printSourceLocation(location.source, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$location$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLocation"])(location.source, location.start));
}
function printSourceLocation(source, sourceLocation) {
    const firstLineColumnOffset = source.locationOffset.column - 1;
    const body = ''.padStart(firstLineColumnOffset) + source.body;
    const lineIndex = sourceLocation.line - 1;
    const lineOffset = source.locationOffset.line - 1;
    const lineNum = sourceLocation.line + lineOffset;
    const columnOffset = sourceLocation.line === 1 ? firstLineColumnOffset : 0;
    const columnNum = sourceLocation.column + columnOffset;
    const locationStr = `${source.name}:${lineNum}:${columnNum}\n`;
    const lines = body.split(/\r\n|[\n\r]/g);
    const locationLine = lines[lineIndex]; // Special case for minified documents
    if (locationLine.length > 120) {
        const subLineIndex = Math.floor(columnNum / 80);
        const subLineColumnNum = columnNum % 80;
        const subLines = [];
        for(let i = 0; i < locationLine.length; i += 80){
            subLines.push(locationLine.slice(i, i + 80));
        }
        return locationStr + printPrefixedLines([
            [
                `${lineNum} |`,
                subLines[0]
            ],
            ...subLines.slice(1, subLineIndex + 1).map((subLine)=>[
                    '|',
                    subLine
                ]),
            [
                '|',
                '^'.padStart(subLineColumnNum)
            ],
            [
                '|',
                subLines[subLineIndex + 1]
            ]
        ]);
    }
    return locationStr + printPrefixedLines([
        // Lines specified like this: ["prefix", "string"],
        [
            `${lineNum - 1} |`,
            lines[lineIndex - 1]
        ],
        [
            `${lineNum} |`,
            locationLine
        ],
        [
            '|',
            '^'.padStart(columnNum)
        ],
        [
            `${lineNum + 1} |`,
            lines[lineIndex + 1]
        ]
    ]);
}
function printPrefixedLines(lines) {
    const existingLines = lines.filter(([_, line])=>line !== undefined);
    const padLen = Math.max(...existingLines.map(([prefix])=>prefix.length));
    return existingLines.map(([prefix, line])=>prefix.padStart(padLen) + (line ? ' ' + line : '')).join('\n');
}

})()),
"[project]/node_modules/.pnpm/graphql@16.9.0/node_modules/graphql/error/GraphQLError.mjs [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "GraphQLError": ()=>GraphQLError,
    "formatError": ()=>formatError,
    "printError": ()=>printError
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$jsutils$2f$isObjectLike$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/graphql@16.9.0/node_modules/graphql/jsutils/isObjectLike.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$location$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/graphql@16.9.0/node_modules/graphql/language/location.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$printLocation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/graphql@16.9.0/node_modules/graphql/language/printLocation.mjs [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
function toNormalizedOptions(args) {
    const firstArg = args[0];
    if (firstArg == null || 'kind' in firstArg || 'length' in firstArg) {
        return {
            nodes: firstArg,
            source: args[1],
            positions: args[2],
            path: args[3],
            originalError: args[4],
            extensions: args[5]
        };
    }
    return firstArg;
}
class GraphQLError extends Error {
    /**
   * An array of `{ line, column }` locations within the source GraphQL document
   * which correspond to this error.
   *
   * Errors during validation often contain multiple locations, for example to
   * point out two things with the same name. Errors during execution include a
   * single location, the field which produced the error.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   */ /**
   * An array describing the JSON-path into the execution response which
   * corresponds to this error. Only included for errors during execution.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   */ /**
   * An array of GraphQL AST Nodes corresponding to this error.
   */ /**
   * The source GraphQL document for the first location of this error.
   *
   * Note that if this Error represents more than one node, the source may not
   * represent nodes after the first node.
   */ /**
   * An array of character offsets within the source GraphQL document
   * which correspond to this error.
   */ /**
   * The original error thrown from a field resolver during execution.
   */ /**
   * Extension fields to add to the formatted error.
   */ /**
   * @deprecated Please use the `GraphQLErrorOptions` constructor overload instead.
   */ constructor(message, ...rawArgs){
        var _this$nodes, _nodeLocations$, _ref;
        const { nodes, source, positions, path, originalError, extensions } = toNormalizedOptions(rawArgs);
        super(message);
        this.name = 'GraphQLError';
        this.path = path !== null && path !== void 0 ? path : undefined;
        this.originalError = originalError !== null && originalError !== void 0 ? originalError : undefined; // Compute list of blame nodes.
        this.nodes = undefinedIfEmpty(Array.isArray(nodes) ? nodes : nodes ? [
            nodes
        ] : undefined);
        const nodeLocations = undefinedIfEmpty((_this$nodes = this.nodes) === null || _this$nodes === void 0 ? void 0 : _this$nodes.map((node)=>node.loc).filter((loc)=>loc != null)); // Compute locations in the source for the given nodes/positions.
        this.source = source !== null && source !== void 0 ? source : nodeLocations === null || nodeLocations === void 0 ? void 0 : (_nodeLocations$ = nodeLocations[0]) === null || _nodeLocations$ === void 0 ? void 0 : _nodeLocations$.source;
        this.positions = positions !== null && positions !== void 0 ? positions : nodeLocations === null || nodeLocations === void 0 ? void 0 : nodeLocations.map((loc)=>loc.start);
        this.locations = positions && source ? positions.map((pos)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$location$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLocation"])(source, pos)) : nodeLocations === null || nodeLocations === void 0 ? void 0 : nodeLocations.map((loc)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$location$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLocation"])(loc.source, loc.start));
        const originalExtensions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$jsutils$2f$isObjectLike$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isObjectLike"])(originalError === null || originalError === void 0 ? void 0 : originalError.extensions) ? originalError === null || originalError === void 0 ? void 0 : originalError.extensions : undefined;
        this.extensions = (_ref = extensions !== null && extensions !== void 0 ? extensions : originalExtensions) !== null && _ref !== void 0 ? _ref : Object.create(null); // Only properties prescribed by the spec should be enumerable.
        // Keep the rest as non-enumerable.
        Object.defineProperties(this, {
            message: {
                writable: true,
                enumerable: true
            },
            name: {
                enumerable: false
            },
            nodes: {
                enumerable: false
            },
            source: {
                enumerable: false
            },
            positions: {
                enumerable: false
            },
            originalError: {
                enumerable: false
            }
        }); // Include (non-enumerable) stack trace.
        /* c8 ignore start */ // FIXME: https://github.com/graphql/graphql-js/issues/2317
        if (originalError !== null && originalError !== void 0 && originalError.stack) {
            Object.defineProperty(this, 'stack', {
                value: originalError.stack,
                writable: true,
                configurable: true
            });
        } else if (Error.captureStackTrace) {
            Error.captureStackTrace(this, GraphQLError);
        } else {
            Object.defineProperty(this, 'stack', {
                value: Error().stack,
                writable: true,
                configurable: true
            });
        }
    /* c8 ignore stop */ }
    get [Symbol.toStringTag]() {
        return 'GraphQLError';
    }
    toString() {
        let output = this.message;
        if (this.nodes) {
            for (const node of this.nodes){
                if (node.loc) {
                    output += '\n\n' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$printLocation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["printLocation"])(node.loc);
                }
            }
        } else if (this.source && this.locations) {
            for (const location of this.locations){
                output += '\n\n' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$printLocation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["printSourceLocation"])(this.source, location);
            }
        }
        return output;
    }
    toJSON() {
        const formattedError = {
            message: this.message
        };
        if (this.locations != null) {
            formattedError.locations = this.locations;
        }
        if (this.path != null) {
            formattedError.path = this.path;
        }
        if (this.extensions != null && Object.keys(this.extensions).length > 0) {
            formattedError.extensions = this.extensions;
        }
        return formattedError;
    }
}
function undefinedIfEmpty(array) {
    return array === undefined || array.length === 0 ? undefined : array;
}
function printError(error) {
    return error.toString();
}
function formatError(error) {
    return error.toJSON();
}

})()),
"[project]/node_modules/.pnpm/graphql@16.9.0/node_modules/graphql/error/syntaxError.mjs [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "syntaxError": ()=>syntaxError
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$error$2f$GraphQLError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/graphql@16.9.0/node_modules/graphql/error/GraphQLError.mjs [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
function syntaxError(source, position, description) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$error$2f$GraphQLError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GraphQLError"](`Syntax Error: ${description}`, {
        source,
        positions: [
            position
        ]
    });
}

})()),
"[project]/node_modules/.pnpm/graphql@16.9.0/node_modules/graphql/language/directiveLocation.mjs [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

/**
 * The set of allowed directive location values.
 */ __turbopack_esm__({
    "DirectiveLocation": ()=>DirectiveLocation
});
var DirectiveLocation;
(function(DirectiveLocation) {
    DirectiveLocation['QUERY'] = 'QUERY';
    DirectiveLocation['MUTATION'] = 'MUTATION';
    DirectiveLocation['SUBSCRIPTION'] = 'SUBSCRIPTION';
    DirectiveLocation['FIELD'] = 'FIELD';
    DirectiveLocation['FRAGMENT_DEFINITION'] = 'FRAGMENT_DEFINITION';
    DirectiveLocation['FRAGMENT_SPREAD'] = 'FRAGMENT_SPREAD';
    DirectiveLocation['INLINE_FRAGMENT'] = 'INLINE_FRAGMENT';
    DirectiveLocation['VARIABLE_DEFINITION'] = 'VARIABLE_DEFINITION';
    DirectiveLocation['SCHEMA'] = 'SCHEMA';
    DirectiveLocation['SCALAR'] = 'SCALAR';
    DirectiveLocation['OBJECT'] = 'OBJECT';
    DirectiveLocation['FIELD_DEFINITION'] = 'FIELD_DEFINITION';
    DirectiveLocation['ARGUMENT_DEFINITION'] = 'ARGUMENT_DEFINITION';
    DirectiveLocation['INTERFACE'] = 'INTERFACE';
    DirectiveLocation['UNION'] = 'UNION';
    DirectiveLocation['ENUM'] = 'ENUM';
    DirectiveLocation['ENUM_VALUE'] = 'ENUM_VALUE';
    DirectiveLocation['INPUT_OBJECT'] = 'INPUT_OBJECT';
    DirectiveLocation['INPUT_FIELD_DEFINITION'] = 'INPUT_FIELD_DEFINITION';
})(DirectiveLocation || (DirectiveLocation = {}));
;
 /**
 * The enum type representing the directive location values.
 *
 * @deprecated Please use `DirectiveLocation`. Will be remove in v17.
 */ 
})()),
"[project]/node_modules/.pnpm/graphql@16.9.0/node_modules/graphql/language/tokenKind.mjs [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

/**
 * An exported enum describing the different kinds of tokens that the
 * lexer emits.
 */ __turbopack_esm__({
    "TokenKind": ()=>TokenKind
});
var TokenKind;
(function(TokenKind) {
    TokenKind['SOF'] = '<SOF>';
    TokenKind['EOF'] = '<EOF>';
    TokenKind['BANG'] = '!';
    TokenKind['DOLLAR'] = '$';
    TokenKind['AMP'] = '&';
    TokenKind['PAREN_L'] = '(';
    TokenKind['PAREN_R'] = ')';
    TokenKind['SPREAD'] = '...';
    TokenKind['COLON'] = ':';
    TokenKind['EQUALS'] = '=';
    TokenKind['AT'] = '@';
    TokenKind['BRACKET_L'] = '[';
    TokenKind['BRACKET_R'] = ']';
    TokenKind['BRACE_L'] = '{';
    TokenKind['PIPE'] = '|';
    TokenKind['BRACE_R'] = '}';
    TokenKind['NAME'] = 'Name';
    TokenKind['INT'] = 'Int';
    TokenKind['FLOAT'] = 'Float';
    TokenKind['STRING'] = 'String';
    TokenKind['BLOCK_STRING'] = 'BlockString';
    TokenKind['COMMENT'] = 'Comment';
})(TokenKind || (TokenKind = {}));
;
 /**
 * The enum type representing the token kinds values.
 *
 * @deprecated Please use `TokenKind`. Will be remove in v17.
 */ 
})()),
"[project]/node_modules/.pnpm/graphql@16.9.0/node_modules/graphql/language/lexer.mjs [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Lexer": ()=>Lexer,
    "isPunctuatorTokenKind": ()=>isPunctuatorTokenKind
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$error$2f$syntaxError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/graphql@16.9.0/node_modules/graphql/error/syntaxError.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$ast$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/graphql@16.9.0/node_modules/graphql/language/ast.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$blockString$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/graphql@16.9.0/node_modules/graphql/language/blockString.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$characterClasses$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/graphql@16.9.0/node_modules/graphql/language/characterClasses.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/graphql@16.9.0/node_modules/graphql/language/tokenKind.mjs [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
class Lexer {
    /**
   * The previously focused non-ignored token.
   */ /**
   * The currently focused non-ignored token.
   */ /**
   * The (1-indexed) line containing the current token.
   */ /**
   * The character offset at which the current line begins.
   */ constructor(source){
        const startOfFileToken = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$ast$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Token"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].SOF, 0, 0, 0, 0);
        this.source = source;
        this.lastToken = startOfFileToken;
        this.token = startOfFileToken;
        this.line = 1;
        this.lineStart = 0;
    }
    get [Symbol.toStringTag]() {
        return 'Lexer';
    }
    /**
   * Advances the token stream to the next non-ignored token.
   */ advance() {
        this.lastToken = this.token;
        const token = this.token = this.lookahead();
        return token;
    }
    /**
   * Looks ahead and returns the next non-ignored token, but does not change
   * the state of Lexer.
   */ lookahead() {
        let token = this.token;
        if (token.kind !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].EOF) {
            do {
                if (token.next) {
                    token = token.next;
                } else {
                    // Read the next token and form a link in the token linked-list.
                    const nextToken = readNextToken(this, token.end); // @ts-expect-error next is only mutable during parsing.
                    token.next = nextToken; // @ts-expect-error prev is only mutable during parsing.
                    nextToken.prev = token;
                    token = nextToken;
                }
            }while (token.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].COMMENT)
        }
        return token;
    }
}
function isPunctuatorTokenKind(kind) {
    return kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].BANG || kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].DOLLAR || kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].AMP || kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].PAREN_L || kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].PAREN_R || kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].SPREAD || kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].COLON || kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].EQUALS || kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].AT || kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].BRACKET_L || kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].BRACKET_R || kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].BRACE_L || kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].PIPE || kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].BRACE_R;
}
/**
 * A Unicode scalar value is any Unicode code point except surrogate code
 * points. In other words, the inclusive ranges of values 0x0000 to 0xD7FF and
 * 0xE000 to 0x10FFFF.
 *
 * SourceCharacter ::
 *   - "Any Unicode scalar value"
 */ function isUnicodeScalarValue(code) {
    return code >= 0x0000 && code <= 0xd7ff || code >= 0xe000 && code <= 0x10ffff;
}
/**
 * The GraphQL specification defines source text as a sequence of unicode scalar
 * values (which Unicode defines to exclude surrogate code points). However
 * JavaScript defines strings as a sequence of UTF-16 code units which may
 * include surrogates. A surrogate pair is a valid source character as it
 * encodes a supplementary code point (above U+FFFF), but unpaired surrogate
 * code points are not valid source characters.
 */ function isSupplementaryCodePoint(body, location) {
    return isLeadingSurrogate(body.charCodeAt(location)) && isTrailingSurrogate(body.charCodeAt(location + 1));
}
function isLeadingSurrogate(code) {
    return code >= 0xd800 && code <= 0xdbff;
}
function isTrailingSurrogate(code) {
    return code >= 0xdc00 && code <= 0xdfff;
}
/**
 * Prints the code point (or end of file reference) at a given location in a
 * source for use in error messages.
 *
 * Printable ASCII is printed quoted, while other points are printed in Unicode
 * code point form (ie. U+1234).
 */ function printCodePointAt(lexer, location) {
    const code = lexer.source.body.codePointAt(location);
    if (code === undefined) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].EOF;
    } else if (code >= 0x0020 && code <= 0x007e) {
        // Printable ASCII
        const char = String.fromCodePoint(code);
        return char === '"' ? "'\"'" : `"${char}"`;
    } // Unicode code point
    return 'U+' + code.toString(16).toUpperCase().padStart(4, '0');
}
/**
 * Create a token with line and column location information.
 */ function createToken(lexer, kind, start, end, value) {
    const line = lexer.line;
    const col = 1 + start - lexer.lineStart;
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$ast$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Token"](kind, start, end, line, col, value);
}
/**
 * Gets the next token from the source starting at the given position.
 *
 * This skips over whitespace until it finds the next lexable token, then lexes
 * punctuators immediately or calls the appropriate helper function for more
 * complicated tokens.
 */ function readNextToken(lexer, start) {
    const body = lexer.source.body;
    const bodyLength = body.length;
    let position = start;
    while(position < bodyLength){
        const code = body.charCodeAt(position); // SourceCharacter
        switch(code){
            // Ignored ::
            //   - UnicodeBOM
            //   - WhiteSpace
            //   - LineTerminator
            //   - Comment
            //   - Comma
            //
            // UnicodeBOM :: "Byte Order Mark (U+FEFF)"
            //
            // WhiteSpace ::
            //   - "Horizontal Tab (U+0009)"
            //   - "Space (U+0020)"
            //
            // Comma :: ,
            case 0xfeff:
            case 0x0009:
            case 0x0020:
            case 0x002c:
                // ,
                ++position;
                continue;
            // LineTerminator ::
            //   - "New Line (U+000A)"
            //   - "Carriage Return (U+000D)" [lookahead != "New Line (U+000A)"]
            //   - "Carriage Return (U+000D)" "New Line (U+000A)"
            case 0x000a:
                // \n
                ++position;
                ++lexer.line;
                lexer.lineStart = position;
                continue;
            case 0x000d:
                // \r
                if (body.charCodeAt(position + 1) === 0x000a) {
                    position += 2;
                } else {
                    ++position;
                }
                ++lexer.line;
                lexer.lineStart = position;
                continue;
            // Comment
            case 0x0023:
                // #
                return readComment(lexer, position);
            // Token ::
            //   - Punctuator
            //   - Name
            //   - IntValue
            //   - FloatValue
            //   - StringValue
            //
            // Punctuator :: one of ! $ & ( ) ... : = @ [ ] { | }
            case 0x0021:
                // !
                return createToken(lexer, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].BANG, position, position + 1);
            case 0x0024:
                // $
                return createToken(lexer, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].DOLLAR, position, position + 1);
            case 0x0026:
                // &
                return createToken(lexer, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].AMP, position, position + 1);
            case 0x0028:
                // (
                return createToken(lexer, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].PAREN_L, position, position + 1);
            case 0x0029:
                // )
                return createToken(lexer, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].PAREN_R, position, position + 1);
            case 0x002e:
                // .
                if (body.charCodeAt(position + 1) === 0x002e && body.charCodeAt(position + 2) === 0x002e) {
                    return createToken(lexer, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].SPREAD, position, position + 3);
                }
                break;
            case 0x003a:
                // :
                return createToken(lexer, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].COLON, position, position + 1);
            case 0x003d:
                // =
                return createToken(lexer, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].EQUALS, position, position + 1);
            case 0x0040:
                // @
                return createToken(lexer, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].AT, position, position + 1);
            case 0x005b:
                // [
                return createToken(lexer, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].BRACKET_L, position, position + 1);
            case 0x005d:
                // ]
                return createToken(lexer, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].BRACKET_R, position, position + 1);
            case 0x007b:
                // {
                return createToken(lexer, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].BRACE_L, position, position + 1);
            case 0x007c:
                // |
                return createToken(lexer, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].PIPE, position, position + 1);
            case 0x007d:
                // }
                return createToken(lexer, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].BRACE_R, position, position + 1);
            // StringValue
            case 0x0022:
                // "
                if (body.charCodeAt(position + 1) === 0x0022 && body.charCodeAt(position + 2) === 0x0022) {
                    return readBlockString(lexer, position);
                }
                return readString(lexer, position);
        } // IntValue | FloatValue (Digit | -)
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$characterClasses$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDigit"])(code) || code === 0x002d) {
            return readNumber(lexer, position, code);
        } // Name
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$characterClasses$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNameStart"])(code)) {
            return readName(lexer, position);
        }
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$error$2f$syntaxError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["syntaxError"])(lexer.source, position, code === 0x0027 ? 'Unexpected single quote character (\'), did you mean to use a double quote (")?' : isUnicodeScalarValue(code) || isSupplementaryCodePoint(body, position) ? `Unexpected character: ${printCodePointAt(lexer, position)}.` : `Invalid character: ${printCodePointAt(lexer, position)}.`);
    }
    return createToken(lexer, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].EOF, bodyLength, bodyLength);
}
/**
 * Reads a comment token from the source file.
 *
 * ```
 * Comment :: # CommentChar* [lookahead != CommentChar]
 *
 * CommentChar :: SourceCharacter but not LineTerminator
 * ```
 */ function readComment(lexer, start) {
    const body = lexer.source.body;
    const bodyLength = body.length;
    let position = start + 1;
    while(position < bodyLength){
        const code = body.charCodeAt(position); // LineTerminator (\n | \r)
        if (code === 0x000a || code === 0x000d) {
            break;
        } // SourceCharacter
        if (isUnicodeScalarValue(code)) {
            ++position;
        } else if (isSupplementaryCodePoint(body, position)) {
            position += 2;
        } else {
            break;
        }
    }
    return createToken(lexer, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].COMMENT, start, position, body.slice(start + 1, position));
}
/**
 * Reads a number token from the source file, either a FloatValue or an IntValue
 * depending on whether a FractionalPart or ExponentPart is encountered.
 *
 * ```
 * IntValue :: IntegerPart [lookahead != {Digit, `.`, NameStart}]
 *
 * IntegerPart ::
 *   - NegativeSign? 0
 *   - NegativeSign? NonZeroDigit Digit*
 *
 * NegativeSign :: -
 *
 * NonZeroDigit :: Digit but not `0`
 *
 * FloatValue ::
 *   - IntegerPart FractionalPart ExponentPart [lookahead != {Digit, `.`, NameStart}]
 *   - IntegerPart FractionalPart [lookahead != {Digit, `.`, NameStart}]
 *   - IntegerPart ExponentPart [lookahead != {Digit, `.`, NameStart}]
 *
 * FractionalPart :: . Digit+
 *
 * ExponentPart :: ExponentIndicator Sign? Digit+
 *
 * ExponentIndicator :: one of `e` `E`
 *
 * Sign :: one of + -
 * ```
 */ function readNumber(lexer, start, firstCode) {
    const body = lexer.source.body;
    let position = start;
    let code = firstCode;
    let isFloat = false; // NegativeSign (-)
    if (code === 0x002d) {
        code = body.charCodeAt(++position);
    } // Zero (0)
    if (code === 0x0030) {
        code = body.charCodeAt(++position);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$characterClasses$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDigit"])(code)) {
            throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$error$2f$syntaxError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["syntaxError"])(lexer.source, position, `Invalid number, unexpected digit after 0: ${printCodePointAt(lexer, position)}.`);
        }
    } else {
        position = readDigits(lexer, position, code);
        code = body.charCodeAt(position);
    } // Full stop (.)
    if (code === 0x002e) {
        isFloat = true;
        code = body.charCodeAt(++position);
        position = readDigits(lexer, position, code);
        code = body.charCodeAt(position);
    } // E e
    if (code === 0x0045 || code === 0x0065) {
        isFloat = true;
        code = body.charCodeAt(++position); // + -
        if (code === 0x002b || code === 0x002d) {
            code = body.charCodeAt(++position);
        }
        position = readDigits(lexer, position, code);
        code = body.charCodeAt(position);
    } // Numbers cannot be followed by . or NameStart
    if (code === 0x002e || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$characterClasses$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNameStart"])(code)) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$error$2f$syntaxError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["syntaxError"])(lexer.source, position, `Invalid number, expected digit but got: ${printCodePointAt(lexer, position)}.`);
    }
    return createToken(lexer, isFloat ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].FLOAT : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].INT, start, position, body.slice(start, position));
}
/**
 * Returns the new position in the source after reading one or more digits.
 */ function readDigits(lexer, start, firstCode) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$characterClasses$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDigit"])(firstCode)) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$error$2f$syntaxError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["syntaxError"])(lexer.source, start, `Invalid number, expected digit but got: ${printCodePointAt(lexer, start)}.`);
    }
    const body = lexer.source.body;
    let position = start + 1; // +1 to skip first firstCode
    while((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$characterClasses$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDigit"])(body.charCodeAt(position))){
        ++position;
    }
    return position;
}
/**
 * Reads a single-quote string token from the source file.
 *
 * ```
 * StringValue ::
 *   - `""` [lookahead != `"`]
 *   - `"` StringCharacter+ `"`
 *
 * StringCharacter ::
 *   - SourceCharacter but not `"` or `\` or LineTerminator
 *   - `\u` EscapedUnicode
 *   - `\` EscapedCharacter
 *
 * EscapedUnicode ::
 *   - `{` HexDigit+ `}`
 *   - HexDigit HexDigit HexDigit HexDigit
 *
 * EscapedCharacter :: one of `"` `\` `/` `b` `f` `n` `r` `t`
 * ```
 */ function readString(lexer, start) {
    const body = lexer.source.body;
    const bodyLength = body.length;
    let position = start + 1;
    let chunkStart = position;
    let value = '';
    while(position < bodyLength){
        const code = body.charCodeAt(position); // Closing Quote (")
        if (code === 0x0022) {
            value += body.slice(chunkStart, position);
            return createToken(lexer, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].STRING, start, position + 1, value);
        } // Escape Sequence (\)
        if (code === 0x005c) {
            value += body.slice(chunkStart, position);
            const escape = body.charCodeAt(position + 1) === 0x0075 // u
             ? body.charCodeAt(position + 2) === 0x007b // {
             ? readEscapedUnicodeVariableWidth(lexer, position) : readEscapedUnicodeFixedWidth(lexer, position) : readEscapedCharacter(lexer, position);
            value += escape.value;
            position += escape.size;
            chunkStart = position;
            continue;
        } // LineTerminator (\n | \r)
        if (code === 0x000a || code === 0x000d) {
            break;
        } // SourceCharacter
        if (isUnicodeScalarValue(code)) {
            ++position;
        } else if (isSupplementaryCodePoint(body, position)) {
            position += 2;
        } else {
            throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$error$2f$syntaxError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["syntaxError"])(lexer.source, position, `Invalid character within String: ${printCodePointAt(lexer, position)}.`);
        }
    }
    throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$error$2f$syntaxError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["syntaxError"])(lexer.source, position, 'Unterminated string.');
} // The string value and lexed size of an escape sequence.
function readEscapedUnicodeVariableWidth(lexer, position) {
    const body = lexer.source.body;
    let point = 0;
    let size = 3; // Cannot be larger than 12 chars (\u{00000000}).
    while(size < 12){
        const code = body.charCodeAt(position + size++); // Closing Brace (})
        if (code === 0x007d) {
            // Must be at least 5 chars (\u{0}) and encode a Unicode scalar value.
            if (size < 5 || !isUnicodeScalarValue(point)) {
                break;
            }
            return {
                value: String.fromCodePoint(point),
                size
            };
        } // Append this hex digit to the code point.
        point = point << 4 | readHexDigit(code);
        if (point < 0) {
            break;
        }
    }
    throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$error$2f$syntaxError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["syntaxError"])(lexer.source, position, `Invalid Unicode escape sequence: "${body.slice(position, position + size)}".`);
}
function readEscapedUnicodeFixedWidth(lexer, position) {
    const body = lexer.source.body;
    const code = read16BitHexCode(body, position + 2);
    if (isUnicodeScalarValue(code)) {
        return {
            value: String.fromCodePoint(code),
            size: 6
        };
    } // GraphQL allows JSON-style surrogate pair escape sequences, but only when
    // a valid pair is formed.
    if (isLeadingSurrogate(code)) {
        // \u
        if (body.charCodeAt(position + 6) === 0x005c && body.charCodeAt(position + 7) === 0x0075) {
            const trailingCode = read16BitHexCode(body, position + 8);
            if (isTrailingSurrogate(trailingCode)) {
                // JavaScript defines strings as a sequence of UTF-16 code units and
                // encodes Unicode code points above U+FFFF using a surrogate pair of
                // code units. Since this is a surrogate pair escape sequence, just
                // include both codes into the JavaScript string value. Had JavaScript
                // not been internally based on UTF-16, then this surrogate pair would
                // be decoded to retrieve the supplementary code point.
                return {
                    value: String.fromCodePoint(code, trailingCode),
                    size: 12
                };
            }
        }
    }
    throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$error$2f$syntaxError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["syntaxError"])(lexer.source, position, `Invalid Unicode escape sequence: "${body.slice(position, position + 6)}".`);
}
/**
 * Reads four hexadecimal characters and returns the positive integer that 16bit
 * hexadecimal string represents. For example, "000f" will return 15, and "dead"
 * will return 57005.
 *
 * Returns a negative number if any char was not a valid hexadecimal digit.
 */ function read16BitHexCode(body, position) {
    // readHexDigit() returns -1 on error. ORing a negative value with any other
    // value always produces a negative value.
    return readHexDigit(body.charCodeAt(position)) << 12 | readHexDigit(body.charCodeAt(position + 1)) << 8 | readHexDigit(body.charCodeAt(position + 2)) << 4 | readHexDigit(body.charCodeAt(position + 3));
}
/**
 * Reads a hexadecimal character and returns its positive integer value (0-15).
 *
 * '0' becomes 0, '9' becomes 9
 * 'A' becomes 10, 'F' becomes 15
 * 'a' becomes 10, 'f' becomes 15
 *
 * Returns -1 if the provided character code was not a valid hexadecimal digit.
 *
 * HexDigit :: one of
 *   - `0` `1` `2` `3` `4` `5` `6` `7` `8` `9`
 *   - `A` `B` `C` `D` `E` `F`
 *   - `a` `b` `c` `d` `e` `f`
 */ function readHexDigit(code) {
    return code >= 0x0030 && code <= 0x0039 // 0-9
     ? code - 0x0030 : code >= 0x0041 && code <= 0x0046 // A-F
     ? code - 0x0037 : code >= 0x0061 && code <= 0x0066 // a-f
     ? code - 0x0057 : -1;
}
/**
 * | Escaped Character | Code Point | Character Name               |
 * | ----------------- | ---------- | ---------------------------- |
 * | `"`               | U+0022     | double quote                 |
 * | `\`               | U+005C     | reverse solidus (back slash) |
 * | `/`               | U+002F     | solidus (forward slash)      |
 * | `b`               | U+0008     | backspace                    |
 * | `f`               | U+000C     | form feed                    |
 * | `n`               | U+000A     | line feed (new line)         |
 * | `r`               | U+000D     | carriage return              |
 * | `t`               | U+0009     | horizontal tab               |
 */ function readEscapedCharacter(lexer, position) {
    const body = lexer.source.body;
    const code = body.charCodeAt(position + 1);
    switch(code){
        case 0x0022:
            // "
            return {
                value: '\u0022',
                size: 2
            };
        case 0x005c:
            // \
            return {
                value: '\u005c',
                size: 2
            };
        case 0x002f:
            // /
            return {
                value: '\u002f',
                size: 2
            };
        case 0x0062:
            // b
            return {
                value: '\u0008',
                size: 2
            };
        case 0x0066:
            // f
            return {
                value: '\u000c',
                size: 2
            };
        case 0x006e:
            // n
            return {
                value: '\u000a',
                size: 2
            };
        case 0x0072:
            // r
            return {
                value: '\u000d',
                size: 2
            };
        case 0x0074:
            // t
            return {
                value: '\u0009',
                size: 2
            };
    }
    throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$error$2f$syntaxError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["syntaxError"])(lexer.source, position, `Invalid character escape sequence: "${body.slice(position, position + 2)}".`);
}
/**
 * Reads a block string token from the source file.
 *
 * ```
 * StringValue ::
 *   - `"""` BlockStringCharacter* `"""`
 *
 * BlockStringCharacter ::
 *   - SourceCharacter but not `"""` or `\"""`
 *   - `\"""`
 * ```
 */ function readBlockString(lexer, start) {
    const body = lexer.source.body;
    const bodyLength = body.length;
    let lineStart = lexer.lineStart;
    let position = start + 3;
    let chunkStart = position;
    let currentLine = '';
    const blockLines = [];
    while(position < bodyLength){
        const code = body.charCodeAt(position); // Closing Triple-Quote (""")
        if (code === 0x0022 && body.charCodeAt(position + 1) === 0x0022 && body.charCodeAt(position + 2) === 0x0022) {
            currentLine += body.slice(chunkStart, position);
            blockLines.push(currentLine);
            const token = createToken(lexer, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].BLOCK_STRING, start, position + 3, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$blockString$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dedentBlockStringLines"])(blockLines).join('\n'));
            lexer.line += blockLines.length - 1;
            lexer.lineStart = lineStart;
            return token;
        } // Escaped Triple-Quote (\""")
        if (code === 0x005c && body.charCodeAt(position + 1) === 0x0022 && body.charCodeAt(position + 2) === 0x0022 && body.charCodeAt(position + 3) === 0x0022) {
            currentLine += body.slice(chunkStart, position);
            chunkStart = position + 1; // skip only slash
            position += 4;
            continue;
        } // LineTerminator
        if (code === 0x000a || code === 0x000d) {
            currentLine += body.slice(chunkStart, position);
            blockLines.push(currentLine);
            if (code === 0x000d && body.charCodeAt(position + 1) === 0x000a) {
                position += 2;
            } else {
                ++position;
            }
            currentLine = '';
            chunkStart = position;
            lineStart = position;
            continue;
        } // SourceCharacter
        if (isUnicodeScalarValue(code)) {
            ++position;
        } else if (isSupplementaryCodePoint(body, position)) {
            position += 2;
        } else {
            throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$error$2f$syntaxError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["syntaxError"])(lexer.source, position, `Invalid character within String: ${printCodePointAt(lexer, position)}.`);
        }
    }
    throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$error$2f$syntaxError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["syntaxError"])(lexer.source, position, 'Unterminated string.');
}
/**
 * Reads an alphanumeric + underscore name from the source.
 *
 * ```
 * Name ::
 *   - NameStart NameContinue* [lookahead != NameContinue]
 * ```
 */ function readName(lexer, start) {
    const body = lexer.source.body;
    const bodyLength = body.length;
    let position = start + 1;
    while(position < bodyLength){
        const code = body.charCodeAt(position);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$characterClasses$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNameContinue"])(code)) {
            ++position;
        } else {
            break;
        }
    }
    return createToken(lexer, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].NAME, start, position, body.slice(start, position));
}

})()),
"[project]/node_modules/.pnpm/graphql@16.9.0/node_modules/graphql/jsutils/instanceOf.mjs [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "instanceOf": ()=>instanceOf
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$jsutils$2f$inspect$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/graphql@16.9.0/node_modules/graphql/jsutils/inspect.mjs [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
/* c8 ignore next 3 */ const isProduction = globalThis.process && // eslint-disable-next-line no-undef
("TURBOPACK compile-time value", "development") === 'production';
const instanceOf = /* c8 ignore next 6 */ // FIXME: https://github.com/graphql/graphql-js/issues/2317
isProduction ? function instanceOf(value, constructor) {
    return value instanceof constructor;
} : function instanceOf(value, constructor) {
    if (value instanceof constructor) {
        return true;
    }
    if (typeof value === 'object' && value !== null) {
        var _value$constructor;
        // Prefer Symbol.toStringTag since it is immune to minification.
        const className = constructor.prototype[Symbol.toStringTag];
        const valueClassName = Symbol.toStringTag in value // @ts-expect-error TS bug see, https://github.com/microsoft/TypeScript/issues/38009
         ? value[Symbol.toStringTag] : (_value$constructor = value.constructor) === null || _value$constructor === void 0 ? void 0 : _value$constructor.name;
        if (className === valueClassName) {
            const stringifiedValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$jsutils$2f$inspect$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["inspect"])(value);
            throw new Error(`Cannot use ${className} "${stringifiedValue}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`);
        }
    }
    return false;
};

})()),
"[project]/node_modules/.pnpm/graphql@16.9.0/node_modules/graphql/language/source.mjs [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Source": ()=>Source,
    "isSource": ()=>isSource
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$jsutils$2f$devAssert$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/graphql@16.9.0/node_modules/graphql/jsutils/devAssert.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$jsutils$2f$inspect$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/graphql@16.9.0/node_modules/graphql/jsutils/inspect.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$jsutils$2f$instanceOf$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/graphql@16.9.0/node_modules/graphql/jsutils/instanceOf.mjs [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
class Source {
    constructor(body, name = 'GraphQL request', locationOffset = {
        line: 1,
        column: 1
    }){
        typeof body === 'string' || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$jsutils$2f$devAssert$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["devAssert"])(false, `Body must be a string. Received: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$jsutils$2f$inspect$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["inspect"])(body)}.`);
        this.body = body;
        this.name = name;
        this.locationOffset = locationOffset;
        this.locationOffset.line > 0 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$jsutils$2f$devAssert$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["devAssert"])(false, 'line in locationOffset is 1-indexed and must be positive.');
        this.locationOffset.column > 0 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$jsutils$2f$devAssert$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["devAssert"])(false, 'column in locationOffset is 1-indexed and must be positive.');
    }
    get [Symbol.toStringTag]() {
        return 'Source';
    }
}
function isSource(source) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$jsutils$2f$instanceOf$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["instanceOf"])(source, Source);
}

})()),
"[project]/node_modules/.pnpm/graphql@16.9.0/node_modules/graphql/language/parser.mjs [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Parser": ()=>Parser,
    "parse": ()=>parse,
    "parseConstValue": ()=>parseConstValue,
    "parseType": ()=>parseType,
    "parseValue": ()=>parseValue
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$error$2f$syntaxError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/graphql@16.9.0/node_modules/graphql/error/syntaxError.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$ast$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/graphql@16.9.0/node_modules/graphql/language/ast.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$directiveLocation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/graphql@16.9.0/node_modules/graphql/language/directiveLocation.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/graphql@16.9.0/node_modules/graphql/language/kinds.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$lexer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/graphql@16.9.0/node_modules/graphql/language/lexer.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$source$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/graphql@16.9.0/node_modules/graphql/language/source.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/graphql@16.9.0/node_modules/graphql/language/tokenKind.mjs [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
;
function parse(source, options) {
    const parser = new Parser(source, options);
    return parser.parseDocument();
}
function parseValue(source, options) {
    const parser = new Parser(source, options);
    parser.expectToken(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].SOF);
    const value = parser.parseValueLiteral(false);
    parser.expectToken(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].EOF);
    return value;
}
function parseConstValue(source, options) {
    const parser = new Parser(source, options);
    parser.expectToken(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].SOF);
    const value = parser.parseConstValueLiteral();
    parser.expectToken(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].EOF);
    return value;
}
function parseType(source, options) {
    const parser = new Parser(source, options);
    parser.expectToken(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].SOF);
    const type = parser.parseTypeReference();
    parser.expectToken(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].EOF);
    return type;
}
class Parser {
    constructor(source, options = {}){
        const sourceObj = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$source$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSource"])(source) ? source : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$source$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Source"](source);
        this._lexer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$lexer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Lexer"](sourceObj);
        this._options = options;
        this._tokenCounter = 0;
    }
    /**
   * Converts a name lex token into a name parse node.
   */ parseName() {
        const token = this.expectToken(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].NAME);
        return this.node(token, {
            kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].NAME,
            value: token.value
        });
    }
    /**
   * Document : Definition+
   */ parseDocument() {
        return this.node(this._lexer.token, {
            kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].DOCUMENT,
            definitions: this.many(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].SOF, this.parseDefinition, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].EOF)
        });
    }
    /**
   * Definition :
   *   - ExecutableDefinition
   *   - TypeSystemDefinition
   *   - TypeSystemExtension
   *
   * ExecutableDefinition :
   *   - OperationDefinition
   *   - FragmentDefinition
   *
   * TypeSystemDefinition :
   *   - SchemaDefinition
   *   - TypeDefinition
   *   - DirectiveDefinition
   *
   * TypeDefinition :
   *   - ScalarTypeDefinition
   *   - ObjectTypeDefinition
   *   - InterfaceTypeDefinition
   *   - UnionTypeDefinition
   *   - EnumTypeDefinition
   *   - InputObjectTypeDefinition
   */ parseDefinition() {
        if (this.peek(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].BRACE_L)) {
            return this.parseOperationDefinition();
        } // Many definitions begin with a description and require a lookahead.
        const hasDescription = this.peekDescription();
        const keywordToken = hasDescription ? this._lexer.lookahead() : this._lexer.token;
        if (keywordToken.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].NAME) {
            switch(keywordToken.value){
                case 'schema':
                    return this.parseSchemaDefinition();
                case 'scalar':
                    return this.parseScalarTypeDefinition();
                case 'type':
                    return this.parseObjectTypeDefinition();
                case 'interface':
                    return this.parseInterfaceTypeDefinition();
                case 'union':
                    return this.parseUnionTypeDefinition();
                case 'enum':
                    return this.parseEnumTypeDefinition();
                case 'input':
                    return this.parseInputObjectTypeDefinition();
                case 'directive':
                    return this.parseDirectiveDefinition();
            }
            if (hasDescription) {
                throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$error$2f$syntaxError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["syntaxError"])(this._lexer.source, this._lexer.token.start, 'Unexpected description, descriptions are supported only on type definitions.');
            }
            switch(keywordToken.value){
                case 'query':
                case 'mutation':
                case 'subscription':
                    return this.parseOperationDefinition();
                case 'fragment':
                    return this.parseFragmentDefinition();
                case 'extend':
                    return this.parseTypeSystemExtension();
            }
        }
        throw this.unexpected(keywordToken);
    }
    /**
   * OperationDefinition :
   *  - SelectionSet
   *  - OperationType Name? VariableDefinitions? Directives? SelectionSet
   */ parseOperationDefinition() {
        const start = this._lexer.token;
        if (this.peek(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].BRACE_L)) {
            return this.node(start, {
                kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].OPERATION_DEFINITION,
                operation: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$ast$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperationTypeNode"].QUERY,
                name: undefined,
                variableDefinitions: [],
                directives: [],
                selectionSet: this.parseSelectionSet()
            });
        }
        const operation = this.parseOperationType();
        let name;
        if (this.peek(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].NAME)) {
            name = this.parseName();
        }
        return this.node(start, {
            kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].OPERATION_DEFINITION,
            operation,
            name,
            variableDefinitions: this.parseVariableDefinitions(),
            directives: this.parseDirectives(false),
            selectionSet: this.parseSelectionSet()
        });
    }
    /**
   * OperationType : one of query mutation subscription
   */ parseOperationType() {
        const operationToken = this.expectToken(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].NAME);
        switch(operationToken.value){
            case 'query':
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$ast$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperationTypeNode"].QUERY;
            case 'mutation':
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$ast$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperationTypeNode"].MUTATION;
            case 'subscription':
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$ast$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperationTypeNode"].SUBSCRIPTION;
        }
        throw this.unexpected(operationToken);
    }
    /**
   * VariableDefinitions : ( VariableDefinition+ )
   */ parseVariableDefinitions() {
        return this.optionalMany(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].PAREN_L, this.parseVariableDefinition, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].PAREN_R);
    }
    /**
   * VariableDefinition : Variable : Type DefaultValue? Directives[Const]?
   */ parseVariableDefinition() {
        return this.node(this._lexer.token, {
            kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].VARIABLE_DEFINITION,
            variable: this.parseVariable(),
            type: (this.expectToken(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].COLON), this.parseTypeReference()),
            defaultValue: this.expectOptionalToken(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].EQUALS) ? this.parseConstValueLiteral() : undefined,
            directives: this.parseConstDirectives()
        });
    }
    /**
   * Variable : $ Name
   */ parseVariable() {
        const start = this._lexer.token;
        this.expectToken(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].DOLLAR);
        return this.node(start, {
            kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].VARIABLE,
            name: this.parseName()
        });
    }
    /**
   * ```
   * SelectionSet : { Selection+ }
   * ```
   */ parseSelectionSet() {
        return this.node(this._lexer.token, {
            kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].SELECTION_SET,
            selections: this.many(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].BRACE_L, this.parseSelection, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].BRACE_R)
        });
    }
    /**
   * Selection :
   *   - Field
   *   - FragmentSpread
   *   - InlineFragment
   */ parseSelection() {
        return this.peek(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].SPREAD) ? this.parseFragment() : this.parseField();
    }
    /**
   * Field : Alias? Name Arguments? Directives? SelectionSet?
   *
   * Alias : Name :
   */ parseField() {
        const start = this._lexer.token;
        const nameOrAlias = this.parseName();
        let alias;
        let name;
        if (this.expectOptionalToken(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].COLON)) {
            alias = nameOrAlias;
            name = this.parseName();
        } else {
            name = nameOrAlias;
        }
        return this.node(start, {
            kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].FIELD,
            alias,
            name,
            arguments: this.parseArguments(false),
            directives: this.parseDirectives(false),
            selectionSet: this.peek(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].BRACE_L) ? this.parseSelectionSet() : undefined
        });
    }
    /**
   * Arguments[Const] : ( Argument[?Const]+ )
   */ parseArguments(isConst) {
        const item = isConst ? this.parseConstArgument : this.parseArgument;
        return this.optionalMany(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].PAREN_L, item, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].PAREN_R);
    }
    /**
   * Argument[Const] : Name : Value[?Const]
   */ parseArgument(isConst = false) {
        const start = this._lexer.token;
        const name = this.parseName();
        this.expectToken(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].COLON);
        return this.node(start, {
            kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].ARGUMENT,
            name,
            value: this.parseValueLiteral(isConst)
        });
    }
    parseConstArgument() {
        return this.parseArgument(true);
    }
    /**
   * Corresponds to both FragmentSpread and InlineFragment in the spec.
   *
   * FragmentSpread : ... FragmentName Directives?
   *
   * InlineFragment : ... TypeCondition? Directives? SelectionSet
   */ parseFragment() {
        const start = this._lexer.token;
        this.expectToken(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].SPREAD);
        const hasTypeCondition = this.expectOptionalKeyword('on');
        if (!hasTypeCondition && this.peek(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].NAME)) {
            return this.node(start, {
                kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].FRAGMENT_SPREAD,
                name: this.parseFragmentName(),
                directives: this.parseDirectives(false)
            });
        }
        return this.node(start, {
            kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].INLINE_FRAGMENT,
            typeCondition: hasTypeCondition ? this.parseNamedType() : undefined,
            directives: this.parseDirectives(false),
            selectionSet: this.parseSelectionSet()
        });
    }
    /**
   * FragmentDefinition :
   *   - fragment FragmentName on TypeCondition Directives? SelectionSet
   *
   * TypeCondition : NamedType
   */ parseFragmentDefinition() {
        const start = this._lexer.token;
        this.expectKeyword('fragment'); // Legacy support for defining variables within fragments changes
        // the grammar of FragmentDefinition:
        //   - fragment FragmentName VariableDefinitions? on TypeCondition Directives? SelectionSet
        if (this._options.allowLegacyFragmentVariables === true) {
            return this.node(start, {
                kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].FRAGMENT_DEFINITION,
                name: this.parseFragmentName(),
                variableDefinitions: this.parseVariableDefinitions(),
                typeCondition: (this.expectKeyword('on'), this.parseNamedType()),
                directives: this.parseDirectives(false),
                selectionSet: this.parseSelectionSet()
            });
        }
        return this.node(start, {
            kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].FRAGMENT_DEFINITION,
            name: this.parseFragmentName(),
            typeCondition: (this.expectKeyword('on'), this.parseNamedType()),
            directives: this.parseDirectives(false),
            selectionSet: this.parseSelectionSet()
        });
    }
    /**
   * FragmentName : Name but not `on`
   */ parseFragmentName() {
        if (this._lexer.token.value === 'on') {
            throw this.unexpected();
        }
        return this.parseName();
    }
    /**
   * Value[Const] :
   *   - [~Const] Variable
   *   - IntValue
   *   - FloatValue
   *   - StringValue
   *   - BooleanValue
   *   - NullValue
   *   - EnumValue
   *   - ListValue[?Const]
   *   - ObjectValue[?Const]
   *
   * BooleanValue : one of `true` `false`
   *
   * NullValue : `null`
   *
   * EnumValue : Name but not `true`, `false` or `null`
   */ parseValueLiteral(isConst) {
        const token = this._lexer.token;
        switch(token.kind){
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].BRACKET_L:
                return this.parseList(isConst);
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].BRACE_L:
                return this.parseObject(isConst);
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].INT:
                this.advanceLexer();
                return this.node(token, {
                    kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].INT,
                    value: token.value
                });
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].FLOAT:
                this.advanceLexer();
                return this.node(token, {
                    kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].FLOAT,
                    value: token.value
                });
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].STRING:
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].BLOCK_STRING:
                return this.parseStringLiteral();
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].NAME:
                this.advanceLexer();
                switch(token.value){
                    case 'true':
                        return this.node(token, {
                            kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].BOOLEAN,
                            value: true
                        });
                    case 'false':
                        return this.node(token, {
                            kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].BOOLEAN,
                            value: false
                        });
                    case 'null':
                        return this.node(token, {
                            kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].NULL
                        });
                    default:
                        return this.node(token, {
                            kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].ENUM,
                            value: token.value
                        });
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].DOLLAR:
                if (isConst) {
                    this.expectToken(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].DOLLAR);
                    if (this._lexer.token.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].NAME) {
                        const varName = this._lexer.token.value;
                        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$error$2f$syntaxError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["syntaxError"])(this._lexer.source, token.start, `Unexpected variable "$${varName}" in constant value.`);
                    } else {
                        throw this.unexpected(token);
                    }
                }
                return this.parseVariable();
            default:
                throw this.unexpected();
        }
    }
    parseConstValueLiteral() {
        return this.parseValueLiteral(true);
    }
    parseStringLiteral() {
        const token = this._lexer.token;
        this.advanceLexer();
        return this.node(token, {
            kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].STRING,
            value: token.value,
            block: token.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].BLOCK_STRING
        });
    }
    /**
   * ListValue[Const] :
   *   - [ ]
   *   - [ Value[?Const]+ ]
   */ parseList(isConst) {
        const item = ()=>this.parseValueLiteral(isConst);
        return this.node(this._lexer.token, {
            kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].LIST,
            values: this.any(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].BRACKET_L, item, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].BRACKET_R)
        });
    }
    /**
   * ```
   * ObjectValue[Const] :
   *   - { }
   *   - { ObjectField[?Const]+ }
   * ```
   */ parseObject(isConst) {
        const item = ()=>this.parseObjectField(isConst);
        return this.node(this._lexer.token, {
            kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].OBJECT,
            fields: this.any(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].BRACE_L, item, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].BRACE_R)
        });
    }
    /**
   * ObjectField[Const] : Name : Value[?Const]
   */ parseObjectField(isConst) {
        const start = this._lexer.token;
        const name = this.parseName();
        this.expectToken(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].COLON);
        return this.node(start, {
            kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].OBJECT_FIELD,
            name,
            value: this.parseValueLiteral(isConst)
        });
    }
    /**
   * Directives[Const] : Directive[?Const]+
   */ parseDirectives(isConst) {
        const directives = [];
        while(this.peek(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].AT)){
            directives.push(this.parseDirective(isConst));
        }
        return directives;
    }
    parseConstDirectives() {
        return this.parseDirectives(true);
    }
    /**
   * ```
   * Directive[Const] : @ Name Arguments[?Const]?
   * ```
   */ parseDirective(isConst) {
        const start = this._lexer.token;
        this.expectToken(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].AT);
        return this.node(start, {
            kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].DIRECTIVE,
            name: this.parseName(),
            arguments: this.parseArguments(isConst)
        });
    }
    /**
   * Type :
   *   - NamedType
   *   - ListType
   *   - NonNullType
   */ parseTypeReference() {
        const start = this._lexer.token;
        let type;
        if (this.expectOptionalToken(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].BRACKET_L)) {
            const innerType = this.parseTypeReference();
            this.expectToken(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].BRACKET_R);
            type = this.node(start, {
                kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].LIST_TYPE,
                type: innerType
            });
        } else {
            type = this.parseNamedType();
        }
        if (this.expectOptionalToken(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].BANG)) {
            return this.node(start, {
                kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].NON_NULL_TYPE,
                type
            });
        }
        return type;
    }
    /**
   * NamedType : Name
   */ parseNamedType() {
        return this.node(this._lexer.token, {
            kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].NAMED_TYPE,
            name: this.parseName()
        });
    }
    peekDescription() {
        return this.peek(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].STRING) || this.peek(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].BLOCK_STRING);
    }
    /**
   * Description : StringValue
   */ parseDescription() {
        if (this.peekDescription()) {
            return this.parseStringLiteral();
        }
    }
    /**
   * ```
   * SchemaDefinition : Description? schema Directives[Const]? { OperationTypeDefinition+ }
   * ```
   */ parseSchemaDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        this.expectKeyword('schema');
        const directives = this.parseConstDirectives();
        const operationTypes = this.many(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].BRACE_L, this.parseOperationTypeDefinition, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].BRACE_R);
        return this.node(start, {
            kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].SCHEMA_DEFINITION,
            description,
            directives,
            operationTypes
        });
    }
    /**
   * OperationTypeDefinition : OperationType : NamedType
   */ parseOperationTypeDefinition() {
        const start = this._lexer.token;
        const operation = this.parseOperationType();
        this.expectToken(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].COLON);
        const type = this.parseNamedType();
        return this.node(start, {
            kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].OPERATION_TYPE_DEFINITION,
            operation,
            type
        });
    }
    /**
   * ScalarTypeDefinition : Description? scalar Name Directives[Const]?
   */ parseScalarTypeDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        this.expectKeyword('scalar');
        const name = this.parseName();
        const directives = this.parseConstDirectives();
        return this.node(start, {
            kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].SCALAR_TYPE_DEFINITION,
            description,
            name,
            directives
        });
    }
    /**
   * ObjectTypeDefinition :
   *   Description?
   *   type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition?
   */ parseObjectTypeDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        this.expectKeyword('type');
        const name = this.parseName();
        const interfaces = this.parseImplementsInterfaces();
        const directives = this.parseConstDirectives();
        const fields = this.parseFieldsDefinition();
        return this.node(start, {
            kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].OBJECT_TYPE_DEFINITION,
            description,
            name,
            interfaces,
            directives,
            fields
        });
    }
    /**
   * ImplementsInterfaces :
   *   - implements `&`? NamedType
   *   - ImplementsInterfaces & NamedType
   */ parseImplementsInterfaces() {
        return this.expectOptionalKeyword('implements') ? this.delimitedMany(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].AMP, this.parseNamedType) : [];
    }
    /**
   * ```
   * FieldsDefinition : { FieldDefinition+ }
   * ```
   */ parseFieldsDefinition() {
        return this.optionalMany(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].BRACE_L, this.parseFieldDefinition, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].BRACE_R);
    }
    /**
   * FieldDefinition :
   *   - Description? Name ArgumentsDefinition? : Type Directives[Const]?
   */ parseFieldDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        const name = this.parseName();
        const args = this.parseArgumentDefs();
        this.expectToken(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].COLON);
        const type = this.parseTypeReference();
        const directives = this.parseConstDirectives();
        return this.node(start, {
            kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].FIELD_DEFINITION,
            description,
            name,
            arguments: args,
            type,
            directives
        });
    }
    /**
   * ArgumentsDefinition : ( InputValueDefinition+ )
   */ parseArgumentDefs() {
        return this.optionalMany(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].PAREN_L, this.parseInputValueDef, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].PAREN_R);
    }
    /**
   * InputValueDefinition :
   *   - Description? Name : Type DefaultValue? Directives[Const]?
   */ parseInputValueDef() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        const name = this.parseName();
        this.expectToken(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].COLON);
        const type = this.parseTypeReference();
        let defaultValue;
        if (this.expectOptionalToken(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].EQUALS)) {
            defaultValue = this.parseConstValueLiteral();
        }
        const directives = this.parseConstDirectives();
        return this.node(start, {
            kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].INPUT_VALUE_DEFINITION,
            description,
            name,
            type,
            defaultValue,
            directives
        });
    }
    /**
   * InterfaceTypeDefinition :
   *   - Description? interface Name Directives[Const]? FieldsDefinition?
   */ parseInterfaceTypeDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        this.expectKeyword('interface');
        const name = this.parseName();
        const interfaces = this.parseImplementsInterfaces();
        const directives = this.parseConstDirectives();
        const fields = this.parseFieldsDefinition();
        return this.node(start, {
            kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].INTERFACE_TYPE_DEFINITION,
            description,
            name,
            interfaces,
            directives,
            fields
        });
    }
    /**
   * UnionTypeDefinition :
   *   - Description? union Name Directives[Const]? UnionMemberTypes?
   */ parseUnionTypeDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        this.expectKeyword('union');
        const name = this.parseName();
        const directives = this.parseConstDirectives();
        const types = this.parseUnionMemberTypes();
        return this.node(start, {
            kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].UNION_TYPE_DEFINITION,
            description,
            name,
            directives,
            types
        });
    }
    /**
   * UnionMemberTypes :
   *   - = `|`? NamedType
   *   - UnionMemberTypes | NamedType
   */ parseUnionMemberTypes() {
        return this.expectOptionalToken(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].EQUALS) ? this.delimitedMany(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].PIPE, this.parseNamedType) : [];
    }
    /**
   * EnumTypeDefinition :
   *   - Description? enum Name Directives[Const]? EnumValuesDefinition?
   */ parseEnumTypeDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        this.expectKeyword('enum');
        const name = this.parseName();
        const directives = this.parseConstDirectives();
        const values = this.parseEnumValuesDefinition();
        return this.node(start, {
            kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].ENUM_TYPE_DEFINITION,
            description,
            name,
            directives,
            values
        });
    }
    /**
   * ```
   * EnumValuesDefinition : { EnumValueDefinition+ }
   * ```
   */ parseEnumValuesDefinition() {
        return this.optionalMany(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].BRACE_L, this.parseEnumValueDefinition, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].BRACE_R);
    }
    /**
   * EnumValueDefinition : Description? EnumValue Directives[Const]?
   */ parseEnumValueDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        const name = this.parseEnumValueName();
        const directives = this.parseConstDirectives();
        return this.node(start, {
            kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].ENUM_VALUE_DEFINITION,
            description,
            name,
            directives
        });
    }
    /**
   * EnumValue : Name but not `true`, `false` or `null`
   */ parseEnumValueName() {
        if (this._lexer.token.value === 'true' || this._lexer.token.value === 'false' || this._lexer.token.value === 'null') {
            throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$error$2f$syntaxError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["syntaxError"])(this._lexer.source, this._lexer.token.start, `${getTokenDesc(this._lexer.token)} is reserved and cannot be used for an enum value.`);
        }
        return this.parseName();
    }
    /**
   * InputObjectTypeDefinition :
   *   - Description? input Name Directives[Const]? InputFieldsDefinition?
   */ parseInputObjectTypeDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        this.expectKeyword('input');
        const name = this.parseName();
        const directives = this.parseConstDirectives();
        const fields = this.parseInputFieldsDefinition();
        return this.node(start, {
            kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].INPUT_OBJECT_TYPE_DEFINITION,
            description,
            name,
            directives,
            fields
        });
    }
    /**
   * ```
   * InputFieldsDefinition : { InputValueDefinition+ }
   * ```
   */ parseInputFieldsDefinition() {
        return this.optionalMany(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].BRACE_L, this.parseInputValueDef, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].BRACE_R);
    }
    /**
   * TypeSystemExtension :
   *   - SchemaExtension
   *   - TypeExtension
   *
   * TypeExtension :
   *   - ScalarTypeExtension
   *   - ObjectTypeExtension
   *   - InterfaceTypeExtension
   *   - UnionTypeExtension
   *   - EnumTypeExtension
   *   - InputObjectTypeDefinition
   */ parseTypeSystemExtension() {
        const keywordToken = this._lexer.lookahead();
        if (keywordToken.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].NAME) {
            switch(keywordToken.value){
                case 'schema':
                    return this.parseSchemaExtension();
                case 'scalar':
                    return this.parseScalarTypeExtension();
                case 'type':
                    return this.parseObjectTypeExtension();
                case 'interface':
                    return this.parseInterfaceTypeExtension();
                case 'union':
                    return this.parseUnionTypeExtension();
                case 'enum':
                    return this.parseEnumTypeExtension();
                case 'input':
                    return this.parseInputObjectTypeExtension();
            }
        }
        throw this.unexpected(keywordToken);
    }
    /**
   * ```
   * SchemaExtension :
   *  - extend schema Directives[Const]? { OperationTypeDefinition+ }
   *  - extend schema Directives[Const]
   * ```
   */ parseSchemaExtension() {
        const start = this._lexer.token;
        this.expectKeyword('extend');
        this.expectKeyword('schema');
        const directives = this.parseConstDirectives();
        const operationTypes = this.optionalMany(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].BRACE_L, this.parseOperationTypeDefinition, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].BRACE_R);
        if (directives.length === 0 && operationTypes.length === 0) {
            throw this.unexpected();
        }
        return this.node(start, {
            kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].SCHEMA_EXTENSION,
            directives,
            operationTypes
        });
    }
    /**
   * ScalarTypeExtension :
   *   - extend scalar Name Directives[Const]
   */ parseScalarTypeExtension() {
        const start = this._lexer.token;
        this.expectKeyword('extend');
        this.expectKeyword('scalar');
        const name = this.parseName();
        const directives = this.parseConstDirectives();
        if (directives.length === 0) {
            throw this.unexpected();
        }
        return this.node(start, {
            kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].SCALAR_TYPE_EXTENSION,
            name,
            directives
        });
    }
    /**
   * ObjectTypeExtension :
   *  - extend type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
   *  - extend type Name ImplementsInterfaces? Directives[Const]
   *  - extend type Name ImplementsInterfaces
   */ parseObjectTypeExtension() {
        const start = this._lexer.token;
        this.expectKeyword('extend');
        this.expectKeyword('type');
        const name = this.parseName();
        const interfaces = this.parseImplementsInterfaces();
        const directives = this.parseConstDirectives();
        const fields = this.parseFieldsDefinition();
        if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) {
            throw this.unexpected();
        }
        return this.node(start, {
            kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].OBJECT_TYPE_EXTENSION,
            name,
            interfaces,
            directives,
            fields
        });
    }
    /**
   * InterfaceTypeExtension :
   *  - extend interface Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
   *  - extend interface Name ImplementsInterfaces? Directives[Const]
   *  - extend interface Name ImplementsInterfaces
   */ parseInterfaceTypeExtension() {
        const start = this._lexer.token;
        this.expectKeyword('extend');
        this.expectKeyword('interface');
        const name = this.parseName();
        const interfaces = this.parseImplementsInterfaces();
        const directives = this.parseConstDirectives();
        const fields = this.parseFieldsDefinition();
        if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) {
            throw this.unexpected();
        }
        return this.node(start, {
            kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].INTERFACE_TYPE_EXTENSION,
            name,
            interfaces,
            directives,
            fields
        });
    }
    /**
   * UnionTypeExtension :
   *   - extend union Name Directives[Const]? UnionMemberTypes
   *   - extend union Name Directives[Const]
   */ parseUnionTypeExtension() {
        const start = this._lexer.token;
        this.expectKeyword('extend');
        this.expectKeyword('union');
        const name = this.parseName();
        const directives = this.parseConstDirectives();
        const types = this.parseUnionMemberTypes();
        if (directives.length === 0 && types.length === 0) {
            throw this.unexpected();
        }
        return this.node(start, {
            kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].UNION_TYPE_EXTENSION,
            name,
            directives,
            types
        });
    }
    /**
   * EnumTypeExtension :
   *   - extend enum Name Directives[Const]? EnumValuesDefinition
   *   - extend enum Name Directives[Const]
   */ parseEnumTypeExtension() {
        const start = this._lexer.token;
        this.expectKeyword('extend');
        this.expectKeyword('enum');
        const name = this.parseName();
        const directives = this.parseConstDirectives();
        const values = this.parseEnumValuesDefinition();
        if (directives.length === 0 && values.length === 0) {
            throw this.unexpected();
        }
        return this.node(start, {
            kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].ENUM_TYPE_EXTENSION,
            name,
            directives,
            values
        });
    }
    /**
   * InputObjectTypeExtension :
   *   - extend input Name Directives[Const]? InputFieldsDefinition
   *   - extend input Name Directives[Const]
   */ parseInputObjectTypeExtension() {
        const start = this._lexer.token;
        this.expectKeyword('extend');
        this.expectKeyword('input');
        const name = this.parseName();
        const directives = this.parseConstDirectives();
        const fields = this.parseInputFieldsDefinition();
        if (directives.length === 0 && fields.length === 0) {
            throw this.unexpected();
        }
        return this.node(start, {
            kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].INPUT_OBJECT_TYPE_EXTENSION,
            name,
            directives,
            fields
        });
    }
    /**
   * ```
   * DirectiveDefinition :
   *   - Description? directive @ Name ArgumentsDefinition? `repeatable`? on DirectiveLocations
   * ```
   */ parseDirectiveDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        this.expectKeyword('directive');
        this.expectToken(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].AT);
        const name = this.parseName();
        const args = this.parseArgumentDefs();
        const repeatable = this.expectOptionalKeyword('repeatable');
        this.expectKeyword('on');
        const locations = this.parseDirectiveLocations();
        return this.node(start, {
            kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].DIRECTIVE_DEFINITION,
            description,
            name,
            arguments: args,
            repeatable,
            locations
        });
    }
    /**
   * DirectiveLocations :
   *   - `|`? DirectiveLocation
   *   - DirectiveLocations | DirectiveLocation
   */ parseDirectiveLocations() {
        return this.delimitedMany(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].PIPE, this.parseDirectiveLocation);
    }
    /*
   * DirectiveLocation :
   *   - ExecutableDirectiveLocation
   *   - TypeSystemDirectiveLocation
   *
   * ExecutableDirectiveLocation : one of
   *   `QUERY`
   *   `MUTATION`
   *   `SUBSCRIPTION`
   *   `FIELD`
   *   `FRAGMENT_DEFINITION`
   *   `FRAGMENT_SPREAD`
   *   `INLINE_FRAGMENT`
   *
   * TypeSystemDirectiveLocation : one of
   *   `SCHEMA`
   *   `SCALAR`
   *   `OBJECT`
   *   `FIELD_DEFINITION`
   *   `ARGUMENT_DEFINITION`
   *   `INTERFACE`
   *   `UNION`
   *   `ENUM`
   *   `ENUM_VALUE`
   *   `INPUT_OBJECT`
   *   `INPUT_FIELD_DEFINITION`
   */ parseDirectiveLocation() {
        const start = this._lexer.token;
        const name = this.parseName();
        if (Object.prototype.hasOwnProperty.call(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$directiveLocation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DirectiveLocation"], name.value)) {
            return name;
        }
        throw this.unexpected(start);
    }
    /**
   * Returns a node that, if configured to do so, sets a "loc" field as a
   * location object, used to identify the place in the source that created a
   * given parsed object.
   */ node(startToken, node) {
        if (this._options.noLocation !== true) {
            node.loc = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$ast$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Location"](startToken, this._lexer.lastToken, this._lexer.source);
        }
        return node;
    }
    /**
   * Determines if the next token is of a given kind
   */ peek(kind) {
        return this._lexer.token.kind === kind;
    }
    /**
   * If the next token is of the given kind, return that token after advancing the lexer.
   * Otherwise, do not change the parser state and throw an error.
   */ expectToken(kind) {
        const token = this._lexer.token;
        if (token.kind === kind) {
            this.advanceLexer();
            return token;
        }
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$error$2f$syntaxError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["syntaxError"])(this._lexer.source, token.start, `Expected ${getTokenKindDesc(kind)}, found ${getTokenDesc(token)}.`);
    }
    /**
   * If the next token is of the given kind, return "true" after advancing the lexer.
   * Otherwise, do not change the parser state and return "false".
   */ expectOptionalToken(kind) {
        const token = this._lexer.token;
        if (token.kind === kind) {
            this.advanceLexer();
            return true;
        }
        return false;
    }
    /**
   * If the next token is a given keyword, advance the lexer.
   * Otherwise, do not change the parser state and throw an error.
   */ expectKeyword(value) {
        const token = this._lexer.token;
        if (token.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].NAME && token.value === value) {
            this.advanceLexer();
        } else {
            throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$error$2f$syntaxError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["syntaxError"])(this._lexer.source, token.start, `Expected "${value}", found ${getTokenDesc(token)}.`);
        }
    }
    /**
   * If the next token is a given keyword, return "true" after advancing the lexer.
   * Otherwise, do not change the parser state and return "false".
   */ expectOptionalKeyword(value) {
        const token = this._lexer.token;
        if (token.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].NAME && token.value === value) {
            this.advanceLexer();
            return true;
        }
        return false;
    }
    /**
   * Helper function for creating an error when an unexpected lexed token is encountered.
   */ unexpected(atToken) {
        const token = atToken !== null && atToken !== void 0 ? atToken : this._lexer.token;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$error$2f$syntaxError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["syntaxError"])(this._lexer.source, token.start, `Unexpected ${getTokenDesc(token)}.`);
    }
    /**
   * Returns a possibly empty list of parse nodes, determined by the parseFn.
   * This list begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */ any(openKind, parseFn, closeKind) {
        this.expectToken(openKind);
        const nodes = [];
        while(!this.expectOptionalToken(closeKind)){
            nodes.push(parseFn.call(this));
        }
        return nodes;
    }
    /**
   * Returns a list of parse nodes, determined by the parseFn.
   * It can be empty only if open token is missing otherwise it will always return non-empty list
   * that begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */ optionalMany(openKind, parseFn, closeKind) {
        if (this.expectOptionalToken(openKind)) {
            const nodes = [];
            do {
                nodes.push(parseFn.call(this));
            }while (!this.expectOptionalToken(closeKind))
            return nodes;
        }
        return [];
    }
    /**
   * Returns a non-empty list of parse nodes, determined by the parseFn.
   * This list begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */ many(openKind, parseFn, closeKind) {
        this.expectToken(openKind);
        const nodes = [];
        do {
            nodes.push(parseFn.call(this));
        }while (!this.expectOptionalToken(closeKind))
        return nodes;
    }
    /**
   * Returns a non-empty list of parse nodes, determined by the parseFn.
   * This list may begin with a lex token of delimiterKind followed by items separated by lex tokens of tokenKind.
   * Advances the parser to the next lex token after last item in the list.
   */ delimitedMany(delimiterKind, parseFn) {
        this.expectOptionalToken(delimiterKind);
        const nodes = [];
        do {
            nodes.push(parseFn.call(this));
        }while (this.expectOptionalToken(delimiterKind))
        return nodes;
    }
    advanceLexer() {
        const { maxTokens } = this._options;
        const token = this._lexer.advance();
        if (maxTokens !== undefined && token.kind !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$tokenKind$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenKind"].EOF) {
            ++this._tokenCounter;
            if (this._tokenCounter > maxTokens) {
                throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$error$2f$syntaxError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["syntaxError"])(this._lexer.source, token.start, `Document contains more that ${maxTokens} tokens. Parsing aborted.`);
            }
        }
    }
}
/**
 * A helper function to describe a token as a string for debugging.
 */ function getTokenDesc(token) {
    const value = token.value;
    return getTokenKindDesc(token.kind) + (value != null ? ` "${value}"` : '');
}
/**
 * A helper function to describe a token kind as a string for debugging.
 */ function getTokenKindDesc(kind) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$lexer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPunctuatorTokenKind"])(kind) ? `"${kind}"` : kind;
}

})()),
"[project]/node_modules/.pnpm/graphql@16.9.0/node_modules/graphql/language/predicates.mjs [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "isConstValueNode": ()=>isConstValueNode,
    "isDefinitionNode": ()=>isDefinitionNode,
    "isExecutableDefinitionNode": ()=>isExecutableDefinitionNode,
    "isSelectionNode": ()=>isSelectionNode,
    "isTypeDefinitionNode": ()=>isTypeDefinitionNode,
    "isTypeExtensionNode": ()=>isTypeExtensionNode,
    "isTypeNode": ()=>isTypeNode,
    "isTypeSystemDefinitionNode": ()=>isTypeSystemDefinitionNode,
    "isTypeSystemExtensionNode": ()=>isTypeSystemExtensionNode,
    "isValueNode": ()=>isValueNode
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/graphql@16.9.0/node_modules/graphql/language/kinds.mjs [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
function isDefinitionNode(node) {
    return isExecutableDefinitionNode(node) || isTypeSystemDefinitionNode(node) || isTypeSystemExtensionNode(node);
}
function isExecutableDefinitionNode(node) {
    return node.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].OPERATION_DEFINITION || node.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].FRAGMENT_DEFINITION;
}
function isSelectionNode(node) {
    return node.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].FIELD || node.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].FRAGMENT_SPREAD || node.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].INLINE_FRAGMENT;
}
function isValueNode(node) {
    return node.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].VARIABLE || node.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].INT || node.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].FLOAT || node.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].STRING || node.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].BOOLEAN || node.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].NULL || node.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].ENUM || node.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].LIST || node.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].OBJECT;
}
function isConstValueNode(node) {
    return isValueNode(node) && (node.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].LIST ? node.values.some(isConstValueNode) : node.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].OBJECT ? node.fields.some((field)=>isConstValueNode(field.value)) : node.kind !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].VARIABLE);
}
function isTypeNode(node) {
    return node.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].NAMED_TYPE || node.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].LIST_TYPE || node.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].NON_NULL_TYPE;
}
function isTypeSystemDefinitionNode(node) {
    return node.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].SCHEMA_DEFINITION || isTypeDefinitionNode(node) || node.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].DIRECTIVE_DEFINITION;
}
function isTypeDefinitionNode(node) {
    return node.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].SCALAR_TYPE_DEFINITION || node.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].OBJECT_TYPE_DEFINITION || node.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].INTERFACE_TYPE_DEFINITION || node.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].UNION_TYPE_DEFINITION || node.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].ENUM_TYPE_DEFINITION || node.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].INPUT_OBJECT_TYPE_DEFINITION;
}
function isTypeSystemExtensionNode(node) {
    return node.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].SCHEMA_EXTENSION || isTypeExtensionNode(node);
}
function isTypeExtensionNode(node) {
    return node.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].SCALAR_TYPE_EXTENSION || node.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].OBJECT_TYPE_EXTENSION || node.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].INTERFACE_TYPE_EXTENSION || node.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].UNION_TYPE_EXTENSION || node.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].ENUM_TYPE_EXTENSION || node.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].INPUT_OBJECT_TYPE_EXTENSION;
}

})()),

};

//# sourceMappingURL=10fe1_graphql_09af81._.js.map